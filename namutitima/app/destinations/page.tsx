import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pagination } from "@/components/ui/Pagination";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "African Travel Destinations",
  description:
    "Explore African travel destinations with Shungu Africa Travel. Discover places to visit, local experiences, destination highlights and ideas for your next trip.",
  alternates: { canonical: "/destinations" },
  openGraph: {
    title: "African Travel Destinations | Shungu Africa Travel",
    description:
      "Explore destinations, local experiences and trip ideas across Africa with Shungu Africa Travel.",
    url: "/destinations",
    images: [
      {
        url: "/images/destinations/destinations-hero.png",
        alt: "African destinations to explore with Shungu Africa Travel",
      },
    ],
  },
};

export default function DestinationsPage() {
  return (
    <main id="main-content">
      <PageHero
        image="/images/destinations/destinations-hero.png"
        title="African Travel Destinations"
      />

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading
              eyebrow="Explore with Shungu Africa Travel"
              title="Places that stay with you."
              eyebrowClassName="text-shadow-sm"
            />
            <Pagination className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {destinations.map((destination) => (
                <DestinationCard key={destination.slug} {...destination} />
              ))}
            </Pagination>
          </div>
        </Container>
      </section>
    </main>
  );
}
