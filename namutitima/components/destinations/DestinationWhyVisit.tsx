import ExperienceSectionHeading from "@/components/experiences/ExperienceSectionHeading";
import ExperienceSectionSubHeading from "@/components/experiences/ExperienceSectionSubHeading";

type DestinationWhyVisitProps = {
  name: string;
  items: {
    title: string;
    description: string;
  }[];
};

export default function DestinationWhyVisit({
  name,
  items,
}: DestinationWhyVisitProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="mt-16 pt-10">
      <ExperienceSectionSubHeading>
        Discover
      </ExperienceSectionSubHeading>

      <ExperienceSectionHeading>
        Why visit {name}
      </ExperienceSectionHeading>

      <div className="mt-8 space-y-12">
        {items.map((item, index) => (
          <article key={item.title}>
            <h3 className="flex items-baseline gap-5 text-neutral-900">
              <span className="shrink-0 text-xl tracking-tight text-foreground/90">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-xl tracking-tight">
                {item.title}
              </span>
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-subtle">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}