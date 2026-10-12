import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { blogs } from "@/data/blogs";

type BlogSlugPageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export const dynamicParams = false;

export function generateStaticParams() {
	return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
	params,
}: BlogSlugPageProps): Promise<Metadata> {
	const { slug } = await params;
	const blog = blogs.find((item) => item.slug === slug);

	if (!blog) {
		return { title: "Article not found", robots: { index: false, follow: true } };
	}

	const description =
		blog.excerpt ??
		`Read ${blog.title.toLowerCase()} and explore travel ideas from Shungu Africa Travel.`;
	const title = `${blog.title} | Shungu Africa Travel`;
	const path = `/blog/${blog.slug}`;
	const hasCompleteContent = Boolean(blog.content?.length);

	return {
		title: blog.title,
		description,
		...(!hasCompleteContent && {
			robots: { index: false, follow: true },
		}),
		alternates: { canonical: path },
		openGraph: {
			type: "article",
			title,
			description,
			url: path,
			images: [{ url: blog.image, alt: blog.title }],
			authors: [blog.author],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [blog.image],
		},
	};
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
	const { slug } = await params;
	const blog = blogs.find((item) => item.slug === slug);

	if (!blog) {
		notFound();
	}

	return (
		<main id="main-content">
			<PageHero image={blog.image} title={blog.title} description={blog.excerpt} />

			<article className="py-16">
				<Container>
					<div className="mx-auto max-w-3xl">
						<div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-neutral-200 pb-6 text-xs font-medium tracking-[0.12em] text-neutral-500">
							<span>{blog.category}</span>
							<span>{blog.readTime}</span>
							<span>{blog.date}</span>
						</div>

						{blog.content?.length ? (
							<div className="mt-10 space-y-6 text-base leading-8 text-neutral-700">
								{blog.content.map((block, index) =>
									block.type === "heading" ? (
										<h2
											key={`${blog.slug}-${index}`}
											className="pt-5 text-3xl font-semibold tracking-tight text-neutral-900"
										>
											{block.text}
										</h2>
									) : (
										<p key={`${blog.slug}-${index}`}>{block.text}</p>
									),
								)}
							</div>
						) : (
							<p className="mt-10 text-base leading-8 text-neutral-700">
								Article content is being prepared.
							</p>
						)}

						<div className="mt-12 border-t border-neutral-200 pt-6 text-sm text-neutral-500">
							Written by {blog.author}
						</div>

						<Link
							href="/blog"
							className="mt-8 inline-flex text-sm underline font-medium text-brand transition-colors hover:text-brand-hover"
						>
							Back to the blog
						</Link>
					</div>
				</Container>
			</article>
		</main>
	);
}
