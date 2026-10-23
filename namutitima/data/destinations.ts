export type DestinationThingToDo = {
  name: string;
  slug: string;
};

export type DestinationSeason = {
  period: string;
  dates: string;
  description: string;
  activities?: DestinationThingToDo[];
};

export type DestinationStay = {
  duration: string;
  description: string;
  activities?: DestinationThingToDo[];
};

export type DestinationAccommodation = {
  name: string;
  slug: string;
  category: "Luxury" | "Mid-range" | "Comfort & Value";
  description: string;
  propertyType?: string;
  highlights?: string[];
  priceFrom?: string;
};

export type DestinationItineraryTime = {
  time: string;
  title: string;
  description: string;
  activitySlug?: string;
};

export type DestinationItineraryDay = {
  day: string;
  title: string;
  description: string;
  location?: string;
  accommodation?: string;
  meals?: string;
  times?: DestinationItineraryTime[];
};

export type DestinationItinerary = {
  title: string;
  duration: string;
  description: string;
  outline: string[];
};

export type DestinationFirstVisitItinerary = {
  title: string;
  duration: string;
  description: string;
  itinerary: DestinationItineraryDay[];
};

export type DestinationFAQ = {
  question: string;
  answer: string;
};

export type Destination = {
  slug: string;
  name: string;
  country: string;
  region: string;

  tagline: string;

  heroImage: string;

  overview: {
    short: string;
    description: string;
  };

  whyVisit: {
    title: string;
    description: string;
  }[];

  highlights: string[];

  facts: {
    waterfallWidth: string;
    waterfallAltitude: string;
    averageDepth: string;
    deepestPoint: string;
    worldHeritage: string;
    worldHeritageType: string;
    river: string;
  };

  thingsToDo: DestinationThingToDo[];

  bestTimeToVisit: {
    overview: string;
    seasons: DestinationSeason[];
  };

  recommendedStay: DestinationStay[];

  whereToStay: {
    overview: string;
    accommodations: DestinationAccommodation[];
  };

  gettingThere: {
    overview: string;

    airport: {
      name: string;
      code: string;
      description: string;
    };

    road: string;

    airportTransfer: {
      slug: string;
      title: string;
      description: string;
      link: string;
    };

    localTransfers: {
      slug: string;
      title: string;
      description: string;
      link: string;
    };
  };

  travelInformation: {
    currency: {
      title: string;
      description: string;
    };

    language: {
      title: string;
      description: string;
    };

    weather: {
      title: string;
      description: string;
    };

    electricity: {
      title: string;
      description: string;
    };

    internet: {
      title: string;
      description: string;
    };

    visa: {
      title: string;
      description: string;
    };

    health: {
      title: string;
      description: string;
    };

    packing: {
      title: string;
      items: string[];
    };
  };

  sampleItineraries: DestinationItinerary[];
  firstVisitItinerary?: DestinationFirstVisitItinerary;

  destinationHighlights: {
    waterfall: string;
    river: string;
    wildlife: string;
    adventure: string;
    culture: string;
  };

  practicalTips: string[];

  faqs: DestinationFAQ[];

  relatedContent: {
    activities: string[];
    packages: string[];
    destinations: string[];
  };

  travelAsambe: {
    title: string;
    description: string;
    services: string[];
    cta: string;
  };

  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };

  /**
   * Existing fields used elsewhere in the site.
   * Keep these while we transition the destination pages.
   */
  location?: string;
  image?: string;
  description?: string;
  intro?: string;
  bestFor?: string[];
  activities?: string[];
  packages?: string[];
  practicalInfo?: {
    gettingThere?: string;
    stay?: string;
    season?: string;
  };
};

type DestinationOverviewData = {
  slug: string;
  name: string;
  country: string;
  region: string;
  heroImage: string;
  tagline: string;
  overview: Destination["overview"];
  highlights: string[];
  thingsToDo: DestinationThingToDo[];
  whyVisit: Destination["whyVisit"];
  bestTimeToVisit: Destination["bestTimeToVisit"];
  currency: string;
  languages: string;
  airport: {
    name: string;
    code: string;
  };
  travelTips: string[];
  firstVisitItinerary: DestinationFirstVisitItinerary;
};

const destinationImageBySlug: Record<string, string> = {
  "victoria-falls": "/images/optimized/destinations/victoria-falls.png",
  "cape-town": "/images/optimized/destinations/cape-town.webp",
  "kruger-national-park": "/images/optimized/destinations/kruger-national-park.png",
  "sossusvlei": "/images/optimized/destinations/sossuvlei.png",
  "etosha-national-park": "/images/optimized/destinations/etosha.png",
  "chobe-national-park": "/images/optimized/destinations/chobe-national-park.png",
  "okavango-delta": "/images/optimized/destinations/okavango-delta-optimized.webp",
  "swakopmund": "/images/optimized/destinations/swakopmund.png",
  "hwange-national-park": "/images/optimized/destinations/hwange-national-PARK.png",
  "great-zimbabwe": "/images/optimized/destinations/great-zimbabwe.png",
  "matobo-hills": "/images/optimized/destinations/matobo-hills.png",
  "lake-kariba": "/images/optimized/destinations/lake-kariba.png",
  "mana-pools-national-park": "/images/optimized/destinations/mana-pools.png",
};

function resolveDestinationImage(slug: string) {
  return destinationImageBySlug[slug] ?? "/images/destinations/destinations-hero.webp";
}

function createOverviewDestination(
  data: DestinationOverviewData,
): Destination {
  const { name, country, region } = data;
  const heroImage = resolveDestinationImage(data.slug);

  return {
    slug: data.slug,
    name,
    country,
    region,
    tagline: data.tagline,
    heroImage,
    overview: data.overview,
    whyVisit: data.whyVisit,
    highlights: data.highlights,
    facts: {
      waterfallWidth: "Not applicable to this destination",
      waterfallAltitude: "Not applicable to this destination",
      averageDepth: "Not applicable to this destination",
      deepestPoint: "Not applicable to this destination",
      worldHeritage:
        "UNESCO World Heritage status varies by site; confirm current details for the specific property.",
      worldHeritageType: "Varies by site",
      river: "Local rivers and waterways vary by location.",
    },
    thingsToDo: data.thingsToDo,
    bestTimeToVisit: data.bestTimeToVisit,
    recommendedStay: [],
    whereToStay: {
      overview:
        `Accommodation options in ${name} vary by region and travel style. Choose your base around the places and experiences on your itinerary.`,
      accommodations: [],
    },
    gettingThere: {
      overview: `International and regional flights connect travellers to ${name} and nearby gateways. Routes and onward transport depend on your itinerary.`,
      airport: {
        name: data.airport.name,
        code: data.airport.code,
        description: `${data.airport.name} serves as an access point for ${name}. Confirm flight availability and onward connections when planning your route.`,
      },
      road: `Road conditions and distances vary across ${name}. Plan driving routes in advance and check local conditions before departure.`,
      airportTransfer: {
        slug: `${data.slug}-airport-transfers`,
        title: `${name} airport transfers`,
        description:
          "Arrange airport transport in advance based on your arrival city and accommodation.",
        link: "/transfers",
      },
      localTransfers: {
        slug: `${data.slug}-local-transfers`,
        title: `${name} local transport`,
        description:
          "Local transport options vary by destination; confirm arrangements for each stop on your itinerary.",
        link: "/transfers",
      },
    },
    travelInformation: {
      currency: {
        title: "Currency",
        description: `The local currency is ${data.currency}. Check current exchange and payment options before travelling.`,
      },
      language: {
        title: "Languages",
        description: `Languages spoken include ${data.languages}.`,
      },
      weather: {
        title: "Weather",
        description:
          "Climate varies by region and season. Check local forecasts for each destination on your route.",
      },
      electricity: {
        title: "Electricity",
        description:
          "Plug types and power availability can vary. Check the requirements for your accommodation and bring a suitable travel adapter.",
      },
      internet: {
        title: "Internet",
        description:
          "Mobile and Wi-Fi coverage varies by location, especially outside major towns and cities.",
      },
      visa: {
        title: "Entry requirements",
        description:
          "Visa and entry requirements depend on your nationality and itinerary. Confirm current requirements with official sources before travel.",
      },
      health: {
        title: "Health",
        description:
          "Health advice varies by route and season. Consult a qualified travel health professional before departure.",
      },
      packing: {
        title: "Packing",
        items: [
          "Clothing suitable for the season and regions you will visit",
          "Comfortable walking shoes",
          "Sun protection",
          "Personal medication and travel documents",
        ],
      },
    },
    sampleItineraries: [],
    firstVisitItinerary: data.firstVisitItinerary,
    destinationHighlights: {
      waterfall: "Explore the country's distinctive natural landscapes",
      river: "Discover rivers, wetlands and coastal waterways",
      wildlife: "Experience wildlife in protected areas and reserves",
      adventure: "Choose outdoor adventures suited to your route",
      culture: "Learn about local communities, history and culture",
    },
    practicalTips: data.travelTips,
    faqs: [
      {
        question: `When is the best time to visit ${name}?`,
        answer: data.bestTimeToVisit.overview,
      },
      {
        question: "What should I check before travelling?",
        answer:
          "Confirm entry requirements, transport connections, seasonal conditions and health advice for your route before departure.",
      },
    ],
    relatedContent: {
      activities: [],
      packages: [],
      destinations: [],
    },
    travelAsambe: {
      title: `Plan a journey in ${name}`,
      description: `Explore ${name} with an itinerary planned around your interests, timing and travel style.`,
      services: [
        "Itinerary planning",
        "Accommodation coordination",
        "Transport and transfer arrangements",
        "Local experiences",
      ],
      cta: "Enquire about your journey",
    },
    location: name,
    image: heroImage,
    description: data.overview.short,
    intro: data.tagline,
    bestFor: ["Couples", "Families", "Wildlife travellers", "Adventure travellers"],
    activities: [],
    packages: [],
    practicalInfo: {
      gettingThere: `Plan international arrival and onward transport around the regions you intend to visit in ${name}.`,
      stay: `Allow enough time for travel between regions in ${name}; distances can be substantial.`,
      season: data.bestTimeToVisit.overview,
    },
  };
}

