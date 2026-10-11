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
              “I stayed here with a large group of friends and it was the best
              holiday experience I have ever had. Everything was absolutely
              perfect, particularly the rooms (with private plunge pools and
              bigger than king beds), food and guided drives. The staff could
              not have been more accommodating and the attention to detail was
              next level. The guides were phenomenal! So knowledgeable and
              dedicated to making our safari experience the best it could be,
              often continuing longer to ensure we saw as many animals as
              possible.”
            </p>
          </blockquote>
          <figcaption className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-white">
            Georgia S
            <span className="mt-2 block text-xs font-normal tracking-[0.12em] text-white/75">
              South Africa
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
