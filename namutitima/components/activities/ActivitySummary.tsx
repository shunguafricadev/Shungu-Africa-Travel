type ActivitySummaryProps = {
  rating: number | null;
  reviewCount: number;
  duration: string;
  location: string;
  groupSize?: string;
  pickup?: string;
};

export default function ActivitySummary({
  duration,
  location,
  groupSize = "2–12 people",
  pickup = "Available",
}: ActivitySummaryProps) {
  return (
    <div className="pb-8">
      {/* Quick Details */}
      <div className="grid gap-4 grid-cols-2 overflow-hidden sm:grid-cols-4">

        {/* Duration */}
        <div
          className=" p-2">
          <p className="text-sm  tracking-wide text-earth/90">
            Duration
          </p>

          <p className="mt-1 text-md text-foreground">
            {duration}
          </p>
        </div>

        {/* Location */}
        <div className="p-2">
          <p className="text-sm  tracking-wide text-earth/90">
            Location
          </p>

          <p className="mt-1 text-md text-foreground/90">
            {location}
          </p>
        </div>

        {/* Group Size */}
        <div className="p-2">
          <p className="text-sm  tracking-wide text-earth/90">
            Group size
          </p>

          <p className="mt-1 text-md text-foreground/90">
            {groupSize}
          </p>
        </div>

        {/* Pickup */}
        <div className="p-2">
          <p className="text-sm  tracking-wide text-earth/90">
            Pickup
          </p>

          <p className="mt-1 text-md text-foreground/90">
            {pickup}
          </p>
        </div>
      </div>
    </div>
  );
}
