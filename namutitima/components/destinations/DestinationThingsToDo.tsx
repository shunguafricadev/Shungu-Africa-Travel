import Link from "next/link";

import { activities } from "@/data/activities";
import type { DestinationThingToDo } from "@/data/destinations";

import ExperienceSectionHeading from "@/components/experiences/ExperienceSectionHeading";
import ExperienceSectionSubHeading from "@/components/experiences/ExperienceSectionSubHeading";

type DestinationThingsToDoProps = {
  items: DestinationThingToDo[];
};

export default function DestinationThingsToDo({
  items,
}: DestinationThingsToDoProps) {
  const linkedActivities = items
    .flatMap((item) => {
      const activity = activities.find(
        (activityItem) => activityItem.slug === item.slug,
      );
      return activity ? [activity] : [];
    })
    .slice(0, 6);

  if (linkedActivities.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-10">
      <ExperienceSectionSubHeading>
        Experiences
      </ExperienceSectionSubHeading>

      <ExperienceSectionHeading>Top activities</ExperienceSectionHeading>

      <div className="mt-8 space-y-5">
        {linkedActivities.map((activity) => (
          <article key={activity.slug}>
            <Link
              href={`/activities/${activity.slug}`}
              className="text-sm font-medium text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900"
            >
              {activity.name}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}