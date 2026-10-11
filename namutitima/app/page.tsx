import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import { DestinationsPreview } from "@/components/home/DestinationsPreview";
import { ExperiencesPreview } from "@/components/home/ExperiencesPreview";
import { BlogsPreview } from "@/components/home/BlogsPreview";
import { PackagesPreview } from "@/components/home/PackagesPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { LazySafariBuilder } from "@/components/home/LazySafariBuilder";
import { TravellerTestimonial } from "@/components/home/TravellerTestimonial";

export const metadata: Metadata = {
  title: {
    absolute: "Shungu Africa Travel | African Tours & Tailor-Made Journeys",
  },
  description:
    "Discover Africa with Shungu Africa Travel. Explore safari tours, holiday packages, excursions and tailor-made itineraries, and start planning your next adventure.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <DestinationsPreview />
      <AboutPreview />
      <PackagesPreview />
      <LazySafariBuilder />
      <ExperiencesPreview />
      <TravellerTestimonial />
      <BlogsPreview />
    </main>
  );
}
