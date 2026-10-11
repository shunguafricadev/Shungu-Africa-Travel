type PackageSummaryProps = {
  duration: string;
  category: string;
  groupSize?: string;
  pickup?: string;
};

export default function PackageSummary({
  duration,
  category,
  groupSize = "2–12 people",
  pickup = "Available",
}: PackageSummaryProps) {
  return (
    <div className="grid gap-4 grid-cols-2 overflow-hidden sm:grid-cols-4">
      {/* Duration */}
      <div className="p-2">
        <p className="text-sm tracking-wide text-earth/90">
          Duration
        </p>

        <p className="mt-1 text-sm text-foreground/90">
          {duration}
        </p>
      </div>

      {/* Journey */}
      <div className="p-2">
       <p className="text-sm tracking-wide text-earth/90">
          Journey
        </p>

        <p className="mt-1 text-sm text-foreground/90">
          {category}
        </p>
      </div>

      {/* Group Size */}
      <div className="p-2">
        <p className="text-sm tracking-wide text-earth/90">
          Group size
        </p>

        <p className="mt-1 text-sm text-foreground/90">
          {groupSize}
        </p>
      </div>

      {/* Pickup */}
      <div className="p-2">
       <p className="text-sm tracking-wide text-earth/90">
          Pickup
        </p>

        <p className="mt-1 text-sm text-foreground/90">
          {pickup}
        </p>
      </div>
    </div>
  );
}