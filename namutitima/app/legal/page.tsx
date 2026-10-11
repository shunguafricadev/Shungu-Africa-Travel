import type { Metadata } from "next";
import LegalPageContent from "@/components/legal/LegalPageContent";

export const metadata: Metadata = {
  title: "Legal & Information",
  description:
    "Read Shungu Africa Travel's privacy policy, cookie information, photo credits and website sitemap, and manage cookie preferences.",
  alternates: { canonical: "/legal" },
  openGraph: {
    title: "Legal & Information | Shungu Africa Travel",
    description:
      "Privacy, cookies, photo credits, sitemap and cookie settings for Shungu Africa Travel.",
    url: "/legal",
  },
};

export default function LegalPage() {
  return <LegalPageContent />;
}
