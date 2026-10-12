export type SafariItineraryDetails = {
  name: string;
  durationDays: number;
  travellers: number;
  destinations: Array<{
    slug: string;
    name: string;
    country: string;
  }>;
  accommodation: string;
  activities: Array<{
    slug: string;
    name: string;
  }>;
  estimatedPerPerson: {
    currency: string;
    low: number;
    high: number;
  } | null;
};
