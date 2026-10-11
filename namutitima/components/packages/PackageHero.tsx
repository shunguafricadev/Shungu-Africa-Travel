import Image from "next/image";

type PackageHeroProps = {
  name: string;
  image: string;
  category: string;
  duration: string;
  countries: string[];
};

export default function PackageHero({
  name,
  image,
  duration,
  countries,
}: PackageHeroProps) {
  return (
    <section className="relative h-[55vh] min-h-105 overflow-hidden bg-neutral-100">
      <Image
        src={image}
        alt={`${name} travel package${countries.length ? ` in ${countries.join(" and ")}` : ""}`}
        fill
        priority
        quality={70}
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-6 text-center lg:px-8">
        <div className="max-w-3xl text-white">
          <span className="mb-5 inline-block rounded-xs bg-brand px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em]">
            {duration}
          </span>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            {name}
          </h1>
        </div>
      </div>
    </section>
  );
}