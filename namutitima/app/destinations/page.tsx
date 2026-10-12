import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pagination } from "@/components/ui/Pagination";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { destinations } from "@/data/destinations";

const destinationCardSizes =
  "(min-width: 1152px) 325px, (min-width: 1024px) calc(29vw - 0.5rem), (min-width: 768px) calc(50vw - 3.75rem), (min-width: 640px) calc(100vw - 5rem), calc(100vw - 4rem)";

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
        url: "/images/destinations/destinations-hero.webp",
        alt: "African destinations to explore with Shungu Africa Travel",
      },
    ],
  },
};

export default function DestinationsPage() {
  return (
    <main id="main-content">
      <PageHero
        image="/images/destinations/destinations-hero.webp"
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
                <DestinationCard
                  {...destination}
                  key={destination.slug}
                  sizes={destinationCardSizes}
                />
              ))}
            </Pagination>
          </div>
        </Container>
      </section>
    </main>
  );
}
