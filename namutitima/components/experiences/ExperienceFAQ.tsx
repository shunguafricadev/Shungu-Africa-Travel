"use client";

import { useState } from "react";

import ExperienceSectionHeading from "@/components/experiences/ExperienceSectionHeading";
import ExperienceSectionSubHeading from "../experiences/ExperienceSectionSubHeading";

type ExperienceFAQProps = {
  faqs: {
    question: string;
    answer: string;
  }[];
};

export default function ExperienceFAQ({ faqs }: ExperienceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs.length) {
    return null;
  }

  function toggleFAQ(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="mt-12">
      <ExperienceSectionSubHeading>
        FAQs
      </ExperienceSectionSubHeading>

      <ExperienceSectionHeading>
        Frequently asked questions
      </ExperienceSectionHeading>

      <div className="mt-5 divide-y divide-neutral-200 border-y border-neutral-200">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.question}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-medium text-foreground/90">
                  {faq.question}
                </span>

                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl text-brand"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <p className="max-w-3xl pb-5 text-sm leading-6 text-subtle">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
