"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Check, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

import { formatDateForInput } from "@/components/activities/booking/dateUtils";
import Container from "@/components/ui/Container";
import { activities } from "@/data/activities";
import { destinations } from "@/data/destinations";
import { getSafariComboName } from "@/lib/enquiry/safariComboName";

const destinationEmojis: Record<string, string> = {
  "victoria-falls": "🌊",
  "cape-town": "🏙️",
  "kruger-national-park": "🦁",
  sossusvlei: "🏜️",
  "etosha-national-park": "🦒",
  "chobe-national-park": "🐘",
  "okavango-delta": "🛶",
  swakopmund: "🌊",
  "hwange-national-park": "🐘",
  "great-zimbabwe": "🏛️",
  "matobo-hills": "⛰️",
  "lake-kariba": "🚤",
  "mana-pools-national-park": "🛶",
};

const builderDestinationSlugs = new Set([
  "victoria-falls",
  "cape-town",
  "kruger-national-park",
  "sossusvlei",
  "etosha-national-park",
  "chobe-national-park",
]);

const safariDestinations = destinations
  .filter((destination) => builderDestinationSlugs.has(destination.slug))
  .map((destination) => ({
    id: destination.slug,
    name: destination.name,
    country: destination.country,
    region: destination.region,
    emoji: destinationEmojis[destination.slug],
  }));

const accommodationOptions = [
  {
    id: "camping",
    name: "Camping",
    description: "Under the stars, close to nature",
    lowPerDay: 180,
    highPerDay: 280,
    emoji: "⛺",
  },
  {
    id: "mid-range",
    name: "Mid-Range Lodge",
    description: "Comfortable stays with character",
    lowPerDay: 320,
    highPerDay: 480,
    emoji: "🛖",
  },
  {
    id: "luxury",
    name: "Luxury Hotels",
    description: "Exceptional comfort and service",
    lowPerDay: 650,
    highPerDay: 950,
    emoji: "🏨",
  },
];

const builderActivityEmojis: Record<string, string> = {
  "guided-victoria-falls-tour": "🌊",
  "zambezi-sunset-cruise": "🚤",
  "hwange-game-drive": "🐘",
  "zambezi-white-water-rafting": "🛶",
  "victoria-falls-helicopter-scenic-flight": "🚁",
  "village-community-cultural-experience": "🪘",
};

const experienceOptions = activities
  .filter((activity) => activity.slug in builderActivityEmojis)
  .map((activity) => ({
  id: activity.slug,
  name: activity.name,
  category: activity.category,
  location: activity.location,
  emoji: builderActivityEmojis[activity.slug],
  price: activity.pricing.adult.amount,
  priceLabel:
    activity.pricing.adult.amount > 0
      ? `From ${activity.pricing.adult.currency} ${Math.round(activity.pricing.adult.amount).toLocaleString("en-US")}`
      : "Price on request",
  }));

const steps = [
  "Destinations",
  "Duration",
  "Accommodation",
  "Activities",
  "Review & Book",
];

const whatsappNumber = "263777102275";
const enquiryEmail = "davies@shunguafrica.com";

function getDefaultSafariDate() {
  const date = new Date();
  date.setDate(date.getDate() + 30);
  return formatDateForInput(date);
}

function formatMoney(amount: number) {
  return `$${Math.round(amount).toLocaleString("en-US")}`;
}

