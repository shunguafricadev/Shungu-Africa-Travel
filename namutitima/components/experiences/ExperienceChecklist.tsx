import ExperienceSectionHeading from "@/components/experiences/ExperienceSectionHeading";
import ExperienceSectionSubHeading from "@/components/experiences/ExperienceSectionSubHeading";

type ExperienceChecklistProps = {
  subheading: string;
  title: string;
  items: string[];
  marker: "included" | "notIncluded";
};

export default function ExperienceChecklist({
  subheading,
  title,
  items,
  marker,
}: ExperienceChecklistProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="mt-12">
      <ExperienceSectionSubHeading>
        {subheading}
      </ExperienceSectionSubHeading>
      <ExperienceSectionHeading>{title}</ExperienceSectionHeading>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 text-sm leading-6 text-subtle"
          >
            <span
              className={
                marker === "included"
                  ? "mt-0.5 text-brand"
                  : "mt-0.5 text-foreground/30"
              }
              aria-hidden="true"
            >
              {marker === "included" ? "✓" : "×"}
            </span>

            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
