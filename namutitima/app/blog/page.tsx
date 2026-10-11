import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import { Pagination } from "@/components/ui/Pagination";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "African Travel Guides & Tips",
  description:
    "Plan your trip with Shungu Africa Travel's destination advice, activity tips and practical information for exploring Africa.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "African Travel Guides & Tips | Shungu Africa Travel",
    description:
      "Plan your trip with destination advice, activity tips and practical travel information from Shungu Africa Travel.",
    url: "/blog",
    images: [
      {
        url: "/images/blogs/victoria-falls-ready-to-welcome-travellers-again.png",
        alt: "Travel stories and guides from Shungu Africa Travel",
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <main id="main-content">
      <PageHero
        image="/images/blogs/victoria-falls-ready-to-welcome-travellers-again.png"
        title="African Travel Guides & Tips"
        description="Read the latest news and updates from our team of travel experts."
      />

      <section className="py-16">
        <Container>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-eyebrow font-medium uppercase tracking-[0.18em] text-brand">
              Travel Journal
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              Stories worth reading.
            </h2>
          </div>
          <Pagination className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} {...blog} />
            ))}
          </Pagination>
        </Container>
      </section>
    </main>
  );
}
