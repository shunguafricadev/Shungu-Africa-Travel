"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Activity } from "@/data/activities";
import { formatCurrency } from "@/lib/formatCurrency";

type ActivityCardProps = Pick<
  Activity,
  | "slug"
  | "name"
  | "location"
  | "country"
  | "image"
  | "description"
  | "duration"
  | "pricing"
  | "rating"
  | "reviewCount"
  | "highlights"
  | "badge"
>;

export function ActivityCard({
  slug,
  name,
  location,
  country,
  image,
  description,
  duration,
  pricing,
  rating,
  reviewCount,
  highlights,
  badge,
}: ActivityCardProps) {
  const [liveRating, setLiveRating] = useState(rating);
  const [liveReviewCount, setLiveReviewCount] = useState(reviewCount);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let isCurrent = true;
    const card = cardRef.current;

    if (!card) return;

    async function loadReviewSummary() {
      try {
        const response = await fetch(
          `/api/reviews?activity=${encodeURIComponent(slug)}`,
        );

        if (!response.ok) {
          return;
        }

        const result = (await response.json()) as {
          reviews?: { rating?: number }[];
        };
        const approvedReviews = result.reviews ?? [];

        if (!isCurrent || approvedReviews.length === 0) {
          if (isCurrent) {
            setLiveRating(null);
            setLiveReviewCount(0);
          }
          return;
        }

        const averageRating =
          approvedReviews.reduce(
            (sum, review) => sum + (review.rating ?? 0),
            0,
          ) / approvedReviews.length;

        setLiveRating(Math.round(averageRating * 10) / 10);
        setLiveReviewCount(approvedReviews.length);
      } catch {
        // Keep the catalog summary when reviews cannot be loaded.
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          void loadReviewSummary();
        }
      },
      { rootMargin: "300px 0px" },
    );
    observer.observe(card);

    return () => {
      isCurrent = false;
      observer.disconnect();
    };
  }, [slug, rating, reviewCount]);

  return (
    <article
      ref={cardRef}
      className="h-full bg-white/80 shadow-2xl overflow-hidden rounded-xs "
    >
      <Link
        href={`/activities/${slug}`}
        className="group flex h-full flex-col hover:shadow-lg"
      >
        {/* Image */}
        <div className="relative h-72 overflow-hidden bg-neutral-100">
          <Image
            src={image}
            alt={`${name} in ${location}, ${country}`}
            fill
            quality={70}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Badge */}
          {badge && (
            <span className="absolute left-4 top-4 rounded-xs bg-brand px-3 py-2 text-[11px] font-medium tracking-[0.12em] text-white">
              {badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col px-6 py-5">
          {/* Duration */}
          <div className="mb-2 flex items-center gap-2 text-sm text-subtle">
            <span>{duration}</span>
          </div>

          {/* Name */}
          <h2 className="text-section-title font-semibold tracking-tight text-foreground">
            {name}
          </h2>

          {/* Description */}
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-subtle">
            {description}
          </p>

          {/* Location and Rating */}
          <div className="mt-4 flex items-center gap-4 text-sm text-brand text-shadow-xs">
            <p>
              <span className="sr-only">Destination: </span>
              {location}
            </p>
            {liveRating !== null && liveReviewCount > 0 && (
              <span
                aria-label={`Rated ${liveRating} out of 5 from ${liveReviewCount} reviews`}
                role="img"
              >
                <span aria-hidden="true">★</span> {liveRating} ({liveReviewCount})
              </span>
            )}
          </div>

          {/* Highlights */}
          <div className="mt-3 flex flex-wrap gap-2">
            {highlights.slice(0, 4).map((highlight) => (
              <span
                key={highlight}
                className="line-clamp-2 rounded-xs bg-background px-3 py-1.5 text-xs leading-5 text-subtle"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* Price + CTA */}
          <div className="mt-5 flex items-end justify-between border-t border-neutral-200 pt-4">
            <div>
              <p className="text-sm text-neutral-500">{pricing.adult.label}</p>

              <p className="mt-2 text-section-title font-semibold tracking-tight text-foreground">
                {formatCurrency(pricing.adult.amount, pricing.adult.currency)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
