import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  MapPinned,
  Route,
  ShieldCheck,
} from "lucide-react";

import { PageHero } from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Get to know Shungu Africa Travel, your partner for African travel planning, tours, excursions, transfers and tailor-made travel experiences.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    title: "About Shungu Africa Travel | Zimbabwe-Based Travel Company",
    description:
      "Meet the Zimbabwe-based travel team planning journeys, tours, transfers and experiences across Southern Africa.",
    url: "/about",
    images: [
      {
        url: "/images/about/about-hero.webp",
        alt: "About Shungu Africa Travel",
      },
    ],
  },
};

const services = [
  {
    title: "Safari & Wildlife Travel",
    description:
      "Thoughtfully planned Zimbabwe safari and wildlife experiences, shaped around your interests, route and style of travel.",
    icon: Compass,
  },
  {
    title: "Tailor-Made African Journeys",
    description:
      "Multi-day African itineraries designed around where you want to go, how you want to travel and what you want to experience.",
    icon: Route,
  },
  {
    title: "Accommodation",
    description:
      "Hotels, lodges and camps selected to fit your itinerary, travel style, preferences and destination.",
    icon: ShieldCheck,
  },
  {
    title: "Transport",
    description:
      "Private transport and practical travel connections that keep your journey moving smoothly.",
    icon: Route,
  },
  {
    title: "Excursions & Experiences",
    description:
      "Activities, excursions and destination experiences that help you discover more of Zimbabwe and Southern Africa.",
    icon: MapPinned,
  },
  {
    title: "Transfers",
    description:
      "Airport pickups, hotel drop-offs and local transfers arranged around your itinerary.",
    icon: Route,
  },
];

type Testimonial = {
  id: string;
  name: string;
  date: string;
  text: string;
  source: string;
  sourceUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    date: "September 2026",
    text: "Shungu Africa made our Victoria Falls trip completely seamless. From airport transfers and accommodation to our safari and local experiences, everything was thoughtfully arranged. We felt looked after from the moment we arrived.",
    source: "Google",
    sourceUrl: "https://www.google.com/",
  },
  {
    id: "2",
    name: "James Anderson",
    date: "August 2026",
    text: "Excellent service from start to finish. The team understood exactly what we wanted and put together a fantastic itinerary around Victoria Falls and Hwange. The local knowledge really made a difference.",
    source: "TripAdvisor",
    sourceUrl: "https://www.tripadvisor.com/",
  },
  {
    id: "3",
    name: "Emily Carter",
    date: "July 2026",
    text: "A wonderful experience with a very professional and responsive team. Everything was well coordinated, our transfers were smooth, and the activities were exactly what we were looking for. We would happily travel with Shungu Africa again.",
    source: "Google",
    sourceUrl: "https://www.google.com/",
  },
];

