export type Package = {
  slug: string;
  name: string;
  category: string;
  image: string;
  badge?: string;

  description: string;

  duration: {
    days: number;
    nights: number;
    label: string;
  };

  destinations: string[];
  location: string;

  activities: string[];

  highlights: string[];

  itinerary: {
    day: string;
    title: string;
    description: string;

    location?: string;
    accommodation?: string;
    meals?: string;

    times?: {
      time: string;
      title: string;
      description: string;
    }[];

    activities?: string[];
  }[];

  included: string[];
  notIncluded: string[];

  information: string[];

  accommodation?: {
    name?: string;
    description: string;
    category: string;
  };

  pricing: {
    currency: string;
    tiers: PricingTier[];
    label?: string;
  };

  cancellation?: {
    policy: string;
  };

  faqs?: {
    question: string;
    answer: string;
  }[];
};

export type PricingTier = {
  minPeople: number;
  maxPeople: number;
  pricePerPerson: number;
};

const supportedCountries = [
  "Zimbabwe",
  "Botswana",
  "Namibia",
  "South Africa",
  "Zambia",
  "Mozambique",
  "Malawi",
  "Lesotho",
  "Eswatini",
];

export function getPackageCountries(location: string) {
  return supportedCountries.filter((country) =>
    location.toLowerCase().includes(country.toLowerCase()),
  );
}

export function getPackagePricePerPerson(
  pricing: Package["pricing"],
  people: number,
) {
  return (
    pricing.tiers.find(
      (tier) =>
        people >= tier.minPeople &&
        people <= tier.maxPeople,
    )?.pricePerPerson ?? null
  );
}

export function getPackageFromPrice(
  pricing: Package["pricing"],
) : number | null {
  return pricing.tiers.length > 0
    ? Math.min(
    ...pricing.tiers.map(
      (tier) => tier.pricePerPerson,
    ),
      )
    : null;
}

