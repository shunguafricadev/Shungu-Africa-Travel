import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getPackageCountries, packages } from "@/data/packages";
import { createExperienceMetadata } from "@/lib/seo/experienceMetadata";

import Container from "@/components/ui/Container";

import PackageHero from "@/components/packages/PackageHero";
import DestinationItineraries from "@/components/destinations/DestinationItineraries";
import PackageSummary from "@/components/packages/PackageSummary";
import PackageAbout from "@/components/packages/PackageAbout";
import PackageHighlights from "@/components/packages/PackageHighlights";
import PackageIncluded from "@/components/packages/PackageIncluded";
import PackageNotIncluded from "@/components/packages/PackageNotIncluded";
import PackageBookingCard from "@/components/packages/PackageBookingCard";
import ExperienceFAQ from "@/components/experiences/ExperienceFAQ";

type PackagePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return packages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const packageItem = packages.find((item) => item.slug === slug);

  if (!packageItem) {
    return {
      title: "Travel package not found",
      robots: { index: false, follow: true },
    };
  }

  return createExperienceMetadata({
    name: packageItem.name,
    description: `${packageItem.duration.label} itinerary visiting ${packageItem.destinations.join(", ")}. ${packageItem.description}`,
    image: packageItem.image,
    path: `/packages/${packageItem.slug}`,
  });
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { slug } = await params;

  const packageItem = packages.find((item) => item.slug === slug);

  if (!packageItem) {
    notFound();
  }

  return (
    <main id="main-content" className="bg-background">
      <PackageHero
        name={packageItem.name}
        image={packageItem.image}
        category={packageItem.category}
        duration={packageItem.duration.label}
        countries={getPackageCountries(packageItem.location)}
      />

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            <div>
              <PackageSummary
                duration={packageItem.duration.label}
                category={packageItem.category}
                groupSize="2–12 people"
                pickup="Available"
              />

              <PackageAbout description={packageItem.description} />

              <PackageHighlights highlights={packageItem.highlights} />

               <DestinationItineraries
                itineraries={[packageItem]}
                heading="Itinerary"
                showViewLink={false}
              />

              <PackageIncluded items={packageItem.included} />

              <PackageNotIncluded items={packageItem.notIncluded} />

              <ExperienceFAQ
                faqs={packageItem.faqs ?? []}
              />
            </div>

            <aside>
              <PackageBookingCard
                slug={packageItem.slug}
                duration={packageItem.duration.label}
                pricing={packageItem.pricing}
              />
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
