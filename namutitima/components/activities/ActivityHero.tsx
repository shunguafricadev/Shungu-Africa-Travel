import Image from "next/image";

type ActivityHeroProps = {
  name: string;
  image: string;
  location: string;
  country: string;
};

export default function ActivityHero({
  name,
  image,
  location,
  country,
}: ActivityHeroProps) {
  return (
    <section className="relative bg-neutral-100">
      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-125 w-full">
        <Image
          src={image || "/images/activities/experiences-hero.png"}
          alt={`${name} in ${location}, ${country}`}
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          {name}
        </h1>
      </div>
    </section>
  );
}