export function SafariBuilder() {
  const [step, setStep] = useState(1);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [duration, setDuration] = useState(6);
  const [travellers, setTravellers] = useState(2);
  const [accommodation, setAccommodation] = useState("");
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: "",
    dates: getDefaultSafariDate(),
    whatsapp: "",
    email: "",
    specialRequests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");
  const enquiryFormRef = useRef<HTMLFormElement>(null);
  const builderRef = useRef<HTMLDivElement>(null);
  const previousStepRef = useRef(step);

  useEffect(() => {
    if (previousStepRef.current === step) return;
    previousStepRef.current = step;

    window.requestAnimationFrame(() => {
      builderRef.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    });
  }, [step]);

  const accommodationChoice = accommodationOptions.find(
    (option) => option.id === accommodation,
  );
  const experiencePrice = selectedExperiences.reduce((total, id) => {
    const experience = experienceOptions.find((option) => option.id === id);
    return total + (experience?.price ?? 0);
  }, 0);
  const estimateLow = accommodationChoice
    ? accommodationChoice.lowPerDay * duration + experiencePrice
    : null;
  const estimateHigh = accommodationChoice
    ? accommodationChoice.highPerDay * duration + experiencePrice
    : null;
  const selectedDestinationItems = selectedDestinations
    .map((id) => safariDestinations.find((item) => item.id === id))
    .filter((item) => item !== undefined);
  const selectedExperienceItems = selectedExperiences
    .map((id) => experienceOptions.find((item) => item.id === id))
    .filter((item) => item !== undefined);
  const comboName = getSafariComboName(
    selectedDestinationItems,
    selectedExperienceItems,
  );

  function toggleSelection(
    current: string[],
    id: string,
    setSelection: (next: string[]) => void,
  ) {
    setSelection(
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  function restart() {
    setStep(1);
    setSelectedDestinations([]);
    setDuration(6);
    setTravellers(2);
    setAccommodation("");
    setSelectedExperiences([]);
    setForm({
      name: "",
      dates: getDefaultSafariDate(),
      whatsapp: "",
      email: "",
      specialRequests: "",
    });
    setError("");
    setReference("");
  }

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!accommodationChoice) {
      setError("Please choose an accommodation budget range.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    const destinationNames = selectedDestinationItems.map((item) => item.name);
    const experienceNames = selectedExperienceItems.map((item) => item.name);
    const message = [
      `Destinations: ${destinationNames.join(", ")}`,
      `Accommodation budget: ${accommodationChoice?.name ?? "Not selected"}`,
      `Experiences: ${experienceNames.length ? experienceNames.join(", ") : "None selected"}`,
      estimateLow !== null && estimateHigh !== null
        ? `Estimated per person: ${formatMoney(estimateLow)} – ${formatMoney(estimateHigh)}`
        : "",
      form.specialRequests ? `Special requests: ${form.specialRequests}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: true,
          context: comboName,
          fullName: form.name,
          email: form.email,
          whatsapp: form.whatsapp,
          arrival: form.dates,
          duration: `${duration} days`,
          travellers,
          message,
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        setError(result.message ?? "We could not send your enquiry.");
        return;
      }

      setReference(result.enquiry.reference);
    } catch {
      setError("We could not send your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const whatsappMessage = [
    "Hello Shungu Africa Travel, I'd like to build an itinerary.",
    `Destinations: ${selectedDestinations.map((id) => safariDestinations.find((item) => item.id === id)?.name).filter(Boolean).join(", ")}`,
    `Duration: ${duration} days`,
    `Group size: ${travellers} ${travellers === 1 ? "person" : "people"}`,
    `Accommodation: ${accommodationChoice?.name ?? "Not selected"}`,
    `Experiences: ${selectedExperiences.map((id) => experienceOptions.find((item) => item.id === id)?.name).filter(Boolean).join(", ") || "To be discussed"}`,
    estimateLow !== null && estimateHigh !== null
      ? `Estimated per person: ${formatMoney(estimateLow)} – ${formatMoney(estimateHigh)}`
      : "",
    `Name: ${form.name}`,
    `Preferred dates: ${form.dates}`,
    `WhatsApp: ${form.whatsapp}`,
    `Email: ${form.email}`,
    form.specialRequests ? `Special requests: ${form.specialRequests}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      id="safari-builder"
      aria-labelledby="safari-builder-title"
      className="py-20 sm:py-24"
    >
      <Container>
        <div className="mx-auto max-w-7xl px-2">
          <div className="mb-10 text-center">
            <p className="text-eyebrow font-medium tracking-[0.18em] text-brand">
              Personalised Experience
            </p>
            <h2
              id="safari-builder-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Build Your Itinerary
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-subtle">
              Create a trip that feels like yours. Choose from our available
              destinations and activities, set your pace, and select an
              accommodation budget range.
            </p>
          </div>

          <div
            ref={builderRef}
            className="scroll-mt-24 overflow-hidden rounded-xs border border-neutral-200 bg-white"
          >
            <div className="border-b border-neutral-200 bg-neutral-50 px-5 py-5 sm:px-8">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-foreground">
                  Step {step} of 5 — {steps[step - 1]}
                </p>
                <button
                  type="button"
                  onClick={restart}
                  className="inline-flex items-center gap-2 text-xs font-medium text-subtle transition hover:text-brand"
                >
                  <RotateCcw aria-hidden="true" className="size-3.5" />
                  Start Over
                </button>
              </div>
              <ol
                aria-label="Safari planning progress"
                className="grid grid-cols-5 gap-2"
              >
                {steps.map((label, index) => {
                  const stepNumber = index + 1;
                  const isComplete = stepNumber < step;
                  const isCurrent = stepNumber === step;

                  return (
                    <li key={label} className="min-w-0">
                      <div
                        className={`h-1.5 rounded-full ${
                          stepNumber <= step ? "bg-brand" : "bg-neutral-200"
                        }`}
                      />
                      <span
                        className={`mt-2 hidden truncate text-xs sm:block ${
                          isCurrent || isComplete
                            ? "font-medium text-foreground"
                            : "text-subtle"
                        }`}
                      >
                        {label}
                      </span>
                      <span className="sr-only">
                        {label}
                        {isComplete ? ", complete" : isCurrent ? ", current" : ""}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="px-5 py-7 sm:px-8 sm:py-9">
              {reference ? (
                <div
                  className="border border-neutral-200 bg-white p-8 text-center md:p-10"
                  role="status"
                >
                  <div className="mx-auto mb-6 flex size-12 items-center justify-center rounded-full bg-brand/10 text-xl text-brand">
                    <Check aria-hidden="true" className="size-6" />
                  </div>
                  <h3 className="text-section-title font-semibold tracking-tight text-neutral-900">
                    Enquiry received.
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-600">
                    Thanks for getting in touch. We&apos;ve received your
                    enquiry for{" "}
                    <span className="font-medium text-neutral-900">
                      {comboName}
                    </span>
                    . Our team will review it and get back to you with
                    availability and the next steps.
                  </p>
                  <p className="mt-6 text-sm text-neutral-500">
                    Reference: <strong className="text-foreground">{reference}</strong>
                  </p>
                  <button
                    type="button"
                    onClick={restart}
                    className="mt-6 text-sm font-medium text-brand hover:underline"
                  >
                    Start another enquiry
                  </button>
                </div>
              ) : (
                <>
                  {step === 1 && (
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-foreground">
                        Where would you like to go?
                      </h3>
                      <p className="mt-2 text-sm text-subtle">
                        Select one or more destinations from our travel guide.
                      </p>
                      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {safariDestinations.map((destination) => {
                          const isSelected = selectedDestinations.includes(
                            destination.id,
                          );

                          return (
                            <button
                              key={destination.id}
                              type="button"
                              aria-pressed={isSelected}
                              onClick={() =>
                                toggleSelection(
                                  selectedDestinations,
                                  destination.id,
                                  setSelectedDestinations,
                                )
                              }
                              className={`relative flex min-h-36 flex-col items-start rounded-xs border p-4 text-left transition ${
                                isSelected
                                  ? "border-brand bg-brand/5 ring-1 ring-brand"
                                  : "border-neutral-200 hover:border-brand/50"
                              }`}
                            >
                              <span
                                className={`absolute right-3 top-3 flex size-6 items-center justify-center rounded-full border ${
                                  isSelected
                                    ? "border-brand bg-brand text-white"
                                    : "border-neutral-300 bg-white text-transparent"
                                }`}
                              >
                                <Check aria-hidden="true" className="size-4" />
                              </span>
                              <span aria-hidden="true" className="text-3xl">
                                {destination.emoji}
                              </span>
                              <span className="mt-3 font-semibold text-foreground">
                                {destination.name}
                              </span>
                              <span className="mt-1 text-xs text-subtle">
                                {destination.country} · {destination.region}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-9">
                      <div>
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">
                              How long is your adventure?
                            </h3>
                            <p className="mt-1 text-sm text-subtle">
                              Choose between 2 and 21 days.
                            </p>
                          </div>
                          <span className="shrink-0 text-lg font-semibold text-brand">
                            {duration} days
                          </span>
                        </div>
                        <input
                          aria-label="Trip duration in days"
                          type="range"
                          min={2}
                          max={21}
                          value={duration}
                          onChange={(event) =>
                            setDuration(Number(event.target.value))
                          }
                          className="mt-5 w-full accent-brand"
                        />
                        <div className="flex justify-between text-xs text-subtle">
                          <span>2 days</span>
                          <span>21 days</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">
                              Who is travelling?
                            </h3>
                            <p className="mt-1 text-sm text-subtle">
                              Adjust your group size.
                            </p>
                          </div>
                          <span className="shrink-0 text-lg font-semibold text-brand">
                            {travellers} {travellers === 1 ? "person" : "people"}
                          </span>
                        </div>
                        <input
                          aria-label="Number of travellers"
                          type="range"
                          min={1}
                          max={12}
                          value={travellers}
                          onChange={(event) =>
                            setTravellers(Number(event.target.value))
                          }
                          className="mt-5 w-full accent-brand"
                        />
                        <div className="flex justify-between text-xs text-subtle">
                          <span>1 person</span>
                          <span>12 people</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Choose your accommodation style
                      </h3>
                      <p className="mt-2 text-sm text-subtle">
                        Pick the stay that best fits your trip and budget.
                      </p>
                      <div className="mt-6 grid gap-4 md:grid-cols-3">
                        {accommodationOptions.map((option) => {
                          const isSelected = accommodation === option.id;

                          return (
                            <button
                              key={option.id}
                              type="button"
                              aria-pressed={isSelected}
                              onClick={() => setAccommodation(option.id)}
                              className={`relative rounded-xs border p-5 text-left transition ${
                                isSelected
                                  ? "border-brand bg-brand/5 ring-1 ring-brand"
                                  : "border-neutral-200 hover:border-brand/50"
                              }`}
                            >
                              <span
                                className={`absolute right-3 top-3 flex size-6 items-center justify-center rounded-full border ${
                                  isSelected
                                    ? "border-brand bg-brand text-white"
                                    : "border-neutral-300 bg-white text-transparent"
                                }`}
                              >
                                <Check aria-hidden="true" className="size-4" />
                              </span>
                              <span aria-hidden="true" className="text-3xl">
                                {option.emoji}
                              </span>
                              <h4 className="mt-4 font-semibold text-foreground">
                                {option.name}
                              </h4>
                              <p className="mt-1 text-sm text-subtle">
                                {option.description}
                              </p>
                              <p className="mt-4 text-sm font-medium text-brand">
                                {formatMoney(option.lowPerDay)} –{" "}
                                {formatMoney(option.highPerDay)}{" "}
                                <span className="font-normal text-subtle">
                                  per person / day
                                </span>
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Which activities would make it unforgettable?
                      </h3>
                      <p className="mt-2 text-sm text-subtle">
                        Choose from the activities currently listed on our
                        site. Listed adult prices are shown per person.
                      </p>
                      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {experienceOptions.map((experience) => {
                          const isSelected = selectedExperiences.includes(
                            experience.id,
                          );

                          return (
                            <button
                              key={experience.id}
                              type="button"
                              aria-pressed={isSelected}
                              onClick={() =>
                                toggleSelection(
                                  selectedExperiences,
                                  experience.id,
                                  setSelectedExperiences,
                                )
                              }
                              className={`relative rounded-xs border p-4 text-left transition ${
                                isSelected
                                  ? "border-brand bg-brand/5 ring-1 ring-brand"
                                  : "border-neutral-200 hover:border-brand/50"
                              }`}
                            >
                              <span
                                className={`absolute right-3 top-3 flex size-6 items-center justify-center rounded-full border ${
                                  isSelected
                                    ? "border-brand bg-brand text-white"
                                    : "border-neutral-300 bg-white text-transparent"
                                }`}
                              >
                                <Check aria-hidden="true" className="size-4" />
                              </span>
                              <span aria-hidden="true" className="text-2xl">
                                {experience.emoji}
                              </span>
                              <h4 className="mt-3 font-semibold text-foreground">
                                {experience.name}
                              </h4>
                              <p className="mt-1 text-xs leading-5 text-subtle">
                                {experience.category} · {experience.location}
                              </p>
                              <p className="mt-3 text-sm font-semibold text-brand">
                                {experience.price > 0 ? (
                                  <>
                                    {experience.priceLabel}
                                    <span className="font-normal text-subtle">
                                      {" "}per person
                                    </span>
                                  </>
                                ) : (
                                  experience.priceLabel
                                )}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr]">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          Your itinerary summary
                        </h3>
                        <dl className="mt-5 divide-y divide-neutral-200 border-y border-neutral-200">
                          <div className="py-3">
                            <dt className="text-xs text-subtle">Destinations</dt>
                            <dd className="mt-1 text-sm font-medium text-foreground">
                              {selectedDestinations
                                .map(
                                  (id) =>
                                    safariDestinations.find(
                                      (item) => item.id === id,
                                    )?.name,
                                )
                                .filter(Boolean)
                                .join(", ")}
                            </dd>
                          </div>
                          <div className="py-3">
                            <dt className="text-xs text-subtle">Duration</dt>
                            <dd className="mt-1 text-sm font-medium text-foreground">
                              {duration} days
                            </dd>
                          </div>
                          <div className="py-3">
                            <dt className="text-xs text-subtle">Group Size</dt>
                            <dd className="mt-1 text-sm font-medium text-foreground">
                              {travellers} {travellers === 1 ? "person" : "people"}
                            </dd>
                          </div>
                          <div className="py-3">
                            <dt className="text-xs text-subtle">Accommodation</dt>
                            <dd className="mt-1 text-sm font-medium text-foreground">
                              {accommodationChoice?.name ?? "Not selected"}
                            </dd>
                          </div>
                          <div className="py-3">
                            <dt className="text-xs text-subtle">Experiences</dt>
                            <dd className="mt-1 text-sm font-medium text-foreground">
                              {selectedExperiences.length
                                ? selectedExperiences
                                    .map(
                                      (id) =>
                                        experienceOptions.find(
                                          (item) => item.id === id,
                                        )?.name,
                                    )
                                    .filter(Boolean)
                                    .join(", ")
                                : "To be discussed"}
                            </dd>
                          </div>
                        </dl>
                        {estimateLow !== null && estimateHigh !== null ? (
                          <div className="mt-5 rounded-xs bg-brand/5 p-5">
                          <p className="text-xs font-medium uppercase tracking-wide text-subtle">
                            Estimated per person
                          </p>
                          <p className="mt-2 text-2xl font-semibold text-brand">
                            {formatMoney(estimateLow)} – {formatMoney(estimateHigh)}
                          </p>
                          <p className="mt-3 text-xs leading-5 text-subtle">
                            This indicative range combines the selected
                            accommodation budget and listed activity prices.
                            It is not a quotation; final pricing depends on
                            dates, availability and confirmed inclusions.
                          </p>
                          </div>
                        ) : (
                          <p className="mt-5 rounded-xs bg-neutral-50 p-5 text-sm leading-6 text-subtle">
                            Choose an accommodation budget to see an estimated
                            price range.
                          </p>
                        )}
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          Your details &amp; booking
                        </h3>
                        {error && (
                          <p
                            role="alert"
                            className="mt-4 bg-red-50 px-4 py-3 text-sm text-red-700"
                          >
                            {error}
                          </p>
                        )}
                        <form
                          ref={enquiryFormRef}
                          onSubmit={submitEnquiry}
                          className="mt-5 space-y-6"
                        >
                          <div>
                            <label
                              htmlFor="safari-full-name"
                              className="mb-2 block text-sm font-medium"
                            >
                              Full Name
                            </label>
                            <input
                              id="safari-full-name"
                              name="fullName"
                              type="text"
                              required
                              autoComplete="name"
                              placeholder="Your full name"
                              value={form.name}
                              onChange={(event) =>
                                setForm({ ...form, name: event.target.value })
                              }
                              className="w-full border border-black/10 bg-black/2.5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-black/40"
                            />
                          </div>
                          <div className="min-w-0">
                            <label
                              htmlFor="safari-dates"
                              className="mb-2 block text-sm font-medium"
                            >
                              Preferred Travel Date
                            </label>
                            <input
                              id="safari-dates"
                              name="arrival"
                              required
                              type="date"
                              min={formatDateForInput(new Date())}
                              value={form.dates}
                              onChange={(event) =>
                                setForm({ ...form, dates: event.target.value })
                              }
                              className="block w-full max-w-full min-w-0 box-border appearance-none border border-black/10 bg-black/2.5 px-4 py-3 text-sm outline-none transition-colors focus:border-black/40"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="safari-whatsapp"
                              className="mb-2 block text-sm font-medium"
                            >
                              WhatsApp Number
                            </label>
                            <input
                              id="safari-whatsapp"
                              name="whatsapp"
                              required
                              type="tel"
                              autoComplete="tel"
                              placeholder="+263..."
                              value={form.whatsapp}
                              onChange={(event) =>
                                setForm({ ...form, whatsapp: event.target.value })
                              }
                              className="w-full border border-black/10 bg-black/2.5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-black/40"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="safari-email"
                              className="mb-2 block text-sm font-medium"
                            >
                              Email Address
                            </label>
                            <input
                              id="safari-email"
                              name="email"
                              required
                              type="email"
                              autoComplete="email"
                              placeholder="you@example.com"
                              value={form.email}
                              onChange={(event) =>
                                setForm({ ...form, email: event.target.value })
                              }
                              className="w-full border border-black/10 bg-black/2.5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-black/40"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="safari-special-requests"
                              className="mb-2 block text-sm font-medium"
                            >
                              Additional Requests, Occasion or Anything Else
                              We Should Know?{" "}
                              <span className="ml-2 text-xs font-normal text-black/40">
                                Optional
                              </span>
                            </label>
                            <textarea
                              id="safari-special-requests"
                              name="message"
                              rows={4}
                              placeholder="Tell us anything that may help us understand your plans..."
                              value={form.specialRequests}
                              onChange={(event) =>
                                setForm({
                                  ...form,
                                  specialRequests: event.target.value,
                                })
                              }
                              className="w-full resize-none border border-black/10 bg-black/2.5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-black/40"
                            />
                          </div>
                          <div className="space-y-3 pt-2">
                            <button
                              type="button"
                              onClick={() => {
                                if (enquiryFormRef.current?.reportValidity()) {
                                  window.open(
                                    whatsappHref,
                                    "_blank",
                                    "noopener,noreferrer",
                                  );
                                }
                              }}
                              className="w-full border border-brand bg-white px-5 py-4 text-sm font-medium text-brand transition-colors hover:bg-brand/5"
                            >
                              🦏 Send to WhatsApp — Book This Adventure
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full bg-brand px-6 py-4 text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              {isSubmitting
                                ? "Sending enquiry..."
                                : "✉ Email Enquiry"}
                            </button>
                          </div>
                          <p className="text-xs leading-5 text-subtle">
                            Email enquiries go directly to our team. You can
                            also email us at{" "}
                            <a
                              href={`mailto:${enquiryEmail}`}
                              className="underline underline-offset-2"
                            >
                              {enquiryEmail}
                            </a>
                            . WhatsApp opens a pre-filled message to our
                            published contact number.
                          </p>
                        </form>
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex items-center justify-between border-t border-neutral-200 pt-5">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep((current) => current - 1)}
                        className="inline-flex items-center gap-2 px-2 py-2 text-sm font-medium text-subtle transition hover:text-foreground"
                      >
                        <ChevronLeft aria-hidden="true" className="size-4" />
                        {step === 5 ? "Edit Experiences" : "Back"}
                      </button>
                    ) : (
                      <span />
                    )}

                    {step < 5 && (
                      <button
                        type="button"
                        onClick={() => setStep((current) => current + 1)}
                        disabled={
                          (step === 1 && selectedDestinations.length === 0) ||
                          (step === 3 && !accommodationChoice)
                        }
                        className="inline-flex items-center gap-2 bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-45"
                      >
                        {step === 4 ? "See Summary" : "Next"}
                        <ChevronRight aria-hidden="true" className="size-4" />
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
