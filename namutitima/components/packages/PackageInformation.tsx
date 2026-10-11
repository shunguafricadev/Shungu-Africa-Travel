import ExperienceInformation from "@/components/experiences/ExperienceInformation";

type PackageInformationProps = {
  items: string[];
};

export default function PackageInformation({
  items,
}: PackageInformationProps) {
  return (
    <ExperienceInformation items={items} />
  );
}