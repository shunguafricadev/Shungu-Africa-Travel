type ExperienceSectionSubHeadingProps = {
  children: React.ReactNode;
};

export default function ExperienceSectionSubHeading({
  children,
}: ExperienceSectionSubHeadingProps) {
  return (
    <p className="mb-3 text-sm font-medium tracking-[0.12em] text-brand">
     {children}
    </p>
  );
}
