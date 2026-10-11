import type { Metadata } from "next";
import EnquirePageContent from "@/components/enquiry/EnquirePageContent";

export const metadata: Metadata = {
  title: "Plan Your African Journey",
  description:
    "Tell Shungu Africa Travel about your dates, destinations and travel interests to start planning a tailor-made African journey.",
  alternates: { canonical: "/enquire" },
  openGraph: {
    title: "Plan Your African Journey | Shungu Africa Travel",
    description:
      "Share your travel plans with Shungu Africa Travel and start creating a tailor-made African journey.",
    url: "/enquire",
  },
};

export default function EnquirePage() {
  return <EnquirePageContent />;
}
