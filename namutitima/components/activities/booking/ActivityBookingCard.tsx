"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ParticipantSelector from "./ParticipantSelector";
import DateSelector from "./DateSelector";
import PriceSummary from "./PriceSummary";
import { getDefaultTravelDate } from "./dateUtils";
import { formatCurrency } from "@/lib/formatCurrency";

type ActivityBookingCardProps = {
  slug: string;
  pricing: {
    adult: {
      amount: number;
      currency: string;
      label: "From per person";
    };
    child: {
      amount: number;
      currency: string;
      label: "From per person";
    };
  };
  duration: string;
};

export default function ActivityBookingCard({
  slug,
  pricing,
  duration,
}: ActivityBookingCardProps) {
  const router = useRouter();
  const [date, setDate] = useState(getDefaultTravelDate);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const total = adults * pricing.adult.amount + children * pricing.child.amount;
  return (
    <aside>
      <div className="sticky top-8 bg-white p-6 shadow-2xl">
        {/* Price + Duration */}
        <div className="flex items-end justify-between border-b border-neutral-200 pb-5">
          <div>
            <p className="text-xs text-foreground/60">{pricing.adult.label}</p>

            <p className="text-2xl font-semibold text-foreground">
              {formatCurrency(pricing.adult.amount, pricing.adult.currency)}
            </p>
          </div>

          <span className="rounded-xs bg-background px-3 py-1.5 text-xs font-medium text-brand">
            {duration}
          </span>
        </div>

        {/* Booking */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-foreground">
            Plan your experience
          </h2>

          <p className="mt-2 text-sm leading-6 text-subtle">
            Your details are pre-filled to make starting your enquiry quick and
            easy. Adjust anything you&apos;d like before continuing.
          </p>

          <DateSelector
            value={date}
            onChange={setDate}
          />

          {/* Participants */}
          <ParticipantSelector
            adults={adults}
            childCount={children}
            onAdultsChange={(value) => {
              setAdults(value);
            }}
            onChildCountChange={(value) => {
              setChildren(value);
            }}
          />

          <PriceSummary
            adults={adults}
            childCount={children}
            adultPrice={pricing.adult.amount}
            childPrice={pricing.child.amount}
            currency={pricing.adult.currency}
          />

          <button
            type="button"
            disabled={!date}
            onClick={() => {
              const params = new URLSearchParams({
                activity: slug,
                date,
                adults: String(adults),
                children: String(children),
                total: String(total),
              });

              router.push(`/enquire?${params.toString()}`);
            }}
            className="mt-6 block w-full bg-brand px-5 py-4 text-center text-sm font-medium text-white transition hover:bg-brand-hover disabled:cursor-not-allowed disabled:bg-neutral-300"
          >
            Continue to enquiry
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-neutral-500">
            No payment is required to send an enquiry.
          </p>
        </div>
      </div>
    </aside>
  );
}
