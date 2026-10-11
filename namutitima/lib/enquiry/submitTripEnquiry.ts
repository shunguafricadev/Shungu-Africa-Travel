import crypto from "node:crypto";

import { activities } from "@/data/activities";
import { accommodations } from "@/data/accommodations";
import { getPackagePricePerPerson, packages } from "@/data/packages";
import { transfers } from "@/data/transfers";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import {
  sendTripEnquiryConfirmation,
  sendTripEnquiryNotification,
} from "@/lib/email/sendTripEnquiryEmails";

type TripRequestItem = {
  type: "activity" | "package" | "special" | "accommodation" | "transfer";
  slug: string;
  details?: {
    date?: string;
    adults?: number;
    children?: number;
    checkIn?: string;
    checkOut?: string;
    guests?: number;
    passengers?: number;
  };
};

type TripItemPricing = {
  currency: string;
  unitAmount?: number;
  quantity?: number;
  totalAmount: number;
  label: string;
};

type ResolvedTripItem = TripRequestItem & {
  name: string;
  pricing?: TripItemPricing;
};

export type TripEnquiryRequest = {
  items: TripRequestItem[];
  travelDate?: string;
  returnDate?: string;
  adults?: number;
  children?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country?: string;
  message?: string;
};

export class TripEnquiryValidationError extends Error {}

export class TripEnquiryPersistenceError extends Error {}

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function reference() {
  return `SAT-${crypto.randomBytes(4).toString("hex").toUpperCase()}`;
}

function isTripItem(value: unknown): value is TripRequestItem {
  if (!value || typeof value !== "object") {
    return false;
  }

  const item = value as Partial<TripRequestItem>;
  return (
    ["activity", "package", "special", "accommodation", "transfer"].includes(item.type ?? "") &&
    typeof item.slug === "string" &&
    item.slug.trim().length > 0 &&
    (item.details === undefined || (typeof item.details === "object" && item.details !== null))
  );
}

function isDate(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().startsWith(value);
}

function nightsBetween(checkIn: string, checkOut: string) {
  const start = new Date(`${checkIn}T00:00:00Z`).getTime();
  const end = new Date(`${checkOut}T00:00:00Z`).getTime();
  return Math.round((end - start) / (24 * 60 * 60 * 1000));
}

