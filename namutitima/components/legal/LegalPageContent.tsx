"use client";

import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import CookieSettingsButton from "@/components/ui/CookieSettingsButton";

export default function LegalPageContent() {
  return (
    <main id="main-content" className="bg-white text-black">
      {/* Hero */}
      <PageHero
        image="/images/destinations/destinations-hero.webp"
        title="Legal & Information"
        description="Information about how we use this website, protect your information, use cookies, and credit the visual content used across our digital experience."
      />

      {/* Legal content */}
      <section className="mx-auto w-full max-w-4xl px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
        <div className="min-w-0">
          {/* Photo Credits */}
          <section id="photo-credits" className="pb-10 sm:pb-12 lg:pb-14">
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Photo Credits
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-black/65 sm:text-base">
              <p>
                Shungu Africa Travel uses photographs and visual media to show
                destinations, activities, accommodation, transfers, packages and
                other travel experiences available through this website.
              </p>

              <p>
                Where an image requires attribution, the relevant creator,
                photographer, agency or source is credited here or alongside the
                relevant gallery, destination or experience content where
                appropriate.
              </p>

              <p>
                If you believe that an image has been used incorrectly or
                without appropriate attribution, please contact us so that we
                can investigate and address the matter.
              </p>
            </div>
          </section>

          {/* Privacy policy summary */}
          <section id="privacy-policy" className="py-10 sm:py-12 lg:py-14">
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Privacy
            </h2>

            <div className="mt-6 space-y-6 text-sm leading-7 text-black/65 sm:text-base">
              <p>
                The full Privacy Policy explains the information processed
                through trip enquiries, reviews, newsletter signups, saved trips
                and third-party map content; why it is used; and how to exercise
                your data-protection rights.
              </p>
              <Link
                href="/privacy"
                className="inline-flex font-medium text-black underline underline-offset-4"
              >
                Read the full Privacy Policy
              </Link>
            </div>
          </section>

          {/* Cookie and local storage summary */}
          <section id="cookie-policy" className="py-10 sm:py-12 lg:py-14">
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Cookies and browser storage
            </h2>

            <div className="mt-6 space-y-6 text-sm leading-7 text-black/65 sm:text-base">
              <p>
                This site stores your selected trip and privacy choice in
                browser local storage; these are not HTTP cookies. Google Maps
                and the Elfsight WhatsApp widget are optional third-party
                services and will not load unless you allow them. Google
                Analytics, Vercel Analytics and Speed Insights are also
                optional and remain off until enabled. We do not use
                advertising trackers.
              </p>
              <CookieSettingsButton
                className="inline-flex font-medium text-black underline underline-offset-4 transition hover:text-black/55"
              />
            </div>
          </section>

          {/* Sitemap */}
          <section id="sitemap" className="py-10 sm:py-12 lg:py-14">
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Sitemap
            </h2>

            <div className="mt-7 grid gap-x-16 gap-y-3 sm:grid-cols-2 sm:gap-y-4">
              <SitemapLink href="/" label="Home" />
              <SitemapLink href="/activities" label="Activities" />
              <SitemapLink href="/destinations" label="Destinations" />
              <SitemapLink href="/transfers" label="Transfers" />
              <SitemapLink href="/packages" label="Packages" />
              <SitemapLink href="/blog" label="Blog" />
              <SitemapLink href="/about" label="About Us" />
              <SitemapLink href="/contact" label="Contact" />
              <SitemapLink href="/enquire" label="Trip Enquiry" />
              <SitemapLink href="/privacy" label="Privacy Policy" />
              <SitemapLink href="/legal" label="Legal & Information" />
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}

/* --------------------------------
   Sitemap Link
-------------------------------- */
function SitemapLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between border-b border-black/10 py-4 px-2 text-sm transition rounded-xs hover:bg-black/2.5 hover:border-black/30"
    >
      <span>{label}</span>
    </Link>
  );
}
