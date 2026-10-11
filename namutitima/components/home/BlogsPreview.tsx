import { BlogCard } from "@/components/blog/BlogCard";
import Container from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogs } from "@/data/blogs";

export function BlogsPreview() {
  return (
    <section aria-label="Latest travel stories" className="bg-background py-20">
      <Container>
        <div className="mx-auto max-w-7xl px-2">
          <SectionHeading
            eyebrow="Travel Journal"
            title="Stories worth reading."
          />

          <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(0, 3).map((blog) => (
              <BlogCard
                key={blog.slug}
                slug={blog.slug}
                title={blog.title}
                excerpt={blog.excerpt}
                category={blog.category}
                readTime={blog.readTime}
                image={blog.image}
                author={blog.author}
                date={blog.date}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
