import ExperienceSectionHeading from "@/components/experiences/ExperienceSectionHeading";
import ExperienceSectionSubHeading from "../experiences/ExperienceSectionSubHeading";

type ActivityMeetingPointProps = {
  location: string;
  pickup?: string;
};

export default function ActivityMeetingPoint({
  location,
  pickup = "Available",
}: ActivityMeetingPointProps) {
  return (
    <section className="mt-12">
      <ExperienceSectionSubHeading>Meeting and Pickup</ExperienceSectionSubHeading>
      
      <ExperienceSectionHeading>Getting There </ExperienceSectionHeading>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="bg-brand/5 shadow-2xs border border-brand/20 p-5">
          <p className="text-sm tracking-[0.12em] text-subtle">
            Location
          </p>

          <p className="mt-2 text-md  text-foreground/90">
            {location}
          </p>
        </div>

        <div className="bg-brand/5 shadow-2xs border border-brand/20 p-5">
          <p className="text-sm tracking-[0.12em] text-subtle">
            Pickup
          </p>

          <p className="mt-2 text-sm font-medium text-foreground/90">{pickup}</p>
        </div>
      </div>
    </section>
  );
}
