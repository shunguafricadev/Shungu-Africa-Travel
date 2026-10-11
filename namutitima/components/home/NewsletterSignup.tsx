"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";

import Container from "@/components/ui/Container";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setMessage(result.message ?? "We could not save your signup. Please try again.");
        return;
      }

      setIsSubscribed(true);
      setMessage(
        result.message ?? "You're subscribed. Look out for updates from Shungu Africa.",
      );
      setEmail("");
    } catch {
      setMessage("We could not save your signup. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="bg-background/80 py-16 border-b border-neutral-300 text-foreground sm:py-20"
    >
      <Container>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-2xl">
            <p className="text-eyebrow font-medium uppercase tracking-[0.18em] text-brand">
              The Shungu Travel Journal
            </p>
            <h2
              id="newsletter-heading"
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              A little inspiration for your next journey.
            </h2>
            <p className="mt-3 text-sm leading-7 text-foreground/75">
              Get travel ideas, destination stories and occasional updates from
              Shungu Africa Travel delivered to your inbox.
            </p>
          </div>

          <form
            onSubmit={subscribe}
            className="w-full max-w-xl md:min-w-105"
          >
            <label
              htmlFor="newsletter-email"
              className="mb-2 block text-sm font-medium"
            >
              Email address
            </label>
            <div className="flex min-w-0 flex-col gap-3 sm:flex-row">
              <div className="relative min-w-0 flex-1">
                <Mail
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-400"
                />
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={isSubscribed}
                  className="block w-full min-w-0 border border-white/25 bg-white py-3 pl-11 pr-4 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-white disabled:opacity-60"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSubscribed}
                className="shrink-0 bg-brand px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Signing up..."
                  : isSubscribed
                    ? "Subscribed"
                    : "Sign me up"}
              </button>
            </div>
            <label className="mt-4 flex items-start gap-2 text-xs leading-5 text-foreground/75">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                disabled={isSubscribed}
                className="mt-0.5 size-4 shrink-0 accent-brand"
              />
              <span>
                I agree to receive occasional travel updates by email. Read
                our{" "}
                <a
                  href="/privacy"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>
            {message && (
              <p
                role={isSubscribed ? "status" : "alert"}
                className={`mt-3 text-sm ${
                  isSubscribed ? "text-white" : "text-red-200"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
