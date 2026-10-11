"use client";

import { FormEvent, useState } from "react";

import ParticipantSelector from "@/components/activities/booking/ParticipantSelector";
import {
  formatDateForInput,
  getDefaultTravelDate,
} from "@/components/activities/booking/dateUtils";

type ActivityEnquiryFormProps = {
  activity: string;
};

export function ActivityEnquiryForm({
  activity,
}: ActivityEnquiryFormProps) {
  const [date, setDate] = useState(getDefaultTravelDate);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      activity,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      date,
      adults,
      children,
      flexibleDate: formData.get("flexibleDate") === "on",
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError(
        "We couldn't send your enquiry. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-neutral-200 bg-white p-8 md:p-10">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-xl text-brand">
          ✓
        </div>

        <h2 className="text-section-title font-semibold tracking-tight text-neutral-900">
          Enquiry received.
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-600">
          Thanks for getting in touch. Our team will review your enquiry and
          get back to you with availability and the next steps.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-brand hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-neutral-200 bg-white p-6 shadow-2xl"
    >
      {/* Header */}
      <div className="border-b border-neutral-200 pb-5">
        <h2 className="text-xl font-semibold text-foreground">
          Plan your experience
        </h2>

        <p className="mt-2 text-sm leading-6 text-subtle">
          Your details are pre-filled to make starting your enquiry quick and
          easy. Adjust anything you&apos;d like before continuing.
        </p>
      </div>

      {/* Activity */}
      <div className="border-b border-neutral-200 py-5">
        <p className="text-xs text-foreground/60">
          You are enquiring about
        </p>

        <p className="mt-1 font-medium text-foreground">
          {activity}
        </p>
      </div>

      {/* Travel Date */}
      <div className="mt-6 min-w-0">
        <label
          htmlFor="activity-date"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Preferred Travel Date
        </label>

        <input
          id="activity-date"
          name="date"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          min={formatDateForInput(new Date())}
          required
          className="block w-full min-w-0 box-border appearance-none border border-black/10 bg-black/2.5 px-4 py-3 text-sm outline-none transition-colors focus:border-black/40"
        />

        <p className="mt-2 text-xs text-neutral-500">
          You can change this date if needed.
        </p>

        <label className="mt-3 flex items-center gap-2 text-sm text-neutral-600">
          <input
            type="checkbox"
            name="flexibleDate"
            className="h-4 w-4 shrink-0 accent-brand"
          />
          My dates are flexible
        </label>
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

      {/* Contact Details */}
      <div className="mt-6 border-t border-neutral-200 pt-5">
        <h3 className="text-sm font-medium text-foreground">
          Your details
        </h3>

        <div className="mt-4 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block text-xs text-neutral-500"
              >
                First name
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
                placeholder="First name"
                className="w-full border border-black/10 bg-black/2.5 px-4 py-3 text-sm outline-none transition-colors focus:border-black/40"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="mb-2 block text-xs text-neutral-500"
              >
                Last name
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                autoComplete="family-name"
                placeholder="Last name"
                className="w-full border border-black/10 bg-black/2.5 px-4 py-3 text-sm outline-none transition-colors focus:border-black/40"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs text-neutral-500"
            >
              Email address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full border border-black/10 bg-black/2.5 px-4 py-3 text-sm outline-none transition-colors focus:border-black/40"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-xs text-neutral-500"
            >
              WhatsApp / phone number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="+263 77 123 4567"
              className="w-full border border-black/10 bg-black/2.5 px-4 py-3 text-sm outline-none transition-colors focus:border-black/40"
            />

            <p className="mt-2 text-xs text-neutral-500">
              Include your country code.
            </p>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mt-6 border-t border-neutral-200 pt-5">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Anything else we should know?
          <span className="ml-2 text-xs font-normal text-neutral-400">
            Optional
          </span>
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us anything that would help us understand your plans..."
          className="mt-2 w-full resize-none border border-black/10 bg-black/2.5 px-4 py-3 text-sm leading-6 outline-none transition-colors focus:border-black/40"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="mt-6 border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Continue */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 block w-full bg-brand px-5 py-4 text-center text-sm font-medium text-white transition hover:bg-brand-hover disabled:cursor-not-allowed disabled:bg-neutral-300"
      >
        {isSubmitting ? "Sending enquiry..." : "Continue to enquiry"}
      </button>

      <p className="mt-3 text-center text-xs leading-5 text-neutral-500">
        No payment is required to send an enquiry. Our team will confirm
        availability and details based on your selected travel date.
      </p>
    </form>
  );
}
