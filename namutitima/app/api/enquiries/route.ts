import { NextResponse } from "next/server";
import crypto from "node:crypto";

import { activities } from "@/data/activities";
import { getPackagePricePerPerson, packages } from "@/data/packages";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enquiryRateLimit } from "@/lib/security/rateLimit";
import { sendEnquiryNotification } from "@/lib/email/sendEnquiryEmail";
import { sendTravellerConfirmation } from "@/lib/email/sendTravellerConfirmation";
import type { SafariItineraryDetails } from "@/lib/enquiry/safariItinerary";
import {
  submitTripEnquiry,
  TripEnquiryValidationError,
  type TripEnquiryRequest,
} from "@/lib/enquiry/submitTripEnquiry";

type EnquiryRequest = {
  contact?: boolean;
  context?: string;
  fullName?: string;
  whatsapp?: string;
  arrival?: string;
  duration?: string;
  travellers?: number;
  itineraryDetails?: unknown;
  activity?: string;
  package?: string;
  /** @deprecated Use package. */
  special?: string;
  date: string;
  adults: number;
  children: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country?: string;
  message?: string;
};

function generateReference() {
  return `SAT-${crypto.randomBytes(4).toString("hex").toUpperCase()}`;
}

function cleanString(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function parseSafariItineraryDetails(
  value: unknown,
): SafariItineraryDetails | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }

  const details = value as Partial<SafariItineraryDetails>;
  if (
    typeof details.name !== "string" ||
    details.name.trim().length === 0 ||
    details.name.length > 200 ||
    !Number.isInteger(details.durationDays) ||
    (details.durationDays ?? 0) < 1 ||
    (details.durationDays ?? 0) > 30 ||
    !Number.isInteger(details.travellers) ||
    (details.travellers ?? 0) < 1 ||
    (details.travellers ?? 0) > 12 ||
    !Array.isArray(details.destinations) ||
    details.destinations.length < 1 ||
    details.destinations.length > 10 ||
    !details.destinations.every(
      (destination) =>
        Boolean(destination) &&
        typeof destination === "object" &&
        typeof destination.slug === "string" &&
        destination.slug.trim().length > 0 &&
        destination.slug.length <= 120 &&
        typeof destination.name === "string" &&
        destination.name.trim().length > 0 &&
        destination.name.length <= 120 &&
        typeof destination.country === "string" &&
        destination.country.trim().length > 0 &&
        destination.country.length <= 100,
    ) ||
    typeof details.accommodation !== "string" ||
    details.accommodation.trim().length === 0 ||
    details.accommodation.length > 100 ||
    !Array.isArray(details.activities) ||
    details.activities.length > 30 ||
    !details.activities.every(
      (activity) =>
        Boolean(activity) &&
        typeof activity === "object" &&
        typeof activity.slug === "string" &&
        activity.slug.trim().length > 0 &&
        activity.slug.length <= 120 &&
        typeof activity.name === "string" &&
        activity.name.trim().length > 0 &&
        activity.name.length <= 150,
    )
  ) {
    return null;
  }

  const estimate = details.estimatedPerPerson;
  if (
    estimate !== null &&
    (!estimate ||
      typeof estimate !== "object" ||
      typeof estimate.currency !== "string" ||
      !/^[A-Z]{3}$/.test(estimate.currency) ||
      !Number.isFinite(estimate.low) ||
      !Number.isFinite(estimate.high) ||
      estimate.low < 0 ||
      estimate.high < estimate.low)
  ) {
    return null;
  }

  return details as SafariItineraryDetails;
}

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const rateLimit = await enquiryRateLimit.limit(ip);

    if (!rateLimit.success) {
      const retryAfter = Math.max(
        1,
        Math.ceil((rateLimit.reset - Date.now()) / 1000),
      );

      return NextResponse.json(
        {
          success: false,
          message: "Too many enquiry attempts. Please try again later.",
        },
        {
          status: 429,
          headers: { "Retry-After": String(retryAfter) },
        },
      );
    }
    // --------------------------------
    // Parse request
    // --------------------------------

    let body: EnquiryRequest;

    try {
      body = (await request.json()) as EnquiryRequest;
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request.",
        },
        { status: 400 },
      );
    }

    if (Array.isArray((body as EnquiryRequest & { items?: unknown }).items)) {
      try {
        const result = await submitTripEnquiry(body as unknown as TripEnquiryRequest);

        return NextResponse.json({
          success: true,
          message: "Your trip enquiry has been received.",
          enquiry: result,
        });
      } catch (error) {
        const isValidationError = error instanceof TripEnquiryValidationError;

        if (!isValidationError) {
          console.error("Trip enquiry request failed:", error);
        }

        return NextResponse.json(
          {
            success: false,
            message:
              isValidationError
                ? error.message
                : "We couldn't save your enquiry. Please try again.",
          },
          { status: isValidationError ? 400 : 500 },
        );
      }
    }

    if (body.contact) {
      const fullName = cleanString(body.fullName, 150);
      const nameParts = fullName.split(/\s+/).filter(Boolean);
      const firstName = nameParts.shift() ?? "";
      const lastName = nameParts.join(" ") || firstName;
      const email = cleanString(body.email, 254).toLowerCase();
      const phone = cleanString(body.whatsapp, 40);
      const country = cleanString(body.country, 100);
      const secondaryPhone = cleanString(body.phone, 40);
      const date = cleanString(body.arrival, 20);
      const context = cleanString(body.context, 200);
      const duration = cleanString(body.duration, 50);
      const message = cleanString(body.message, 2000);
      const itineraryDetails =
        body.itineraryDetails === undefined
          ? null
          : parseSafariItineraryDetails(body.itineraryDetails);
      const travellers = body.travellers;

      if (body.itineraryDetails !== undefined && !itineraryDetails) {
        return NextResponse.json(
          { success: false, message: "The itinerary details are invalid." },
          { status: 400 },
        );
      }

      if (!firstName || !email || !phone || !date) {
        return NextResponse.json(
          { success: false, message: "Please complete all required fields." },
          { status: 400 },
        );
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        return NextResponse.json(
          { success: false, message: "Please provide a valid email address." },
          { status: 400 },
        );
      }

      const travelDate = new Date(`${date}T00:00:00`);

      if (Number.isNaN(travelDate.getTime())) {
        return NextResponse.json(
          { success: false, message: "Please provide a valid travel date." },
          { status: 400 },
        );
      }

      if (
        typeof travellers !== "number" ||
        !Number.isInteger(travellers) ||
        travellers < 1 ||
        travellers > 12
      ) {
        return NextResponse.json(
          { success: false, message: "Please provide a valid number of travellers." },
          { status: 400 },
        );
      }

      const travellerCount = travellers as number;

      const reference = generateReference();
      const contactMessage = itineraryDetails
        ? message
        : [
            context,
            duration ? `Trip duration: ${duration}` : null,
            secondaryPhone ? `Phone: ${secondaryPhone}` : null,
            message,
          ]
            .filter(Boolean)
            .join("\n");
      const travellerMessage = itineraryDetails
        ? message
        : [duration ? `Trip duration: ${duration}` : null, message]
            .filter(Boolean)
            .join("\n");
      const supabase = createSupabaseServerClient();
      const { data, error } = await supabase
        .from("enquiries")
        .insert({
          reference,
          enquiry_type: "contact",
          activity_slug: null,
          activity_name: itineraryDetails?.name ?? null,
          package_slug: null,
          package_name: null,
          travel_date: date,
          adults: travellerCount,
          children: 0,
          total_people: travellerCount,
          price_per_person: null,
          total: itineraryDetails ? null : 0,
          currency: "USD",
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          country: country || null,
          message: contactMessage || null,
          itinerary_details: itineraryDetails,
          status: "new",
        })
        .select("id, reference")
        .single();

      if (error) {
        console.error("Supabase contact enquiry error:", error);
        return NextResponse.json(
          { success: false, message: "We couldn't save your enquiry. Please try again." },
          { status: 500 },
        );
      }

      const experienceName =
        itineraryDetails?.name || context || "General travel enquiry";

      try {
        await sendEnquiryNotification({
          reference: data.reference,
          activityName: experienceName,
          travelDate: date,
          adults: travellerCount,
          children: 0,
          total: itineraryDetails ? null : 0,
          currency: "USD",
          firstName,
          lastName,
          email,
          phone,
          country: country || null,
          message: contactMessage || null,
          itineraryDetails,
        });
      } catch (emailError) {
        console.error("Contact enquiry notification email error:", emailError);
      }

      try {
        await sendTravellerConfirmation({
          reference: data.reference,
          activityName: experienceName,
          travelDate: date,
          adults: travellerCount,
          children: 0,
          total: itineraryDetails ? null : 0,
          currency: "USD",
          firstName,
          email,
          country: country || null,
          message: travellerMessage || null,
          itineraryDetails,
        });
      } catch (emailError) {
        console.error("Contact traveller confirmation email error:", emailError);
      }

      return NextResponse.json({
        success: true,
        message: "Your enquiry has been received.",
        enquiry: { id: data.id, reference: data.reference },
      });
    }

    const {
      activity: activitySlug,
      date,
      adults,
      children,
      country,
    } = body;
    const packageSlug = body.package ?? body.special;

    const firstName = cleanString(body.firstName, 100);
    const lastName = cleanString(body.lastName, 100);
    const email = cleanString(body.email, 254).toLowerCase();
    const phone = cleanString(body.phone, 40);
    const message = cleanString(body.message, 2000);

    // --------------------------------
    // Activity OR package — never both
    // --------------------------------

    if ((!activitySlug && !packageSlug) || (activitySlug && packageSlug)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please select one experience.",
        },
        { status: 400 },
      );
    }

    // --------------------------------
    // Required fields
    // --------------------------------

    if (!date || !firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 },
      );
    }

    // --------------------------------
    // Participant validation
    // --------------------------------

    if (
      !Number.isInteger(adults) ||
      adults < 1 ||
      adults > 12 ||
      !Number.isInteger(children) ||
      children < 0 ||
      children > 12
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid participant information.",
        },
        { status: 400 },
      );
    }

    const totalPeople = adults + children;

    if (totalPeople > 12) {
      return NextResponse.json(
        {
          success: false,
          message:
            "For groups larger than 12 travellers, please contact us directly.",
        },
        { status: 400 },
      );
    }

    // --------------------------------
    // Validate email
    // --------------------------------

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 },
      );
    }

    // --------------------------------
    // Validate date
    // --------------------------------

    const travelDate = new Date(`${date}T00:00:00`);

    if (Number.isNaN(travelDate.getTime())) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid travel date.",
        },
        { status: 400 },
      );
    }

    // --------------------------------
    // Find experience on server
    // --------------------------------

    const activity = activitySlug
      ? activities.find((item) => item.slug === activitySlug)
      : undefined;

    const packageItem = packageSlug
      ? packages.find((item) => item.slug === packageSlug)
      : undefined;

    if (!activity && !packageItem) {
      return NextResponse.json(
        {
          success: false,
          message: "The selected experience could not be found.",
        },
        { status: 404 },
      );
    }

    // --------------------------------
    // Calculate price on server
    // --------------------------------

    let total: number | null;
    let pricePerPerson: number | null = null;
    let currency: string;

    if (packageItem) {
      pricePerPerson = getPackagePricePerPerson(packageItem.pricing, totalPeople);

      if (pricePerPerson === null) {
        if (packageItem.pricing.tiers.length > 0) {
          return NextResponse.json(
            {
              success: false,
              message: "Please contact us for groups larger than 12 travellers.",
            },
            { status: 400 },
          );
        }

        total = null;
      } else {
        total = totalPeople * pricePerPerson;
      }

      currency = packageItem.pricing.currency;
    } else {
      total =
        adults * activity!.pricing.adult.amount +
        children * activity!.pricing.child.amount;

      currency = activity!.pricing.adult.currency;
    }

    // --------------------------------
    // Generate reference
    // --------------------------------

    const reference = generateReference();

    // --------------------------------
    // Save enquiry
    // --------------------------------

    const supabase = createSupabaseServerClient();

    const { data, error } = await supabase
      .from("enquiries")
      .insert({
        reference,

        enquiry_type: packageItem ? "package" : "activity",

        activity_slug: activity?.slug ?? null,
        activity_name: activity?.name ?? null,

        package_slug: packageItem?.slug ?? null,
        package_name: packageItem?.name ?? null,

        travel_date: date,

        adults,
        children,
        total_people: totalPeople,

        price_per_person: pricePerPerson,

        total,
        currency,

        first_name: firstName,
        last_name: lastName,
        email,
        phone,

        country: cleanString(country, 100) || null,
        message: message || null,

        status: "new",
      })
      .select("id, reference")
      .single();

    if (error) {
      console.error("Supabase enquiry error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "We couldn't save your enquiry. Please try again.",
        },
        { status: 500 },
      );
    }

    // --------------------------------
    // Experience name
    // --------------------------------

    const experienceName = packageItem?.name ?? activity!.name;

    // --------------------------------
    // Notify Shungu Africa Travel
    // --------------------------------

    try {
      await sendEnquiryNotification({
        reference: data.reference,
        activityName: experienceName,
        travelDate: date,
        adults,
        children,
        total,
        currency,
        firstName,
        lastName,
        email,
        phone,
        country: cleanString(country, 100) || null,
        message: message || null,
      });
    } catch (emailError) {
      console.error("Enquiry notification email error:", emailError);
    }

    // --------------------------------
    // Confirm to traveller
    // --------------------------------

    try {
      await sendTravellerConfirmation({
        reference: data.reference,
        activityName: experienceName,
        travelDate: date,
        adults,
        children,
        total,
        currency,
        firstName,
        email,
      });
    } catch (emailError) {
      console.error("Traveller confirmation email error:", emailError);
    }

    // --------------------------------
    // Success
    // --------------------------------

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been received.",
      enquiry: {
        id: data.id,
        reference: data.reference,
        experience: experienceName,
        total,
        currency,
      },
    });
  } catch (error) {
    console.error("Enquiry API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}
