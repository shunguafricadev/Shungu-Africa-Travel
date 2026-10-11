import ExperienceSectionHeading from "@/components/experiences/ExperienceSectionHeading";
import ExperienceSectionSubHeading from "@/components/experiences/ExperienceSectionSubHeading";

type PackageCancellationProps = {
  cancellation: string;
};

export default function PackageCancellation({
  cancellation,
}: PackageCancellationProps) {
  if (!cancellation) {
    return null;
  }

  return (
    <section className="mt-12 pt-12">
      <ExperienceSectionSubHeading>
        Before you book
      </ExperienceSectionSubHeading>

      <ExperienceSectionHeading>
        Cancellation policy
      </ExperienceSectionHeading>

      <div className="mt-5 border rounded-xs border-earth bg-earth p-5">
        <p className="text-sm leading-6 text-background">
          {cancellation}
        </p>
      </div>
    </section>
  );
}