import ExperienceSectionHeading from "@/components/experiences/ExperienceSectionHeading";
import ExperienceSectionSubHeading from "@/components/experiences/ExperienceSectionSubHeading";

type ActivityHighlightsProps = {
  highlights: string[];
};

export default function ActivityHighlights({
  highlights,
}: ActivityHighlightsProps) {
  if (!highlights?.length) {
    return null;
  }

  return (
    <section className="mt-12 pt-10">
      <ExperienceSectionSubHeading>
        Highlights
      </ExperienceSectionSubHeading>

      <ExperienceSectionHeading>
        What you’ll experience
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