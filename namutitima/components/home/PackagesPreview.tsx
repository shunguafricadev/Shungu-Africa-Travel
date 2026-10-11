import Container from "@/components/ui/Container";
import { PackageCard } from "@/components/packages/PackageCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { packages } from "@/data/packages";

export function PackagesPreview() {
  if (packages.length === 0) {
    return null;
  }

  return (
    <section aria-label="Featured travel packages" className="bg-background py-20">
      <Container>
        <div className="mx-auto max-w-7xl px-2">
          <SectionHeading
            eyebrow="Travel Packages"
            title="Journeys planned around you."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.slice(0, 6).map((packageItem) => (
              <PackageCard
                key={packageItem.slug}
                slug={packageItem.slug}
                name={packageItem.name}
                image={packageItem.image}
                description={packageItem.description}
                duration={packageItem.duration.label}
                location={packageItem.location}
                highlights={packageItem.highlights}
                badge={packageItem.badge}
                pricing={packageItem.pricing}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
