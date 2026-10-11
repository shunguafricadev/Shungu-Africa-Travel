import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import CookieSettingsButton from "@/components/ui/CookieSettingsButton";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Shungu Africa Travel privacy policy to understand how personal information is collected, used, stored and protected.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Shungu Africa Travel",
    description:
      "Read how Shungu Africa Travel collects, uses, stores and protects personal information.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="bg-white text-black">
      <PageHero
        image="/images/privacy-policy/privacy-policy-hero.png"
        title="Privacy Policy"
        description="How Shungu Africa Travel collects, uses and protects your information."
      />

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10 text-sm leading-7 text-black/65 sm:text-base">
            <p className="text-sm text-black/60">
              This notice describes the information handled by the current
              Shungu Africa Travel website and its enquiry, review, newsletter,
              saved-trip and optional map features. It is intended to be read
              with Zimbabwe&apos;s{" "}
              <a
                href="https://www.veritaszim.net/node/5522"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-black underline underline-offset-4"
              >
                Cyber and Data Protection Act [Chapter 12:07]
              </a>{" "}
              and applicable regulations.
            </p>

            <PolicySection title="Who is responsible and how to contact us">
              <p>
                The website is operated by Shungu Africa Travel, based at
                Kazungula Street, Victoria Falls, Zimbabwe. For privacy
                questions or requests, contact{" "}
                <a
                  href="mailto:davies@shunguafrica.com"
                  className="font-medium text-black underline underline-offset-4"
                >
                  davies@shunguafrica.com
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+263777102275"
                  className="font-medium text-black underline underline-offset-4"
                >
                  +263 77 710 2275
                </a>
                .
              </p>
            </PolicySection>

            <PolicySection title="Information we collect">
              <p>
                Depending on the feature you use, we may receive your name,
                email address, telephone or WhatsApp number, country, preferred
                travel dates and duration, adult and child traveller counts,
                selected activities, packages, accommodation or transfers, and
                any message you choose to send. A trip enquiry may also contain
                item-specific dates, guest counts and selections. We ask for
                newsletter email addresses and record the signup time and
                source. A review submission includes the name you provide,
                activity, rating and review text; approved reviews may be
                displayed publicly with the name you supplied.
              </p>
              <p className="mt-3">
                The trip builder saves your selected trip in your browser&apos;s
                local storage. It stays on that device unless you submit it in
                an enquiry. We do not request payment-card details through the
                current website. Please do not include sensitive information or
                children&apos;s identifying details in free-text messages unless
                needed to handle your request.
              </p>
            </PolicySection>

            <PolicySection title="How and why we use information">
              <p>
                We use enquiry details to respond, prepare a quote, check
                availability and follow up about the travel services you
                selected. We use review details to moderate and, if approved,
                publish a review. We record newsletter signups so we can manage
                requests for travel updates. We use limited technical
                information, including an IP address supplied by the hosting
                proxy, to apply short-window abuse and request-rate controls to
                enquiry and newsletter forms.
              </p>
              <p className="mt-3">
                We handle information for the service you request, for
                applicable legal obligations, and where needed for legitimate
                operational interests such as protecting forms from abuse.
                Newsletter signup records are used to manage your request for
                updates, and Google Maps is loaded only when you allow it. The
                current website stores newsletter signups but does not itself
                send newsletter campaigns. You may withdraw a choice for future
                processing at any time; this does not affect processing already
                carried out.
              </p>
            </PolicySection>

            <PolicySection title="Who may receive information">
              <p>
                We do not sell personal information. The website uses Supabase
                to store enquiry, review and newsletter records, Resend to
                deliver enquiry notifications and confirmations, and Upstash
                to provide rate limiting for form submissions. These providers
                process information on our behalf to provide their services.
                If you ask us to proceed with a trip, we may share the relevant
                details with accommodation, activity, transfer or other travel
                providers to check availability or arrange the requested
                service.
              </p>
            </PolicySection>

            <PolicySection title="International processing">
              <p>
                Our service providers may store or process information in
                countries outside Zimbabwe. The exact location can depend on
                provider configuration. Contact us for information about the
                locations and safeguards applicable to a particular provider.
                Before transferring personal information internationally, the
                business must ensure the transfer meets applicable Zimbabwean
                data-protection requirements.
              </p>
            </PolicySection>

            <PolicySection title="How long we keep information">
              <p>
                We keep information only for as long as it is reasonably
                necessary for the purpose it was collected, including handling
                your request, maintaining relevant business records and
                addressing disputes or legal obligations. Newsletter details
                should be removed when you withdraw your subscription, subject
                to limited records needed to respect that request. Reviews may
                remain while published or until removal is requested. The
                current website does not apply an automatic deletion schedule
                to enquiry, review or newsletter records; contact us to request
                deletion or discuss a particular record.
              </p>
            </PolicySection>

            <PolicySection title="Your data-protection choices and rights">
              <p>
                Subject to applicable law, you may ask us to confirm whether we
                hold information about you, access it, correct inaccurate
                details, request deletion where permitted, object to processing
                for direct marketing, or withdraw consent where processing
                depends on consent. We may need to verify your identity and may
                retain information where the law permits or requires it.
              </p>
              <p className="mt-3">
                The current website records newsletter signups but does not send
                newsletter campaigns. If you signed up and want the record
                removed, email us using the contact details below.
              </p>
              <p className="mt-3">
                You may raise a complaint with the Postal and
                Telecommunications Regulatory Authority of Zimbabwe (POTRAZ),
                Zimbabwe&apos;s data-protection regulator, if you are unhappy
                with how we handle a request or personal information.
              </p>
            </PolicySection>

            <PolicySection title="Browser storage, analytics and third-party content">
              <p>
                The current site uses browser local storage, not HTTP cookies,
                to keep your saved trip and privacy choice on your device.
                These values remain until you clear them through your browser
                or remove the saved trip. We do not run advertising trackers.
                Vercel Analytics and Speed Insights are optional and remain
                disabled until you enable analytics and performance in privacy
                settings. If enabled, they send site-usage and web-performance
                measurements to Vercel for reporting. See Vercel&apos;s{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-black underline underline-offset-4"
                >
                  Privacy Policy
                </a>
                .
              </p>
              <p className="mt-3">
                Destination maps are embedded from Google Maps and are blocked
                until you allow Google Maps in privacy settings. If allowed,
                your browser connects to Google, which may receive technical
                data such as your IP address. Google&apos;s handling is governed
                by its own{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-black underline underline-offset-4"
                >
                  Privacy Policy
                </a>
                . You can withdraw this choice at any time using the settings
                below.
              </p>
              <p className="mt-3">
                The WhatsApp chat widget is supplied by Elfsight and is also
                disabled until you enable it in privacy settings. Loading it
                connects your browser to Elfsight and may disclose technical
                information such as your IP address. If you use the widget to
                start a WhatsApp conversation, WhatsApp/Meta will process
                information under its own{" "}
                <a
                  href="https://www.whatsapp.com/legal/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-black underline underline-offset-4"
                >
                  Privacy Policy
                </a>
                . See{" "}
                <a
                  href="https://elfsight.com/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-black underline underline-offset-4"
                >
                  Elfsight&apos;s Privacy Policy
                </a>{" "}
                for its handling of widget data.
              </p>
              <CookieSettingsButton
                className="mt-4 inline-flex font-medium text-black underline underline-offset-4"
              />
            </PolicySection>

            <PolicySection title="Security and updates">
              <p>
                We use measures such as server-side validation, restricted
                server access and rate limiting to protect submitted
                information. No internet transmission or storage system can be
                guaranteed completely secure. We may update this notice when
                our website, practices or legal requirements change; the
                current version will be published on this page.
              </p>
            </PolicySection>

            <PolicySection title="Contact us">
              <p>
                Send privacy questions or requests to{" "}
                <a
                  href="mailto:davies@shunguafrica.com"
                  className="font-medium text-black underline underline-offset-4"
                >
                  davies@shunguafrica.com
                </a>
                , call{" "}
                <a
                  href="tel:+263777102275"
                  className="font-medium text-black underline underline-offset-4"
                >
                  +263 77 710 2275
                </a>
                , or use our{" "}
                <a
                  href="/contact"
                  className="font-medium text-black underline underline-offset-4"
                >
                  contact page
                </a>
                .
              </p>
            </PolicySection>
          </div>
        </Container>
      </section>
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-3xl font-medium tracking-tight text-black sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
