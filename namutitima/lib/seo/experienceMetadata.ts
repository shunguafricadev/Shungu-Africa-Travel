import type { Metadata } from "next";

type ExperienceMetadataInput = {
  name: string;
  description: string;
  image: string;
  path: string;
  title?: string;
};

function summarize(description: string) {
  const cleanDescription = description.replace(/\s+/g, " ").trim();
  if (cleanDescription.length <= 160) {
    return cleanDescription;
  }

  const summary = cleanDescription.slice(0, 157);
  const lastSpace = summary.lastIndexOf(" ");
  return `${summary.slice(0, lastSpace > 0 ? lastSpace : summary.length)}...`;
}

export function createExperienceMetadata({
  name,
  description,
  image,
  path,
  title,
}: ExperienceMetadataInput): Metadata {
  const summary = summarize(description);
  const pageTitle = title ?? name;
  const brandedTitle = `${pageTitle} | Shungu Africa Travel`;

  return {
    title: pageTitle,
    description: summary,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: brandedTitle,
      description: summary,
      url: path,
      images: [{ url: image, alt: name }],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description: summary,
      images: [image],
    },
  };
}
