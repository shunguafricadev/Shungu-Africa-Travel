"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";

import { activities } from "@/data/activities";
import { getPackagePricePerPerson, packages } from "@/data/packages";

import Container from "@/components/ui/Container";
import EnquirySummary from "@/components/enquiry/EnquirySummary";
import TravellerDetailsForm from "@/components/enquiry/TravellerDetailsForm";
import EnquirySuccess from "@/components/enquiry/EnquirySuccess";
import ContactEnquiryForm from "@/components/enquiry/ContactEnquiryForm";

function EnquireFormContent() {
  const searchParams = useSearchParams();

  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");

  const activitySlug = searchParams.get("activity");
  const packageSlug =
    searchParams.get("package") ?? searchParams.get("special");

  const date = searchParams.get("date") ?? "";

  const adults = Math.max(
    1,
    Number(searchParams.get("adults") ?? 1),
  );

  const children = Math.max(
    0,
    Number(searchParams.get("children") ?? 0),
  );

  const activity = useMemo(
    () =>
      activitySlug
        ? activities.find(
            (item) => item.slug === activitySlug,
          )
        : undefined,
    [activitySlug],
  );

  const packageItem = useMemo(
    () =>
      packageSlug
        ? packages.find(
            (item) => item.slug === packageSlug,
          )
        : undefined,
    [packageSlug],
  );

  /*
   * Determine what the enquiry is for.
   */
  const enquiryType = packageItem
    ? "package"
    : activity
      ? "activity"
      : null;

  if (!enquiryType) {
    if (submitted) {
      return (
        <main id="main-content" className="bg-white">
          <section className="min-h-[75svh] bg-brand text-white">
            <Container>
              <div className="flex min-h-[75svh] items-center justify-center px-6 py-20 text-center sm:px-8 lg:px-12">
                <div className="w-full max-w-3xl">
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-foreground/80">
                    Enquiry
                  </p>
                  <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                    You&apos;re all set.
                  </h1>
                </div>
              </div>
            </Container>
          </section>
          <section className="bg-white py-12">
            <Container>
              <EnquirySuccess
                activityName="your selected trip"
                reference={reference}
              />
            </Container>
          </section>
        </main>
      );
    }

    return (
      <main id="main-content" className="bg-white">
        <section className="min-h-[75svh] bg-brand text-white">
          <Container>
            <div className="flex min-h-[75svh] items-center justify-center px-6 py-20 text-center sm:px-8 lg:px-12">
              <div className="w-full max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-foreground/80">
                  Travel enquiry
                </p>
                <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  Build your journey.
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-foreground/90">
                  Tell us about your plans and we will help arrange your trip.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-12">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[380px_1fr]">
              <div>
                <div className="border border-neutral-200 bg-neutral-50 p-6">
                  <p className="text-eyebrow font-medium uppercase tracking-[0.12em] text-brand">
                    Travel enquiry
                  </p>
                  <h2 className="mt-2 text-section-title font-semibold tracking-tight text-neutral-900">
                    Plan your journey
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-neutral-600">
                    Tell us what you have in mind and our team will help create the right itinerary.
                  </p>
                </div>
              </div>

              <div className="min-w-0">
                <ContactEnquiryForm />
              </div>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  /*
   * Activities have fixed adult/child pricing.
   *
   * Packages currently have "from per person" pricing,
   * so we calculate the displayed estimate from the
   * package's starting price.
   */
  const totalPeople = adults + children;
  const packagePricePerPerson = packageItem
    ? getPackagePricePerPerson(packageItem.pricing, totalPeople)
    : null;

  if (
    packageItem &&
    packagePricePerPerson === null &&
    packageItem.pricing.tiers.length > 0
  ) {
    return null;
  }

  const total = packageItem
    ? packagePricePerPerson === null
      ? null
      : totalPeople * packagePricePerPerson
    : adults * activity!.pricing.adult.amount +
      children * activity!.pricing.child.amount;

  const currency = packageItem
    ? packageItem.pricing.currency
    : activity!.pricing.adult.currency;

  const name = packageItem
    ? packageItem.name
    : activity!.name;

  const location = packageItem
    ? packageItem.destinations.join(" • ")
    : activity!.location;

  if (submitted) {
    return (
      <main id="main-content" className="bg-white">
        <section className="min-h-[75svh] bg-brand text-white">
          <Container>
            <div className="flex min-h-[75svh] items-center justify-center px-6 py-20 text-center sm:px-8 lg:px-12">
              <div className="w-full max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.12em] text-foreground/80">
                  Enquiry
                </p>

                <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  You&apos;re all set.
                </h1>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-12">
          <Container>
            <EnquirySuccess
              activityName={name}
              reference={reference}
            />
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main id="main-content" className="bg-white">
      <section className="min-h-[75svh] bg-brand text-white">
        <Container>
          <div className="flex min-h-[75svh] items-center justify-center px-6 py-20 text-center sm:px-8 lg:px-12">
            <div className="w-full max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-foreground/80">
                Enquiry
              </p>

              <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Plan your experience
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-foreground/90">
                Tell us a little about yourself and we&apos;ll help arrange the
                experience.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[380px_1fr]">
            <div>
              <EnquirySummary
                activityName={name}
                location={location}
                date={date}
                adults={adults}
                childCount={children}
                currency={currency}
                total={total}
                pricePerPerson={packagePricePerPerson ?? undefined}
              />
            </div>

            <div>
              <TravellerDetailsForm
                activity={activitySlug ?? ""}
                package={packageSlug ?? ""}
                date={date}
                adults={adults}
                childCount={children}
                onSuccess={(newReference) => {
                  setReference(newReference);
                  setSubmitted(true);
                }}
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default function EnquirePageContent() {
  return (
    <Suspense
      fallback={
        <main id="main-content" className="bg-white">
          <section className="min-h-[75svh] bg-brand text-white">
            <Container>
              <div className="flex min-h-[75svh] items-center justify-center px-6 py-20 text-center sm:px-8 lg:px-12">
                <div className="w-full max-w-3xl">
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-foreground/80">
                    Travel enquiry
                  </p>
                  <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                    Build your journey.
                  </h1>
                </div>
              </div>
            </Container>
          </section>
          <section className="flex min-h-40 items-center justify-center bg-white px-6 py-12">
            <p className="text-sm text-neutral-500" role="status">
              Loading your enquiry...
            </p>
          </section>
        </main>
      }
    >
      <EnquireFormContent />
    </Suspense>
  );
}
