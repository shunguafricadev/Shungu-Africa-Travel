import ExperienceSectionHeading from "@/components/experiences/ExperienceSectionHeading";
import ExperienceSectionSubHeading from "@/components/experiences/ExperienceSectionSubHeading";

type PackageAboutProps = {
  description: string;
};

export default function PackageAbout({
  description,
}: PackageAboutProps) {
  return (
    <section className="mt-12">
      <ExperienceSectionSubHeading>
        The journey
      </ExperienceSectionSubHeading>

      <ExperienceSectionHeading>
        A journey built around the experience.
      </ExperienceSectionHeading>

      <p className="mt-5 max-w-3xl text-base leading-8 text-subtle">
        {description}
      </p>
    </section>
  );
}