"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import ParticipantSelector from "@/components/activities/booking/ParticipantSelector";
import {
  getPackageFromPrice,
  getPackagePricePerPerson,
  type Package,
} from "@/data/packages";
import {
  formatDateForInput,
  getDefaultTravelDate,
} from "@/components/activities/booking/dateUtils";

type PackageBookingCardProps = {
  slug: string;
  duration: string;
  pricing: Package["pricing"];
};

export default function PackageBookingCard({
  slug,
  duration,
  pricing,
}: PackageBookingCardProps) {
  const router = useRouter();
  const [date, setDate] = useState(getDefaultTravelDate);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const people = adults + children;

  const pricePerPerson = getPackagePricePerPerson(
    pricing,
    people,
  );

  const fromPrice = getPackageFromPrice(pricing);

  const total = pricePerPerson !== null
    ? people * pricePerPerson
    : null;
  const priceOnRequest = pricing.tiers.length === 0;

  return (
    <aside>
      <div className="sticky top-8 bg-white p-6 shadow-2xl">
        {/* Price + Duration */}
        <div className="flex items-end justify-between border-b border-neutral-200 pb-5">
          <div>
            <p className="text-xs text-foreground/60">
              {priceOnRequest ? "Pricing" : "From per person"}
            </p>

            <p className="text-2xl font-semibold text-foreground">
              {pricing.label ??
                (fromPrice === null
                  ? "Price on request"
                  : `${pricing.currency} ${fromPrice.toLocaleString()}`)}
            </p>
          </div>

          <span className="rounded-xs bg-background px-3 py-1.5 text-xs font-medium text-brand">
            {duration}
          </span>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-foreground">
            Plan your experience
          </h2>

          <p className="mt-2 text-sm leading-6 text-subtle">
            Your details are pre-filled to make starting
            your enquiry quick and easy. Adjust anything
            you&apos;d like before continuing.
          </p>

          {/* Travel Date */}
          <div className="mt-6 min-w-0">
            <label
              htmlFor="package-date"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Preferred Travel Date
            </label>

            <input
              id="package-date"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              min={formatDateForInput(new Date())}
              className="block w-full min-w-0 box-border appearance-none border border-black/10 bg-black/2.5 px-4 py-3 text-sm outline-none transition-colors focus:border-black/40"
            />

            <p className="mt-2 text-xs text-neutral-500">
              You can change this date if needed.
            </p>
          </div>

          {/* Participants */}
          <div className="mt-5">
            <ParticipantSelector
              adults={adults}
              childCount={children}
              onAdultsChange={setAdults}
              onChildCountChange={setChildren}
            />
          </div>

          {/* Price Summary */}
          {pricePerPerson !== null && total !== null ? (
            <div className="mt-6 border-t border-neutral-200 pt-5">
              <div className="space-y-3">
                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-foreground/60">
                    Travellers × {people}
                  </span>

                  <span className="text-right text-foreground/90">
                    {pricing.currency}{" "}
                    {pricePerPerson.toLocaleString()}{" "}
                    per person
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-neutral-200 pt-5">
                <span className="text-sm font-medium text-neutral-900">
                  Estimated total
                </span>

                <span className="text-xl font-semibold text-neutral-900">
                  {pricing.currency}{" "}
                  {total.toLocaleString()}
                </span>
              </div>
            </div>
          ) : priceOnRequest ? (
            <p className="mt-6 text-sm text-neutral-600">
              Share your travel details and we&apos;ll confirm availability and
              provide a tailored quotation.
            </p>
          ) : (
            <p className="mt-6 text-sm text-red-700">
              Please contact us for groups larger than 12
              travellers.
            </p>
          )}

          {/* Continue */}
          <button
            type="button"
            disabled={!date || (!priceOnRequest && pricePerPerson === null)}
            onClick={() => {
              const params = new URLSearchParams({
                package: slug,
                date,
                adults: String(adults),
                children: String(children),
              });

              router.push(`/enquire?${params.toString()}`);
            }}
            className="mt-6 block w-full bg-brand px-5 py-4 text-center text-sm font-medium text-white transition hover:bg-brand-hover disabled:cursor-not-allowed disabled:bg-neutral-300"
          >
            Continue to enquiry
          </button>

          <p className="mt-3 text-center text-xs leading-5 text-neutral-500">
            No payment is required to send an enquiry. Final
            package price will be confirmed based on
            availability and your selected travel dates.
          </p>
        </div>
      </div>
    </aside>
  );
}