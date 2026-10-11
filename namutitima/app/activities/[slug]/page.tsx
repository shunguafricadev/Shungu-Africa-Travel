import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { activities } from "@/data/activities";
import { createExperienceMetadata } from "@/lib/seo/experienceMetadata";
import Container from "@/components/ui/Container";
import ActivityHero from "@/components/activities/ActivityHero";
import ActivitySummary from "@/components/activities/ActivitySummary";
import ActivityAbout from "@/components/activities/ActivityAbout";
import ActivityHighlights from "@/components/activities/ActivityHighlights";
import ActivityItinerary from "@/components/activities/ActivityItinerary";
import ActivityIncluded from "@/components/activities/ActivityIncluded";
import ActivityNotIncluded from "@/components/activities/ActivityNotIncluded";
import ActivityMeetingPoint from "@/components/activities/ActivityMeetingPoint";
import ActivityBookingCard from "@/components/activities/booking/ActivityBookingCard";
import ExperienceFAQ from "@/components/experiences/ExperienceFAQ";

type ActivityPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ActivityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = activities.find((item) => item.slug === slug);

  if (!activity) {
    return {
      title: "Activity not found",
      robots: { index: false, follow: true },
    };
  }

  return createExperienceMetadata({
    name: activity.name,
    title: `${activity.name} in ${activity.location}`,
    description: `Explore ${activity.name} in ${activity.location}, ${activity.country}. See activity details, practical information and enquiry options with Shungu Africa Travel.`,
    image: activity.image,
    path: `/activities/${activity.slug}`,
  });
}

export default async function ActivityPage({ params }: ActivityPageProps) {
  const { slug } = await params;

  const activity = activities.find((activity) => activity.slug === slug);

  if (!activity) {
    notFound();
  }

  return (
    <main id="main-content" className="bg-background">
      {/* Hero */}
      <ActivityHero
        name={activity.name}
        image={activity.image}
        location={activity.location}
        country={activity.country}
      />

      {/* Activity Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* Main Content */}
            <div>
              <ActivitySummary
                rating={activity.rating}
                reviewCount={activity.reviewCount}
                duration={activity.duration}
                location={activity.location}

              />

              <ActivityAbout 
                description={activity.description}
                name={activity.name}
              />
              <ActivityHighlights highlights={activity.highlights} />
              <ActivityItinerary
                items={activity.itinerary ?? []}
              />
              <ActivityIncluded items={activity.included ?? []} />
              <ActivityNotIncluded items={activity.notIncluded ?? []} />
              <ActivityMeetingPoint
                location={activity.location}
                pickup={activity.pickup}
              />

              <ExperienceFAQ
                faqs={activity.faqs ?? []}
              />
            </div>

            {/* Booking */}
            <aside>
              <ActivityBookingCard
                slug={activity.slug}
                pricing={activity.pricing}
                duration={activity.duration}
              />
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
