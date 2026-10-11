import ExperienceFAQ from "@/components/experiences/ExperienceFAQ";
import type { DestinationFAQ } from "@/data/destinations";

type DestinationFAQsProps = {
  faqs: DestinationFAQ[];
};

export default function DestinationFAQs({ faqs }: DestinationFAQsProps) {
  return <ExperienceFAQ faqs={faqs} />;
}