export async function submitTripEnquiry(body: TripEnquiryRequest) {
  const items = Array.isArray(body.items) ? body.items : [];
  const firstName = clean(body.firstName, 100);
  const lastName = clean(body.lastName, 100);
  const email = clean(body.email, 254).toLowerCase();
  const phone = clean(body.phone, 40);
  const message = clean(body.message, 2000);
  const country = clean(body.country, 100);

  if (items.length === 0 || items.length > 30) {
    throw new TripEnquiryValidationError(
      "Please add at least one item to your trip.",
    );
  }

  if (!items.every(isTripItem)) {
    throw new TripEnquiryValidationError(
      "One or more selected trip items are invalid.",
    );
  }

  if (!firstName || !lastName || !email || !phone) {
    throw new TripEnquiryValidationError(
      "Please complete all required fields.",
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new TripEnquiryValidationError(
      "Please provide a valid email address.",
    );
  }

  const resolved: ResolvedTripItem[] = items.map((rawItem) => {
    const item: TripRequestItem = {
      ...rawItem,
      type: rawItem.type === "special" ? "package" : rawItem.type,
    };
    const product =
      item.type === "activity"
        ? activities.find((entry) => entry.slug === item.slug)
        : item.type === "package"
          ? packages.find((entry) => entry.slug === item.slug)
          : item.type === "accommodation"
            ? accommodations.find((entry) => entry.slug === item.slug)
            : transfers.find((entry) => entry.slug === item.slug);

    if (!product) {
      throw new TripEnquiryValidationError(
        `The selected ${item.type} could not be found.`,
      );
    }

    const details = item.details;

    if (item.type === "activity" || item.type === "package") {
      if (
        !isDate(details?.date) ||
        typeof details.adults !== "number" ||
        !Number.isInteger(details.adults) ||
        details.adults < 1 ||
        details.adults > 12 ||
        typeof details.children !== "number" ||
        !Number.isInteger(details.children) ||
        details.children < 0 ||
        details.children > 12 ||
        details.adults + details.children > 12
      ) {
        throw new TripEnquiryValidationError(
          `Please complete the date and participants for ${product.name}.`,
        );
      }
    }

    if (item.type === "accommodation") {
      if (
        !isDate(details?.checkIn) ||
        !isDate(details.checkOut) ||
        details.checkOut <= details.checkIn ||
        typeof details.guests !== "number" ||
        !Number.isInteger(details.guests) ||
        details.guests < 1 ||
        details.guests > 12
      ) {
        throw new TripEnquiryValidationError(
          `Please complete the check-in, check-out and guests for ${product.name}.`,
        );
      }
    }

    if (item.type === "transfer") {
      if (
        !isDate(details?.date) ||
        typeof details.passengers !== "number" ||
        !Number.isInteger(details.passengers) ||
        details.passengers < 1 ||
        details.passengers > 12
      ) {
        throw new TripEnquiryValidationError(
          `Please complete the date and passengers for ${product.name}.`,
        );
      }
    }

    let pricing: TripItemPricing | undefined;

    if (item.type === "activity") {
      const activity = product as (typeof activities)[number];
      const adults = details?.adults ?? 0;
      const children = details?.children ?? 0;
      pricing = {
        currency: activity.pricing.adult.currency,
        totalAmount:
          adults * activity.pricing.adult.amount +
          children * activity.pricing.child.amount,
        label: `${adults} adults, ${children} children`,
      };
    } else if (item.type === "package") {
      const packageItem = product as (typeof packages)[number];
      const people = (details?.adults ?? 0) + (details?.children ?? 0);
      const pricePerPerson = getPackagePricePerPerson(packageItem.pricing, people);

      if (pricePerPerson !== null) {
        pricing = {
          currency: packageItem.pricing.currency,
          unitAmount: pricePerPerson,
          quantity: people,
          totalAmount: people * pricePerPerson,
          label: `${people} travellers`,
        };
      }
    } else if (item.type === "accommodation") {
      const accommodation = product as (typeof accommodations)[number];
      const nights = nightsBetween(details!.checkIn!, details!.checkOut!);

      if (accommodation.priceFrom) {
        pricing = {
          currency: accommodation.priceFrom.currency,
          unitAmount: accommodation.priceFrom.amount,
          quantity: nights,
          totalAmount: nights * accommodation.priceFrom.amount,
          label: `${nights} nights at published starting rate`,
        };
      }
    }

    return { ...item, name: product.name, pricing };
  });

  const travelDate = clean(
    body.travelDate ||
      resolved.find((item) => item.details?.date)?.details?.date ||
      resolved.find((item) => item.details?.checkIn)?.details?.checkIn,
    20,
  );
  const returnDate = clean(
    body.returnDate || resolved.find((item) => item.details?.checkOut)?.details?.checkOut,
    20,
  );
  const adults = body.adults ?? Math.max(
    1,
    ...resolved.map((item) =>
      item.details?.adults ?? item.details?.guests ?? item.details?.passengers ?? 1,
    ),
  );
  const children = body.children ?? Math.max(
    0,
    ...resolved.map((item) => item.details?.children ?? 0),
  );
  const totalPeople = Math.max(
    1,
    ...resolved.map((item) =>
      item.type === "activity" || item.type === "package"
        ? (item.details?.adults ?? 1) + (item.details?.children ?? 0)
        : item.details?.guests ?? item.details?.passengers ?? 1,
    ),
  );

  const pricedItems = resolved.filter((item) => item.pricing);
  const estimatedTotal = pricedItems.reduce(
    (sum, item) => sum + (item.pricing?.totalAmount ?? 0),
    0,
  );
  const estimatedCurrency = pricedItems[0]?.pricing?.currency ?? "USD";

  if (!travelDate || !Number.isInteger(adults) || adults < 1 || adults > 12 || !Number.isInteger(children) || children < 0 || children > 12) {
    throw new TripEnquiryValidationError(
      "Please check the dates and number of people selected for your trip.",
    );
  }

  const supabase = createSupabaseServerClient();
  const enquiryReference = reference();
  const enquiry = {
    reference: enquiryReference,
    enquiry_type: "trip",
    activity_slug: null,
    activity_name: null,
    package_slug: null,
    package_name: null,
    travel_date: travelDate,
    return_date: returnDate || null,
    adults,
    children,
    total_people: totalPeople,
    price_per_person: null,
    total: estimatedTotal,
    currency: estimatedCurrency,
    first_name: firstName,
    last_name: lastName,
    email,
    phone,
    country: country || null,
    message: message || null,
    status: "new",
  };
  const enquiryItems = resolved.map((item) => ({
    item_type: item.type,
    item_slug: item.slug,
    item_name: item.name,
    travel_date: item.details?.date ?? item.details?.checkIn ?? travelDate,
    quantity: 1,
    notes:
      item.details || item.pricing
        ? JSON.stringify({
            details: item.details ?? null,
            pricing: item.pricing ?? null,
          })
        : null,
  }));

  const { data, error } = await supabase.rpc("create_trip_enquiry", {
    p_enquiry: enquiry,
    p_items: enquiryItems,
  });

  if (error) {
    throw new TripEnquiryPersistenceError(
      "We couldn't save your enquiry. Please try again.",
    );
  }

  if (
    !data ||
    typeof data !== "object" ||
    !("reference" in data) ||
    typeof data.reference !== "string"
  ) {
    throw new TripEnquiryPersistenceError(
      "We couldn't save your enquiry. Please try again.",
    );
  }

  const emailData = {
    reference: data.reference,
    items: resolved,
    travelDate,
    returnDate,
    adults,
    children,
    firstName,
    lastName,
    email,
    phone,
    country,
    message,
  };

  try {
    await sendTripEnquiryNotification(emailData);
  } catch (emailError) {
    console.error("Trip enquiry notification email error:", emailError);
  }

  try {
    await sendTripEnquiryConfirmation(emailData);
  } catch (emailError) {
    console.error("Trip enquiry confirmation email error:", emailError);
  }

  return { reference: data.reference, items: resolved };
}
