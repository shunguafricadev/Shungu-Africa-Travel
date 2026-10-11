import Image from "next/image";

type DestinationHeroProps = {
  name: string;
  image: string;
  description: string;
};

export default function DestinationHero({
  name,
  image,
}: DestinationHeroProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-100">
      <div className="h-[60vh] min-h-125 w-full">
        <Image
          src={image}
          alt={name}
          fill
          priority
          quality={70}
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <div className="flex max-w-4xl flex-col items-center">
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {name}
          </h1>
        </div>
      </div>
    </section>
  );
}