import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import ContactEnquiryForm from "@/components/enquiry/ContactEnquiryForm";
import { transfers } from "@/data/transfers";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Shungu Africa Travel about safari packages, tours, excursions, transfers or a tailor-made itinerary. Tell us about your travel plans.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    title: "Contact Shungu Africa Travel",
    description:
      "Tell Shungu Africa Travel about your trip plans and ask our team about tours, packages, excursions and transfers.",
    url: "/contact",
    images: [
      {
        url: "/images/optimized/contact/contact-hero.webp",
        alt: "Contact Shungu Africa Travel",
      },
    ],
  },
};

type ContactPageProps = {
  searchParams: Promise<{
    service?: string;
    transfer?: string;
    date?: string;
    passengers?: string;
  }>;
};

export default async function Page({ searchParams }: ContactPageProps) {
  const {
    service,
    transfer: transferSlug,
    date,
    passengers,
  } = await searchParams;
  const serviceTitle =
    service === "airport-transfer"
      ? "an airport transfer"
      : service === "local-transfers"
        ? "local transfers"
        : null;
  const transfer = transfers.find((item) => item.slug === transferSlug);
  const passengerCount = Number(passengers);
  const defaultPassengers =
    Number.isInteger(passengerCount) && passengerCount >= 1 && passengerCount <= 12
      ? passengerCount
      : undefined;
  const defaultDate =
    date && /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : undefined;

  return (
    <main id="main-content">
      <PageHero
        image="/images/optimized/contact/contact-hero.webp"
        title={
          transfer
            ? `Enquire about ${transfer.name}.`
            : serviceTitle
              ? `Enquire about ${serviceTitle}.`
              : "Contact Us."
        }
      />

      {/* Contact Content */}
      <section className="px-6 py-20 text-foreground sm:px-8 lg:px-12">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Enquiry Heading */}
            <div className="text-center">
              <p className="text-sm font-medium tracking-[0.15em] text-brand">
                Travel enquiry
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                {transfer
                  ? `Let's arrange ${transfer.name}.`
                  : serviceTitle
                    ? `Let's arrange ${serviceTitle}.`
                    : "Let's plan your journey."}
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-black/60">
                Tell us a little about your plans, and our team will help you
                take the next step.
              </p>
            </div>

            <ContactEnquiryForm
              context={
                transfer
                  ? `Transfer: ${transfer.name}`
                  : serviceTitle
                    ? `Service: ${serviceTitle}`
                    : undefined
              }
              defaultDate={defaultDate}
              defaultTravellers={defaultPassengers}
              hideDuration={Boolean(transfer)}
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
