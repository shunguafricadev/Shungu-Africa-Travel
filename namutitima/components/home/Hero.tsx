"use client";

import Link from "next/link";
import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

const heroImage = "/images/optimized/destinations/destinations-hero.webp";
const heroVideo = "/videos/home/herovid-optimized.webm";

function subscribeToMotionPreference(callback: () => void) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", callback);
  return () => preference.removeEventListener("change", callback);
}

function getMotionPreference() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const motionAllowed = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    () => false,
  );

  useEffect(() => {
    if (!motionAllowed) return;

    const timeoutId = window.setTimeout(() => setVideoReady(true), 1800);
    return () => window.clearTimeout(timeoutId);
  }, [motionAllowed]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frameId = 0;

    const updateParallax = () => {
      frameId = 0;
      const section = sectionRef.current;
      const background = backgroundRef.current;

      if (!section || !background) return;

      const bounds = section.getBoundingClientRect();
      const distanceFromCenter =
        window.innerHeight / 2 - (bounds.top + bounds.height / 2);

      background.style.transform = `translateY(${distanceFromCenter * 0.09}px) scale(1.12)`;
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
      className="relative min-h-svh overflow-hidden bg-black text-white"
    >
      {/* Background Image */}
      <div
        ref={backgroundRef}
        className="absolute -inset-y-12 inset-x-0 will-change-transform"
      >
        <Image
          src={heroImage}
          alt=""
          fill
          fetchPriority="high"
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />
        {motionAllowed && videoReady && (
          <video
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              videoPlaying ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={heroImage}
            aria-hidden="true"
            onPlaying={() => setVideoPlaying(true)}
          >
            <source src={heroVideo} type="video/webm" />
          </video>
        )}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-svh items-center justify-center px-6 py-24 text-center sm:px-8 lg:px-12">
        <div className="w-full max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Plan Your Zimbabwe Safari & African Journey
          </h1>

          <Link
            href="/activities"
            className="mt-8 inline-flex items-center rounded-xs bg-transparent px-7 py-3 text-md font-medium text-white border border-white  transition-all duration-300 hover:bg-brand hover:border-brand hover:text-white"
          >
           Start Here
          </Link>
        </div>
      </div>
    </section>
  );
}
