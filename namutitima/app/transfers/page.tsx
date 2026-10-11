import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Pagination } from "@/components/ui/Pagination";
import { SectionHeading } from "@/components/ui/SectionHeading";
import TransferCard from "@/components/transfers/TransferCard";
import { transfers } from "@/data/transfers";

export const metadata: Metadata = {
  title: "Airport Transfers & Travel Transport",
  description:
    "Arrange airport transfers and local transport with Shungu Africa Travel. Explore available routes, transfer options and travel arrangements.",
  alternates: { canonical: "/transfers" },
  openGraph: {
    title: "Airport Transfers & Travel Transport | Shungu Africa Travel",
    description:
      "Arrange airport transfers and local transport with Shungu Africa Travel.",
    url: "/transfers",
    images: [
      {
        url: "/images/transfers/transfers-hero.png",
        alt: "Private transfers arranged by Shungu Africa Travel",
      },
    ],
  },
};

export default function TransfersPage() {
  return (
    <main id="main-content" className="bg-background">
      <PageHero
        image="/images/transfers/transfers-hero.png"
        title="Airport Transfers & Travel Transport"
      />
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-7xl px-2">
            <SectionHeading
              eyebrow="Transfers"
              title="Getting around, made simple."
              className="lg:max-w-2xl"
            />
            <Pagination className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {transfers.map((transfer) => (
                <TransferCard key={transfer.slug} {...transfer} />
              ))}
            </Pagination>
          </div>
        </Container>
      </section>
    </main>
  );
}
