import Container from "@/components/ui/Container";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { destinations } from "@/data/destinations";

const destinationCardSizes =
  "(min-width: 1280px) 250px, (min-width: 1024px) calc(50vw - 3.5rem), (min-width: 768px) calc(50vw - 3rem), (min-width: 640px) calc(100vw - 4rem), calc(100vw - 3rem)";

export function DestinationsPreview() {
  return (
    <section aria-label="Featured destinations" className="py-20">
      <Container>
        <div className="mx-auto max-w-7xl px-2">
          <SectionHeading
            eyebrow="Destinations"
            title="Find your place in Africa."
          />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {destinations.slice(0, 4).map((destination) => (
              <DestinationCard
                {...destination}
                key={destination.slug}
                sizes={destinationCardSizes}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
