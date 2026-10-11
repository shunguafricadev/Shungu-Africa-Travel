import Link from "next/link";
import Image from "next/image";
type BlogCardProps = {
  slug: string;
  title: string;
  excerpt?: string;
  category: string;
  readTime: string;
  image: string;
  author: string;
  date: string;
};

export function BlogCard({
  slug,
  title,
  excerpt,
  category,
  readTime,
  image,
  author,
  date,
}: BlogCardProps) {
  return (
    <article className="min-w-0">
      <Link href={`/blog/${slug}`} className="group block">
        {/* Image */}
        <div className="relative aspect-3/2 overflow-hidden rounded-xs bg-neutral-100">
          <Image
            src={image}
            alt={title}
            fill
            quality={70}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Category */}
          <span className="absolute left-4 top-4 rounded-xs bg-brand px-3 py-2 text-[11px]  tracking-[0.12em] text-white">
            {category}
          </span>
        </div>

        {/* Card Content */}
        <div className="border border-neutral-300 px-6 pb-5">
          {/* Read Time */}
          <div className="mt-5 text-xs tracking-[0.12em] text-subtle">
            {readTime}
          </div>

          {/* Title */}
          <h2 className="mt-2.5 line-clamp-2 text-2xl font-semibold leading-[1.2] tracking-tight text-foreground/90">
            {title}
          </h2>

          {excerpt && (
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-subtle">
              {excerpt}
            </p>
          )}

          {/* Read More */}
          <div className="mt-6">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-foreground/90">
              <span>Read more</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 transition-all duration-200 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </span>
          </div>

          {/* Author + Date */}
          <div className="mt-6 flex items-center justify-between border-t border-neutral-300 pt-4">
            <span className="text-xs font-medium text-subtle">
              {author}
            </span>

            <span className="text-xs text-subtle">
              {date}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}