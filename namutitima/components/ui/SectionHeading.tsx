type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  className?: string;
  eyebrowClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  className = "max-w-2xl",
  eyebrowClassName = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <p className={`mb-3 text-eyebrow font-medium tracking-[0.18em] text-brand ${eyebrowClassName}`}>
        {eyebrow}
      </p>

      <h2 className="text-3xl font-semibold tracking-tight text-foreground/90 md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
