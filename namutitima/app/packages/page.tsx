import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pagination } from "@/components/ui/Pagination";
import { PackageCard } from "@/components/packages/PackageCard";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "African Safari Packages & Tours",
  description:
    "Explore safari packages, guided tours and holiday itineraries with Shungu Africa Travel. Compare trip options and enquire about your next adventure.",
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "African Safari Packages & Tours | Shungu Africa Travel",
    description:
      "Explore safari packages, guided tours and holiday itineraries with Shungu Africa Travel. Compare trip options and enquire about your next adventure.",
    url: "/packages",
    images: [
      {
        url: "/images/optimized/packages/victoria-falls-essentials.webp",
        alt: "Curated Southern Africa travel packages",
      },
    ],
  },
};

export default function PackagesPage() {
  return (
    <main id="main-content">
      <PageHero
        image="/images/packages/packages-hero.png"
        title="African Safari Packages & Tours"
      />

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading
              eyebrow="Featured Itineraries"
              title="Journeys planned around you."
              eyebrowClassName="uppercase"
            />

            {packages.length > 0 ? (
              <Pagination className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {packages.map((packageItem) => (
                  <PackageCard
                    key={packageItem.slug}
                    slug={packageItem.slug}
                    name={packageItem.name}
                    image={packageItem.image}
                    description={packageItem.description}
                    duration={packageItem.duration.label}
                    location={packageItem.location}
                    highlights={packageItem.highlights}
                    badge={packageItem.badge}
                    pricing={packageItem.pricing}
                  />
                ))}
              </Pagination>
            ) : (
              <p className="border border-neutral-200 bg-neutral-50 px-6 py-10 text-center text-sm leading-6 text-subtle">
                Travel packages are being updated. Please contact us and we’ll
                help plan an itinerary for your trip.
              </p>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}
