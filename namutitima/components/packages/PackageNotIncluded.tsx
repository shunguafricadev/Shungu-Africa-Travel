import ExperienceChecklist from "@/components/experiences/ExperienceChecklist";

type PackageNotIncludedProps = {
  items: string[];
};

export default function PackageNotIncluded({
  items,
}: PackageNotIncludedProps) {
  return (
    <ExperienceChecklist
      subheading="Not included"
      title="What's not included"
      items={items}
      marker="notIncluded"
    />
  );
}