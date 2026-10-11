import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Quicksand } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { TripProvider } from "@/components/trip/TripProvider";
import CookieConsentPopup from "@/components/ui/CookieConsentPopup";
import { OptionalThirdPartyServices } from "@/components/layout/OptionalThirdPartyServices";
import { SITE_URL } from "@/lib/seo/siteUrl";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const siteUrl = SITE_URL;
const brandName = "Shungu Africa Travel";
const siteTitle = "Shungu Africa Travel | African Tours & Tailor-Made Journeys";
const siteDescription =
  "Discover African tours, safari packages, excursions and tailor-made itineraries with Shungu Africa Travel. Explore destinations and start planning your journey.";
const socialImage = "/images/optimized/destinations/victoria-falls.png";
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${siteUrl.replace(/\/$/, "")}/#organization`,
  name: brandName,
  url: siteUrl,
  logo: new URL("/images/branding/logo-2.png", siteUrl).toString(),
  email: "davies@shunguafrica.com",
  telephone: "+263777102275",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kazungula Street",
    addressLocality: "Victoria Falls",
    addressCountry: "ZW",
    postalCode: "000263",
  },
};
const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl.replace(/\/$/, "")}/#website`,
  name: brandName,
  url: siteUrl,
  publisher: { "@id": `${siteUrl.replace(/\/$/, "")}/#organization` },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: brandName,

  title: {
    default: siteTitle,
    template: "%s | Shungu Africa Travel",
  },

  description: siteDescription,

  keywords: [
    brandName,
    "Victoria Falls tours",
    "Victoria Falls activities",
    "Victoria Falls travel agency",
    "Zimbabwe tours",
    "Zimbabwe travel experiences",
    "Victoria Falls accommodation",
    "Tailor-made Africa travel",
  ],

  authors: [{ name: brandName }],
  creator: brandName,

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    siteName: brandName,
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Victoria Falls and travel experiences in Zimbabwe",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${quicksand.variable} ${cormorantGaramond.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationStructuredData,
              websiteStructuredData,
            ]),
          }}
        />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <TripProvider>
          <Navbar />

          <div className="flex-1">
            {children}
          </div>

          <Footer />
          <OptionalThirdPartyServices />
          <CookieConsentPopup />
        </TripProvider>
      </body>
    </html>
  );
}
