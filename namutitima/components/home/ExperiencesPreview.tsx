import { ActivityCard } from "@/components/activities/ActivityCard";
import Container from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { activities } from "@/data/activities";

export function ExperiencesPreview() {
  return (
    <section aria-label="Featured experiences" className="bg-background py-20">
      <Container>
        <div className="mx-auto max-w-7xl px-2">
          <SectionHeading
            eyebrow="Experiences"
            title="Make every moment count."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activities.slice(0, 3).map(
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
          </div>
        </div>
      </Container>
    </section>
  );
}
