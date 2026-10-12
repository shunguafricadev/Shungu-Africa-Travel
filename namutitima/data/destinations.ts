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

export type DestinationItinerary = {
  title: string;
  duration: string;
  description: string;
  outline: string[];
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
        name: "Victoria Falls Tour",
        slug: "victoria-falls-tour",
      },

      {
        name: "Zambezi Sunset Cruise",
        slug: "zambezi-sunset-cruise",
      },

      {
        name: "White-water Rafting",
        slug: "white-water-rafting",
      },

      {
        name: "Bungee Jumping",
        slug: "bungee-jumping",
      },

      {
        name: "Victoria Falls Canopy Tour",
        slug: "victoria-falls-canopy-tour",
      },

      {
        name: "Scenic Flight",
        slug: "victoria-falls-scenic-flight",
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
              name: "Victoria Falls Tour",
              slug: "victoria-falls-tour",
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
              name: "Victoria Falls Tour",
              slug: "victoria-falls-tour",
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
              name: "Victoria Falls Tour",
              slug: "victoria-falls-tour",
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
              name: "Victoria Falls Canopy Tour",
              slug: "victoria-falls-canopy-tour",
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
              name: "Victoria Falls Tour",
              slug: "victoria-falls-tour",
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
            name: "Victoria Falls Tour",
            slug: "victoria-falls-tour",
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
            name: "Victoria Falls Tour",
            slug: "victoria-falls-tour",
          },

          {
            name: "Zambezi Sunset Cruise",
            slug: "zambezi-sunset-cruise",
          },

          {
            name: "Victoria Falls Canopy Tour",
            slug: "victoria-falls-canopy-tour",
          },
        ],
      },

      {
        duration: "4–5 nights",
        description:
          "A longer stay gives you time to combine the Falls with adventure, wildlife, river experiences and a wider excursion while keeping a comfortable pace.",

        activities: [
          {
            name: "Victoria Falls Tour",
            slug: "victoria-falls-tour",
          },

          {
            name: "Zambezi Sunset Cruise",
            slug: "zambezi-sunset-cruise",
          },

          {
            name: "Victoria Falls Canopy Tour",
            slug: "victoria-falls-canopy-tour",
          },

          {
            name: "White-water Rafting",
            slug: "white-water-rafting",
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
        "victoria-falls-tour",
        "zambezi-sunset-cruise",
        "white-water-rafting",
        "bungee-jumping",
        "victoria-falls-canopy-tour",
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
      "victoria-falls-tour",
      "zambezi-sunset-cruise",
      "white-water-rafting",
      "bungee-jumping",
      "victoria-falls-canopy-tour",
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
      { name: "Visit Table Mountain", slug: "cape-town-table-mountain" },
      { name: "Explore the Cape Peninsula", slug: "cape-town-cape-peninsula" },
      { name: "Discover the V&A Waterfront", slug: "cape-town-waterfront" },
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
      { name: "Join a guided game drive", slug: "kruger-guided-game-drive" },
      { name: "Explore the park on a self-drive route", slug: "kruger-self-drive-safari" },
      { name: "Stay at a park rest camp", slug: "kruger-rest-camp-stay" },
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
      { name: "Explore the Sossusvlei dunes", slug: "sossusvlei-dune-visit" },
      { name: "Visit Deadvlei", slug: "sossusvlei-deadvlei" },
      { name: "Discover Sesriem Canyon", slug: "sesriem-canyon" },
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
      { name: "Explore Etosha on a game drive", slug: "etosha-game-drive" },
      { name: "Visit wildlife waterholes", slug: "etosha-waterholes" },
      { name: "Discover the Etosha Pan", slug: "etosha-pan" },
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
      { name: "Join a guided Chobe game drive", slug: "chobe-game-drive" },
      { name: "Take a Chobe River boat safari", slug: "chobe-river-boat-safari" },
      { name: "Explore Kasane and the Chobe region", slug: "kasane-chobe-region" },
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
      { name: "Take a mokoro excursion", slug: "okavango-mokoro-excursion" },
      { name: "Explore the Delta by boat", slug: "okavango-boat-safari" },
      { name: "Join a guided game drive", slug: "okavango-game-drive" },
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
      { name: "Explore Swakopmund's historic centre", slug: "swakopmund-town-visit" },
      { name: "Visit the Walvis Bay lagoon", slug: "walvis-bay-lagoon" },
      { name: "Discover the surrounding desert", slug: "swakopmund-desert-experience" },
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
      { name: "Explore the park's waterholes", slug: "hwange-waterholes" },
      { name: "Stay at a Hwange safari camp", slug: "hwange-safari-camp" },
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
      { name: "Take a guided Great Zimbabwe tour", slug: "great-zimbabwe-guided-tour" },
      { name: "Explore the Great Enclosure", slug: "great-zimbabwe-enclosure" },
      { name: "Visit the site museum", slug: "great-zimbabwe-museum" },
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
      { name: "Take a guided Matobo Hills tour", slug: "matobo-hills-guided-tour" },
      { name: "Visit scenic granite viewpoints", slug: "matobo-hills-viewpoints" },
      { name: "Explore local heritage sites", slug: "matobo-heritage-sites" },
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
      { name: "Take a Lake Kariba boat cruise", slug: "lake-kariba-boat-cruise" },
      { name: "Arrange a houseboat stay", slug: "lake-kariba-houseboat-stay" },
      { name: "Explore Kariba town and viewpoints", slug: "kariba-town-visit" },
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
      { name: "Join a guided Mana Pools walking safari", slug: "mana-pools-walking-safari" },
      { name: "Take a guided canoe safari", slug: "mana-pools-canoe-safari" },
      { name: "Explore the Zambezi floodplain", slug: "mana-pools-zambezi-floodplain" },
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