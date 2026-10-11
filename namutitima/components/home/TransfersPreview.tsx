import TransferCard from "@/components/transfers/TransferCard";
import Container from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { transfers } from "@/data/transfers";

export function TransfersPreview() {
  return (
    <section aria-label="Featured transfers" className="py-20">
      <Container>
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Transfers"
            title="Getting around, made simple."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {transfers.slice(0, 3).map((transfer) => (
              <TransferCard key={transfer.slug} {...transfer} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
