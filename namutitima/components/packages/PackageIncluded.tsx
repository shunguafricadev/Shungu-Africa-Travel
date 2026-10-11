import ExperienceChecklist from "@/components/experiences/ExperienceChecklist";

type PackageIncludedProps = {
  items: string[];
};

export default function PackageIncluded({
  items,
}: PackageIncludedProps) {
  return (
    <ExperienceChecklist
      subheading="Included"
      title="What's included"
      items={items}
      marker="included"
    />
  );
}