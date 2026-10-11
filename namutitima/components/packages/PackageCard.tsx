import Link from "next/link";
import Image from "next/image";

import {
  getPackageCountries,
  getPackageFromPrice,
  type Package,
} from "@/data/packages";

type PackageCardProps = {
  slug: string;
  name: string;
  image: string;
  description: string;
  duration: string;
  location: Package["location"];
  highlights: string[];
  badge?: string;
  pricing: Package["pricing"];
};

export function PackageCard({
  slug,
  name,
  image,
  description,
  duration,
  location,
  highlights,
  badge,
  pricing,
}: PackageCardProps) {
  const fromPrice = getPackageFromPrice(pricing);
  const countries = getPackageCountries(location);

  return (
    <article className="h-full overflow-hidden shadow-2xl rounded-xs bg-white/80">
      <Link
        href={`/packages/${slug}`}
        prefetch={false}
        className="group flex h-full flex-col hover:shadow-lg"
      >
        <div className="relative h-72 overflow-hidden bg-neutral-100">
          <Image
            src={image}
            alt={`${name} travel package${countries.length ? ` in ${countries.join(" and ")}` : ""}`}
            fill
            quality={70}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {badge && (
            <span className="absolute left-4 top-4 rounded-xs bg-brand px-3 py-2 text-[11px] font-medium tracking-[0.12em] text-white">
              {badge}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col px-6 py-5">
          <div className="mb-2 flex text-foreground items-center text-sm">
            <span>{duration}</span>
          </div>

          <h2 className="text-section-title font-semibold tracking-tight text-foreground">
            {name}
          </h2>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-subtle">
            {description}
          </p>

          {countries.length > 0 && (
            <p className="mt-4 text-sm text-brand text-shadow-2xs">
              <span className="sr-only">Countries: </span>
              {countries.join(", ")}
            </p>
          )}

          <div className="mt-3 flex flex-wrap gap-2">
            {highlights.slice(0, 4).map((highlight) => (
              <span
                key={highlight}
                className="line-clamp-2 rounded-xs bg-background px-3 py-1.5 text-xs leading-5 text-foreground/90"
              >
                {highlight}
              </span>
            ))}
          </div>

          <div className="mt-5 border-t border-neutral-200 pt-4">
            {!pricing.label && (
              <p className="text-xs text-neutral-500">From per person</p>
            )}
            <p className="mt-2 text-section-title font-semibold tracking-tight text-foreground">
              {pricing.label ??
                (fromPrice === null
                  ? "Price on request"
                  : `${pricing.currency} ${fromPrice.toLocaleString()}`)}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