const destinationEntries: Destination[] = [
  {
    slug: "victoria-falls",

    name: "Victoria Falls",

    country: "Zimbabwe",

    region: "Matabeleland North",

    tagline:
      "The Smoke that Thunders — where the Zambezi River meets one of Africa's most spectacular natural landmarks.",

    heroImage: "/images/optimized/destinations/victoria-falls.png",

    overview: {
      short:
        "Home to Mosi-oa-Tunya, the spectacular waterfall on the Zambezi River.",

      description:
        "Victoria Falls is a town in north-western Zimbabwe and one of Southern Africa's best-known travel destinations. At its centre is Mosi-oa-Tunya, meaning 'The Smoke that Thunders', where the Zambezi River plunges through a series of basalt gorges to create a vast curtain of falling water, spray and mist. The Falls form part of the transboundary Mosi-oa-Tunya / Victoria Falls UNESCO World Heritage property shared by Zimbabwe and Zambia. Beyond the waterfall itself, Victoria Falls offers access to the Zambezi River, wildlife, adventure activities, cultural experiences, scenic excursions and a wide range of accommodation.",
    },

    whyVisit: [
      {
        title: "See Mosi-oa-Tunya",
        description:
          "Walk through the rainforest and explore viewpoints overlooking Victoria Falls, where the Zambezi River plunges into a series of dramatic basalt gorges.",
      },

      {
        title: "Experience the Zambezi",
        description:
          "The Zambezi River is central to the Victoria Falls experience, offering opportunities for sunset cruises, fishing, river adventures and scenic exploration.",
      },

      {
        title: "Add Adventure",
        description:
          "Victoria Falls offers experiences for different levels of adventure, from relaxed sightseeing and river cruises to rafting and other adrenaline-filled activities.",
      },

      {
        title: "Discover Wildlife",
        description:
          "The surrounding protected areas provide opportunities to experience Zimbabwean wildlife, while nearby Hwange National Park makes it easy to extend a Victoria Falls stay into a safari.",
      },

      {
        title: "Explore Beyond the Falls",
        description:
          "Victoria Falls is more than a single attraction. A stay can include river experiences, wildlife, local culture, dining, markets and excursions around the wider destination.",
      },

      {
        title: "Build Your Own Journey",
        description:
          "Stay for a short escape or use Victoria Falls as the starting point for a longer Southern African journey combining Zimbabwe, Zambia and Botswana.",
      },
    ],

    highlights: [
      "Mosi-oa-Tunya / Victoria Falls",
      "Victoria Falls Rainforest",
      "Zambezi River",
      "Victoria Falls National Park",
      "Zambezi National Park",
      "Zambezi sunset cruises",
      "Wildlife experiences",
      "Adventure activities",
      "Cultural experiences",
    ],

    facts: {
      waterfallWidth: "Approximately 1,708 metres",

      waterfallAltitude:
        "Approximately 915 metres above mean sea level",

      averageDepth: "Approximately 100 metres",

      deepestPoint: "Approximately 108 metres",

      worldHeritage:
        "UNESCO World Heritage Site since 1989",

      worldHeritageType:
        "Transboundary natural World Heritage property shared by Zimbabwe and Zambia",

      river: "Zambezi River",
    },

    thingsToDo: [
      {
        name: "Guided Victoria Falls Tour",
        slug: "guided-victoria-falls-tour",
      },
      {
        name: "Zambezi Sunset Cruise",
        slug: "zambezi-sunset-cruise",
      },
      {
        name: "Zambezi White-Water Rafting",
        slug: "zambezi-white-water-rafting",
      },
      {
        name: "Victoria Falls Helicopter Scenic Flight",
        slug: "victoria-falls-helicopter-scenic-flight",
      },
      {
        name: "Victoria Falls Bungee Jumping",
        slug: "victoria-falls-bungee-jumping",
      },
      {
        name: "Victoria Falls Gorge Swing & Zipline",
        slug: "victoria-falls-gorge-swing-zipline",
      },
    ],

    bestTimeToVisit: {
      overview:
        "Victoria Falls changes throughout the year as seasonal rainfall affects the volume of water flowing down the Zambezi. There is no single best time for every traveller. Higher water levels create heavier spray and a powerful spectacle, while the drier period can provide clearer views of the individual Falls and surrounding gorge.",

      seasons: [
        {
          period: "Green Season",
          dates: "January – March",
          description:
            "The wetter part of the year brings greener landscapes and increasing river levels. Rainfall can be variable, so travellers should allow flexibility when planning outdoor activities.",

          activities: [
            {
              name: "Guided Victoria Falls Tour",
              slug: "guided-victoria-falls-tour",
            },

            {
              name: "Zambezi Sunset Cruise",
              slug: "zambezi-sunset-cruise",
            },
          ],
        },

        {
          period: "High Water",
          dates: "April – May",
          description:
            "The Zambezi typically reaches its highest levels after the rainy season. The Falls can produce substantial spray and mist, creating a dramatic high-water experience. The spray can also reduce visibility from some viewpoints.",

          activities: [
            {
              name: "Guided Victoria Falls Tour",
              slug: "guided-victoria-falls-tour",
            },

            {
              name: "Zambezi Sunset Cruise",
              slug: "zambezi-sunset-cruise",
            },
          ],
        },

        {
          period: "Dry & Cooler Season",
          dates: "June – August",
          description:
            "Drier conditions and cooler temperatures generally make this a comfortable period for exploring Victoria Falls and combining sightseeing with river and outdoor experiences. Water levels gradually decrease from their seasonal peak.",

          activities: [
            {
              name: "Guided Victoria Falls Tour",
              slug: "guided-victoria-falls-tour",
            },

            {
              name: "Zambezi Sunset Cruise",
              slug: "zambezi-sunset-cruise",
            },
          ],
        },

        {
          period: "Hot & Dry Season",
          dates: "September – October",
          description:
            "The weather becomes hotter and drier, while water levels continue to decline. Lower water can reveal more of the underlying gorge and Falls structure, although some sections may become less powerful later in the dry season.",

          activities: [
            {
              name: "Zambezi Sunset Cruise",
              slug: "zambezi-sunset-cruise",
            },

            {
              name: "Victoria Falls Gorge Swing & Zipline",
              slug: "victoria-falls-gorge-swing-zipline",
            },
          ],
        },

        {
          period: "Early Rains",
          dates: "November – December",
          description:
            "Temperatures remain warm and the first seasonal rains can begin to transform the landscape. Conditions may change quickly as the destination moves towards the wetter season.",

          activities: [
            {
              name: "Guided Victoria Falls Tour",
              slug: "guided-victoria-falls-tour",
            },

            {
              name: "Zambezi Sunset Cruise",
              slug: "zambezi-sunset-cruise",
            },
          ],
        },
      ],
    },

    recommendedStay: [
      {
        duration: "2 nights",
        description:
          "A short Victoria Falls escape that gives you enough time to visit the Falls and experience the Zambezi through a second activity.",

        activities: [
          {
            name: "Guided Victoria Falls Tour",
            slug: "guided-victoria-falls-tour",
          },

          {
            name: "Zambezi Sunset Cruise",
            slug: "zambezi-sunset-cruise",
          },
        ],
      },

      {
        duration: "3 nights",
        description:
          "A balanced stay with time for the Falls, a Zambezi experience and another activity or excursion without making the trip feel rushed.",

        activities: [
          {
            name: "Guided Victoria Falls Tour",
            slug: "guided-victoria-falls-tour",
          },

          {
            name: "Zambezi Sunset Cruise",
            slug: "zambezi-sunset-cruise",
          },

          {
            name: "Victoria Falls Gorge Swing & Zipline",
            slug: "victoria-falls-gorge-swing-zipline",
          },
        ],
      },

      {
        duration: "4–5 nights",
        description:
          "A longer stay gives you time to combine the Falls with adventure, wildlife, river experiences and a wider excursion while keeping a comfortable pace.",

        activities: [
          {
            name: "Guided Victoria Falls Tour",
            slug: "guided-victoria-falls-tour",
          },

          {
            name: "Zambezi Sunset Cruise",
            slug: "zambezi-sunset-cruise",
          },

          {
            name: "Victoria Falls Gorge Swing & Zipline",
            slug: "victoria-falls-gorge-swing-zipline",
          },

          {
            name: "Zambezi White-Water Rafting",
            slug: "zambezi-white-water-rafting",
          },
        ],
      },
    ],

    whereToStay: {
      overview:
        "Victoria Falls has accommodation ranging from historic luxury hotels and premium lodges to comfortable mid-range properties and good-value stays. The right choice depends on your preferred level of comfort, location and the type of experience you want from your trip.",

      accommodations: [
        {
          name: "The Victoria Falls Hotel",
          slug: "victoria-falls-hotel",
          category: "Luxury",
          description:
            "A historic five-star hotel in the heart of Victoria Falls, established in 1904 and known for its classic Edwardian character, gardens and location close to the Falls.",

          propertyType: "Historic luxury hotel",

          highlights: [
            "Five-star hotel",
            "Established in 1904",
            "Close to Victoria Falls",
            "Historic Edwardian character",
            "Multiple room and suite categories",
          ],

          // Keep the current rate on the accommodation record itself.
          // Rates change and should be updated independently.
          priceFrom: "From USD 664 per night",
        },
      ],
    },

    gettingThere: {
      overview:
        "Victoria Falls is accessible by air and road. The town is served by Victoria Falls International Airport and is connected by road to other destinations in Zimbabwe and neighbouring countries.",

      airport: {
        name: "Victoria Falls International Airport",
        code: "VFA",

        description:
          "Victoria Falls International Airport is the main air gateway for visitors arriving in the Victoria Falls area. From the airport, travellers can continue by road to hotels, lodges and other accommodation in and around Victoria Falls.",
      },

      road:
        "Victoria Falls can be reached by road from other destinations in Zimbabwe and from neighbouring countries. Road travel is particularly useful when combining Victoria Falls with Hwange National Park or continuing towards other regional destinations.",

      airportTransfer: {
        slug: "victoria-falls-airport-transfer",
        title: "Airport transfers",
        description:
          "Arrange a transfer from Victoria Falls International Airport to your hotel, lodge or other accommodation.",

        link:
          "/enquire?service=airport-transfer&destination=victoria-falls",
      },

      localTransfers: {
        slug: "victoria-falls-local-transfers",
        title: "Local transfers",
        description:
          "Arrange transfers between your accommodation, activities and other points of interest around Victoria Falls.",

        link:
          "/enquire?service=local-transfers&destination=victoria-falls",
      },
    },

    travelInformation: {
      currency: {
        title: "Currency",

        description:
          "The United States Dollar (USD) is widely used in Zimbabwe's tourism sector. Zimbabwe also has the Zimbabwe Gold (ZiG) as its local currency. Currency acceptance and payment options can vary between businesses, so travellers should confirm payment arrangements when booking.",
      },

      language: {
        title: "Language",

        description:
          "English is widely used in tourism and is commonly spoken in Victoria Falls. Shona, Ndebele and other Zimbabwean languages are also spoken across the country.",
      },

      weather: {
        title: "Weather",

        description:
          "Victoria Falls has distinct wet and dry periods. The landscape, river levels and appearance of the Falls change through the year, so the most suitable travel period depends on whether you prioritise high water and dramatic spray, clearer views, cooler weather or wildlife experiences.",
      },

      electricity: {
        title: "Electricity",

        description:
          "Zimbabwe uses approximately 220–240V electricity and Type G power outlets. Travellers should bring a suitable travel adaptor for their devices.",
      },

      internet: {
        title: "Internet",

        description:
          "Wi-Fi and mobile connectivity are available across much of Victoria Falls, particularly at hotels, lodges and established tourism businesses. Connection quality can vary by property and location.",
      },

      visa: {
        title: "Visa",

        description:
          "Zimbabwe entry and visa requirements depend on nationality and travel circumstances. Travellers should check the latest requirements with the relevant Zimbabwe immigration authorities before departure.",
      },

      health: {
        title: "Health",

        description:
          "Travellers should check current health advice for Zimbabwe before departure and discuss any destination-specific precautions with a qualified healthcare professional. Travel insurance with appropriate medical and evacuation cover is recommended.",
      },

      packing: {
        title: "What to pack",

        items: [
          "Comfortable walking shoes",
          "Lightweight clothing",
          "Warm layer for cooler mornings and evenings",
          "Sun protection",
          "Sunscreen",
          "Insect repellent",
          "Waterproof protection for cameras and phones",
          "Swimwear",
          "Travel adaptor",
          "Reusable water bottle",
        ],
      },
    },

    sampleItineraries: [
      {
        title: "Victoria Falls Essentials",
        duration: "3 days / 2 nights",

        description:
          "A simple introduction to Victoria Falls combining the main waterfall experience with a relaxed Zambezi sunset cruise.",

        outline: [
          "Arrive in Victoria Falls and settle into your accommodation",
          "Explore Victoria Falls and the surrounding rainforest viewpoints",
          "Enjoy a Zambezi sunset cruise",
          "Depart Victoria Falls",
        ],
      },

      {
        title: "Victoria Falls Adventure Escape",
        duration: "4 days / 3 nights",

        description:
          "A balanced Victoria Falls stay combining the waterfall, river and an additional adventure experience.",

        outline: [
          "Arrive and settle into Victoria Falls",
          "Explore Victoria Falls",
          "Enjoy a Zambezi sunset cruise",
          "Choose an adventure or scenic experience",
          "Depart Victoria Falls",
        ],
      },

      {
        title: "Victoria Falls & Hwange",
        duration: "5–6 days",

        description:
          "Combine the Falls with a Zimbabwe safari for a journey that brings together natural wonder, river experiences and wildlife.",

        outline: [
          "Arrive in Victoria Falls",
          "Explore Victoria Falls",
          "Experience the Zambezi",
          "Travel towards Hwange National Park",
          "Enjoy a safari experience in Hwange",
          "Return or continue your journey",
        ],
      },

      {
        title: "Victoria Falls & Chobe",
        duration: "4–5 days",

        description:
          "Combine Victoria Falls with a cross-border wildlife experience in Botswana's Chobe region.",

        outline: [
          "Arrive in Victoria Falls",
          "Explore Victoria Falls",
          "Enjoy a Zambezi River experience",
          "Travel towards Kasane and Chobe",
          "Experience Chobe by game drive or river safari",
          "Return or continue your journey",
        ],
      },
    ],

    firstVisitItinerary: {
      title: "Victoria Falls first visit",
      duration: "4 days / 3 nights",
      description:
        "A relaxed introduction to the Falls, with time for the main rainforest walk, a river cruise and an optional adventure.",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrive in Victoria Falls",
          description:
            "Arrive, transfer to your accommodation and take time to settle in. Keep the day light after your journey and explore the nearby town at your own pace.",
          location: "Victoria Falls town",
          accommodation: "Stay in or near Victoria Falls town.",
          meals: "Meals are arranged independently unless confirmed with your accommodation.",
          times: [
            {
              time: "On arrival",
              title: "Transfer and check-in",
              description:
                "Arrange an airport or road transfer in advance and confirm check-in arrangements with your accommodation.",
            },
            {
              time: "Late afternoon",
              title: "Explore at leisure",
              description:
                "Get oriented in town, visit local shops or relax before the next day's sightseeing.",
            },
          ],
        },
        {
          day: "Day 2",
          title: "Discover Victoria Falls",
          description:
            "Spend the morning exploring the rainforest paths and viewpoints. Water levels and spray vary by season, so allow time to stop and enjoy the views.",
          location: "Victoria Falls Rainforest, Zimbabwe",
          meals: "Breakfast and lunch arrangements depend on your accommodation and plans.",
          times: [
            {
              time: "Morning",
              title: "Guided rainforest and Falls visit",
              description:
                "Walk designated paths, visit viewpoints and learn about the Falls with a local guide. Wear comfortable shoes and protect cameras from spray.",
              activitySlug: "guided-victoria-falls-tour",
            },
            {
              time: "Afternoon",
              title: "Lunch and free time",
              description:
                "Return towards town for lunch and a relaxed afternoon.",
            },
          ],
        },
        {
          day: "Day 3",
          title: "Enjoy the Zambezi River",
          description:
            "Take a slower day after the Falls visit, then head out for a sunset experience on the Zambezi.",
          location: "Victoria Falls and the Zambezi River",
          meals: "Meals are arranged independently unless your cruise booking says otherwise.",
          times: [
            {
              time: "Morning",
              title: "Free time in Victoria Falls",
              description:
                "Relax, browse local craft shops or choose an optional activity that fits your interests and budget.",
            },
            {
              time: "Late afternoon",
              title: "Sunset on the Zambezi",
              description:
                "Join a scheduled river cruise, subject to operator availability and river conditions. Wildlife sightings are not guaranteed.",
              activitySlug: "zambezi-sunset-cruise",
            },
          ],
        },
        {
          day: "Day 4",
          title: "Optional experience and departure",
          description:
            "If your departure time allows, choose one final experience before continuing your journey.",
          location: "Victoria Falls",
          meals: "Confirm breakfast and checkout arrangements with your accommodation.",
          times: [
            {
              time: "Morning",
              title: "Optional scenic or adventure activity",
              description:
                "Consider a scenic flight or another activity, subject to availability, safety requirements and your flight schedule.",
              activitySlug: "victoria-falls-helicopter-scenic-flight",
            },
            {
              time: "Departure",
              title: "Transfer to your next stop",
              description:
                "Allow enough time for your pre-arranged airport or road transfer.",
            },
          ],
        },
      ],
    },

    destinationHighlights: {
      waterfall:
        "Mosi-oa-Tunya / Victoria Falls is the defining attraction of the destination and forms part of a UNESCO World Heritage property shared by Zimbabwe and Zambia.",

      river:
        "The Zambezi River shapes the destination, providing scenery and opportunities for sunset cruises, fishing and other river-based experiences.",

      wildlife:
        "Wildlife experiences are available around Victoria Falls, while nearby protected areas and Hwange National Park provide opportunities to extend a visit into a dedicated safari.",

      adventure:
        "Victoria Falls offers a broad range of adventure experiences, from river activities and canopy experiences to rafting, bungee jumping and scenic flights.",

      culture:
        "The Victoria Falls area offers opportunities to learn about local communities, Zimbabwean culture and the history surrounding the Zambezi and the Falls.",
    },

    practicalTips: [
      "Allow at least two nights if the Falls are a main reason for your visit.",
      "Wear comfortable walking shoes when exploring the Falls viewpoints and rainforest.",
      "Protect cameras and phones from spray, particularly during higher-water periods.",
      "Carry sun protection and stay hydrated during warmer months.",
      "Choose activities according to seasonal conditions and the operator's current schedule.",
      "Book accommodation, transfers and popular activities ahead of busy travel periods.",
      "If combining Victoria Falls with Hwange or Chobe, allow enough time for road transfers and border formalities where applicable.",
      "Check current visa, entry, health and travel requirements before departure.",
    ],

    faqs: [
      {
        question: "Where is Victoria Falls?",

        answer:
          "Victoria Falls is in north-western Zimbabwe on the Zambezi River, close to the border with Zambia. The waterfall forms part of the transboundary Mosi-oa-Tunya / Victoria Falls UNESCO World Heritage property.",
      },

      {
        question: "What is Victoria Falls called locally?",

        answer:
          "The Falls are also known as Mosi-oa-Tunya, commonly translated as 'The Smoke that Thunders'. The name refers to the spray, mist and sound created as the Zambezi River plunges into the gorges below.",
      },

      {
        question: "How wide is Victoria Falls?",

        answer:
          "The waterfall spans approximately 1,708 metres. UNESCO describes Mosi-oa-Tunya / Victoria Falls as the world's greatest sheet of falling water.",
      },

      {
        question: "How high is Victoria Falls?",

        answer:
          "The waterfall reaches a maximum depth of approximately 108 metres, with the main sections ranging from about 61 to 99 metres.",
      },

      {
        question: "How long should I stay in Victoria Falls?",

        answer:
          "Two nights can work for a short visit focused on the Falls and one additional experience. Three nights gives you more flexibility, while four or more nights works well if you want to add several activities or combine Victoria Falls with a safari.",
      },

      {
        question: "When is the best time to visit Victoria Falls?",

        answer:
          "There is no single best period for every traveller. Higher water levels generally create more spray and a dramatic spectacle, while lower water levels can provide clearer views of the individual Falls and gorge. Weather and wildlife conditions also vary throughout the year.",
      },

      {
        question: "What can I do in Victoria Falls besides seeing the waterfall?",

        answer:
          "You can experience the Zambezi River through activities such as sunset cruises and fishing, take part in adventure experiences, explore the surrounding wildlife areas, enjoy scenic flights and discover local culture and dining.",
      },

      {
        question: "Can I combine Victoria Falls with Hwange National Park?",

        answer:
          "Yes. Victoria Falls and Hwange make a natural Zimbabwe combination, allowing travellers to pair the waterfall and Zambezi with a dedicated wildlife and safari experience.",
      },

      {
        question: "Can I visit Chobe National Park from Victoria Falls?",

        answer:
          "Yes. Chobe National Park in Botswana is commonly combined with Victoria Falls, particularly for travellers interested in adding a wildlife and river-safari experience to their trip.",
      },

      {
        question: "Can I see Victoria Falls from both Zimbabwe and Zambia?",

        answer:
          "Yes. The Victoria Falls World Heritage property is shared by Zimbabwe and Zambia, and the Falls can be viewed from both sides of the Zambezi.",
      },
    ],

    relatedContent: {
      activities: [
        "guided-victoria-falls-tour",
        "zambezi-sunset-cruise",
        "zambezi-white-water-rafting",
        "victoria-falls-helicopter-scenic-flight",
        "victoria-falls-bungee-jumping",
        "victoria-falls-gorge-swing-zipline",
      ],

      packages: [
        "victoria-falls-essentials",
        "victoria-falls-hwange-chobe",
      ],

      destinations: [
        "hwange",
        "chobe",
        "livingstone",
      ],
    },

    travelAsambe: {
      title: "Plan your Victoria Falls experience",

      description:
        "Whether you are visiting for the Falls, the Zambezi, adventure or wildlife, Travel Asambe can help bring your accommodation, activities, transfers and wider itinerary together.",

      services: [
        "Accommodation",
        "Activities",
        "Airport transfers",
        "Local transfers",
        "Tours",
        "Multi-day itineraries",
      ],

      cta: "Plan My Trip",
    },

    seo: {
      title:
        "Victoria Falls Zimbabwe | Things to Do, Tours & Travel | Travel Asambe",

      description:
        "Explore Victoria Falls, Zimbabwe. Discover the Falls, Zambezi River, adventure activities, wildlife, accommodation and multi-day travel experiences with Travel Asambe.",

      keywords: [
        "Victoria Falls",
        "Victoria Falls Zimbabwe",
        "Victoria Falls tours",
        "Victoria Falls travel",
        "things to do in Victoria Falls",
        "Victoria Falls activities",
        "Victoria Falls accommodation",
        "Victoria Falls safari",
        "Zambezi River",
        "Victoria Falls holidays",
        "Victoria Falls itinerary",
        "Victoria Falls and Hwange",
        "Victoria Falls and Chobe",
      ],
    },

    /**
     * Existing fields used elsewhere in the site.
     */
    location: "Victoria Falls, Zimbabwe",

    image: "/images/optimized/destinations/victoria-falls.png",

    description:
      "Discover Victoria Falls, the Smoke that Thunders, from the Falls and Zambezi River to adventure, wildlife, accommodation and unforgettable Southern African experiences.",

    intro:
      "Experience Victoria Falls through the waterfall, the Zambezi, adventure, wildlife and carefully planned travel experiences.",

    bestFor: [
      "First-time visitors",
      "Couples",
      "Families",
      "Adventure travellers",
      "Safari travellers",
      "Luxury travellers",
    ],

    activities: [
      "guided-victoria-falls-tour",
      "zambezi-sunset-cruise",
      "zambezi-white-water-rafting",
      "victoria-falls-helicopter-scenic-flight",
      "victoria-falls-bungee-jumping",
      "victoria-falls-gorge-swing-zipline",
    ],

    packages: [
      "victoria-falls-essentials",
      "victoria-falls-hwange-chobe",
    ],

    practicalInfo: {
      gettingThere:
        "Fly into Victoria Falls International Airport or travel by road from other destinations in Zimbabwe and neighbouring countries.",

      stay:
        "A 2–3 night stay works well for a first visit, while 4–5 nights allows more time for adventure, wildlife and river experiences.",

      season:
        "Victoria Falls changes throughout the year as Zambezi water levels and weather conditions vary. Higher water brings more spray, while lower water can provide clearer views of the Falls and gorge.",
    },
  },
  createOverviewDestination({
    slug: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    region: "Western Cape",
    heroImage: "/images/optimized/destinations/cape-town.webp",
    tagline:
      "Discover Cape Town's mountain scenery, Atlantic coastline, neighbourhoods and food culture.",
    overview: {
      short:
        "Explore a vibrant coastal city framed by Table Mountain and the Atlantic Ocean.",
      description:
        "Cape Town combines city experiences with dramatic natural scenery. Visitors can explore Table Mountain, the V&A Waterfront, the Cape Peninsula, beaches and nearby wine regions. Weather can change quickly around the mountain and coast, so allow flexibility for outdoor plans.",
    },
    highlights: [
      "Table Mountain and its surrounding trails",
      "The V&A Waterfront and city centre",
      "Cape Peninsula and coastal viewpoints",
      "Beaches, food and local culture",
    ],
    thingsToDo: [
      { name: "Table Mountain Cableway Experience", slug: "table-mountain-cableway-experience" },
      { name: "Cape Peninsula Full-Day Tour", slug: "cape-peninsula-full-day-tour" },
      { name: "Robben Island Guided Heritage Tour", slug: "robben-island-guided-tour" },
      { name: "Cape Town City & Bo-Kaap Cultural Tour", slug: "cape-town-city-and-bo-kaap-tour" },
      { name: "Cape Winelands Wine Tasting Tour", slug: "cape-winelands-wine-tasting-tour" },
      { name: "Kirstenbosch Botanical Garden Tour", slug: "kirstenbosch-botanical-garden-tour" },
    ],
    whyVisit: [
      {
        title: "Enjoy mountain and ocean scenery",
        description:
          "The city's position between Table Mountain and the Atlantic coast makes it easy to pair urban exploring with time outdoors.",
      },
      {
        title: "Explore the Cape Peninsula",
        description:
          "Plan a day around coastal viewpoints, beaches and the communities of the Cape Peninsula.",
      },
      {
        title: "Experience a diverse city",
        description:
          "Cape Town offers museums, neighbourhoods, markets and dining shaped by a range of local cultures.",
      },
    ],
    bestTimeToVisit: {
      overview:
        "Cape Town has a Mediterranean climate, with warm, drier summers and cooler, wetter winters. Conditions can vary, especially on Table Mountain and along the coast.",
      seasons: [
        {
          period: "Summer",
          dates: "November – March",
          description:
            "Warm, generally drier weather is popular for beaches and outdoor activities. Book well ahead during busy holiday periods.",
        },
        {
          period: "Autumn and Spring",
          dates: "March – May and September – November",
          description:
            "Shoulder seasons can bring comfortable temperatures for sightseeing, though weather remains changeable.",
        },
        {
          period: "Winter",
          dates: "June – August",
          description:
            "Expect cooler temperatures and more rain, with occasional clear days and quieter visitor periods.",
        },
      ],
    },
    currency: "South African rand (ZAR)",
    languages: "English, isiXhosa, Afrikaans and other South African languages",
    airport: {
      name: "Cape Town International Airport",
      code: "CPT",
    },
    travelTips: [
      "Check weather and cableway operating updates before planning a Table Mountain visit.",
      "Allow extra time for road journeys during peak traffic and busy holiday periods.",
      "Use reputable local transport and check current safety advice for areas you plan to visit.",
    ],
    firstVisitItinerary: {
      title: "Cape Town first visit",
      duration: "5 days / 4 nights",
      description:
        "A first-timer's mix of mountain and city sights, a full Cape Peninsula day, heritage and time to explore at a comfortable pace.",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrive and settle into Cape Town",
          description:
            "Arrive, transfer to your accommodation and keep the first day flexible. Explore nearby areas only if you have time and energy after your journey.",
          location: "Cape Town",
          accommodation: "Stay in a convenient city or waterfront base.",
          meals: "Meals are arranged independently unless confirmed with your accommodation.",
          times: [
            {
              time: "On arrival",
              title: "Transfer and check-in",
              description:
                "Arrange airport transport and confirm check-in details before travel.",
            },
            {
              time: "Late afternoon",
              title: "Easy first look at the city",
              description:
                "Take a gentle walk around the V&A Waterfront or your neighbourhood.",
            },
          ],
        },
        {
          day: "Day 2",
          title: "Table Mountain and the city",
          description:
            "Plan your mountain visit around the weather and cableway operating status. Keep an alternative city activity in mind if conditions change.",
          location: "Table Mountain and Cape Town",
          meals: "Plan meals around your sightseeing schedule.",
          times: [
            {
              time: "Morning",
              title: "Visit Table Mountain",
              description:
                "Take the cableway or choose a suitable guided visit when weather and operations allow.",
              activitySlug: "table-mountain-cableway-experience",
            },
            {
              time: "Afternoon",
              title: "Explore the city",
              description:
                "Return to the city centre for museums, local neighbourhoods or a relaxed meal.",
            },
          ],
        },
        {
          day: "Day 3",
          title: "Explore the Cape Peninsula",
          description:
            "Set aside a full day for the peninsula. Driving times, stops and access can vary, so confirm the route with your operator.",
          location: "Cape Peninsula",
          meals: "Confirm whether meals or stops are included with your tour.",
          times: [
            {
              time: "Full day",
              title: "Cape Peninsula excursion",
              description:
                "Visit coastal viewpoints and selected stops on a guided day tour.",
              activitySlug: "cape-peninsula-full-day-tour",
            },
          ],
        },
        {
          day: "Day 4",
          title: "Choose a heritage experience",
          description:
            "Use the day for one of Cape Town's major heritage experiences. Book timed-entry activities ahead where required.",
          location: "Cape Town",
          meals: "Meals are arranged independently unless included in a confirmed tour.",
          times: [
            {
              time: "Morning or afternoon",
              title: "Robben Island visit",
              description:
                "Take a guided heritage visit, subject to ferry schedules, weather and ticket availability.",
              activitySlug: "robben-island-guided-tour",
            },
            {
              time: "Alternative",
              title: "City and Bo-Kaap tour",
              description:
                "If ferry plans do not suit, explore city history and Bo-Kaap with a local guide.",
              activitySlug: "cape-town-city-and-bo-kaap-tour",
            },
          ],
        },
        {
          day: "Day 5",
          title: "A relaxed final morning",
          description:
            "Choose a garden visit or keep the morning free, depending on your departure time.",
          location: "Cape Town",
          meals: "Confirm breakfast and checkout with your accommodation.",
          times: [
            {
              time: "Morning",
              title: "Visit Kirstenbosch",
              description:
                "Explore the botanical garden if your schedule allows, then depart for the airport.",
              activitySlug: "kirstenbosch-botanical-garden-tour",
            },
          ],
        },
      ],
    },
  }),
  createOverviewDestination({
    slug: "kruger-national-park",
    name: "Kruger National Park",
    country: "South Africa",
    region: "Limpopo and Mpumalanga",
    heroImage: "/images/activities/kruger-national-park-guided-game-drive.jpg",
    tagline:
      "Plan a wildlife journey through one of Southern Africa's best-known national parks.",
    overview: {
      short:
        "Explore varied bushveld landscapes and wildlife areas across a vast national park.",
      description:
        "Kruger National Park offers self-drive and guided safari experiences across a large protected area in northeastern South Africa. Wildlife viewing changes with season, habitat and location, and sightings are never guaranteed. Choose park gates, accommodation and activities to suit the time available and check current park rules before travelling.",
    },
    highlights: [
      "Guided and self-drive game viewing",
      "A wide range of landscapes and habitats",
      "Rest camps and safari accommodation",
      "Wildlife viewing that varies by season and location",
    ],
    thingsToDo: [
      { name: "Kruger National Park Guided Game Drive", slug: "kruger-national-park-guided-game-drive" },
    ],
    whyVisit: [
      {
        title: "Discover a vast wildlife area",
        description:
          "The park's varied habitats support a rich range of wildlife, with sightings depending on natural conditions.",
      },
      {
        title: "Choose your safari style",
        description:
          "Depending on the area and rules, visitors can plan self-drive routes or book guided game drives.",
      },
      {
        title: "Build a flexible park itinerary",
        description:
          "Select gates and overnight stops carefully to make the most of distances, opening times and the duration of your visit.",
      },
    ],
    bestTimeToVisit: {
      overview:
        "The drier winter months are popular for wildlife viewing as vegetation thins and animals may gather around water. Summer brings warmer weather, seasonal rain and greener landscapes.",
      seasons: [
        {
          period: "Dry season",
          dates: "May – September",
          description:
            "Cooler, drier conditions and thinner vegetation can make wildlife easier to spot in some areas.",
        },
        {
          period: "Green season",
          dates: "October – April",
          description:
            "Warmer weather and summer rainfall bring greener scenery and birdlife, while visibility and road conditions can vary.",
        },
      ],
    },
    currency: "South African rand (ZAR)",
    languages: "English, isiZulu, Xitsonga, Afrikaans and other regional languages",
    airport: {
      name: "Kruger Mpumalanga International Airport",
      code: "MQP",
    },
    travelTips: [
      "Book park accommodation and activities early, especially in school holidays and peak season.",
      "Check gate opening times, park rules, road conditions and current conservation fees.",
      "Keep a safe distance from wildlife and follow park and guide instructions at all times.",
    ],
    firstVisitItinerary: {
      title: "Kruger safari first visit",
      duration: "4 days / 3 nights",
      description:
        "A manageable first safari with time to settle in, join guided wildlife drives and avoid rushing between distant park areas.",
      itinerary: [
        {
          day: "Day 1",
          title: "Travel to your Kruger base",
          description:
            "Travel to your confirmed park gateway or accommodation and leave time for check-in and orientation. Distances inside the region can be significant.",
          location: "Kruger National Park area",
          accommodation: "Choose a confirmed rest camp or lodge near your planned route.",
          meals: "Meal availability depends on your camp or lodge.",
          times: [
            {
              time: "Afternoon",
              title: "Check in and review park arrangements",
              description:
                "Confirm gate times, road rules, activity meeting points and the next day's plans.",
            },
          ],
        },
        {
          day: "Day 2",
          title: "First guided wildlife drive",
          description:
            "Start with a guided game drive to learn about the park and build in time for a relaxed return to camp.",
          location: "Kruger National Park",
          meals: "Check which meals are provided by your accommodation or operator.",
          times: [
            {
              time: "Morning or afternoon",
              title: "Guided game drive",
              description:
                "Explore with a qualified guide. Wildlife sightings vary by area and season and are never guaranteed.",
              activitySlug: "kruger-national-park-guided-game-drive",
            },
          ],
        },
        {
          day: "Day 3",
          title: "A full day in the park",
          description:
            "Spend the day exploring at a measured pace, taking breaks at permitted rest stops and following all park rules.",
          location: "Kruger National Park",
          meals: "Carry food and water or use approved facilities along your route.",
          times: [
            {
              time: "Early morning",
              title: "Set out for wildlife viewing",
              description:
                "Join another guided drive or follow a permitted self-drive route after checking current park guidance.",
            },
            {
              time: "Afternoon",
              title: "Return to camp and rest",
              description:
                "Allow time to return before gate closing and enjoy an evening at your accommodation.",
            },
          ],
        },
        {
          day: "Day 4",
          title: "Final drive and departure",
          description:
            "If time permits, enjoy one last morning outing before leaving through your planned gate or transfer point.",
          location: "Kruger National Park area",
          meals: "Confirm checkout and breakfast arrangements with your accommodation.",
          times: [
            {
              time: "Morning",
              title: "Optional final wildlife outing",
              description:
                "Choose a short drive only if it fits your gate schedule and onward transport.",
            },
            {
              time: "Departure",
              title: "Leave the park",
              description:
                "Allow a realistic buffer for the drive to your next destination or airport.",
            },
          ],
        },
      ],
    },
  }),
  createOverviewDestination({
    slug: "sossusvlei",
    name: "Sossusvlei",
    country: "Namibia",
    region: "ǁKaras and Hardap regions",
    heroImage: "/images/optimized/destinations/sossuvlei.png",
    tagline:
      "Experience the Namib Desert's towering dunes, open skies and striking desert scenery.",
    overview: {
      short:
        "Visit a remarkable Namib Desert landscape of dunes, dry pans and changing light.",
      description:
        "Sossusvlei lies within the Namib-Naukluft area and is known for high dunes and clay pans, including Deadvlei. Access involves long distances and park gate schedules, so plan transport and overnight stays carefully. Walking conditions, temperatures and access can change with weather.",
    },
    highlights: [
      "The dunes and clay pan landscapes of Sossusvlei",
      "Deadvlei and its distinctive desert scenery",
      "Sunrise and changing light across the dunes",
      "Stargazing in the remote desert",
    ],
    thingsToDo: [
      { name: "Sossusvlei and Deadvlei Guided Desert Tour", slug: "sossusvlei-and-deadvlei-guided-tour" },
      { name: "Dune 45 Sunrise Excursion", slug: "dune-45-sunrise-excursion" },
      { name: "Sesriem Canyon Guided Tour", slug: "sesriem-canyon-guided-tour" },
      { name: "Namib Desert Scenic Flight", slug: "namib-desert-scenic-flight" },
      { name: "Sossusvlei Hot-Air Balloon Safari", slug: "sossusvlei-hot-air-balloon-safari" },
    ],
    whyVisit: [
      {
        title: "See the Namib Desert dunes",
        description:
          "Explore a dramatic desert landscape where dune shapes and colours shift with the light.",
      },
      {
        title: "Experience a remote setting",
        description:
          "The wide-open desert and night skies offer a striking contrast to Namibia's coastal towns and wildlife parks.",
      },
      {
        title: "Photograph changing desert light",
        description:
          "Early and late light can transform the dunes, but access times and conditions should guide each day's plans.",
      },
    ],
    bestTimeToVisit: {
      overview:
        "Sossusvlei can be visited year-round, but temperatures vary considerably. Cooler, drier months are often more comfortable for walking; prepare carefully for heat and limited shade.",
      seasons: [
        {
          period: "Cooler dry season",
          dates: "May – September",
          description:
            "Milder daytime temperatures can make outdoor exploration more comfortable, with cold nights possible.",
        },
        {
          period: "Warmer season",
          dates: "October – April",
          description:
            "Temperatures can be very high, especially around midday. Occasional seasonal rain may affect local conditions.",
        },
      ],
    },
    currency: "Namibian dollar (NAD)",
    languages: "English, Afrikaans, Oshiwambo languages and other Namibian languages",
    airport: {
      name: "Hosea Kutako International Airport",
      code: "WDH",
    },
    travelTips: [
      "Plan long drives, fuel stops and overnight stays well in advance.",
      "Check park access arrangements, gate times and road conditions before setting out.",
      "Carry water, sun protection and suitable footwear; desert temperatures can be extreme.",
    ],
    firstVisitItinerary: {
      title: "Sossusvlei first visit",
      duration: "4 days / 3 nights",
      description:
        "A desert introduction with an early dune visit, time for Deadvlei and Sesriem Canyon, and realistic room for long drives and heat.",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrive near Sesriem",
          description:
            "Travel to your booked accommodation near the park entrance. Settle in, check opening arrangements and prepare water and sun protection for an early start.",
          location: "Sesriem",
          accommodation: "Stay near Sesriem to reduce the early-morning drive.",
          meals: "Meal availability depends on your accommodation.",
          times: [
            {
              time: "Afternoon",
              title: "Check in and prepare",
              description:
                "Confirm your transport, park access, gate schedule and any activity bookings.",
            },
          ],
        },
        {
          day: "Day 2",
          title: "Sunrise dunes and Deadvlei",
          description:
            "Start early to make the most of cooler temperatures and the morning light. Allow time for walking on sand and follow access guidance.",
          location: "Namib-Naukluft National Park",
          meals: "Carry water and confirm meal options before entering the park.",
          times: [
            {
              time: "Sunrise",
              title: "Dune 45 excursion",
              description:
                "Visit the dune early with your confirmed transport or guided operator.",
              activitySlug: "dune-45-sunrise-excursion",
            },
            {
              time: "Morning",
              title: "Sossusvlei and Deadvlei",
              description:
                "Explore the pans on a guided tour and confirm the final access arrangements for your travel dates.",
              activitySlug: "sossusvlei-and-deadvlei-guided-tour",
            },
          ],
        },
        {
          day: "Day 3",
          title: "Sesriem Canyon or an optional aerial experience",
          description:
            "Keep the day flexible for conditions and energy levels. Avoid strenuous walks during the hottest part of the day.",
          location: "Sesriem and the Namib Desert",
          meals: "Arrange meals and drinking water in advance.",
          times: [
            {
              time: "Morning",
              title: "Explore Sesriem Canyon",
              description:
                "Join a guided visit and check local conditions before walking in the canyon.",
              activitySlug: "sesriem-canyon-guided-tour",
            },
            {
              time: "Optional",
              title: "Scenic flight or balloon safari",
              description:
                "Choose an optional flight only if operating and available for your dates.",
              activitySlug: "namib-desert-scenic-flight",
            },
          ],
        },
        {
          day: "Day 4",
          title: "Depart the desert",
          description:
            "Have breakfast, check out and allow ample time for long distances and fuel stops on the onward drive.",
          location: "Sesriem and onward route",
          meals: "Confirm breakfast and checkout with your accommodation.",
          times: [
            {
              time: "Morning",
              title: "Onward travel",
              description:
                "Depart with a realistic drive plan and check road conditions before setting out.",
            },
          ],
        },
      ],
    },
  }),
  createOverviewDestination({
    slug: "etosha-national-park",
    name: "Etosha National Park",
    country: "Namibia",
    region: "North-central Namibia",
    heroImage: "/images/activities/etosha-national-park-guided-game-drive.jpg",
    tagline:
      "Explore Namibia's wildlife-rich park and the landscapes surrounding its vast salt pan.",
    overview: {
      short:
        "Discover a distinctive safari landscape centred on the Etosha Pan and wildlife waterholes.",
      description:
        "Etosha National Park is centred on a vast salt pan and includes savannah, woodland and waterholes that attract wildlife. Visitors can travel on permitted self-drive routes or join guided activities where offered. Wildlife sightings vary with season and conditions and cannot be guaranteed.",
    },
    highlights: [
      "The vast Etosha Pan",
      "Wildlife viewing around waterholes",
      "Self-drive routes and guided activities",
      "Distinctive dry-season and green-season scenery",
    ],
    thingsToDo: [
      { name: "Etosha National Park Guided Game Drive", slug: "etosha-national-park-guided-game-drive" },
    ],
    whyVisit: [
      {
        title: "Experience a distinctive safari setting",
        description:
          "Etosha's salt pan and surrounding habitats create a different landscape from many other southern African parks.",
      },
      {
        title: "Look for wildlife at waterholes",
        description:
          "Waterholes can attract wildlife, particularly in drier periods, but sightings are never guaranteed.",
      },
      {
        title: "Travel at your own pace",
        description:
          "Plan permitted park routes and overnight stops around gate schedules and realistic driving distances.",
      },
    ],
    bestTimeToVisit: {
      overview:
        "The drier months are popular for wildlife viewing around waterholes, while the rainy season brings greener scenery and seasonal birdlife.",
      seasons: [
        {
          period: "Dry season",
          dates: "May – October",
          description:
            "Wildlife may be easier to observe around water sources as vegetation dries, though conditions vary.",
        },
        {
          period: "Rainy season",
          dates: "November – April",
          description:
            "Greener landscapes and seasonal birdlife are possible; rain and road conditions can affect travel.",
        },
      ],
    },
    currency: "Namibian dollar (NAD)",
    languages: "English, Oshiwambo languages, Afrikaans and other regional languages",
    airport: {
      name: "Hosea Kutako International Airport",
      code: "WDH",
    },
    travelTips: [
      "Reserve park accommodation and check gate schedules before arrival.",
      "Carry enough fuel and allow time for long distances between park areas.",
      "Follow park speed limits and remain in your vehicle except in designated areas.",
    ],
    firstVisitItinerary: {
      title: "Etosha safari first visit",
      duration: "4 days / 3 nights",
      description:
        "A beginner-friendly park stay that leaves time for guided wildlife viewing, waterhole stops and the distances between overnight bases.",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrive at your Etosha base",
          description:
            "Reach your confirmed accommodation, check park access and gate schedules, and keep the rest of the day flexible for travel delays.",
          location: "Etosha National Park area",
          accommodation: "Book a confirmed camp or lodge suited to your route.",
          meals: "Meal availability depends on the selected camp or lodge.",
          times: [
            {
              time: "Afternoon",
              title: "Check in and plan your route",
              description:
                "Review current park rules, permitted roads and the distances between overnight stops.",
            },
          ],
        },
        {
          day: "Day 2",
          title: "First Etosha game drive",
          description:
            "Join a guided drive for an introduction to wildlife viewing and the distinctive Etosha landscape.",
          location: "Etosha National Park",
          meals: "Confirm meal and park-entry arrangements with your operator.",
          times: [
            {
              time: "Morning or afternoon",
              title: "Guided park game drive",
              description:
                "Explore with a qualified guide. Wildlife sightings vary and are never guaranteed.",
              activitySlug: "etosha-national-park-guided-game-drive",
            },
          ],
        },
        {
          day: "Day 3",
          title: "Waterholes and the Etosha Pan",
          description:
            "Spend another day exploring permitted routes and designated viewing areas, allowing time to observe without rushing.",
          location: "Etosha National Park",
          meals: "Carry water and follow park guidance on where food stops are permitted.",
          times: [
            {
              time: "Early morning",
              title: "Set out after checking conditions",
              description:
                "Choose a route appropriate to your overnight base, gate times and current road conditions.",
            },
            {
              time: "During the day",
              title: "Pause at designated waterholes",
              description:
                "Observe wildlife from permitted areas and remain inside your vehicle where required.",
            },
          ],
        },
        {
          day: "Day 4",
          title: "Final wildlife viewing and departure",
          description:
            "If time permits, take a short morning drive before leaving the park through your planned gate.",
          location: "Etosha National Park area",
          meals: "Confirm breakfast and checkout arrangements with your accommodation.",
          times: [
            {
              time: "Morning",
              title: "Optional final drive",
              description:
                "Keep the route short enough to leave the park within gate hours.",
            },
            {
              time: "Departure",
              title: "Continue your Namibia journey",
              description:
                "Allow sufficient time for the onward road journey and fuel stops.",
            },
          ],
        },
      ],
    },
  }),
  createOverviewDestination({
    slug: "chobe-national-park",
    name: "Chobe National Park",
    country: "Botswana",
    region: "Chobe District",
    heroImage: "/images/optimized/activities/chobe-national-park-full-day-trip.webp",
    tagline:
      "Discover Botswana's Chobe River landscapes and wildlife-rich national park.",
    overview: {
      short:
        "Explore riverfront and inland habitats in one of Botswana's best-known wildlife areas.",
      description:
        "Chobe National Park in northern Botswana includes riverfront habitats along the Chobe River and drier inland areas. Game drives and boat safaris may be available through licensed operators. Wildlife sightings, river conditions, routes and activity schedules vary by season and operator.",
    },
    highlights: [
      "Chobe River boat safaris where available",
      "Guided game drives in the national park",
      "Riverfront scenery and birdlife",
      "Wildlife viewing that varies by season and location",
    ],
    thingsToDo: [
      { name: "Chobe National Park Full-Day Trip", slug: "chobe-full-day-trip" },
      { name: "Chobe River Sunset Cruise", slug: "chobe-river-sunset-cruise" },
      { name: "Chobe Wildlife Photography Safari", slug: "chobe-wildlife-photography-safari" },
    ],
    whyVisit: [
      {
        title: "Explore river and bush",
        description:
          "The Chobe River and nearby park areas offer contrasting perspectives on the region's wildlife and landscapes.",
      },
      {
        title: "Choose land or water activities",
        description:
          "Depending on the operator and season, visitors may be able to combine game drives and boat excursions.",
      },
      {
        title: "Connect Chobe with a wider itinerary",
        description:
          "Kasane can form part of a Botswana safari or a regional journey, subject to border and transfer arrangements.",
      },
    ],
    bestTimeToVisit: {
      overview:
        "Chobe's seasons affect river levels, vegetation and wildlife viewing. The drier months are popular for game viewing, while water levels and boat operations should be confirmed for travel dates.",
      seasons: [
        {
          period: "Dry season",
          dates: "May – October",
          description:
            "Wildlife may gather around remaining water sources, and drier conditions are common.",
        },
        {
          period: "Green season",
          dates: "November – April",
          description:
            "Seasonal rain can bring greener landscapes and birdlife; weather and river conditions vary.",
        },
      ],
    },
    currency: "Botswana pula (BWP)",
    languages: "English and Setswana",
    airport: {
      name: "Kasane International Airport",
      code: "BBK",
    },
    travelTips: [
      "Confirm whether boat safaris, game drives, park fees and transfers are included in your booking.",
      "Check river conditions, park rules and operator schedules before travel.",
      "If travelling across an international border, confirm current entry requirements for every traveller.",
    ],
    firstVisitItinerary: {
      title: "Chobe first visit",
      duration: "4 days / 3 nights",
      description:
        "A gentle introduction to Kasane and Chobe, pairing a full-day park experience with time on the river.",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrive in Kasane",
          description:
            "Transfer to your accommodation, confirm the next day's pickup and review any park or border arrangements.",
          location: "Kasane, Botswana",
          accommodation: "Stay in Kasane for convenient access to local operators.",
          meals: "Meals are arranged independently unless confirmed with your accommodation.",
          times: [
            {
              time: "Afternoon",
              title: "Check in and confirm activities",
              description:
                "Verify pickup times, park fees, inclusions and what identification to bring.",
            },
          ],
        },
        {
          day: "Day 2",
          title: "Explore Chobe National Park",
          description:
            "Spend the day on an organised Chobe trip with a licensed operator. Wildlife viewing depends on conditions and sightings are not guaranteed.",
          location: "Chobe National Park",
          meals: "Check whether meals and park fees are included in the confirmed trip.",
          times: [
            {
              time: "Full day",
              title: "Guided Chobe experience",
              description:
                "Explore park and river areas included in your confirmed operator itinerary.",
              activitySlug: "chobe-full-day-trip",
            },
          ],
        },
        {
          day: "Day 3",
          title: "Enjoy the Chobe River",
          description:
            "Keep the day flexible for a river experience and time to rest after the full-day outing.",
          location: "Kasane and the Chobe River",
          meals: "Confirm any refreshments included in your cruise booking.",
          times: [
            {
              time: "Morning",
              title: "Relax or explore Kasane",
              description:
                "Enjoy a slower morning and confirm the cruise departure point with your operator.",
            },
            {
              time: "Late afternoon",
              title: "Chobe River sunset cruise",
              description:
                "Take a scheduled cruise if available; timing and operation depend on local conditions.",
              activitySlug: "chobe-river-sunset-cruise",
            },
          ],
        },
        {
          day: "Day 4",
          title: "Depart Kasane",
          description:
            "Continue your journey after confirming onward transfers, flight times and border requirements for your route.",
          location: "Kasane",
          meals: "Confirm breakfast and checkout arrangements.",
          times: [
            {
              time: "Morning",
              title: "Check out and transfer",
              description:
                "Use your pre-arranged transport and allow a buffer for airport or border procedures.",
            },
          ],
        },
      ],
    },
  }),
  createOverviewDestination({
    slug: "okavango-delta",
    name: "Okavango Delta",
    country: "Botswana",
    region: "North-western Botswana",
    heroImage: "/images/activities/okavango-delta-mokoro-excursion.jpg",
    tagline:
      "Experience Botswana's inland delta through seasonal waterways, islands and wildlife habitats.",
    overview: {
      short:
        "Explore a remarkable wetland wilderness shaped by seasonal floodwaters.",
      description:
        "The Okavango Delta is a vast inland wetland in north-western Botswana. Experiences may include mokoro excursions, boat trips and game drives, depending on the location, water levels and operator. Access often involves light aircraft or specialist transfers, and activities should be confirmed for the specific camp and season.",
    },
    highlights: [
      "Seasonal waterways and floodplains",
      "Mokoro and boat experiences where conditions allow",
      "Wildlife viewing across wetland and dryland habitats",
      "Remote camps reached by road or light aircraft",
    ],
    thingsToDo: [
      { name: "Okavango Delta Mokoro Excursion", slug: "okavango-delta-mokoro-excursion" },
      { name: "Okavango Delta Guided Game Drive", slug: "okavango-delta-guided-game-drive" },
      { name: "Okavango Delta Motorboat Safari", slug: "okavango-delta-motorboat-safari" },
      { name: "Okavango Delta Guided Walking Safari", slug: "okavango-delta-guided-walking-safari" },
      { name: "Okavango Delta Scenic Flight", slug: "okavango-delta-scenic-flight" },
    ],
    whyVisit: [
      {
        title: "Discover a seasonal wetland",
        description:
          "Floodwaters transform parts of the Delta through the year, shaping its habitats and available activities.",
      },
      {
        title: "Experience water and land safaris",
        description:
          "Selected areas offer a mix of water-based and land-based activities, subject to local conditions.",
      },
      {
        title: "Stay in a remote wilderness setting",
        description:
          "Many camps are reached by light aircraft or arranged transfers, so confirm logistics and luggage limits in advance.",
      },
    ],
    bestTimeToVisit: {
      overview:
        "The Delta's flood cycle and rainfall affect water-based activities and wildlife viewing. The timing and level of floodwaters vary each year and by area.",
      seasons: [
        {
          period: "Higher flood season",
          dates: "Generally June – October",
          description:
            "Water-based activities may be more available in some areas, depending on local flood levels and operator conditions.",
        },
        {
          period: "Rainy season",
          dates: "November – April",
          description:
            "Seasonal rain can bring greener scenery and birdlife. Water levels and activity options differ across the Delta.",
        },
      ],
    },
    currency: "Botswana pula (BWP)",
    languages: "English, Setswana and local languages spoken in the region",
    airport: {
      name: "Maun International Airport",
      code: "MUB",
    },
    travelTips: [
      "Confirm how your camp is reached and whether flights and transfers are included.",
      "Ask operators which water-based activities are available for your dates and location.",
      "Check luggage weight limits for light aircraft transfers before packing.",
    ],
    firstVisitItinerary: {
      title: "Okavango Delta first safari",
      duration: "5 days / 4 nights",
      description:
        "A first-time Delta stay with several nights at one camp, so you can enjoy water and land activities without losing time to repeated transfers.",
      itinerary: [
        {
          day: "Day 1",
          title: "Transfer into the Delta",
          description:
            "Travel to your booked camp by the confirmed road or light-aircraft transfer. Attend the camp briefing and keep the first day flexible.",
          location: "Your confirmed Okavango Delta camp",
          accommodation: "Stay at one camp for the duration of the safari.",
          meals: "Confirm the camp's meal plan and transfer inclusions before booking.",
          times: [
            {
              time: "On arrival",
              title: "Camp transfer and safety briefing",
              description:
                "Follow the camp team's instructions for transfers, wildlife and movement around camp.",
            },
          ],
        },
        {
          day: "Day 2",
          title: "Explore the Delta waterways",
          description:
            "Experience the waterways with a local guide where water levels, location and camp operations allow.",
          location: "Okavango Delta",
          meals: "Meals depend on your confirmed camp package.",
          times: [
            {
              time: "Morning",
              title: "Guided mokoro excursion",
              description:
                "Take a guided mokoro outing if water conditions and the camp's location make it available.",
              activitySlug: "okavango-delta-mokoro-excursion",
            },
            {
              time: "Afternoon",
              title: "Rest at camp",
              description:
                "Return to camp for a break during the warmer part of the day.",
            },
          ],
        },
        {
          day: "Day 3",
          title: "Wildlife viewing by land",
          description:
            "Join a guided land-based activity and follow the camp's seasonal schedule and safety advice.",
          location: "Okavango Delta",
          meals: "Confirm included meals and activity times with your camp.",
          times: [
            {
              time: "Morning or afternoon",
              title: "Guided game drive",
              description:
                "Explore available wildlife areas with a qualified guide; sightings vary naturally.",
              activitySlug: "okavango-delta-guided-game-drive",
            },
          ],
        },
        {
          day: "Day 4",
          title: "Choose another guided activity",
          description:
            "Use your final full day for another activity offered by your camp and suitable for the season.",
          location: "Okavango Delta",
          meals: "Meals depend on your confirmed camp package.",
          times: [
            {
              time: "Morning",
              title: "Optional walking or motorboat safari",
              description:
                "Ask your camp which guided activities are available and suitable for your dates.",
              activitySlug: "okavango-delta-guided-walking-safari",
            },
            {
              time: "Afternoon",
              title: "Relax and enjoy camp",
              description:
                "Leave time to rest, enjoy the setting and prepare for your transfer the following day.",
            },
          ],
        },
        {
          day: "Day 5",
          title: "Depart the Delta",
          description:
            "Take a final activity if the schedule allows, then leave using your pre-arranged onward transfer.",
          location: "Okavango Delta",
          meals: "Confirm breakfast and transfer details with your camp.",
          times: [
            {
              time: "Morning",
              title: "Transfer to your next destination",
              description:
                "Check light-aircraft luggage limits or road transfer timing before departure.",
            },
          ],
        },
      ],
    },
  }),
  createOverviewDestination({
    slug: "swakopmund",
    name: "Swakopmund",
    country: "Namibia",
    region: "Erongo Region",
    heroImage: "/images/optimized/destinations/swakopmund.png",
    tagline:
      "Explore Namibia's Atlantic coast from a lively seaside town surrounded by desert.",
    overview: {
      short:
        "Enjoy coastal scenery, historic architecture and desert activities around Swakopmund.",
      description:
        "Swakopmund sits between the Atlantic Ocean and the Namib Desert. Visitors can explore the town, nearby Walvis Bay and the surrounding dunes, with activities depending on weather and operator availability. The cool coastal climate can differ sharply from inland desert conditions.",
    },
    highlights: [
      "Atlantic coastline and seaside promenades",
      "Historic architecture and local museums",
      "Desert landscapes and outdoor activities",
      "Day trips to Walvis Bay and nearby dunes",
    ],
    thingsToDo: [
      { name: "Swakopmund Living Desert Tour", slug: "swakopmund-desert-living-tour" },
      { name: "Walvis Bay Dolphin & Seal Cruise", slug: "walvis-bay-dolphin-and-seal-cruise" },
      { name: "Sandwich Harbour 4x4 Excursion", slug: "sandwich-harbour-4x4-excursion" },
    ],
    whyVisit: [
      {
        title: "See where desert meets ocean",
        description:
          "Swakopmund offers easy access to both the Atlantic coastline and the Namib Desert.",
      },
      {
        title: "Enjoy a relaxed coastal base",
        description:
          "The town provides accommodation, dining and services for travellers exploring Namibia's coast.",
      },
      {
        title: "Add outdoor activities",
        description:
          "Coastal and desert excursions may be available through local operators, depending on conditions and season.",
      },
    ],
    bestTimeToVisit: {
      overview:
        "Swakopmund has a mild coastal climate throughout the year, often with cool mornings and evenings. Inland desert conditions can be much hotter, so pack for both.",
      seasons: [
        {
          period: "Warmer months",
          dates: "October – April",
          description:
            "Days are generally warmer, though coastal fog and wind can still affect conditions.",
        },
        {
          period: "Cooler months",
          dates: "May – September",
          description:
            "Expect cooler weather, especially after sunset and on the coast. Inland areas can have larger temperature swings.",
        },
      ],
    },
    currency: "Namibian dollar (NAD)",
    languages: "English, Afrikaans, German and other Namibian languages",
    airport: {
      name: "Walvis Bay Airport",
      code: "WVB",
    },
    travelTips: [
      "Bring layers for coastal wind and cooler evenings.",
      "Book popular activities in advance and check operator weather policies.",
      "Plan fuel and road stops for onward journeys through remote desert areas.",
    ],
    firstVisitItinerary: {
      title: "Swakopmund first visit",
      duration: "4 days / 3 nights",
      description:
        "A relaxed coastal stay with a guided desert experience, a marine cruise and a day for the dunes around Sandwich Harbour.",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrive in Swakopmund",
          description:
            "Check in and ease into your coastal stay. The Atlantic climate can feel cool and windy, so keep a warm layer handy.",
          location: "Swakopmund",
          accommodation: "Stay in Swakopmund for access to town and coastal operators.",
          meals: "Meals are arranged independently unless confirmed with your accommodation.",
          times: [
            {
              time: "Afternoon",
              title: "Explore the town at leisure",
              description:
                "Walk around the town centre and waterfront, or rest after your journey.",
            },
          ],
        },
        {
          day: "Day 2",
          title: "Discover the desert environment",
          description:
            "Join a guided excursion to learn about the desert landscape and its small wildlife.",
          location: "Swakopmund and surrounding Namib Desert",
          meals: "Confirm pickup and meal arrangements with your operator.",
          times: [
            {
              time: "Morning",
              title: "Guided Living Desert tour",
              description:
                "Explore the desert with a knowledgeable local guide.",
              activitySlug: "swakopmund-desert-living-tour",
            },
            {
              time: "Afternoon",
              title: "Free time in town",
              description:
                "Return to Swakopmund and enjoy an unhurried afternoon.",
            },
          ],
        },
        {
          day: "Day 3",
          title: "Explore the coast and dunes",
          description:
            "Choose a marine cruise or a guided 4x4 trip. Confirm departure times and weather policies, as conditions can affect both activities.",
          location: "Walvis Bay and the coast",
          meals: "Check whether refreshments are included in your selected excursion.",
          times: [
            {
              time: "Morning",
              title: "Dolphin and seal cruise",
              description:
                "Cruise the bay with a local operator; wildlife sightings depend on conditions.",
              activitySlug: "walvis-bay-dolphin-and-seal-cruise",
            },
            {
              time: "Alternative",
              title: "Sandwich Harbour 4x4 excursion",
              description:
                "Choose a guided dunes excursion if it better suits your interests and schedule.",
              activitySlug: "sandwich-harbour-4x4-excursion",
            },
          ],
        },
        {
          day: "Day 4",
          title: "Continue your Namibia journey",
          description:
            "Have breakfast, check out and allow time for onward road travel.",
          location: "Swakopmund",
          meals: "Confirm breakfast and checkout with your accommodation.",
          times: [
            {
              time: "Morning",
              title: "Departure",
              description:
                "Check road conditions, fuel stops and driving distances before setting out.",
            },
          ],
        },
      ],
    },
  }),
  createOverviewDestination({
    slug: "hwange-national-park",
    name: "Hwange National Park",
    country: "Zimbabwe",
    region: "Matabeleland North",
    heroImage: "/images/optimized/activities/hwange-national-park-game-drive.webp",
    tagline:
      "Explore Zimbabwe's largest national park, known for its varied habitats and wildlife.",
    overview: {
      short:
        "Discover a broad range of wildlife habitats in Zimbabwe's largest national park.",
      description:
        "Hwange National Park covers a large area of western Zimbabwe, with woodland, grassland and seasonal water sources. Visitors can join guided game drives or stay at lodges and camps in and around the park. Wildlife sightings depend on season, location and natural conditions and cannot be guaranteed.",
    },
    highlights: [
      "Guided game drives and wildlife viewing",
      "Woodland, grassland and seasonal pans",
      "Lodges and camps in and around the park",
      "A safari extension from Victoria Falls",
    ],
    thingsToDo: [
      { name: "Join a guided Hwange game drive", slug: "hwange-game-drive" },
    ],
    whyVisit: [
      {
        title: "Explore varied wildlife habitats",
        description:
          "Hwange's diverse landscapes provide opportunities to experience Zimbabwean wildlife with a local guide.",
      },
      {
        title: "Add a safari to your Zimbabwe journey",
        description:
          "Hwange can be combined with Victoria Falls and other destinations, with travel time and transfers planned in advance.",
      },
      {
        title: "Stay close to the wilderness",
        description:
          "Lodges and camps offer different locations and safari styles; check access, inclusions and seasonal availability.",
      },
    ],
    bestTimeToVisit: {
      overview:
        "The dry season is popular for wildlife viewing as vegetation thins and animals may gather near water. The green season brings rain and changing road conditions.",
      seasons: [
        {
          period: "Dry season",
          dates: "May – October",
          description:
            "Drier conditions can make wildlife easier to observe near water sources, although sightings vary.",
        },
        {
          period: "Green season",
          dates: "November – April",
          description:
            "Seasonal rain brings greener landscapes and birdlife. Some roads may become more difficult to travel.",
        },
      ],
    },
    currency: "United States dollar (USD) commonly used; confirm accepted payment methods",
    languages: "English, Shona, Ndebele and other Zimbabwean languages",
    airport: {
      name: "Victoria Falls International Airport",
      code: "VFA",
    },
    travelTips: [
      "Confirm road or air transfers to your camp before booking flights.",
      "Check park access, seasonal road conditions and activity schedules.",
      "Follow guide instructions and keep a safe distance from wildlife.",
    ],
    firstVisitItinerary: {
      title: "Hwange safari first visit",
      duration: "4 days / 3 nights",
      description:
        "A starter safari with time to reach your lodge, join guided game drives and enjoy the bush without changing camps every night.",
      itinerary: [
        {
          day: "Day 1",
          title: "Travel to your Hwange camp",
          description:
            "Reach your confirmed lodge or camp and settle in. Transfer distances can be long, so avoid scheduling a fixed activity too soon after arrival.",
          location: "Hwange National Park area",
          accommodation: "Stay at your confirmed lodge or safari camp.",
          meals: "Confirm the camp's meal plan and transfer inclusions.",
          times: [
            {
              time: "Afternoon",
              title: "Arrive and settle in",
              description:
                "Review camp arrangements and receive any wildlife and safety briefing.",
            },
          ],
        },
        {
          day: "Day 2",
          title: "First guided game drive",
          description:
            "Join a guided drive and learn about the park's habitats and wildlife. Sightings are not guaranteed.",
          location: "Hwange National Park",
          meals: "Meal arrangements depend on your accommodation and booking.",
          times: [
            {
              time: "Morning or afternoon",
              title: "Hwange game drive",
              description:
                "Explore with a qualified guide, subject to camp schedule and park conditions.",
              activitySlug: "hwange-game-drive",
            },
          ],
        },
        {
          day: "Day 3",
          title: "A full day in the bush",
          description:
            "Enjoy the camp's planned wildlife activities with time to rest between drives.",
          location: "Hwange National Park",
          meals: "Confirm included meals and activity times with your camp.",
          times: [
            {
              time: "Early morning",
              title: "Morning wildlife viewing",
              description:
                "Set out with your guide when conditions are suitable.",
            },
            {
              time: "Afternoon",
              title: "Rest and optional afternoon drive",
              description:
                "Follow the camp schedule and take an optional second drive if available.",
            },
          ],
        },
        {
          day: "Day 4",
          title: "Final activity and departure",
          description:
            "Take a final short activity if available, then depart using your pre-arranged road or air transfer.",
          location: "Hwange National Park area",
          meals: "Confirm breakfast, checkout and transfer arrangements.",
          times: [
            {
              time: "Morning",
              title: "Optional final game drive",
              description:
                "Choose this only if it fits your transfer schedule.",
            },
            {
              time: "Departure",
              title: "Transfer to your next stop",
              description:
                "Allow time for the park exit and onward journey.",
            },
          ],
        },
      ],
    },
  }),
  createOverviewDestination({
    slug: "great-zimbabwe",
    name: "Great Zimbabwe",
    country: "Zimbabwe",
    region: "Masvingo Province",
    heroImage: "/images/optimized/destinations/great-zimbabwe.png",
    tagline:
      "Explore the stone architecture and history of one of Southern Africa's most significant heritage sites.",
    overview: {
      short:
        "Visit the historic stone city and archaeological landscape of Great Zimbabwe.",
      description:
        "Great Zimbabwe is an archaeological site near Masvingo, recognised for its monumental dry-stone architecture and its historical importance in the region. Visitors can explore designated areas with a guide or independently where permitted. Respect site rules and allow time to understand the cultural context of the ruins.",
    },
    highlights: [
      "The Great Enclosure and its stone walls",
      "Hill Complex viewpoints and historic structures",
      "A major archaeological and cultural heritage site",
      "Guided interpretation of the site and its history",
    ],
    thingsToDo: [
      { name: "Great Zimbabwe Guided Heritage Tour", slug: "great-zimbabwe-guided-tour" },
    ],
    whyVisit: [
      {
        title: "Encounter Zimbabwean heritage",
        description:
          "The site offers a meaningful introduction to the region's history, architecture and cultural heritage.",
      },
      {
        title: "See remarkable stonework",
        description:
          "Explore historic dry-stone structures across the complex while respecting conservation guidance.",
      },
      {
        title: "Add a cultural stop to a Zimbabwe itinerary",
        description:
          "Great Zimbabwe can be combined with other destinations when distances and road travel are planned realistically.",
      },
    ],
    bestTimeToVisit: {
      overview:
        "The site can be visited throughout the year. Cooler, drier months are often more comfortable for walking, while rain and heat may affect conditions.",
      seasons: [
        {
          period: "Dry season",
          dates: "May – October",
          description:
            "Generally drier conditions can make it easier to explore the outdoor site on foot.",
        },
        {
          period: "Rainy season",
          dates: "November – April",
          description:
            "Expect warmer weather and possible rain; check local conditions and wear suitable footwear.",
        },
      ],
    },
    currency: "United States dollar (USD) commonly used; confirm accepted payment methods",
    languages: "English, Shona and other Zimbabwean languages",
    airport: {
      name: "Masvingo Airport",
      code: "MVZ",
    },
    travelTips: [
      "Check site opening hours, entry fees and guide availability before travelling.",
      "Wear comfortable walking shoes and bring sun protection and drinking water.",
      "Do not climb on, touch or remove material from the historic structures.",
    ],
    firstVisitItinerary: {
      title: "Great Zimbabwe first visit",
      duration: "3 days / 2 nights",
      description:
        "A short heritage-focused stay with enough time to explore the archaeological site at a comfortable pace and avoid rushing the road journey.",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrive in Masvingo",
          description:
            "Travel to Masvingo and settle into your accommodation. Confirm site hours, entry details and guide availability for the next day.",
          location: "Masvingo",
          accommodation: "Stay in Masvingo or near the Great Zimbabwe site.",
          meals: "Meals are arranged independently unless confirmed with your accommodation.",
          times: [
            {
              time: "Afternoon",
              title: "Check in and prepare",
              description:
                "Plan transport to the site and bring comfortable walking shoes, sun protection and drinking water.",
            },
          ],
        },
        {
          day: "Day 2",
          title: "Explore Great Zimbabwe",
          description:
            "Spend the day exploring the historic stone city with a qualified guide. Follow site rules and allow time for the walking route.",
          location: "Great Zimbabwe National Monument",
          meals: "Confirm meal options and opening hours before your visit.",
          times: [
            {
              time: "Morning",
              title: "Guided heritage tour",
              description:
                "Learn about the site's archaeology, history and cultural significance.",
              activitySlug: "great-zimbabwe-guided-tour",
            },
            {
              time: "Afternoon",
              title: "Continue exploring the site",
              description:
                "Visit accessible areas at a comfortable pace, respecting conservation guidance.",
            },
          ],
        },
        {
          day: "Day 3",
          title: "Final visit and onward travel",
          description:
            "Use the morning for anything you missed, then continue your journey with realistic road travel time.",
          location: "Great Zimbabwe and Masvingo",
          meals: "Confirm breakfast and checkout arrangements.",
          times: [
            {
              time: "Morning",
              title: "Optional return to the site",
              description:
                "Revisit an area or enjoy a relaxed morning, depending on your departure plans.",
            },
            {
              time: "Departure",
              title: "Continue your Zimbabwe itinerary",
              description:
                "Allow adequate time for onward road travel.",
            },
          ],
        },
      ],
    },
  }),
  createOverviewDestination({
    slug: "matobo-hills",
    name: "Matobo Hills",
    country: "Zimbabwe",
    region: "Matabeleland South",
    heroImage: "/images/optimized/activities/matobo-hills-guided-heritage-and-nature-tour.webp",
    tagline:
      "Discover granite hills, cultural heritage and wildlife landscapes near Bulawayo.",
    overview: {
      short:
        "Explore distinctive granite scenery and cultural and natural heritage in Matabeleland.",
      description:
        "The Matobo Hills are known for balancing rock formations, granite landscapes, cultural sites and protected areas near Bulawayo. Activities may include guided walks, scenic visits and wildlife viewing in designated areas. Use qualified local guides where appropriate and follow conservation and cultural site guidance.",
    },
    highlights: [
      "Granite hills and balancing rock formations",
      "Cultural and historical sites",
      "Guided walks and scenic viewpoints",
      "Wildlife experiences in protected areas",
    ],
    thingsToDo: [
      { name: "Matobo Hills Guided Heritage & Nature Tour", slug: "matobo-hills-guided-tour" },
    ],
    whyVisit: [
      {
        title: "See a distinctive landscape",
        description:
          "Rounded granite formations and open hills create a setting unlike Zimbabwe's river and savannah destinations.",
      },
      {
        title: "Learn about local heritage",
        description:
          "The area includes important cultural and historical places; visit respectfully and follow local guidance.",
      },
      {
        title: "Explore outdoors near Bulawayo",
        description:
          "Plan guided walks and scenic excursions with realistic travel time from your accommodation.",
      },
    ],
    bestTimeToVisit: {
      overview:
        "Matobo Hills can be visited throughout the year. The cooler, drier months are often more comfortable for outdoor activities; summer rainfall can affect trails and roads.",
      seasons: [
        {
          period: "Dry season",
          dates: "May – October",
          description:
            "Cooler, drier weather is generally suitable for walking and sightseeing.",
        },
        {
          period: "Rainy season",
          dates: "November – April",
          description:
            "The landscape can be greener, but rain may affect trails and some road conditions.",
        },
      ],
    },
    currency: "United States dollar (USD) commonly used; confirm accepted payment methods",
    languages: "English, Ndebele, Shona and other Zimbabwean languages",
    airport: {
      name: "Joshua Mqabuko Nkomo International Airport",
      code: "BUQ",
    },
    travelTips: [
      "Arrange a local guide for cultural sites and activities that require specialist knowledge.",
      "Wear sturdy footwear and bring sun protection for outdoor excursions.",
      "Check access rules for protected areas and heritage sites before departure.",
    ],
    firstVisitItinerary: {
      title: "Matobo Hills first visit",
      duration: "3 days / 2 nights",
      description:
        "A beginner-friendly visit based near Bulawayo, with a guided day among the granite scenery and cultural sites.",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrive in Bulawayo",
          description:
            "Check in and confirm transport, park access and guide arrangements before your day in the hills.",
          location: "Bulawayo",
          accommodation: "Stay in Bulawayo or at confirmed accommodation near Matobo.",
          meals: "Meals are arranged independently unless confirmed with your accommodation.",
          times: [
            {
              time: "Afternoon",
              title: "Prepare for your excursion",
              description:
                "Check the next day's pickup, walking conditions and any cultural-site requirements.",
            },
          ],
        },
        {
          day: "Day 2",
          title: "Discover Matobo Hills",
          description:
            "Explore the granite landscape and heritage sites with a qualified local guide. Follow access rules and allow time for walks.",
          location: "Matobo Hills",
          meals: "Confirm whether meals or refreshments are included with your tour.",
          times: [
            {
              time: "Full day",
              title: "Guided heritage and nature tour",
              description:
                "Visit selected viewpoints and cultural or natural sites according to access and your confirmed tour.",
              activitySlug: "matobo-hills-guided-tour",
            },
          ],
        },
        {
          day: "Day 3",
          title: "Relaxed morning and departure",
          description:
            "Enjoy a slow morning or a short additional visit only if access and transport allow, then depart.",
          location: "Matobo Hills and Bulawayo",
          meals: "Confirm breakfast and checkout with your accommodation.",
          times: [
            {
              time: "Morning",
              title: "Optional scenic stop",
              description:
                "Ask your guide about an additional stop that fits your schedule and site access conditions.",
            },
            {
              time: "Departure",
              title: "Continue your journey",
              description:
                "Allow enough time to return to Bulawayo or your next destination.",
            },
          ],
        },
      ],
    },
  }),
  createOverviewDestination({
    slug: "lake-kariba",
    name: "Lake Kariba",
    country: "Zimbabwe",
    region: "Mashonaland West",
    heroImage: "/images/optimized/activities/lake-kariba-scenic-boat-crusie.webp",
    tagline:
      "Enjoy Zimbabwe's vast inland lake, with scenic cruises, shoreline views and waterside stays.",
    overview: {
      short:
        "Discover a lakeside destination shaped by wide water views and changing shorelines.",
      description:
        "Lake Kariba offers opportunities for boat cruises, fishing and houseboat stays, depending on the operator and confirmed package. Activities are subject to weather, water conditions, vessel availability and safety procedures. Confirm departure points, inclusions and transfers before travel.",
    },
    highlights: [
      "Scenic boat cruises and lake views",
      "Houseboat stays where available",
      "Fishing experiences with confirmed operators",
      "Birdlife and changing shoreline scenery",
    ],
    thingsToDo: [
      { name: "Lake Kariba Scenic Boat Cruise", slug: "lake-kariba-boat-cruise" },
    ],
    whyVisit: [
      {
        title: "Relax on the water",
        description:
          "A cruise or houseboat stay can offer a slower-paced way to experience Lake Kariba's open-water scenery.",
      },
      {
        title: "Enjoy lakeside landscapes",
        description:
          "The lake's shoreline, islands and surrounding terrain create varied views throughout the day.",
      },
      {
        title: "Choose a tailored water experience",
        description:
          "Shared cruises, private charters and fishing options differ by operator; confirm vessel, schedule and inclusions.",
      },
    ],
    bestTimeToVisit: {
      overview:
        "Lake Kariba is visited year-round, though heat, rainfall, wind and water conditions vary by season. Check with operators before confirming water-based activities.",
      seasons: [
        {
          period: "Dry season",
          dates: "May – October",
          description:
            "Drier weather is common, though mornings and evenings can be cool and water conditions still vary.",
        },
        {
          period: "Rainy season",
          dates: "November – April",
          description:
            "Warmer weather and seasonal rain are possible. Operators may adjust activities according to conditions.",
        },
      ],
    },
    currency: "United States dollar (USD) commonly used; confirm accepted payment methods",
    languages: "English, Shona and other Zimbabwean languages",
    airport: {
      name: "Kariba Airport",
      code: "KAB",
    },
    travelTips: [
      "Confirm the exact harbour, departure time and transfer arrangements before travel.",
      "Check vessel safety equipment, weather policy and the operator's cancellation terms.",
      "Bring sun protection and suitable layers for time spent on the water.",
    ],
    firstVisitItinerary: {
      title: "Lake Kariba first visit",
      duration: "4 days / 3 nights",
      description:
        "A slow-paced lakeside stay with a confirmed boat cruise and flexible time for relaxing by the water.",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrive in Kariba",
          description:
            "Travel to Kariba, check in and confirm your cruise departure point, transfers and weather arrangements.",
          location: "Kariba",
          accommodation: "Stay at confirmed lakeside or town accommodation.",
          meals: "Meals are arranged independently unless included in your accommodation booking.",
          times: [
            {
              time: "Afternoon",
              title: "Settle in by the lake",
              description:
                "Enjoy a relaxed first afternoon and check the next day's activity details.",
            },
          ],
        },
        {
          day: "Day 2",
          title: "Take a scenic Lake Kariba cruise",
          description:
            "Enjoy the lake from the water with a confirmed operator. Cruise timings and routes depend on vessel availability and conditions.",
          location: "Lake Kariba",
          meals: "Check what refreshments are included with the cruise.",
          times: [
            {
              time: "Morning or afternoon",
              title: "Scenic boat cruise",
              description:
                "Take a scheduled or private cruise after confirming the harbour, safety arrangements and weather policy.",
              activitySlug: "lake-kariba-boat-cruise",
            },
          ],
        },
        {
          day: "Day 3",
          title: "A flexible lakeside day",
          description:
            "Keep plans flexible for a second confirmed activity, time at your accommodation or a change caused by weather.",
          location: "Kariba and Lake Kariba",
          meals: "Arrange meals in Kariba or confirm the options at your accommodation.",
          times: [
            {
              time: "Morning",
              title: "Optional lake activity",
              description:
                "Ask your operator about available activities and confirm all safety and transfer details.",
            },
            {
              time: "Afternoon",
              title: "Relax and enjoy the shoreline",
              description:
                "Spend time at your accommodation and prepare for departure.",
            },
          ],
        },
        {
          day: "Day 4",
          title: "Depart Kariba",
          description:
            "Check out and continue your trip using transport arranged in advance.",
          location: "Kariba",
          meals: "Confirm breakfast and checkout arrangements.",
          times: [
            {
              time: "Morning",
              title: "Onward transfer",
              description:
                "Allow time for the road journey or airport transfer and confirm current conditions.",
            },
          ],
        },
      ],
    },
  }),
  createOverviewDestination({
    slug: "mana-pools-national-park",
    name: "Mana Pools National Park",
    country: "Zimbabwe",
    region: "Mashonaland West",
    heroImage: "/images/activities/mana-pools-walking-and-canoe-safaris.jpg",
    tagline:
      "Experience a remote Zambezi wilderness through guided walking, canoeing and wildlife viewing.",
    overview: {
      short:
        "Explore a remote national park along the Zambezi River, with seasonal activities and access.",
      description:
        "Mana Pools National Park lies along the Zambezi River in northern Zimbabwe and is known for riverine landscapes and wildlife experiences. Walking safaris and canoe trips are offered only through suitable operators and subject to park rules, water levels and safety conditions. Access can be challenging, so plan transport, accommodation and permits in advance.",
    },
    highlights: [
      "Zambezi River and floodplain scenery",
      "Guided walking safaris where permitted",
      "Canoe excursions with qualified operators",
      "Remote wilderness camps and wildlife viewing",
    ],
    thingsToDo: [
      { name: "Mana Pools Walking & Canoe Safari", slug: "mana-pools-walking-canoe-safari" },
    ],
    whyVisit: [
      {
        title: "Experience a remote wilderness",
        description:
          "Mana Pools offers a more remote safari setting; logistics and access should be arranged with experienced operators.",
      },
      {
        title: "Explore on foot or by canoe",
        description:
          "Activities depend on permits, local conditions and qualified guides. Follow all safety instructions.",
      },
      {
        title: "Discover riverine habitats",
        description:
          "The Zambezi and its floodplain shape the area's scenery and seasonal wildlife experiences.",
      },
    ],
    bestTimeToVisit: {
      overview:
        "Mana Pools has seasonal access and activity conditions. The dry months are commonly used for safari travel, while rainy-season access and operations may be limited.",
      seasons: [
        {
          period: "Dry season",
          dates: "May – October",
          description:
            "Many safari operations run during the dry season, subject to park access, local conditions and operator schedules.",
        },
        {
          period: "Rainy season",
          dates: "November – April",
          description:
            "Rain may affect roads and access; some camps or activities may operate seasonally or close.",
        },
      ],
    },
    currency: "United States dollar (USD) commonly used; confirm accepted payment methods",
    languages: "English, Shona and other Zimbabwean languages",
    airport: {
      name: "Harare Robert Gabriel Mugabe International Airport",
      code: "HRE",
    },
    travelTips: [
      "Arrange park access, accommodation and specialist transfers well in advance.",
      "Use qualified guides for walking and canoe activities and follow their safety instructions.",
      "Confirm seasonal opening dates, road conditions and required permits before travel.",
    ],
    firstVisitItinerary: {
      title: "Mana Pools first safari",
      duration: "5 days / 4 nights",
      description:
        "A first-time remote safari with several nights at one camp and guided activities arranged around park access, water levels and safety conditions.",
      itinerary: [
        {
          day: "Day 1",
          title: "Travel to Mana Pools",
          description:
            "Reach your confirmed camp using the arranged transfer. Access can be remote and seasonal, so follow your operator's instructions.",
          location: "Mana Pools National Park",
          accommodation: "Stay at your confirmed safari camp.",
          meals: "Confirm the camp meal plan, park access and transfer inclusions.",
          times: [
            {
              time: "On arrival",
              title: "Camp check-in and safety briefing",
              description:
                "Review camp rules, wildlife safety and the activity plan with your guides.",
            },
          ],
        },
        {
          day: "Day 2",
          title: "Guided walking safari",
          description:
            "Explore on foot only with a qualified guide and where park rules and conditions permit.",
          location: "Mana Pools National Park",
          meals: "Meals depend on the confirmed camp booking.",
          times: [
            {
              time: "Morning",
              title: "Walking and wildlife interpretation",
              description:
                "Follow your guide's safety instructions throughout the walk.",
              activitySlug: "mana-pools-walking-canoe-safari",
            },
            {
              time: "Afternoon",
              title: "Rest at camp",
              description:
                "Return to camp and follow staff guidance about moving around the area.",
            },
          ],
        },
        {
          day: "Day 3",
          title: "Explore the Zambezi by canoe",
          description:
            "Take a canoe outing only with a qualified operator and when water levels and safety conditions are suitable.",
          location: "Zambezi River, Mana Pools",
          meals: "Confirm activity timing and meals with your operator.",
          times: [
            {
              time: "Morning or afternoon",
              title: "Guided canoe safari",
              description:
                "The operator confirms the route and whether conditions are appropriate for your travel dates.",
              activitySlug: "mana-pools-walking-canoe-safari",
            },
          ],
        },
        {
          day: "Day 4",
          title: "A flexible safari day",
          description:
            "Choose another guided activity or enjoy a slower camp day, following local guidance and seasonal availability.",
          location: "Mana Pools National Park",
          meals: "Meals depend on the confirmed camp booking.",
          times: [
            {
              time: "Morning",
              title: "Optional guided wildlife activity",
              description:
                "Ask your guide about suitable activities for current park, river and wildlife conditions.",
            },
            {
              time: "Afternoon",
              title: "Relax at camp",
              description:
                "Enjoy the setting and prepare for your transfer the following day.",
            },
          ],
        },
        {
          day: "Day 5",
          title: "Depart Mana Pools",
          description:
            "Leave with your pre-arranged transfer and allow extra time for remote-area logistics.",
          location: "Mana Pools National Park",
          meals: "Confirm breakfast and departure timing with your camp.",
          times: [
            {
              time: "Morning",
              title: "Onward transfer",
              description:
                "Follow the camp team's instructions and reconfirm the transfer before departure.",
            },
          ],
        },
      ],
    },
  }),
];

const destinationOrder: Record<string, number> = {
  "victoria-falls": 0,
  "cape-town": 1,
  "chobe-national-park": 2,
  "okavango-delta": 3,
  "kruger-national-park": 4,
  sossusvlei: 5,
  "etosha-national-park": 6,
  "hwange-national-park": 7,
  swakopmund: 8,
  "mana-pools-national-park": 9,
  "matobo-hills": 10,
  "great-zimbabwe": 11,
  "lake-kariba": 12,
};

export const destinations = destinationEntries.sort(
  (left, right) =>
    (destinationOrder[left.slug] ?? Number.POSITIVE_INFINITY) -
    (destinationOrder[right.slug] ?? Number.POSITIVE_INFINITY),
);