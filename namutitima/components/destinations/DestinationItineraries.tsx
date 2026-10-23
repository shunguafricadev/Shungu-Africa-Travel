import Link from "next/link";

import { activities } from "@/data/activities";
import type {
  DestinationFirstVisitItinerary,
  DestinationItineraryDay,
} from "@/data/destinations";
import type { Package } from "@/data/packages";

import ExperienceSectionHeading from "@/components/experiences/ExperienceSectionHeading";
import ExperienceSectionSubHeading from "@/components/experiences/ExperienceSectionSubHeading";

type DestinationItinerariesProps = {
  itineraries: Package[];
  firstVisitItinerary?: DestinationFirstVisitItinerary;
  heading?: string;
  showViewLink?: boolean;
};

function normaliseText(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function DestinationItineraryDays({
  itinerary,
}: {
  itinerary: DestinationItineraryDay[];
}) {
  return (
    <div className="mt-6">
      {itinerary.map((day, index) => (
        <div key={`${day.day}-${day.title}`} className="flex gap-5">
          <div className="relative flex w-8 shrink-0 justify-center">
            {index !== itinerary.length - 1 && (
              <div className="absolute top-8 bottom-0 w-px bg-foreground/20" />
            )}
            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-medium text-brand">
              {index + 1}
            </div>
          </div>

          <div className={`min-w-0 ${index !== itinerary.length - 1 ? "pb-10" : ""}`}>
            <p className="text-sm font-medium tracking-wide text-earth/90">
              {day.day}
            </p>
            <h4 className="mt-1 text-xl text-foreground/90">{day.title}</h4>
            <p className="mt-1 text-sm leading-6 text-subtle">
              {day.description}
            </p>

            {(day.location || day.accommodation || day.meals) && (
              <dl className="mt-4 grid gap-2 text-sm text-subtle">
                {day.location && (
                  <div>
                    <dt className="inline font-medium text-foreground/80">
                      Location:{" "}
                    </dt>
                    <dd className="inline">{day.location}</dd>
                  </div>
                )}
                {day.accommodation && (
                  <div>
                    <dt className="inline font-medium text-foreground/80">
                      Accommodation:{" "}
                    </dt>
                    <dd className="inline">{day.accommodation}</dd>
                  </div>
                )}
                {day.meals && (
                  <div>
                    <dt className="inline font-medium text-foreground/80">
                      Meals:{" "}
                    </dt>
                    <dd className="inline">{day.meals}</dd>
                  </div>
                )}
              </dl>
            )}

            {day.times && day.times.length > 0 && (
              <div className="mt-6 space-y-5">
                {day.times.map((time) => {
                  const activity = time.activitySlug
                    ? activities.find(
                        (item) => item.slug === time.activitySlug,
                      )
                    : undefined;

                  return (
                    <div
                      key={`${day.day}-${time.time}-${time.title}`}
                      className="gap-4"
                    >
                      <p className="text-sm tracking-wide text-earth/90">
                        {time.time}
                      </p>
                      <div>
                        {activity ? (
                          <h5 className="text-lg text-foreground/90">
                            <Link
                              href={`/activities/${activity.slug}`}
                              className="underline decoration-earth underline-offset-4 transition-colors hover:decoration-neutral-900"
                            >
                              {activity.name}
                            </Link>
                          </h5>
                        ) : (
                          <h5 className="text-lg text-foreground/90">
                            {time.title}
                          </h5>
                        )}
                        <p className="mt-1 text-sm leading-6 text-subtle">
                          {time.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DestinationItineraries({
  itineraries,
  firstVisitItinerary,
  heading = "Suggested itineraries",
  showViewLink = true,
}: DestinationItinerariesProps) {
  if (itineraries.length === 0 && !firstVisitItinerary) {
    return null;
  }

  return (
    <section className="mt-16 pt-10">
      <ExperienceSectionSubHeading>
        Plan your stay
      </ExperienceSectionSubHeading>

      <ExperienceSectionHeading>
        {heading}
      </ExperienceSectionHeading>

      <div className="mt-8 space-y-12">
        {firstVisitItinerary && (
          <article>
            <p className="text-sm tracking-wide text-foreground/90">
              {firstVisitItinerary.duration}
            </p>
            <h3 className="mt-1 text-2xl text-foreground/90">
              {firstVisitItinerary.title}
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-subtle">
              {firstVisitItinerary.description}
            </p>
            <DestinationItineraryDays
              itinerary={firstVisitItinerary.itinerary}
            />
          </article>
        )}

        {itineraries.map((packageItem) => (
          <article key={packageItem.slug}>
            <div>
              <p className="text-sm tracking-wide text-foreground/90">
                {packageItem.duration.label}
              </p>

              <Link
                href={`/packages/${packageItem.slug}`}
                className="group inline-block"
              >
                <h3 className="mt-1 text-2xl text-foreground/90 transition-colors group-hover:text-brand">
                  {packageItem.name}
                </h3>
              </Link>
            </div>

            <div className="mt-6">
              {packageItem.itinerary.map((day, index) => (
                <div
                  key={`${packageItem.slug}-${day.day}`}
                  className="flex gap-5"
                >
                  <div className="relative flex w-8 shrink-0 justify-center">
                    {index !== packageItem.itinerary.length - 1 && (
                      <div className="absolute top-8 bottom-0 w-px bg-foreground/20" />
                    )}

                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-medium text-brand">
                      {index + 1}
                    </div>
                  </div>

                  <div
                    className={`min-w-0 ${index !== packageItem.itinerary.length - 1 ? "pb-10" : ""
                      }`}
                  >
                    <p className="text-sm font-medium tracking-wide text-earth/90">
                      {day.day}
                    </p>

                    <h4 className="mt-1 text-xl text-foreground/90">
                      {day.title}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-subtle">
                      {day.description}
                    </p>

                    {(day.location || day.accommodation || day.meals) && (
                      <dl className="mt-4 grid gap-2 text-sm text-subtle">
                        {day.location && (
                          <div>
                            <dt className="inline font-medium text-foreground/80">
                              Location:{" "}
                            </dt>
                            <dd className="inline">{day.location}</dd>
                          </div>
                        )}
                        {day.accommodation && (
                          <div>
                            <dt className="inline font-medium text-foreground/80">
                              Accommodation:{" "}
                            </dt>
                            <dd className="inline">{day.accommodation}</dd>
                          </div>
                        )}
                        {day.meals && (
                          <div>
                            <dt className="inline font-medium text-foreground/80">
                              Meals:{" "}
                            </dt>
                            <dd className="inline">{day.meals}</dd>
                          </div>
                        )}
                      </dl>
                    )}

                    {day.times && day.times.length > 0 && (
                      <div className="mt-6 space-y-5">
                        {day.times.map((time) => {
                          const activity = (day.activities ?? [])
                            .map((activitySlug) =>
                              activities.find(
                                (item) => item.slug === activitySlug,
                              ),
                            )
                            .find((item) => {
                              if (!item) {
                                return false;
                              }

                              const timeText = normaliseText(
                                `${time.title} ${time.description}`,
                              );

                              const activityText = normaliseText(item.name);

                              return timeText.includes(activityText);
                            });

                          return (
                            <div
                              key={`${packageItem.slug}-${day.day}-${time.time}-${time.title}`}
                              className="gap-4"
                            >
                              <p className="text-sm tracking-wide text-earth/90">
                                {time.time}
                              </p>

                              <div>
                                {activity ? (
                                  <h5 className="text-lg text-foreground/90">
                                    <Link
                                      href={`/activities/${activity.slug}`}
                                      className="underline decoration-earth underline-offset-4 transition-colors hover:decoration-neutral-900"
                                    >
                                      {activity.name}
                                    </Link>
                                  </h5>
                                ) : (
                                  <h5 className="text-lg text-foreground/90">
                                    {time.title}
                                  </h5>
                                )}

                                <p className="mt-1 text-sm leading-6 text-subtle">
                                  {time.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {showViewLink && (
              <Link
                href={`/packages/${packageItem.slug}`}
                className="mt-8 flex w-full items-center font-medium justify-center bg-brand px-5 py-3 text-sm text-white shadow-xl transition-colors hover:bg-earth/90 sm:inline-flex sm:w-auto"
              >
                View Itinerary
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}