import ExperienceSectionHeading from "@/components/experiences/ExperienceSectionHeading";
import ExperienceSectionSubHeading from "@/components/experiences/ExperienceSectionSubHeading";

type PackageDestinationsProps = {
  destinations: string[];
};

export default function PackageDestinations({
  destinations,
}: PackageDestinationsProps) {
  if (!destinations?.length) {
    return null;
  }

  return (
    <section className="mt-12 pt-10">
      <ExperienceSectionSubHeading>
        Where you’ll go
      </ExperienceSectionSubHeading>

      <ExperienceSectionHeading>
        Destinations
      </ExperienceSectionHeading>

      <div className="mt-5 flex flex-wrap gap-3">
        {destinations.map((destination) => (
          <span
            key={destination}
            className="rounded-full border bg-brand/5 border-brand/20 px-4 py-2.5 text-sm text-foreground"
          >
            {destination}
          </span>
        ))}
      </div>
    </section>
  );
}