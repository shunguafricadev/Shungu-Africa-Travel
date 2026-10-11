"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import Container from "@/components/ui/Container";

export function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frameId = 0;

    const updateParallax = () => {
      frameId = 0;
      const section = sectionRef.current;
      const image = imageRef.current;

      if (!section || !image) return;

      const bounds = section.getBoundingClientRect();
      const distanceFromCenter =
        window.innerHeight / 2 - (bounds.top + bounds.height / 2);

      image.style.transform = `translateY(${distanceFromCenter * 0.09}px) scale(1.12)`;
    };

    const onScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="About Shungu Africa Travel"
      className="relative isolate overflow-hidden bg-neutral-900 py-20 text-white sm:py-28"
    >
      <div
        ref={imageRef}
        className="absolute -inset-y-12 inset-x-0 will-change-transform"
      >
        <Image
          src="/images/optimized/about/about-preview.webp"
          alt=""
          fill
          quality={70}
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/55" />

      <Container>
        <div className="relative z-10 mx-auto max-w-6xl space-y-6">
          <div>
            <p className="text-eyebrow font-medium tracking-[0.18em] text-white">
              About Shungu Africa Travel
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Who is Shungu Africa Travel?
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-8 text-white">
            <p>
              Shungu Africa Travel is a Zimbabwe-based travel company focused
              on creating meaningful, well-planned journeys in Zimbabwe and
              across Southern Africa. We specialise in planning, organising and
              delivering African journeys, bringing together the services and
              local knowledge needed to make travel practical, connected and
              enjoyable. We operate as an inbound tour operator, destination
              management company (DMC), travel agency and tourism service
              provider. We bring together accommodation, transportation,
              transfers, activities, excursions, safaris and local expertise
              for individuals, families, groups, corporate travellers, travel
              agents and international tour operators. Shungu Africa Travel was
              created to do things thoughtfully, from the start.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