function ReviewSourceBadge({ source }: { source: string }) {
  const isGoogle = source.toLowerCase() === "google";

  return (
    <div
      className="inline-flex size-7 items-center justify-center rounded-full border-2 border-background bg-white shadow-sm"
      aria-label={`Review published on ${source}`}
      title={source}
    >
      {isGoogle ? (
        <span
          aria-hidden="true"
          className="text-base font-bold leading-none"
          style={{
            background:
              "conic-gradient(from -45deg, #4285f4 0 25%, #34a853 0 50%, #fbbc05 0 75%, #ea4335 0)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          G
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="flex h-4 w-5 items-center justify-center gap-px rounded-full bg-[#34e0a1]"
        >
          <span className="flex size-2 items-center justify-center rounded-full bg-white">
            <span className="size-1 rounded-full bg-[#223441]" />
          </span>
          <span className="flex size-2 items-center justify-center rounded-full bg-white">
            <span className="size-1 rounded-full bg-[#223441]" />
          </span>
        </span>
      )}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="flex h-full flex-col rounded-[1.25rem] border border-brand/10 bg-background p-5 transition duration-300 hover:-translate-y-1 hover:shadow-sm">
      <div className="flex items-center gap-4 border-b border-brand/10 pb-4">
        <div className="relative shrink-0">
          <div
            aria-hidden="true"
            className="inline-flex size-14 items-center justify-center rounded-full bg-brand/20 text-sm font-semibold tracking-[0.08em] text-brand"
          >
            {initials}
          </div>

          <div className="absolute -bottom-1 -right-1">
            <ReviewSourceBadge source={testimonial.source} />
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-foreground">
            {testimonial.sourceUrl ? (
              <a
                href={testimonial.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {testimonial.name}
              </a>
            ) : (
              testimonial.name
            )}
          </h3>

          <div className="mt-1 text-xs text-muted">
            <span>{testimonial.date}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex-1">
        <p className="max-h-26 overflow-y-auto pr-2 text-sm leading-7 text-subtle scrollbar-thin scrollbar-track-transparent scrollbar-thumb-brand/20">
          {testimonial.text}
        </p>
      </div>
    </article>
  );
}

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-background">
      {/* HERO */}
      <PageHero
        image="/images/about/about-hero.webp"
        title="Africa, with purpose"
      />

      {/* INTRODUCTION */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <div>
              <p className="text-eyebrow font-medium tracking-[0.18em] text-brand">
                About Shungu Africa Travel
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Who is Shungu Africa Travel?
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-8 text-subtle">
              <p>
                Shungu Africa Travel is a Zimbabwe-based travel company focused on creating meaningful, well-planned journeys in Zimbabwe and across Southern Africa.
                We specialise in planning, organising and delivering African journeys, bringing together the services and local knowledge needed to make travel practical, connected and enjoyable.
                We operate as an inbound tour operator, destination management company (DMC), travel agency and tourism service provider. We bring together accommodation, transportation, transfers, activities, excursions, safaris and local expertise for individuals, families, groups, corporate travellers, travel agents and international tour operators.
                Shungu Africa Travel was created to do things thoughtfully, from the
                start.
              </p>

              <p className="font-medium text-foreground/90">

              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* EXPERIENCE */}
      <section className="py-10 sm:py-6">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <p className="text-sm tracking-[0.18em] text-brand">
                Experience matters
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground/90 sm:text-4xl">
                More than 20+ years of tourism experience behind every journey.
              </h2>
            </div>

            <div>

              <div className="mt-8 space-y-5 text-base leading-8 text-subtle">
                <p>
                  We understand that a great journey is not simply a collection
                  of hotels, transfers and activities.The details need to work together the timing, the routing,
                  the accommodation, the experiences and the people looking
                  after you along the way.
                  That experience shapes the way we approach every itinerary
                  carefully, practically and with the traveller in mind.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-sm tracking-[0.18em] text-brand">
              What we do
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground/90 sm:text-4xl">
              Travel planning, destination management and experiences.
            </h2>

            <p className="mt-6 text-base leading-8 text-muted">
              From a single experience to a complete multi-day journey, we
              coordinate the services that help make your trip work from
              beginning to end.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
            {services.map((service) => {
              return (
                <article
                  key={service.title}
                  className="group rounded-xs border border-brand/20 bg-brand/5 px-5 py-5 text-sm text-foreground shadow-2xs transition-colors duration-300 hover:bg-brand/10 sm:px-6 sm:py-7"
                >
                  <h3 className="text-lg tracking-tight text-foreground/80 transition-colors group-hover:text-brand">
                    {service.title}
                  </h3>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="overflow-hidden bg-earth py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-10">
              <p className="text-sm tracking-[0.18em] text-brand">
                What our travellers say
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-background/90 sm:text-4xl">
                Experiences shared by our guests.
              </h2>
            </div>

            <div
              aria-label="Traveller testimonials"
              className="min-w-0 w-full touch-pan-x overflow-x-auto pb-5 scrollbar-none [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex w-max gap-5">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-[85vw] max-w-112.5 shrink-0 sm:w-105 lg:w-112.5"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* OUR APPROACH */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm tracking-[0.18em] text-brand">
              Our approach
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground/90 sm:text-5xl">
              Travel should feel considered, connected and personal.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-subtle">
              We approach travel with curiosity, care and intention. We focus
              on practical planning, clear communication, local coordination
              and attention to detail so that the journey works as a whole.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs shadow-lg bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
              >
                Start planning your journey
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}