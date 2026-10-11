import ExperienceSectionHeading from "@/components/experiences/ExperienceSectionHeading";
import ExperienceSectionSubHeading from "@/components/experiences/ExperienceSectionSubHeading";

type PackageHighlightsProps = {
  highlights: string[];
};

export default function PackageHighlights({
  highlights,
}: PackageHighlightsProps) {
  if (!highlights?.length) {
    return null;
  }

  return (
    <section className="mt-12 pt-10">
      <ExperienceSectionSubHeading>
        Package
      </ExperienceSectionSubHeading>

      <ExperienceSectionHeading>
        Highlights
      </ExperienceSectionHeading>

      <div className="mt-5 flex flex-wrap gap-2">
        {highlights.map((highlight) => (
          <span
            key={highlight}
            className="rounded-full bg-brand/5 shadow-2xs border border-brand/20 px-4 py-2.5 text-sm text-foreground"
          >
            {highlight}
          </span>
        ))}
      </div>
    </section>
  );
}