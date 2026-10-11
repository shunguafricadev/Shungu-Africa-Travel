type ExperienceSectionHeadingProps = {
  children: React.ReactNode;
};

export default function ExperienceSectionHeading({
  children,
}: ExperienceSectionHeadingProps) {
  return (
    
    <h2 className="text-section-title font-semibold tracking-tight text-foreground">
      {children}
    </h2>
  );
}
