import Link from "next/link";
import Image from "next/image";

import type { Transfer } from "@/data/transfers";

type TransferCardProps = Transfer;

export default function TransferCard({
  slug,
  name,
  type,
  description,
  image,
  highlights,
}: TransferCardProps) {
  return (
    <article className="h-full overflow-hidden rounded-xs bg-white/80 shadow-2xl">
      <Link
        href={`/transfers/${slug}`}
        className="group flex h-full flex-col"
      >
        <div className="relative overflow-hidden">
          <Image
            src={image ?? "/images/optimized/placeholder.webp"}
            alt={name}
            width={900}
            height={600}
            quality={70}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col px-6 py-5">
          <p className="text-sm text-subtle">
            {type}
          </p>
          <h2 className="mt-2 text-section-title font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand">
            {name}
          </h2>
          <p className="mt-2 flex-1 text-sm leading-6 text-subtle">
            {description}
          </p>
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
          <span className="mt-5 border-t border-neutral-200 pt-4 text-sm font-medium text-brand">
            View transfer
          </span>
        </div>
      </Link>
    </article>
  );
}
