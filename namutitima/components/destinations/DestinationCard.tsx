import Link from "next/link";
import Image from "next/image";

type DestinationCardProps = {
  slug: string;
  name: string;
  country: string;
  region: string;
  heroImage: string;
  sizes: string;
  location?: string;
  image?: string;
  description?: string;
};

export function DestinationCard({
  slug,
  name,
  country,
  heroImage,
  image,
  sizes,
}: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${slug}`}
      className="group relative block overflow-hidden rounded-xs"
    >
      {/* Image */}
      <div className="relative h-80 w-full bg-neutral-100">
        <Image
          src={heroImage || image || "/images/destinations/destinations-hero.webp"}
          alt={name}
          fill
          quality={70}
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-3 p-6 text-white">
        <h2 className="text-section-title font-semibold tracking-tight">{name}</h2>
        <p className="mt-1 text-sm text-white/65">{country}</p>
      </div>
    </Link>
  );
}