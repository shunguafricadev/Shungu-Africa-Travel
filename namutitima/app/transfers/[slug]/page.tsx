import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { transfers } from "@/data/transfers";
import TransferBookingCard from "@/components/transfers/TransferBookingCard";
import { createExperienceMetadata } from "@/lib/seo/experienceMetadata";

type TransferPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return transfers.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TransferPageProps): Promise<Metadata> {
  const { slug } = await params;
  const transfer = transfers.find((item) => item.slug === slug);

  if (!transfer) {
    return { title: "Transfer not found", robots: { index: false, follow: true } };
  }

  return createExperienceMetadata({
    name: transfer.name,
    title: `${transfer.name} | ${transfer.destination}`,
    description: `${transfer.description} Explore transfer details and enquiry options with Shungu Africa Travel.`,
    image: transfer.image ?? "/images/transfers/transfers-hero.png",
    path: `/transfers/${transfer.slug}`,
  });
}

export default async function TransferPage({ params }: TransferPageProps) {
  const { slug } = await params;

  const transfer = transfers.find((item) => item.slug === slug);

  if (!transfer) {
    notFound();
  }

  return (
    <main id="main-content" className="bg-background">
      <PageHero
        image={transfer.image ?? "/images/optimized/placeholder.webp"}
        title={transfer.name}
      />
      <section className="py-12">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            <div>
              <div className="grid grid-cols-2 gap-4 overflow-hidden sm:grid-cols-3">
                <div className="p-2">
                  <p className="text-sm tracking-wide text-earth/90">Type</p>
                  <p className="mt-1 text-sm text-foreground/90">
                    {transfer.type}
                  </p>
                </div>
                <div className="p-2">
                  <p className="text-sm tracking-wide text-earth/90">
                    Destination
                  </p>
                  <p className="mt-1 text-sm text-foreground/90">
                    {transfer.destination}
                  </p>
                </div>
              </div>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  About this transfer
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-subtle">
                  {transfer.description}
                </p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Transfer details
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-subtle">
                  {transfer.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </section>
            </div>
            <TransferBookingCard slug={transfer.slug} name={transfer.name} />
          </div>
        </Container>
      </section>
    </main>
  );
}
