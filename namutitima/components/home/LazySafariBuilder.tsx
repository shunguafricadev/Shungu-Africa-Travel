"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type RefObject } from "react";

import Container from "@/components/ui/Container";

function SafariBuilderPlaceholder({
  onLoad,
  placeholderRef,
}: {
  onLoad?: () => void;
  placeholderRef?: RefObject<HTMLElement | null>;
}) {
  return (
    <section
      ref={placeholderRef}
      id="safari-builder"
      aria-labelledby="safari-builder-title"
      aria-busy="true"
      className="py-20 sm:py-24"
    >
      <Container>
        <div className="mx-auto max-w-7xl px-2">
          <div className="mb-10 text-center">
            <p className="text-eyebrow font-medium tracking-[0.18em] text-brand">
              Personalised Experience
            </p>
            <h2
              id="safari-builder-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Build Your Itinerary
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-subtle">
              Create a trip that feels like yours. Choose from our available
              destinations and activities, set your pace, and select an
              accommodation budget range.
            </p>
          </div>

          <div className="overflow-hidden rounded-xs border border-neutral-200 bg-white">
            <div className="border-b border-neutral-200 bg-neutral-50 px-5 py-5 sm:px-8">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-foreground">
                  Interactive itinerary planner
                </p>
                <span className="text-xs text-subtle">Loading on demand</span>
              </div>
              <div className="grid grid-cols-5 gap-2" aria-hidden="true">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 rounded-full ${
                      index === 0 ? "bg-brand" : "bg-neutral-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="px-5 py-7 sm:px-8 sm:py-9">
              <h3 className="text-xl font-semibold text-foreground">
                Where would you like to go?
              </h3>
              <p className="mt-2 text-sm text-subtle">
                Select one or more destinations from our travel guide.
              </p>
              <div
                className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                aria-hidden="true"
              >
                {Array.from({ length: 6 }, (_, index) => (
                  <div
                    key={index}
                    className="min-h-36 rounded-xs border border-neutral-200 bg-neutral-50"
                  />
                ))}
              </div>
              {onLoad && (
                <button
                  type="button"
                  onClick={onLoad}
                  className="mt-6 text-sm font-medium text-brand underline underline-offset-4"
                >
                  Load the interactive planner
                </button>
              )}
              <p className="sr-only" role="status">
                The interactive itinerary planner will load as you reach this
                section.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const InteractiveSafariBuilder = dynamic(
  () =>
    import("@/components/home/SafariBuilder").then(
      (module) => module.SafariBuilder,
    ),
  {
    loading: () => <SafariBuilderPlaceholder />,
  },
);

export function LazySafariBuilder() {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "900px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return shouldLoad ? (
    <InteractiveSafariBuilder />
  ) : (
    <SafariBuilderPlaceholder
      onLoad={() => setShouldLoad(true)}
      placeholderRef={sectionRef}
    />
  );
}
