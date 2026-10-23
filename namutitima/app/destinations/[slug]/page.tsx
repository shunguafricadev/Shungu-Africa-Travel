import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";
import { createExperienceMetadata } from "@/lib/seo/experienceMetadata";

import Container from "@/components/ui/Container";
import DestinationHero from "@/components/destinations/DestinationHero";
import DestinationOverview from "@/components/destinations/DestinationOverview";
import DestinationWhyVisit from "@/components/destinations/DestinationWhyVisit";
import DestinationHighlights from "@/components/destinations/DestinationHighlights";
import DestinationThingsToDo from "@/components/destinations/DestinationThingsToDo";
import DestinationBestTime from "@/components/destinations/DestinationBestTime";
import DestinationItineraries from "@/components/destinations/DestinationItineraries";

type DestinationPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return destinations.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    return { title: "Destination not found", robots: { index: false, follow: true } };
  }

  return createExperienceMetadata({
    name: destination.name,
    title: `${destination.name} Tours & Travel Guide`,
    description: `${destination.overview.short} Explore destination highlights, available activities and travel information for ${destination.name}.`,
    image: destination.heroImage,
    path: `/destinations/${destination.slug}`,
  });
}

export default async function DestinationPage({
  params,
}: DestinationPageProps) {
  const { slug } = await params;

  const destination = destinations.find(
    (item) => item.slug === slug,
  );

  if (!destination) {
    notFound();
  }

  const destinationPackages = destination.relatedContent.packages
    .map((packageSlug) =>
      packages.find((packageItem) => packageItem.slug === packageSlug),
    )
    .filter(
      (packageItem): packageItem is (typeof packages)[number] =>
        packageItem !== undefined,
    );
  const destinationItineraries = destinationPackages.filter(
    (packageItem) =>
      packageItem.destinations.length === 1 &&
      packageItem.destinations[0] === destination.name,
  );

  return (
    <main id="main-content" className="bg-background">
      <DestinationHero
        name={destination.name}
        image={destination.heroImage}
        description={destination.tagline}
      />

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <Container>
          <div className="mx-auto max-w-4xl">
            <DestinationOverview
              name={destination.name}
              {...destination.overview}
            />

            <DestinationWhyVisit
              name={destination.name}
              items={destination.whyVisit}
            />

            <DestinationHighlights
              highlights={destination.highlights}
            />

            <DestinationThingsToDo
              items={destination.thingsToDo}
            />

            <DestinationBestTime
              {...destination.bestTimeToVisit}
            />

            <DestinationItineraries
              itineraries={destinationItineraries}
              firstVisitItinerary={destination.firstVisitItinerary}
            />
          </div>
        </Container>
      </section>
    </main>
  );
}