export type TransferType =
  | "Airport Transfer"
  | "Private Transfer"
  | "Local Transfer";

export type Transfer = {
  slug: string;
  name: string;
  type: TransferType;
  destination: string;
  description: string;
  image?: string;
  highlights: string[];
  enquiryOnly: true;
};

export const transfers: Transfer[] = [
  {
    slug: "victoria-falls-airport-transfers",
    name: "Victoria Falls Airport Transfers",
    type: "Airport Transfer",
    destination: "Victoria Falls",
    description:
      "Pre-arranged private transfers between Victoria Falls Airport and your hotel or lodge, in either direction.",
    image: "/images/transfers/airport-transfers.jpg",
    highlights: [
      "Airport-to-hotel and hotel-to-airport service",
      "Private vehicle",
      "Pickup arranged around your itinerary",
    ],
    enquiryOnly: true,
  },
  {
    slug: "victoria-falls-local-transfer",
    name: "Private Victoria Falls Transfer",
    type: "Local Transfer",
    destination: "Victoria Falls",
    description:
      "A private local transfer between your accommodation, activities and other points of interest.",
    image: "/images/transfers/private-transfers.jpg",
    highlights: ["Flexible routing", "Private vehicle", "Activity transfers"],
    enquiryOnly: true,
  },
];
