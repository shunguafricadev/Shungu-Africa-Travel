"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  formatDateForInput,
  getDefaultTravelDate,
} from "@/components/activities/booking/dateUtils";

type TransferBookingCardProps = {
  slug: string;
  name: string;
};

export default function TransferBookingCard({
  slug,
  name,
}: TransferBookingCardProps) {
  const router = useRouter();
  const [date, setDate] = useState(getDefaultTravelDate);
  const [passengers, setPassengers] = useState(1);

  return (
    <aside className="lg:sticky lg:top-8 lg:self-start">
      <div className="bg-white p-6 shadow-2xl">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Enquire about {name}
        </h2>
        <p className="mt-2 text-sm leading-6 text-subtle">
          Choose the transfer date and number of passengers, then contact us to confirm availability.
        </p>

        <label className="mt-6 block text-sm font-medium text-foreground">
          Transfer date
          <input
            id="transfer-date"
            type="date"
            value={date}
            min={formatDateForInput(new Date())}
            onChange={(event) => setDate(event.target.value)}
            required
            className="mt-2 block w-full min-w-0 border border-black/10 bg-black/2.5 px-4 py-3 text-sm font-normal outline-none focus:border-black/40"
          />
        </label>

        <label className="mt-4 block text-sm font-medium text-foreground">
          Passengers
          <input
            id="transfer-passengers"
            type="number"
            min="1"
            max="12"
            step="1"
            required
            value={passengers}
            onChange={(event) =>
              setPassengers(event.target.value === "" ? 0 : Number(event.target.value))
            }
            className="mt-2 block w-full border border-black/10 bg-black/2.5 px-4 py-3 text-sm font-normal outline-none focus:border-black/40"
          />
        </label>

        <button
          type="button"
          disabled={
            !date ||
            !Number.isInteger(passengers) ||
            passengers < 1 ||
            passengers > 12
          }
          onClick={() => {
            const params = new URLSearchParams({
              transfer: slug,
              date,
              passengers: String(passengers),
            });

            router.push(`/contact?${params.toString()}`);
          }}
          className="mt-6 block w-full bg-brand px-5 py-4 text-center text-sm font-medium text-white transition hover:bg-brand-hover disabled:cursor-not-allowed disabled:bg-neutral-300"
        >
          Continue to enquiry
        </button>
        <p className="mt-3 text-center text-xs leading-5 text-neutral-500">
          No payment is required to send an enquiry.
        </p>
      </div>
    </aside>
  );
}