export const packages: Package[] = [
  {
    slug: "victoria-falls-essentials",
    name: "Victoria Falls Essentials",
    category: "Short Escape",
    image: "/images/optimized/packages/victoria-falls-essentials.webp",
    badge: "Popular",

    description:
      "Discover the beauty and excitement of Victoria Falls on a carefully planned three-day escape. Explore the rainforest and spectacular viewpoints of one of the world's most remarkable waterfalls, enjoy a sunset cruise along the Zambezi River, and experience the welcoming atmosphere of Victoria Falls town. With accommodation, local transfers and essential experiences arranged for you, this package is ideal for first-time visitors, couples, solo travellers and guests adding Victoria Falls to a wider African journey.",

    duration: {
      days: 3,
      nights: 2,
      label: "3 Days / 2 Nights",
    },

    destinations: [
      "Victoria Falls",
      "Zambezi River",
    ],

    location: "Victoria Falls, Zimbabwe",

    activities: [
      "victoria-falls-tour",
      "zambezi-sunset-cruise",
      "airport-transfers",
      "local-town-exploration",
    ],

    highlights: [
      "Explore the Victoria Falls rainforest and viewpoints with a local guide.",
      "Enjoy a scenic sunset cruise on the Zambezi River.",
      "Stay for two nights in comfortable Victoria Falls accommodation.",
      "Enjoy convenient airport and scheduled activity transfers.",
      "Discover local restaurants, craft markets and town attractions during your free time.",
      "Ideal for first-time visitors, couples, solo travellers and short-stay guests.",
      "Optional adventure activities available on request.",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Victoria Falls & Zambezi Sunset Cruise",
        description:
          "Arrive in Victoria Falls and begin your Zimbabwe experience with a convenient transfer to your accommodation. After check-in, enjoy time to relax before heading out for a scenic sunset cruise on the Zambezi River. Watch for birdlife and other wildlife along the riverbanks as the day draws to a close.",

        times: [
          {
            time: "Arrival",
            title: "Meet & greet at Victoria Falls Airport",
            description:
              "Meet your driver at Victoria Falls International Airport. Receive assistance with your luggage and transfer to your accommodation. Transfer arrangements are confirmed using your flight details.",
          },
          {
            time: "Early afternoon",
            title: "Hotel check-in & relaxation",
            description:
              "Check in to your accommodation, settle into your room and enjoy time to relax after your journey. Early check-in depends on accommodation availability.",
          },
          {
            time: "Afternoon",
            title: "Free time in Victoria Falls",
            description:
              "Explore the nearby town independently, visit local craft shops or relax at your accommodation. Lunch and personal purchases are at your own expense unless otherwise confirmed.",
          },
          {
            time: "Late afternoon",
            title: "Zambezi sunset cruise",
            description:
              "Transfer to the designated cruise departure point and board a scheduled Zambezi River cruise. Enjoy river scenery, birdlife and the changing colours of the African sunset. Departure time, refreshments and any included drinks depend on the selected cruise operator.",
          },
          {
            time: "Evening",
            title: "Return to accommodation",
            description:
              "Return to your accommodation after the cruise. Enjoy the evening at leisure, with dinner at your chosen restaurant or hotel.",
          },
        ],

        activities: [
          "airport-transfers",
          "zambezi-sunset-cruise",
          "local-town-exploration",
        ],
      },

      {
        day: "Day 2",
        title: "Guided Victoria Falls Rainforest Experience",
        description:
          "Discover the natural wonder of Victoria Falls on a guided rainforest tour. Walk along established pathways to selected viewpoints, learn about the waterfall's geology and local history, and experience the spray and sound of the cascading Zambezi River. Enjoy the remainder of the day at leisure, with optional activities available for guests who want to explore further.",

        times: [
          {
            time: "Morning",
            title: "Breakfast at the accommodation",
            description:
              "Enjoy breakfast at your accommodation before meeting your guide or driver for the day's arrangements. Breakfast inclusion depends on the confirmed accommodation and package quotation.",
          },
          {
            time: "Morning",
            title: "Guided Victoria Falls tour",
            description:
              "Visit the Victoria Falls rainforest and viewpoints with a local guide. Learn about the Falls, its surrounding ecosystem and its significance to the region. The route and viewing conditions vary with seasonal water levels and weather.",
          },
          {
            time: "Late morning",
            title: "Scenic viewpoints & photography",
            description:
              "Spend time at accessible viewpoints to appreciate the waterfall and surrounding rainforest. Bring a camera protected against spray and wear comfortable walking shoes.",
          },
          {
            time: "Afternoon",
            title: "Lunch & leisure time",
            description:
              "Return towards town and enjoy lunch at your own expense unless specifically included in your booking. Spend the afternoon relaxing or exploring local shops and attractions.",
          },
          {
            time: "Optional afternoon",
            title: "Additional Victoria Falls experience",
            description:
              "Choose an optional activity such as a helicopter flight, guided cultural experience or another available local excursion. Additional activities require advance confirmation and are charged separately unless included in your final quotation.",
          },
          {
            time: "Evening",
            title: "Evening at leisure",
            description:
              "Return to your accommodation and enjoy a relaxed evening. Dinner and any entertainment are arranged independently unless otherwise stated in your booking confirmation.",
          },
        ],

        activities: [
          "victoria-falls-tour",
          "local-town-exploration",
        ],
      },

      {
        day: "Day 3",
        title: "Breakfast, Leisure & Departure",
        description:
          "Enjoy your final morning in Victoria Falls before checking out and transferring to the airport or your next destination. Depending on your departure schedule, you may have time for breakfast, a short walk or a final visit to local shops.",

        times: [
          {
            time: "Morning",
            title: "Breakfast & final leisure time",
            description:
              "Enjoy breakfast and use any available free time to relax, take photographs or purchase locally made souvenirs. Activities depend on your departure time and accommodation check-out arrangements.",
          },
          {
            time: "Check-out",
            title: "Accommodation check-out",
            description:
              "Check out in accordance with the accommodation's confirmed check-out time. Additional charges may apply for late check-out or luggage storage where these services are requested.",
          },
          {
            time: "Scheduled departure",
            title: "Airport or onward transfer",
            description:
              "Meet your driver for a scheduled transfer to Victoria Falls International Airport or another agreed departure point. Transfer time is arranged around your confirmed flight or onward travel schedule.",
          },
        ],

        activities: [
          "airport-transfers",
        ],
      },
    ],

    included: [
      "Two nights of accommodation in Victoria Falls.",
      "Accommodation taxes and service charges where included in the confirmed rate.",
      "Scheduled arrival transfer from Victoria Falls International Airport.",
      "Scheduled departure transfer to Victoria Falls International Airport or another agreed local departure point.",
      "Guided Victoria Falls rainforest tour.",
      "Scheduled return transfers for the included Victoria Falls tour.",
      "Zambezi sunset cruise.",
      "Scheduled transfers for the included sunset cruise where specified in the final quotation.",
      "Pre-arrival itinerary coordination and booking assistance by Shungu Africa.",
      "Local assistance with confirmed package arrangements.",
    ],

    notIncluded: [
      "International or domestic flights unless specifically included in the quotation.",
      "Zimbabwe visa fees or other immigration charges.",
      "Travel insurance and emergency medical cover.",
      "Meals and drinks not explicitly stated as included.",
      "Lunches, dinners and personal refreshments.",
      "Victoria Falls National Park entry fees unless specifically included in the confirmed package price.",
      "Optional helicopter flights, bungee jumping, white-water rafting and other additional activities.",
      "Tips and gratuities for guides, drivers, hotel staff and activity providers.",
      "Personal shopping, laundry, telephone charges and other personal expenses.",
      "Additional accommodation nights or room upgrades.",
      "Private transfers or services not specified in the confirmed itinerary.",
      "Costs arising from flight changes, missed connections or other unforeseen travel disruptions.",
    ],

    information: [
      "This package is designed as a three-day, two-night short escape based in Victoria Falls, Zimbabwe.",
      "The itinerary is a suggested schedule and may be adjusted to match flight arrival and departure times.",
      "The sunset cruise is subject to operator availability, river conditions and the confirmed departure schedule.",
      "Victoria Falls viewing conditions vary throughout the year. Water volume, spray and visibility change with seasonal river levels.",
      "The rainforest tour involves walking on established pathways. Surfaces may be wet or slippery, so comfortable walking shoes are recommended.",
      "Victoria Falls National Park admission arrangements and fees must be confirmed in the final quotation.",
      "Guests should carry valid travel documents and check visa and entry requirements applicable to their nationality before travel.",
      "Airport and activity transfers are arranged according to the services explicitly listed in the confirmed booking.",
      "Accommodation is subject to availability. A comparable alternative may be proposed if the preferred property is unavailable, with any material price difference agreed before confirmation.",
      "Optional activities are not guaranteed until availability, pricing and booking conditions have been confirmed.",
      "Guests should advise Shungu Africa of mobility requirements, dietary needs and relevant activity restrictions before booking.",
      "Travel insurance is strongly recommended.",
      "Wildlife sightings during the Zambezi cruise are not guaranteed.",
      "All services remain subject to supplier terms, operational conditions and written booking confirmation.",
    ],

    accommodation: {
      description:
        "Two nights in comfortable mid-range accommodation in Victoria Falls. The property is selected according to availability, guest preferences and the confirmed package budget. Bed configuration, meal plan, check-in arrangements and any room upgrades are confirmed before booking.",
      category: "Mid-range",
    },

    pricing: {
      currency: "USD",
      tiers: [
        {
          minPeople: 1,
          maxPeople: 1,
          pricePerPerson: 850,
        },
        {
          minPeople: 2,
          maxPeople: 2,
          pricePerPerson: 800,
        },
        {
          minPeople: 3,
          maxPeople: 3,
          pricePerPerson: 750,
        },
        {
          minPeople: 4,
          maxPeople: 4,
          pricePerPerson: 700,
        },
        {
          minPeople: 5,
          maxPeople: 12,
          pricePerPerson: 650,
        },
      ],
    },

    cancellation: {
      policy:
        "Cancellation and amendment terms depend on the accommodation, cruise operator, tour provider and transfer suppliers included in the booking. Supplier-specific deposits, non-refundable charges and cancellation deadlines may apply. The applicable cancellation schedule, deposit requirements, payment deadlines and amendment fees must be provided to the client before payment and confirmed in writing. Refunds, where applicable, are subject to supplier approval and deductions permitted under the agreed booking terms. Travel insurance is strongly recommended.",
    },

    faqs: [
      {
        question: "What is included in the Victoria Falls Essentials package?",
        answer:
          "The package is designed to include two nights of accommodation, a guided Victoria Falls rainforest tour, a Zambezi sunset cruise and the scheduled transfers specified in your final quotation. Park fees, meals and other services should be checked against the confirmed inclusions before payment.",
      },
      {
        question: "Is this package suitable for first-time visitors?",
        answer:
          "Yes. It combines the two signature Victoria Falls experiences with free time, making it a convenient introduction for first-time visitors, couples, solo travellers and guests adding Victoria Falls to a longer African holiday.",
      },
      {
        question: "Can I extend my stay in Victoria Falls?",
        answer:
          "Yes. Additional nights, accommodation upgrades, extra tours and other activities can be added subject to availability. Shungu Africa can provide an updated quotation based on your preferred dates and experiences.",
      },
      {
        question: "Can I upgrade the accommodation?",
        answer:
          "Yes. Alternative mid-range, upper mid-range or luxury accommodation can be requested. The final price will depend on the property, room type, travel dates and availability.",
      },
      {
        question: "When is the best time to visit Victoria Falls?",
        answer:
          "Victoria Falls can be visited throughout the year. Water levels and viewing conditions change seasonally, so the best time depends on whether you prefer a powerful waterfall, clearer viewpoints or particular adventure activities. Shungu Africa can help match the itinerary to your travel preferences.",
      },
      {
        question: "Are meals included?",
        answer:
          "Meals are included only where stated in the confirmed quotation. The accommodation meal plan and any refreshments provided during the sunset cruise should be verified before booking.",
      },
      {
        question: "Are the sunset cruise and Falls tour guaranteed?",
        answer:
          "They are subject to availability and operational conditions. Shungu Africa will confirm the services with the relevant providers. Changes may be required because of weather, river conditions or other operational factors.",
      },
      {
        question: "Do I need a visa to visit Zimbabwe?",
        answer:
          "Entry requirements depend on your nationality, travel documents and applicable immigration rules. Check the current official requirements before departure. Visa fees are excluded unless explicitly included in your quotation.",
      },
      {
        question: "Can airport transfers be arranged for different flight times?",
        answer:
          "Yes. Transfer arrangements can be tailored to confirmed flight details. Private transfers, waiting time, late-night services or changes outside the original schedule may affect the final price.",
      },
      {
        question: "Can families with children book this package?",
        answer:
          "Yes, subject to suitable accommodation, room arrangements and activity-provider requirements. Families should provide children's ages when requesting a quotation so that the itinerary and pricing can be checked.",
      },
      {
        question: "How do I confirm my booking?",
        answer:
          "Contact Shungu Africa with your preferred travel dates, number of travellers, nationality where relevant, accommodation preferences and flight details. Your booking is confirmed once availability, final pricing, payment terms and supplier arrangements have been agreed in writing.",
      },
    ],
  },
  {
    slug: "victoria-falls-hwange-safari",
    name: "Victoria Falls & Hwange Safari",
    category: "Wildlife & Nature",
    image: "/images/packages/victoria-falls-and-hwange-safari.jpg",
    badge: "Signature Safari",

    description:
      "Experience two of Zimbabwe's most remarkable destinations on one unforgettable journey. Begin in Victoria Falls, where the rainforest viewpoints reveal the power and beauty of one of the world's great waterfalls. Enjoy a sunset cruise on the Zambezi River before travelling to Hwange National Park for an immersive African safari. Explore wildlife-rich landscapes on guided game drives, look for elephants and other iconic African animals, and unwind in a safari lodge surrounded by nature. This carefully planned five-day journey combines sightseeing, wildlife, comfortable accommodation and convenient transfers, making it ideal for first-time safari visitors, couples and international travellers seeking an introduction to Zimbabwe.",

    duration: {
      days: 5,
      nights: 4,
      label: "5 Days / 4 Nights",
    },

    destinations: [
      "Victoria Falls",
      "Hwange National Park",
    ],

    location: "Victoria Falls and Hwange, Zimbabwe",

    activities: [
      "victoria-falls-tour",
      "zambezi-sunset-cruise",
      "hwange-game-drive",
      "wildlife-photography",
      "african-safari",
      "airport-transfers",
      "safari-transfers",
    ],

    highlights: [
      "Discover Victoria Falls on a guided rainforest and viewpoint tour.",
      "Enjoy a scenic sunset cruise on the Zambezi River.",
      "Travel into Zimbabwe's renowned Hwange National Park safari region.",
      "Experience guided game drives in search of elephants, buffalo, giraffes, antelope and other wildlife.",
      "Enjoy the atmosphere of a safari lodge or camp close to nature.",
      "Experience both Zimbabwe's famous waterfall and its wildlife in one itinerary.",
      "Benefit from coordinated transfers between destinations.",
      "Suitable for first-time safari travellers, couples, private travellers and small groups.",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Victoria Falls & Zambezi Sunset Cruise",
        description:
          "Arrive in Victoria Falls and begin your Zimbabwe holiday with a transfer to your accommodation. After settling in, enjoy free time before experiencing the Zambezi River on a sunset cruise. Look out for riverbank wildlife and birdlife as the sun sets over the African landscape.",

        times: [
          {
            time: "Arrival",
            title: "Airport meet & greet",
            description:
              "Meet your driver at Victoria Falls International Airport. Receive assistance with luggage before transferring to your accommodation. The transfer is coordinated around your confirmed flight details.",
          },
          {
            time: "Early afternoon",
            title: "Check-in & relaxation",
            description:
              "Check in to your accommodation and take time to relax after your journey. Early check-in depends on room availability.",
          },
          {
            time: "Afternoon",
            title: "Free time in Victoria Falls",
            description:
              "Enjoy time at leisure to explore the town, visit local craft markets or relax at your accommodation. Lunch and personal purchases are at your own expense unless specified in your quotation.",
          },
          {
            time: "Late afternoon",
            title: "Zambezi sunset cruise",
            description:
              "Transfer to the cruise departure point and enjoy a scheduled sunset cruise on the Zambezi River. Experience scenic river views and opportunities to observe birds and wildlife along the riverbanks. Departure time and included refreshments depend on the selected operator.",
          },
          {
            time: "Evening",
            title: "Return to accommodation",
            description:
              "Return to your accommodation and enjoy the evening at leisure. Dinner is arranged independently unless expressly included in your confirmed package.",
          },
        ],

        activities: [
          "airport-transfers",
          "zambezi-sunset-cruise",
        ],
      },

      {
        day: "Day 2",
        title: "Victoria Falls Rainforest & Scenic Viewpoints",
        description:
          "Explore Victoria Falls with a local guide and discover the rainforest, viewpoints and dramatic landscape surrounding the waterfall. Learn about the area's natural history and enjoy time for photography before spending the afternoon at leisure.",

        times: [
          {
            time: "Morning",
            title: "Breakfast",
            description:
              "Enjoy breakfast at your accommodation before departing for the Falls. Breakfast inclusion depends on the confirmed accommodation meal plan.",
          },
          {
            time: "Morning",
            title: "Guided Victoria Falls tour",
            description:
              "Visit the Victoria Falls rainforest and established viewpoints with a local guide. Learn about the waterfall, its geology and the surrounding ecosystem. Viewing conditions vary with seasonal water levels and weather.",
          },
          {
            time: "Late morning",
            title: "Viewpoints & photography",
            description:
              "Enjoy time at selected viewpoints for photographs and scenery. Wear comfortable walking shoes and protect cameras and electronics from water spray.",
          },
          {
            time: "Afternoon",
            title: "Lunch & free time",
            description:
              "Return towards town for lunch at your own expense unless otherwise specified. Spend the afternoon relaxing or exploring the local area.",
          },
          {
            time: "Optional afternoon",
            title: "Additional Victoria Falls experience",
            description:
              "Choose an optional helicopter flight, cultural visit or another available activity. Additional experiences require confirmation and are charged separately unless included in the final quotation.",
          },
          {
            time: "Evening",
            title: "Evening at leisure",
            description:
              "Return to your accommodation and prepare for the journey to Hwange the following day.",
          },
        ],

        activities: [
          "victoria-falls-tour",
        ],
      },

      {
        day: "Day 3",
        title: "Travel to Hwange & Afternoon Safari",
        description:
          "Leave Victoria Falls and travel towards Hwange National Park, one of Zimbabwe's best-known wildlife destinations. Arrive at your selected safari lodge or camp, settle in and enjoy your first safari experience if operating schedules and arrival time permit.",

        times: [
          {
            time: "Early morning",
            title: "Breakfast & check-out",
            description:
              "Enjoy breakfast, check out of your Victoria Falls accommodation and prepare for the transfer to Hwange.",
          },
          {
            time: "Morning",
            title: "Transfer to Hwange",
            description:
              "Travel by the confirmed road transfer or other arranged transport to your selected Hwange accommodation. Journey time depends on the lodge location, road conditions and transport arrangements.",
          },
          {
            time: "Midday",
            title: "Arrival, lunch & check-in",
            description:
              "Arrive at the safari property, check in and enjoy lunch according to your accommodation meal plan. Take time to settle into the surroundings and learn about the lodge's safari schedule.",
          },
          {
            time: "Afternoon",
            title: "Afternoon game drive",
            description:
              "Where included, scheduled and operationally feasible, join a guided game drive in the designated safari area. Look for elephants, giraffes, antelope and other wildlife. Sightings depend on natural conditions and animal movements.",
          },
          {
            time: "Evening",
            title: "Dinner at the safari lodge",
            description:
              "Return to the lodge or camp and enjoy dinner according to the confirmed meal plan. Spend the evening relaxing and listening to the sounds of the African bush.",
          },
        ],

        activities: [
          "safari-transfers",
          "hwange-game-drive",
          "wildlife-photography",
        ],
      },

      {
        day: "Day 4",
        title: "Full-Day Hwange Wildlife Safari",
        description:
          "Spend a rewarding day discovering Hwange's wildlife and diverse landscapes. Set out on a morning game drive when wildlife is often active, return to your lodge for a midday break, and continue exploring during an afternoon safari. The day's experience follows the schedule and safari activities offered by your selected property.",

        times: [
          {
            time: "Early morning",
            title: "Morning safari briefing",
            description:
              "Meet your safari guide, review the day's arrangements and prepare for the morning game drive. Departure time is determined by the lodge's confirmed safari schedule.",
          },
          {
            time: "Morning",
            title: "Guided game drive",
            description:
              "Explore the designated safari area in search of elephants, buffalo, giraffes, zebras, antelope and other wildlife. Your guide will share information about animal behaviour, habitats and the park ecosystem.",
          },
          {
            time: "Late morning",
            title: "Return to the lodge",
            description:
              "Return from the game drive for breakfast or refreshments, depending on the property's schedule and meal arrangements.",
          },
          {
            time: "Midday",
            title: "Lunch & relaxation",
            description:
              "Enjoy lunch and time to relax at the lodge. Depending on the property, you may have opportunities to watch wildlife from a viewing area or enjoy the surrounding natural setting.",
          },
          {
            time: "Afternoon",
            title: "Afternoon game drive",
            description:
              "Continue your wildlife experience with an afternoon game drive, exploring different areas where possible. Wildlife sightings cannot be guaranteed, as animals move freely throughout their habitat.",
          },
          {
            time: "Evening",
            title: "Dinner & safari lodge experience",
            description:
              "Return to the lodge for dinner and an evening at leisure. Any night drives, guided walks or other special activities depend on the selected property, applicable permissions and confirmed booking.",
          },
        ],

        activities: [
          "hwange-game-drive",
          "african-safari",
          "wildlife-photography",
        ],
      },

      {
        day: "Day 5",
        title: "Final Morning & Departure",
        description:
          "Enjoy your final morning in the Hwange safari region before checking out and continuing to your next destination. Your departure transfer will be arranged according to your onward travel plans and the confirmed transport schedule.",

        times: [
          {
            time: "Early morning",
            title: "Optional final game drive",
            description:
              "Where available and included in your booking, enjoy a final morning game drive before breakfast. This activity depends on the lodge schedule, departure arrangements and transport requirements.",
          },
          {
            time: "Morning",
            title: "Breakfast & check-out",
            description:
              "Enjoy breakfast, pack your belongings and check out according to the property's confirmed departure arrangements.",
          },
          {
            time: "Scheduled departure",
            title: "Onward transfer",
            description:
              "Transfer to the agreed departure point, such as Victoria Falls, Victoria Falls International Airport or another destination specified in your confirmed itinerary. The route and any additional costs must be agreed before booking.",
          },
        ],

        activities: [
          "safari-transfers",
          "airport-transfers",
        ],
      },
    ],

    included: [
      "Four nights of accommodation: two nights in Victoria Falls and two nights in the Hwange safari region.",
      "Accommodation meal plan as specified in the confirmed quotation.",
      "Scheduled arrival transfer from Victoria Falls International Airport.",
      "Guided Victoria Falls rainforest tour.",
      "Zambezi sunset cruise.",
      "Scheduled transfers for the included Victoria Falls activities where specified.",
      "Return or onward transfer arrangements between Victoria Falls and the selected Hwange accommodation, as itemized in the confirmed quotation.",
      "Hwange safari activities explicitly specified in the final package quotation.",
      "Safari guide and vehicle costs for included game drives, according to the selected operator's arrangements.",
      "Scheduled departure transfer to the agreed destination, where explicitly included.",
      "Pre-arrival itinerary coordination and booking assistance by Shungu Africa.",
      "Coordination of confirmed accommodation, safari and transfer arrangements.",
    ],

    notIncluded: [
      "International or domestic flights unless expressly included.",
      "Zimbabwe visa fees and immigration charges.",
      "Travel insurance and emergency medical cover.",
      "Meals and drinks not included in the confirmed accommodation meal plan.",
      "Victoria Falls National Park admission fees unless explicitly included.",
      "Hwange National Park entry fees, conservation fees and applicable levies unless expressly included.",
      "Optional helicopter flights, rafting, bungee jumping and other activities not listed as included.",
      "Additional safari activities beyond the confirmed package allowance.",
      "Tips and gratuities for guides, drivers and lodge staff.",
      "Personal purchases, laundry, telephone charges and other personal expenses.",
      "Accommodation upgrades, single-room supplements and additional nights unless quoted.",
      "Private transfers or vehicle upgrades not specified in the final quotation.",
      "Additional transfers arising from changed flight schedules or itinerary changes.",
      "Costs caused by missed flights, delays, disruptions or circumstances outside the agreed service arrangements.",
    ],

    information: [
      "The standard itinerary is five days and four nights, with two nights in Victoria Falls and two nights in the Hwange safari region.",
      "The precise safari location depends on the selected accommodation. Hwange National Park covers a large area, and some lodges are located outside the park or in private concessions.",
      "Game drives, walking safaris and other wildlife activities vary by property. Only activities specifically confirmed in the quotation are included.",
      "Wildlife sightings are not guaranteed. Animals move freely and sightings depend on season, weather, habitat and natural behaviour.",
      "Transfer duration between Victoria Falls and the selected Hwange property depends on the exact location, road conditions and transport method.",
      "If the itinerary requires a road transfer on Day 5, sufficient time must be allowed for onward flights. An overnight stay or different transfer arrangement may be necessary for early departures.",
      "Victoria Falls viewing conditions vary with seasonal water levels and weather.",
      "Park admission fees, conservation charges, activity levies and accommodation meal plans must be clearly itemized in the final quotation.",
      "Accommodation and safari activities are subject to availability. Any alternative property or material price change must be agreed before confirmation.",
      "The itinerary may be adjusted due to weather, road conditions, park regulations, supplier schedules or other operational requirements.",
      "Guests should bring neutral-coloured, comfortable clothing, sun protection, insect repellent, suitable footwear and binoculars if desired.",
      "Guests should carry valid travel documents and confirm applicable visa and entry requirements before travel.",
      "Travel insurance is strongly recommended.",
      "Guests should advise Shungu Africa of dietary needs, mobility requirements, children's ages and other relevant requests before booking.",
      "All services are subject to supplier terms, operational conditions and written booking confirmation.",
    ],

    accommodation: {
      description:
        "Two nights in comfortable accommodation in Victoria Falls and two nights at a selected safari lodge or camp in the Hwange region. The Victoria Falls property and safari accommodation are chosen according to the agreed budget, travel dates, availability and preferred comfort level. Specific property names, room categories, meal plans and safari inclusions are confirmed in the final quotation.",
      category: "Mid-range Safari",
    },

    pricing: {
      currency: "USD",
      tiers: [
        {
          minPeople: 1,
          maxPeople: 1,
          pricePerPerson: 1850,
        },
        {
          minPeople: 2,
          maxPeople: 2,
          pricePerPerson: 1650,
        },
        {
          minPeople: 3,
          maxPeople: 3,
          pricePerPerson: 1550,
        },
        {
          minPeople: 4,
          maxPeople: 4,
          pricePerPerson: 1450,
        },
        {
          minPeople: 5,
          maxPeople: 12,
          pricePerPerson: 1350,
        },
      ],
    },

    cancellation: {
      policy:
        "Cancellation, amendment and refund conditions depend on the accommodation, safari lodge, park arrangements, activity operators and transfer providers included in the confirmed booking. Deposit requirements, payment deadlines, non-refundable charges and cancellation penalties must be disclosed to the client before payment. Some safari properties require advance payment or have stricter cancellation terms, particularly during peak season. Refunds are subject to the applicable supplier conditions and agreed booking terms. Changes to travel dates, accommodation or passenger numbers may affect the total price. Shungu Africa will provide the applicable cancellation schedule in writing before the booking is confirmed. Travel insurance is strongly recommended.",
    },

    faqs: [
      {
        question: "What is included in the Victoria Falls & Hwange Safari?",
        answer:
          "The itinerary is designed around four nights of accommodation, a guided Victoria Falls tour, a Zambezi sunset cruise, transfers between the destinations and confirmed Hwange safari activities. Exact meal plans, park fees, safari activities and transfers are specified in your final quotation.",
      },
      {
        question: "How many nights do we spend in each destination?",
        answer:
          "The standard itinerary includes two nights in Victoria Falls and two nights in the Hwange safari region. Additional nights can be added according to your interests and budget.",
      },
      {
        question: "Which animals can I see in Hwange?",
        answer:
          "Hwange is known for elephants and supports a variety of other wildlife, including buffalo, giraffes, zebras, antelope, predators and many bird species. Sightings depend on season, location and natural animal movements and cannot be guaranteed.",
      },
      {
        question: "Are game drives included in the price?",
        answer:
          "The intended package includes the Hwange safari activities specified in the confirmed quotation. The number of drives, vehicle arrangements, guide services and applicable park or conservation fees must be confirmed with the selected property.",
      },
      {
        question: "Can I upgrade to a luxury safari lodge?",
        answer:
          "Yes. Luxury lodges and alternative safari camps can be requested. Pricing depends on the property, season, room availability, meal plan, safari inclusions and transfer arrangements.",
      },
      {
        question: "Can I add more days in Hwange?",
        answer:
          "Yes. Additional nights can be arranged to allow more time for game drives and relaxation. The itinerary and price will be updated according to the selected lodge and availability.",
      },
      {
        question: "Is this safari suitable for first-time visitors to Africa?",
        answer:
          "Yes. Combining Victoria Falls with Hwange offers an introduction to one of Zimbabwe's best-known attractions and a wildlife safari. The itinerary can be adjusted to suit your preferred pace, accommodation standard and travel arrangements.",
      },
      {
        question: "What is the best time to visit Hwange?",
        answer:
          "Hwange can be visited throughout the year. Wildlife concentrations, vegetation and viewing conditions vary seasonally. Your preferred travel month and wildlife interests can help determine the most suitable lodge and itinerary.",
      },
      {
        question: "Are flights included?",
        answer:
          "International and domestic flights are excluded unless expressly listed in your quotation. Shungu Africa can help coordinate suitable flight and transfer arrangements where available.",
      },
      {
        question: "Can I finish the safari in Victoria Falls?",
        answer:
          "Yes, subject to the selected lodge's location and the agreed transfer arrangements. The final day's transfer can be planned around Victoria Falls or another agreed destination. Additional transport costs may apply.",
      },
      {
        question: "Can families with children book this itinerary?",
        answer:
          "Yes, subject to the selected property's child policy, room configuration and activity requirements. Some safari activities have minimum-age restrictions. Provide children's ages when requesting a quotation.",
      },
      {
        question: "What should I pack for the safari?",
        answer:
          "Pack comfortable neutral-coloured clothing, suitable walking shoes, a hat, sunscreen, insect repellent, binoculars and a camera. Layered clothing is useful for cool mornings and evenings. Your lodge can advise on any specific requirements.",
      },
      {
        question: "How do I book the Victoria Falls & Hwange Safari?",
        answer:
          "Contact Shungu Africa with your preferred travel dates, number of travellers, accommodation preferences and onward flight details. We can check supplier availability, confirm the final itinerary and provide a quotation with payment and cancellation terms.",
      },
    ],
  },
  {
  slug: "victoria-falls-hwange-chobe",
  name: "Victoria Falls, Hwange & Chobe",
  category: "Multi-Destination Safari",
  image: "/images/optimized/packages/victoria-falls-hwange-chobe.webp",
  badge: "Three-Destination Adventure",
  description:
    "Discover three unforgettable Southern African wildlife and nature destinations in one carefully planned journey. Begin in Victoria Falls, home to one of the world's most spectacular waterfalls, and enjoy a guided rainforest tour and a sunset cruise on the Zambezi River. Continue to Hwange National Park for rewarding game drives across Zimbabwe's largest national park, renowned for its diverse wildlife and elephant populations. Complete your adventure with a Chobe safari excursion in Botswana, famous for its large elephant herds and wildlife-rich riverfront. This package combines iconic scenery, authentic safari experiences and cross-border adventure, making it ideal for couples, families, private travellers and small groups seeking a varied Zimbabwe and Botswana holiday.",
  duration: {
    days: 6,
    nights: 5,
    label: "6 Days / 5 Nights"
  },
  destinations: [
    "Victoria Falls, Zimbabwe",
    "Hwange National Park, Zimbabwe",
    "Chobe National Park, Botswana"
  ],
  location: "Victoria Falls, Hwange and Chobe, Zimbabwe and Botswana",
  activities: [
    "Guided Victoria Falls rainforest tour",
    "Zambezi River sunset cruise",
    "Hwange National Park game drives",
    "Wildlife viewing and photography",
    "Chobe National Park safari excursion",
    "Chobe River wildlife cruise, subject to the confirmed excursion",
    "Scenic road transfers",
    "Optional cultural experiences and additional activities"
  ],
  highlights: [
    "Visit the spectacular Victoria Falls from the Zimbabwean side",
    "Enjoy a sunset cruise on the Zambezi River",
    "Explore Hwange National Park on guided game drives",
    "Look out for elephants, buffalo, giraffes, antelope and predators",
    "Experience Chobe National Park in Botswana on a guided safari",
    "Enjoy the contrasting landscapes of riverfront, woodland and savannah",
    "Combine two countries in one itinerary",
    "Choose accommodation and service levels to suit your travel style"
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Victoria Falls",
      description:
        "Arrive at Victoria Falls Airport or another agreed arrival point. Meet your representative and transfer to your selected accommodation. After check-in, enjoy time to relax or explore the town at your own pace. Depending on your arrival time, optional activities may be arranged.",
      times: [
        {
          time: "Morning / Afternoon",
          title: "Arrival and transfer",
          description:
            "Meet-and-greet service and transfer to your accommodation, according to the confirmed arrival details."
        },
        {
          time: "Afternoon",
          title: "Leisure time",
          description:
            "Relax at the lodge or explore Victoria Falls town, local craft markets and nearby attractions."
        },
        {
          time: "Evening",
          title: "Welcome evening",
          description:
            "Enjoy dinner at your accommodation or a recommended local restaurant. Dinner is included only where specified in the final quotation."
        }
      ],
      activities: [
        "Airport or agreed-point transfer",
        "Check-in and orientation",
        "Optional town visit"
      ]
    },
    {
      day: "Day 2",
      title: "Victoria Falls and Zambezi Sunset Cruise",
      description:
        "Discover Victoria Falls on a guided rainforest tour, following walking paths and viewpoints that reveal different perspectives of the waterfall. Your guide shares information about the falls, local history and surrounding rainforest. Later, enjoy a sunset cruise on the Zambezi River, where you may see hippos, crocodiles and birds along the riverbanks. Wildlife sightings and sunset conditions vary.",
      times: [
        {
          time: "Morning",
          title: "Guided Victoria Falls tour",
          description:
            "Explore the designated rainforest paths and viewpoints with a local guide. Allow time for photographs and scenic stops."
        },
        {
          time: "Midday",
          title: "Lunch and leisure",
          description:
            "Enjoy lunch at a local restaurant or your accommodation. Lunch is at your own expense unless included in your quotation."
        },
        {
          time: "Late Afternoon",
          title: "Zambezi sunset cruise",
          description:
            "Board a scheduled cruise and enjoy river scenery, refreshments and wildlife viewing where conditions permit."
        },
        {
          time: "Evening",
          title: "Return to accommodation",
          description:
            "Return to your lodge or hotel for the evening."
        }
      ],
      activities: [
        "Guided Victoria Falls rainforest tour",
        "Scenic photography",
        "Zambezi River sunset cruise",
        "Optional local dining"
      ]
    },
    {
      day: "Day 3",
      title: "Transfer to Hwange National Park",
      description:
        "After breakfast, depart Victoria Falls for the Hwange area using the road transfer and route confirmed for your accommodation. On arrival, check in and settle into your safari lodge or camp. If timing, transfer arrangements and the lodge schedule permit, enjoy an afternoon game drive in Hwange National Park. Otherwise, the game drive can be arranged for the following day.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and departure",
          description:
            "Check out and begin the road transfer towards your confirmed Hwange accommodation."
        },
        {
          time: "Midday / Afternoon",
          title: "Arrival and check-in",
          description:
            "Arrive at the lodge or camp, enjoy lunch according to your booking and receive a safari orientation."
        },
        {
          time: "Afternoon",
          title: "Optional game drive",
          description:
            "Join a guided game drive if available within the lodge's operating schedule and park access arrangements."
        },
        {
          time: "Evening",
          title: "Dinner at the safari lodge",
          description:
            "Enjoy the safari camp atmosphere. Meals are provided according to the selected accommodation plan."
        }
      ],
      activities: [
        "Road transfer to the Hwange area",
        "Safari lodge check-in",
        "Optional afternoon game drive",
        "Wildlife viewing"
      ]
    },
    {
      day: "Day 4",
      title: "Hwange Safari Experience",
      description:
        "Spend the day exploring Hwange National Park with experienced safari guides. Depending on the camp's programme, enjoy an early-morning game drive and a second drive later in the afternoon, when wildlife may be active. Hwange supports elephants, buffalo, giraffes, zebras, antelope and a variety of predators and birdlife. Sightings are never guaranteed, and the day's schedule depends on the lodge, season and confirmed safari arrangement.",
      times: [
        {
          time: "Early Morning",
          title: "Morning game drive",
          description:
            "Head into the park or concession area with your guide to look for wildlife in the cooler hours."
        },
        {
          time: "Late Morning",
          title: "Breakfast and relaxation",
          description:
            "Return to camp for breakfast and time to rest, subject to the lodge's schedule."
        },
        {
          time: "Midday",
          title: "Lunch and leisure",
          description:
            "Enjoy lunch and relax at the lodge. Included meals depend on the selected accommodation package."
        },
        {
          time: "Afternoon",
          title: "Afternoon game drive",
          description:
            "Continue exploring wildlife habitats and waterholes with your guide."
        },
        {
          time: "Evening",
          title: "Dinner and overnight",
          description:
            "Return to camp for dinner and your overnight stay."
        }
      ],
      activities: [
        "Guided morning game drive",
        "Guided afternoon game drive",
        "Wildlife photography",
        "Birdwatching",
        "Safari lodge experience"
      ]
    },
    {
      day: "Day 5",
      title: "Transfer to Victoria Falls and Chobe Excursion",
      description:
        "After breakfast, transfer from the Hwange area back towards Victoria Falls. Depending on the final transport plan, border arrangements and available excursion schedule, continue to Kasane, Botswana, for a guided Chobe National Park safari. The Chobe experience may include a game drive and, where booked, a river cruise. This is a cross-border excursion requiring valid travel documents and compliance with the entry requirements of both countries. Because the transfer and border crossing can take considerable time, the Chobe excursion must be confirmed against the actual route and schedule. If the timing is impractical, arrange an overnight in Kasane and extend the package to six nights.",
      times: [
        {
          time: "Early Morning",
          title: "Breakfast and check-out",
          description:
            "Depart the Hwange accommodation according to the agreed transfer schedule."
        },
        {
          time: "Morning / Midday",
          title: "Transfer towards Victoria Falls and Botswana",
          description:
            "Travel by the confirmed road route and complete immigration procedures at the designated border crossing."
        },
        {
          time: "Afternoon",
          title: "Chobe safari experience",
          description:
            "If the confirmed schedule permits, join a guided Chobe game drive or other pre-booked safari activity."
        },
        {
          time: "Late Afternoon",
          title: "Optional Chobe River cruise",
          description:
            "A river cruise may be included when specifically booked and compatible with the day's schedule."
        },
        {
          time: "Evening",
          title: "Return to Victoria Falls",
          description:
            "Return to your confirmed Victoria Falls accommodation if road, border and excursion timings permit. If not, an overnight in Kasane and an extra night should be arranged."
        }
      ],
      activities: [
        "Road transfer and border crossing",
        "Chobe National Park safari, subject to confirmed timings",
        "Optional Chobe River cruise",
        "Wildlife photography"
      ]
    },
    {
      day: "Day 6",
      title: "Departure from Victoria Falls",
      description:
        "Enjoy breakfast and check out of your accommodation. At the agreed time, transfer to Victoria Falls Airport or another confirmed departure point. Travellers with an early flight or an overnight in Kasane may require a revised transfer plan. Additional nights, excursions or onward transfers can be arranged on request.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and check-out",
          description:
            "Enjoy breakfast, pack and prepare for departure according to your accommodation's check-out time."
        },
        {
          time: "As scheduled",
          title: "Departure transfer",
          description:
            "Transfer to the airport or agreed departure point in line with the confirmed transport arrangement."
        }
      ],
      activities: [
        "Breakfast, where included",
        "Check-out",
        "Departure transfer"
      ]
    }
  ],
  included: [
    "Five nights of accommodation, allocated according to the confirmed itinerary",
    "Meals specified in the final accommodation and safari quotation",
    "Arrival and departure transfers at the agreed locations, where included in the quote",
    "Road transfers between Victoria Falls and the Hwange area, according to the confirmed routing",
    "Guided Victoria Falls rainforest tour, where included in the selected package",
    "Zambezi sunset cruise, where included in the selected package",
    "Hwange game drives and applicable safari services as stated in the final quote",
    "Chobe excursion and applicable transfers only where explicitly confirmed",
    "Applicable taxes and service charges where stated in the final quotation"
  ],
  notIncluded: [
    "International and domestic flights unless expressly quoted",
    "Visa fees and cross-border entry charges, where applicable",
    "Travel insurance and personal medical expenses",
    "Meals, drinks and snacks not specified as included",
    "Tips and gratuities",
    "Optional activities not listed in the confirmed package",
    "Personal purchases, laundry and telephone charges",
    "Additional nights required because of flight times or transfer schedules",
    "Any park fees, conservation levies or activity charges not expressly included in the final quotation",
    "Private vehicle upgrades, special dietary arrangements or other custom requests unless quoted"
  ],
  information: [
    "This itinerary combines destinations in Zimbabwe and Botswana and requires suitable travel documents for all travellers.",
    "Guests are responsible for checking visa, passport-validity, entry and health requirements applicable to their nationality and route before travel.",
    "Chobe excursion availability depends on the season, operator schedule, border conditions and the confirmed transfer plan.",
    "The proposed Day 5 transfer and Chobe excursion must be operationally verified before confirming the booking. A Kasane overnight and an additional night may be necessary.",
    "Park fees, conservation levies, border charges and activity costs must be itemised and verified in the final quotation.",
    "Wildlife sightings are not guaranteed and vary with season, weather and animal movements.",
    "The itinerary may be adjusted due to road conditions, park regulations, weather, border delays or supplier operating requirements.",
    "Please share arrival and departure flight details, nationality, group size, preferred accommodation standard and dietary requirements when requesting a quote.",
    "The package can be adapted for private travellers, families, couples, small groups and travel trade partners.",
    "Pricing below is for website-development and planning purposes only. Replace it with verified supplier-based rates before publishing or selling."
  ],
  accommodation: {
    name: "Selected Victoria Falls Hotel and Safari Lodges",
    description:
      "Stay in selected accommodation in Victoria Falls and the Hwange area, with the option to upgrade or tailor the itinerary to a preferred lodge category. The exact properties, room types, meal plans and night allocations must be confirmed in the final quotation. If an overnight in Kasane is required for the Chobe excursion, an additional night and revised package price will apply.",
    category: "Mid-range to Luxury, subject to availability"
  },
  pricing: {
    currency: "USD",
    tiers: [
      {
        minPeople: 1,
        maxPeople: 1,
        pricePerPerson: 2450
      },
      {
        minPeople: 2,
        maxPeople: 2,
        pricePerPerson: 2150
      },
      {
        minPeople: 3,
        maxPeople: 3,
        pricePerPerson: 2000
      },
      {
        minPeople: 4,
        maxPeople: 4,
        pricePerPerson: 1850
      },
      {
        minPeople: 5,
        maxPeople: 12,
        pricePerPerson: 1750
      }
    ]
  },
  cancellation: {
    policy:
      "A booking is confirmed only after written confirmation and receipt of the required deposit. Cancellation charges, deposit refundability, amendment fees and final-payment deadlines must be stated in the booking confirmation and may differ by accommodation, safari operator, transfer provider and cross-border activity supplier. Some reservations may be non-refundable or require full payment well in advance. We recommend comprehensive travel insurance covering cancellation, medical emergencies and travel disruption."
  },
  faqs: [
    {
      question: "What destinations are included in this package?",
      answer:
        "The itinerary combines Victoria Falls and Hwange National Park in Zimbabwe with a Chobe safari excursion in Botswana."
    },
    {
      question: "How long is the package?",
      answer:
        "The planned itinerary is six days and five nights. A Kasane overnight may be needed to make the Chobe excursion practical, which would add a night."
    },
    {
      question: "Is Chobe National Park in Zimbabwe?",
      answer:
        "No. Chobe National Park is in Botswana. Travellers must meet the applicable entry requirements and complete border formalities."
    },
    {
      question: "Will the package include a Chobe River cruise?",
      answer:
        "A river cruise can be included when it is specifically selected, available and confirmed in the final quotation."
    },
    {
      question: "Can I see the Big Five?",
      answer:
        "Wildlife sightings depend on the location, season and animal movements. Guides will look for wildlife, but no particular species or sighting can be guaranteed."
    },
    {
      question: "Are park fees included?",
      answer:
        "Only fees explicitly listed in your final quotation are included. Request an itemised quote showing park fees, conservation levies and activity charges."
    },
    {
      question: "Are meals included?",
      answer:
        "Meals depend on the selected accommodation and safari plan. The confirmed itinerary and quotation will specify which meals are included."
    },
    {
      question: "Can the package be booked privately?",
      answer:
        "Yes. Private transfers, private guiding and tailored accommodation may be arranged, subject to availability and additional costs."
    },
    {
      question: "Is this package suitable for families?",
      answer:
        "It may suit families, but age limits for safari activities, vehicle arrangements and cross-border requirements should be checked before booking."
    },
    {
      question: "What should I bring?",
      answer:
        "Bring valid travel documents, comfortable walking shoes, sun protection, insect repellent, a hat, suitable clothing and binoculars or a camera if desired."
    },
    {
      question: "Can you arrange airport transfers?",
      answer:
        "Airport transfers can be included when the arrival airport, departure point and transfer schedule are confirmed."
    },
    {
      question: "Can I extend the trip?",
      answer:
        "Yes. Additional nights in Victoria Falls, Hwange or Kasane and extra activities can be quoted on request."
    },
    {
      question: "Are the prices final?",
      answer:
        "No. The displayed figures are indicative draft estimates. Final pricing depends on travel dates, group size, accommodation availability, supplier rates, park fees, cross-border arrangements and the confirmed itinerary."
    }
  ]
},
{
  slug: "zimbabwe-safari-trio",
  name: "Zimbabwe Safari Trio",
  category: "Multi-Destination Safari",
  image: "/images/packages/zimbabwe-safari-trio.jpg",
  badge: "Ultimate Zimbabwe Safari",
  description:
    "Experience three of Zimbabwe's most remarkable wilderness destinations on one unforgettable safari journey. Begin at Victoria Falls, where the power and beauty of the Zambezi River create one of Africa's most iconic natural attractions. Continue to Hwange National Park, famous for its elephants, diverse wildlife and expansive savannah and woodland habitats. Complete your journey in Mana Pools National Park, a spectacular wilderness area along the Lower Zambezi, known for its river scenery, exceptional wildlife viewing and seasonal walking and canoeing safari opportunities. Designed for travellers who want more than a single destination, this journey combines iconic scenery, classic game drives and an immersive wilderness experience. Accommodation, transfers and activities can be tailored to your preferred comfort level, travel dates and safari style.",
  duration: {
    days: 9,
    nights: 8,
    label: "9 Days / 8 Nights"
  },
  destinations: [
    "Victoria Falls",
    "Hwange National Park",
    "Mana Pools National Park"
  ],
  location: "Victoria Falls, Hwange and Mana Pools, Zimbabwe",
  activities: [
    "Guided Victoria Falls rainforest tour",
    "Zambezi River sunset cruise",
    "Hwange National Park game drives",
    "Wildlife viewing and photography",
    "Mana Pools guided game drives",
    "Guided walking safari, where available and permitted",
    "Canoeing on the Zambezi, subject to season and operator availability",
    "Birdwatching",
    "Scenic transfers and wilderness experiences"
  ],
  highlights: [
    "Explore three distinctive Zimbabwe safari destinations",
    "Visit the spectacular Victoria Falls",
    "Enjoy a sunset cruise on the upper Zambezi River near Victoria Falls",
    "Search for elephants, buffalo, giraffes, antelope and predators in Hwange",
    "Experience the remote wilderness and river landscapes of Mana Pools",
    "Enjoy guided safari activities with experienced local guides",
    "Discover contrasting habitats, from woodland and savannah to riverine wilderness",
    "Choose lodge-based comfort or a more immersive safari-camp experience",
    "Customise the itinerary for couples, private travellers and small groups"
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Victoria Falls",
      description:
        "Arrive at Victoria Falls Airport or another agreed arrival point. Meet your representative and transfer to your selected accommodation. After check-in, enjoy time to relax following your journey or explore the town at your own pace. Optional activities may be arranged depending on your arrival time.",
      times: [
        {
          time: "Morning / Afternoon",
          title: "Arrival and transfer",
          description:
            "Meet-and-greet service and transfer to your accommodation, according to the confirmed booking."
        },
        {
          time: "Afternoon",
          title: "Leisure time",
          description:
            "Relax at the lodge or explore Victoria Falls town and its local craft markets."
        },
        {
          time: "Evening",
          title: "Welcome evening",
          description:
            "Enjoy dinner at your accommodation or a recommended restaurant. Dinner is included only if stated in your final quotation."
        }
      ],
      activities: [
        "Arrival transfer",
        "Accommodation check-in",
        "Optional town exploration"
      ]
    },
    {
      day: "Day 2",
      title: "Victoria Falls and Zambezi Sunset Cruise",
      description:
        "Discover Victoria Falls on a guided tour of the rainforest paths and viewpoints on the Zimbabwean side. Learn about the waterfall's geography, history and surrounding environment while enjoying opportunities for photography. Later, embark on a sunset cruise on the Zambezi River near Victoria Falls. Watch for birds, hippos and other wildlife along the riverbanks, with sightings depending on conditions.",
      times: [
        {
          time: "Morning",
          title: "Guided Victoria Falls tour",
          description:
            "Walk the designated viewpoints with a local guide and enjoy different perspectives of the waterfall."
        },
        {
          time: "Midday",
          title: "Lunch and relaxation",
          description:
            "Enjoy lunch at a local restaurant or your accommodation. Lunch is at your own expense unless included in the confirmed package."
        },
        {
          time: "Late Afternoon",
          title: "Zambezi sunset cruise",
          description:
            "Enjoy river scenery, refreshments and wildlife viewing during a scheduled cruise."
        },
        {
          time: "Evening",
          title: "Return to accommodation",
          description:
            "Return to your hotel or lodge for dinner and an overnight stay according to your meal plan."
        }
      ],
      activities: [
        "Guided Victoria Falls rainforest tour",
        "Scenic photography",
        "Zambezi sunset cruise",
        "Optional local dining"
      ]
    },
    {
      day: "Day 3",
      title: "Transfer to Hwange National Park",
      description:
        "After breakfast, depart Victoria Falls for your selected accommodation in the Hwange area. On arrival, check in and receive a safari briefing. Depending on the lodge's location, park access and operating schedule, you may have time for an afternoon game drive. Otherwise, your main game-viewing programme begins the following day.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and departure",
          description:
            "Check out and begin the road transfer to the Hwange area."
        },
        {
          time: "Midday / Afternoon",
          title: "Arrival and check-in",
          description:
            "Arrive at your lodge or camp and settle in. Lunch is provided according to the confirmed meal plan."
        },
        {
          time: "Afternoon",
          title: "Optional introductory game drive",
          description:
            "If timing and availability permit, join a guided game drive in the designated park or concession area."
        },
        {
          time: "Evening",
          title: "Safari lodge evening",
          description:
            "Enjoy dinner and the atmosphere of the African bush, subject to your accommodation's meal arrangements."
        }
      ],
      activities: [
        "Road transfer to Hwange",
        "Safari orientation",
        "Optional afternoon game drive",
        "Wildlife viewing"
      ]
    },
    {
      day: "Day 4",
      title: "Full-Day Hwange Safari",
      description:
        "Spend a rewarding day exploring Hwange National Park, Zimbabwe's largest national park. Guided game drives take you through a variety of habitats where elephants, buffalo, giraffes, zebras, antelope and numerous bird species may be encountered. Depending on your accommodation and safari arrangement, the day may include morning and afternoon drives or a longer safari with a planned lunch break. Predator sightings are possible but never guaranteed.",
      times: [
        {
          time: "Early Morning",
          title: "Morning game drive",
          description:
            "Set out with your guide during the cooler hours to search for wildlife and learn about the park's habitats."
        },
        {
          time: "Late Morning",
          title: "Breakfast and relaxation",
          description:
            "Return to camp for breakfast or a scheduled break, depending on the safari programme."
        },
        {
          time: "Midday",
          title: "Lunch and leisure",
          description:
            "Enjoy lunch and relax at the lodge or camp."
        },
        {
          time: "Afternoon",
          title: "Afternoon game drive",
          description:
            "Continue wildlife viewing in the park or authorised concession area."
        },
        {
          time: "Evening",
          title: "Dinner and overnight",
          description:
            "Return to your accommodation for dinner and an overnight stay."
        }
      ],
      activities: [
        "Guided game drives",
        "Elephant and wildlife viewing",
        "Birdwatching",
        "Wildlife photography"
      ]
    },
    {
      day: "Day 5",
      title: "Transfer to Mana Pools National Park",
      description:
        "After breakfast, leave the Hwange area and travel towards Mana Pools using the transport arrangement confirmed for your dates and accommodation. Because this is a substantial overland journey and Mana Pools access can be seasonal and road-dependent, a scheduled flight or a carefully planned road transfer may be the most suitable option. On arrival, settle into your selected camp or lodge and receive a briefing about the local environment, wildlife safety and available activities.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and departure",
          description:
            "Check out and begin the confirmed transfer or scheduled flight connection."
        },
        {
          time: "Midday / Afternoon",
          title: "Journey to Mana Pools",
          description:
            "Travel according to the confirmed route, transport mode and seasonal access conditions."
        },
        {
          time: "Afternoon",
          title: "Arrival and camp briefing",
          description:
            "Check in and receive information about safari activities, safety procedures and the camp's daily schedule."
        },
        {
          time: "Evening",
          title: "Dinner in the wilderness",
          description:
            "Enjoy dinner and an overnight stay at your selected Mana Pools accommodation, according to the meal plan."
        }
      ],
      activities: [
        "Scheduled flight or road transfer",
        "Camp check-in",
        "Safari briefing",
        "Optional camp-based wildlife viewing"
      ]
    },
    {
      day: "Day 6",
      title: "Mana Pools Wilderness Safari",
      description:
        "Explore the unique riverine wilderness of Mana Pools National Park with experienced local guides. Depending on your camp and the season, the programme may include guided game drives, walking safaris in authorised areas and time to observe wildlife along the Zambezi floodplain. Mana Pools is known for elephants, buffalo, hippos, crocodiles and diverse birdlife. All walking activities must follow the operator's safety procedures and applicable park rules.",
      times: [
        {
          time: "Early Morning",
          title: "Morning safari",
          description:
            "Join a guided game drive or authorised walking activity when conditions and the camp programme permit."
        },
        {
          time: "Late Morning",
          title: "Breakfast and rest",
          description:
            "Return to camp for breakfast and time to relax."
        },
        {
          time: "Midday",
          title: "Lunch and leisure",
          description:
            "Enjoy lunch according to your selected accommodation plan and take time to rest during the warmer hours."
        },
        {
          time: "Afternoon",
          title: "River and wildlife exploration",
          description:
            "Continue wildlife viewing with your guide or enjoy a camp-based wilderness experience."
        },
        {
          time: "Evening",
          title: "Dinner at camp",
          description:
            "Enjoy dinner and overnight in the Mana Pools area."
        }
      ],
      activities: [
        "Guided game drive",
        "Walking safari where permitted",
        "Riverine wildlife viewing",
        "Birdwatching and photography"
      ]
    },
    {
      day: "Day 7",
      title: "Mana Pools Walking or Canoe Safari",
      description:
        "Enjoy another day in the Mana Pools wilderness, with activities selected according to the season, river conditions, park regulations and operator availability. A guided walking safari offers a closer appreciation of the landscape, tracks and smaller details of the bush. Alternatively, a guided canoe excursion on the Zambezi may be available through a suitably licensed operator when conditions are safe. These activities are not interchangeable with a standard game drive and must be confirmed in advance.",
      times: [
        {
          time: "Early Morning",
          title: "Morning wilderness activity",
          description:
            "Join an authorised guided walk or game drive, subject to conditions and the operator's safety assessment."
        },
        {
          time: "Late Morning",
          title: "Breakfast and rest",
          description:
            "Return to camp for breakfast and relaxation."
        },
        {
          time: "Midday",
          title: "Lunch and leisure",
          description:
            "Enjoy lunch and take a break during the warmer part of the day."
        },
        {
          time: "Afternoon",
          title: "Optional canoe excursion or game drive",
          description:
            "Take part in a pre-booked canoe safari when available and safe, or enjoy another guided game drive."
        },
        {
          time: "Evening",
          title: "Final evening in Mana Pools",
          description:
            "Enjoy your final evening in the wilderness and prepare for the next day's departure."
        }
      ],
      activities: [
        "Guided walking safari where permitted",
        "Optional guided canoe safari",
        "Game drive alternative",
        "Wildlife observation"
      ]
    },
    {
      day: "Day 8",
      title: "Mana Pools and Transfer to Harare",
      description:
        "After breakfast, depart Mana Pools according to your confirmed transfer plan. Depending on the season, road conditions and camp location, this may involve a scheduled light aircraft transfer or an overland journey to Harare or another agreed connection point. The remainder of the day depends on your departure arrangements. An additional overnight may be required if the transfer schedule does not align with your onward flight.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and check-out",
          description:
            "Enjoy breakfast, pack and prepare for departure."
        },
        {
          time: "Morning / Afternoon",
          title: "Transfer from Mana Pools",
          description:
            "Travel by the confirmed aircraft or road transfer, subject to operating conditions and availability."
        },
        {
          time: "Afternoon / Evening",
          title: "Arrival and onward arrangements",
          description:
            "Arrive at the agreed destination and continue to your hotel or onward journey, as arranged."
        }
      ],
      activities: [
        "Breakfast, where included",
        "Check-out",
        "Scheduled flight or road transfer"
      ]
    },
    {
      day: "Day 9",
      title: "Departure from Zimbabwe",
      description:
        "Enjoy breakfast if included and complete check-out. Transfer to the agreed airport or departure point according to your confirmed arrangements. Depending on the flight schedule, this may be Harare or another agreed departure location. Additional nights, transfers and onward travel services can be arranged on request.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and check-out",
          description:
            "Prepare for departure according to your accommodation's check-out time."
        },
        {
          time: "As scheduled",
          title: "Departure transfer",
          description:
            "Transfer to the airport or agreed departure point under the confirmed booking."
        }
      ],
      activities: [
        "Breakfast, where included",
        "Departure transfer",
        "End of safari programme"
      ]
    }
  ],
  included: [
    "Eight nights of accommodation allocated across Victoria Falls, Hwange and Mana Pools",
    "Meals specified in the confirmed accommodation and safari plan",
    "Arrival and departure transfers at agreed locations where included in the quote",
    "Road transfers or scheduled flights between destinations as explicitly itemised in the final quotation",
    "Guided Victoria Falls rainforest tour where included",
    "Zambezi sunset cruise where included",
    "Hwange game drives and applicable safari services as confirmed",
    "Mana Pools safari activities as specified in the final quotation",
    "Professional guiding for the included activities",
    "Applicable taxes and service charges where stated in the final quotation"
  ],
  notIncluded: [
    "International and domestic flights unless expressly quoted",
    "Visa fees and travel-document costs",
    "Travel insurance and personal medical expenses",
    "Meals and drinks not specified as included",
    "Tips and gratuities",
    "Optional activities not listed in the confirmed package",
    "Personal purchases, laundry and telephone charges",
    "Additional nights caused by flight schedules, seasonal access or transfer requirements",
    "Park fees, conservation levies and activity charges not expressly itemised as included",
    "Private aircraft charters or premium transfers unless quoted",
    "Specialist equipment, private guiding upgrades or other custom requests unless confirmed"
  ],
  information: [
    "This itinerary covers Victoria Falls, Hwange National Park and Mana Pools National Park in Zimbabwe.",
    "Mana Pools access and accommodation options can be seasonal. Travel dates, camp opening periods, road conditions and flight schedules must be checked before confirmation.",
    "The transfer from Hwange to Mana Pools can be lengthy. A flight connection may be preferable, depending on the exact lodges and available schedules.",
    "The transfer from Mana Pools on Day 8 must be coordinated with onward travel. An additional overnight may be necessary to avoid a tight connection.",
    "Walking and canoe safaris are subject to operator availability, park regulations, weather, water levels and safety assessments.",
    "Wildlife sightings are not guaranteed and vary with season, weather and animal movements.",
    "Accommodation names, room categories, meal plans, transfer modes and park fees must be specified in the final quotation.",
    "Travellers should bring suitable walking shoes, sun protection, insect repellent, neutral-coloured clothing, binoculars and a camera if desired.",
    "Guests should provide travel dates, group size, nationality, preferred accommodation standard, dietary needs and flight details when requesting a quote.",
    "The package can be tailored for private travellers, couples, small groups, families where age restrictions permit, and travel trade partners.",
    "Pricing shown is an indicative planning estimate only and must be replaced with verified supplier-based rates before publication or sale."
  ],
  accommodation: {
    name: "Selected Victoria Falls Hotel, Hwange Safari Lodge and Mana Pools Camp",
    description:
      "Accommodation is planned across Victoria Falls, the Hwange area and Mana Pools. The exact properties depend on travel dates, availability, desired comfort level and transfer logistics. Options may range from comfortable hotels and safari lodges to seasonal tented camps. Mana Pools accommodation and access must be confirmed for the specific travel period. Final property names, room types, meal plans and the distribution of nights must be provided in the confirmed quotation.",
    category: "Mid-range to Luxury, subject to availability"
  },
  pricing: {
    currency: "USD",
    tiers: [
      {
        minPeople: 1,
        maxPeople: 1,
        pricePerPerson: 6200
      },
      {
        minPeople: 2,
        maxPeople: 2,
        pricePerPerson: 5200
      },
      {
        minPeople: 3,
        maxPeople: 3,
        pricePerPerson: 4800
      },
      {
        minPeople: 4,
        maxPeople: 4,
        pricePerPerson: 4500
      },
      {
        minPeople: 5,
        maxPeople: 12,
        pricePerPerson: 4200
      }
    ]
  },
  cancellation: {
    policy:
      "A booking is confirmed only after written confirmation and receipt of the required deposit. Cancellation charges, deposit refundability, amendment fees and final-payment deadlines depend on the accommodation, safari operators, flights and transfer providers. Remote camps and scheduled or charter flights may have stricter payment and cancellation conditions than standard accommodation. The exact terms must be supplied in the booking confirmation. Comprehensive travel insurance covering cancellation, medical emergencies and travel disruption is strongly recommended."
  },
  faqs: [
    {
      question: "What is the Zimbabwe Safari Trio?",
      answer:
        "It is a multi-destination safari combining Victoria Falls, Hwange National Park and Mana Pools National Park in one itinerary."
    },
    {
      question: "How long is the package?",
      answer:
        "The proposed itinerary is nine days and eight nights, with accommodation distributed across all three destinations."
    },
    {
      question: "Is Mana Pools accessible all year?",
      answer:
        "Access and accommodation options vary by season. Confirm camp opening dates, road conditions, flight schedules and activity availability for your chosen dates."
    },
    {
      question: "Can I fly between the safari destinations?",
      answer:
        "Scheduled or charter flights may be possible depending on the route, dates, operator and accommodation location. Air transfers must be confirmed and priced separately unless explicitly included."
    },
    {
      question: "Can I do a walking safari in Mana Pools?",
      answer:
        "Guided walking activities may be available through authorised operators, subject to park rules, seasonal conditions and safety requirements."
    },
    {
      question: "Is canoeing included?",
      answer:
        "Canoeing can be arranged where available and safe, but it is included only if explicitly listed in your final quotation."
    },
    {
      question: "What wildlife can I see?",
      answer:
        "Depending on the destination and season, wildlife may include elephants, buffalo, giraffes, zebras, antelope, hippos, crocodiles and a variety of birdlife. Sightings are not guaranteed."
    },
    {
      question: "Are park fees included?",
      answer:
        "Only park fees and conservation levies specifically itemised in the final quotation are included."
    },
    {
      question: "Are meals included?",
      answer:
        "Meals depend on the selected accommodation and safari plan. Your final itinerary and quotation will specify the included meals."
    },
    {
      question: "Is this package suitable for children?",
      answer:
        "It may be suitable for some families, but minimum ages and restrictions for walking safaris, canoeing, flights and individual camps must be checked before booking."
    },
    {
      question: "Can the itinerary be customised?",
      answer:
        "Yes. You can request different accommodation categories, additional nights, private transfers, extra safari activities or a revised route."
    },
    {
      question: "What should I pack?",
      answer:
        "Bring comfortable walking shoes, lightweight neutral-coloured clothing, a hat, sun protection, insect repellent, binoculars, a camera and any personal medication."
    },
    {
      question: "Are the displayed prices final?",
      answer:
        "No. These are draft planning estimates, not verified supplier quotations. Final prices depend on dates, accommodation, flights or transfers, park fees, group size and confirmed activities."
    }
  ]
},
{
  slug: "best-of-zimbabwe",
  name: "Best of Zimbabwe",
  category: "Signature Zimbabwe Journey",
  image: "/images/packages/best-of-zimbabwe.jpg",
  badge: "Explore Zimbabwe",
  description:
    "Discover the many sides of Zimbabwe on one memorable journey combining natural wonders, wildlife, ancient heritage and beautiful landscapes. Begin at Victoria Falls, where the Zambezi River plunges into a dramatic gorge. Continue to Hwange National Park for classic African safari experiences and opportunities to observe elephants and other wildlife. Explore the remarkable stone architecture and history of Great Zimbabwe, then travel into the scenic Eastern Highlands for mountain views, forests and tranquil countryside. Finish beside Lake Kariba, where vast waters, sunsets and relaxing lake experiences offer a peaceful conclusion to your adventure. Designed for travellers who want a broad introduction to the country, this itinerary can be adapted for private holidays, couples, families and small groups. Accommodation, transport and activities can be tailored to your travel dates, interests and preferred level of comfort.",
  duration: {
    days: 12,
    nights: 11,
    label: "12 Days / 11 Nights"
  },
  destinations: [
    "Victoria Falls",
    "Hwange National Park",
    "Great Zimbabwe, Masvingo",
    "Eastern Highlands",
    "Lake Kariba"
  ],
  location: "Victoria Falls, Hwange, Masvingo, Eastern Highlands and Lake Kariba, Zimbabwe",
  activities: [
    "Guided Victoria Falls rainforest tour",
    "Zambezi River sunset cruise",
    "Hwange National Park game drives",
    "Great Zimbabwe heritage and archaeological tour",
    "Scenic drives through Zimbabwe",
    "Eastern Highlands nature walks and viewpoints",
    "Lake Kariba sunset cruise or boat excursion",
    "Birdwatching and wildlife photography",
    "Local culture and heritage experiences",
    "Optional fishing, canoeing or other destination activities where available"
  ],
  highlights: [
    "Experience Victoria Falls, one of Africa's most celebrated natural attractions",
    "Explore Hwange National Park on guided wildlife drives",
    "Discover the historic stone structures of Great Zimbabwe",
    "Enjoy the mountain scenery and cooler climate of the Eastern Highlands",
    "Relax beside the expansive waters of Lake Kariba",
    "Experience Zimbabwe's diversity of wildlife, landscapes and heritage",
    "Combine safari, culture, scenic travel and relaxation in one itinerary",
    "Enjoy local guiding and carefully coordinated destination transfers",
    "Customise accommodation and activities to suit your travel style"
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Victoria Falls",
      description:
        "Arrive at Victoria Falls Airport or another agreed arrival point. Meet your representative and transfer to your selected hotel or lodge. After check-in, enjoy time to relax after your journey. Depending on your arrival time, you may explore Victoria Falls town or arrange an optional activity.",
      times: [
        {
          time: "Morning / Afternoon",
          title: "Arrival and transfer",
          description:
            "Meet-and-greet service and transfer to your accommodation according to the confirmed booking."
        },
        {
          time: "Afternoon",
          title: "Leisure time",
          description:
            "Relax at your accommodation or explore the town and local craft markets."
        },
        {
          time: "Evening",
          title: "Welcome evening",
          description:
            "Enjoy dinner at your hotel or a recommended restaurant. Dinner is included only where stated in the final quotation."
        }
      ],
      activities: [
        "Arrival transfer",
        "Hotel check-in",
        "Optional town exploration"
      ]
    },
    {
      day: "Day 2",
      title: "Victoria Falls and Zambezi Sunset Cruise",
      description:
        "Take a guided tour of Victoria Falls from the Zimbabwean side, exploring designated rainforest paths and viewpoints. Learn about the waterfall's geography, local history and surrounding environment. Later, enjoy a sunset cruise on the Zambezi River near Victoria Falls, with opportunities for scenery, birdlife and wildlife viewing.",
      times: [
        {
          time: "Morning",
          title: "Guided Victoria Falls tour",
          description:
            "Visit the main viewpoints with a local guide and allow time for photography."
        },
        {
          time: "Midday",
          title: "Lunch and leisure",
          description:
            "Enjoy lunch at a local restaurant or your accommodation. Lunch is at your own expense unless included in the confirmed package."
        },
        {
          time: "Late Afternoon",
          title: "Zambezi sunset cruise",
          description:
            "Enjoy river scenery and refreshments during a scheduled cruise. Wildlife sightings depend on conditions."
        },
        {
          time: "Evening",
          title: "Return to accommodation",
          description:
            "Return to your hotel or lodge for dinner and an overnight stay according to your meal plan."
        }
      ],
      activities: [
        "Guided Victoria Falls rainforest tour",
        "Photography",
        "Zambezi sunset cruise"
      ]
    },
    {
      day: "Day 3",
      title: "Transfer to Hwange National Park",
      description:
        "After breakfast, travel from Victoria Falls to your selected accommodation in the Hwange area. On arrival, check in and receive an orientation about the safari programme. If arrival time, park access and lodge operations permit, enjoy an introductory afternoon game drive.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and departure",
          description:
            "Check out and begin the road transfer towards your Hwange accommodation."
        },
        {
          time: "Midday / Afternoon",
          title: "Arrival and check-in",
          description:
            "Arrive at your lodge or camp and settle in. Lunch depends on your selected meal plan."
        },
        {
          time: "Afternoon",
          title: "Optional introductory game drive",
          description:
            "Join a guided drive if available within the confirmed safari schedule."
        },
        {
          time: "Evening",
          title: "Safari lodge evening",
          description:
            "Enjoy dinner and overnight in the Hwange area according to your accommodation booking."
        }
      ],
      activities: [
        "Road transfer to Hwange",
        "Safari orientation",
        "Optional afternoon game drive"
      ]
    },
    {
      day: "Day 4",
      title: "Hwange National Park Safari",
      description:
        "Spend the day exploring Hwange National Park with experienced safari guides. The park's diverse habitats support elephants, buffalo, giraffes, zebras, antelope and a wide variety of birdlife. Depending on your lodge and safari arrangement, enjoy morning and afternoon game drives with time to relax between outings.",
      times: [
        {
          time: "Early Morning",
          title: "Morning game drive",
          description:
            "Head out during the cooler hours to search for wildlife and learn about the park's ecosystems."
        },
        {
          time: "Late Morning",
          title: "Breakfast and relaxation",
          description:
            "Return to camp for breakfast and time to rest, according to the lodge's schedule."
        },
        {
          time: "Midday",
          title: "Lunch and leisure",
          description:
            "Enjoy lunch and relax at the lodge or camp."
        },
        {
          time: "Afternoon",
          title: "Afternoon game drive",
          description:
            "Continue wildlife viewing in the park or an authorised concession area."
        },
        {
          time: "Evening",
          title: "Dinner and overnight",
          description:
            "Return to your accommodation for dinner and an overnight stay."
        }
      ],
      activities: [
        "Guided game drives",
        "Wildlife photography",
        "Birdwatching",
        "Safari lodge experience"
      ]
    },
    {
      day: "Day 5",
      title: "Travel to the Great Zimbabwe Area",
      description:
        "After breakfast, leave Hwange and travel towards Masvingo, the gateway to Great Zimbabwe. This is a substantial overland journey, so an early departure and suitable rest stops should be planned. Depending on the exact route, accommodation location and road conditions, arrival may be later in the day. Settle into your accommodation and prepare for the heritage visit.",
      times: [
        {
          time: "Early Morning",
          title: "Breakfast and departure",
          description:
            "Check out and begin the scheduled road transfer towards Masvingo."
        },
        {
          time: "Midday",
          title: "Journey and rest stop",
          description:
            "Take planned breaks during the drive. Lunch is at your own expense unless specified otherwise."
        },
        {
          time: "Afternoon / Evening",
          title: "Arrival in Masvingo",
          description:
            "Check in at your selected accommodation and relax after the journey."
        },
        {
          time: "Evening",
          title: "Dinner and overnight",
          description:
            "Enjoy dinner and overnight according to your accommodation and meal plan."
        }
      ],
      activities: [
        "Inter-destination road transfer",
        "Scenic countryside viewing",
        "Masvingo accommodation check-in"
      ]
    },
    {
      day: "Day 6",
      title: "Great Zimbabwe National Monument",
      description:
        "Explore Great Zimbabwe, the celebrated archaeological site associated with a major medieval Shona civilisation and the origins of the country's name. Visit key stone-built areas with a guide and learn about the site's historical significance, architecture and role in regional trade and society. Allow time for walking, photographs and interpretation of the ruins before continuing to your next destination.",
      times: [
        {
          time: "Morning",
          title: "Guided heritage tour",
          description:
            "Explore the monument's designated areas and learn about its history and stone architecture."
        },
        {
          time: "Midday",
          title: "Lunch and relaxation",
          description:
            "Enjoy lunch in the Masvingo area or at your accommodation, depending on the day's arrangements."
        },
        {
          time: "Afternoon",
          title: "Further exploration",
          description:
            "Continue visiting the site's accessible areas or enjoy time at leisure, subject to opening hours and the confirmed tour."
        },
        {
          time: "Evening",
          title: "Return to accommodation",
          description:
            "Relax and enjoy dinner according to your meal plan."
        }
      ],
      activities: [
        "Great Zimbabwe guided tour",
        "Cultural and historical interpretation",
        "Photography",
        "Optional local craft shopping"
      ]
    },
    {
      day: "Day 7",
      title: "Travel to the Eastern Highlands",
      description:
        "After breakfast, depart Masvingo for the Eastern Highlands. The journey introduces a different side of Zimbabwe, with changing landscapes, rural communities and mountain scenery as you approach your selected base. Depending on your chosen accommodation, the destination may be in the Nyanga, Vumba or another Eastern Highlands area. Check in and enjoy the cooler highland atmosphere.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and departure",
          description:
            "Check out and begin the road journey to your selected Eastern Highlands destination."
        },
        {
          time: "Midday",
          title: "Scenic journey",
          description:
            "Travel through the countryside with suitable breaks along the way."
        },
        {
          time: "Afternoon",
          title: "Arrival in the highlands",
          description:
            "Check in at your hotel, lodge or guesthouse and enjoy the scenery."
        },
        {
          time: "Evening",
          title: "Relaxation",
          description:
            "Enjoy dinner and an overnight stay according to your selected meal plan."
        }
      ],
      activities: [
        "Scenic road transfer",
        "Highland landscapes",
        "Accommodation check-in"
      ]
    },
    {
      day: "Day 8",
      title: "Explore the Eastern Highlands",
      description:
        "Enjoy a full day discovering the natural beauty of the Eastern Highlands. Depending on your chosen base, activities may include viewpoints, forest walks, waterfalls, gardens or mountain scenery in areas such as Nyanga or the Vumba. The specific activities will be selected according to location, weather, access and your interests.",
      times: [
        {
          time: "Morning",
          title: "Highland nature excursion",
          description:
            "Visit selected viewpoints, walking trails, gardens or natural attractions near your accommodation."
        },
        {
          time: "Midday",
          title: "Lunch and leisure",
          description:
            "Enjoy lunch at a local restaurant or your accommodation."
        },
        {
          time: "Afternoon",
          title: "Scenic exploration",
          description:
            "Continue exploring the area's landscapes and attractions, with time for photographs and short walks."
        },
        {
          time: "Evening",
          title: "Relax at your lodge",
          description:
            "Return to your accommodation for dinner and overnight."
        }
      ],
      activities: [
        "Nature walks where available",
        "Scenic viewpoints",
        "Waterfall or garden visits where applicable",
        "Photography and birdwatching"
      ]
    },
    {
      day: "Day 9",
      title: "Transfer to Lake Kariba",
      description:
        "After breakfast, leave the Eastern Highlands and travel towards your selected Lake Kariba destination. This is a long road journey, and the transfer route depends on whether you are staying in Kariba town, a lakeside lodge or another location. Plan for rest stops and confirm arrival timing before booking any evening activities. On arrival, settle in and enjoy your first views of the lake.",
      times: [
        {
          time: "Early Morning",
          title: "Breakfast and departure",
          description:
            "Check out and begin the road transfer to the Lake Kariba area."
        },
        {
          time: "Midday",
          title: "Journey and rest stop",
          description:
            "Take scheduled breaks during the journey. Lunch is included only if stated in your quotation."
        },
        {
          time: "Afternoon / Evening",
          title: "Arrival at Lake Kariba",
          description:
            "Check in at your selected hotel or lakeside lodge and relax after the drive."
        },
        {
          time: "Evening",
          title: "Sunset by the lake",
          description:
            "Enjoy the lakeside scenery if arrival time and weather permit."
        }
      ],
      activities: [
        "Road transfer to Lake Kariba",
        "Scenic countryside travel",
        "Lakeside relaxation"
      ]
    },
    {
      day: "Day 10",
      title: "Lake Kariba Experience",
      description:
        "Spend a relaxing day enjoying Lake Kariba's expansive waters and scenic shoreline. Depending on your chosen accommodation and the activities available, you may join a boat excursion, sunset cruise, fishing trip or birdwatching outing. Lake conditions, boat operations, wildlife sightings and activity availability vary, so excursions must be confirmed in advance.",
      times: [
        {
          time: "Morning",
          title: "Lake excursion",
          description:
            "Enjoy a pre-booked boat outing or another available lake activity."
        },
        {
          time: "Midday",
          title: "Lunch and relaxation",
          description:
            "Return to shore for lunch or enjoy a meal arranged through your accommodation."
        },
        {
          time: "Afternoon",
          title: "Leisure and optional activities",
          description:
            "Enjoy time at the lodge, birdwatching or an additional activity arranged in advance."
        },
        {
          time: "Late Afternoon",
          title: "Sunset cruise or lakeside viewing",
          description:
            "If booked and conditions permit, enjoy the changing colours of sunset over the lake."
        },
        {
          time: "Evening",
          title: "Dinner and overnight",
          description:
            "Return to your accommodation for dinner and overnight."
        }
      ],
      activities: [
        "Boat excursion where booked",
        "Optional fishing",
        "Birdwatching",
        "Sunset viewing"
      ]
    },
    {
      day: "Day 11",
      title: "Lake Kariba to Harare",
      description:
        "After breakfast, depart Lake Kariba for Harare or another agreed final destination. This is a substantial road transfer, so an early start is recommended. If your international flight departs the same day, the connection must be carefully checked against the planned driving time and road conditions. An additional overnight in Harare may be the safer option for travellers with early departures.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and check-out",
          description:
            "Prepare for departure and settle any personal charges."
        },
        {
          time: "Morning / Afternoon",
          title: "Transfer to Harare",
          description:
            "Travel by the confirmed road route with planned breaks."
        },
        {
          time: "Afternoon / Evening",
          title: "Arrival and accommodation",
          description:
            "Arrive at your agreed destination. A Harare overnight can be arranged if required by your flight schedule."
        }
      ],
      activities: [
        "Breakfast, where included",
        "Road transfer",
        "Optional overnight in Harare"
      ]
    },
    {
      day: "Day 12",
      title: "Departure from Zimbabwe",
      description:
        "Enjoy breakfast if included and complete check-out. Transfer to Robert Gabriel Mugabe International Airport or another agreed departure point according to the confirmed schedule. Your Shungu Africa representative can assist with coordinating the final transfer and any pre-arranged onward travel services.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and check-out",
          description:
            "Prepare for departure according to your accommodation's check-out time."
        },
        {
          time: "As scheduled",
          title: "Departure transfer",
          description:
            "Transfer to the airport or agreed departure point according to your confirmed booking."
        }
      ],
      activities: [
        "Breakfast, where included",
        "Departure transfer",
        "End of tour"
      ]
    }
  ],
  included: [
    "Eleven nights of accommodation distributed across the listed destinations",
    "Meals specifically stated in the final accommodation and tour quotation",
    "Arrival and departure transfers at agreed locations where included",
    "Road transfers between destinations as expressly itemised in the quotation",
    "Guided Victoria Falls tour where included",
    "Zambezi sunset cruise where included",
    "Hwange game drives and applicable safari services as confirmed",
    "Guided Great Zimbabwe visit where included",
    "Eastern Highlands excursions specifically listed in the confirmed itinerary",
    "Lake Kariba boat excursion or cruise only where explicitly confirmed",
    "Professional guiding for the included activities",
    "Applicable taxes and service charges where stated in the final quotation"
  ],
  notIncluded: [
    "International and domestic flights unless expressly quoted",
    "Visa fees and travel-document costs",
    "Travel insurance and personal medical expenses",
    "Meals, drinks and snacks not specified as included",
    "Tips and gratuities",
    "Optional activities not listed in the confirmed package",
    "Personal purchases, laundry and telephone charges",
    "Park fees, monument fees, conservation levies and activity charges not expressly included",
    "Private aircraft charters, vehicle upgrades or premium transfers unless quoted",
    "Additional nights required because of flight schedules or long-distance transfers",
    "Fishing equipment, licences or specialist equipment unless specified",
    "Any other service not explicitly listed in the final booking confirmation"
  ],
  information: [
    "This is a broad Zimbabwe itinerary covering Victoria Falls, Hwange, Great Zimbabwe, the Eastern Highlands and Lake Kariba.",
    "The itinerary involves several long-distance road transfers. Actual travel times depend on route, road conditions, stops, weather and accommodation locations.",
    "The Eastern Highlands is a broad region. The specific base, such as Nyanga or Vumba, must be selected before activities and transfer times can be finalised.",
    "Lake Kariba accommodation and excursions depend on the selected lakeside location, boat availability, lake conditions and supplier schedules.",
    "Hwange game drives, boat excursions and other activities are subject to availability and operating conditions.",
    "Wildlife sightings are not guaranteed and vary with season, weather and animal movements.",
    "Monument and park fees, meal plans, accommodation names, room types and transfer arrangements should be itemised in the final quotation.",
    "Guests should provide travel dates, group size, nationality, accommodation preference, dietary needs and flight details when requesting a quote.",
    "Comfortable walking shoes, sun protection, insect repellent, appropriate clothing, binoculars and a camera are recommended.",
    "An additional night in Harare may be advisable before an international flight, particularly after the Lake Kariba road transfer.",
    "This itinerary can be adapted for private travellers, couples, families and groups, subject to activity age restrictions and availability.",
    "The displayed prices are draft planning estimates only. Verify supplier rates, park and monument fees, transport costs and operating expenses before publishing or selling."
  ],
  accommodation: {
    name: "Selected Hotels, Safari Lodges and Lakeside Accommodation",
    description:
      "Accommodation is planned across Victoria Falls, the Hwange area, Masvingo, the Eastern Highlands, Lake Kariba and potentially Harare. The exact properties, room types, meal plans and night allocations depend on travel dates, availability, routing and preferred comfort level. Options may range from comfortable hotels and lodges to higher-end safari accommodation. Final property names and services must be confirmed in the booking quotation.",
    category: "Mid-range to Luxury, subject to availability"
  },
  pricing: {
    currency: "USD",
    tiers: [
      {
        minPeople: 1,
        maxPeople: 1,
        pricePerPerson: 5200
      },
      {
        minPeople: 2,
        maxPeople: 2,
        pricePerPerson: 4300
      },
      {
        minPeople: 3,
        maxPeople: 3,
        pricePerPerson: 3950
      },
      {
        minPeople: 4,
        maxPeople: 4,
        pricePerPerson: 3700
      },
      {
        minPeople: 5,
        maxPeople: 12,
        pricePerPerson: 3450
      }
    ]
  },
  cancellation: {
    policy:
      "A booking is confirmed only after written confirmation and receipt of the required deposit. Cancellation charges, deposit refundability, amendment fees and final-payment deadlines depend on the accommodation, safari operators, transport providers and activity suppliers. Certain reservations may require advance or non-refundable payments. Exact terms must be supplied in the booking confirmation. Comprehensive travel insurance covering cancellation, medical emergencies and travel disruption is strongly recommended."
  },
  faqs: [
    {
      question: "What destinations are included in Best of Zimbabwe?",
      answer:
        "The proposed itinerary includes Victoria Falls, Hwange National Park, Great Zimbabwe near Masvingo, the Eastern Highlands and Lake Kariba."
    },
    {
      question: "How long is the tour?",
      answer:
        "The itinerary is planned for 12 days and 11 nights, with accommodation distributed across the destinations."
    },
    {
      question: "Is this a wildlife safari or a cultural tour?",
      answer:
        "It combines both. The itinerary includes wildlife viewing in Hwange, the natural scenery of Victoria Falls and Lake Kariba, and a heritage visit to Great Zimbabwe."
    },
    {
      question: "Can the Eastern Highlands section be customised?",
      answer:
        "Yes. A base such as Nyanga or Vumba can be selected according to your interests, preferred accommodation and travel dates."
    },
    {
      question: "Are flights between destinations included?",
      answer:
        "The proposed itinerary is based primarily on road transfers. Flights can be quoted where available, but are included only if specifically listed in the final quotation."
    },
    {
      question: "Are park and monument fees included?",
      answer:
        "Only fees explicitly itemised in the final quotation are included. Ask for a detailed breakdown of park fees, monument fees and activity charges."
    },
    {
      question: "Can I see elephants and other wildlife?",
      answer:
        "Hwange offers opportunities to look for elephants and many other species, but wildlife sightings depend on the season and animal movements and cannot be guaranteed."
    },
    {
      question: "Can I take a boat cruise on Lake Kariba?",
      answer:
        "Boat excursions or sunset cruises can be arranged where available. The activity, duration and price depend on the selected location and confirmed operator."
    },
    {
      question: "Are meals included?",
      answer:
        "Meal arrangements depend on the selected properties and package. The final quotation will identify which meals are included."
    },
    {
      question: "Is this tour suitable for families?",
      answer:
        "It may be suitable for families, but activity age limits, long driving days and accommodation policies should be reviewed before booking."
    },
    {
      question: "Can I start or finish in Harare?",
      answer:
        "Yes. The route and arrival or departure arrangements can be adapted to your flights, although changes may affect the price and duration."
    },
    {
      question: "Can the tour be shortened?",
      answer:
        "Yes. Destinations can be removed or additional nights redistributed to create a shorter itinerary based on your interests and available travel time."
    },
    {
      question: "What should I pack?",
      answer:
        "Bring comfortable walking shoes, sun protection, insect repellent, suitable clothing for warm and cooler highland conditions, personal medication and a camera or binoculars if desired."
    },
    {
      question: "Are the displayed prices final?",
      answer:
        "No. The displayed amounts are draft planning estimates, not confirmed supplier rates. Final pricing depends on dates, accommodation, transport, activities, park and monument fees, group size and the agreed itinerary."
    }
  ]
},
{
  slug: "mana-pools-wilderness",
  name: "Mana Pools Wilderness",
  category: "Safari & Wilderness",
  image: "/images/packages/mana-pools-wilderness.jpg",
  badge: "Remote Wilderness",
  description:
    "Experience the untamed beauty of Mana Pools National Park, one of Zimbabwe's most remarkable wilderness destinations. This immersive safari combines wildlife viewing, the landscapes of the Zambezi River, and opportunities to explore the bush on foot or by canoe where conditions, permits, and qualified guides allow. Designed for travellers seeking an authentic African wilderness experience, this journey offers time to slow down, observe wildlife, and enjoy the tranquillity of the Zambezi Valley.",
  duration: {
    days: 5,
    nights: 4,
    label: "5 Days / 4 Nights",
  },
  destinations: [
    "Harare",
    "Mana Pools National Park",
    "Zambezi Valley",
  ],
  location: "Mana Pools National Park, Northern Zimbabwe",
  activities: [
    "Guided game drives",
    "Guided walking safaris, subject to availability and authorization",
    "Zambezi River canoeing, subject to conditions and operator availability",
    "Birdwatching",
    "Wildlife photography",
    "Riverbank wildlife viewing",
    "Sunset wilderness experiences",
  ],
  highlights: [
    "Explore the UNESCO-listed Mana Pools wilderness landscape",
    "Look for elephants, buffalo, hippos, crocodiles, and other wildlife",
    "Enjoy game viewing along the Zambezi River and its floodplains",
    "Experience the bush on foot with an appropriately qualified and authorized guide",
    "Optional canoeing experiences on the Zambezi River",
    "Stay in a wilderness camp or lodge selected to match your budget and travel style",
    "Enjoy an intimate safari in one of Zimbabwe's most distinctive natural environments",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival and Journey into the Zambezi Valley",
      description:
        "Arrive in Harare or connect from another confirmed arrival point. Meet your Shungu Africa representative and begin the journey to Mana Pools using the pre-arranged road transfer or charter flight. Road transfers can be long and conditions vary by season, so the final routing and departure time must be confirmed before travel. On arrival, transfer to your camp or lodge, settle in, and receive a safari briefing.",
      times: [
        {
          time: "Morning",
          title: "Arrival and departure arrangements",
          description:
            "Meet your driver or flight representative and review the transfer plan, expected travel time, luggage arrangements, and any park entry requirements.",
        },
        {
          time: "Afternoon",
          title: "Arrive at camp",
          description:
            "Check in, enjoy refreshments, and receive an introduction to the camp, wildlife safety rules, and the activities available during your stay.",
        },
        {
          time: "Evening",
          title: "Welcome dinner",
          description:
            "Enjoy dinner at camp and listen to an introductory briefing about Mana Pools, its wildlife, and the following day's safari programme.",
        },
      ],
      activities: [
        "Scheduled road transfer or charter flight",
        "Camp check-in and orientation",
        "Welcome dinner",
      ],
    },
    {
      day: "Day 2",
      title: "Wildlife Safari and Zambezi River Landscapes",
      description:
        "Spend your first full day exploring the Mana Pools area with your safari guide. Depending on camp location, park access, wildlife movement, and weather, the day may include an early game drive and wildlife viewing around the riverine woodland and open floodplains. Return to camp during the warmer part of the day to relax before an afternoon activity.",
      times: [
        {
          time: "Early morning",
          title: "Morning safari",
          description:
            "Set out when wildlife is often active, scanning for elephants, buffalo, antelope, predators, and birdlife with your guide.",
        },
        {
          time: "Late morning",
          title: "Breakfast and relaxation",
          description:
            "Return to camp for breakfast or brunch and time to rest, enjoy the surroundings, or review photographs.",
        },
        {
          time: "Afternoon",
          title: "River and floodplain exploration",
          description:
            "Enjoy a guided game drive or other confirmed camp activity, taking in the Zambezi scenery and looking for wildlife near water.",
        },
        {
          time: "Evening",
          title: "Dinner at camp",
          description:
            "Return to camp for dinner and a relaxed evening beneath the African sky.",
        },
      ],
      activities: [
        "Morning game drive or guided wildlife viewing",
        "Zambezi River scenery",
        "Afternoon safari activity",
        "Dinner at camp",
      ],
    },
    {
      day: "Day 3",
      title: "Walking Safari and Wilderness Encounters",
      description:
        "Discover a different perspective on the bush during a guided walking safari, if offered by your camp and authorized under current park rules. Learn to interpret tracks, plants, bird calls, and other signs of the ecosystem while maintaining appropriate distances from wildlife. If walking is unavailable or unsuitable, your camp can arrange an alternative game-viewing activity.",
      times: [
        {
          time: "Early morning",
          title: "Guided bush walk",
          description:
            "Join an appropriately qualified and authorized guide for a walk focused on the smaller details of the wilderness and safe wildlife observation.",
        },
        {
          time: "Late morning",
          title: "Breakfast and downtime",
          description:
            "Return to camp for breakfast and time to rest during the heat of the day.",
        },
        {
          time: "Afternoon",
          title: "Afternoon wildlife viewing",
          description:
            "Continue exploring by vehicle or on another confirmed guided activity, depending on local conditions and the camp's programme.",
        },
        {
          time: "Evening",
          title: "Campfire or outdoor dining",
          description:
            "Enjoy dinner and, where provided by the camp, a campfire experience while listening to the sounds of the surrounding wilderness.",
        },
      ],
      activities: [
        "Guided walking safari, subject to authorization",
        "Wildlife tracking and interpretation",
        "Afternoon game viewing",
        "Dinner at camp",
      ],
    },
    {
      day: "Day 4",
      title: "Zambezi River Adventure and Final Full Safari Day",
      description:
        "Enjoy another full day in Mana Pools, with the option of a guided canoe excursion on the Zambezi River where water levels, weather, safety assessments, permits, and a qualified operator allow. Canoeing is not guaranteed and may be replaced by a game drive or another available camp activity. Spend the remainder of the day enjoying the area's wildlife, birdlife, and river scenery.",
      times: [
        {
          time: "Early morning",
          title: "Optional canoe safari or morning game drive",
          description:
            "Take part in a pre-arranged canoe excursion with a qualified operator if conditions permit, or enjoy a morning game drive.",
        },
        {
          time: "Late morning",
          title: "Return to camp",
          description:
            "Enjoy breakfast or brunch and time to relax after the morning's activity.",
        },
        {
          time: "Afternoon",
          title: "Leisure and wildlife viewing",
          description:
            "Choose a confirmed afternoon activity or enjoy time at camp overlooking the surrounding wilderness.",
        },
        {
          time: "Evening",
          title: "Farewell dinner",
          description:
            "Celebrate your final full day with dinner and time to share highlights from the safari.",
        },
      ],
      activities: [
        "Optional guided canoe safari",
        "Alternative game drive if canoeing is unavailable",
        "Birdwatching and photography",
        "Farewell dinner",
      ],
    },
    {
      day: "Day 5",
      title: "Breakfast and Departure",
      description:
        "Enjoy breakfast before checking out and transferring to the agreed departure point. Depending on the confirmed itinerary, this may be a road transfer or charter flight to Harare or another onward connection. Departure arrangements should allow sufficient time for the journey and any onward flights. The safari concludes on arrival at the agreed drop-off point.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and check-out",
          description:
            "Enjoy breakfast, settle any personal extras, and prepare for departure.",
        },
        {
          time: "Morning / afternoon",
          title: "Transfer to departure point",
          description:
            "Travel by the pre-arranged road transfer or charter flight. The actual departure time depends on the route, camp location, weather, and transport schedule.",
        },
      ],
      activities: [
        "Breakfast at camp",
        "Check-out",
        "Road transfer or charter flight",
      ],
    },
  ],
  included: [
    "Four nights' accommodation at the selected Mana Pools camp or lodge",
    "Meals as specified in the final accommodation quotation",
    "Scheduled safari activities explicitly confirmed by the selected camp",
    "Services of camp guides during included activities",
    "Transfers between the agreed arrival or departure point and camp, only when expressly included in the final quotation",
    "Park fees, conservation levies, and activity fees only where itemized as included in the final quotation",
    "Shungu Africa itinerary planning and coordination as specified in the booking agreement",
  ],
  notIncluded: [
    "International and domestic flights unless specifically quoted",
    "Road transfers or charter flights not expressly listed as included",
    "Park entry fees, conservation levies, and concession fees not included in the confirmed quotation",
    "Optional canoeing, walking safaris, or other activities not specified as included",
    "Travel insurance, medical evacuation cover, and personal medical expenses",
    "Visas and other entry documentation",
    "Tips and gratuities",
    "Alcoholic beverages, premium drinks, and personal purchases unless included by the camp",
    "Laundry, telephone, and other personal extras",
    "Additional accommodation before or after the itinerary",
    "Any service not specifically identified in the final booking confirmation",
  ],
  information: [
    "This itinerary is a planning framework. Final routing, activity availability, and inclusions depend on the selected camp, season, park rules, and supplier confirmation.",
    "Mana Pools is a remote wilderness destination. Road access can be slow and may be affected by weather, road conditions, and seasonal access restrictions.",
    "The dry season is generally popular for wildlife viewing, but the best travel dates depend on camp opening schedules, wildlife conditions, and the experience desired.",
    "Walking safaris require suitable conditions and appropriately qualified and authorized guides. They are not guaranteed until confirmed by the operator.",
    "Canoeing depends on river conditions, weather, safety assessments, permits, and operator availability. An alternative activity may be offered if canoeing cannot proceed.",
    "Wildlife sightings cannot be guaranteed. Animals move freely through their natural habitat.",
    "Guests should disclose relevant mobility or dietary requirements before booking so the selected camp and activities can be assessed for suitability.",
    "Pack neutral-coloured, lightweight clothing, a warm layer for cool mornings, comfortable closed shoes, sun protection, insect repellent, binoculars, and any personal medication.",
    "Follow all camp and guide instructions. Never approach, feed, or attempt to touch wildlife.",
    "Confirm accommodation, transfers, park and conservation fees, activity charges, payment terms, and cancellation conditions before accepting a booking.",
  ],
  accommodation: {
    name: "Selected Mana Pools Safari Camp or Lodge",
    description:
      "Four nights at a camp or lodge chosen according to availability, budget, preferred comfort level, and access to the desired safari activities. The exact property, room or tent category, meal plan, and camp location must be confirmed in the final quotation.",
    category: "Wilderness Camp / Safari Lodge",
  },
  pricing: {
    currency: "USD",
    tiers: [
      { minPeople: 1, maxPeople: 1, pricePerPerson: 4800 },
      { minPeople: 2, maxPeople: 2, pricePerPerson: 3900 },
      { minPeople: 3, maxPeople: 3, pricePerPerson: 3600 },
      { minPeople: 4, maxPeople: 4, pricePerPerson: 3350 },
      { minPeople: 5, maxPeople: 12, pricePerPerson: 3100 },
    ],
  },
  cancellation: {
    policy:
      "Cancellation terms depend on the confirmed accommodation, transfer, flight, and activity suppliers. The applicable deadlines, deposits, amendments, refunds, and any non-refundable charges must be disclosed in the written quotation and booking confirmation before payment.",
  },
  faqs: [
    {
      question: "What is the best time to visit Mana Pools?",
      answer:
        "The best dates depend on your priorities, camp opening dates, wildlife conditions, and access arrangements. Many travellers choose the dry season for wildlife viewing, but seasonal conditions should be checked before confirming travel.",
    },
    {
      question: "Are walking safaris included?",
      answer:
        "Walking safaris may be available through selected camps with appropriately qualified and authorized guides. They are included only if specifically confirmed in your final quotation and remain subject to conditions and applicable rules.",
    },
    {
      question: "Can I go canoeing on the Zambezi River?",
      answer:
        "Canoeing may be available with a qualified operator, but it depends on river conditions, weather, safety assessments, permits, and availability. It must be confirmed before travel and may be replaced by another activity.",
    },
    {
      question: "How do I get to Mana Pools?",
      answer:
        "Access may be arranged by road or charter flight, depending on the camp and season. Transfer duration, departure points, luggage limits, and costs must be verified for your specific booking.",
    },
    {
      question: "Are wildlife sightings guaranteed?",
      answer:
        "No. Mana Pools is a natural wilderness area, and wildlife sightings vary according to season, weather, animal movement, and time spent in the field.",
    },
    {
      question: "Is this package suitable for families with children?",
      answer:
        "Suitability depends on the camp's minimum-age rules and the restrictions for walking safaris, canoeing, and other activities. Confirm the ages of all children before selecting accommodation and activities.",
    },
    {
      question: "What is included in the package price?",
      answer:
        "The displayed figures are indicative planning estimates, not verified supplier rates. Accommodation, meals, transfers, park fees, and activities must be itemized and confirmed in the final quotation.",
    },
  ],
},
{
  slug: "hwange-wildlife-escape",
  name: "Hwange Wildlife Escape",
  category: "Wildlife Safari",
  image: "/images/optimized/packages/hwange-wildlife-escape.webp",
  badge: "Big Five Safari",
  description:
    "Escape into the wild landscapes of Hwange National Park, Zimbabwe's largest national park and one of Southern Africa's renowned wildlife destinations. This safari combines comfortable bush accommodation with guided game drives, wildlife viewing at waterholes, birdwatching, and peaceful evenings surrounded by nature. Look out for elephants, buffalo, giraffes, zebras, antelope, and predators that inhabit the park. Ideal for couples, solo travellers, photographers, and small groups, this experience offers an accessible introduction to Zimbabwe's safari country.",
  duration: {
    days: 4,
    nights: 3,
    label: "4 Days / 3 Nights",
  },
  destinations: [
    "Victoria Falls",
    "Hwange National Park",
  ],
  location: "Hwange National Park, western Zimbabwe",
  activities: [
    "Guided game drives",
    "Wildlife viewing at waterholes",
    "Birdwatching",
    "Wildlife photography",
    "Guided nature activities offered by the selected lodge",
    "Sunset game drives where available",
    "Relaxation at a safari lodge or camp",
  ],
  highlights: [
    "Explore Hwange National Park on guided wildlife drives",
    "Visit wildlife-rich areas and waterholes with an experienced safari guide",
    "Look for elephants, buffalo, giraffes, zebras, antelope, and predators",
    "Enjoy early-morning and late-afternoon safari experiences",
    "Stay at a selected safari lodge or camp in or near the park",
    "Experience Zimbabwe's bushveld landscapes and diverse birdlife",
    "Choose a private or small-group safari arrangement, subject to availability",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Victoria Falls to Hwange National Park",
      description:
        "After breakfast, depart Victoria Falls for Hwange National Park by pre-arranged road transfer. The journey time depends on the selected lodge, park entrance, road conditions, and any required transfers within the park. On arrival, check in, enjoy lunch if included, and settle into your safari accommodation. Depending on arrival time and the lodge's schedule, head out for an afternoon game drive before returning for dinner.",
      times: [
        {
          time: "Morning",
          title: "Pick-up and transfer",
          description:
            "Meet your driver at the agreed Victoria Falls pick-up point and travel towards your selected Hwange lodge or camp.",
        },
        {
          time: "Midday",
          title: "Arrival and check-in",
          description:
            "Arrive at the lodge, complete check-in, and enjoy lunch or refreshments according to your booked meal plan.",
        },
        {
          time: "Afternoon",
          title: "First safari experience",
          description:
            "If arrival time and lodge operations permit, join a guided game drive to explore the surrounding wildlife areas.",
        },
        {
          time: "Evening",
          title: "Dinner at the lodge",
          description:
            "Return to camp for dinner and a briefing about the following day's safari activities.",
        },
      ],
      activities: [
        "Road transfer from Victoria Falls",
        "Lodge check-in",
        "Optional afternoon game drive, subject to arrival time",
        "Dinner at the lodge",
      ],
    },
    {
      day: "Day 2",
      title: "Full-Day Hwange Wildlife Safari",
      description:
        "Spend a full day discovering Hwange's wildlife with your lodge's safari team. Early morning is often a rewarding time to explore before temperatures rise. Depending on the lodge location and its operating programme, your safari may focus on waterholes, woodland habitats, open plains, and wildlife movement between feeding and drinking areas. Return to the lodge between activities for meals and rest, with another game drive later in the day.",
      times: [
        {
          time: "Early morning",
          title: "Morning game drive",
          description:
            "Set out with your guide to look for elephants, buffalo, antelope, giraffes, and predators while learning about the park's ecology.",
        },
        {
          time: "Late morning",
          title: "Breakfast and relaxation",
          description:
            "Return to the lodge for breakfast and time to rest or enjoy the camp surroundings.",
        },
        {
          time: "Midday",
          title: "Lunch and leisure",
          description:
            "Enjoy lunch according to the selected meal plan, followed by a quiet period during the warmer part of the day.",
        },
        {
          time: "Afternoon",
          title: "Afternoon wildlife drive",
          description:
            "Explore another wildlife area or visit waterholes with your guide, depending on conditions and the lodge's activity schedule.",
        },
        {
          time: "Evening",
          title: "Dinner and safari stories",
          description:
            "Return to the lodge for dinner and share the day's sightings.",
        },
      ],
      activities: [
        "Morning guided game drive",
        "Wildlife viewing and photography",
        "Afternoon guided game drive",
        "Birdwatching",
        "Meals and leisure time at the lodge",
      ],
    },
    {
      day: "Day 3",
      title: "Waterholes, Elephants and Bushveld Landscapes",
      description:
        "Enjoy another day in Hwange, with further opportunities to observe wildlife and appreciate the park's varied habitats. Your guide will select routes based on wildlife reports, conditions, and the lodge's access arrangements. Depending on your accommodation, you may spend time observing a waterhole from a designated viewing area or join additional game drives. A night drive or specialist activity is possible only where permitted and specifically offered by your selected operator.",
      times: [
        {
          time: "Early morning",
          title: "Safari departure",
          description:
            "Head out for a morning drive in search of wildlife and birds, with time to stop for photography and interpretation.",
        },
        {
          time: "Late morning",
          title: "Breakfast and lodge time",
          description:
            "Return for breakfast and a relaxed break at the lodge.",
        },
        {
          time: "Afternoon",
          title: "Waterhole or wildlife excursion",
          description:
            "Continue exploring the park or enjoy wildlife viewing at a designated waterhole, depending on the lodge's location and activities.",
        },
        {
          time: "Sunset",
          title: "Final afternoon safari",
          description:
            "Take a final game drive if included in your package and conditions allow, enjoying the changing light across the bushveld.",
        },
        {
          time: "Evening",
          title: "Farewell dinner",
          description:
            "Enjoy dinner at the lodge and reflect on your Hwange safari experience.",
        },
      ],
      activities: [
        "Morning game drive",
        "Waterhole wildlife viewing where available",
        "Afternoon safari",
        "Optional lodge-operated activity, if confirmed",
        "Farewell dinner",
      ],
    },
    {
      day: "Day 4",
      title: "Morning Safari and Departure",
      description:
        "Enjoy breakfast and, where your departure schedule permits, a final morning game drive. Check out and transfer to your agreed destination, such as Victoria Falls, Hwange's designated airstrip, or another confirmed onward connection. The exact departure arrangements depend on the selected lodge and transport option. Allow sufficient time for road travel and any onward flight check-in.",
      times: [
        {
          time: "Early morning",
          title: "Optional final game drive",
          description:
            "Join a final wildlife drive if included, available, and compatible with your departure schedule.",
        },
        {
          time: "Morning",
          title: "Breakfast and check-out",
          description:
            "Return to the lodge, have breakfast, settle any personal extras, and prepare for departure.",
        },
        {
          time: "Morning / afternoon",
          title: "Transfer to onward destination",
          description:
            "Travel by the pre-arranged road transfer or lodge-arranged flight connection, as specified in your confirmed itinerary.",
        },
      ],
      activities: [
        "Optional morning game drive",
        "Breakfast and check-out",
        "Transfer to the agreed departure point",
      ],
    },
  ],
  included: [
    "Three nights' accommodation at the selected Hwange safari lodge or camp",
    "Meals according to the selected accommodation's confirmed meal plan",
    "Guided game drives explicitly included in the final quotation",
    "Services of the lodge's safari guide during included activities",
    "Road transfers between Victoria Falls and the selected lodge, only where expressly quoted",
    "Park entry fees and conservation or concession fees only where itemized as included",
    "Shungu Africa booking coordination and itinerary planning as specified in the booking agreement",
  ],
  notIncluded: [
    "International flights and domestic flights unless specifically quoted",
    "Transfers between Victoria Falls and Hwange if not expressly included",
    "Charter flights, airstrip transfers, and baggage surcharges unless specifically included",
    "Park entry fees, conservation levies, and concession fees not listed as included",
    "Game drives or specialist activities not specified in the confirmed package",
    "Night drives or walking safaris unless permitted, available, and expressly included",
    "Travel insurance and medical evacuation cover",
    "Visas and entry documentation",
    "Tips and gratuities",
    "Alcoholic beverages, premium drinks, and personal purchases unless included by the lodge",
    "Laundry, telephone, and other personal expenses",
    "Additional accommodation before or after the package",
    "Any service not expressly listed in the final booking confirmation",
  ],
  information: [
    "This package is designed as a four-day, three-night safari, with accommodation at one selected Hwange lodge or camp.",
    "Final transfer times and routes depend on the accommodation location, access arrangements, road conditions, and season.",
    "Hwange has several accommodation areas with different access arrangements. Confirm whether the selected property is inside the national park, in a concession, or outside the park boundary.",
    "Wildlife sightings vary naturally by season, weather, and animal movement; sightings cannot be guaranteed.",
    "Game-drive schedules and the number of included drives depend on the selected lodge and the confirmed meal and activity plan.",
    "Night drives, walking activities, and other specialist experiences depend on location, applicable rules, guide availability, and supplier confirmation.",
    "Guests should disclose dietary requirements, mobility needs, and children's ages before the accommodation is confirmed.",
    "Pack lightweight neutral-coloured clothing, comfortable shoes, a warm layer for early mornings, a hat, sunscreen, insect repellent, binoculars, and personal medication.",
    "Follow all guide and lodge safety instructions and maintain a safe distance from wildlife.",
    "All accommodation, meals, park fees, transfers, activities, payment terms, and cancellation conditions must be confirmed in writing before booking acceptance.",
  ],
  accommodation: {
    name: "Selected Hwange Safari Lodge or Camp",
    description:
      "Three nights at a lodge or camp selected according to budget, comfort preference, season, location, availability, and access to wildlife areas. The exact property, room category, meal plan, and activity schedule must be confirmed in the final quotation.",
    category: "Safari Lodge / Tented Camp",
  },
  pricing: {
    currency: "USD",
    tiers: [
      { minPeople: 1, maxPeople: 1, pricePerPerson: 2100 },
      { minPeople: 2, maxPeople: 2, pricePerPerson: 1650 },
      { minPeople: 3, maxPeople: 3, pricePerPerson: 1500 },
      { minPeople: 4, maxPeople: 4, pricePerPerson: 1400 },
      { minPeople: 5, maxPeople: 12, pricePerPerson: 1300 },
    ],
  },
  cancellation: {
    policy:
      "Cancellation, amendment, and refund conditions depend on the confirmed lodge, transport providers, and activity operators. The applicable deposit, payment deadlines, cancellation charges, and non-refundable items must be stated in the written quotation and booking confirmation before payment.",
  },
  faqs: [
    {
      question: "What wildlife can I see in Hwange?",
      answer:
        "Hwange is known for its elephants and supports a variety of wildlife, including buffalo, giraffes, zebras, antelope, predators, and many bird species. Sightings depend on season, location, and natural animal movement.",
    },
    {
      question: "Is transport from Victoria Falls included?",
      answer:
        "It can be arranged, but it is included only when the transfer is explicitly listed in your confirmed quotation. The route and duration depend on the selected lodge and access point.",
    },
    {
      question: "How many game drives are included?",
      answer:
        "The number and timing of game drives depend on the selected lodge's programme and the final quotation. Confirm the included drives before making a booking.",
    },
    {
      question: "When is the best time to visit Hwange?",
      answer:
        "Travel conditions and wildlife-viewing opportunities change through the year. The dry season is often popular for waterhole viewing, while other months offer different landscapes and birdlife. Confirm seasonal lodge rates and operating dates before booking.",
    },
    {
      question: "Can I combine Hwange with Victoria Falls?",
      answer:
        "Yes. This itinerary is designed to start and finish around Victoria Falls, subject to confirmed transfers. It can also be adapted into a longer itinerary that combines Victoria Falls with additional Zimbabwe destinations.",
    },
    {
      question: "Is the safari suitable for children?",
      answer:
        "That depends on the selected lodge's age policy and any activity-specific restrictions. Confirm children's ages and room requirements before selecting accommodation.",
    },
    {
      question: "Are the listed prices confirmed?",
      answer:
        "No. These are indicative planning estimates, not verified supplier quotations. Final rates depend on travel dates, accommodation, room occupancy, park and concession fees, transfers, activities, and group size.",
    },
  ],
},
{
  slug: "lake-kariba-matusadona-escape",
  name: "Lake Kariba & Matusadona Escape",
  category: "Lake Safari & Wildlife",
  image: "/images/optimized/packages/lake-kariba-matusadona-escape.webp",
  badge: "Lake & Wilderness",
  description:
    "Discover the beauty of Lake Kariba and the wild landscapes of Matusadona National Park on a memorable six-day Zimbabwe escape. Enjoy lakeside scenery, spectacular sunsets, boat excursions, birdwatching, and opportunities to encounter wildlife along the shores of one of Africa's great reservoirs. Continue into the Matusadona wilderness for guided game drives and nature experiences in a remote setting where rugged hills meet the water. This itinerary combines relaxation, wildlife, and adventure for couples, private travellers, families, and small groups, subject to accommodation and activity availability.",
  duration: {
    days: 6,
    nights: 5,
    label: "6 Days / 5 Nights",
  },
  destinations: [
    "Harare",
    "Kariba",
    "Lake Kariba",
    "Matusadona National Park",
  ],
  location: "Kariba and Matusadona National Park, Zimbabwe",
  activities: [
    "Lake Kariba boat cruise",
    "Sunset cruise, subject to availability",
    "Guided game drives",
    "Wildlife viewing along the lakeshore",
    "Birdwatching",
    "Wildlife photography",
    "Fishing, subject to arrangements and applicable rules",
    "Lakeside relaxation",
    "Guided walking safari, where available and authorized",
  ],
  highlights: [
    "Explore the scenic shores and islands of Lake Kariba",
    "Enjoy the changing colours of the lake at sunset",
    "Travel by boat into the Matusadona wilderness, where the route and weather permit",
    "Look for elephants, buffalo, antelope, hippos, crocodiles, and a variety of birdlife",
    "Experience guided wildlife viewing in Matusadona National Park",
    "Stay in selected lakeside accommodation and a wilderness safari lodge or camp",
    "Combine water-based activities with land-based wildlife experiences",
    "Enjoy a quieter alternative to Zimbabwe's more traditional safari circuits",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Kariba and Lakeside Welcome",
      description:
        "Arrive in Kariba by road or through a separately confirmed flight arrangement. Meet your representative or transfer provider and travel to your selected lakeside hotel, lodge, or houseboat embarkation point. After check-in, enjoy time to settle in and take in views across Lake Kariba. If timing and weather permit, enjoy a short sunset cruise or a relaxed evening by the water.",
      times: [
        {
          time: "Morning",
          title: "Travel to Kariba",
          description:
            "Depart from Harare or arrive by another pre-arranged connection. Road travel from Harare typically takes several hours, depending on traffic, stops, and road conditions.",
        },
        {
          time: "Afternoon",
          title: "Check-in and lakeside relaxation",
          description:
            "Arrive at your selected accommodation, settle in, and receive an overview of the programme and the following day's activities.",
        },
        {
          time: "Late afternoon",
          title: "Optional sunset cruise",
          description:
            "If arranged in advance and conditions allow, enjoy an introductory boat cruise across the lake as the sun sets.",
        },
        {
          time: "Evening",
          title: "Dinner in Kariba",
          description:
            "Enjoy dinner at the booked property or another confirmed venue and relax before the first full day on the lake.",
        },
      ],
      activities: [
        "Transfer to Kariba",
        "Accommodation check-in",
        "Optional sunset boat cruise",
        "Dinner",
      ],
    },
    {
      day: "Day 2",
      title: "Lake Kariba Exploration and Sunset Cruise",
      description:
        "Spend a full day enjoying Lake Kariba's distinctive scenery. Depending on your selected accommodation and confirmed activities, the day may include a guided boat excursion, birdwatching, shoreline exploration, or fishing. Learn about the lake's landscapes and wildlife while enjoying time on the water. Return to shore or your houseboat for an evening overlooking the lake.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and lake excursion",
          description:
            "After breakfast, board a pre-arranged boat for a scenic lake excursion. The route depends on the operator, weather, lake conditions, and available time.",
        },
        {
          time: "Late morning",
          title: "Birdlife and shoreline scenery",
          description:
            "Look for waterbirds and other wildlife while enjoying views of the shoreline, islands, and submerged trees where present.",
        },
        {
          time: "Midday",
          title: "Lunch and relaxation",
          description:
            "Return to the accommodation or enjoy lunch on the boat if this is explicitly included in the booking.",
        },
        {
          time: "Afternoon",
          title: "Optional fishing or leisure time",
          description:
            "Choose a confirmed fishing excursion, another boat outing, or time to relax at the property.",
        },
        {
          time: "Sunset",
          title: "Lake Kariba sunset experience",
          description:
            "Enjoy an afternoon or sunset cruise if included and safe operating conditions permit.",
        },
        {
          time: "Evening",
          title: "Dinner by the lake",
          description:
            "Return for dinner and prepare for the transfer to the Matusadona area on the following day.",
        },
      ],
      activities: [
        "Guided boat excursion",
        "Birdwatching",
        "Optional fishing",
        "Sunset cruise",
        "Dinner",
      ],
    },
    {
      day: "Day 3",
      title: "Boat Transfer to Matusadona Wilderness",
      description:
        "After breakfast, prepare for your transfer from Kariba to your selected lodge or camp in the Matusadona area. A boat transfer is a practical option for many properties, but the embarkation point, landing location, duration, and cost depend on the accommodation provider. Crossings are weather-dependent and may be delayed or rescheduled. On arrival, settle in and enjoy an introductory wildlife activity if time permits.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and check-out",
          description:
            "Complete check-out and meet the transfer team at the confirmed harbour or embarkation point.",
        },
        {
          time: "Morning / midday",
          title: "Transfer across Lake Kariba",
          description:
            "Travel by the pre-arranged boat or another confirmed transfer option. Follow the skipper's safety instructions and wear the provided life jacket.",
        },
        {
          time: "Afternoon",
          title: "Arrival and camp orientation",
          description:
            "Arrive at the selected property, check in, and receive a briefing about the camp, wildlife safety, and available activities.",
        },
        {
          time: "Late afternoon",
          title: "First Matusadona experience",
          description:
            "If available and compatible with arrival time, enjoy a short guided game drive, boat outing, or wildlife-viewing session.",
        },
        {
          time: "Evening",
          title: "Dinner in the wilderness",
          description:
            "Enjoy dinner at camp and an evening surrounded by the sounds and scenery of the African bush.",
        },
      ],
      activities: [
        "Breakfast and check-out",
        "Scheduled boat transfer or confirmed alternative",
        "Camp orientation",
        "Optional introductory safari activity",
        "Dinner at camp",
      ],
    },
    {
      day: "Day 4",
      title: "Matusadona Wildlife Safari",
      description:
        "Spend a full day exploring the Matusadona landscape with your lodge or camp's safari team. Depending on the location and activity programme, enjoy guided game drives through woodland and open areas, wildlife viewing along the lakeshore, and time to observe birdlife. Your guide will select suitable routes according to conditions, wildlife movement, and access permissions.",
      times: [
        {
          time: "Early morning",
          title: "Morning game drive",
          description:
            "Set out with your guide to look for elephants, buffalo, antelope, and other wildlife. Sightings depend on natural movement and local conditions.",
        },
        {
          time: "Late morning",
          title: "Breakfast and rest",
          description:
            "Return to camp for breakfast and time to relax during the warmer part of the day.",
        },
        {
          time: "Afternoon",
          title: "Lakeshore wildlife viewing",
          description:
            "Explore the lakeshore or nearby wildlife areas by vehicle or boat, depending on the activities offered by your selected operator.",
        },
        {
          time: "Late afternoon",
          title: "Optional guided nature activity",
          description:
            "Join an additional game drive, birdwatching outing, or guided walk if available, authorized, and included in your booking.",
        },
        {
          time: "Evening",
          title: "Dinner at camp",
          description:
            "Return for dinner and enjoy the peaceful atmosphere of the wilderness.",
        },
      ],
      activities: [
        "Morning guided game drive",
        "Lakeshore wildlife viewing",
        "Birdwatching",
        "Optional guided walk or boat excursion",
        "Dinner at camp",
      ],
    },
    {
      day: "Day 5",
      title: "Lake and Wilderness Adventure",
      description:
        "Enjoy another full day in the Matusadona area, combining the lake environment with further opportunities to observe wildlife. Depending on the camp's programme, choose a boat safari, guided walking experience, fishing outing, or additional game drive. Walking activities must be arranged with an appropriately qualified and authorized guide. Fishing and boating depend on permits, weather, safety conditions, and operator availability.",
      times: [
        {
          time: "Early morning",
          title: "Morning safari activity",
          description:
            "Join a guided game drive or a confirmed walking safari, depending on the camp's programme and the conditions on the day.",
        },
        {
          time: "Late morning",
          title: "Breakfast and leisure",
          description:
            "Return to camp for breakfast and time to relax or enjoy the surrounding scenery.",
        },
        {
          time: "Afternoon",
          title: "Optional lake excursion",
          description:
            "Enjoy a guided boat trip, fishing activity, or further wildlife viewing if arranged and included in your package.",
        },
        {
          time: "Sunset",
          title: "Final lakeside sunset",
          description:
            "Take in the lake's changing colours from an approved viewing area or on a boat if conditions and the activity schedule permit.",
        },
        {
          time: "Evening",
          title: "Farewell dinner",
          description:
            "Enjoy your final evening at camp and reflect on the lake and wildlife experiences of the journey.",
        },
      ],
      activities: [
        "Morning safari activity",
        "Optional walking safari",
        "Optional boat trip or fishing",
        "Wildlife photography",
        "Farewell dinner",
      ],
    },
    {
      day: "Day 6",
      title: "Breakfast and Departure",
      description:
        "Enjoy breakfast before checking out and transferring to the agreed departure point. Depending on your onward plans, this may be a boat transfer back to Kariba, a charter flight from an approved airstrip, or another route confirmed by the lodge. If continuing to Harare by road, allow adequate time for the drive and any onward connections. The package concludes at the agreed drop-off point.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and check-out",
          description:
            "Enjoy breakfast, settle any personal extras, and prepare for departure.",
        },
        {
          time: "Morning / midday",
          title: "Transfer from Matusadona",
          description:
            "Travel by the pre-arranged boat transfer or confirmed alternative. Departure time and duration depend on the selected property, weather, and transfer schedule.",
        },
        {
          time: "Afternoon",
          title: "Onward connection",
          description:
            "Connect with your pre-arranged road transfer or flight. Additional accommodation may be needed if the onward schedule cannot be met comfortably on the same day.",
        },
      ],
      activities: [
        "Breakfast",
        "Check-out",
        "Boat transfer or confirmed alternative",
        "Onward road transfer or flight connection",
      ],
    },
  ],
  included: [
    "Five nights' accommodation: two nights in Kariba and three nights in the Matusadona area, subject to the final confirmed itinerary",
    "Meals according to each property's confirmed meal plan",
    "Boat excursions specifically listed in the final quotation",
    "Guided game drives expressly included by the selected safari property",
    "Boat transfers between Kariba and the selected Matusadona property, only where expressly quoted",
    "Road transfers between the agreed arrival or departure point and Kariba, only where expressly quoted",
    "Park entry fees, conservation levies, and concession fees only where itemized as included",
    "Services of guides and boat operators during included activities",
    "Shungu Africa itinerary planning and booking coordination as specified in the booking agreement",
  ],
  notIncluded: [
    "International flights and domestic flights unless specifically quoted",
    "Road transfers to or from Kariba unless expressly included",
    "Boat transfers not listed as included in the final quotation",
    "Charter flights, airstrip transfers, and baggage surcharges unless specifically included",
    "Park entry fees, conservation levies, concession fees, and lake-use fees not itemized as included",
    "Fishing permits, fishing equipment, and specialist fishing excursions unless specified",
    "Additional game drives, walking safaris, boat trips, and activities not listed as included",
    "Travel insurance and medical evacuation cover",
    "Visas and entry documentation",
    "Tips and gratuities",
    "Alcoholic beverages, premium drinks, and personal purchases unless included by the accommodation provider",
    "Laundry, telephone, and other personal expenses",
    "Additional accommodation required because of flight schedules, weather delays, or changes to the itinerary",
    "Any service not expressly identified in the final booking confirmation",
  ],
  information: [
    "This is a six-day, five-night itinerary with two nights in Kariba and three nights in the Matusadona area. Accommodation and transfers must be confirmed together before the itinerary is sold.",
    "Lake Kariba and Matusadona are remote destinations. Boat transfers are weather-dependent, and departure times may change because of wind, storms, lake conditions, or operator decisions.",
    "Matusadona can be accessed by boat, road, or charter aircraft, but the best option depends on the selected property and current access arrangements.",
    "Some camps are reached by a boat transfer from Kariba, while others may use different harbours or airstrips. Confirm the exact route with the accommodation provider.",
    "Wildlife sightings cannot be guaranteed. Animal movements, weather, and seasonal conditions influence game viewing.",
    "Walking safaris, fishing, and specialist boat activities are subject to availability, applicable rules, safety conditions, permits, and operator confirmation.",
    "The dry season is often popular for wildlife viewing, while warmer and wetter months bring different landscapes and birdlife. Check seasonal operating dates and rates before confirming travel.",
    "Guests should disclose dietary requirements, mobility needs, and children's ages before booking so accommodation and activities can be assessed for suitability.",
    "Pack lightweight clothing, a warm layer for evenings, comfortable shoes, sun protection, insect repellent, binoculars, personal medication, and a waterproof bag for boat transfers.",
    "Follow boat safety instructions, wear life jackets as directed, and maintain a safe distance from wildlife.",
    "Confirm accommodation, meal plans, transfer routes, boat schedules, park and conservation fees, activity costs, payment terms, and cancellation conditions in writing before accepting a booking.",
  ],
  accommodation: {
    name: "Selected Kariba Lodge and Matusadona Safari Camp",
    description:
      "Five nights split between two nights at a selected Kariba lakeside hotel, lodge, or houseboat and three nights at a selected Matusadona-area safari camp or lodge. The exact properties, room categories, meal plans, transfer points, and activity schedules must be confirmed in the final quotation.",
    category: "Lakeside Lodge / Safari Camp",
  },
  pricing: {
    currency: "USD",
    tiers: [
      { minPeople: 1, maxPeople: 1, pricePerPerson: 3200 },
      { minPeople: 2, maxPeople: 2, pricePerPerson: 2550 },
      { minPeople: 3, maxPeople: 3, pricePerPerson: 2350 },
      { minPeople: 4, maxPeople: 4, pricePerPerson: 2200 },
      { minPeople: 5, maxPeople: 12, pricePerPerson: 2050 },
    ],
  },
  cancellation: {
    policy:
      "Cancellation, amendment, and refund terms depend on the confirmed accommodation providers, boat operators, transport companies, and activity suppliers. The written quotation and booking confirmation must specify deposits, payment deadlines, cancellation charges, non-refundable items, and the procedure for weather-related transfer changes before payment.",
  },
  faqs: [
    {
      question: "What is the difference between Lake Kariba and Matusadona?",
      answer:
        "Lake Kariba is a large reservoir known for its scenery, boating, fishing, birdlife, and sunsets. Matusadona National Park lies along the lake's southern shore and offers a more focused wilderness experience with wildlife viewing, game drives, and guided nature activities.",
    },
    {
      question: "How do we travel from Kariba to Matusadona?",
      answer:
        "Many properties arrange boat transfers from Kariba, while road access and charter flights may be possible for specific locations. The correct route depends on your chosen accommodation, and transfer times, costs, and landing points must be confirmed before booking.",
    },
    {
      question: "Are boat cruises included?",
      answer:
        "Boat cruises are included only if specified in the final quotation. Confirm the number, duration, departure point, and whether meals, drinks, and any required fees are included.",
    },
    {
      question: "What wildlife might we see?",
      answer:
        "Depending on location and conditions, wildlife may include elephants, buffalo, antelope, hippos, crocodiles, and many bird species. Sightings are never guaranteed.",
    },
    {
      question: "Can we go fishing on Lake Kariba?",
      answer:
        "Fishing may be arranged with an appropriate operator, subject to applicable rules, permits, equipment, conditions, and availability. It should be quoted separately unless explicitly included.",
    },
    {
      question: "What happens if the boat transfer is delayed by bad weather?",
      answer:
        "Boat transfers depend on lake conditions and the operator's safety assessment. Delays or rescheduling may be necessary. Confirm the supplier's contingency arrangements and any extra accommodation or transfer costs before travel.",
    },
    {
      question: "Can this package start in Victoria Falls?",
      answer:
        "Yes, but the itinerary should be extended or the routing reviewed. Travel from Victoria Falls to Kariba can take a substantial part of the day, so a direct same-day connection should not be promised without checking the route and transport schedule.",
    },
    {
      question: "Are these prices confirmed?",
      answer:
        "No. These figures are indicative planning estimates, not verified supplier rates. Final pricing depends on accommodation, travel dates, boat transfers, road or air transport, park and conservation fees, activities, and group size.",
    },
  ],
},
{
  slug: "zimbabwe-heritage-journey",
  name: "Zimbabwe Heritage Journey",
  category: "Culture & Heritage",
  image: "/images/packages/zimbabwe-heritage-journey.jpg",
  badge: "Culture & History",
  description:
    "Journey through Zimbabwe's rich cultural history, remarkable archaeological sites, and scenic highlands on this immersive eight-day experience. Explore the monumental stone ruins of Great Zimbabwe, discover the history and traditions associated with the country's communities, and enjoy the natural beauty of the Eastern Highlands. With guided heritage visits, scenic drives, and opportunities to engage with local culture, this journey is designed for curious travellers seeking a deeper understanding of Zimbabwe beyond its famous safari destinations.",
  duration: {
    days: 8,
    nights: 7,
    label: "8 Days / 7 Nights",
  },
  destinations: [
    "Harare",
    "Great Zimbabwe National Monument",
    "Masvingo",
    "Mutare",
    "Eastern Highlands",
    "Nyanga",
  ],
  location: "Harare, Masvingo, Great Zimbabwe, Mutare and the Eastern Highlands, Zimbabwe",
  activities: [
    "Guided archaeological site visit",
    "Great Zimbabwe heritage tour",
    "Historical and cultural interpretation",
    "Museum visit, subject to opening hours",
    "Scenic road journeys",
    "Eastern Highlands nature excursions",
    "Guided walks at selected viewpoints",
    "Local food and cultural experiences",
    "Photography and landscape exploration",
  ],
  highlights: [
    "Explore Great Zimbabwe National Monument, a landmark of the country's history",
    "Learn about the stone architecture, settlement history, and trading networks of Great Zimbabwe",
    "Discover Zimbabwe's cultural heritage through guided interpretation",
    "Experience the changing landscapes between the central plateau and Eastern Highlands",
    "Visit selected heritage or museum attractions along the route",
    "Enjoy the mountain scenery, gardens, and viewpoints of the Eastern Highlands",
    "Discover local cuisine and crafts where suitable experiences are available",
    "Travel with a planned itinerary connecting major heritage and scenic destinations",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Harare",
      description:
        "Arrive in Harare and meet your Shungu Africa representative or pre-arranged transfer provider. Transfer to your selected hotel and settle in after your journey. Depending on arrival time, enjoy a relaxed introductory drive through parts of the capital or visit a local attraction if it is open and fits comfortably into the schedule. Your guide will introduce the journey and explain the cultural and historical themes explored over the coming days.",
      times: [
        {
          time: "Morning / afternoon",
          title: "Arrival and airport transfer",
          description:
            "Meet your driver at the agreed arrival point and transfer to your hotel.",
        },
        {
          time: "Afternoon",
          title: "Hotel check-in and orientation",
          description:
            "Settle into your accommodation and review the route, activities, and departure arrangements.",
        },
        {
          time: "Late afternoon",
          title: "Optional city introduction",
          description:
            "If time permits, enjoy an introductory drive or visit a suitable local attraction, subject to opening hours and traffic.",
        },
        {
          time: "Evening",
          title: "Welcome dinner",
          description:
            "Enjoy dinner at your hotel or a selected restaurant and prepare for the journey south.",
        },
      ],
      activities: [
        "Airport or agreed-point transfer",
        "Hotel check-in",
        "Optional city orientation",
        "Welcome dinner",
      ],
    },
    {
      day: "Day 2",
      title: "Harare to Masvingo",
      description:
        "After breakfast, depart Harare for Masvingo, travelling through Zimbabwe's central and southern landscapes. Stop for refreshments along the way as appropriate. On arrival, check in at your selected accommodation and learn about the region's place in Zimbabwe's historical and cultural story. If time and opening hours allow, visit a local attraction or enjoy a relaxed introduction to Masvingo before dinner.",
      times: [
        {
          time: "Morning",
          title: "Departure from Harare",
          description:
            "Begin the road journey south in a pre-arranged vehicle, with comfort stops as needed.",
        },
        {
          time: "Midday",
          title: "Refreshment stop",
          description:
            "Pause en route for refreshments or lunch at a suitable stop, depending on the group's preferences.",
        },
        {
          time: "Afternoon",
          title: "Arrival in Masvingo",
          description:
            "Check in at the selected hotel or lodge and take time to rest after the drive.",
        },
        {
          time: "Evening",
          title: "Dinner and briefing",
          description:
            "Enjoy dinner and receive an overview of the following day's Great Zimbabwe visit.",
        },
      ],
      activities: [
        "Road transfer to Masvingo",
        "En-route comfort stops",
        "Hotel check-in",
        "Dinner",
      ],
    },
    {
      day: "Day 3",
      title: "Great Zimbabwe National Monument",
      description:
        "Spend the day exploring Great Zimbabwe National Monument with a knowledgeable guide. Discover the remarkable stone walls, enclosures, and hilltop structures of this historic settlement, and learn about its development, leadership, craftsmanship, and connections to regional and long-distance trade. The pace of the visit can be adjusted to suit the group, although some paths and stone surfaces may be uneven or steep. Visit a museum or interpretation area where available, then return to Masvingo for the evening.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and departure",
          description:
            "Enjoy breakfast before travelling to Great Zimbabwe National Monument.",
        },
        {
          time: "Morning",
          title: "Guided Great Zimbabwe tour",
          description:
            "Explore the main heritage areas with a guide, learning about the site's stone architecture, archaeological significance, and historical context.",
        },
        {
          time: "Midday",
          title: "Lunch break",
          description:
            "Take a lunch break at an appropriate venue or as arranged in advance.",
        },
        {
          time: "Afternoon",
          title: "Further interpretation and site exploration",
          description:
            "Continue the visit to other accessible areas or an available museum or interpretation space, subject to opening hours and access conditions.",
        },
        {
          time: "Evening",
          title: "Return to Masvingo",
          description:
            "Return to your accommodation, relax, and enjoy dinner.",
        },
      ],
      activities: [
        "Guided Great Zimbabwe heritage tour",
        "Archaeological and historical interpretation",
        "Museum or interpretation visit where available",
        "Dinner in Masvingo",
      ],
    },
    {
      day: "Day 4",
      title: "Masvingo to Mutare",
      description:
        "Depart Masvingo after breakfast for the journey east towards Mutare. This is a substantial road-transfer day, so the itinerary should allow time for comfort stops, lunch, traffic, and road conditions. On arrival in Mutare, check in and enjoy a relaxed evening. If timing allows, your guide can introduce the city's setting near the Mozambique border and its role as a gateway to Zimbabwe's Eastern Highlands.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and departure",
          description:
            "Check out and begin the pre-arranged road journey towards Mutare.",
        },
        {
          time: "Midday",
          title: "Lunch and comfort stop",
          description:
            "Pause for lunch and refreshments at a suitable stop along the route.",
        },
        {
          time: "Afternoon",
          title: "Arrival in Mutare",
          description:
            "Continue to Mutare and check in at the selected hotel or lodge.",
        },
        {
          time: "Evening",
          title: "Relaxed evening",
          description:
            "Enjoy dinner and prepare for the next day's Eastern Highlands excursion.",
        },
      ],
      activities: [
        "Road transfer from Masvingo to Mutare",
        "En-route lunch stop",
        "Hotel check-in",
        "Dinner",
      ],
    },
    {
      day: "Day 5",
      title: "Eastern Highlands Scenic Exploration",
      description:
        "Explore selected scenic areas of the Eastern Highlands, known for their mountain landscapes, green valleys, gardens, and cool-climate environment. Depending on the final base and current access arrangements, the day may include viewpoints, a botanical garden, a waterfall, or a guided nature walk. The exact attractions should be selected according to driving distances, opening hours, weather, and the group's mobility and interests.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and scenic excursion",
          description:
            "Depart after breakfast for a guided excursion to selected Eastern Highlands attractions.",
        },
        {
          time: "Late morning",
          title: "Nature and heritage stops",
          description:
            "Visit selected viewpoints, gardens, or other suitable attractions based on the confirmed route.",
        },
        {
          time: "Midday",
          title: "Lunch in the highlands",
          description:
            "Enjoy lunch at a selected restaurant, lodge, or suitable stop, depending on the day's route.",
        },
        {
          time: "Afternoon",
          title: "Guided walk or landscape exploration",
          description:
            "Enjoy a gentle walk or further sightseeing where trails, weather, and access conditions permit.",
        },
        {
          time: "Evening",
          title: "Return to accommodation",
          description:
            "Return to your accommodation for relaxation and dinner.",
        },
      ],
      activities: [
        "Guided Eastern Highlands excursion",
        "Scenic viewpoints",
        "Selected gardens or waterfall visits",
        "Optional nature walk",
        "Dinner",
      ],
    },
    {
      day: "Day 6",
      title: "Nyanga and the Mountain Landscapes",
      description:
        "Travel further into the Eastern Highlands towards Nyanga, where mountain scenery, open grasslands, forests, and highland viewpoints provide a contrast to the country's drier southern landscapes. Visit selected attractions based on the accommodation base and confirmed route. Outdoor activities may be adjusted for weather, visibility, trail conditions, and travel time. Return to your selected accommodation in the Nyanga or wider Eastern Highlands area for the evening.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and departure",
          description:
            "Enjoy breakfast and depart for the planned Nyanga-area excursion.",
        },
        {
          time: "Late morning",
          title: "Highland landscapes",
          description:
            "Explore selected mountain viewpoints or nature attractions with your guide.",
        },
        {
          time: "Midday",
          title: "Lunch break",
          description:
            "Pause for lunch at a confirmed venue or suitable stop.",
        },
        {
          time: "Afternoon",
          title: "Nature exploration",
          description:
            "Continue sightseeing or take a gentle guided walk where access and conditions permit.",
        },
        {
          time: "Evening",
          title: "Dinner in the highlands",
          description:
            "Return to the selected accommodation and enjoy dinner in the cool highland setting.",
        },
      ],
      activities: [
        "Nyanga-area sightseeing",
        "Mountain and valley viewpoints",
        "Optional guided nature walk",
        "Photography",
        "Dinner",
      ],
    },
    {
      day: "Day 7",
      title: "Return Journey to Harare",
      description:
        "After breakfast, depart the Eastern Highlands for Harare. This is another significant transfer day, so the departure time should be set to allow for road conditions, planned stops, and any scheduled activities. On arrival, check in at your selected hotel or proceed to another agreed destination. Enjoy a final evening in the capital, with time for dinner or a brief optional city experience if the schedule allows.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and check-out",
          description:
            "Check out and begin the road transfer to Harare.",
        },
        {
          time: "Midday",
          title: "En-route stop",
          description:
            "Pause for refreshments or lunch at a suitable stop, depending on the journey and group requirements.",
        },
        {
          time: "Afternoon",
          title: "Arrival in Harare",
          description:
            "Arrive in Harare and transfer to your selected hotel or agreed drop-off point.",
        },
        {
          time: "Evening",
          title: "Farewell dinner",
          description:
            "Enjoy a final dinner and reflect on the cultural and scenic highlights of the journey.",
        },
      ],
      activities: [
        "Road transfer to Harare",
        "En-route comfort stop",
        "Hotel check-in or drop-off",
        "Farewell dinner",
      ],
    },
    {
      day: "Day 8",
      title: "Departure from Harare",
      description:
        "Enjoy breakfast, subject to your departure schedule, and check out. Transfer to Robert Gabriel Mugabe International Airport or another agreed drop-off point. The transfer time should be coordinated with your flight departure and airline check-in requirements. The Zimbabwe Heritage Journey concludes when you reach the agreed destination.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and check-out",
          description:
            "Enjoy breakfast if time permits, settle personal extras, and prepare for departure.",
        },
        {
          time: "As scheduled",
          title: "Airport or onward transfer",
          description:
            "Travel to the airport or your agreed onward destination using the pre-arranged transfer.",
        },
      ],
      activities: [
        "Breakfast",
        "Hotel check-out",
        "Airport or onward transfer",
      ],
    },
  ],
  included: [
    "Seven nights' accommodation in selected hotels or lodges",
    "Meals according to the confirmed accommodation and meal plan",
    "Private or scheduled road transport for the itinerary, only where expressly included in the final quotation",
    "Services of a driver-guide or local guides as specified in the confirmed itinerary",
    "Guided Great Zimbabwe visit, subject to supplier confirmation",
    "Entrance fees for named attractions only where itemized as included",
    "Eastern Highlands sightseeing activities specifically confirmed in the final quotation",
    "Airport transfers at the agreed arrival and departure points, only where expressly included",
    "Shungu Africa itinerary planning and booking coordination as specified in the booking agreement",
  ],
  notIncluded: [
    "International flights and domestic flights unless specifically quoted",
    "Visa fees and entry documentation",
    "Accommodation upgrades and room supplements not included in the quotation",
    "Meals, drinks, and restaurant visits outside the confirmed meal plan",
    "Entrance fees, guide fees, museum charges, and activity fees not expressly included",
    "Optional excursions and additional sightseeing not listed in the final itinerary",
    "Travel insurance and medical expenses",
    "Tips and gratuities",
    "Laundry, telephone, and personal purchases",
    "Additional accommodation arising from changes to the itinerary or flight schedule",
    "Private transport or transfers not listed as included",
    "Any service not specifically identified in the final booking confirmation",
  ],
  information: [
    "This itinerary is designed for eight days and seven nights, beginning and ending in Harare.",
    "The route includes substantial road journeys, particularly between Masvingo and Mutare and between the Eastern Highlands and Harare. Confirm realistic driving times with the selected transport provider before booking.",
    "Great Zimbabwe National Monument is a major archaeological and heritage site. Site access, opening hours, guide arrangements, and entrance fees should be confirmed before travel.",
    "The Eastern Highlands cover a broad area. Select the accommodation base and attractions before finalizing the daily route to avoid unnecessary backtracking.",
    "Outdoor activities and scenic visits may be affected by rainfall, fog, trail conditions, road conditions, and seasonal opening arrangements.",
    "This is a heritage and scenic tour, not a guaranteed community encounter. Any village visit, cultural performance, or community-led activity should be arranged respectfully through an appropriate local provider and confirmed in advance.",
    "Guests should disclose dietary requirements, mobility needs, and other relevant travel requirements before booking.",
    "Pack comfortable walking shoes, lightweight clothing, a warm layer for the highlands, rain protection, sun protection, personal medication, and a camera.",
    "Wear suitable footwear at archaeological sites. Some routes may include uneven stone surfaces, steps, or sloping paths.",
    "Confirm accommodation, transport, attraction fees, guide services, meal plans, payment terms, and cancellation conditions in writing before accepting a booking.",
  ],
  accommodation: {
    name: "Selected Harare, Masvingo and Eastern Highlands Accommodation",
    description:
      "Seven nights in selected hotels or lodges: one night in Harare on arrival, two nights in Masvingo, one night in Mutare, two nights in the Nyanga or Eastern Highlands area, and one night in Harare before departure. Exact properties, room categories, meal plans, and location should be confirmed according to the final route and supplier availability.",
    category: "City Hotel / Heritage Lodge / Highland Lodge",
  },
  pricing: {
    currency: "USD",
    tiers: [
      { minPeople: 1, maxPeople: 1, pricePerPerson: 3400 },
      { minPeople: 2, maxPeople: 2, pricePerPerson: 2650 },
      { minPeople: 3, maxPeople: 3, pricePerPerson: 2450 },
      { minPeople: 4, maxPeople: 4, pricePerPerson: 2300 },
      { minPeople: 5, maxPeople: 12, pricePerPerson: 2150 },
    ],
  },
  cancellation: {
    policy:
      "Cancellation, amendment, and refund conditions depend on the confirmed accommodation providers, transport operators, attraction providers, and local guides. The written quotation and booking confirmation must state deposit requirements, payment deadlines, cancellation charges, non-refundable items, and applicable supplier-specific terms before payment.",
  },
  faqs: [
    {
      question: "What is the main highlight of the Zimbabwe Heritage Journey?",
      answer:
        "Great Zimbabwe National Monument is the principal historical highlight, offering insight into the stone architecture, settlement, and regional trading history of the medieval Zimbabwean state. The Eastern Highlands add a contrasting scenic and nature experience.",
    },
    {
      question: "Is a guide included at Great Zimbabwe?",
      answer:
        "A guided visit is planned, but the guide arrangement and fee must be confirmed in the final quotation. If a local site guide is required or preferred, arrange this in advance.",
    },
    {
      question: "How much driving is involved?",
      answer:
        "The itinerary involves several intercity journeys. Masvingo to Mutare and the return from the Eastern Highlands to Harare are substantial transfer days. Confirm route timing and planned stops with the transport provider.",
    },
    {
      question: "Can the tour include more cultural experiences?",
      answer:
        "Yes. The programme can be adapted to include museums, craft workshops, community-led visits, or other cultural experiences where suitable providers are available. These should be arranged in advance and priced separately unless already included.",
    },
    {
      question: "Is this tour suitable for older travellers?",
      answer:
        "It can be adapted, but Great Zimbabwe and some highland attractions have uneven surfaces, steps, slopes, or walking requirements. Discuss mobility needs in advance so the route and visits can be tailored appropriately.",
    },
    {
      question: "When is the best time to travel?",
      answer:
        "The Eastern Highlands are scenic throughout much of the year, but rainfall, temperatures, visibility, and road conditions vary seasonally. Confirm the desired travel dates and activity availability before booking.",
    },
    {
      question: "Are all entrance fees included?",
      answer:
        "Only fees explicitly listed in the final quotation are included. Confirm Great Zimbabwe admission, local guide fees, museum charges, and any other attraction fees before confirming the package.",
    },
    {
      question: "Are the listed prices confirmed?",
      answer:
        "No. The prices are indicative planning estimates, not verified supplier rates. Actual costs depend on accommodation, group size, travel dates, vehicle type, guide services, attraction fees, meals, and your operating margin.",
    },
  ],
},
{
  slug: "victoria-falls-adventure",
  name: "Victoria Falls Adventure",
  category: "Adventure & Activities",
  image: "/images/optimized/packages/victoria-falls-adventure-escape.webp",
  badge: "Adventure",
  description:
    "Experience the excitement of Victoria Falls with a guided tour of one of the world's most spectacular natural wonders, a memorable Zambezi River sunset cruise, and time to choose from thrilling adventure activities. This flexible short break combines sightseeing, river scenery, and optional adrenaline experiences, making it ideal for adventurous couples, friends, solo travellers, and small groups.",
  duration: {
    days: 4,
    nights: 3,
    label: "4 Days / 3 Nights",
  },
  destinations: [
    "Victoria Falls",
    "Zambezi River",
  ],
  location: "Victoria Falls, Zimbabwe",
  activities: [
    "Guided Victoria Falls rainforest tour",
    "Zambezi River sunset cruise",
    "Adventure activity options",
    "Victoria Falls town exploration",
    "Scenic photography",
    "Optional helicopter flight over the Falls",
    "Optional white-water rafting",
    "Optional bungee jumping",
    "Optional guided gorge or canopy experience",
  ],
  highlights: [
    "Explore Victoria Falls with a knowledgeable local guide",
    "Experience the power and beauty of the Falls from designated viewpoints",
    "Enjoy a sunset cruise on the Zambezi River",
    "Choose optional adrenaline activities to suit your interests",
    "Stay three nights in Victoria Falls",
    "Enjoy a flexible itinerary with time for relaxation and independent exploration",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Victoria Falls",
      description:
        "Arrive at Victoria Falls Airport and meet your transfer representative for the journey to your accommodation. After check-in, settle in and enjoy some free time to explore the town, browse local craft markets, or relax at your lodge. Depending on your arrival time, optional activities may be arranged for the afternoon.",
      times: [
        {
          time: "Morning / Afternoon",
          title: "Arrival and transfer",
          description:
            "Meet-and-greet and transfer from Victoria Falls Airport to your accommodation, subject to the confirmed arrival arrangements.",
        },
        {
          time: "Afternoon",
          title: "Check-in and free time",
          description:
            "Settle into your accommodation and enjoy time at leisure. Optional activities can be arranged subject to availability and operating hours.",
        },
        {
          time: "Evening",
          title: "Welcome to Victoria Falls",
          description:
            "Enjoy dinner at your accommodation or a local restaurant. Dinner is at your own expense unless specifically included in the final quotation.",
        },
      ],
      activities: [
        "Airport transfer",
        "Accommodation check-in",
        "Optional town exploration",
      ],
    },
    {
      day: "Day 2",
      title: "Guided Victoria Falls Tour and Zambezi Sunset Cruise",
      description:
        "Discover Victoria Falls on a guided walk through the rainforest and along the designated viewpoints. Learn about the formation of the Falls, local history, and the surrounding ecosystem. In the afternoon, enjoy a sunset cruise on the Zambezi River, looking out for wildlife along the riverbanks and taking in the changing colours of the African sunset.",
      times: [
        {
          time: "Morning",
          title: "Guided Victoria Falls rainforest tour",
          description:
            "Explore the accessible viewpoints with a local guide. Rainwear may be useful when water spray is heavy, especially during higher-water periods.",
        },
        {
          time: "Midday",
          title: "Lunch and relaxation",
          description:
            "Enjoy free time for lunch and a break before the afternoon activity. Lunch is excluded unless confirmed otherwise.",
        },
        {
          time: "Late Afternoon",
          title: "Zambezi River sunset cruise",
          description:
            "Transfer to the departure point for a scheduled sunset cruise. Wildlife sightings are possible but cannot be guaranteed; cruise duration, refreshments, and transfers depend on the selected operator.",
        },
        {
          time: "Evening",
          title: "Return to accommodation",
          description:
            "Return to your accommodation and enjoy the evening at leisure.",
        },
      ],
      activities: [
        "Guided Victoria Falls tour",
        "Rainforest and viewpoint exploration",
        "Zambezi River sunset cruise",
        "Wildlife and landscape photography",
      ],
    },
    {
      day: "Day 3",
      title: "Choose Your Victoria Falls Adventure",
      description:
        "Dedicate the day to the adventure experiences that interest you most. Choose from activities such as a helicopter flight over Victoria Falls, white-water rafting when operating conditions permit, bungee jumping, or a guided gorge or canopy experience. Activities are optional and priced separately unless expressly included in the confirmed package. Your schedule will be arranged around the selected operators' departure times and safety requirements.",
      times: [
        {
          time: "Morning",
          title: "Optional adventure experience",
          description:
            "Choose an available activity such as a helicopter flight, guided canopy experience, or another pre-booked adventure. Flights and outdoor activities are weather-dependent.",
        },
        {
          time: "Midday",
          title: "Lunch and free time",
          description:
            "Take a break for lunch and relax between activities. Lunch is at your own expense unless included in the final quotation.",
        },
        {
          time: "Afternoon",
          title: "Second optional activity or leisure time",
          description:
            "Add another suitable activity, explore the town, visit craft markets, or enjoy the facilities at your accommodation. Some adventure activities require advance booking and have minimum age, weight, or fitness requirements.",
        },
        {
          time: "Evening",
          title: "Dinner at leisure",
          description:
            "Enjoy your final full evening in Victoria Falls. Restaurant bookings and dinner can be arranged on request at additional cost.",
        },
      ],
      activities: [
        "Optional helicopter flight over the Falls",
        "Optional white-water rafting, subject to season and river conditions",
        "Optional bungee jumping",
        "Optional gorge swing or canopy experience",
        "Optional guided local experience",
      ],
    },
    {
      day: "Day 4",
      title: "Leisure Time and Departure",
      description:
        "Enjoy breakfast and any available free time before checking out. Depending on your departure schedule, you may have time for souvenir shopping or a final walk around town. Transfer to Victoria Falls Airport for your onward journey, according to your confirmed flight details.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and check-out",
          description:
            "Enjoy breakfast, pack, and check out according to the accommodation's departure policy.",
        },
        {
          time: "As scheduled",
          title: "Airport transfer",
          description:
            "Transfer to Victoria Falls Airport with departure timing based on your flight schedule and the agreed transfer arrangements.",
        },
      ],
      activities: [
        "Breakfast",
        "Optional souvenir shopping",
        "Airport transfer",
      ],
    },
  ],
  included: [
    "Three nights' accommodation in Victoria Falls",
    "Daily breakfast, where provided by the selected accommodation",
    "Airport transfers on arrival and departure, subject to confirmed flight details",
    "Guided Victoria Falls rainforest tour",
    "Zambezi River sunset cruise, subject to supplier confirmation",
    "Ground transfers for the included activities where specified in the final quotation",
    "Trip coordination by Shungu Africa",
  ],
  notIncluded: [
    "International and domestic flights",
    "Visa fees and travel documentation",
    "Travel insurance",
    "Lunches and dinners unless specifically stated in the final quotation",
    "Optional helicopter flights, white-water rafting, bungee jumping, gorge activities, and other adventure experiences",
    "Additional activities not listed under included services",
    "Park, conservation, or other mandatory fees not expressly included in the confirmed price",
    "Personal purchases, tips, and gratuities",
    "Extra accommodation nights and late check-out",
    "Any service not expressly listed as included",
  ],
  information: [
    "This is a four-day, three-night package based in Victoria Falls, Zimbabwe.",
    "The itinerary can be adjusted to suit flight arrival and departure times, subject to activity availability.",
    "Adventure activities are optional unless a specific activity is added to the confirmed booking.",
    "White-water rafting availability depends on the season, water levels, operator schedules, and safety conditions.",
    "Helicopter flights and other outdoor activities may be delayed or cancelled due to weather or operational restrictions.",
    "Adventure operators may impose age, weight, height, health, fitness, or other participation requirements. Travellers should disclose relevant limitations directly to the operator before booking.",
    "Victoria Falls water spray, visibility, and the appearance of the Falls vary seasonally. Waterproof clothing and suitable walking shoes are recommended.",
    "Accommodation category, room type, meal plan, transfer arrangements, and activity operators must be confirmed before payment.",
    "All services are subject to availability and the suppliers' booking, safety, and cancellation conditions.",
    "Prices are indicative draft estimates in USD, not verified supplier quotations. Confirm accommodation rates, activity charges, transfers, park and conservation fees, taxes, seasonal surcharges, payment costs, and Shungu Africa's operating margin before publishing or selling.",
  ],
  accommodation: {
    description:
      "Three nights in a guesthouse, lodge, or hotel in Victoria Falls, selected according to the traveller's budget and preferred comfort level. The final property, room category, meal plan, and availability must be confirmed before booking.",
    category: "Standard or mid-range; upgrade options available",
  },
  pricing: {
    currency: "USD",
    tiers: [
      {
        minPeople: 1,
        maxPeople: 1,
        pricePerPerson: 1550,
      },
      {
        minPeople: 2,
        maxPeople: 2,
        pricePerPerson: 1200,
      },
      {
        minPeople: 3,
        maxPeople: 3,
        pricePerPerson: 1100,
      },
      {
        minPeople: 4,
        maxPeople: 4,
        pricePerPerson: 1000,
      },
      {
        minPeople: 5,
        maxPeople: 12,
        pricePerPerson: 900,
      },
    ],
  },
  cancellation: {
    policy:
      "Cancellation terms must be confirmed in the final quotation and booking conditions. Accommodation, transfers, and activity suppliers may have different deposit, amendment, cancellation, and refund rules. Certain adventure activities and flights may be subject to stricter conditions or non-refundable payments. Clearly communicate the applicable supplier terms to the traveller before collecting payment.",
  },
  faqs: [
    {
      question: "Are adventure activities included in the package price?",
      answer:
        "The guided Victoria Falls tour and sunset cruise are planned as included services, subject to supplier confirmation. Activities such as helicopter flights, white-water rafting, bungee jumping, and gorge experiences are optional and must be quoted separately unless expressly added to the confirmed package.",
    },
    {
      question: "Is this package suitable for first-time visitors?",
      answer:
        "Yes. It combines the main Victoria Falls sightseeing experience with a river cruise and flexible time for optional activities. Travellers can select a relaxed sightseeing-focused stay or add more adventurous experiences.",
    },
    {
      question: "Can the itinerary be customised?",
      answer:
        "Yes. The itinerary can be adjusted to accommodate flight times, preferred activities, accommodation standards, dietary needs, and additional nights, subject to availability and revised pricing.",
    },
    {
      question: "When is the best time for adventure activities?",
      answer:
        "The best timing depends on the activity. Water levels affect rafting and the appearance of the Falls, while weather can affect helicopter flights and other outdoor experiences. Confirm operating seasons and conditions with the relevant suppliers before booking.",
    },
    {
      question: "Can children participate in the activities?",
      answer:
        "Some sightseeing experiences are suitable for families, but age and participation rules differ by activity and operator. Confirm the requirements for each selected activity before accepting a booking for children.",
    },
    {
      question: "What should travellers bring?",
      answer:
        "Recommend comfortable walking shoes, lightweight clothing, sun protection, a reusable water bottle, a waterproof layer for the rainforest, and a secure bag for personal items. Travellers joining adventure activities should follow the specific operator's equipment and clothing instructions.",
    },
  ],
},
{
  slug: "zimbabwe-family-safari",
  name: "Zimbabwe Family Safari",
  category: "Family Safari",
  image: "/images/packages/victoria-family-safari.webp",
  badge: "Family Friendly",
  description:
    "Create lasting family memories on a Zimbabwe adventure combining the spectacular Victoria Falls with an exciting wildlife safari in Hwange National Park. Enjoy a guided Falls experience, a Zambezi River cruise, and guided game drives in search of elephants, giraffes, zebras, antelope, and other wildlife. With a balanced itinerary, comfortable accommodation options, and activities that can be tailored to different ages, this journey offers families an engaging introduction to Zimbabwe's natural wonders.",
  duration: {
    days: 6,
    nights: 5,
    label: "6 Days / 5 Nights",
  },
  destinations: [
    "Victoria Falls",
    "Hwange National Park",
  ],
  location: "Victoria Falls and Hwange National Park, Zimbabwe",
  activities: [
    "Guided Victoria Falls rainforest tour",
    "Zambezi River sunset cruise",
    "Guided safari game drives",
    "Wildlife and nature observation",
    "Family photography",
    "Lodge-based relaxation",
    "Optional cultural experience",
    "Optional family-friendly adventure activities",
  ],
  highlights: [
    "Discover Victoria Falls together with a local guide",
    "Enjoy a sunset cruise on the Zambezi River",
    "Experience Zimbabwe's wildlife on guided game drives in Hwange",
    "Look out for elephants, giraffes, zebras, antelope, and predators",
    "Stay in selected family-friendly accommodation",
    "Balance sightseeing and safari activities with time to rest",
    "Customise activities according to children's ages and family interests",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Victoria Falls",
      description:
        "Arrive at Victoria Falls Airport and meet your transfer representative for the journey to your accommodation. After check-in, allow everyone time to settle in and relax following the journey. Depending on arrival time and the family's energy levels, enjoy a short walk around town or simply unwind at the lodge.",
      times: [
        {
          time: "Morning / Afternoon",
          title: "Arrival and airport transfer",
          description:
            "Meet-and-greet and transfer to the selected accommodation. Transfer arrangements will be coordinated with the family's confirmed flight details.",
        },
        {
          time: "Afternoon",
          title: "Check-in and family leisure time",
          description:
            "Settle into your rooms and enjoy free time. The afternoon is intentionally flexible to accommodate travel fatigue and younger children.",
        },
        {
          time: "Evening",
          title: "Dinner and overnight in Victoria Falls",
          description:
            "Enjoy dinner at the accommodation or a local restaurant. Dinner is at the family's own expense unless included in the confirmed quotation.",
        },
      ],
      activities: [
        "Airport transfer",
        "Accommodation check-in",
        "Relaxation and optional town exploration",
      ],
    },
    {
      day: "Day 2",
      title: "Victoria Falls and Zambezi Sunset Cruise",
      description:
        "Explore Victoria Falls with a guided walk through the rainforest and along designated viewpoints. Learn about the Falls, local history, and the surrounding environment. Later, enjoy a scheduled sunset cruise on the Zambezi River, a relaxing way to appreciate the scenery and look for wildlife along the riverbanks. The daily schedule can be adjusted to suit the family's pace and the weather.",
      times: [
        {
          time: "Morning",
          title: "Guided Victoria Falls tour",
          description:
            "Visit selected viewpoints with a local guide. The walking route, duration, and suitability should be checked against the ages and mobility of the children. Rain spray can be heavy during certain seasons.",
        },
        {
          time: "Midday",
          title: "Lunch and rest",
          description:
            "Return to the accommodation or enjoy lunch nearby. Allow time to rest during the warmer part of the day. Lunch is excluded unless confirmed otherwise.",
        },
        {
          time: "Late Afternoon",
          title: "Zambezi River sunset cruise",
          description:
            "Transfer to the cruise departure point and enjoy the river scenery. Wildlife sightings are possible but not guaranteed. Confirm the operator's child policy, departure time, refreshments, and transfer arrangements.",
        },
        {
          time: "Evening",
          title: "Family dinner and overnight",
          description:
            "Return to the accommodation for dinner and a relaxing evening.",
        },
      ],
      activities: [
        "Guided Victoria Falls rainforest tour",
        "Nature and landscape photography",
        "Zambezi River sunset cruise",
      ],
    },
    {
      day: "Day 3",
      title: "Travel to Hwange National Park",
      description:
        "After breakfast, depart Victoria Falls for Hwange National Park and your selected safari lodge or camp. The road transfer duration will depend on the property's location, road conditions, and any park access arrangements. After check-in and lunch, enjoy a first safari activity if offered by the lodge and suitable for the family. Otherwise, relax and enjoy the surrounding wilderness.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and departure",
          description:
            "Check out after breakfast and travel by road to the confirmed Hwange accommodation. Allow sufficient time for the transfer and any park entry formalities.",
        },
        {
          time: "Midday",
          title: "Arrival and lunch",
          description:
            "Arrive at the lodge, settle into your accommodation, and enjoy lunch according to the confirmed meal plan.",
        },
        {
          time: "Afternoon",
          title: "First safari experience",
          description:
            "Depending on arrival time and the lodge's schedule, join a guided game drive or enjoy a lodge-based wildlife viewing experience. The activity is subject to availability and children's participation rules.",
        },
        {
          time: "Evening",
          title: "Dinner at the safari lodge",
          description:
            "Enjoy dinner and an early night ahead of the next day's wildlife activities. Follow all lodge safety guidance, particularly around wildlife and movement after dark.",
        },
      ],
      activities: [
        "Road transfer to Hwange",
        "Safari lodge check-in",
        "Optional afternoon game drive or lodge-based wildlife viewing",
      ],
    },
    {
      day: "Day 4",
      title: "Full Day of Wildlife Discovery",
      description:
        "Spend a day discovering Hwange's wildlife with your safari guide. Depending on the lodge's programme, enjoy a morning game drive followed by breakfast and a relaxed midday break. An afternoon game drive offers another opportunity to explore the park and observe wildlife. The pace can be adapted for children, with shorter drives or lodge-based activities where available.",
      times: [
        {
          time: "Early Morning",
          title: "Morning game drive",
          description:
            "Set out with a qualified safari guide to look for elephants, giraffes, zebras, antelope, and other wildlife. Sightings depend on animal movements, season, and local conditions.",
        },
        {
          time: "Morning",
          title: "Breakfast and downtime",
          description:
            "Return to the lodge for breakfast and time to rest. Lodge facilities and child-friendly activities vary by property.",
        },
        {
          time: "Midday",
          title: "Lunch and relaxation",
          description:
            "Enjoy lunch and a quiet period during the warmer hours. Follow the lodge's guidance on safe outdoor movement and wildlife viewing.",
        },
        {
          time: "Afternoon",
          title: "Afternoon game drive",
          description:
            "Join a second guided game drive if included in the lodge package and appropriate for the children. Ask the operator about drive duration, vehicle arrangements, and minimum age restrictions.",
        },
        {
          time: "Evening",
          title: "Dinner and safari stories",
          description:
            "Enjoy dinner at the lodge and share the day's wildlife sightings. Overnight in Hwange.",
        },
      ],
      activities: [
        "Morning game drive",
        "Afternoon game drive, subject to lodge schedule",
        "Wildlife observation",
        "Relaxation at the lodge",
      ],
    },
    {
      day: "Day 5",
      title: "More Wildlife and Time to Enjoy the Bush",
      description:
        "Enjoy another day in Hwange, with time for wildlife viewing and relaxation. Depending on the selected property's schedule, take an additional game drive, observe wildlife from a designated lodge viewing area, or participate in an age-appropriate nature activity if offered. This day provides flexibility for families to choose a more active safari or a gentler pace.",
      times: [
        {
          time: "Early Morning",
          title: "Optional morning game drive",
          description:
            "Explore another area of the park with your guide, subject to the lodge's programme and the family's preferred pace.",
        },
        {
          time: "Morning",
          title: "Breakfast and free time",
          description:
            "Return for breakfast and enjoy time at the lodge. Any children's activities, wildlife presentations, or supervised programmes must be confirmed with the property.",
        },
        {
          time: "Midday",
          title: "Lunch and relaxation",
          description:
            "Enjoy lunch and rest. The accommodation's meal plan and facilities will determine the available options.",
        },
        {
          time: "Afternoon",
          title: "Final safari activity",
          description:
            "Take an afternoon game drive or enjoy a lodge-based wildlife experience, depending on availability and the family's interests.",
        },
        {
          time: "Evening",
          title: "Final safari evening",
          description:
            "Enjoy dinner and your last overnight stay in Hwange National Park.",
        },
      ],
      activities: [
        "Optional game drives",
        "Wildlife observation",
        "Family leisure time",
        "Optional lodge-based nature activities",
      ],
    },
    {
      day: "Day 6",
      title: "Breakfast and Departure",
      description:
        "Enjoy breakfast and check out according to the lodge's departure arrangements. Transfer to Victoria Falls Airport or another agreed departure point. Because driving time varies with the camp's location and road conditions, the transfer should be scheduled around the confirmed flight time, with an appropriate buffer. An additional night may be advisable for early departures or remote camps.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and check-out",
          description:
            "Enjoy breakfast, pack, and check out. An early departure may be required depending on the flight schedule.",
        },
        {
          time: "As scheduled",
          title: "Transfer and onward journey",
          description:
            "Travel to the confirmed airport or onward destination. Confirm the exact route, estimated driving time, and recommended airport arrival time before finalising the booking.",
        },
      ],
      activities: [
        "Breakfast",
        "Road transfer",
        "Departure arrangements",
      ],
    },
  ],
  included: [
    "Five nights' accommodation: two nights in Victoria Falls and three nights in Hwange National Park",
    "Daily breakfast at accommodation where provided under the confirmed meal plan",
    "Arrival and departure airport transfers, subject to confirmed flight details and agreed routing",
    "Guided Victoria Falls rainforest tour",
    "Zambezi River sunset cruise, subject to supplier confirmation and child policy",
    "Road transfer between Victoria Falls and the selected Hwange accommodation",
    "Safari activities included in the confirmed Hwange lodge package",
    "Meals and game drives at Hwange only to the extent expressly stated in the selected property's confirmed package",
    "Trip coordination by Shungu Africa",
  ],
  notIncluded: [
    "International and domestic flights",
    "Visas, passports, and other travel documentation",
    "Travel insurance",
    "Meals not specified as included in the confirmed quotation",
    "Additional game drives or activities not included in the selected lodge package",
    "Optional adventure activities in Victoria Falls",
    "Park, conservation, and mandatory entry fees unless expressly included",
    "Childcare, babysitting, and supervised children's programmes unless confirmed",
    "Private safari vehicle upgrades unless specified",
    "Tips, gratuities, personal purchases, and laundry",
    "Extra nights, late check-out, and room upgrades",
    "Any service not expressly listed as included",
  ],
  information: [
    "This is a six-day, five-night family itinerary with two nights in Victoria Falls and three nights in Hwange National Park.",
    "The suggested route is Victoria Falls to Hwange and back toward Victoria Falls for departure. The exact camp location and transfer times must be checked before confirming flights.",
    "The itinerary is a planning framework. Game drives, meal times, and activities are subject to the selected lodge's operating schedule.",
    "Family accommodation may require a family room, interconnecting rooms, a family tent, or additional rooms depending on the property's capacity and child policy.",
    "Confirm children's ages at the time of travel before quoting. Accommodation and activity providers may use different age bands for child rates.",
    "Game drives and other wildlife activities may have minimum age requirements. A private vehicle or alternative activity may be necessary for families with young children.",
    "Children must follow all guide and lodge safety instructions. Wildlife areas are not playgrounds, and children should never approach or feed wild animals.",
    "Some lodges are in remote locations with limited mobile connectivity, medical facilities, and access to shops. Confirm the family's needs and emergency arrangements before booking.",
    "The best wildlife viewing varies with season, water availability, and animal movements. Wildlife sightings cannot be guaranteed.",
    "Pack comfortable walking shoes, sun protection, insect repellent appropriate for the traveller's age, lightweight clothing, a warm layer for cool mornings, and any required personal medication.",
    "Check health, vaccination, and travel-insurance requirements with qualified medical and travel professionals before departure.",
    "All services are subject to availability and the applicable supplier booking, safety, and cancellation conditions.",
    "All prices below are indicative draft estimates in USD, not verified supplier quotes. Before publishing or selling, confirm accommodation rates, family-room supplements, child pricing, meals, transfers, park and conservation fees, safari activities, seasonal surcharges, taxes, and Shungu Africa's operating margin.",
  ],
  accommodation: {
    description:
      "Five nights in selected family-suitable accommodation, with two nights in Victoria Falls and three nights at a safari lodge or camp in Hwange National Park. Options may range from comfortable hotels and family-friendly lodges to higher-end safari properties. Confirm room configuration, occupancy limits, child policies, meal plans, and any single-room or private-vehicle supplements before quoting.",
    category: "Family-friendly standard to luxury options",
  },
  pricing: {
    currency: "USD",
    tiers: [
      {
        minPeople: 1,
        maxPeople: 1,
        pricePerPerson: 2800,
      },
      {
        minPeople: 2,
        maxPeople: 2,
        pricePerPerson: 2200,
      },
      {
        minPeople: 3,
        maxPeople: 3,
        pricePerPerson: 1950,
      },
      {
        minPeople: 4,
        maxPeople: 4,
        pricePerPerson: 1750,
      },
      {
        minPeople: 5,
        maxPeople: 12,
        pricePerPerson: 1600,
      },
    ],
  },
  cancellation: {
    policy:
      "Cancellation and amendment terms must be confirmed in the final quotation. Accommodation, safari lodges, transfers, and activity suppliers may apply different deposit, cancellation, and refund conditions. Remote safari properties may require advance payment and have stricter cancellation terms. State all applicable supplier terms clearly before collecting a deposit.",
  },
  faqs: [
    {
      question: "Is this safari suitable for young children?",
      answer:
        "It can be suitable, provided the accommodation and activities are chosen for the children's ages. Some lodges and game drives have minimum age requirements, so confirm these before booking. Families with very young children may benefit from a private vehicle, shorter drives, or a property with suitable family facilities.",
    },
    {
      question: "Can children receive discounted rates?",
      answer:
        "Potentially. Child rates depend on the accommodation, age of each child, room configuration, meals, transfers, and safari activities. The displayed group prices are draft adult-equivalent estimates and should not be used as confirmed child prices. Request a family-specific quotation with every traveller's age.",
    },
    {
      question: "Are all meals and game drives included?",
      answer:
        "Not automatically. The final quotation should state exactly which meals, game drives, park fees, and other safari services are covered by the selected Hwange property. Confirm any additional charges before booking.",
    },
    {
      question: "Will we definitely see elephants and other wildlife?",
      answer:
        "Hwange is known for its wildlife, including elephants, but sightings depend on season, animal movements, weather, and the areas visited. Your guide will help maximise opportunities, but no specific sighting can be guaranteed.",
    },
    {
      question: "Can we add more nights or upgrade accommodation?",
      answer:
        "Yes. The itinerary can be extended or upgraded, subject to availability and revised pricing. Options may include additional nights in Victoria Falls, a higher-category safari lodge, or a private vehicle for the family's game drives.",
    },
    {
      question: "How do we get from Victoria Falls to Hwange?",
      answer:
        "The itinerary allows for a road transfer, but the journey time depends on the specific lodge, road conditions, and park access arrangements. Some properties may have different access requirements. Confirm the exact property and route before finalising the schedule.",
    },
    {
      question: "What is the best time of year for a family safari?",
      answer:
        "Wildlife viewing, temperatures, rainfall, and the appearance of Victoria Falls vary through the year. The best travel period depends on whether your family prioritises wildlife viewing, the Falls, school holidays, or particular activities. Check seasonal conditions and lodge availability for your intended dates.",
    },
  ],
},
{
  slug: "private-zimbabwe-safari",
  name: "Private Zimbabwe Safari",
  category: "Private Safari",
  image: "/images/packages/private-zimbabwe-safari.jpg",
  badge: "Private Journey",
  description:
    "Discover Zimbabwe on a personalised private safari combining the spectacular Victoria Falls, the elephant-rich wilderness of Hwange National Park, and the remote river landscapes of Mana Pools National Park. Enjoy carefully coordinated transfers, guided wildlife experiences, and accommodation selected around your preferred comfort level. Designed for couples, families with eligible children, photographers, and private groups, this journey can be tailored to your travel dates, interests, and pace, with the option of private guiding and selected charter flights.",
  duration: {
    days: 10,
    nights: 9,
    label: "10 Days / 9 Nights",
  },
  destinations: [
    "Victoria Falls",
    "Hwange National Park",
    "Mana Pools National Park",
    "Harare",
  ],
  location: "Victoria Falls, Hwange, Mana Pools and Harare, Zimbabwe",
  activities: [
    "Guided Victoria Falls rainforest tour",
    "Zambezi River sunset cruise",
    "Guided game drives in Hwange",
    "Wildlife photography",
    "Guided walking safari, subject to camp and guide arrangements",
    "Optional canoe safari in Mana Pools, subject to seasonal and operator conditions",
    "Birdwatching and nature interpretation",
    "Private transfers and personalised trip coordination",
    "Optional helicopter flight over Victoria Falls",
  ],
  highlights: [
    "Explore Victoria Falls with a knowledgeable local guide",
    "Enjoy a sunset cruise on the upper Zambezi River",
    "Discover Hwange's wildlife on guided safari drives",
    "Experience the quieter riverine wilderness of Mana Pools",
    "Choose accommodation according to your preferred comfort and service level",
    "Request private guiding and dedicated vehicles where available",
    "Minimise long road journeys by using suitable charter connections where practical",
    "Enjoy a personalised itinerary with opportunities for wildlife viewing and photography",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrive in Victoria Falls",
      description:
        "Arrive at Victoria Falls Airport and meet your representative for a transfer to your selected accommodation. After check-in, enjoy time to settle in and relax. Depending on your arrival time, optional town exploration or a helicopter flight may be possible, subject to availability and weather.",
      times: [
        {
          time: "Morning / Afternoon",
          title: "Arrival and private transfer",
          description:
            "Meet your transfer representative and travel to your accommodation according to your confirmed flight details.",
        },
        {
          time: "Afternoon",
          title: "Check-in and leisure time",
          description:
            "Settle into your accommodation and enjoy the facilities or explore Victoria Falls town at your own pace.",
        },
        {
          time: "Evening",
          title: "Welcome dinner",
          description:
            "Enjoy dinner at your accommodation or a local restaurant. Dinner is included only if specified in the confirmed quotation.",
        },
      ],
      activities: [
        "Airport meet-and-greet",
        "Private transfer",
        "Leisure time",
      ],
    },
    {
      day: "Day 2",
      title: "Victoria Falls and the Zambezi River",
      description:
        "Discover Victoria Falls on a guided walk through the rainforest and along designated viewpoints. Learn about the Falls' geology, history, and surrounding ecosystem. Later, enjoy a sunset cruise on the Zambezi River, watching the changing light and looking for wildlife along the riverbanks.",
      times: [
        {
          time: "Morning",
          title: "Guided Victoria Falls tour",
          description:
            "Explore the viewpoints with a local guide. Walking conditions and water spray vary by season, so suitable footwear and a waterproof layer are recommended.",
        },
        {
          time: "Midday",
          title: "Lunch and relaxation",
          description:
            "Enjoy lunch and free time before the afternoon activity. Lunch is excluded unless specifically included in the confirmed quotation.",
        },
        {
          time: "Late Afternoon",
          title: "Zambezi sunset cruise",
          description:
            "Board a scheduled or privately arranged cruise, depending on the chosen service and availability. Confirm the operator, transfer arrangements, refreshments, and cruise duration in advance.",
        },
        {
          time: "Evening",
          title: "Return to accommodation",
          description:
            "Return to your accommodation and enjoy the evening at leisure.",
        },
      ],
      activities: [
        "Guided Victoria Falls rainforest tour",
        "Photography and sightseeing",
        "Zambezi River sunset cruise",
      ],
    },
    {
      day: "Day 3",
      title: "Travel to Hwange National Park",
      description:
        "After breakfast, depart for Hwange National Park. The transfer may be arranged by private road vehicle or a suitable charter service, depending on the selected camp and confirmed routing. On arrival, check in and enjoy lunch if provided by the camp. If timing permits, head out on an afternoon game drive to begin exploring the park.",
      times: [
        {
          time: "Morning",
          title: "Transfer to Hwange",
          description:
            "Travel from Victoria Falls to the confirmed safari lodge or camp. Confirm driving time, road conditions, park access, or charter baggage limits before finalising arrangements.",
        },
        {
          time: "Midday",
          title: "Arrival and check-in",
          description:
            "Settle into your safari accommodation and enjoy the meal provided under your confirmed booking.",
        },
        {
          time: "Afternoon",
          title: "First game drive",
          description:
            "If available within the camp schedule, join a guided game drive to look for elephants, giraffes, zebras, antelope, and other wildlife.",
        },
        {
          time: "Evening",
          title: "Dinner at camp",
          description:
            "Enjoy dinner according to the confirmed meal plan and relax in the wilderness surroundings.",
        },
      ],
      activities: [
        "Private road transfer or confirmed charter",
        "Safari camp check-in",
        "Optional afternoon game drive",
      ],
    },
    {
      day: "Day 4",
      title: "Full-Day Safari in Hwange",
      description:
        "Spend a full day exploring Hwange with experienced safari guides. Morning and afternoon game drives offer opportunities to observe wildlife across different habitats. Depending on the season and camp location, you may visit waterholes and open woodland areas known for wildlife activity. The day is arranged around the camp's operating schedule and your preferred pace.",
      times: [
        {
          time: "Early Morning",
          title: "Morning game drive",
          description:
            "Set out with your guide to look for wildlife while temperatures are cooler. Sightings vary with animal movements, weather, and season.",
        },
        {
          time: "Morning",
          title: "Breakfast and rest",
          description:
            "Return to camp for breakfast and time to relax or enjoy designated wildlife-viewing areas.",
        },
        {
          time: "Midday",
          title: "Lunch and leisure",
          description:
            "Enjoy lunch and a break during the warmer part of the day, according to your accommodation's meal plan.",
        },
        {
          time: "Afternoon",
          title: "Afternoon game drive",
          description:
            "Explore another area of the park with your guide, with opportunities for wildlife photography and interpretation.",
        },
        {
          time: "Evening",
          title: "Dinner and overnight",
          description:
            "Return to camp for dinner and overnight. Follow all camp safety guidance around wildlife and movement after dark.",
        },
      ],
      activities: [
        "Morning game drive",
        "Afternoon game drive",
        "Wildlife photography",
        "Guided nature interpretation",
      ],
    },
    {
      day: "Day 5",
      title: "Hwange Wilderness Experience",
      description:
        "Enjoy another day in Hwange, allowing more time to explore the park and appreciate its wildlife. Depending on your camp and interests, the programme may include additional game drives, wildlife viewing from a designated observation area, or photography-focused outings. A private vehicle or dedicated guide can be requested where the property offers this service.",
      times: [
        {
          time: "Early Morning",
          title: "Safari activity",
          description:
            "Join a morning game drive or another confirmed activity offered by your camp.",
        },
        {
          time: "Morning",
          title: "Breakfast and downtime",
          description:
            "Enjoy breakfast and time to relax, review photographs, or appreciate the surrounding wilderness.",
        },
        {
          time: "Midday",
          title: "Lunch and leisure",
          description:
            "Enjoy lunch and a rest period according to the selected camp's meal plan.",
        },
        {
          time: "Afternoon",
          title: "Final full safari outing in Hwange",
          description:
            "Head out for another guided game drive or a suitable camp-based wildlife experience, depending on availability.",
        },
        {
          time: "Evening",
          title: "Dinner at camp",
          description:
            "Enjoy dinner and your final overnight stay in Hwange.",
        },
      ],
      activities: [
        "Additional game drives",
        "Wildlife photography",
        "Relaxation at camp",
      ],
    },
    {
      day: "Day 6",
      title: "Transfer to Mana Pools National Park",
      description:
        "After breakfast, transfer from Hwange toward Mana Pools. Due to the distance, remote access, and seasonal road conditions, a suitable light-aircraft charter is often the more practical option when available. The exact routing may involve an airstrip transfer and a camp vehicle. After arrival and check-in, enjoy a camp activity if time and conditions permit.",
      times: [
        {
          time: "Morning",
          title: "Departure from Hwange",
          description:
            "Travel to the confirmed departure point and board your arranged charter, if included. Confirm flight schedules, baggage restrictions, airstrip transfers, and weather contingencies in advance.",
        },
        {
          time: "Midday / Afternoon",
          title: "Arrival and transfer to camp",
          description:
            "Transfer from the designated airstrip to your Mana Pools accommodation. Arrival arrangements depend on the selected camp and seasonal access.",
        },
        {
          time: "Afternoon",
          title: "Settle into Mana Pools",
          description:
            "Check in, enjoy refreshments or a meal according to your package, and learn about the camp's wildlife safety procedures.",
        },
        {
          time: "Late Afternoon",
          title: "Optional first wildlife activity",
          description:
            "If operating conditions and timing permit, join a guided game drive or a camp-approved nature activity.",
        },
        {
          time: "Evening",
          title: "Dinner in the wilderness",
          description:
            "Enjoy dinner at camp and overnight in the Mana Pools area.",
        },
      ],
      activities: [
        "Confirmed charter or suitable transfer arrangement",
        "Camp transfer",
        "Optional afternoon wildlife activity",
      ],
    },
    {
      day: "Day 7",
      title: "Discover Mana Pools",
      description:
        "Explore the distinctive riverine landscapes of Mana Pools with qualified guides. Depending on the camp, season, water conditions, and safety approvals, activities may include guided walking safaris, game drives, or canoe excursions. Mana Pools is a remote wilderness destination, and all activities must follow the camp's safety rules and professional guiding requirements.",
      times: [
        {
          time: "Early Morning",
          title: "Morning wilderness activity",
          description:
            "Join a guided walking safari or game drive, subject to the selected camp's programme and safety conditions.",
        },
        {
          time: "Morning",
          title: "Breakfast and relaxation",
          description:
            "Return to camp for breakfast and time to relax or enjoy designated viewing areas.",
        },
        {
          time: "Midday",
          title: "Lunch and rest",
          description:
            "Enjoy lunch and a rest period, following the camp's schedule and guidance on safe movement around wildlife.",
        },
        {
          time: "Afternoon",
          title: "River and wildlife exploration",
          description:
            "Take part in another guided activity or, where available and safe, a canoe excursion. Walking and canoeing are not guaranteed and depend on the selected operator, season, water levels, and approvals.",
        },
        {
          time: "Evening",
          title: "Dinner at camp",
          description:
            "Enjoy dinner and overnight in Mana Pools.",
        },
      ],
      activities: [
        "Guided wildlife viewing",
        "Optional walking safari",
        "Optional canoe safari",
        "Birdwatching and photography",
      ],
    },
    {
      day: "Day 8",
      title: "A Second Day in Mana Pools",
      description:
        "Enjoy another day in Mana Pools with time to explore different areas and deepen your understanding of the park's wildlife and ecology. The day can be tailored for photographers, wildlife enthusiasts, or travellers who prefer a balance of activity and relaxation. All walking, boating, and wildlife experiences are subject to the selected camp's safety requirements and operating conditions.",
      times: [
        {
          time: "Early Morning",
          title: "Morning safari",
          description:
            "Join a guided walk or game drive, according to your interests, guide recommendations, and the camp's operating schedule.",
        },
        {
          time: "Morning",
          title: "Breakfast and camp leisure",
          description:
            "Return for breakfast and time to rest or enjoy the surroundings from approved camp areas.",
        },
        {
          time: "Midday",
          title: "Lunch and relaxation",
          description:
            "Enjoy lunch and a quiet period before the afternoon activity.",
        },
        {
          time: "Afternoon",
          title: "Final full wildlife outing",
          description:
            "Take another guided outing or a suitable alternative arranged by the camp. Wildlife sightings and activity availability cannot be guaranteed.",
        },
        {
          time: "Evening",
          title: "Final evening in Mana Pools",
          description:
            "Enjoy dinner and your final overnight stay in the wilderness.",
        },
      ],
      activities: [
        "Guided safari activity",
        "Optional walking or canoe experience",
        "Birdwatching and wildlife photography",
        "Camp leisure time",
      ],
    },
    {
      day: "Day 9",
      title: "Travel to Harare",
      description:
        "After breakfast, depart Mana Pools using the confirmed transfer arrangement. A charter flight to Harare may be the most practical option, depending on the camp, airstrip, operating season, and availability. On arrival, transfer to your accommodation and enjoy a final evening in the capital. If the flight connection or charter schedule requires it, an alternative overnight location or additional night may be recommended.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and departure",
          description:
            "Check out and transfer to the designated airstrip or departure point, following the camp's schedule.",
        },
        {
          time: "Morning / Afternoon",
          title: "Transfer to Harare",
          description:
            "Travel by the confirmed charter or road arrangement. Confirm baggage limits, departure times, and contingency arrangements before travel.",
        },
        {
          time: "Afternoon",
          title: "Harare arrival and check-in",
          description:
            "Transfer to your selected Harare accommodation and enjoy time at leisure.",
        },
        {
          time: "Evening",
          title: "Farewell dinner",
          description:
            "Enjoy a final dinner in Harare. Dinner is included only if stated in the confirmed quotation.",
        },
      ],
      activities: [
        "Transfer from Mana Pools",
        "Harare accommodation check-in",
        "Optional city dining experience",
      ],
    },
    {
      day: "Day 10",
      title: "Departure from Harare",
      description:
        "Enjoy breakfast and check out according to your flight schedule. If time permits, arrange an optional short city experience or souvenir shopping. Transfer to Robert Gabriel Mugabe International Airport for your onward journey. Departure transfers should be timed around your confirmed flight and airport check-in requirements.",
      times: [
        {
          time: "Morning",
          title: "Breakfast and check-out",
          description:
            "Enjoy breakfast, pack, and check out. An early departure may require a packed breakfast or a different transfer time.",
        },
        {
          time: "As scheduled",
          title: "Airport transfer",
          description:
            "Transfer to Robert Gabriel Mugabe International Airport for your onward flight.",
        },
      ],
      activities: [
        "Breakfast",
        "Optional city time",
        "Airport transfer",
      ],
    },
  ],
  included: [
    "Nine nights' accommodation: two nights in Victoria Falls, three nights in Hwange, three nights in Mana Pools, and one night in Harare",
    "Meals according to the confirmed meal plans at each property",
    "Arrival transfer from Victoria Falls Airport",
    "Transfer from Victoria Falls to the selected Hwange accommodation",
    "Transfer between Hwange and Mana Pools using the confirmed routing",
    "Transfer from Mana Pools to Harare using the confirmed routing",
    "Departure transfer to Robert Gabriel Mugabe International Airport",
    "Guided Victoria Falls rainforest tour",
    "Zambezi River sunset cruise",
    "Safari activities included in the confirmed Hwange and Mana Pools lodge packages",
    "Park and conservation fees only where explicitly included in the final quotation",
    "Trip planning and coordination by Shungu Africa",
  ],
  notIncluded: [
    "International and domestic scheduled flights",
    "Charter flights unless specifically itemised as included",
    "Visas and travel documentation",
    "Travel insurance and emergency evacuation cover",
    "Meals, drinks, and premium beverages not covered by the confirmed meal plans",
    "Private guides or dedicated safari vehicles unless expressly confirmed",
    "Optional helicopter flights and additional Victoria Falls activities",
    "Optional walking safaris, canoeing, or other activities not included in the selected camp package",
    "Park, conservation, concession, and mandatory fees not expressly included",
    "Tips, gratuities, personal purchases, and laundry",
    "Extra nights, room upgrades, and special requests",
    "Additional transfers resulting from missed connections, weather, or schedule changes unless covered under agreed terms",
    "Any service not expressly listed as included",
  ],
  information: [
    "This is a ten-day, nine-night private safari framework covering Victoria Falls, Hwange National Park, Mana Pools, and Harare.",
    "The itinerary is designed around private trip coordination. Private accommodation, private guides, exclusive vehicles, and charter aircraft are separate service choices and must be explicitly confirmed.",
    "The suggested allocation is two nights in Victoria Falls, three in Hwange, three in Mana Pools, and one in Harare.",
    "The Hwange-to-Mana Pools and Mana Pools-to-Harare transfers require careful planning. Confirm the exact camps, airstrips, aircraft availability, flight schedules, baggage limits, and contingency arrangements before selling the itinerary.",
    "Mana Pools access and activities can be seasonal. Confirm camp opening dates, transport access, walking-safari arrangements, canoe availability, water conditions, and required guide authorisations for the requested travel dates.",
    "A light-aircraft transfer is often a practical option for remote safari camps but must not be promised until a supplier confirms it. Road alternatives may involve long travel times and changing seasonal conditions.",
    "Walking safaris and canoe excursions are subject to the selected camp's programme, qualified guides, safety requirements, seasonal conditions, and availability.",
    "Wildlife sightings cannot be guaranteed. Experiences vary with animal movements, season, weather, and habitat conditions.",
    "The itinerary may be customised for photography, walking, wildlife viewing, comfort level, or special occasions. Changes may affect duration and cost.",
    "Travellers should confirm medical, travel-insurance, evacuation, and other destination requirements with qualified providers before departure, particularly for remote safari areas.",
    "All services are subject to availability and the selected suppliers' booking, safety, and cancellation conditions.",
    "All prices below are indicative draft estimates in USD, not verified supplier quotes. Before publishing or selling, obtain current accommodation and meal rates, charter-flight quotations, private transfer costs, safari activity charges, park and concession fees, seasonal surcharges, taxes, insurance or evacuation-related costs where applicable, and calculate Shungu Africa's operating margin.",
  ],
  accommodation: {
    description:
      "Nine nights in carefully selected accommodation, with two nights in Victoria Falls, three nights in Hwange, three nights in Mana Pools, and one night in Harare. Property choices may range from premium lodges to luxury tented camps. Final selections depend on availability, season, comfort level, activity preferences, transfer access, and budget.",
    category: "Premium to luxury; tailor-made options available",
  },
  pricing: {
    currency: "USD",
    tiers: [
      {
        minPeople: 1,
        maxPeople: 1,
        pricePerPerson: 9500,
      },
      {
        minPeople: 2,
        maxPeople: 2,
        pricePerPerson: 7800,
      },
      {
        minPeople: 3,
        maxPeople: 3,
        pricePerPerson: 7200,
      },
      {
        minPeople: 4,
        maxPeople: 4,
        pricePerPerson: 6800,
      },
      {
        minPeople: 5,
        maxPeople: 8,
        pricePerPerson: 6400,
      },
    ],
  },
  cancellation: {
    policy:
      "The cancellation and amendment policy must be confirmed in the final quotation. Lodges, remote safari camps, charter operators, transfer providers, and activity suppliers may apply different deposit, payment, amendment, cancellation, and refund terms. Charter flights and remote camps may require advance payment and can have restrictive cancellation conditions. Clearly explain supplier-specific terms and any applicable weather or operational contingencies before collecting payment.",
  },
  faqs: [
    {
      question: "What makes this a private safari?",
      answer:
        "The trip is planned exclusively around your party's dates, preferences, accommodation choices, and route. Private transfers, dedicated guides, and exclusive game-drive vehicles must be requested and confirmed separately where the selected suppliers offer them.",
    },
    {
      question: "Are charter flights included?",
      answer:
        "Not automatically. The itinerary proposes charter connections where practical, particularly for remote safari camps. Each flight must be quoted and confirmed by a suitable operator before it can be included in the package price.",
    },
    {
      question: "Is Mana Pools open throughout the year?",
      answer:
        "Access and activity availability can vary by season, camp, road conditions, and operator. Confirm the requested travel dates, camp opening period, transport arrangements, and walking or canoe activity availability before booking.",
    },
    {
      question: "Can the safari be upgraded to ultra-luxury?",
      answer:
        "Yes. Accommodation, private guiding, vehicles, meals, and air transfers can be tailored to the requested standard, subject to availability. The final price must reflect the actual suppliers and services selected.",
    },
    {
      question: "Can families book this itinerary?",
      answer:
        "Potentially. Suitability depends on children's ages, the selected camps' minimum-age policies, walking-safari rules, canoe policies, and aircraft restrictions. Confirm all requirements before accepting a family booking.",
    },
    {
      question: "When is the best time to travel?",
      answer:
        "The best period depends on your priorities, including wildlife viewing, Victoria Falls water levels, walking activities, and camp opening dates. Request a date-specific itinerary so the route and activities can be matched to the conditions expected for your travel period.",
    },
    {
      question: "Can the itinerary start or finish in Harare?",
      answer:
        "Yes. The routing can be redesigned around Harare, Victoria Falls, or other suitable arrival and departure points. Flight schedules, camp access, transfer costs, and the number of nights will affect the revised quotation.",
    },
    {
      question: "Are all park fees, meals, and safari activities included?",
      answer:
        "Only when they are explicitly included in the confirmed quotation. Each lodge's meal plan and activity schedule differs, so the final proposal should itemise accommodation, transfers, flights, park fees, and safari activities clearly.",
    },
  ],
},
{
  slug: "cape-town-highlights",
  name: "Cape Town Highlights",
  category: "City Escape",
  image: "/images/packages/cape-town-highlights.jpg",
  badge: "Popular",

  description:
    "Discover the best of Cape Town on a memorable four-day escape combining spectacular coastal scenery, iconic landmarks, cultural experiences and the relaxed atmosphere of South Africa's Mother City. Explore the colourful streets of Bo-Kaap, take in panoramic views from Table Mountain when weather permits, discover the Cape Peninsula's dramatic coastline and enjoy time along the vibrant V&A Waterfront. With carefully planned accommodation, transfers and guided sightseeing, this package is ideal for first-time visitors, couples, solo travellers and guests adding Cape Town to a wider Southern African journey.",

  duration: {
    days: 4,
    nights: 3,
    label: "4 Days / 3 Nights",
  },

  destinations: [
    "Cape Town",
    "Table Mountain",
    "Bo-Kaap",
    "Cape Peninsula",
    "V&A Waterfront",
    "Camps Bay",
    "Cape Point",
  ],

  location: "Cape Town, Western Cape, South Africa",

  activities: [
    "cape-town-city-tour",
    "table-mountain-visit",
    "bo-kaap-cultural-tour",
    "cape-peninsula-tour",
    "cape-point-excursion",
    "v-and-a-waterfront",
    "airport-transfers",
  ],

  highlights: [
    "Discover Cape Town's historic centre and major city landmarks with a local guide.",
    "Enjoy panoramic views from Table Mountain, subject to weather and cableway operations.",
    "Explore the colourful Bo-Kaap neighbourhood and learn about its cultural heritage.",
    "Experience the spectacular coastal scenery of the Cape Peninsula.",
    "Visit Cape Point and the Cape of Good Hope area, subject to the confirmed tour route.",
    "Enjoy scenic stops around Camps Bay and the Atlantic coastline.",
    "Explore the restaurants, shops and waterfront atmosphere of the V&A Waterfront.",
    "Stay for three nights in selected Cape Town accommodation.",
    "Enjoy convenient airport transfers and scheduled sightseeing transport as specified in your quotation.",
    "Ideal for first-time visitors, couples, friends and travellers seeking a short city break.",
  ],

  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Cape Town & Waterfront Experience",
      description:
        "Arrive in Cape Town and meet your driver for a scheduled transfer to your accommodation. After check-in, enjoy time to relax before discovering the atmosphere of the V&A Waterfront, one of the city's best-known visitor areas. Explore the shops, restaurants and harbour surroundings at your own pace.",
      times: [
        {
          time: "Arrival",
          title: "Meet & greet at Cape Town International Airport",
          description:
            "Meet your driver at the agreed airport collection point. Transfer to your accommodation according to your confirmed flight details and transfer arrangements.",
        },
        {
          time: "Early afternoon",
          title: "Accommodation check-in",
          description:
            "Check in to your selected hotel or guesthouse and settle into your room. Early check-in depends on availability and may incur an additional charge.",
        },
        {
          time: "Afternoon",
          title: "Leisure time in Cape Town",
          description:
            "Enjoy free time to relax after your journey or explore nearby attractions independently. Lunch and personal purchases are at your own expense unless otherwise specified.",
        },
        {
          time: "Late afternoon",
          title: "V&A Waterfront visit",
          description:
            "Discover the waterfront precinct, harbour views, shops and restaurants. Optional activities and attractions can be arranged separately where available.",
        },
        {
          time: "Evening",
          title: "Dinner at leisure",
          description:
            "Enjoy dinner at a restaurant of your choice. Restaurant reservations and meals are not included unless stated in your final quotation.",
        },
      ],
      activities: ["airport-transfers", "v-and-a-waterfront"],
    },
    {
      day: "Day 2",
      title: "Table Mountain, Bo-Kaap & Cape Town City Tour",
      description:
        "Discover the character of Cape Town on a guided city sightseeing experience. Visit key landmarks, explore the colourful Bo-Kaap neighbourhood and enjoy views across the city and coastline. If weather conditions and cableway operations allow, take the Table Mountain cableway for a memorable perspective over Cape Town.",
      times: [
        {
          time: "Morning",
          title: "Breakfast at the accommodation",
          description:
            "Enjoy breakfast at your accommodation, subject to the confirmed meal plan, before meeting your guide or driver.",
        },
        {
          time: "Morning",
          title: "Table Mountain experience",
          description:
            "Visit the Table Mountain area and, when conditions permit, take the cableway to the summit. Cableway tickets, opening times and operating conditions must be checked before travel. If the cableway is unavailable, an alternative activity can be discussed.",
        },
        {
          time: "Late morning",
          title: "Bo-Kaap cultural exploration",
          description:
            "Explore Bo-Kaap's distinctive streets and colourful architecture while learning about the neighbourhood's Cape Malay heritage and history. Respect residential areas and local customs during the visit.",
        },
        {
          time: "Afternoon",
          title: "Historic city sightseeing",
          description:
            "Discover selected city landmarks and historic areas with your guide. The route may include Company's Garden, the city centre and other accessible attractions, depending on the confirmed tour.",
        },
        {
          time: "Evening",
          title: "Evening at leisure",
          description:
            "Return to your accommodation and enjoy the evening independently. Dinner, entertainment and optional experiences are at your own expense unless included in the quotation.",
        },
      ],
      activities: [
        "table-mountain-visit",
        "bo-kaap-cultural-tour",
        "cape-town-city-tour",
      ],
    },
    {
      day: "Day 3",
      title: "Cape Peninsula Scenic Excursion",
      description:
        "Experience the dramatic coastal scenery of the Cape Peninsula on a full-day excursion. Travel along scenic routes, enjoy viewpoints around the Atlantic coastline and visit the Cape Point and Cape of Good Hope area. Depending on the selected route and operating conditions, additional stops may include Hout Bay, Chapman's Peak Drive and the penguin colony at Boulders Beach.",
      times: [
        {
          time: "Morning",
          title: "Breakfast & departure",
          description:
            "Enjoy breakfast before departing with your guide for a scenic Cape Peninsula excursion. The exact route depends on road conditions, attraction opening times and the selected tour operator.",
        },
        {
          time: "Morning",
          title: "Atlantic coastline & scenic viewpoints",
          description:
            "Travel along the peninsula, enjoying coastal scenery and selected photo stops. Chapman's Peak Drive is included only when open and accessible on the confirmed route.",
        },
        {
          time: "Late morning",
          title: "Cape Point & Cape of Good Hope",
          description:
            "Explore the Cape Point area and the Cape of Good Hope section of Table Mountain National Park. Park admission, funicular tickets and other optional costs must be confirmed in the package inclusions.",
        },
        {
          time: "Afternoon",
          title: "Coastal villages & optional penguin viewing",
          description:
            "Depending on the selected route, visit a coastal village or Boulders Beach to see the African penguin colony. Entry fees and optional experiences are included only when explicitly stated in your quotation.",
        },
        {
          time: "Late afternoon",
          title: "Return via the scenic coast",
          description:
            "Return to Cape Town with scenic stops where time and conditions permit. Arrival time varies according to traffic and the final excursion route.",
        },
        {
          time: "Evening",
          title: "Dinner & overnight in Cape Town",
          description:
            "Enjoy your final evening in the city. Dinner and additional activities are arranged independently unless otherwise confirmed.",
        },
      ],
      activities: ["cape-peninsula-tour", "cape-point-excursion"],
    },
    {
      day: "Day 4",
      title: "Leisure Time & Departure",
      description:
        "Enjoy your final morning in Cape Town before checking out and transferring to Cape Town International Airport or another agreed departure point. Depending on your flight schedule, you may have time for breakfast, a short walk or some last-minute shopping.",
      times: [
        {
          time: "Morning",
          title: "Breakfast & free time",
          description:
            "Enjoy breakfast and any available free time at your accommodation or in the surrounding area. Activities depend on your departure schedule.",
        },
        {
          time: "Check-out",
          title: "Accommodation check-out",
          description:
            "Check out according to your accommodation's confirmed schedule. Late check-out and luggage storage are subject to availability and may incur additional charges.",
        },
        {
          time: "Scheduled departure",
          title: "Airport or onward transfer",
          description:
            "Meet your driver for the pre-arranged transfer to Cape Town International Airport or another agreed destination. Timing is coordinated with your confirmed departure details.",
        },
      ],
      activities: ["airport-transfers"],
    },
  ],

  included: [
    "Three nights of accommodation in Cape Town.",
    "Accommodation taxes and service charges where included in the confirmed rate.",
    "Scheduled arrival transfer from Cape Town International Airport.",
    "Scheduled departure transfer to Cape Town International Airport or another agreed departure point.",
    "Guided Cape Town city sightseeing tour.",
    "Bo-Kaap visit as part of the confirmed city tour.",
    "Cape Peninsula excursion with the stops specified in the confirmed itinerary.",
    "Scheduled sightseeing transport for the included excursions.",
    "Table Mountain cableway tickets only where explicitly included in the final quotation.",
    "Park admission, attraction tickets and optional transport tickets only where explicitly included in the final quotation.",
    "Pre-arrival itinerary coordination and booking assistance by Shungu Africa.",
    "Local assistance with confirmed package arrangements.",
  ],

  notIncluded: [
    "International or domestic flights unless specifically included in the quotation.",
    "South African visa fees or other applicable immigration charges.",
    "Travel insurance and emergency medical cover.",
    "Meals and drinks not explicitly stated as included.",
    "Lunches, dinners and personal refreshments.",
    "Table Mountain cableway tickets unless specifically included.",
    "Cape Point, Cape of Good Hope, Boulders Beach and other attraction admission fees unless specifically included.",
    "Optional boat trips, helicopter flights, wine tours and additional excursions.",
    "Tips and gratuities for guides, drivers, hotel staff and activity providers.",
    "Personal shopping, laundry, telephone charges and other personal expenses.",
    "Additional accommodation nights, room upgrades and late check-out charges.",
    "Private transfers or services not specified in the confirmed itinerary.",
    "Costs arising from flight changes, missed connections, weather disruptions or other unforeseen events.",
  ],

  information: [
    "This package is designed as a four-day, three-night short escape based in Cape Town, South Africa.",
    "The itinerary is a suggested schedule and may be adjusted to match flight arrival and departure times.",
    "Table Mountain cableway operations depend on weather, maintenance schedules and operational decisions. Summit access cannot be guaranteed.",
    "Cape Peninsula routes and sightseeing stops may change because of traffic, road closures, weather or attraction operating hours.",
    "The Chapman's Peak Drive section is subject to access and road conditions.",
    "Boulders Beach penguin viewing is subject to the confirmed route, attraction opening times and applicable admission fees.",
    "Accommodation is subject to availability. Any alternative property and material price difference must be agreed before confirmation.",
    "Breakfast and other meals are included only where stated in the confirmed quotation.",
    "Airport and sightseeing transfers are arranged according to the services explicitly listed in the booking confirmation.",
    "Guests should carry valid travel documents and check current South African entry requirements applicable to their nationality.",
    "Comfortable walking shoes, sun protection and a light jacket are recommended because coastal weather can change.",
    "Guests should advise Shungu Africa of mobility requirements, dietary needs and relevant activity restrictions before booking.",
    "Travel insurance is strongly recommended.",
    "All services remain subject to supplier terms, operational conditions and written booking confirmation.",
  ],

  accommodation: {
    description:
      "Three nights in comfortable, selected Cape Town accommodation. The property may be a hotel, boutique guesthouse or serviced accommodation, depending on availability, guest preferences and the approved budget. The final property, room configuration, meal plan, check-in arrangements and any upgrades are confirmed before booking.",
    category: "Mid-range",
  },

  pricing: {
    currency: "USD",
    tiers: [
      { minPeople: 1, maxPeople: 1, pricePerPerson: 1250 },
      { minPeople: 2, maxPeople: 2, pricePerPerson: 950 },
      { minPeople: 3, maxPeople: 3, pricePerPerson: 850 },
      { minPeople: 4, maxPeople: 4, pricePerPerson: 800 },
      { minPeople: 5, maxPeople: 12, pricePerPerson: 750 },
    ],
  },

  cancellation: {
    policy:
      "Cancellation and amendment terms depend on the accommodation, transport providers, guides and attraction operators included in the booking. Deposits, non-refundable accommodation rates, prepaid attraction tickets and supplier-specific cancellation deadlines may apply. The applicable cancellation schedule, deposit requirements, payment deadlines and amendment fees must be provided to the client before payment and confirmed in writing. Refunds, where applicable, are subject to supplier approval and deductions permitted under the agreed booking terms. Travel insurance is strongly recommended.",
  },

  faqs: [
    {
      question: "What is included in the Cape Town Highlights package?",
      answer:
        "The package is designed to include three nights of accommodation, guided city sightseeing, a Cape Peninsula excursion and scheduled transfers specified in your final quotation. Table Mountain tickets, park admissions, meals and other attraction fees should be checked against the confirmed inclusions before payment.",
    },
    {
      question: "Is this package suitable for first-time visitors?",
      answer:
        "Yes. The itinerary combines Cape Town's best-known city attractions with coastal scenery and free time, making it a convenient introduction for first-time visitors, couples, solo travellers and guests extending a Southern African holiday.",
    },
    {
      question: "Can I go up Table Mountain?",
      answer:
        "Yes, when the cableway is operating and weather conditions permit. Cableway tickets are included only if stated in the confirmed quotation. If access is unavailable, an alternative activity may be arranged.",
    },
    {
      question: "Is Cape Point included?",
      answer:
        "The package includes a Cape Peninsula excursion with the confirmed stops. Cape Point and Cape of Good Hope admission fees, funicular tickets and other optional charges must be verified in the final quotation.",
    },
    {
      question: "Will we visit the penguins at Boulders Beach?",
      answer:
        "Boulders Beach can be included where it fits the selected Cape Peninsula route and schedule. Admission fees and the specific stop should be confirmed before booking.",
    },
    {
      question: "Are meals included?",
      answer:
        "Meals are included only where stated in the confirmed quotation. Breakfast arrangements depend on the selected accommodation and meal plan. Lunches, dinners and personal refreshments are otherwise at your own expense.",
    },
    {
      question: "Can I upgrade the accommodation?",
      answer:
        "Yes. Boutique guesthouses, upper mid-range hotels and luxury properties can be requested. The final price depends on the property, room type, travel dates and availability.",
    },
    {
      question: "Can I add a Cape Winelands tour?",
      answer:
        "Yes. A Cape Winelands excursion, wine tasting, private city tour or other additional experience can be arranged subject to availability and an updated quotation.",
    },
    {
      question: "Can airport transfers be arranged around my flight?",
      answer:
        "Yes. Transfers can be coordinated around confirmed flight details. Private transfers, additional waiting time and schedule changes may affect the final price.",
    },
    {
      question: "When is the best time to visit Cape Town?",
      answer:
        "Cape Town can be visited throughout the year. Weather, wind and seasonal conditions affect Table Mountain access and coastal activities. Your travel dates and preferred experiences can help determine the most suitable itinerary.",
    },
    {
      question: "Can families with children book this package?",
      answer:
        "Yes, subject to suitable accommodation and activity arrangements. Families should provide children's ages when requesting a quotation so room configurations, transport and attraction requirements can be checked.",
    },
    {
      question: "Can I combine Cape Town with a safari in Zimbabwe?",
      answer:
        "Yes. Shungu Africa can help plan a wider Southern African itinerary combining Cape Town with Victoria Falls, Hwange National Park or other safari destinations, subject to flight schedules, travel dates and availability.",
    },
    {
      question: "How do I confirm my booking?",
      answer:
        "Contact Shungu Africa with your preferred travel dates, number of travellers, accommodation preferences and flight details. Your booking is confirmed once availability, final pricing, payment terms and supplier arrangements have been agreed in writing.",
    },
  ],
},
];
