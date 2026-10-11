"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import Container from "@/components/ui/Container";

export function TravellerTestimonial() {
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
      aria-label="Traveller testimonial"
      className="relative isolate overflow-hidden bg-neutral-900 py-20 text-center text-white sm:py-28"
    >
      <div
        ref={imageRef}
        className="absolute -inset-y-12 inset-x-0 will-change-transform"
      >
        <Image
          src="/images/about/about-hero.webp"
          alt=""
          fill
          quality={70}
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/60" />

      <Container>
        <figure className="relative z-10 mx-auto max-w-4xl">
          <blockquote className="text-lg leading-8 text-white sm:text-xl sm:leading-9">
            <p>
              "From the moment we arrived, everything exceeded our expectations. The property was beautiful, the accommodations were incredibly comfortable, and every meal was a highlight. What really made the experience special was the outstanding hospitality and the team’s genuine passion for what they do. Our safari guides brought the African wilderness to life with their knowledge, enthusiasm, and ability to find incredible wildlife. Every day offered something new and memorable, and the entire experience felt thoughtfully planned from start to finish. It was the perfect combination of luxury, adventure, and relaxation. I would absolutely recommend this experience to anyone looking for a truly memorable African getaway."
            </p>
          </blockquote>
          <figcaption className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-white">
            Emily R.
            <span className="mt-2 block text-xs font-normal tracking-[0.12em] text-white/75">
              United States
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
