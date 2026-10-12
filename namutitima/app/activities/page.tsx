import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pagination } from "@/components/ui/Pagination";
import { ActivityCard } from "@/components/activities/ActivityCard";
import { activities } from "@/data/activities";

export const metadata: Metadata = {
  title: "African Tours & Excursions",
  description:
    "Explore tours, excursions and activities with Shungu Africa Travel. Discover available experiences, practical details and options for your trip.",
  alternates: { canonical: "/activities" },
  openGraph: {
    title: "African Tours & Excursions | Shungu Africa Travel",
    description:
      "Explore tours, excursions and activities with Shungu Africa Travel. Discover available experiences, practical details and options for your trip.",
    url: "/activities",
    images: [
      {
        url: "/images/optimized/activities/zambezi-sunset-cruise.webp",
        alt: "Boat cruise on the Zambezi River near Victoria Falls",
      },
    ],
  },
};

export default function ActivitiesPage() {
  return (
    <main id="main-content">
      <PageHero
        image="/images/activities/experiences-hero.png"
        title="African Tours & Excursions"
        description="Explore available tours, excursions and travel experiences across our destinations."
      />

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-7xl px-2">
            <SectionHeading
              eyebrow="Things to Do"
              title="Experiences worth making time for."
              className="lg:max-w-2xl"
            />
            <Pagination className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {activities.map(
                ({
                  slug,
                  name,
                  location,
                  country,
                  image,
                  description,
                  duration,
                  pricing,
                  rating,
                  reviewCount,
                  highlights,
                  badge,
                }) => (
                  <ActivityCard
                    key={slug}
                    slug={slug}
                    name={name}
                    location={location}
                    country={country}
                    image={image}
                    description={description}
                    duration={duration}
                    pricing={pricing}
                    rating={rating}
                    reviewCount={reviewCount}
                    highlights={highlights}
                    badge={badge}
                  />
                ),
              )}
            </Pagination>
          </div>
        </Container>
      </section>
    </main>
  );
}
