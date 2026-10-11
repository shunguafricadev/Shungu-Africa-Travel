export type Activity = {
  slug: string;
  name: string;
  category: string;
  location: string;
  country: string;
  image: string;
  badge?: string;
  description: string;
  rating: number | null;
  reviewCount: number;
  duration: string;
  groupSize: string;
  pickup: string;
  highlights: string[];
  itinerary: {
    time: string;
    title: string;
    description: string;
  }[];
  included: string[];
  notIncluded: string[];
  information: string[];
  meetingPoint: {
    name: string;
    description: string;
  };
  pricing: {
    adult: {
      amount: number;
      currency: string;
      label: "From per person";
    };
    child: {
      amount: number;
      currency: string;
      label: "From per person";
    };
  };
  availability: unknown[];
  cancellation: {
    policy: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const activities: Activity[] = [
  {
    slug: "guided-victoria-falls-tour",
    name: "Guided Victoria Falls Tour",
    category: "Nature & Sightseeing",
    location: "Victoria Falls",
    country: "Zimbabwe",
    image: "/images/optimized/activities/guided-victoria-falls-tour.webp",
    badge: "Must-Do Experience",
    description:
      "Discover the spectacular Victoria Falls on a guided walking tour through the rainforest on the Zimbabwean side. Accompanied by a knowledgeable local guide, explore designated viewpoints, learn about the formation and history of the falls, and enjoy opportunities to photograph the cascading water, rainforest vegetation and dramatic gorge scenery. This experience is ideal for first-time visitors, couples, families and small groups looking to understand one of Africa's most celebrated natural landmarks.",
    rating: null,
    reviewCount: 0,
    duration: "2–3 hours",
    groupSize:
      "Private or small group; maximum group size subject to supplier confirmation",
    pickup:
      "Hotel pickup in Victoria Falls may be available at an additional cost or as a confirmed package inclusion. Otherwise, guests meet at the agreed entrance to Victoria Falls Rainforest.",
    highlights: [
      "Explore Victoria Falls from the Zimbabwean side",
      "Walk through the rainforest along designated visitor paths",
      "Visit scenic viewpoints overlooking the falls",
      "Learn about the geology, history and local significance of Victoria Falls",
      "Enjoy photography opportunities throughout the tour",
      "Hear about the Zambezi River and the surrounding ecosystem",
      "Choose a private guide or join a group, subject to availability",
    ],
    itinerary: [
      {
        time: "Before the tour",
        title: "Meet your guide",
        description:
          "Meet at the confirmed meeting point or arrange a pre-booked hotel pickup. Your guide explains the tour plan, expected walking conditions, safety guidance and visitor requirements.",
      },
      {
        time: "Tour start",
        title: "Enter Victoria Falls Rainforest",
        description:
          "Begin the guided walk through the designated rainforest paths. Learn how the spray from the falls supports the local vegetation and creates a distinctive microclimate.",
      },
      {
        time: "During the walk",
        title: "Explore the viewpoints",
        description:
          "Visit accessible designated viewpoints along the Zimbabwean side of the falls. Your guide shares information about the waterfall, the Zambezi River, local history and the surrounding landscape. The exact viewpoints visited depend on path access and prevailing conditions.",
      },
      {
        time: "Throughout the tour",
        title: "Photography and interpretation",
        description:
          "Pause at suitable viewpoints to take photographs and ask questions. Spray levels, visibility and the amount of water flowing over the falls vary by season.",
      },
      {
        time: "Tour conclusion",
        title: "Finish at the visitor area",
        description:
          "Conclude the guided walk near the visitor entrance. Guests can continue with other independently arranged activities or return to their accommodation using their confirmed transport arrangements.",
      },
    ],
    included: [
      "Guided walking tour with a local guide, subject to supplier confirmation",
      "Tour commentary and interpretation",
      "Time to visit viewpoints included in the confirmed tour",
    ],
    notIncluded: [
      "Victoria Falls Rainforest entrance fee unless explicitly confirmed in the final quotation",
      "Hotel pickup and drop-off unless included in the booking",
      "Meals, snacks and drinks",
      "Personal expenses and gratuities",
      "Travel insurance",
      "Visa fees or cross-border arrangements",
      "Other activities such as helicopter flights, sunset cruises or adventure sports",
    ],
    information: [
      "Destination: Victoria Falls, Zimbabwe.",
      "This listing covers the Zimbabwean side of Victoria Falls only; a visit to the Zambian side is a separate cross-border arrangement.",
      "Allow approximately 2–3 hours for the experience, with additional time for transfers, entrance procedures and photography.",
      "The tour involves walking on designated paths, which may be wet, slippery or uneven.",
      "Wear comfortable walking shoes and weather-appropriate clothing. Waterproof protection may be useful when water spray is heavy.",
      "Bring drinking water, sun protection and a camera or phone. Protect electronic equipment from moisture.",
      "The amount of water, spray, visibility and viewpoint conditions vary seasonally.",
      "Some viewpoints or paths may be restricted due to weather, maintenance or safety conditions.",
      "Guests should check accessibility requirements in advance. The route may not be suitable for every mobility level.",
      "Children should be supervised by their accompanying adults throughout the tour.",
      "Confirm the current entrance fee, guide arrangements, operating hours, pickup options and any applicable taxes before confirming a booking.",
      "Any listed price is an indicative draft estimate, not a verified supplier quote.",
    ],
    meetingPoint: {
      name: "Victoria Falls Rainforest Entrance, Zimbabwe",
      description:
        "Meet at the main visitor entrance to Victoria Falls Rainforest in Victoria Falls, Zimbabwe, at the time stated on the booking confirmation. The exact meeting instructions and any hotel pickup must be confirmed before payment.",
    },
    pricing: {
      adult: {
        amount: 30,
        currency: "USD",
        label: "From per person",
      },
      child: {
        amount: 15,
        currency: "USD",
        label: "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy: Cancellation terms are subject to the confirmed supplier's conditions and the booking agreement. Before accepting payment, confirm the cancellation deadline, refund rules, no-show terms and arrangements for weather-related or safety-related interruptions. Do not publish this draft as a guaranteed refund policy.",
    },
    faqs: [
      {
        question: "How long does the guided Victoria Falls tour take?",
        answer:
          "Allow approximately 2–3 hours for the guided visit, plus additional time for transfers and entrance procedures. The actual duration depends on the route, group pace and conditions.",
      },
      {
        question: "Does the price include the Victoria Falls entrance fee?",
        answer:
          "Not in this draft listing. The entrance fee must be confirmed with the supplier and clearly stated in the final quotation before booking.",
      },
      {
        question: "Will I get wet during the tour?",
        answer:
          "You may get wet from the waterfall spray, especially when water levels and spray are high. Conditions vary by season, so consider bringing waterproof protection for clothing and electronic devices.",
      },
      {
        question: "Is hotel pickup included?",
        answer:
          "Hotel pickup is not guaranteed in the draft price. It can be quoted separately or included once transport arrangements and supplier rates are confirmed.",
      },
      {
        question: "Can children join the tour?",
        answer:
          "The tour may suit families, but the accompanying adult remains responsible for supervising children. Confirm the supplier's age rules, child rates and any route-specific restrictions before booking.",
      },
      {
        question: "Can I visit the Zambian side as part of this tour?",
        answer:
          "This activity covers the Zimbabwean side only. Visiting Zambia requires a separate cross-border plan, appropriate travel documents and confirmation of transport, fees and visa requirements.",
      },
      {
        question: "What should I bring?",
        answer:
          "Wear comfortable walking shoes and bring drinking water, sun protection and a camera or phone. Waterproof protection is useful when the waterfall spray is heavy.",
      },
      {
        question: "Is the tour available year-round?",
        answer:
          "Victoria Falls is a year-round destination, but water flow, spray, visibility and path conditions change with the seasons. Confirm current conditions and any temporary access restrictions before the tour.",
      },
    ],
  },
  {
    slug: "zambezi-sunset-cruise",
    name: "Zambezi Sunset Cruise",
    category: "River & Water Experiences",
    location: "Victoria Falls",
    country: "Zimbabwe",
    image: "/images/optimized/activities/zambezi-sunset-cruise.webp",
    badge: "Popular Experience",
    description:
      "Enjoy a relaxing sunset cruise on the Zambezi River near Victoria Falls, Zimbabwe. Take in the changing colours of the African sky as you travel along the river, with opportunities to spot birds and other wildlife along the banks. Depending on the season and conditions, you may see hippos, crocodiles and elephants near the water. This experience is ideal for couples, families, friends and small groups seeking a memorable evening on the river.",
    rating: null,
    reviewCount: 0,
    duration: "2.5–3 hours",
    groupSize:
      "Shared cruise or private charter, subject to operator availability",
    pickup:
      "Hotel transfers in Victoria Falls may be available at an additional cost or as a confirmed booking inclusion. The cruise departure point and pickup arrangements must be confirmed with the operator.",
    highlights: [
      "Cruise along the Zambezi River near Victoria Falls",
      "Enjoy views of the African sunset from the water",
      "Look out for hippos, crocodiles and other wildlife",
      "Observe river birds and the surrounding natural landscape",
      "Enjoy a relaxed atmosphere with friends, family or fellow travellers",
      "Capture sunset photographs from the boat",
      "Upgrade to a private cruise if offered by the confirmed operator",
    ],
    itinerary: [
      {
        time: "Before departure",
        title: "Transfer to the river",
        description:
          "Meet your driver at the confirmed pickup point or make your own way to the operator's designated departure location. Check in and receive the boarding instructions and safety briefing.",
      },
      {
        time: "Cruise departure",
        title: "Board the cruise boat",
        description:
          "Board the vessel and settle into your seat. The crew explains onboard safety procedures and the expected cruise route.",
      },
      {
        time: "During the cruise",
        title: "Explore the Zambezi River",
        description:
          "Cruise along the river while enjoying views of the surrounding landscape. Watch for wildlife and birds from a safe distance; sightings are never guaranteed.",
      },
      {
        time: "Sunset",
        title: "Enjoy the sunset",
        description:
          "Take in the evening light over the river and capture photographs as the sky changes colour. Food and drinks depend on the cruise option and the inclusions confirmed at booking.",
      },
      {
        time: "After sunset",
        title: "Return to the departure point",
        description:
          "Return to the designated landing point and disembark according to the crew's instructions. Board your pre-arranged transfer if one has been confirmed.",
      },
    ],
    included: [
      "Shared sunset cruise ticket, subject to supplier confirmation",
      "Onboard crew and safety briefing",
      "Scheduled river cruise",
      "Onboard refreshments only if explicitly included in the confirmed cruise option",
    ],
    notIncluded: [
      "Hotel pickup and drop-off unless confirmed in the booking",
      "Premium drinks, meals or special beverage packages unless specified",
      "Private boat charter unless specifically booked",
      "Personal expenses and gratuities",
      "Travel insurance",
      "Other activities such as Victoria Falls tours, scenic flights or safari excursions",
    ],
    information: [
      "Destination: Zambezi River near Victoria Falls, Zimbabwe.",
      "The exact departure point, route and cruise duration depend on the selected operator and vessel.",
      "Allow approximately 2–3 hours for the cruise, with additional time for transfers and check-in.",
      "Wildlife sightings are possible but cannot be guaranteed.",
      "Sunset departure times change throughout the year. Confirm the correct departure time for the travel date.",
      "River conditions, weather, water levels and operator safety decisions may affect departure or the route.",
      "Follow all crew instructions and remain seated or in designated areas whenever directed.",
      "Tell the operator in advance about mobility requirements, dietary needs or other relevant requests.",
      "Children's admission rules and supervision requirements must be confirmed with the supplier.",
      "Confirm whether drinks, snacks, meals, transfers, taxes and any applicable fees are included in the selected cruise.",
      "Any listed price is an indicative draft estimate, not a verified supplier quote.",
    ],
    meetingPoint: {
      name: "Confirmed Zambezi River Cruise Departure Point",
      description:
        "The operator's designated departure point on the Zambezi River near Victoria Falls, Zimbabwe. The exact location, check-in time, directions and pickup arrangements must be provided in the booking confirmation.",
    },
    pricing: {
      adult: {
        amount: 60,
        currency: "USD",
        label: "From per person",
      },
      child: {
        amount: 30,
        currency: "USD",
        label: "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy: Cancellation, refund and rescheduling conditions are subject to the selected cruise operator's terms. Confirm the cancellation deadline, no-show conditions and arrangements for weather-related or safety-related cancellations before taking payment. Do not publish this draft as a guaranteed refund policy.",
    },
    faqs: [
      {
        question: "How long does the Zambezi sunset cruise last?",
        answer:
          "Allow approximately 2–3 hours, including boarding and the scheduled river cruise. Exact durations vary by operator and cruise option.",
      },
      {
        question: "Will I see wildlife during the cruise?",
        answer:
          "You may see hippos, crocodiles, elephants or birds, depending on the route and conditions. Wildlife sightings are not guaranteed.",
      },
      {
        question: "Are drinks and snacks included?",
        answer:
          "This depends on the selected cruise. Confirm which drinks, snacks or meals are included before booking, and check whether premium beverages incur extra charges.",
      },
      {
        question: "Is hotel pickup included?",
        answer:
          "Not automatically in this draft listing. Pickup and drop-off can be quoted separately or included once the operator's transfer arrangements and costs are confirmed.",
      },
      {
        question: "What time does the cruise depart?",
        answer:
          "Departure is scheduled around sunset, but the exact check-in and sailing times change throughout the year. Your booking confirmation should state the correct time for your travel date.",
      },
      {
        question: "Can children join the cruise?",
        answer:
          "Family participation depends on the operator's age rules and safety requirements. Confirm child pricing, supervision requirements and any minimum-age restrictions before booking.",
      },
      {
        question: "Can we book a private sunset cruise?",
        answer:
          "A private charter may be available through selected operators. It requires separate confirmation of vessel availability, capacity, route, inclusions and price.",
      },
      {
        question: "Can the cruise be cancelled due to weather?",
        answer:
          "Weather, river conditions and safety decisions can affect operations. The operator's confirmed cancellation and rescheduling policy will determine the options available if the cruise cannot proceed.",
      },
    ],
  },
  {
    slug: "hwange-game-drive",
    name: "Hwange National Park Game Drive",
    category: "Wildlife & Safari",
    location: "Hwange National Park",
    country: "Zimbabwe",
    image: "/images/optimized/activities/hwange-national-park-game-drive.webp",
    badge: "Wildlife Safari",
    description:
      "Discover Zimbabwe's iconic wildlife on a guided game drive in Hwange National Park, the country's largest national park. Travel through varied savanna and woodland habitats in a safari vehicle with an experienced guide, looking for elephants, giraffes, zebras, buffalo, antelope and, with luck, predators such as lions and leopards. Learn about the park's ecosystems, wildlife behaviour and conservation while exploring the African bush. Choose a morning, afternoon or full-day experience according to the operating area, available vehicle and confirmed supplier arrangements.",
    rating: null,
    reviewCount: 0,
    duration: "3 hours",
    groupSize:
      "Shared or private safari vehicle; capacity depends on the confirmed operator",
    pickup:
      "Pickup may be available from a participating lodge or an agreed meeting point in the Hwange area. Transfers from Victoria Falls or other distant locations must be arranged and priced separately unless expressly included.",
    highlights: [
      "Explore wildlife habitats in Hwange National Park",
      "Look for elephants, giraffes, zebras, buffalo and antelope",
      "Possible sightings of lions, leopards, wild dogs and other predators",
      "Learn about wildlife behaviour and conservation from a safari guide",
      "Enjoy photography opportunities in the African bush",
      "Choose a morning or afternoon drive, subject to availability",
      "Ask about private vehicle options for families or small groups",
      "Experience one of Zimbabwe's most important wildlife destinations",
    ],
    itinerary: [
      {
        time: "Before departure",
        title: "Meet your safari guide",
        description:
          "Meet at the confirmed lodge, camp or designated meeting point. Receive an introduction to the planned route, wildlife-viewing expectations and safari safety rules.",
      },
      {
        time: "Early morning or afternoon",
        title: "Depart in a safari vehicle",
        description:
          "Board the confirmed safari vehicle and begin exploring the designated wildlife-viewing area. Morning and afternoon departures depend on the operator's schedule and park access arrangements.",
      },
      {
        time: "During the drive",
        title: "Search for wildlife",
        description:
          "Travel along permitted park roads and tracks while your guide helps identify wildlife, tracks, birds and signs of animal activity. Sightings depend on wildlife movements, season and conditions.",
      },
      {
        time: "During the drive",
        title: "Wildlife interpretation and photography",
        description:
          "Pause at suitable locations when conditions permit to observe animals and take photographs. Follow the guide's instructions and remain inside the vehicle unless the guide confirms that leaving it is permitted and safe.",
      },
      {
        time: "End of the drive",
        title: "Return to the agreed drop-off point",
        description:
          "Return to the confirmed lodge, camp or meeting point. Any onward transfer must be arranged separately unless it is listed in the confirmed booking.",
      },
    ],
    included: [
      "One scheduled game drive of the confirmed duration",
      "Safari guide and vehicle, subject to the selected operator's confirmation",
      "Wildlife interpretation during the drive",
    ],
    notIncluded: [
      "National park entry fees and conservation levies unless explicitly included",
      "Transfers to and from the safari departure point unless confirmed",
      "Accommodation and overnight stays",
      "Meals, snacks and drinks unless specified",
      "Private vehicle or exclusive guide unless booked",
      "Gratuities and personal expenses",
      "Travel insurance",
      "Additional game drives or other safari activities",
      "Flights or charter transfers",
    ],
    information: [
      "Destination: Hwange National Park, Zimbabwe.",
      "Hwange is a large national park. The actual safari area and departure point must be confirmed because access and transfer times vary.",
      "A standard game drive is estimated at approximately 3 hours. Full-day options require separate confirmation of duration, route, meals and price.",
      "Wildlife sightings cannot be guaranteed. The species seen depend on animal movements, season, weather and the route taken.",
      "The dry season often concentrates wildlife around water sources, but good sightings are possible at other times of year.",
      "Wear neutral-coloured, comfortable clothing and closed shoes. Bring sun protection, drinking water and binoculars if available.",
      "Bring a camera and protect electronic equipment from dust.",
      "Follow the guide's instructions at all times. Do not feed, approach or disturb wildlife.",
      "Confirm the minimum age for children, vehicle configuration and any accessibility requirements before booking.",
      "Confirm the exact departure point, pickup arrangements, park fees, guide and vehicle inclusions, operating hours and cancellation terms with the supplier.",
      "Night drives and walking safaris are separate activities and must only be offered where authorised and available through the selected operator.",
      "Any listed price is an indicative draft estimate, not a verified supplier quote.",
    ],
    meetingPoint: {
      name: "Confirmed Hwange Safari Departure Point",
      description:
        "The departure point will be the participating lodge, camp, park access point or other location agreed with the safari operator. Hwange covers a large area, so the exact meeting location, transfer time and check-in instructions must be confirmed before the guest's booking is finalised.",
    },
    pricing: {
      adult: {
        amount: 70,
        currency: "USD",
        label: "From per person",
      },
      child: {
        amount: 35,
        currency: "USD",
        label: "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy: Cancellation, refunds, rescheduling and no-show conditions are subject to the selected safari operator's terms. Confirm the applicable deadlines and the treatment of park fees before accepting payment. Weather, park access or safety decisions may affect operations. Publish only the final policy agreed with the supplier.",
    },
    faqs: [
      {
        question: "What animals can I see on a Hwange game drive?",
        answer:
          "Hwange is known for elephants and also supports giraffes, zebras, buffalo, antelope, lions, leopards, wild dogs and many bird species. Wildlife sightings are not guaranteed.",
      },
      {
        question: "How long does a game drive last?",
        answer:
          "A standard drive is estimated at approximately 3 hours. Full-day drives may be available through selected operators and require separate confirmation.",
      },
      {
        question: "Are park fees included in the price?",
        answer:
          "Not automatically in this draft listing. Confirm the current park entry fees, conservation levies and any other applicable charges with the supplier, then state clearly whether they are included.",
      },
      {
        question: "Is pickup from Victoria Falls included?",
        answer:
          "No, not in the draft price. Hwange is a substantial road journey from Victoria Falls, and transfer costs and timing depend on the actual safari location. Quote transport separately unless an operator confirms it as an inclusion.",
      },
      {
        question: "What is the best time for a Hwange game drive?",
        answer:
          "Wildlife viewing varies by season and location. During drier periods, animals may gather around water sources, while other seasons offer different landscapes and conditions. Your operator can advise on the expected conditions for your travel dates.",
      },
      {
        question: "Can children join a Hwange game drive?",
        answer:
          "Family participation depends on the operator's age policy, vehicle arrangements and activity rules. Confirm child age limits, supervision requirements and child pricing before booking.",
      },
      {
        question: "Can I book a private game drive?",
        answer:
          "A private vehicle and guide may be available through selected operators. Confirm vehicle capacity, exclusive-use charges, route, fees and availability before quoting.",
      },
      {
        question: "Are walking safaris or night drives included?",
        answer:
          "No. They are separate activities and are only offered where the relevant operator is authorised and operating them. Confirm availability, age restrictions, fees and safety requirements separately.",
      },
    ],
  },
  {
    slug: "zambezi-white-water-rafting",
    name: "Zambezi White-Water Rafting",
    category: "Adventure & Adrenaline",
    location: "Zambezi River",
    country: "Zimbabwe",
    image: "/images/optimized/activities/zambezi-white-water-rafting.webp",
    badge: "Adventure Experience",
    description:
      "Experience the excitement of white-water rafting on the Zambezi River below Victoria Falls. Accompanied by a qualified rafting team, navigate sections of the dramatic Batoka Gorge and experience the river's powerful rapids, towering rock walls and spectacular natural scenery. The excursion typically combines a safety briefing, preparation, a guided rafting session and the required access and return arrangements. It is suited to adventurous travellers who meet the selected operator's fitness, age and safety requirements. Routes and operating periods depend on water levels, weather, access conditions and the operator's safety assessment.",
    rating: null,
    reviewCount: 0,
    duration: "Half day",
    groupSize:
      "Shared rafting group; minimum and maximum group sizes depend on the operator and river conditions",
    pickup:
      "Hotel pickup in Victoria Falls may be available if confirmed by the operator. The rafting meeting point, gorge access transport and return arrangements must be confirmed at booking.",
    highlights: [
      "Raft on the Zambezi River below Victoria Falls",
      "Experience the rapids of the Batoka Gorge",
      "Enjoy dramatic gorge scenery and river views",
      "Receive a safety briefing and equipment orientation",
      "Raft with an operator's qualified river team",
      "Experience an active outdoor adventure in Zimbabwe",
      "Combine the rafting excursion with other Victoria Falls activities, subject to timing",
    ],
    itinerary: [
      {
        time: "Before departure",
        title: "Check-in and eligibility briefing",
        description:
          "Meet the operator at the confirmed departure point. Complete the required registration and safety checks, and confirm that you meet the operator's age, health, fitness and other participation requirements.",
      },
      {
        time: "Pre-rafting",
        title: "Safety briefing and equipment fitting",
        description:
          "Receive instructions from the rafting team covering paddling commands, river safety, emergency procedures and group coordination. Fit the safety equipment supplied by the operator.",
      },
      {
        time: "River access",
        title: "Travel to the rafting section",
        description:
          "Follow the operator's arrangements for accessing the river. Depending on the route and operating plan, reaching the launch point or returning from the gorge may involve steep paths, hiking or other physical exertion.",
      },
      {
        time: "On the river",
        title: "Guided white-water rafting",
        description:
          "Raft the designated river section under the direction of the rafting team. The rapids attempted and the exact route depend on water levels, conditions, the operator's plan and the group's suitability.",
      },
      {
        time: "After rafting",
        title: "Exit the gorge and return",
        description:
          "Complete the operator's river exit and return arrangements. The return may involve an uphill walk or climb, depending on the route and conditions. Allow sufficient time for the full excursion rather than only the time spent on the water.",
      },
    ],
    included: [
      "Scheduled rafting excursion, subject to supplier confirmation",
      "Rafting guide or river team",
      "Standard rafting safety equipment supplied by the operator",
      "Pre-activity safety briefing",
      "Gorge access and return arrangements only where expressly included in the confirmed booking",
    ],
    notIncluded: [
      "Hotel pickup and drop-off unless confirmed",
      "Meals, snacks and drinks unless specified",
      "Photographs or videos unless included in the selected option",
      "Travel insurance, including any required adventure-sports cover",
      "Personal expenses and gratuities",
      "Accommodation",
      "Other Victoria Falls activities",
      "Any extra charges not expressly included in the confirmed quotation",
    ],
    information: [
      "Destination: Zambezi River, Batoka Gorge below Victoria Falls, Zimbabwe.",
      "This activity is physically demanding and involves natural white-water conditions. It is not suitable for every traveller.",
      "Operating dates, route options and permitted rapids depend on seasonal river levels, weather, access and the operator's safety assessment.",
      "High-water and low-water periods may affect which rafting sections operate. Never promise a specific route or grade without confirmation from the operator for the travel date.",
      "The full excursion may take considerably longer than the time spent rafting because of registration, equipment fitting, safety briefing, gorge access and return arrangements.",
      "Gorge access and exit routes may involve steep or strenuous walking or climbing. Guests should assess their fitness and disclose relevant limitations to the operator.",
      "Minimum age, swimming ability, health requirements, maximum participant weight, and other restrictions must be confirmed directly with the selected operator.",
      "Follow all instructions from the rafting team. Do not participate if the operator determines that conditions or an individual's suitability make it unsafe.",
      "Wear the clothing and footwear specified by the operator. Secure valuables and protect any permitted electronic equipment from water.",
      "Confirm whether transfers, access arrangements, equipment, meals, photographs, fees and taxes are included in the final quotation.",
      "Adventure-sports insurance should be checked carefully; ordinary travel insurance may exclude white-water rafting.",
      "Any listed price is an indicative draft estimate, not a verified supplier quote.",
    ],
    meetingPoint: {
      name: "Confirmed Victoria Falls Rafting Operator Meeting Point",
      description:
        "Meet at the location specified by the selected rafting operator in Victoria Falls, Zimbabwe. The exact check-in time, transfer arrangements, river access point and return logistics must be confirmed before the guest's booking is finalised.",
    },
    pricing: {
      adult: {
        amount: 178,
        currency: "USD",
        label: "From per person",
      },
      child: {
        amount: 0,
        currency: "USD",
        label: "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy: Cancellations, refunds, rescheduling and no-show conditions are subject to the selected rafting operator's terms. River levels, weather, access restrictions and safety decisions may cause changes or cancellations. Confirm the supplier's refund or alternative-activity policy before taking payment. Do not publish this draft as a guaranteed refund policy.",
    },
    faqs: [
      {
        question: "Where does the rafting take place?",
        answer:
          "The experience takes place on the Zambezi River below Victoria Falls, in the Batoka Gorge. The exact launch point and route depend on the operator and prevailing conditions.",
      },
      {
        question: "How long does white-water rafting take?",
        answer:
          "Allow approximately half a day or longer for the complete excursion. Check-in, safety briefing, equipment fitting, gorge access and return arrangements add time beyond the rafting session itself.",
      },
      {
        question: "Is rafting available all year?",
        answer:
          "No fixed year-round schedule should be promised. Availability and route options depend on water levels, weather, access and the operator's safety assessment. Confirm the activity for the guest's travel date.",
      },
      {
        question: "Do I need to be a strong swimmer?",
        answer:
          "Swimming ability and other participation requirements are set by the rafting operator and may vary by trip. Confirm the current requirements before booking, and do not assume that a guest is eligible without meeting them.",
      },
      {
        question: "Can children participate?",
        answer:
          "Child eligibility depends on the operator's minimum age, river conditions, route and safety rules. This draft does not set a child price because age eligibility must be confirmed before offering the activity to a child.",
      },
      {
        question: "Is transport included?",
        answer:
          "Transport is not automatically included in this draft price. Confirm whether the operator provides hotel transfers, gorge access transport and the return transfer, then list each inclusion clearly.",
      },
      {
        question: "What should I wear or bring?",
        answer:
          "Follow the operator's equipment and clothing instructions. Bring suitable clothing, secure footwear if required, sun protection and only the personal items the operator permits on the river.",
      },
      {
        question: "What happens if the river conditions are unsafe?",
        answer:
          "The operator may change the route, reschedule or cancel the activity based on its safety assessment. The applicable refund or alternative-activity terms should be confirmed before booking.",
      },
    ],
  },
  {
    slug: "victoria-falls-helicopter-scenic-flight",
    name: "Victoria Falls Helicopter Scenic Flight",
    category: "Scenic Flights & Aerial Experiences",
    location: "Victoria Falls",
    country: "Zimbabwe",
    image: "/images/optimized/activities/victoria-falls-scenic-helicopter-flight.webp",
    badge: "Signature Experience",
    description:
      "Experience the spectacular scale of Victoria Falls from the air on a scenic helicopter flight over the Zambezi River and the surrounding landscape. Enjoy sweeping aerial views of the waterfall, river channels, islands and Batoka Gorge, with opportunities to photograph one of Africa's most remarkable natural landmarks. Flight duration, route and viewing time depend on the selected flight package and operator. This premium experience is ideal for couples, photographers, families and travellers looking for a memorable highlight during their Victoria Falls visit.",
    rating: null,
    reviewCount: 0,
    duration: "15–30 minutes",
    groupSize:
      "Shared helicopter flight or private charter, subject to operator availability and aircraft capacity",
    pickup:
      "Hotel transfers may be available at an additional cost or included in selected packages. Confirm the operator's check-in location, transfer arrangements and reporting time before booking.",
    highlights: [
      "Enjoy aerial views of Victoria Falls",
      "See sections of the Zambezi River and surrounding landscape from above",
      "View the waterfall and Batoka Gorge from a different perspective",
      "Capture aerial photographs where permitted",
      "Choose from available scenic flight durations",
      "Suitable as a premium add-on to a Victoria Falls stay",
      "Ask about private charter options for special occasions",
    ],
    itinerary: [
      {
        time: "Before departure",
        title: "Arrive and check in",
        description:
          "Arrive at the confirmed helicopter operator's check-in location at the required reporting time. Complete passenger registration and provide any information required for safe flight planning.",
      },
      {
        time: "Pre-flight",
        title: "Safety briefing and passenger preparation",
        description:
          "Receive the operator's safety briefing and instructions on boarding, seating, seat belts, headphones and photography. Aircraft allocation and seating are subject to operational requirements, passenger weights and the operator's procedures.",
      },
      {
        time: "Departure",
        title: "Take off for the scenic flight",
        description:
          "Board the assigned helicopter and depart on the confirmed scenic route. The pilot provides aerial views of the waterfall, river and surrounding terrain, subject to the selected flight plan and prevailing conditions.",
      },
      {
        time: "During the flight",
        title: "View Victoria Falls from above",
        description:
          "Enjoy the aerial panorama and photograph the landscape where permitted. The exact route, viewing angles and time spent over particular landmarks depend on the operator's approved flight plan and conditions.",
      },
      {
        time: "After landing",
        title: "Return to the terminal",
        description:
          "Land at the designated operating base and follow the crew's instructions when exiting the aircraft. Continue with a pre-arranged transfer or other activities if included in your booking.",
      },
    ],
    included: [
      "One scenic helicopter flight of the confirmed duration",
      "Pilot and aircraft for the scheduled flight",
      "Pre-flight safety briefing",
      "Passenger safety equipment required for the flight",
    ],
    notIncluded: [
      "Hotel pickup and drop-off unless confirmed",
      "Premium seating or private charter unless booked",
      "Photos or videos unless specified in the selected package",
      "Meals and drinks",
      "Personal expenses and gratuities",
      "Travel insurance",
      "Other Victoria Falls activities",
      "Any operator, passenger or applicable fees not expressly included in the final quotation",
    ],
    information: [
      "Destination: Victoria Falls, Zimbabwe.",
      "The flight route, duration and landmarks depend on the selected package, aircraft and operator's approved flight plan.",
      "Allow extra time beyond the stated flight duration for check-in, passenger weighing where required, safety briefing, boarding and possible operational delays.",
      "Flights are subject to weather, visibility, aircraft serviceability, air traffic requirements and the pilot's safety decision.",
      "If conditions prevent departure, rescheduling, refunds or alternative arrangements are governed by the confirmed operator's policy.",
      "Passenger weights and seating may be required for aircraft weight-and-balance calculations. Provide accurate passenger information as requested by the operator.",
      "Maximum passenger weights, baggage rules, child policies and any health or mobility requirements must be confirmed with the operator before booking.",
      "Follow all crew instructions during check-in, boarding, flight and disembarkation.",
      "Photography and use of electronic devices must comply with the operator's instructions.",
      "Confirm the exact check-in location, reporting time, transfer arrangements, flight duration and any additional fees before payment.",
      "Any listed price is an indicative draft estimate, not a verified supplier quote.",
    ],
    meetingPoint: {
      name: "Confirmed Victoria Falls Helicopter Operator Base",
      description:
        "Meet at the helicopter operator's designated check-in location serving Victoria Falls, Zimbabwe. The exact address, reporting time, transfer arrangements and passenger check-in requirements must be confirmed in the booking confirmation.",
    },
    pricing: {
      adult: {
        amount: 173,
        currency: "USD",
        label: "From per person",
      },
      child: {
        amount: 173,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy: Cancellation, refund, rescheduling and no-show conditions are subject to the selected helicopter operator's terms. Weather, visibility, aircraft serviceability and safety decisions may affect departures. Confirm the operator's cancellation deadline, passenger no-show terms and refund or rescheduling arrangements before accepting payment. Do not publish this draft as a guaranteed refund policy.",
    },
    faqs: [
      {
        question: "How long is the helicopter flight?",
        answer:
          "Scenic flight options commonly vary in duration. This listing allows approximately 15–30 minutes of flight time, but the actual duration and route must be confirmed with the selected operator.",
      },
      {
        question: "Will I see Victoria Falls from the air?",
        answer:
          "The flight is designed to provide aerial views of Victoria Falls and the surrounding landscape. Visibility and the exact viewing route depend on weather, the selected flight package and the pilot's approved flight plan.",
      },
      {
        question: "Is hotel pickup included?",
        answer:
          "Not automatically in this draft listing. Confirm whether the operator provides hotel transfers or quote transport separately.",
      },
      {
        question: "Can children take the flight?",
        answer:
          "Child participation, age limits, seating arrangements and child fares depend on the operator's current policies and aircraft requirements. Confirm these details before accepting a child booking.",
      },
      {
        question: "Can I book a private helicopter?",
        answer:
          "A private charter may be available, subject to aircraft capacity and operator confirmation. It requires a separate quotation covering aircraft availability, flight duration, route and any additional charges.",
      },
      {
        question: "What happens if the weather is poor?",
        answer:
          "The operator may delay, reschedule or cancel a flight if weather or visibility is unsuitable. The confirmed supplier's refund and rescheduling terms determine the options available.",
      },
      {
        question: "Can I take photographs during the flight?",
        answer:
          "Photography may be possible when permitted by the operator and pilot. Follow all instructions concerning cameras, phones and other equipment during the flight.",
      },
      {
        question: "What should I know before booking?",
        answer:
          "Confirm the flight duration, reporting time, operator location, passenger weight requirements, child policy, baggage rules, transfers, additional fees and cancellation terms before payment.",
      },
    ],
  },
  {
    slug: "boma-african-cultural-dinner-performance",
    name: "Boma African Cultural Dinner & Performance",
    category: "Culture, Dining & Entertainment",
    location: "Victoria Falls",
    country: "Zimbabwe",
    image: "/images/optimized/activities/boma-african-cultural-dinner-and-perfomance.webp",
    badge: "Cultural Experience",
    description:
      "Enjoy an evening of Zimbabwean hospitality, traditional cuisine and live cultural entertainment in Victoria Falls. Experience local flavours and discover music, dance and storytelling presented by performers who share aspects of Zimbabwe's rich cultural heritage. Depending on the selected venue and programme, the evening may feature traditional rhythms, energetic dance performances and opportunities to learn about the cultural meaning behind the entertainment. This experience is ideal for couples, families, friends, leisure travellers and organised groups looking to add a memorable cultural evening to their Zimbabwe itinerary.",
    rating: null,
    reviewCount: 0,
    duration: "2–3 hours",
    groupSize:
      "Individual bookings, couples, families and groups; capacity depends on the confirmed venue",
    pickup:
      "Hotel transfers in Victoria Falls may be available at an additional cost or included in a confirmed package. Verify the venue location, event start time and return transport before booking.",
    highlights: [
      "Experience Zimbabwean-inspired cuisine and hospitality",
      "Enjoy live traditional music and dance entertainment",
      "Discover cultural stories and performance traditions",
      "Spend an evening experiencing local food and entertainment",
      "Suitable for couples, families and group travellers",
      "Add a cultural evening to a Victoria Falls sightseeing itinerary",
      "Ask about group dining and private event arrangements",
    ],
    itinerary: [
      {
        time: "Before the event",
        title: "Arrival at the venue",
        description:
          "Arrive at the confirmed restaurant or event venue at the time stated in the booking confirmation. If transfers have been booked, meet your driver at the agreed pickup point.",
      },
      {
        time: "Start of the evening",
        title: "Welcome and seating",
        description:
          "Be welcomed by the venue team and shown to your reserved seating, subject to the venue's arrangements. Receive information about the dinner format, performance schedule and any practical details.",
      },
      {
        time: "Dinner service",
        title: "Enjoy the meal",
        description:
          "Enjoy the dinner included in the selected package. Menu items, service style, dietary options and beverages depend on the venue and must be confirmed before booking.",
      },
      {
        time: "During dinner or after the meal",
        title: "Cultural music and dance performance",
        description:
          "Watch the scheduled cultural entertainment, which may feature traditional music, dance and storytelling. The actual programme and performance duration depend on the venue and event date.",
      },
      {
        time: "End of the evening",
        title: "Conclude the experience",
        description:
          "The evening concludes according to the venue's schedule. Guests can depart independently or use a pre-arranged transfer if it has been confirmed as part of their booking.",
      },
    ],
    included: [
      "Entry to the confirmed cultural dinner event",
      "Dinner as specified in the selected menu or package",
      "Scheduled cultural performance",
      "Reserved seating only where confirmed by the venue",
    ],
    notIncluded: [
      "Hotel pickup and drop-off unless confirmed",
      "Alcoholic beverages and premium drinks unless specified",
      "Additional food or drinks beyond the confirmed menu",
      "Private tables or exclusive event space unless booked",
      "Personal expenses and gratuities",
      "Travel insurance",
      "Other sightseeing tours and activities",
      "Special dietary requests unless confirmed in advance",
    ],
    information: [
      "Destination: Victoria Falls, Zimbabwe.",
      "The exact venue, dinner format, menu and performance programme must be confirmed before this activity is sold.",
      "Allow approximately 2–3 hours, depending on dinner service and the performance schedule.",
      "Entertainment, seating arrangements and menu options may vary by venue, date and group size.",
      "Inform the venue of allergies, dietary restrictions, mobility requirements and special requests before the event. Requests must be acknowledged by the venue to be considered confirmed.",
      "Ask about vegetarian, vegan, halal or other dietary options before confirming a booking; do not promise a specific menu without supplier confirmation.",
      "Children's menus, child rates, age policies and supervision arrangements must be checked with the venue.",
      "Photography and filming should respect performers, other guests and venue rules. Ask permission where appropriate.",
      "For group bookings, confirm minimum numbers, seating capacity, set-menu requirements, payment deadlines and any private-event supplements.",
      "Confirm the venue's operating schedule, event start time, transport arrangements, drinks policy and cancellation terms before taking payment.",
      "Any listed price is an indicative draft estimate, not a verified supplier quote.",
    ],
    meetingPoint: {
      name: "Confirmed Cultural Dinner Venue, Victoria Falls",
      description:
        "Meet at the restaurant or event venue confirmed in the booking. The exact venue address, arrival time, reservation details and transfer arrangements should be provided to guests before the event.",
    },
    pricing: {
      adult: {
        amount: 90,
        currency: "USD",
        label: "From per person",
      },
      child: {
        amount: 45,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy: Cancellation, refund, amendment and no-show conditions depend on the confirmed venue and event supplier. Group reservations may have different deposit, minimum-number and cancellation deadlines. Confirm all applicable terms before accepting payment. Do not publish this draft as a guaranteed refund policy.",
    },
    faqs: [
      {
        question: "What is included in the cultural dinner experience?",
        answer:
          "The planned experience includes a dinner event and scheduled cultural entertainment. The exact menu, performance, drinks and seating arrangements depend on the venue and selected package and must be confirmed before booking.",
      },
      {
        question: "How long does the evening last?",
        answer:
          "2–3 hours",
      },
      {
        question: "Is hotel transport included?",
        answer:
          "Transport is not automatically included in this draft listing. It can be quoted separately or included once the supplier's pickup and return arrangements are confirmed.",
      },
      {
        question: "Are drinks included in the price?",
        answer:
          "Not necessarily. Confirm whether water, soft drinks, alcoholic beverages or other refreshments are included in the selected menu. Additional drinks may incur extra charges.",
      },
      {
        question: "Can dietary requirements be accommodated?",
        answer:
          "The venue must confirm whether it can accommodate specific dietary needs or allergies. Share requirements before booking and obtain confirmation rather than assuming that every option is available.",
      },
      {
        question: "Can children attend?",
        answer:
          "Family participation depends on the venue's policies and event schedule. Confirm child pricing, available menus and any age restrictions before booking.",
      },
      {
        question: "Can you arrange a private cultural dinner for a group?",
        answer:
          "Private or group arrangements may be possible, subject to venue capacity and supplier approval. Request a separate quotation for exclusive space, customised entertainment, group menus and transport.",
      },
      {
        question: "Where does the experience take place?",
        answer:
          "The venue will be confirmed at booking. The final activity listing should name the actual venue once Shungu Africa has verified the supplier, location, schedule and commercial terms.",
      },
    ],
  },
  {
    slug: "village-community-cultural-experience",
    name: "Village & Community-Led Cultural Experience",
    category: "Cultural Experiences",
    location: "Victoria Falls",
    country: "Zimbabwe",
    image: "/images/activities/victoria-falls-cultural-experience.jpg",
    badge: "Community Experience",
    description:
      "Discover everyday life, local traditions and Zimbabwean culture through a community-led experience hosted by local residents or a community tourism partner. Depending on the host community and the programme available, visitors may learn about traditional homes, local food, farming practices, crafts, music, storytelling and community life. The experience is designed to encourage respectful cultural exchange and support local livelihoods. Activities, host arrangements and any community contribution must be confirmed before booking.",
    rating: null,
    reviewCount: 0,
    duration: "2–4 hours",
    groupSize:
      "Private or small group; maximum group size to be confirmed with the host community",
    pickup:
      "Hotel pickup may be arranged in Victoria Falls at an additional cost, subject to confirmation",
    highlights: [
      "Meet local hosts and learn about everyday life in the community",
      "Hear local stories and perspectives on Zimbabwean traditions",
      "Discover traditional homes, food, crafts or livelihoods where offered",
      "Enjoy a respectful, interactive cultural exchange",
      "Support community-led tourism and local livelihoods",
      "Ask questions and learn directly from participating community members",
    ],
    itinerary: [
      {
        time: "Arrival",
        title: "Meet Your Local Host",
        description:
          "Meet the community host or guide at the agreed meeting point and receive an introduction to the visit, local customs, photography etiquette and any community guidelines.",
      },
      {
        time: "First Activity",
        title: "Explore Community Life",
        description:
          "Join a guided walk or visit to agreed community spaces. Learn about local livelihoods, homes, farming or other aspects of daily life, depending on the host's programme.",
      },
      {
        time: "Cultural Exchange",
        title: "Discover Local Traditions",
        description:
          "Hear stories and learn about traditions, crafts, food preparation, music or other cultural practices where these are genuinely offered by participating hosts.",
      },
      {
        time: "Closing",
        title: "Questions and Farewell",
        description:
          "Spend time asking questions, thanking your hosts and learning how the experience contributes to local livelihoods. Any purchases, donations or additional activities are optional unless agreed in advance.",
      },
    ],
    included: [
      "Community host or local guide, subject to confirmation",
      "Cultural activities specifically agreed in the final programme",
      "A pre-arranged visit to the participating community",
      "Local coordination for the confirmed experience",
    ],
    notIncluded: [
      "Hotel pickup and drop-off unless confirmed in the booking",
      "Meals, refreshments or cooking activities unless specified",
      "Crafts, souvenirs and personal purchases",
      "Tips or voluntary donations",
      "Additional activities not listed in the confirmed programme",
      "Travel insurance and personal expenses",
    ],
    information: [
      "This is a draft activity listing. Confirm the participating community, host organisation, location and programme before accepting bookings.",
      "The activity must be arranged with appropriate community consent and should provide clear, agreed benefits to participating hosts.",
      "Do not advertise access to private homes, ceremonies, sacred sites or sensitive community spaces without explicit permission.",
      "Photography and video recording should only take place with the informed permission of the people being photographed.",
      "Dress respectfully, follow the host's guidance and ask before photographing children or entering private spaces.",
      "Walking surfaces may be uneven. Guests should advise the operator of mobility requirements before booking.",
      "The visit may be adapted or cancelled if hosts are unavailable or local circumstances change.",
      "Transport, meals, refreshments, craft demonstrations and performances are not guaranteed unless stated in the confirmed itinerary.",
      "Confirm the host's preferred language, available translation support, accessibility arrangements and maximum group size.",
      "Any community contribution, host payment or donation should be transparent and agreed with the community partner.",
      "Indicative pricing is a planning estimate only, not a verified supplier quote. Validate host fees, transport, taxes, seasonal changes and Shungu Africa's margin before publishing.",
      "Use only current, properly licensed photographs that accurately represent the participating community and the experience being offered.",
    ],
    meetingPoint: {
      name: "Confirmed Community Meeting Point",
      description:
        "The exact meeting point will be provided after the community host and itinerary are confirmed. Hotel pickup in Victoria Falls may be arranged separately, subject to availability and an agreed transfer price.",
    },
    pricing: {
      adult: {
        amount: 64,
        currency: "USD",
        label: "From per person",
      },
      child: {
        amount: 32,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy only. The final cancellation, amendment and refund terms must reflect the confirmed community partner's conditions, transport arrangements and any non-refundable payments. Explain these terms to guests before taking payment.",
    },
    faqs: [
      {
        question: "What will I experience during the visit?",
        answer:
          "The programme depends on the participating community and host. It may include a guided walk, stories about local life, traditional food or craft demonstrations, or discussions about local customs. Only activities confirmed at booking should be promised.",
      },
      {
        question: "Is this a genuine community-led experience?",
        answer:
          "Shungu Africa should list the experience as community-led only after confirming that local hosts meaningfully shape the programme, consent to visitor participation and receive the agreed benefits.",
      },
      {
        question: "Can I take photographs?",
        answer:
          "Please ask permission before photographing people, homes or activities. Some locations or subjects may be off-limits, and the host's guidance should always be respected.",
      },
      {
        question: "Is transport included?",
        answer:
          "Not automatically. Pickup and drop-off can be quoted separately once the meeting point, route and transport provider have been confirmed.",
      },
      {
        question: "Are meals included?",
        answer:
          "Meals, snacks and refreshments are included only when explicitly stated in the confirmed itinerary. Please advise of dietary requirements in advance.",
      },
      {
        question: "Is the experience suitable for children?",
        answer:
          "It may be suitable for families, depending on the walking route and activities. Confirm the host's age guidance, supervision requirements and child pricing before booking.",
      },
      {
        question: "How does the visit benefit the community?",
        answer:
          "The intended benefit should be agreed directly with the community partner, such as payment for hosting and guiding, purchases from local makers or other transparent community-approved arrangements.",
      },
    ],
  },
  {
    slug: "victoria-falls-bungee-jumping",
    name: "Victoria Falls Bungee Jumping",
    category: "Adventure Activities",
    location: "Victoria Falls",
    country: "Zimbabwe",
    image: "/images/optimized/activities/victoria-falls-bunjee-jumping.webp",
    badge: "Adrenaline Adventure",
    description:
      "Experience an unforgettable adrenaline rush with a bungee jump at Victoria Falls, leaping from a platform on the Victoria Falls Bridge above the spectacular Zambezi River gorge. With dramatic views of the surrounding gorge and river, this iconic adventure is designed for thrill-seekers looking for a memorable highlight during their visit. Jumps are operated by a specialist adventure provider and are subject to current operating conditions, safety procedures, eligibility requirements and availability. Confirm the operating side, booking arrangements, border or bridge access requirements and all applicable fees before travel.",
    rating: null,
    reviewCount: 0,
    duration:
      "1–2 hours",
    groupSize: "Individual jumps; group bookings subject to operator capacity",
    pickup:
      "Hotel transfers may be arranged separately in Victoria Falls, subject to confirmation",
    highlights: [
      "Take on a bungee jump from the Victoria Falls Bridge",
      "Experience dramatic views of the Zambezi River gorge",
      "Enjoy one of the region's best-known adrenaline activities",
      "Receive a safety briefing and equipment checks from the specialist operator",
      "Capture a memorable adventure, subject to the operator's photography rules",
      "Combine the experience with other Victoria Falls activities where timing permits",
    ],
    itinerary: [
      {
        time: "Arrival",
        title: "Check-In and Registration",
        description:
          "Arrive at the confirmed operator check-in point within the required time. Complete registration, provide requested information and review the operator's eligibility and safety requirements.",
      },
      {
        time: "Pre-Jump",
        title: "Safety Briefing and Equipment Check",
        description:
          "Meet the qualified operating team, receive the safety briefing and undergo the required harness and equipment checks. Follow all instructions from the jump crew.",
      },
      {
        time: "Jump",
        title: "Bungee Jump Experience",
        description:
          "Proceed to the jump platform when cleared by the operator. The jump takes place only when the operating team confirms that conditions and equipment are suitable.",
      },
      {
        time: "After the Jump",
        title: "Return and Activity Completion",
        description:
          "Follow the crew's instructions for returning from the jump area. Photo or video packages, certificates and other add-ons are available only if offered and purchased or included in the confirmed booking.",
      },
    ],
    included: [
      "One bungee jump, subject to confirmed operator booking",
      "Operator safety briefing and standard required equipment",
      "Standard activity administration and check-in, as specified by the operator",
    ],
    notIncluded: [
      "Hotel pickup and drop-off unless confirmed",
      "Photos or videos unless specified in the booking",
      "Additional jumps or other adventure activities",
      "Meals, refreshments and personal expenses",
      "Travel insurance",
      "Any bridge access, entry, border or other fees not explicitly included in the confirmed supplier quote",
    ],
    information: [
      "This listing is a draft and must not be treated as a confirmed supplier offer.",
      "Confirm the current operating provider, exact jump location, operating status, available time slots and booking procedure before selling.",
      "The activity is subject to operator-set minimum and maximum age, weight, health and other eligibility requirements. Obtain the current rules directly from the operator.",
      "Guests must disclose relevant medical or physical conditions as required by the operator and follow its instructions. Do not independently promise that the activity is suitable for a particular guest.",
      "The operator may refuse participation where eligibility or safety requirements are not met.",
      "Jumps are weather- and operations-dependent and may be delayed, suspended or cancelled for safety reasons.",
      "Confirm check-in deadlines, identification requirements, clothing guidance and any restrictions on cameras or personal belongings.",
      "The Victoria Falls Bridge is in the border area between Zimbabwe and Zambia. Confirm which side the booking operates from and whether guests need specific travel documents, border formalities or bridge access arrangements.",
      "Transfers are not included unless separately confirmed, and guests should allow sufficient time for transport and check-in.",
      "Any photography, video, certificate or merchandise package must be confirmed with the operator before it is advertised as included.",
      "Indicative prices are planning estimates only, not verified supplier quotes. Confirm current supplier rates, taxes, payment terms, applicable fees and Shungu Africa's margin before publishing.",
      "Use a properly licensed image that accurately represents the current activity and operating location.",
    ],
    meetingPoint: {
      name: "Confirmed Bungee Operator Check-In Point",
      description:
        "The exact check-in location and access instructions must be supplied by the confirmed operator. Guests should arrive at the stated time with the required identification and allow for any applicable bridge or border procedures.",
    },
    pricing: {
      adult: {
        amount: 195,
        currency: "USD",
        label: "From per person",
      },
      child: {
        amount: 0,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy only. Confirm the operator's rules for cancellations, amendments, late arrival, eligibility-related refusal, weather or safety suspensions, and refunds before accepting payment. Clearly explain the applicable terms to guests before booking.",
    },
    faqs: [
      {
        question: "Where does the bungee jump take place?",
        answer:
          "The advertised experience is associated with the Victoria Falls Bridge above the Zambezi River gorge. Confirm the operating provider, exact check-in point and operating side before booking.",
      },
      {
        question: "Is previous bungee jumping experience required?",
        answer:
          "The activity is generally offered to first-time jumpers as well as experienced thrill-seekers, but all participants must meet the current operator's eligibility requirements and follow its safety briefing.",
      },
      {
        question: "Are there age or weight restrictions?",
        answer:
          "Yes, operator eligibility requirements apply. Age limits, weight ranges and any additional conditions can change, so obtain the current rules directly from the operating provider before confirming a booking.",
      },
      {
        question: "Is hotel transport included?",
        answer:
          "Not automatically. Transfers can be quoted separately once the guest's accommodation, departure time and operator check-in location are confirmed.",
      },
      {
        question: "Can I buy photos or videos of my jump?",
        answer:
          "Photography and video packages may be offered by the operator at an additional cost. Confirm current options and prices before promising them to guests.",
      },
      {
        question: "What happens if the jump is suspended?",
        answer:
          "The operator's current policy determines how weather or safety suspensions are handled, including rescheduling and refunds. Explain those terms before taking payment.",
      },
      {
        question:
          "Can I combine bungee jumping with other Victoria Falls activities?",
        answer:
          "Potentially. The best combination depends on confirmed jump times, transport, check-in requirements and the schedules of the other activities.",
      },
    ],
  },
  {
    slug: "victoria-falls-gorge-swing-zipline",
    name: "Victoria Falls Gorge Swing & Zipline",
    category: "Adventure Activities",
    location: "Victoria Falls",
    country: "Zimbabwe",
    image: "/images/optimized/activities/victoria-falls-gorge-swing-and-zipline.webp",
    badge: "Adventure Favourite",
    description:
      "Discover the thrill of Victoria Falls' dramatic gorge with an adventure experience featuring a gorge swing, zipline or both, depending on the package selected and current operator availability. Soar above the rugged landscape, enjoy spectacular views of the Zambezi River gorge and experience an unforgettable outdoor adventure with a specialist activity operator. Each activity has its own equipment, briefing and eligibility requirements. Confirm the selected experience, operating location, safety conditions, transfer arrangements and current supplier terms before booking.",
    rating: null,
    reviewCount: 0,
    duration:
      "1–3 hours",
    groupSize:
      "Individual participants and small groups; larger groups subject to operator capacity",
    pickup:
      "Hotel transfers may be arranged separately in Victoria Falls, subject to confirmation",
    highlights: [
      "Experience a thrilling gorge swing or zipline adventure",
      "Enjoy views of the dramatic Victoria Falls gorge landscape",
      "Choose a single activity or a confirmed combination package",
      "Receive an operator safety briefing before participating",
      "Use specialist equipment provided by the confirmed activity operator",
      "Combine the experience with other Victoria Falls excursions where schedules permit",
    ],
    itinerary: [
      {
        time: "Arrival",
        title: "Check-In and Registration",
        description:
          "Arrive at the confirmed activity base within the operator's required check-in window. Complete registration and review the applicable participant eligibility requirements.",
      },
      {
        time: "Preparation",
        title: "Safety Briefing and Equipment Fitting",
        description:
          "Meet the operating team, receive instructions for the selected activity and have the required harness and safety equipment fitted and checked by staff.",
      },
      {
        time: "Main Activity",
        title: "Gorge Swing or Zipline Experience",
        description:
          "Take part in the activity specified in the confirmed booking. A gorge swing and a zipline are different experiences; both are included only when a combined package has been confirmed.",
      },
      {
        time: "Completion",
        title: "Return and Optional Extras",
        description:
          "Follow staff instructions when exiting the activity area. Photos, videos, additional rides and other adventure experiences are included only if specified in the booking.",
      },
    ],
    included: [
      "One selected gorge swing or zipline activity, subject to confirmed booking",
      "Standard activity safety briefing",
      "Required standard activity equipment supplied by the operator",
      "Operator supervision during the confirmed activity",
    ],
    notIncluded: [
      "The second activity unless a combined package is booked",
      "Hotel pickup and drop-off unless confirmed",
      "Photos and videos unless specified in the booking",
      "Additional rides or adventure activities",
      "Meals, refreshments and personal expenses",
      "Travel insurance",
      "Any access, park, bridge or other fees not explicitly included in the supplier quote",
    ],
    information: [
      "This is a draft listing. Confirm whether the supplier offers a gorge swing, zipline or combined package, and identify the exact operator and activity location before publishing.",
      "A gorge swing and a zipline are not interchangeable. Display separate options and prices if the operator sells them as separate products.",
      "Confirm the current operating status, available time slots, minimum and maximum participant age, weight limits, health requirements and any other eligibility conditions directly with the operator.",
      "Participants must follow the operator's safety briefing and equipment instructions. The operator may refuse participation when its requirements are not met.",
      "Operations can be affected by weather, river or gorge conditions, maintenance and other safety considerations.",
      "Confirm check-in deadlines, identification requirements, clothing guidance and restrictions on personal belongings or cameras.",
      "Verify the exact meeting point and any transport, bridge access, park entry or border formalities relevant to the chosen operator and route.",
      "Hotel transfers are not included unless explicitly confirmed in the booking.",
      "Combined activities may require additional time and separate eligibility checks. Do not promise that both activities can be completed in one visit until the operator confirms the schedule.",
      "Photography, video packages, additional rides and other extras must be confirmed before being advertised as included.",
      "Pricing shown here is an indicative planning estimate, not a verified supplier quote. Confirm the rate for each activity, combined-package rates, taxes, payment terms and Shungu Africa's margin before publishing.",
      "Use a properly licensed image that accurately represents the selected activity and current operating location.",
    ],
    meetingPoint: {
      name: "Confirmed Adventure Operator Check-In Point",
      description:
        "The meeting point depends on the selected activity and supplier. Provide guests with the confirmed location, arrival time, transport instructions and any required access or identification details after booking.",
    },
    pricing: {
      adult: {
        amount: 245,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 122.5,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy only. Confirm the operator's terms for cancellations, amendments, late arrivals, eligibility-related refusals, weather or safety suspensions, and refunds before accepting payment. Explain whether rescheduling or refunds are available and under what conditions.",
    },
    faqs: [
      {
        question: "What is the difference between a gorge swing and a zipline?",
        answer:
          "A gorge swing involves a controlled free-fall phase followed by a pendulum-style swing, while a zipline carries participants along a suspended cable. The exact format depends on the operator and product booked.",
      },
      {
        question: "Does the price include both activities?",
        answer:
          "Not by default. The indicative price is a planning estimate for one activity. A combined gorge swing and zipline package should have its own confirmed price and inclusions.",
      },
      {
        question: "Are there age or weight restrictions?",
        answer:
          "Yes, eligibility rules may apply and can differ between activities. Confirm the current age, weight, health and other participation requirements with the operator before booking.",
      },
      {
        question: "Is hotel transport included?",
        answer:
          "Not automatically. Transfers can be quoted separately after the activity location, accommodation and preferred schedule are confirmed.",
      },
      {
        question: "What should I wear?",
        answer:
          "Follow the operator's current clothing and footwear guidance. Secure loose items and comply with all instructions about jewellery, cameras and personal belongings.",
      },
      {
        question: "Can the activity be cancelled because of weather?",
        answer:
          "Yes. The operator may suspend activities when conditions are considered unsuitable. The confirmed supplier terms determine whether the booking can be rescheduled or refunded.",
      },
      {
        question: "Can I combine this with a Victoria Falls tour?",
        answer:
          "Potentially. The itinerary should allow enough time for transfers, check-in and the activity. Confirm the operating schedule before selling the combination.",
      },
    ],
  },
  {
    slug: "great-zimbabwe-guided-tour",
    name: "Great Zimbabwe Guided Heritage Tour",
    category: "Heritage & Cultural Tours",
    location: "Great Zimbabwe National Monument, near Masvingo",
    country: "Zimbabwe",
    image: "/images/optimized/activities/great-zimbabwe-guided-tour.webp",
    badge: "UNESCO World Heritage Site",
    description:
      "Step into Zimbabwe's remarkable past with a guided visit to Great Zimbabwe National Monument, the historic stone city that gave the country its name. Explore monumental dry-stone architecture, learn about the kingdom that flourished here, and discover the site's connections to trade, leadership, craftsmanship and Shona cultural heritage. The visit can include the Hill Complex, Great Enclosure, Valley Ruins and site museum, depending on the agreed route, guest interests and operating conditions. This experience is ideal for history enthusiasts, families, educational groups and travellers seeking a deeper understanding of Zimbabwe's heritage.",
    rating: null,
    reviewCount: 0,
    duration: "2–4 hours",
    groupSize:
      "Private tour or small group; maximum group size to be confirmed",
    pickup:
      "Meeting at the monument; transfers from Masvingo or other destinations can be arranged separately",
    highlights: [
      "Explore the monumental dry-stone walls of Great Zimbabwe",
      "Discover the history of the medieval Kingdom of Zimbabwe",
      "Visit the iconic Great Enclosure and its distinctive stonework",
      "Explore the Hill Complex, subject to route and accessibility conditions",
      "Learn about the site's archaeological significance and Shona heritage",
      "Visit the site museum if open and included in the confirmed visit",
      "Enjoy a guided heritage experience with time for questions and photographs",
    ],
    itinerary: [
      {
        time: "Arrival",
        title: "Welcome and Site Introduction",
        description:
          "Meet the confirmed guide or site representative at the agreed entrance. Review the planned route, site rules and walking requirements before beginning the visit.",
      },
      {
        time: "First Section",
        title: "Discover the Hill Complex",
        description:
          "Explore the Hill Complex if included in the agreed itinerary and accessible under current site conditions. Learn about its architecture, possible historical functions and importance within the wider settlement.",
      },
      {
        time: "Main Visit",
        title: "Explore the Great Enclosure",
        description:
          "Walk around the monumental stone walls and learn about the construction techniques, spatial organisation and archaeological interpretations associated with Great Zimbabwe.",
      },
      {
        time: "Further Exploration",
        title: "Valley Ruins and Site Museum",
        description:
          "Continue to selected Valley Ruins and the site museum where time, opening arrangements and the confirmed tour route permit. Discover the site's material heritage and the significance of finds associated with the monument.",
      },
      {
        time: "Departure",
        title: "Questions and Tour Conclusion",
        description:
          "Conclude with time for questions, photographs in permitted areas and information about any nearby facilities or locally made crafts available to visitors.",
      },
    ],
    included: [
      "Guided visit by a guide confirmed for the booking",
      "Heritage interpretation along the agreed route",
      "Time to explore the monument's principal accessible areas",
      "Site museum visit where open and included in the confirmed arrangement",
    ],
    notIncluded: [
      "Monument entrance fees unless explicitly included",
      "Transfers from Masvingo, Harare or other destinations unless confirmed",
      "Meals, refreshments and accommodation",
      "Personal purchases and souvenirs",
      "Tips and gratuities",
      "Additional community visits or cultural activities not listed in the booking",
      "Travel insurance and personal expenses",
    ],
    information: [
      "Great Zimbabwe is a UNESCO World Heritage Site and a protected national monument. Visitors must follow site rules and conservation guidance.",
      "Confirm the guide, language, meeting point, tour route and entrance-fee arrangements before accepting bookings.",
      "The indicative duration covers the visit at the monument, not a return transfer from Harare or another distant starting point.",
      "The Hill Complex may involve steep, uneven paths and stone steps. Guests should wear suitable walking shoes and assess their mobility needs before booking.",
      "Carry drinking water, sun protection and weather-appropriate clothing.",
      "Do not climb on protected structures, remove stones or artefacts, or enter restricted areas.",
      "Access to the Hill Complex, Valley Ruins, museum and any additional cultural experiences depends on site rules, operating conditions and the confirmed itinerary.",
      "Children should remain supervised throughout the visit. Confirm accessibility needs and any special arrangements in advance.",
      "If adding a traditional village or community visit, arrange it separately with the relevant host and ensure the community has agreed to receive visitors.",
      "Entrance charges may vary by visitor category, including residency and age. Confirm current rates directly with the National Museums and Monuments of Zimbabwe before quoting a package.",
      "Indicative activity pricing is a planning estimate, not a verified guide or supplier quote. Confirm guide charges, entrance fees, transport, applicable taxes and Shungu Africa's margin before publishing.",
      "Use a properly licensed image that accurately represents Great Zimbabwe and does not mislead guests about which areas are accessible.",
    ],
    meetingPoint: {
      name: "Great Zimbabwe National Monument Entrance",
      description:
        "Meet at the agreed visitor entrance near Masvingo. Share the confirmed meeting time and guide contact details before the visit. Guests requiring transport should arrange a separately quoted transfer unless it is explicitly included in their package.",
    },
    pricing: {
      adult: {
        amount: 20,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 10,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy only. Confirm the guide's cancellation terms, any non-refundable entrance charges, transport conditions and applicable site restrictions before taking payment. Clearly explain refund, amendment and rescheduling conditions to guests before confirming their booking.",
    },
    faqs: [
      {
        question: "Where is Great Zimbabwe located?",
        answer:
          "Great Zimbabwe National Monument is located near Masvingo in southeastern Zimbabwe, approximately 30 kilometres from the city. Transfer time depends on the starting point and road conditions.",
      },
      {
        question: "How long does the guided tour take?",
        answer:
          "Allow approximately 2–4 hours at the monument, depending on the route, walking pace, museum access and guest interests. Long-distance transfers are additional.",
      },
      {
        question: "Are entrance fees included?",
        answer:
          "Not automatically. Entrance fees depend on the applicable visitor category and current official rates. The booking confirmation should clearly state whether admission is included.",
      },
      {
        question: "What will I see during the visit?",
        answer:
          "The itinerary may include the Hill Complex, Great Enclosure, Valley Ruins and site museum. Access and the exact route depend on the confirmed programme and current site arrangements.",
      },
      {
        question: "Is the tour physically demanding?",
        answer:
          "Some routes, especially the Hill Complex, may include steep or uneven paths and stone steps. Guests should wear suitable shoes and discuss mobility requirements before booking.",
      },
      {
        question: "Can transport be arranged from Harare?",
        answer:
          "Yes, a private transfer or a broader itinerary may be arranged subject to vehicle, driver and supplier availability. Quote it separately from the on-site guided tour unless a complete package is confirmed.",
      },
      {
        question: "Can we combine the monument with a cultural experience?",
        answer:
          "Potentially. A nearby community or cultural visit can be added when a suitable host is available and has agreed to the visit. Confirm timing, inclusions and additional costs in advance.",
      },
    ],
  },
  {
    slug: "matobo-hills-guided-tour",
    name: "Matobo Hills Guided Heritage & Nature Tour",
    category: "Nature & Heritage Tours",
    location: "Matobo Hills, near Bulawayo",
    country: "Zimbabwe",
    image: "/images/optimized/activities/matobo-hills-guided-heritage-and-nature-tour.webp",
    badge: "UNESCO World Heritage Site",
    description:
      "Explore the extraordinary granite landscapes, ancient rock art and rich cultural heritage of Matobo Hills on a guided excursion from the Bulawayo area. Discover dramatic balancing rocks and granite kopjes, learn about San rock paintings and archaeological history, and gain insight into the living spiritual traditions associated with this remarkable landscape. Depending on the selected itinerary, the visit may include rock art sites, scenic viewpoints such as World's View, and opportunities to learn about local heritage. Wildlife viewing or rhino tracking can be added only when separately arranged with an appropriately authorised operator. The experience combines nature, history and cultural interpretation in one of Zimbabwe's most distinctive destinations.",
    rating: null,
    reviewCount: 0,
    duration:
      "Half day",
    groupSize:
      "Private tour or small group; maximum group size to be confirmed",
    pickup:
      "Pickup in Bulawayo may be arranged subject to confirmation; transfers from other locations quoted separately",
    highlights: [
      "Discover Matobo Hills' distinctive granite formations and scenic landscapes",
      "Learn about ancient San rock art at an approved, accessible site",
      "Explore the cultural and archaeological significance of the hills",
      "Visit World's View or another agreed viewpoint, subject to access and fees",
      "Hear about the area's living traditions and spiritual significance",
      "Enjoy guided walks and photography opportunities along the agreed route",
      "Optional wildlife or community experiences available by separate arrangement",
    ],
    itinerary: [
      {
        time: "Morning",
        title: "Meet Your Guide and Enter Matobo",
        description:
          "Meet your confirmed guide at the agreed pickup point or site entrance. Travel to the selected area of Matobo Hills and receive an introduction to the landscape, visitor guidelines and planned route.",
      },
      {
        time: "First Stop",
        title: "Granite Landscapes and Scenic Viewpoints",
        description:
          "Explore selected granite formations and viewpoints. Learn how weathering shaped the hills and why the landscape is significant to local communities.",
      },
      {
        time: "Heritage Visit",
        title: "Discover Ancient Rock Art",
        description:
          "Visit an approved rock art site where access is available. Learn about the paintings, the people who created them and the importance of conserving the site's archaeological and cultural heritage.",
      },
      {
        time: "Midday",
        title: "Break and Optional Viewpoint",
        description:
          "Take a break for refreshments or lunch if arranged. Depending on the route and opening conditions, continue to World's View or another agreed heritage stop.",
      },
      {
        time: "Afternoon",
        title: "Cultural Interpretation and Return",
        description:
          "Conclude with questions and further interpretation of Matobo's natural and cultural significance before returning to the agreed drop-off point. Additional wildlife or community activities require separate confirmation.",
      },
    ],
    included: [
      "Guided excursion with a guide confirmed for the booking",
      "Interpretation of the landscape, history and cultural heritage",
      "Visits to the agreed accessible sites on the confirmed itinerary",
      "Local coordination for the booked excursion",
    ],
    notIncluded: [
      "National park, monument or site entrance fees unless explicitly included",
      "Transfers from Bulawayo or other destinations unless confirmed",
      "Meals, refreshments and drinking water unless specified",
      "Rhino tracking, game drives or other wildlife activities unless separately booked",
      "Community visits or cultural performances unless arranged",
      "Tips, personal purchases and souvenirs",
      "Travel insurance and personal expenses",
    ],
    information: [
      "Matobo Hills was inscribed on the UNESCO World Heritage List in 2003 for its rock art, cultural landscape and continuing spiritual traditions.",
      "Confirm the operating guide, route, meeting point, entrance fees and access arrangements before accepting bookings.",
      "The exact itinerary depends on available time, site access, guest interests and the relevant land or site management requirements.",
      "Some walking routes include uneven rocky surfaces, slopes and steps. Guests should wear sturdy walking shoes and advise of mobility needs in advance.",
      "Carry sun protection and drinking water, and dress for the weather. A hat and light jacket may be useful depending on the season.",
      "Rock art, archaeological features and protected structures must not be touched, marked or damaged. Photography and access restrictions must be followed.",
      "Some areas have continuing spiritual significance. Visitors must respect local customs, sacred places, custodians and any restrictions on entry or photography.",
      "World's View, rock art sites and other stops may have separate fees or operating conditions. Confirm all applicable charges with the relevant authorities.",
      "Rhino tracking is a distinct wildlife activity with its own safety rules, age requirements, fees and operator arrangements. Do not imply it is included in the standard heritage tour.",
      "Community visits should only be included when agreed with the participating hosts and arranged respectfully.",
      "The duration excludes long-distance transfers from Harare or other distant locations unless stated in a package itinerary.",
      "Pricing is an indicative planning estimate, not a verified supplier quote. Confirm guide charges, transport, official fees, taxes, seasonal changes and Shungu Africa's margin before publishing.",
      "Use a properly licensed photograph that accurately represents Matobo Hills and the activity being offered.",
    ],
    meetingPoint: {
      name: "Confirmed Matobo Hills Tour Meeting Point",
      description:
        "The meeting point will be confirmed with the guide or activity provider. Depending on the booking, guests may meet in Bulawayo or at an agreed site entrance. Provide the exact location, pickup time and transfer details in the booking confirmation.",
    },
    pricing: {
      adult: {
        amount: 90,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 65,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy only. Confirm the guide's cancellation terms, any non-refundable park or monument fees, transport conditions, weather-related changes and refund arrangements before accepting payment. Communicate the final policy to guests before booking.",
    },
    faqs: [
      {
        question: "Where are the Matobo Hills?",
        answer:
          "Matobo Hills is approximately 35 kilometres south of Bulawayo, although travel time varies with the specific destination and road conditions.",
      },
      {
        question: "What makes Matobo Hills special?",
        answer:
          "The area is recognised for its striking granite formations, outstanding rock art and continuing cultural and spiritual traditions. It is a UNESCO World Heritage Site.",
      },
      {
        question: "Will we see ancient rock paintings?",
        answer:
          "The itinerary can include an approved rock art site, subject to access, timing and applicable fees. Confirm the specific site before booking.",
      },
      {
        question: "Is park entrance included?",
        answer:
          "Not automatically. Some stops may involve park or monument charges. The final quotation should clearly identify which fees are included and which are payable separately.",
      },
      {
        question: "Is rhino tracking included?",
        answer:
          "No, not in the standard heritage-tour price. Rhino tracking is a separate wildlife activity that must be arranged with an authorised operator and is subject to its own safety, eligibility and availability requirements.",
      },
      {
        question: "Is the tour suitable for children?",
        answer:
          "Many heritage stops may suit families, but walking distances, rocky terrain and site access should be considered. Confirm the route and any age restrictions before booking.",
      },
      {
        question: "Can transfers from Bulawayo be arranged?",
        answer:
          "Yes, subject to vehicle and driver availability. Confirm the pickup location and quote transport separately unless a transfer-inclusive package is agreed.",
      },
      {
        question: "Can the tour be extended to a full day?",
        answer:
          "Yes. A full-day itinerary can include additional rock art sites, viewpoints or a separately arranged community or wildlife activity, depending on operating conditions and guest interests.",
      },
    ],
  },
  {
    slug: "lake-kariba-boat-cruise",
    name: "Lake Kariba Scenic Boat Cruise",
    category: "Boat Cruises & Water Activities",
    location: "Lake Kariba, Kariba",
    country: "Zimbabwe",
    image: "/images/optimized/activities/lake-kariba-scenic-boat-crusie.webp",
    badge: "Scenic Lake Experience",
    description:
      "Discover the beauty of Lake Kariba on a relaxing boat cruise across one of Zimbabwe's most spectacular inland waters. Enjoy expansive lake views, distant islands, beautiful shorelines and opportunities to observe birds and wildlife from the water. Depending on the selected cruise and conditions, the experience may include a morning outing, an afternoon excursion or a memorable sunset cruise. Ideal for couples, families, private groups and leisure travellers, this experience offers a peaceful way to enjoy Kariba's scenery. Wildlife sightings are not guaranteed, and the route, duration, refreshments and onboard services depend on the confirmed boat operator and package.",
    rating: null,
    reviewCount: 0,
    duration: "2–4 hours",
    groupSize:
      "Shared or private cruise; boat capacity and minimum group size must be confirmed",
    pickup:
      "Meeting at a confirmed Kariba harbour or boat departure point; hotel transfers may be arranged separately",
    highlights: [
      "Cruise across the scenic waters of Lake Kariba",
      "Enjoy views of the lake, shoreline and surrounding landscape",
      "Look out for waterbirds and other wildlife from the boat",
      "Choose a morning, afternoon or sunset departure where available",
      "Relax with friends, family or a private group",
      "Enjoy photography opportunities across the lake",
      "Add fishing, refreshments or catering only where offered and confirmed",
    ],
    itinerary: [
      {
        time: "Arrival",
        title: "Meet at the Departure Point",
        description:
          "Arrive at the confirmed harbour or boarding point at the time provided by the operator. Complete any required registration and receive instructions about boarding and onboard safety.",
      },
      {
        time: "Departure",
        title: "Set Out on Lake Kariba",
        description:
          "Board the confirmed vessel and begin the cruise along an operator-selected route. The skipper will determine the route based on the booked experience, weather and lake conditions.",
      },
      {
        time: "Cruising",
        title: "Scenic Views and Wildlife Watching",
        description:
          "Relax on board, enjoy the scenery and look for birds and wildlife along the shoreline. Sightings vary with location, season and natural conditions and cannot be guaranteed.",
      },
      {
        time: "Optional Experience",
        title: "Sunset or Onboard Refreshments",
        description:
          "For a sunset departure, enjoy the changing colours across the lake as daylight fades. Refreshments, meals, fishing and other extras are available only if included in the confirmed package.",
      },
      {
        time: "Return",
        title: "Return to the Harbour",
        description:
          "Return to the agreed landing point at the end of the cruise. Follow the skipper's instructions throughout boarding, cruising and disembarkation.",
      },
    ],
    included: [
      "Boat cruise for the duration specified in the confirmed booking",
      "Skipper and crew where provided by the selected operator",
      "Standard onboard safety equipment provided by the operator",
      "Scenic lake cruising along an operator-approved route",
    ],
    notIncluded: [
      "Transfers to and from the departure point unless confirmed",
      "Meals, snacks and drinks unless specified",
      "Fishing equipment, bait and fishing permits unless confirmed",
      "Private charter fees where the displayed price is for a shared cruise",
      "National Parks or other applicable fees unless explicitly included",
      "Accommodation and overnight houseboat stays",
      "Tips, personal purchases and travel insurance",
    ],
    information: [
      "This is a draft activity listing. Confirm the boat operator, departure harbour, vessel, route, duration and current operating schedule before accepting bookings.",
      "Lake Kariba cruises may be offered as shared trips, private charters or part of a longer houseboat package. Clearly distinguish these options and their pricing.",
      "Confirm vessel capacity, minimum passenger numbers, child policies and whether the quotation is per person or per boat.",
      "Check that the operator provides appropriate life jackets and required safety equipment for all passengers, including children.",
      "Cruises are subject to weather, wind, water conditions, vessel maintenance and skipper safety decisions. Departure times and routes may change.",
      "Wildlife and bird sightings are possible but not guaranteed. Never advertise a guaranteed sighting of elephants, hippos, crocodiles or other animals.",
      "Passengers should follow crew instructions and remain in designated safe areas. Swimming or entering the water must not be assumed to be part of the cruise.",
      "Confirm whether refreshments, catering, fishing, fuel, landing charges and applicable lake or National Parks fees are included.",
      "Guests should bring sun protection, suitable clothing and any personal medication they may need. Warm layers may be useful for early morning or evening cruises.",
      "Confirm the precise meeting point and arrange transfers in advance, especially for guests staying outside Kariba town.",
      "Indicative prices are planning estimates only, not verified supplier quotes. Validate the operator's rate, boat capacity, fuel, crew, taxes, applicable fees and Shungu Africa's margin before publishing.",
      "Use a properly licensed photograph that accurately represents Lake Kariba and the type of cruise being sold.",
    ],
    meetingPoint: {
      name: "Confirmed Lake Kariba Boat Departure Point",
      description:
        "The boarding location will be confirmed after the boat and operator are selected. Send guests the exact harbour or dock location, arrival time, transfer details and operator contact information before departure.",
    },
    pricing: {
      adult: {
        amount: 135,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 70,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy only. Confirm the operator's cancellation, amendment, late-arrival, minimum-passenger and weather-related cancellation terms before taking payment. State whether rescheduling or refunds are available and explain any non-refundable fees before confirming a booking.",
    },
    faqs: [
      {
        question: "How long does a Lake Kariba boat cruise take?",
        answer:
          "Short scenic cruises commonly last a few hours, while half-day, full-day and overnight options may also be available. Confirm the duration of the specific cruise before booking.",
      },
      {
        question: "Can I book a sunset cruise?",
        answer:
          "Sunset cruises may be available through selected operators. Departure time, duration and seasonal availability should be confirmed for the requested date.",
      },
      {
        question: "Will we see wildlife?",
        answer:
          "You may see waterbirds or wildlife near the shoreline, depending on the route and conditions. Sightings are natural and cannot be guaranteed.",
      },
      {
        question: "Are food and drinks included?",
        answer:
          "Not automatically. Some packages offer refreshments or catering, while others charge separately. The confirmed booking should list all included food and drinks.",
      },
      {
        question: "Is the price per person or for the whole boat?",
        answer:
          "This depends on the operator. Some cruises are priced per passenger, while private charters may be charged at a flat rate for the vessel. Confirm the pricing basis and maximum capacity before selling.",
      },
      {
        question: "Is the cruise suitable for children?",
        answer:
          "Family suitability depends on the vessel, duration and operator's child policies. Confirm age requirements, supervision arrangements and suitable safety equipment before booking.",
      },
      {
        question: "Can I arrange hotel transfers?",
        answer:
          "Transfers may be available at an additional cost. Confirm the guest's accommodation, departure point and pickup time before quoting.",
      },
      {
        question: "What happens if the weather is unsuitable?",
        answer:
          "The skipper or operator may delay or cancel a departure when conditions are unsafe. The applicable rescheduling and refund terms must be confirmed before payment.",
      },
    ],
  },
  {
    slug: "mana-pools-walking-canoe-safari",
    name: "Mana Pools Walking & Canoe Safari",
    category: "Wildlife & Wilderness Safaris",
    location: "Mana Pools National Park, Lower Zambezi Valley",
    country: "Zimbabwe",
    image: "/images/activities/mana-pools-walking-and-canoe-safaris.jpg",
    badge: "Wilderness Adventure",
    description:
      "Experience the wild beauty of Mana Pools National Park through an immersive walking safari, a canoe excursion on the Zambezi River, or a combination of both. Explore the park's remarkable floodplains and riverine woodland on foot with a qualified professional guide, learning to interpret animal tracks, birdlife and the surrounding ecosystem. Alternatively, paddle along the Zambezi and experience the wilderness from the water, with opportunities to observe birds and wildlife from a safe distance. Multi-day canoe safaris may include remote riverside camps, meals and specialist equipment, depending on the selected operator and package. This is a specialist wilderness experience requiring careful planning, suitable conditions and adherence to all park and operator safety procedures. Wildlife sightings are never guaranteed.",
    rating: null,
    reviewCount: 0,
    duration:
      "Half day",
    groupSize:
      "Small guided groups; maximum group size, minimum departure numbers and canoe capacity must be confirmed",
    pickup:
      "Pickup from a confirmed Mana Pools camp or lodge; road and air transfers can be arranged separately",
    highlights: [
      "Explore Mana Pools' iconic floodplains and riverine wilderness",
      "Join a guided walking safari with a qualified professional guide",
      "Learn about animal tracks, wildlife behaviour and the local ecosystem",
      "Paddle the Zambezi River on a confirmed guided canoe excursion",
      "Look for elephants, hippos, crocodiles and diverse birdlife from a safe distance",
      "Experience the landscapes and changing light of the Lower Zambezi Valley",
      "Choose a walking safari, canoe safari or confirmed combination itinerary",
      "Extend the adventure with multi-day camping or a lodge-based safari where available",
    ],
    itinerary: [
      {
        time: "Early Morning",
        title: "Briefing and Preparation",
        description:
          "Meet the confirmed safari guide at the agreed camp or departure point. Review the day's plan, weather and environmental conditions, safety procedures and equipment requirements. Walking and canoe activities follow their respective operator-approved arrangements.",
      },
      {
        time: "Morning",
        title: "Guided Walking Safari",
        description:
          "For the walking option, explore an agreed route with a qualified professional guide. Learn to read tracks, recognise signs of wildlife and understand the ecology of the floodplain while maintaining appropriate distances from animals.",
      },
      {
        time: "Alternative or Additional Activity",
        title: "Canoe Safari on the Zambezi",
        description:
          "For the canoe option, receive paddling and water-safety instructions before setting out with the confirmed operator. Follow the skipper or guide's route and instructions, observing wildlife only from distances considered safe.",
      },
      {
        time: "Midday",
        title: "Rest and Refreshments",
        description:
          "Pause at an operator-approved location for rest and refreshments when included in the selected package. Multi-day expeditions follow the operator's planned camps and meal schedule.",
      },
      {
        time: "Afternoon",
        title: "Continue the Wilderness Experience",
        description:
          "Depending on the selected duration, continue the walk or canoe excursion, return to camp or proceed to the next confirmed overnight stop. The schedule may change due to weather, wildlife, river conditions or safety decisions.",
      },
      {
        time: "Return or Overnight Stay",
        title: "Conclude the Activity",
        description:
          "Return to the confirmed camp or lodge for a day excursion. For multi-day canoe safaris, follow the agreed expedition itinerary, including overnight camping, meals and equipment arrangements where included.",
      },
    ],
    included: [
      "Walking or canoe activity specifically selected and confirmed at booking",
      "Qualified professional guide or canoe guide as applicable to the selected activity",
      "Standard activity safety briefing",
      "Required standard equipment supplied by the operator for the booked activity",
      "Meals, camping equipment and accommodation only where specified in the confirmed multi-day package",
    ],
    notIncluded: [
      "National park conservation, entry, camping or river-use fees unless explicitly included",
      "Road transfers or charter flights to and from Mana Pools unless confirmed",
      "Accommodation before or after the booked safari",
      "Meals and drinks on day excursions unless specified",
      "Premium beverages and personal purchases",
      "Fishing, game drives or other additional activities unless separately booked",
      "Travel insurance, medical evacuation cover and personal expenses",
    ],
    information: [
      "This is a draft catalogue listing. Confirm the exact operator, selected activity, itinerary, dates, inclusions and operating permissions before accepting bookings.",
      "Walking safaris and canoe safaris are different products with different equipment, safety considerations, durations and pricing. Offer separate selectable options or create individual activity listings once supplier rates are confirmed.",
      "Mana Pools is a remote wilderness destination. Confirm road access, transfers, airstrip arrangements, camp location, communications and emergency procedures in advance.",
      "The park has seasonal operating patterns. Many camps and operators run mainly during the dry-season period, broadly from April or May to November, but dates vary by provider. Verify the requested travel dates directly with the operator and park authorities.",
      "Walking in an area with dangerous wildlife carries inherent risk. For this commercial product, arrange a qualified professional guide and follow the current park rules, operator instructions and any required permits. Do not advertise an unguided walk as equivalent to a guided walking safari.",
      "Walking routes must be selected according to visibility, weather, wildlife activity, guest fitness and the guide's professional assessment. Guests must follow instructions and maintain safe distances from animals.",
      "Canoe trips are subject to river level, current, weather, wind, wildlife activity, equipment condition and the operator's safety assessment. The operator must determine whether conditions are suitable for departure.",
      "Confirm canoeing experience requirements, swimming or water-safety requirements, life-jacket provision, participant age limits, luggage limits and emergency arrangements with the operator.",
      "Elephants, hippos, crocodiles and other potentially dangerous animals may be present. Sightings and proximity cannot be guaranteed, and guides must prioritise safe distances and wildlife welfare.",
      "Multi-day canoe safaris may require minimum numbers and several nights. Confirm camping or glamping arrangements, meals, drinking water, sanitation, equipment, crew and luggage allowances.",
      "Confirm all conservation, park, camping, river-use and other applicable fees in writing. State clearly which fees are included in the quoted package.",
      "Guests should bring suitable walking footwear, sun protection, weather-appropriate clothing and any personal medication. The operator should provide activity-specific packing guidance before departure.",
      "The safari is not automatically suitable for every child or traveller with mobility limitations. Confirm current age requirements, physical demands and accessibility with the operator before accepting a booking.",
      "Indicative pricing must not be treated as a supplier quote. Obtain separate written rates for walking, day canoeing and multi-day canoe safaris, including applicable fees, transfers, accommodation, meals, taxes and Shungu Africa's margin.",
      "Use a properly licensed photograph that accurately represents the selected Mana Pools activity and the actual type of experience being sold.",
    ],
    meetingPoint: {
      name: "Confirmed Mana Pools Camp or Safari Departure Point",
      description:
        "The meeting point depends on the selected operator and whether the booking is a walking excursion, day canoe trip or multi-day expedition. Provide confirmed camp details, arrival instructions, transfer arrangements and emergency contact information before travel.",
    },
    pricing: {
      adult: {
        amount: 330,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 0,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy only. Confirm the operator's cancellation, amendment, minimum-departure, weather and river-condition policies, as well as the terms for non-refundable park fees, accommodation and charter flights. Explain rescheduling and refund conditions to guests before taking payment.",
    },
    faqs: [
      {
        question:
          "What is the difference between a walking safari and a canoe safari?",
        answer:
          "A walking safari explores the wilderness on foot with a qualified guide, while a canoe safari travels along the Zambezi River in a canoe under the confirmed operator's guidance. They can be combined when the operator offers a suitable package.",
      },
      {
        question: "When is Mana Pools open for safaris?",
        answer:
          "Many camps and safari operators operate mainly during the dry season, broadly from April or May through November. Exact dates vary, so confirm availability for the specific camp, activity and travel dates.",
      },
      {
        question: "Are these activities suitable for beginners?",
        answer:
          "Suitability depends on the activity, itinerary and operator requirements. Ask the operator about walking demands, paddling experience, water-safety expectations and participant eligibility before booking.",
      },
      {
        question: "Will we see elephants or other wildlife?",
        answer:
          "Mana Pools is renowned for its wildlife, but sightings depend on natural conditions and cannot be guaranteed. All encounters must follow professional guidance and current park rules.",
      },
      {
        question: "Is a guide included?",
        answer:
          "The commercial guided experience should include the relevant qualified guide or canoe guide as stated in the confirmed booking. Verify the operator and guide arrangements before confirming.",
      },
      {
        question: "Can I book a multi-day canoe safari?",
        answer:
          "Multi-day trips may be available with selected operators, commonly with camping or glamping options. Minimum trip length, group size, meals, equipment, park fees and transfers must be confirmed before booking.",
      },
      {
        question: "Are accommodation and transfers included?",
        answer:
          "Not automatically. Some multi-day packages include accommodation and meals, while transfers, charter flights and park or river fees may be additional. The final quotation should itemise every inclusion and exclusion.",
      },
      {
        question: "What happens if river or weather conditions are unsuitable?",
        answer:
          "The operator may delay, change or cancel an activity when conditions are considered unsafe. The supplier's confirmed rescheduling and refund terms determine the available options.",
      },
    ],
  },
  {
    slug: "chobe-full-day-trip",
    name: "Chobe National Park Full-Day Trip",
    category: "Safari & Wildlife",
    location: "Chobe National Park, Kasane",
    country: "Botswana",
    image: "/images/optimized/activities/chobe-national-park-full-day-trip.webp",
    badge: "Full-Day Safari",
    description:
      "Discover the wildlife-rich Chobe region of Botswana on a full-day safari from the Victoria Falls area. Depending on the confirmed itinerary, the experience may combine a guided game drive in Chobe National Park with a boat safari on the Chobe River, offering opportunities to look for elephants, buffalo, hippos, crocodiles and a variety of birdlife. The trip involves international border crossings between Zimbabwe and Botswana, so guests must meet the applicable entry requirements and allow time for immigration formalities. Wildlife sightings are not guaranteed, and the final itinerary, inclusions and departure arrangements depend on the selected operator.",
    rating: null,
    reviewCount: 0,
    duration: "Full day",
    groupSize:
      "Shared group or private option, subject to operator confirmation",
    pickup:
      "Victoria Falls-area hotel pickup may be available if confirmed with the operator. Pickup from other locations, including Livingstone, requires separate arrangements.",
    highlights: [
      "Explore Chobe National Park with a qualified safari guide",
      "Look for elephants, buffalo, antelope and other wildlife in their natural habitat",
      "Enjoy a Chobe River boat safari if included in the confirmed package",
      "Experience Botswana's landscapes and wildlife on a cross-border day excursion",
      "Travel with planned assistance for Zimbabwe–Botswana border formalities",
      "Return to the agreed pickup location after the day's activities",
    ],
    itinerary: [
      {
        time: "Early morning",
        title: "Hotel pickup and departure",
        description:
          "Meet the driver or guide at the confirmed pickup point and depart for the Botswana border. The actual departure time depends on the hotel location, border conditions and operator schedule.",
      },
      {
        time: "Morning",
        title: "International border formalities",
        description:
          "Complete immigration and customs procedures for entry into Botswana. Travellers must carry the required travel documents and independently meet applicable visa, entry and transit requirements.",
      },
      {
        time: "Morning to midday",
        title: "Chobe River boat safari",
        description:
          "If included in the selected package, board a scheduled or privately chartered boat for a guided wildlife-viewing excursion on the Chobe River. The boat departure, duration and refreshments depend on the operator.",
      },
      {
        time: "Midday",
        title: "Lunch break",
        description:
          "Enjoy lunch at the venue or location specified by the operator. Confirm whether lunch, drinking water and other refreshments are included in the final price.",
      },
      {
        time: "Afternoon",
        title: "Guided Chobe game drive",
        description:
          "Explore designated safari areas in a suitable safari vehicle with an authorized guide, observing wildlife while following park regulations. The route and wildlife sightings vary with season and conditions.",
      },
      {
        time: "Late afternoon to evening",
        title: "Return transfer",
        description:
          "Leave the Chobe area and return through the Botswana–Zimbabwe border to the agreed drop-off point, subject to border queues, road conditions and the operator's schedule.",
      },
    ],
    included: [
      "Round-trip ground transfers from the specified Victoria Falls pickup area, only if confirmed in the supplier quotation",
      "Guided Chobe National Park game drive, if included in the selected package",
      "Chobe River boat safari, if included in the selected package",
      "Park and conservation fees only where explicitly listed in the confirmed quotation",
      "Lunch and refreshments only where explicitly listed in the confirmed quotation",
      "Guiding services and activity transport as stated in the final booking confirmation",
    ],
    notIncluded: [
      "International visa, visa-on-arrival or other entry fees, where applicable",
      "Travel insurance and personal medical expenses",
      "Tips and gratuities",
      "Personal purchases and additional drinks or meals not specified as included",
      "Transfers from locations outside the agreed pickup area",
      "Private boat charter, private vehicle or other upgrades unless specifically booked",
      "Any park fees, border charges or other compulsory costs not expressly included in the supplier quotation",
    ],
    information: [
      "This is an international excursion from Zimbabwe into Botswana, not a safari located within Victoria Falls.",
      "A valid passport and any required visas, permits or supporting documents are the traveller's responsibility. Entry requirements depend on nationality, travel documents, itinerary and current border rules.",
      "Confirm whether the package includes both the Chobe River boat safari and the Chobe National Park game drive; some itineraries may offer different combinations.",
      "Confirm the exact pickup location, departure time, return time, border crossing and drop-off arrangements before accepting a booking.",
      "Allow for possible delays at immigration and customs. The advertised duration is an estimate, not a guaranteed schedule.",
      "Children must meet the operator's age and supervision requirements for each activity. Obtain confirmed child rates and any applicable restrictions before booking.",
      "Wildlife sightings depend on season, weather, water levels and animal movement and cannot be guaranteed.",
      "Guests should wear comfortable clothing, sun protection and suitable footwear, and bring any required personal medication.",
      "Boat operations and game drives are subject to weather, river conditions, park rules and the operator's current safety procedures.",
      "Supplier, itinerary, fees, transport, inclusions and availability remain unverified until confirmed in writing.",
    ],
    meetingPoint: {
      name: "Confirmed hotel pickup in the Victoria Falls area",
      description:
        "The exact pickup point and time must be confirmed with the selected operator before travel. Guests staying outside the agreed service area may need to arrange an additional transfer.",
    },
    pricing: {
      adult: {
        amount: 180,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 120,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy pending supplier confirmation. Before accepting payment, obtain the operator's written cancellation, amendment, no-show and refund terms. Clarify how cancellations or delays caused by weather, river conditions, border restrictions, park closures or transport disruption are handled.",
    },
    faqs: [
      {
        question: "Where does the Chobe day trip take place?",
        answer:
          "The excursion takes place in the Chobe region of northern Botswana, generally around Kasane and Chobe National Park. Many visitors travel from Victoria Falls, Zimbabwe, but the pickup location must be confirmed.",
      },
      {
        question: "Does the trip include a boat safari and a game drive?",
        answer:
          "The proposed itinerary includes both, but the exact combination varies by operator and package. Confirm that both activities, their durations and all associated fees are included before booking.",
      },
      {
        question: "Do I need a visa to visit Botswana?",
        answer:
          "Entry requirements depend on your nationality and travel circumstances. Check the current official Botswana immigration guidance and any relevant transit or return-entry requirements before departure.",
      },
      {
        question: "How long does the excursion take?",
        answer:
          "Plan for approximately 8–10 hours from pickup to return, although border queues, hotel location, activity schedules and road conditions can affect the total duration.",
      },
      {
        question: "Are park fees and lunch included?",
        answer:
          "They may be included in some packages, but this must be verified against the selected operator's written quotation. The advertised inclusions should clearly identify every compulsory fee and meal.",
      },
      {
        question: "Will we definitely see elephants and other wildlife?",
        answer:
          "Chobe is known for its wildlife, but individual sightings cannot be guaranteed. Wildlife activity varies by season, location and conditions on the day.",
      },
      {
        question: "Can children join the trip?",
        answer:
          "Children may be accepted subject to the operator's age requirements and the rules for each activity. Confirm child pricing, supervision requirements and any restrictions before booking.",
      },
      {
        question: "Can the trip be arranged privately?",
        answer:
          "A private vehicle or private itinerary may be possible through selected operators. Request a separate quotation that specifies vehicle capacity, guiding, boat arrangements, included fees and pickup locations.",
      },
    ],
  },
  {
    slug: "chobe-river-sunset-cruise",
    name: "Chobe River Sunset Cruise",
    category: "Boat Cruise & Wildlife",
    location: "Chobe River, Kasane",
    country: "Botswana",
    image: "/images/activities/chobe-river-sunset-cruise.jpg",
    badge: "Sunset Experience",
    description:
      "Experience the beauty of Botswana's Chobe River on a relaxing sunset cruise departing from the Kasane area. Travel along the river and its surrounding floodplains as the changing afternoon light illuminates the landscape. Look out for elephants gathering along the riverbanks, hippos resting in the water, crocodiles basking near the shore and a variety of birdlife. The cruise offers excellent opportunities for wildlife observation, photography and enjoying the peaceful atmosphere of the Chobe region. Ideal for couples, families and small groups, this experience combines scenic river views with the possibility of memorable wildlife encounters. Animal sightings, sunset conditions and the precise route depend on the season, weather and river conditions.",
    rating: null,
    reviewCount: 0,
    duration: "2–3 hours",
    groupSize:
      "Shared sightseeing boat or private charter; passenger capacity depends on the confirmed vessel and operator",
    pickup:
      "Transfers from selected hotels and lodges in Kasane may be available by arrangement. Confirm the departure point, boarding time, pickup arrangements and any additional transfer charges before booking.",
    highlights: [
      "Cruise along the scenic Chobe River near Kasane",
      "Enjoy golden-hour views over the river and surrounding floodplains",
      "Look for elephants gathering at the water's edge",
      "Observe hippos, crocodiles and other wildlife from the boat",
      "Discover the region's rich birdlife and river ecosystem",
      "Enjoy opportunities for wildlife and landscape photography",
      "Experience the changing colours of an African sunset",
      "Relax on a shared cruise or request a private charter where available",
    ],
    itinerary: [
      {
        time: "Before Departure",
        title: "Arrival and Boarding",
        description:
          "Arrive at the confirmed boat departure point near Kasane. Meet the cruise crew, complete any required check-in procedures and receive a safety briefing covering life jackets, movement on board and wildlife-viewing guidelines.",
      },
      {
        time: "Cruise Departure",
        title: "Explore the Chobe River",
        description:
          "Board the sightseeing boat and begin cruising along an operator-approved section of the Chobe River. Observe the surrounding riverbanks, floodplains and vegetation while the crew identifies wildlife and points of interest where possible.",
      },
      {
        time: "During the Cruise",
        title: "Wildlife Viewing and Photography",
        description:
          "Look for elephants, hippos, crocodiles and waterbirds along suitable viewing areas. The captain determines the route according to river conditions, navigation rules, wildlife activity and safety requirements. Wildlife sightings are not guaranteed.",
      },
      {
        time: "Sunset",
        title: "Golden-Hour River Views",
        description:
          "Enjoy the changing light over the river and surrounding landscape as the cruise continues, where timing and conditions permit. Capture photographs and relax on board while following the crew's safety instructions.",
      },
      {
        time: "Return",
        title: "Disembarkation",
        description:
          "Return to the designated landing point and disembark under the crew's direction. Continue independently or use a pre-arranged transfer back to your accommodation.",
      },
    ],
    included: [
      "Boat cruise on the Chobe River for the confirmed duration",
      "Boat crew and captain",
      "Safety briefing and required onboard safety equipment",
      "Life jackets in accordance with vessel safety requirements",
      "Wildlife viewing along the agreed cruise route",
      "Drinking water or refreshments only if confirmed by the operator",
      "Hotel transfers only if expressly included in the final booking",
    ],
    notIncluded: [
      "Hotel pickup and drop-off unless expressly included",
      "Meals, snacks and drinks unless specified",
      "Alcoholic beverages unless expressly included and legally permitted",
      "Private boat charter or exclusive-use supplement",
      "Gratuities and personal expenses",
      "Travel insurance",
      "Additional excursions and activities",
      "Any taxes, landing charges or compulsory fees not expressly included in the confirmed quotation",
    ],
    information: [
      "Location: The Chobe River near Kasane in northern Botswana.",
      "Duration: Allow approximately 2–3 hours, subject to the operator's schedule and river conditions.",
      "Departure time: Sunset departures vary throughout the year. Confirm the actual boarding time for the travel date rather than relying on a fixed seasonal time.",
      "Wildlife: Elephants, hippos, crocodiles and birds may be seen, but sightings depend on animal movements and local conditions.",
      "Boat type: Vessel style, passenger capacity, seating, shade and accessibility vary by operator. Confirm the specific vessel before accepting a booking.",
      "Safety: Follow crew instructions, remain within designated passenger areas and wear a life jacket when required. Never feed or attempt to approach wildlife.",
      "Clothing: Wear comfortable clothing suitable for the weather. A light jacket may be useful when the breeze picks up after sunset.",
      "Sun protection: Bring sunscreen, sunglasses and a hat for the earlier part of the cruise.",
      "Photography: Bring a camera or phone and secure equipment while the boat is moving.",
      "Children: Confirm minimum age requirements, child pricing, supervision rules and life-jacket availability with the operator.",
      "Accessibility: Check boarding access, steps, seating and assistance arrangements before booking if any guest has mobility requirements.",
      "Weather: Wind, storms, water levels or other operating conditions may affect departure times, routes or whether a cruise can proceed.",
      "Transfers: Confirm whether the departure point is accessible from the guest's accommodation and whether transport is included.",
      "Cross-border travel: This activity is based in Botswana. Guests travelling from Zimbabwe or another country should confirm entry requirements and border arrangements for their own circumstances.",
      "Responsible wildlife viewing: Maintain a safe distance from wildlife, avoid disturbing animals and follow the captain's directions at all times.",
    ],
    meetingPoint: {
      name: "Confirmed Chobe River Cruise Departure Point, Kasane",
      description:
        "The exact boarding point depends on the selected cruise operator and vessel. Guests may need to meet at a designated riverside landing, lodge or operator's departure point near Kasane. Confirm the exact location, check-in time, contact number, parking arrangements and whether hotel transfers are included before sending the booking confirmation.",
    },
    pricing: {
      adult: {
        amount: 50,
        currency: "USD",
        label: "From per person",
      },
      child: {
        amount: 30,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Supplier cancellation and amendment terms have not yet been verified. Before accepting bookings, confirm deposit requirements, cancellation deadlines, refund rules, no-show conditions and arrangements for cruises cancelled or changed because of weather, river conditions or operational restrictions. State all verified terms in the final quotation and booking confirmation.",
    },
    faqs: [
      {
        question: "What can I see on a Chobe River sunset cruise?",
        answer:
          "You may see elephants, hippos, crocodiles and a variety of waterbirds along the river and floodplains. Wildlife sightings vary with the season and animal movements and cannot be guaranteed.",
      },
      {
        question: "How long does the cruise last?",
        answer:
          "Allow approximately 2–3 hours. The exact duration depends on the selected operator, departure schedule, route and river conditions.",
      },
      {
        question: "What time does the sunset cruise depart?",
        answer:
          "Departure times vary with the season and sunset time. Your confirmed booking should state the exact boarding time and recommended arrival time.",
      },
      {
        question: "Is hotel pickup included?",
        answer:
          "Pickup from selected Kasane hotels and lodges may be available, but it is not assumed to be included. Confirm the transfer arrangement and any additional charges before booking.",
      },
      {
        question: "Are food and drinks included?",
        answer:
          "Inclusions vary by operator. Drinking water, refreshments, snacks or other beverages should only be advertised as included after confirmation from the supplier.",
      },
      {
        question: "Can children join the cruise?",
        answer:
          "Children may be accepted depending on the operator, vessel and safety rules. Confirm minimum age requirements, child rates and suitable life-jacket availability before booking.",
      },
      {
        question: "Can we book a private sunset cruise?",
        answer:
          "A private charter may be available from selected operators. Request a quotation and confirm vessel capacity, cruise duration, refreshments, route and cancellation terms.",
      },
      {
        question: "What happens if the weather is unsuitable?",
        answer:
          "The operator may delay, alter or cancel the cruise if conditions are unsafe. Confirm the supplier's rescheduling and refund policy for weather or other operational disruptions before booking.",
      },
    ],
  },
  {
    slug: "okavango-delta-mokoro-excursion",
    name: "Okavango Delta Mokoro Excursion",
    category: "Canoeing & Wildlife",
    location: "Okavango Delta, Botswana",
    country: "Botswana",
    image: "/images/activities/okavango-delta-mokoro-excursion.jpg",
    badge: "Signature Delta Experience",
    description:
      "Discover the tranquil waterways of Botswana's extraordinary Okavango Delta on a guided mokoro excursion. Travel through peaceful channels in a traditional-style dugout canoe or locally used equivalent, guided by an experienced poler who helps you explore the Delta's remarkable wetland environment. Observe water lilies, reeds, aquatic habitats and birdlife while learning about the area's ecology and seasonal flood cycles. Depending on the location and conditions, you may also see frogs, fish, antelope and other wildlife along the waterways. This relaxing, nature-focused experience offers a different perspective from a conventional game drive and is ideal for nature lovers, photographers and travellers seeking an authentic Delta experience. Routes and availability depend on water levels, season, camp location and operator arrangements.",
    rating: null,
    reviewCount: 0,
    duration: "2–3 hours",
    groupSize:
      "Small shared group or private arrangement; passenger capacity depends on the mokoro, guide and operator",
    pickup:
      "Pickup or transfer from a participating lodge, camp or designated Delta access point may be available. Remote camps may require a scheduled vehicle, boat or light-aircraft transfer. Confirm the exact pickup arrangement and any additional transfer costs before booking.",
    highlights: [
      "Explore the Okavango Delta's tranquil waterways by mokoro",
      "Experience a traditional-style canoe excursion with a local poler",
      "Discover the Delta's wetland ecosystems and seasonal floodplains",
      "Observe water lilies, reeds and aquatic habitats",
      "Look for birds and smaller wildlife along the channels",
      "Learn about the Delta's ecology and seasonal water cycles",
      "Enjoy peaceful scenery and opportunities for nature photography",
      "Experience a low-impact, nature-focused activity when operated responsibly",
    ],
    itinerary: [
      {
        time: "Before Departure",
        title: "Meet Your Guide and Safety Briefing",
        description:
          "Meet the confirmed guide or activity representative at your lodge, camp or designated launch point. Receive a briefing about the route, water conditions, wildlife awareness, boarding procedures and the use of required safety equipment.",
      },
      {
        time: "Excursion Departure",
        title: "Board the Mokoro",
        description:
          "Board the mokoro with assistance from the guide or poler. The exact craft used depends on the local operator and may be a traditional-style dugout canoe or a modern equivalent. Set off through suitable channels at a relaxed pace.",
      },
      {
        time: "During the Excursion",
        title: "Explore the Delta Waterways",
        description:
          "Glide through accessible channels while your guide explains the surrounding vegetation, wildlife habitats and seasonal changes in the Delta. Observe birdlife and other wildlife from a safe distance. Animal sightings are not guaranteed, and the route may change according to water levels and local conditions.",
      },
      {
        time: "Nature Observation",
        title: "Discover the Wetland Ecosystem",
        description:
          "Pause at suitable locations, where permitted, to appreciate the scenery, take photographs and learn more about the Delta's interconnected waterways and floodplains. Follow the guide's instructions and avoid disturbing wildlife or vegetation.",
      },
      {
        time: "Return",
        title: "Return to the Launch Point",
        description:
          "Return to the agreed landing point and disembark with the guide's assistance. Continue with your lodge programme or pre-arranged transfer, depending on the confirmed booking.",
      },
    ],
    included: [
      "Mokoro excursion for the confirmed duration",
      "Local poler or guide provided by the selected operator",
      "Safety briefing and activity instructions",
      "Required safety equipment supplied by the operator",
      "Wildlife and wetland interpretation during the excursion",
      "Transfers from the lodge or camp only if expressly included",
      "Drinking water only if confirmed by the operator",
    ],
    notIncluded: [
      "Transfers to the Delta or remote lodge unless expressly included",
      "Light-aircraft flights or other remote-camp transfers unless specified",
      "Accommodation before or after the activity",
      "Meals, snacks and beverages unless specified",
      "Park fees, conservation levies or concession charges unless expressly included",
      "Gratuities and personal expenses",
      "Travel insurance",
      "Other safari activities or excursions",
      "Private-use supplements unless confirmed in the quotation",
    ],
    information: [
      "Location: The Okavango Delta in northern Botswana. Exact launch locations vary by camp, concession and local water access.",
      "Duration: Allow approximately 2–3 hours, subject to the selected operator and route.",
      "Seasonality: Mokoro excursions depend on water levels, channel access, weather and local operating conditions. Availability varies across the Delta and throughout the year.",
      "Craft type: Confirm whether the operator uses a traditional dugout mokoro or a modern equivalent. Do not assume every Delta area offers the same craft or experience.",
      "Wildlife: Birds and other wildlife may be observed along the waterways, but sightings are not guaranteed. The excursion is primarily a nature and wetland experience, not a guaranteed big-game viewing activity.",
      "Safety: Follow the guide's instructions, remain seated as directed and avoid sudden movements. Wildlife may be present near channels, so maintain a safe distance and never attempt to touch or feed animals.",
      "Safety equipment: Confirm the operator's safety procedures, available life jackets and suitability for each guest before departure.",
      "Clothing: Wear lightweight, comfortable clothing suitable for the weather. A hat, sunglasses and sunscreen are recommended.",
      "Insects: Insect activity varies by location and season. Follow local advice on insect repellent and appropriate clothing.",
      "Footwear: Follow the operator's advice on footwear for boarding, disembarking and any permitted stops.",
      "Children: Confirm minimum age, child eligibility, seating arrangements and safety requirements with the operator before accepting a booking.",
      "Accessibility: Boarding may require stepping into a low canoe and maintaining a seated position. Discuss mobility, balance and assistance needs with the operator before booking.",
      "Weather and water conditions: Rain, wind, changing water levels or other conditions may cause route changes, delays or cancellation.",
      "Remote access: Some Delta camps are accessible only by light aircraft or a combination of transfers. Confirm all connections and transfer inclusions separately.",
      "Responsible tourism: Respect wildlife, vegetation and local communities. Follow the guide's instructions and avoid littering or disturbing sensitive wetland habitats.",
    ],
    meetingPoint: {
      name: "Confirmed Okavango Delta Lodge, Camp or Mokoro Launch Point",
      description:
        "The exact meeting point depends on the selected operator and location. Guests may meet at a participating lodge, camp or designated launch point, and remote locations may require a separate transfer. Confirm the precise location, check-in time, contact details, transfer arrangements and included fees before issuing the booking confirmation.",
    },
    pricing: {
      adult: {
        amount: 90,
        currency: "USD",
        label: "From per person",
      },
      child: {
        amount: 45,
        currency: "USD",
        label: "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Supplier cancellation and amendment conditions have not yet been verified. Before accepting bookings, confirm deposit requirements, cancellation deadlines, refund rules, no-show conditions and arrangements for activities cancelled or changed because of weather, water levels, wildlife-related safety concerns or operational restrictions. Include verified terms in the final quotation and booking confirmation.",
    },
    faqs: [
      {
        question: "What is a mokoro excursion?",
        answer:
          "A mokoro excursion is a guided journey through suitable waterways in a traditional-style canoe, commonly propelled by a poler using a long pole. The experience focuses on the Delta's waterways, wetland scenery and nature observation.",
      },
      {
        question: "How long does the excursion last?",
        answer:
          "Allow approximately 2–3 hours, although duration depends on the launch location, operator, route and local conditions.",
      },
      {
        question: "What wildlife can I see?",
        answer:
          "You may observe birds, aquatic habitats and other wildlife along the channels. Sightings depend on location, season and animal movements, and no specific animal encounter can be guaranteed.",
      },
      {
        question: "Is the mokoro excursion available all year?",
        answer:
          "Availability varies by location, water levels, weather and operator arrangements. Confirm the activity for your travel dates and the specific camp or launch point.",
      },
      {
        question: "Is the activity suitable for children?",
        answer:
          "Suitability depends on the child's age, swimming ability where relevant, the operator's safety policy and the conditions on the day. Confirm age restrictions, supervision requirements and suitable safety equipment before booking.",
      },
      {
        question: "Are transfers included?",
        answer:
          "Transfers are not automatically included. Some excursions depart from participating camps, while remote Delta locations may require additional road, boat or light-aircraft transfers. Check the final quotation carefully.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring sunscreen, a hat, sunglasses, comfortable clothing and a camera secured against water. Follow the operator's advice on insect repellent, footwear, drinking water and other equipment.",
      },
      {
        question:
          "What happens if water levels or weather conditions are unsuitable?",
        answer:
          "The operator may change the route, substitute another activity, reschedule or cancel the excursion for safety or access reasons. Confirm the supplier's refund and rescheduling policy before booking.",
      },
    ],
  },
  {
    slug: "okavango-delta-guided-game-drive",
    name: "Okavango Delta Guided Game Drive",
    category: "Safari & Wildlife",
    location: "Okavango Delta, Botswana",
    country: "Botswana",
    image: "/images/activities/okavango-delta-guided-game-drive.jpg",
    badge: "Delta Safari",
    description:
      "Explore the extraordinary wildlife habitats of Botswana's Okavango Delta on a guided 4x4 game drive. Travel through seasonal floodplains, open grasslands, woodland and island habitats with an experienced safari guide who helps interpret animal behaviour and the surrounding ecosystem. Search for elephants, giraffes, zebras, buffalo, antelope and predators such as lions, depending on the area and prevailing conditions. The Delta's wildlife experience varies significantly between locations, seasons and water levels, making each outing unique. Ideal for wildlife enthusiasts, photographers, couples and small groups, this safari offers an opportunity to discover one of Africa's most remarkable wetland ecosystems. Game drives are available only where the selected camp or concession provides suitable land-based routes and authorised safari operations.",
    rating: null,
    reviewCount: 0,
    duration: "3–4 hours",
    groupSize:
      "Shared or private 4x4 safari vehicle; passenger capacity depends on the camp, vehicle and operator",
    pickup:
      "Pickup from a participating safari camp or lodge may be included. Some Delta camps are accessible only by light aircraft followed by a camp transfer. Confirm the departure point, transfer arrangements and any additional charges before booking.",
    highlights: [
      "Explore suitable wildlife areas of the Okavango Delta by 4x4",
      "Search for elephants, giraffes, zebras and antelope",
      "Look for lions, buffalo and other wildlife where present",
      "Discover seasonal floodplains, woodland and island habitats",
      "Learn about animal behaviour, tracks and the Delta ecosystem",
      "Enjoy guided wildlife viewing and photography opportunities",
      "Experience a safari tailored to local conditions and wildlife activity",
      "Combine a land-based game drive with other Delta activities where available",
    ],
    itinerary: [
      {
        time: "Before Departure",
        title: "Meet Your Guide and Safari Briefing",
        description:
          "Meet your guide at the confirmed camp or departure point. Receive an overview of the planned route, wildlife-viewing etiquette and vehicle safety procedures. The guide will explain any restrictions that apply to the area's wildlife and terrain.",
      },
      {
        time: "Safari Departure",
        title: "Enter the Wildlife Area",
        description:
          "Set off in a suitable safari vehicle along authorised routes within the selected wildlife area. Your guide will identify tracks, vegetation and habitat features while looking for signs of animal activity.",
      },
      {
        time: "During the Drive",
        title: "Wildlife Viewing and Interpretation",
        description:
          "Explore suitable habitats in search of elephants, giraffes, zebras, antelope and other wildlife. Predator sightings may be possible depending on the location and conditions. The guide determines safe viewing distances and appropriate stops. Wildlife sightings cannot be guaranteed.",
      },
      {
        time: "Safari Break",
        title: "Scenery and Photography",
        description:
          "Where permitted and safe, pause to appreciate the Delta landscape and take photographs. Any refreshments or stops outside the vehicle depend on the operator's procedures and local wildlife conditions.",
      },
      {
        time: "Return Journey",
        title: "Return to Camp or Lodge",
        description:
          "Complete the game drive and return to the agreed camp or lodge. Actual return time and route may vary according to wildlife activity, road conditions, weather and the camp's daily schedule.",
      },
    ],
    included: [
      "Guided game drive for the confirmed duration",
      "Safari vehicle provided by the selected camp or operator",
      "Safari guide or driver-guide services as specified",
      "Wildlife interpretation during the drive",
      "Camp pickup and return transfer only if expressly included",
      "Drinking water or refreshments only if confirmed",
      "Park, reserve or concession fees only where expressly included in the quotation",
    ],
    notIncluded: [
      "Flights to and from the Okavango Delta",
      "Road, boat or air transfers not expressly included",
      "Accommodation before or after the activity",
      "Meals and beverages unless specified",
      "Park entry fees, concession charges or conservation levies unless expressly included",
      "Private vehicle or exclusive-use supplements unless booked",
      "Other safari activities, mokoro excursions or boat trips",
      "Gratuities and personal expenses",
      "Travel insurance",
      "Additional costs resulting from changes to flights or remote-camp transfers unless covered by the confirmed booking terms",
    ],
    information: [
      "Location: The Okavango Delta in northern Botswana. Exact game-drive areas depend on the selected camp, concession and local access arrangements.",
      "Duration: Allow approximately 3–4 hours, subject to the camp's schedule and operating conditions.",
      "Activity availability: Not every Delta camp offers conventional 4x4 game drives. Confirm that the selected camp or operator provides this activity in its specific location.",
      "Seasonality: Water levels, flooding, rainfall and road conditions can affect accessible routes and wildlife distribution.",
      "Wildlife: Potential sightings vary by habitat and season. Elephants, giraffes, zebras, antelope, buffalo and predators may be encountered, but no sightings are guaranteed.",
      "Departure times: Morning and afternoon drives may be offered, depending on the camp schedule, season and conditions. Confirm the actual departure time.",
      "Vehicle: Vehicle type, seating, shade and passenger capacity vary. Confirm the vehicle configuration and whether the booking is shared or private.",
      "Clothing: Wear comfortable, weather-appropriate clothing and closed shoes. Neutral colours are generally practical for safari outings.",
      "Sun protection: Bring sunscreen, sunglasses and a hat. Confirm whether drinking water is provided.",
      "Photography: Bring a camera or phone and follow the guide's instructions when photographing wildlife.",
      "Safety: Remain in the vehicle unless the guide explicitly permits a safe stop. Do not feed, approach or attempt to touch wildlife.",
      "Children: Minimum ages, child rates, vehicle requirements and participation rules vary by operator. Confirm these details before booking.",
      "Accessibility: Boarding and seating may be challenging for some guests. Discuss mobility, accessibility and assistance requirements with the camp in advance.",
      "Remote access: Some camps require scheduled light-aircraft flights and additional transfers. Confirm baggage restrictions, flight arrangements and connection times separately.",
      "Responsible tourism: Follow the guide's instructions, respect wildlife viewing distances and avoid disturbing animals or sensitive habitats.",
    ],
    meetingPoint: {
      name: "Confirmed Okavango Delta Safari Camp or Lodge",
      description:
        "The meeting point depends on the selected camp and safari operator. Guests may meet at their accommodation or a designated departure point. Remote camps may require a light-aircraft transfer and a separate camp transfer before the activity. Confirm the exact location, departure time, contact details and all transfer inclusions before issuing the booking confirmation.",
    },
    pricing: {
      adult: {
        amount: 120,
        currency: "USD",
        label: "From per person",
      },
      child: {
        amount: 60,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Supplier cancellation and amendment terms have not yet been verified. Confirm deposit requirements, cancellation deadlines, refund rules, no-show conditions and procedures for changes caused by weather, flooding, inaccessible routes, wildlife-related safety concerns or operational restrictions. Remote camps and transfers may have separate cancellation conditions. Include the verified terms in the final quotation and booking confirmation.",
    },
    faqs: [
      {
        question: "What animals can I see on an Okavango Delta game drive?",
        answer:
          "Depending on the camp's location and season, you may encounter elephants, giraffes, zebras, antelope, buffalo and predators such as lions. Wildlife sightings are never guaranteed.",
      },
      {
        question: "How long does the game drive last?",
        answer:
          "Allow approximately 3–4 hours, although the actual duration depends on the camp's schedule, selected route and local conditions.",
      },
      {
        question: "Do all Okavango Delta camps offer game drives?",
        answer:
          "No. Activities depend on the camp's location, concession, terrain and operating arrangements. Some camps focus primarily on water-based activities. Confirm that conventional 4x4 game drives are available before booking.",
      },
      {
        question: "Are park and concession fees included?",
        answer:
          "Fees are not automatically included in this draft. Check the final quotation to establish whether park, reserve or concession charges, transfers and other compulsory costs are covered.",
      },
      {
        question: "Are transfers included?",
        answer:
          "Only transfers expressly listed in the confirmed quotation should be treated as included. Remote camps may require light-aircraft flights and additional transfers.",
      },
      {
        question: "Can children participate?",
        answer:
          "Child participation depends on the camp's minimum age policy, vehicle arrangements and safety rules. Confirm age restrictions and child rates with the operator before accepting a booking.",
      },
      {
        question: "Can I book a private game drive?",
        answer:
          "A private vehicle may be available at selected camps, subject to capacity and additional charges. Confirm the vehicle, duration, inclusions and private-use rate with the supplier.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring comfortable clothing, closed shoes, sun protection and a camera. A light layer may be useful for cooler early-morning drives. Confirm whether drinking water is supplied.",
      },
      {
        question: "What happens if conditions prevent the game drive?",
        answer:
          "The operator may change the route, adjust the departure time, offer an alternative activity or cancel for safety reasons. Confirm the supplier's rescheduling and refund policy before booking.",
      },
    ],
  },
  {
    slug: "okavango-delta-motorboat-safari",
    name: "Okavango Delta Motorboat Safari",
    category: "Boat Safari & Wildlife",
    location: "Okavango Delta, Botswana",
    country: "Botswana",
    image: "/images/activities/okavango-delta-motorboat-safari.jpg",
    badge: "Water Safari",
    description:
      "Discover the spectacular waterways of Botswana's Okavango Delta on a guided motorboat safari. Travel through navigable channels and lagoons surrounded by papyrus reeds, water lilies and seasonal floodplains while observing the Delta's remarkable aquatic ecosystem. With an experienced local guide or boat operator, look for hippos, crocodiles, elephants near the water's edge, waterbirds and other wildlife that inhabit this unique wetland environment. The motorboat offers a different perspective from a traditional game drive or mokoro excursion, allowing guests to explore suitable waterways efficiently while enjoying opportunities for photography and birdwatching. Ideal for couples, families with eligible children and small groups, this experience can be arranged through participating camps and local operators. Routes, wildlife sightings and activity availability depend on the location, water levels, weather and operating conditions.",
    rating: null,
    reviewCount: 0,
    duration: "1–3 hours",
    groupSize:
      "Shared or private motorboat; passenger capacity depends on the vessel and confirmed operator",
    pickup:
      "Pickup or boarding arrangements depend on the selected lodge, camp or designated boat station. Remote Delta camps may require additional road, boat or light-aircraft transfers. Confirm the exact meeting point and any transfer charges before booking.",
    highlights: [
      "Explore suitable Okavango Delta channels and lagoons by motorboat",
      "Discover the Delta's distinctive wetland landscapes",
      "Look for hippos and crocodiles from a safe distance",
      "Observe elephants and other wildlife near accessible waterways",
      "Discover aquatic habitats, papyrus reeds and water lilies",
      "Enjoy birdwatching and wildlife photography opportunities",
      "Learn about the Delta's ecology from a local guide or boat operator",
      "Experience a water-based safari distinct from a 4x4 game drive",
      "Enjoy scenic views across the Delta's waterways and floodplains",
    ],
    itinerary: [
      {
        time: "Before Departure",
        title: "Meet Your Guide and Safety Briefing",
        description:
          "Meet the boat operator or guide at the confirmed departure point. Receive instructions covering boarding, passenger seating, required safety equipment, wildlife-viewing etiquette and procedures to follow while on the water.",
      },
      {
        time: "Departure",
        title: "Begin the Waterway Safari",
        description:
          "Board the motorboat and begin exploring suitable channels or lagoons in the selected Delta area. The captain chooses the route according to navigability, water levels, weather, wildlife activity and local operating restrictions.",
      },
      {
        time: "During the Cruise",
        title: "Wildlife and Birdwatching",
        description:
          "Observe the surrounding waterways and vegetation while looking for hippos, crocodiles, waterbirds and other wildlife. Elephants or other animals may be visible along suitable banks. Your guide or operator may explain local habitats and wildlife behaviour where interpretation is provided.",
      },
      {
        time: "Scenic Exploration",
        title: "Discover the Delta Landscape",
        description:
          "Continue through accessible waterways, enjoying opportunities to photograph the scenery and observe the wetland ecosystem. Wildlife viewing stops and the route depend on the captain's judgement, safe navigation and conditions on the day.",
      },
      {
        time: "Return",
        title: "Return to the Departure Point",
        description:
          "Travel back to the designated landing point and disembark under the crew's direction. Continue with your lodge programme or pre-arranged transfer as confirmed in the booking.",
      },
    ],
    included: [
      "Motorboat safari for the confirmed duration",
      "Boat captain or operator",
      "Guide or wildlife interpretation where provided by the selected operator",
      "Safety briefing before departure",
      "Required onboard safety equipment",
      "Transfers from the participating camp or lodge only if expressly included",
      "Drinking water or refreshments only if confirmed by the operator",
    ],
    notIncluded: [
      "Flights to and from the Okavango Delta",
      "Road, boat or air transfers not expressly included",
      "Accommodation before or after the activity",
      "Meals, snacks and beverages unless specified",
      "Park fees, concession charges or conservation levies unless expressly included",
      "Private boat charter or exclusive-use supplement unless booked",
      "Other safari activities, mokoro excursions or game drives",
      "Gratuities and personal expenses",
      "Travel insurance",
      "Additional charges not specified as included in the confirmed quotation",
    ],
    information: [
      "Location: The Okavango Delta in northern Botswana. Exact departure points depend on the selected camp, concession and boat operator.",
      "Duration: Allow approximately 1–3 hours, subject to the operator's schedule and route.",
      "Seasonality: Water-based activities depend on navigable channels, water levels and local conditions. Some camps offer year-round boating in permanent waterways, while others operate seasonally.",
      "Best practice: Confirm activity availability for the exact travel dates and selected camp rather than assuming every Delta property offers motorboat safaris.",
      "Water levels: The annual flood varies from year to year. Low water may restrict routes or make some areas inaccessible.",
      "Wildlife: Hippos, crocodiles, waterbirds and other wildlife may be seen, but sightings cannot be guaranteed. Wildlife encounters depend on location and animal movements.",
      "Boat type: Vessel design, seating, shade, engine type and passenger capacity vary by operator. Confirm the actual boat before booking.",
      "Safety: Follow the captain's instructions, remain seated as directed and use safety equipment according to the crew's guidance. Maintain a safe distance from wildlife and never feed or approach animals.",
      "Children: Confirm minimum age requirements, child rates, supervision rules and appropriate safety equipment before accepting a booking.",
      "Accessibility: Boarding may involve steps or uneven access. Confirm vessel access, seating and assistance arrangements for guests with mobility requirements.",
      "Clothing: Wear comfortable, weather-appropriate clothing and secure footwear. A light jacket may be useful in windy conditions.",
      "Sun protection: Bring sunscreen, sunglasses and a hat. Confirm whether drinking water is supplied.",
      "Photography: Secure cameras and phones against water and follow the crew's guidance when photographing wildlife.",
      "Weather: Wind, storms, visibility or unsafe water conditions may change the route, delay departure or prevent the activity from operating.",
      "Remote access: Some Delta camps require light-aircraft transfers or additional transport. Confirm baggage restrictions, connection times and all transfers separately.",
      "Responsible tourism: Respect wildlife, avoid littering and follow local guidance to minimise disturbance to the wetland environment.",
    ],
    meetingPoint: {
      name: "Confirmed Okavango Delta Boat Station or Participating Camp",
      description:
        "The meeting point depends on the selected operator and camp. Guests may board from a camp jetty, a designated boat station or another approved launch point. Remote locations may require separate road, boat or light-aircraft transfers. Confirm the exact location, check-in time, contact details, transfer arrangements and included fees before sending the booking confirmation.",
    },
    pricing: {
      adult: {
        amount: 40,
        currency: "USD",
        label: "From per person",
      },
      child: {
        amount: 25,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Supplier cancellation and amendment terms have not yet been verified. Confirm deposit requirements, cancellation deadlines, refund rules, no-show conditions and procedures for changes caused by low water levels, weather, navigation restrictions or other operational circumstances. Remote-camp transfers may have separate cancellation conditions. Include the verified terms in the final quotation and booking confirmation.",
    },
    faqs: [
      {
        question: "What is an Okavango Delta motorboat safari?",
        answer:
          "It is a guided boat excursion through suitable channels and lagoons in the Okavango Delta. Guests explore the wetland environment and look for aquatic wildlife and birds from the water.",
      },
      {
        question: "What wildlife might I see?",
        answer:
          "Depending on the location and season, you may see hippos, crocodiles, waterbirds and elephants near the waterways. Sightings are not guaranteed.",
      },
      {
        question: "How long does the safari last?",
        answer:
          "Allow approximately 1–3 hours. The exact duration depends on the operator, selected route, water conditions and camp schedule.",
      },
      {
        question: "Is the motorboat safari available all year?",
        answer:
          "Availability varies by location. Camps near permanent waterways may operate boating activities for much of the year, while seasonal areas depend on flood levels and navigable channels. Confirm availability for your travel dates.",
      },
      {
        question: "Is this the same as a mokoro excursion?",
        answer:
          "No. A motorboat uses an engine to navigate suitable waterways, while a mokoro is a traditional-style canoe propelled by a poler. The two activities provide different experiences and may be offered at different locations.",
      },
      {
        question: "Are transfers included?",
        answer:
          "Transfers are not automatically included. Check whether your selected camp provides transport to the boat station and whether additional flights or road transfers are required.",
      },
      {
        question: "Can children join the motorboat safari?",
        answer:
          "Children may be accepted depending on the operator's age policy, vessel capacity and safety requirements. Confirm eligibility and suitable safety equipment before booking.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring sun protection, comfortable clothing, sunglasses and a camera secured against water. Follow the operator's advice on footwear, insect protection and drinking water.",
      },
      {
        question:
          "What happens if water levels or weather conditions are unsuitable?",
        answer:
          "The operator may change the route, delay departure, offer an alternative activity or cancel for safety reasons. Confirm the supplier's rescheduling and refund policy before booking.",
      },
    ],
  },
  {
    slug: "okavango-delta-guided-walking-safari",
    name: "Okavango Delta Guided Walking Safari",
    category: "Walking Safari",
    location: "Okavango Delta",
    country: "Botswana",
    image: "/images/activities/okavango-delta-guided-walking-safari.jpg",
    badge: "Guided Wilderness Experience",
    description:
      "Explore the remarkable Okavango Delta on foot with an experienced, appropriately licensed safari guide. This immersive wilderness experience focuses on animal tracks, birdlife, plants, insects, and the smaller details of the African bush that can be missed on a game drive. Walks take place in suitable areas selected by the operator according to wildlife movements, terrain, vegetation, water levels, and current safety conditions. The experience is available only where walking activities are permitted and should be confirmed with a qualified local operator before booking.",
    rating: null,
    reviewCount: 0,
    duration: "2–4 hours",
    groupSize:
      "Small group; maximum size subject to operator and safety requirements",
    pickup:
      "Pickup from a participating lodge or safari camp may be available; confirm the camp, concession, and transfer arrangements before booking.",
    highlights: [
      "Explore the African bush on foot with a qualified safari guide",
      "Learn to identify animal tracks, spoor, and signs of wildlife activity",
      "Discover native plants, insects, birdlife, and Delta ecosystems",
      "Experience the sights and sounds of the wilderness away from a safari vehicle",
      "Enjoy a guided morning walk when conditions are suitable",
      "Learn about wildlife behaviour and responsible wilderness conduct",
    ],
    itinerary: [
      {
        time: "Early morning",
        title: "Meet your guide and safety briefing",
        description:
          "Meet at the confirmed camp or designated departure point. Your guide explains the route, walking procedures, wildlife precautions, fitness expectations, and any relevant restrictions before departure.",
      },
      {
        time: "Morning",
        title: "Guided wilderness walk",
        description:
          "Walk at a measured pace through suitable bush, woodland, open terrain, or island habitat, depending on the location. Learn about animal tracks, feeding signs, plants, insects, birdlife, and the ecological relationships that shape the Delta.",
      },
      {
        time: "During the walk",
        title: "Wildlife interpretation and observation",
        description:
          "Pause to interpret signs of animal activity and observe the landscape. Sightings of large mammals are never guaranteed, and the guide may change the route or turn back if wildlife or environmental conditions require it.",
      },
      {
        time: "Late morning",
        title: "Return to camp",
        description:
          "Return to the agreed meeting point and conclude the experience with time for questions. The precise duration and return time depend on the route, weather, wildlife activity, and operator arrangements.",
      },
    ],
    included: [
      "Guided walking experience with an appropriately qualified local safari guide",
      "Pre-walk safety briefing",
      "Wildlife and environmental interpretation during the walk",
      "Basic first-aid provision carried by the operator, subject to confirmation",
    ],
    notIncluded: [
      "Accommodation and overnight stays",
      "Flights to or within Botswana",
      "Transfers to and from the participating camp unless explicitly confirmed",
      "Park, reserve, concession, or community fees unless explicitly included",
      "Meals, snacks, and drinks unless specified by the operator",
      "Travel insurance and personal medical expenses",
      "Tips and personal purchases",
      "Additional safari activities such as game drives, mokoro excursions, or motorboat safaris",
    ],
    information: [
      "This activity is subject to availability and must be confirmed with a local operator before payment is accepted.",
      "Guided walking is permitted only in appropriate locations. Confirm that the selected camp or concession allows walking; do not assume it is available throughout Moremi Game Reserve or across the entire Okavango Delta.",
      "Walking safaris involve inherent wildlife risks and are not equivalent to vehicle-based game drives. Follow the guide's instructions at all times and never leave the group.",
      "The guide must hold the appropriate current qualifications and permissions for the activity and location. Confirm the operator's safety procedures, communications arrangements, first-aid capability, and whether an armed guide or additional tracker will accompany the group.",
      "Dry-season conditions, often from May to October, can provide better visibility in many areas, but walking availability depends on local wildlife, vegetation, flooding, weather, and operator assessment. No month guarantees that a walk will operate.",
      "A moderate level of fitness and the ability to walk on uneven natural terrain are recommended. The route, distance, pace, and accessibility should be confirmed before booking.",
      "Wear neutral-coloured clothing, comfortable closed walking shoes, a hat, and sun protection. Carry drinking water and insect repellent as advised by the operator.",
      "Children may be subject to minimum-age limits set by the operator and guide. Confirm eligibility before booking; the activity may not be suitable for young children.",
      "Pregnant travellers and guests with mobility limitations or medical concerns should discuss suitability with the operator and their healthcare professional before participating.",
      "The Okavango Delta is a malaria-risk area. Seek destination-specific advice from a qualified travel-health professional before departure.",
      "Wildlife sightings, walking routes, and activity duration cannot be guaranteed. The guide may cancel, shorten, or reroute the walk for safety or conservation reasons.",
      "The listed price is a draft planning estimate, not a verified supplier quotation. Final pricing depends on the camp or concession, season, group size, transfers, fees, and operator inclusions.",
    ],
    meetingPoint: {
      name: "Confirmed participating Okavango Delta camp or concession",
      description:
        "The exact meeting point depends on the selected camp and licensed operator. Confirm the camp name, concession, departure time, transfer arrangements, and any required pre-walk checks before accepting a booking.",
    },
    pricing: {
      adult: {
        amount: 100,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 0,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy: cancellation terms must be confirmed with the selected supplier before payment. Weather, flooding, wildlife activity, safety assessments, or concession restrictions may prevent the walk from operating. Confirm the supplier's cancellation, rescheduling, refund, and no-show terms in writing.",
    },
    faqs: [
      {
        question: "What can I expect to see on a walking safari?",
        answer:
          "The experience focuses on tracking, plants, insects, birdlife, and understanding the ecosystem. You may encounter signs of larger animals, but sightings are not guaranteed and guides maintain a safe distance from potentially dangerous wildlife.",
      },
      {
        question:
          "Is the walking safari available throughout the Okavango Delta?",
        answer:
          "No. Availability depends on the camp or concession, local permissions, wildlife conditions, vegetation, water levels, and safety assessments. Confirm the specific location before booking.",
      },
      {
        question: "When is the best time for a walking safari?",
        answer:
          "The dry season, often May to October, can offer thinner vegetation and better visibility in many areas. Actual operating dates depend on local conditions and the operator's safety decision.",
      },
      {
        question: "Is a walking safari safe?",
        answer:
          "Walking in wildlife habitat carries inherent risk. The experience should be led by an appropriately qualified guide using the operator's safety procedures. Attend the briefing, remain with the group, and follow all instructions.",
      },
      {
        question: "Can children join the walk?",
        answer:
          "Possibly, but minimum ages and suitability vary by operator and location. Obtain written confirmation of the child's eligibility and price before booking.",
      },
      {
        question: "Are transfers and park fees included?",
        answer:
          "Not automatically. The departure camp, transfers, concession or community fees, refreshments, and any additional activities must be confirmed in the final supplier quotation.",
      },
      {
        question: "How much does the activity cost?",
        answer:
          "The displayed adult price is an unverified planning estimate only. Request a current quote from the selected operator before publishing a final rate or confirming a booking.",
      },
    ],
  },
  {
    slug: "chobe-wildlife-photography-safari",
    name: "Chobe Wildlife Photography Safari",
    category: "Photography Safari",
    location: "Chobe National Park and Chobe Riverfront, Kasane",
    country: "Botswana",
    image: "/images/activities/chobe-wildlife-photography-safari.jpg",
    badge: "Wildlife Photography",
    description:
      "Discover the wildlife of Botswana's Chobe region through a photography-focused safari combining a guided game drive with a boat-based wildlife experience on the Chobe River. Photograph elephants gathering along the riverbanks, buffalo, hippos, crocodiles, antelope, and a wide variety of birds while learning to make the most of changing light, animal behaviour, composition, and camera settings. A standard safari vehicle and boat can provide excellent photographic opportunities, while a specialist photographic vehicle or low-angle photography boat may be arranged on request, subject to availability and additional cost. Suitable for keen beginners and experienced wildlife photographers, this experience prioritises ethical wildlife viewing, patience, and responsible photography.",
    rating: null,
    reviewCount: 0,
    duration: "Full day",
    groupSize:
      "Shared small group or private photographic safari; confirm maximum capacity with the operator",
    pickup:
      "Pickup from a confirmed Kasane hotel or lodge may be available. Pickup from Victoria Falls or other locations requires separate confirmation of cross-border transfers.",
    highlights: [
      "Photograph elephants and other wildlife along the Chobe River",
      "Combine a land-based game drive with a river safari",
      "Look for hippos, crocodiles, buffalo, antelope, and waterbirds",
      "Learn how to work with natural light, exposure, focus, and composition",
      "Capture river reflections, wildlife behaviour, and wide landscape scenes",
      "Choose a private departure for greater flexibility with photographic subjects and timing",
      "Enjoy opportunities for both close-up wildlife portraits and environmental photography",
    ],
    itinerary: [
      {
        time: "Early morning",
        title: "Pickup and photography briefing",
        description:
          "Meet your guide at the confirmed pickup point in Kasane. Review the day's activities, camera equipment, safety rules, and photographic interests. Early starts are recommended to make use of softer light and wildlife activity.",
      },
      {
        time: "Morning",
        title: "Chobe game-drive photography",
        description:
          "Explore an authorised game-drive area in a safari vehicle with a local guide. Photograph wildlife and landscapes as conditions allow, with attention to animal behaviour, backgrounds, focus, shutter speed, and exposure. Routes and sightings depend on wildlife movements and park conditions.",
      },
      {
        time: "Midday",
        title: "Rest and refreshment break",
        description:
          "Take a break between activities. Meals, refreshments, and access to facilities depend on the selected operator and the day's arrangements.",
      },
      {
        time: "Afternoon",
        title: "Chobe River photography safari",
        description:
          "Board a confirmed safari boat for a water-based photographic outing. Look for elephants drinking or crossing, hippos, crocodiles, buffalo, and birds along the riverbanks. Water-level perspectives and reflections can provide different compositions from those available on a game drive.",
      },
      {
        time: "Late afternoon",
        title: "Return and activity close",
        description:
          "Return to the agreed landing point and transfer back to the pickup location if included. The exact finish time depends on the departure schedule, river conditions, and the confirmed activity combination.",
      },
    ],
    included: [
      "Guided wildlife photography safari",
      "Game-drive activity in the confirmed operating area",
      "Chobe River boat safari where included in the confirmed itinerary",
      "Wildlife interpretation and general photography guidance from the guide",
      "Pickup and return within the agreed Kasane area only if confirmed in the supplier quotation",
    ],
    notIncluded: [
      "Accommodation and overnight stays",
      "International or domestic flights",
      "Transfers from Victoria Falls or other towns unless explicitly included",
      "National park, concession, or other applicable fees unless explicitly included",
      "Professional photographer or specialist photographic host unless explicitly booked",
      "Dedicated photographic vehicle, camera mounts, or specialist photography boat unless explicitly booked",
      "Camera bodies, lenses, tripods, memory cards, and other personal photography equipment",
      "Meals, snacks, and drinks unless specified",
      "Travel insurance and personal expenses",
      "Tips and gratuities",
      "Additional activities not listed in the confirmed itinerary",
    ],
    information: [
      "This catalogue entry describes a photography-focused safari concept. Confirm the exact game-drive and boat-safari combination, departure times, inclusions, and operating locations with the supplier before taking payment.",
      "Chobe Riverfront is the principal area for boat-based wildlife photography. Game drives explore suitable authorised routes, and the available wildlife and photographic opportunities differ between river and land.",
      "The dry season, particularly from June to October, often concentrates wildlife around the river and can be productive for elephant photography. Seasonal conditions vary, and wildlife sightings are never guaranteed.",
      "Early morning and late afternoon often provide softer light. The final schedule should be agreed with the operator, especially if a dedicated photography departure is requested.",
      "A standard game-drive vehicle or sightseeing boat may not provide the camera supports, swivel seats, space, or positioning of a purpose-built photographic platform. Confirm the exact boat and vehicle configuration rather than assuming specialist equipment is included.",
      "Private departures generally provide greater flexibility for composition, positioning, and time spent at sightings, but cost more than shared excursions. Availability and vehicle capacity must be confirmed.",
      "Bring a camera or smartphone, suitable lenses, spare batteries, memory cards, lens-cleaning equipment, sun protection, and neutral-coloured clothing. A telephoto zoom and a shorter lens for landscapes are useful but not mandatory.",
      "Secure all camera equipment around water and dust. Follow the guide's instructions, remain seated when required, and never stand or lean dangerously from a boat or safari vehicle to obtain a photograph.",
      "Never pressure guides to approach, chase, bait, surround, or disturb wildlife for a photograph. Animals must be observed at a safe and responsible distance.",
      "Children may be accepted on standard boat safaris and game drives subject to operator rules, but minimum ages and suitability vary. Confirm child eligibility for the complete combination before booking.",
      "Cross-border transfers from Victoria Falls involve separate transport arrangements and immigration requirements. Confirm pickup, border procedures, passport and visa requirements, and return-transfer timing independently.",
      "The listed price is a draft planning estimate, not a verified supplier quotation. The final rate depends on group size, private or shared arrangements, park fees, photographic equipment, guide specialisation, transfers, and the confirmed activity combination.",
    ],
    meetingPoint: {
      name: "Confirmed Kasane hotel, lodge, or Chobe River departure point",
      description:
        "The exact meeting point depends on the operator and whether the safari starts with a game drive or boat activity. Confirm pickup time, landing point, transfer arrangements, and the sequence of activities before booking.",
    },
    pricing: {
      adult: {
        amount: 567,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 567,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy: obtain the selected supplier's written cancellation, amendment, refund, and no-show terms before confirming a booking. Boat operations and game drives may be changed, delayed, or cancelled because of weather, river conditions, park restrictions, safety considerations, or operational requirements. Confirm the applicable remedy and refund terms with the supplier.",
    },
    faqs: [
      {
        question: "What wildlife can I photograph in Chobe?",
        answer:
          "Possible subjects include elephants, buffalo, hippos, crocodiles, antelope, and numerous bird species. Sightings depend on the season, route, water conditions, and animal movements; no particular species is guaranteed.",
      },
      {
        question: "Does the safari include both a game drive and a boat trip?",
        answer:
          "The proposed experience combines both, but the exact activities must be confirmed in the supplier quotation. Some operators sell them separately or operate them on different schedules.",
      },
      {
        question: "Do I need professional photography equipment?",
        answer:
          "No. A smartphone or entry-level camera can capture memorable images. A camera with a telephoto lens offers more flexibility for distant wildlife, while spare batteries and memory cards are helpful.",
      },
      {
        question: "Will a photography instructor accompany the safari?",
        answer:
          "General photography tips may be available from the guide, but a professional photographer or dedicated photo host is not automatically included. Request this service separately if it is important to you.",
      },
      {
        question: "Can I book a private photographic boat?",
        answer:
          "Possibly, subject to availability. Specialist photographic boats may offer camera mounts, rotating seats, or lower shooting angles. Confirm the vessel configuration, passenger capacity, departure time, and extra cost before booking.",
      },
      {
        question: "When is the best time for wildlife photography in Chobe?",
        answer:
          "June to October is often productive for riverfront wildlife photography as animals gather around permanent water. Other seasons offer different subjects, including green landscapes and seasonal birdlife. Conditions vary from year to year.",
      },
      {
        question: "Is the activity suitable for children?",
        answer:
          "Suitability depends on the child's age, the operator's boat and vehicle rules, and the full itinerary. Confirm minimum ages and child rates before accepting the booking.",
      },
      {
        question: "Are park fees, lunch, and transfers included?",
        answer:
          "They are not assumed to be included. The final quotation should state the exact game-drive and boat activities, fees, meals, refreshments, pickup area, and any cross-border transfers.",
      },
      {
        question: "How much does the Chobe Wildlife Photography Safari cost?",
        answer:
          "The displayed adult and child prices are unverified planning estimates only. Obtain a current written supplier quotation before publishing final rates or confirming a reservation.",
      },
    ],
  },
  {
    slug: "okavango-delta-scenic-flight",
    name: "Okavango Delta Scenic Flight",
    category: "Scenic Flight",
    location: "Maun and the Okavango Delta",
    country: "Botswana",
    image: "/images/activities/okavango-delta-scenic-flight.jpg",
    badge: "Aerial Safari",
    description:
      "Experience the breathtaking scale of Botswana's Okavango Delta from above on a scenic flight departing from Maun or an agreed Delta airstrip. Enjoy sweeping aerial views of winding waterways, papyrus-fringed channels, lagoons, palm islands, seasonal floodplains, and open savannah. Depending on the route, season, and wildlife movements, you may also spot elephants, giraffes, buffalo, and other animals moving through their natural habitats. Choose a fixed-wing light aircraft for a broad panoramic perspective or enquire about a helicopter flight for a different aerial experience. This memorable excursion is ideal for photographers, couples, families, and travellers seeking a new perspective on one of Africa's most remarkable wetland ecosystems.",
    rating: null,
    reviewCount: 0,
    duration: "45–60 minutes",
    groupSize:
      "Shared light-aircraft flight or private charter, subject to operator and aircraft capacity",
    pickup:
      "Departure is generally from Maun Airport or a confirmed participating Delta camp airstrip. Hotel transfers may be available but must be confirmed with the supplier.",
    highlights: [
      "Enjoy panoramic aerial views of the Okavango Delta",
      "See intricate waterways, lagoons, floodplains, and palm-covered islands",
      "Look for elephants and other wildlife from above",
      "Capture aerial landscape photographs from your aircraft window",
      "Choose a morning or late-afternoon departure when available",
      "Select a fixed-wing aircraft or enquire about a helicopter experience",
      "Learn about the Delta's geography and ecosystems from your pilot",
    ],
    itinerary: [
      {
        time: "Before departure",
        title: "Check-in and flight briefing",
        description:
          "Arrive at the confirmed departure point at the time advised by the operator. Complete check-in and receive a safety briefing covering boarding procedures, aircraft safety, photography guidance, and the planned scenic route.",
      },
      {
        time: "Departure",
        title: "Take off over the Delta region",
        description:
          "Board the assigned aircraft and depart from Maun or the confirmed Delta airstrip. As the aircraft gains altitude, observe the changing landscape between settlements, open savannah, waterways, and wetland habitats.",
      },
      {
        time: "During the flight",
        title: "Aerial wildlife and landscape viewing",
        description:
          "Fly over a selected portion of the Okavango system. Look for branching channels, lagoons, islands, seasonal floodplains, and wildlife where visible. The pilot may provide commentary where operational conditions allow, and the exact route depends on the flight plan and conditions.",
      },
      {
        time: "Return",
        title: "Landing and end of experience",
        description:
          "Return to the departure airstrip after the scenic circuit. If transfers are included in the booking, continue to the agreed hotel or meeting point. Actual flight duration and routing are subject to the operator's confirmed schedule.",
      },
    ],
    included: [
      "Scenic flight in the confirmed fixed-wing aircraft or helicopter",
      "Pilot-led safety briefing",
      "Aerial sightseeing over an agreed portion of the Okavango Delta",
      "Window seat where specifically confirmed by the supplier",
      "Departure taxes or levies only where explicitly stated in the final quotation",
    ],
    notIncluded: [
      "Accommodation and overnight stays",
      "International and domestic flights to Botswana",
      "Hotel transfers unless explicitly included",
      "Private aircraft charter unless booked and confirmed",
      "Doors-off helicopter experience unless specifically booked",
      "Meals and refreshments unless specified",
      "Travel insurance and personal expenses",
      "Tips and gratuities",
      "Additional safari activities, game drives, mokoro excursions, or boat safaris",
      "Photography equipment and professional photographic services",
    ],
    information: [
      "This is a draft catalogue listing. Confirm the aircraft type, operator, departure location, flight duration, route, inclusions, and current price before accepting reservations.",
      "Scenic flights may operate from Maun or from participating camps within the Delta. The route and views differ according to departure point, flight duration, weather, and operational restrictions.",
      "A fixed-wing aircraft and a helicopter offer different experiences. Fixed-wing flights generally provide broad landscape views, while helicopters may offer different viewing angles and specialised photography options where available.",
      "Do not assume that a doors-off flight, guaranteed window seat, hotel transfer, departure tax, or private aircraft is included. Each must be confirmed in the supplier's written quotation.",
      "Early morning and late afternoon are popular times for scenic flights because of the changing light. Available departure times depend on the operator, aircraft schedule, weather, and season.",
      "The dry season, broadly from May to October, often provides attractive wildlife-viewing opportunities around remaining water sources. Seasonal flood levels and wildlife distribution vary, and no particular animal sighting is guaranteed.",
      "Flights are weather-dependent. Wind, thunderstorms, visibility, aircraft operating limits, or other safety considerations may cause delays, route changes, rescheduling, or cancellation.",
      "Passengers must follow the pilot's instructions and the operator's baggage, weight, and safety rules. Aircraft weight limits may affect passenger acceptance, seating arrangements, and baggage allowance.",
      "Children may be accepted subject to aircraft, seating, safety, and operator policies. Confirm infant and child requirements, fares, and any minimum age restrictions before booking.",
      "Passengers with mobility needs should confirm boarding arrangements and assistance requirements with the operator in advance.",
      "Bring a camera or smartphone, sunglasses, and sun protection. Follow the pilot's instructions about camera use and never interfere with aircraft doors, windows, controls, or safety equipment.",
      "The listed price is an unverified planning estimate, not a confirmed supplier rate. Final pricing depends on aircraft type, flight duration, shared or private arrangements, passenger numbers, taxes, transfers, and seasonal pricing.",
    ],
    meetingPoint: {
      name: "Confirmed scenic-flight departure airstrip",
      description:
        "The departure point will normally be Maun Airport or a participating Delta camp airstrip, depending on the selected product. Confirm the exact location, check-in time, passenger weight requirements, baggage limits, and transfer arrangements before booking.",
    },
    pricing: {
      adult: {
        amount: 250,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 200,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy: confirm the operator's cancellation, amendment, rescheduling, refund, and no-show terms in writing before payment. Flights may be delayed, rerouted, or cancelled because of weather, visibility, aircraft availability, or safety restrictions. The supplier's written policy determines whether an alternative departure, rescheduling, or refund is available.",
    },
    faqs: [
      {
        question: "What will I see on the Okavango Delta scenic flight?",
        answer:
          "Depending on the route, you may see waterways, lagoons, palm islands, floodplains, savannah, and wildlife such as elephants or giraffes. Sightings and specific landmarks cannot be guaranteed.",
      },
      {
        question: "Where does the scenic flight depart from?",
        answer:
          "Many scenic flights depart from Maun, while some operators arrange flights from participating camps within the Delta. The exact departure point depends on the product you book.",
      },
      {
        question: "How long does the flight last?",
        answer:
          "Common scenic-flight options last around 45–60 minutes, although shorter or longer products may be available. Confirm the actual time in the air with the operator.",
      },
      {
        question: "Is the flight operated by a helicopter or a light aircraft?",
        answer:
          "Both options may be available in the region. The listed product does not guarantee a particular aircraft type, so confirm whether your booking is for a fixed-wing aircraft or helicopter.",
      },
      {
        question: "Can I take photographs during the flight?",
        answer:
          "Photography is generally possible subject to the operator's safety instructions. Standard aircraft windows may affect reflections and angles. Doors-off helicopter photography is a separate option and must be explicitly confirmed.",
      },
      {
        question: "When is the best time for a scenic flight?",
        answer:
          "Morning and late afternoon are popular for attractive light. Seasonal water levels influence the appearance of the Delta, while wildlife sightings depend on local conditions and animal movements.",
      },
      {
        question: "Is the scenic flight suitable for children?",
        answer:
          "Suitability depends on the operator's age, seating, and safety requirements. Confirm child fares and any infant or minimum-age restrictions before booking.",
      },
      {
        question: "Are hotel transfers and departure taxes included?",
        answer:
          "Not automatically. Check the final quotation for transfers, airport or departure taxes, baggage restrictions, and any other compulsory charges.",
      },
      {
        question: "How much does the Okavango Delta scenic flight cost?",
        answer:
          "The displayed adult and child rates are draft planning estimates only. Obtain a current written supplier quotation before publishing final prices or confirming a booking.",
      },
    ],
  },
  {
    slug: "table-mountain-cableway-experience",
    name: "Table Mountain Cableway Experience",
    category: "Nature & Sightseeing",
    location: "Table Mountain, Cape Town",
    country: "South Africa",
    image: "/images/activities/table-mountain-cableway.jpg",
    badge: "Cape Town Highlight",
    description:
      "Discover one of Cape Town's most iconic natural landmarks with a return journey on the Table Mountain Aerial Cableway. Travel from the Lower Station to the summit in a rotating cable car offering panoramic views of Cape Town, the Atlantic Ocean, Table Bay, the surrounding mountains, and the Cape Peninsula. At the top, enjoy time to explore designated summit pathways, admire the distinctive sandstone landscape, take photographs, and discover the mountain's unique fynbos vegetation. This flexible sightseeing experience is ideal for couples, families, solo travellers, and visitors looking for memorable views without undertaking a strenuous hike. The cableway operates weather permitting, so travellers should check operating conditions before departure.",
    rating: null,
    reviewCount: 0,
    duration:
      "2–3 hours",
    groupSize:
      "Individual travellers, families, or groups; cable car capacity and departure arrangements are controlled by the operator",
    pickup:
      "No hotel pickup included by default. Guests make their own way to the Lower Cable Station unless private transfers or a guided city tour are booked separately.",
    highlights: [
      "Ride the rotating aerial cable car to the summit of Table Mountain",
      "Enjoy panoramic views of Cape Town, Table Bay, and the Atlantic coastline",
      "Explore designated summit pathways at your own pace",
      "Photograph the city, surrounding peaks, and distinctive mountain scenery",
      "Discover the Cape's unique fynbos vegetation and natural environment",
      "Enjoy a flexible sightseeing experience suitable for a wide range of travellers",
      "Access summit dining facilities when open",
      "Combine the experience with a Cape Town city tour or other local attractions",
    ],
    itinerary: [
      {
        time: "Before departure",
        title: "Arrival at the Lower Cable Station",
        description:
          "Make your way to the Table Mountain Aerial Cableway Lower Station at the confirmed visit time. Present your valid ticket and follow the operator's check-in and boarding instructions. Allow additional time for traffic, parking, and queues during busy periods.",
      },
      {
        time: "Cable car ascent",
        title: "Scenic ride to the summit",
        description:
          "Board the rotating cable car for the ascent to the summit. Enjoy changing views across Cape Town, the coastline, and the surrounding mountain landscape during the approximately five-minute journey.",
      },
      {
        time: "Summit exploration",
        title: "Discover Table Mountain",
        description:
          "Explore designated summit pathways, take photographs, and enjoy the views across the city and ocean. Learn about the mountain's natural environment through available interpretive information. Walking conditions vary across the summit, and some paths are steep or uneven.",
      },
      {
        time: "Optional refreshment break",
        title: "Enjoy the summit facilities",
        description:
          "Visit an available café or refreshment outlet, or enjoy a rest while taking in the scenery. Food, drinks, retail purchases, and any guided interpretation are at the traveller's own expense unless separately arranged.",
      },
      {
        time: "Return journey",
        title: "Descend by cable car",
        description:
          "Return to the Upper Station in time for the last scheduled descent and board the cable car to the Lower Station. The final descent time depends on the official operating schedule and any weather-related changes.",
      },
    ],
    included: [
      "One return standard cable car ticket, if selected and confirmed",
      "Access to the cable car service during operating hours, subject to weather and operational conditions",
      "Independent exploration of accessible designated summit areas",
      "Scenic views and photography opportunities from the cable car and summit",
    ],
    notIncluded: [
      "Hotel pickup and drop-off",
      "Private vehicle or airport transfers",
      "Professional tour guide or guided summit walk",
      "Meals, snacks, and drinks",
      "Fast Track tickets or other premium ticket upgrades",
      "Hiking equipment and specialist outdoor gear",
      "Personal purchases and gratuities",
      "Travel insurance and personal expenses",
      "Other Cape Town attractions or excursions",
      "Any separate Table Mountain National Park conservation fees applicable to other activities or access points",
    ],
    information: [
      "This product is designed as a cableway ticket and independent summit visit. Do not advertise a guided city tour, hiking excursion, or hotel transfer as included unless separately arranged.",
      "The published online return-ticket rates convert to approximately USD 30 per adult and USD 18 per child aged 4–17 using 9 October 2026 reference exchange rates. Ticket-office rates are higher. Verify the current tariff and ticket conditions before publishing prices or taking payment.",
      "Children under four travel free on the cableway under the operator's published ticket conditions. Confirm the child's age and applicable ticket requirements when booking.",
      "The cableway operates weather permitting and may close because of strong winds, poor visibility, or other safety conditions. Check the official operating status on the day of travel.",
      "Online tickets are valid for seven days under the operator's published terms. Review the current ticket conditions, date restrictions, and refund or rebooking procedure before purchasing.",
      "Purchase tickets through the official Table Mountain Aerial Cableway website or its recognised ticketing partners. Do not promise that tickets bought through unrecognised resellers will be accepted.",
      "Operating hours change seasonally and may be affected by weather, maintenance, and operational requirements. Confirm the last ascent and descent times before visiting.",
      "The cable car journey takes approximately five minutes each way. Queuing and summit exploration can increase the total visit time, especially during peak travel periods.",
      "Wear comfortable shoes and bring a light jacket, sun protection, and drinking water. Conditions at the summit can be significantly windier and cooler than in central Cape Town.",
      "Stay on designated paths and follow posted safety instructions. Table Mountain is a natural environment with uneven terrain and rapidly changing weather.",
      "Accessible facilities are available, including lifts at the Lower Station and selected accessible summit routes. Not every summit path is wheelchair-accessible; confirm individual mobility requirements and current assistance arrangements with the operator.",
      "For Shungu Africa's commercial offering, distinguish the official ticket-only rate from any bundled package that includes transport, guiding, or other attractions. Add service fees and transfers transparently rather than implying they are part of the official ticket.",
      "Any selling price charged by Shungu Africa should be calculated from the confirmed supplier or recognised trade rate, applicable taxes or fees, exchange rate, and the company's agreed margin.",
    ],
    meetingPoint: {
      name: "Table Mountain Aerial Cableway Lower Station",
      description:
        "Tafelberg Road, Cape Town, South Africa. Guests should confirm directions, arrival time, parking or shuttle arrangements, and the day's operating status before travelling to the station.",
    },
    pricing: {
      adult: {
        amount: 30,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 18,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Follow the current official ticket terms. The operator publishes weather-related operating restrictions and ticket refund or rebooking arrangements; online tickets are valid for seven days under its published conditions. Confirm the exact terms applying to the ticket purchased. Any separately booked Shungu Africa transfers, guiding services, or package components require their own clearly disclosed cancellation policy.",
    },
    faqs: [
      {
        question: "How long does the Table Mountain Cableway experience take?",
        answer:
          "Allow approximately two to three hours for the return cable car journey, summit exploration, and photographs. Queues and busy periods can extend the visit.",
      },
      {
        question: "What is included in the ticket?",
        answer:
          "A return ticket covers the ascent and descent by cable car, subject to operating conditions. Hotel transfers, a private guide, food, and other Cape Town excursions are not included unless separately booked.",
      },
      {
        question: "How much does the cableway ticket cost?",
        answer:
          "The published online return rates convert to approximately USD 30 for adults and USD 18 for children aged 4–17 using 9 October 2026 reference exchange rates. Verify the official ticket page before quoting customers, as prices can change.",
      },
      {
        question: "What happens if the cableway closes because of weather?",
        answer:
          "The operator may suspend service for safety reasons. Check the official status and follow the current ticket refund or rebooking terms. Do not guarantee that a scheduled departure will operate.",
      },
      {
        question: "Can young children use the cable car?",
        answer:
          "Yes, subject to the operator's conditions. Children aged 4–17 qualify for child tickets, while children under four travel free under the published terms.",
      },
      {
        question: "Is the summit accessible to wheelchair users?",
        answer:
          "Some facilities and summit routes support wheelchair access, but the whole summit is not uniformly accessible. Contact the operator to confirm the route and assistance suited to the visitor's needs.",
      },
      {
        question: "Can this activity be combined with a Cape Town city tour?",
        answer:
          "Yes. Shungu Africa can offer it as a standalone ticket or incorporate it into a wider itinerary with transport and a guide, subject to confirmed ticket availability and weather conditions.",
      },
      {
        question: "Can guests hike down instead of taking the cable car?",
        answer:
          "Hiking is a separate activity requiring suitable fitness, equipment, route planning, and attention to weather and safety. A return cableway ticket does not automatically include a guided hike or replace the need to arrange hiking logistics.",
      },
    ],
  },
  {
    slug: "cape-peninsula-full-day-tour",
    name: "Cape Peninsula Full-Day Tour",
    category: "Sightseeing & Nature",
    location: "Cape Town, Cape Peninsula, Western Cape",
    country: "South Africa",
    image: "/images/activities/cape-peninsula-full-day.jpg",
    badge: "Cape Town Must-Do",
    description:
      "Explore the spectacular Cape Peninsula on a full-day guided journey from Cape Town, combining dramatic coastal scenery, historic seaside towns, iconic viewpoints, and encounters with South Africa's unique wildlife. Travel along the Atlantic Seaboard past Clifton, Camps Bay, and the Twelve Apostles, visit Hout Bay, and enjoy the scenic drive along Chapman's Peak Drive when open. Continue to Cape Point and the Cape of Good Hope within the Table Mountain National Park area, where rugged cliffs, ocean panoramas, and indigenous fynbos create a memorable natural setting. Visit Boulders Beach to observe the African penguin colony from designated viewing areas, and pass through historic Simon's Town on the coastal return journey. This experience is ideal for first-time visitors, couples, families, photographers, and small groups wanting to discover the highlights of Cape Town's southern coastline in one day.",
    rating: null,
    reviewCount: 0,
    duration: "Full day",
    groupSize:
      "Shared small group or private guided tour; maximum group size depends on the selected vehicle and operator",
    pickup:
      "Hotel or accommodation pickup in central Cape Town may be available. Confirm the pickup zone, departure time, and any surcharge for locations outside the standard service area.",
    highlights: [
      "Enjoy panoramic views along Cape Town's Atlantic Seaboard",
      "See Clifton, Camps Bay, and the Twelve Apostles mountain range",
      "Visit Hout Bay harbour, with an optional boat trip to see Cape fur seals",
      "Travel along scenic Chapman's Peak Drive when road conditions permit",
      "Explore Cape Point and the Cape of Good Hope",
      "Enjoy coastal views and walking opportunities around the Cape Point area",
      "Observe African penguins at Boulders Beach from designated viewing areas",
      "Discover the historic naval town of Simon's Town",
      "Capture photographs at scenic coastal viewpoints",
      "Learn about the region's natural environment, maritime history, and local communities from a guide",
    ],
    itinerary: [
      {
        time: "08:00–09:00",
        title: "Pickup and departure from Cape Town",
        description:
          "Meet your guide at the confirmed hotel pickup point or central meeting location. Begin the journey along the Atlantic Seaboard, with scenic views of the coastline, beaches, and the Twelve Apostles. The exact departure time and route depend on the selected operator and traffic conditions.",
      },
      {
        time: "Morning",
        title: "Camps Bay and Hout Bay",
        description:
          "Pause at suitable viewpoints around Camps Bay or Maiden's Cove for photographs. Continue to Hout Bay, a coastal harbour community where guests can explore the waterfront. An optional boat excursion to a nearby seal-viewing area may be available at additional cost and is subject to sea and weather conditions.",
      },
      {
        time: "Late morning",
        title: "Chapman's Peak Drive",
        description:
          "Travel along the spectacular cliffside road between Hout Bay and Noordhoek when it is open. Stop only at designated viewpoints where safe and permitted. If the road closes because of weather, rockfall, maintenance, or other restrictions, the guide will use an alternative route where possible.",
      },
      {
        time: "Midday",
        title: "Cape Point and Cape of Good Hope",
        description:
          "Explore the Cape Point and Cape of Good Hope area within the reserve. Enjoy coastal scenery, indigenous fynbos, and designated viewpoints. Guests can walk to selected viewpoints or use the Flying Dutchman funicular to approach the upper lighthouse area if operating and if the ticket is included or purchased separately.",
      },
      {
        time: "Lunch",
        title: "Lunch break",
        description:
          "Take a break at an available restaurant, café, or approved picnic area. Lunch is at the guest's own expense unless explicitly included in the confirmed tour package. The exact lunch location depends on timing and operating conditions.",
      },
      {
        time: "Afternoon",
        title: "Boulders Beach penguin colony",
        description:
          "Visit the Boulders Beach penguin viewing area and follow the designated boardwalks or visitor paths. Observe African penguins responsibly without approaching, feeding, touching, or disturbing them. Access fees are payable separately unless the final quotation confirms they are included.",
      },
      {
        time: "Afternoon",
        title: "Simon’s Town and False Bay coastal return",
        description:
          "Pass through or stop in historic Simon's Town, subject to the day's schedule. Continue along the False Bay coastline, with possible views of coastal villages and beaches, before returning to Cape Town.",
      },
      {
        time: "17:00–18:00",
        title: "Return to Cape Town",
        description:
          "Arrive back at the agreed drop-off point. The return time is approximate and can vary with traffic, visitor queues, road closures, and the time spent at each attraction.",
      },
    ],
    included: [
      "Full-day guided Cape Peninsula sightseeing excursion",
      "Transport in an air-conditioned vehicle appropriate to the confirmed group size",
      "Professional driver-guide or guide and driver, as specified by the operator",
      "Fuel and standard route costs",
      "Pickup and drop-off within the confirmed service area, if included in the selected product",
      "Scenic stops at accessible public viewpoints along the agreed route",
    ],
    notIncluded: [
      "Cape Point and Cape of Good Hope reserve admission fees unless explicitly included",
      "Boulders Beach penguin colony admission fee unless explicitly included",
      "Flying Dutchman funicular ticket",
      "Hout Bay seal-viewing boat excursion",
      "Lunch, snacks, and drinks",
      "Hotel pickup outside the agreed service area",
      "Private guide or vehicle upgrade unless booked",
      "Tips and gratuities",
      "Travel insurance and personal expenses",
      "Additional attractions not listed in the confirmed itinerary",
    ],
    information: [
      "This catalogue listing is a proposed tour product. Confirm the operator, route, group size, pickup arrangements, inclusions, entrance fees, and current rates before accepting reservations.",
      "The tour generally takes 8–10 hours. Attempting to visit every attraction during peak season may require changes to the route or shorter stops.",
      "Chapman's Peak Drive is subject to road conditions, toll arrangements, maintenance, weather, and closures. An alternative route may be used if the road is unavailable.",
      "The order of stops can change depending on traffic, weather, seasonal opening hours, visitor queues, and the operator's schedule.",
      "Cape Point and the Cape of Good Hope are within a protected natural area. Applicable conservation or admission fees must be clearly identified in the final quotation.",
      "Boulders Beach is a managed African penguin viewing site. Guests must remain on designated paths and follow wildlife-protection instructions. Penguin sightings and proximity vary naturally.",
      "The Flying Dutchman funicular and Hout Bay seal boat are optional unless specifically included. Both may be affected by weather, maintenance, operating hours, or capacity.",
      "Wear comfortable walking shoes and bring a warm layer, sun protection, water, and a camera. Coastal wind and changing weather can make conditions cooler than in central Cape Town.",
      "Some stops involve uneven paths, stairs, slopes, or longer walks. Guests with mobility requirements should discuss the route and access needs with the operator before booking.",
      "Families should supervise children around cliffs, roads, water, wildlife, and viewpoints. Confirm child pricing and any restrictions that apply to optional activities.",
      "Shared tours may make multiple hotel pickups and operate to a fixed schedule. A private tour can provide greater flexibility but usually costs more.",
      "For Shungu Africa packages, clearly distinguish the base tour price from admission fees, optional boat trips, funicular tickets, meals, and additional transport.",
      "The price shown is a draft planning estimate and not a verified supplier rate. Final pricing depends on group size, private or shared arrangements, supplier inclusions, admission fees, and season.",
    ],
    meetingPoint: {
      name: "Confirmed Cape Town hotel pickup or central meeting point",
      description:
        "The precise meeting point depends on the selected tour operator. Confirm the pickup address, reporting time, vehicle details, and return drop-off arrangement before the excursion.",
    },
    pricing: {
      adult: {
        amount: 155,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 120,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy: obtain the selected supplier's written cancellation, amendment, refund, and no-show terms before payment. Weather, road closures, attraction operating hours, sea conditions, or other safety restrictions may affect the itinerary. Optional boat trips and funicular rides may have separate cancellation conditions. Any Shungu Africa transport or package components must have their own clearly disclosed terms.",
    },
    faqs: [
      {
        question: "What places are visited on the Cape Peninsula tour?",
        answer:
          "A typical itinerary includes the Atlantic Seaboard, Camps Bay, Hout Bay, Chapman's Peak Drive when open, Cape Point, the Cape of Good Hope, Boulders Beach, and Simon's Town. The precise route and stops depend on the operator and conditions.",
      },
      {
        question: "How long does the tour take?",
        answer:
          "Allow approximately 8–10 hours, including driving, sightseeing, and breaks. Traffic and visitor queues can extend the day.",
      },
      {
        question: "Are entrance fees included?",
        answer:
          "Not automatically. Confirm whether Cape Point and Cape of Good Hope admission, Boulders Beach access, and any funicular tickets are included in the final price.",
      },
      {
        question: "Can I take a boat trip to see seals at Hout Bay?",
        answer:
          "A seal-viewing boat trip may be available as an optional extra, subject to operator schedules and sea conditions. It should be listed separately in the quotation if it is not included.",
      },
      {
        question: "Will the tour always travel along Chapman's Peak Drive?",
        answer:
          "No. The road may close because of weather, rockfall, maintenance, or other restrictions. The operator may use an alternative route when necessary.",
      },
      {
        question: "Can I ride the funicular at Cape Point?",
        answer:
          "The Flying Dutchman funicular may be available to help visitors reach the upper lighthouse area. Confirm operating status and whether the ticket is included; walking is another option for visitors who are comfortable with the route.",
      },
      {
        question: "Is the tour suitable for children and older travellers?",
        answer:
          "It can suit many ages, but the day involves substantial driving and walking at some stops. Review mobility needs, child supervision requirements, and optional activity restrictions before booking.",
      },
      {
        question: "Is this a private tour or a shared tour?",
        answer:
          "Either format may be available. Shared tours typically follow a set schedule, while private tours can offer more flexibility. Confirm the vehicle type, maximum group size, and price basis before booking.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring comfortable walking shoes, a warm layer, sun protection, water, and a camera. Follow your guide's instructions around cliffs, roads, the coast, and wildlife.",
      },
      {
        question: "How much does the Cape Peninsula Full-Day Tour cost?",
        answer:
          "The listed adult and child rates are draft planning estimates only. Obtain a current supplier quotation and verify all admission fees and optional extras before publishing final prices or confirming a booking.",
      },
    ],
  },
  {
    slug: "robben-island-guided-tour",
    name: "Robben Island Guided Heritage Tour",
    category: "History & Heritage",
    location: "Robben Island and Nelson Mandela Gateway, Cape Town",
    country: "South Africa",
    image: "/images/optimized/activities/robben-island-guided-heritage-tour.webp",
    badge: "UNESCO World Heritage Site",
    description:
      "Discover one of South Africa's most significant historical landmarks on a guided excursion to Robben Island, the former prison where Nelson Mandela and many other anti-apartheid activists were incarcerated. Depart by ferry from the Nelson Mandela Gateway at Cape Town's V&A Waterfront and cross Table Bay to the island, where a guided tour introduces visitors to its complex history of colonial occupation, banishment, imprisonment, political resistance, and the struggle for democracy. Explore key heritage locations, including the former maximum-security prison, the limestone quarry where prisoners performed forced labour, and other historically important sites. The experience combines a scenic ferry journey with guided interpretation of the people and events that shaped modern South Africa. It is an essential excursion for history enthusiasts, students, families, and travellers seeking a deeper understanding of the country's past.",
    rating: null,
    reviewCount: 0,
    duration: "3–4 hours",
    groupSize:
      "Scheduled shared tour; ferry and island transport operate according to the museum's arrangements",
    pickup:
      "Guests make their own way to the Nelson Mandela Gateway at the V&A Waterfront unless a separate Cape Town hotel transfer is arranged.",
    highlights: [
      "Take a return ferry journey across Table Bay to Robben Island",
      "Discover the island's history as a place of banishment and imprisonment",
      "Visit the former maximum-security prison where Nelson Mandela was incarcerated",
      "Learn about anti-apartheid activists and South Africa's struggle for democracy",
      "Explore the historic limestone quarry associated with prisoner forced labour",
      "See other significant heritage locations around the island on the designated tour route",
      "Hear historical interpretation from the museum's appointed guides",
      "Enjoy views of Table Mountain and Cape Town from the ferry when conditions permit",
      "Experience a UNESCO World Heritage Site of international historical significance",
    ],
    itinerary: [
      {
        time: "At least 30 minutes before departure",
        title: "Arrival at Nelson Mandela Gateway",
        description:
          "Arrive at the designated Robben Island Museum departure terminal at the V&A Waterfront. Present valid tickets and identification as required, and complete the boarding process. Late arrival may result in forfeiting the scheduled departure.",
      },
      {
        time: "Scheduled departure",
        title: "Ferry crossing to Robben Island",
        description:
          "Board the museum's scheduled ferry for the crossing of Table Bay. The crossing typically takes approximately 30–60 minutes each way, depending on the vessel and sea conditions. Enjoy views of the Cape Town coastline when weather and visibility permit.",
      },
      {
        time: "On arrival",
        title: "Island history and heritage tour",
        description:
          "Disembark at the designated harbour and follow the museum's arrangements for transport and guided visits around the island. Learn about the island's changing roles, including its history of banishment, institutional confinement, and military use.",
      },
      {
        time: "During the island visit",
        title: "Former prison and historical landmarks",
        description:
          "Visit key heritage sites on the official tour route, which may include the former maximum-security prison, Nelson Mandela's cell, the limestone quarry, Robert Sobukwe's house, and other historically significant locations. The precise route and access depend on museum operations.",
      },
      {
        time: "Return departure",
        title: "Ferry journey back to Cape Town",
        description:
          "Return to the designated harbour and board the scheduled ferry back to the Nelson Mandela Gateway. Ferry departure times and total duration can change because of sea conditions or operational requirements.",
      },
      {
        time: "Tour conclusion",
        title: "Arrival at the V&A Waterfront",
        description:
          "Disembark at the Nelson Mandela Gateway and continue with your own arrangements or a separately booked transfer. Allow additional flexibility for onward activities because the return time is not guaranteed.",
      },
    ],
    included: [
      "Return scheduled ferry transport between Cape Town and Robben Island",
      "Standard Robben Island Museum tour",
      "Guided interpretation at designated historical sites",
      "Island transport provided as part of the standard museum tour",
      "Access to the former prison and other sites included in the museum's operating itinerary",
    ],
    notIncluded: [
      "Hotel pickup and drop-off in Cape Town",
      "Private vehicle and personal tour escort from the hotel",
      "Meals, snacks, and drinks",
      "Personal purchases and souvenirs",
      "Tips and gratuities",
      "Travel insurance and personal expenses",
      "Private, VIP, protocol, or specialised museum tours",
      "Any additional Cape Town sightseeing activities not listed in the confirmed booking",
    ],
    information: [
      "This activity is based on the standard Robben Island Museum tour, operated by the museum through scheduled ferry departures. Shungu Africa should confirm the official ticket and departure before issuing a booking confirmation.",
      "The standard tour takes approximately 3.5–4 hours, including the return ferry journey. The actual duration depends on the vessel, sea conditions, and museum operations.",
      "Scheduled departures are published for 09:00, 11:00, 13:00, and 15:00, subject to the museum's current timetable, demand, and weather. Not every departure should be assumed available on every date.",
      "The official museum's international visitor rates convert to approximately USD 36.11 per adult and USD 18.66 per child under 18 for the standard tour using 9 October 2026 reference exchange rates. South African resident rates differ. Verify the current official tariff and applicable visitor category before quoting customers.",
      "Advance booking is strongly recommended because ferry seats are limited and tours can sell out. Tickets are date- and departure-specific.",
      "Visitors should arrive at least 30 minutes before the scheduled ferry departure. Museum guidance warns that late arrival may result in the loss of the booking.",
      "Valid identification is required and passenger details must match the ticket information. Confirm the current documentation requirements during booking.",
      "Ferry services are subject to sea conditions and operational decisions. If the museum cancels a voyage, follow its published refund or rebooking procedures; do not promise a particular remedy beyond the official terms.",
      "The standard tour is a shared group experience and is not automatically a private tour. Private, VIP, and specialised experiences require separate arrangements and pricing.",
      "The island includes uneven surfaces, walking, steps, and boarding procedures. Visitors with mobility limitations or support needs should contact the museum before booking to confirm suitable arrangements.",
      "The walking tour is a distinct, longer option advertised by the museum for physically fit visitors. Do not confuse it with the standard ferry-and-bus heritage tour.",
      "Wear comfortable shoes and clothing suitable for walking and changing coastal weather. Bring a hat, sun protection, and any personal medication needed during the excursion.",
      "Sea conditions may cause discomfort for passengers prone to motion sickness. Seek appropriate advice before travel and follow relevant medical guidance.",
      "Respect the historical significance of the site, follow guide instructions, and comply with the museum's rules for photography and visitor behaviour. Commercial photography and filming require prior permission.",
      "The official museum ticket price is not the same as a Shungu Africa packaged selling price. Add any agreed service fee, transfer, or guide service transparently and do not imply that these are included in the museum ticket.",
      "Prices shown below reflect the published international visitor ticket rates found during catalogue preparation. Reconfirm them directly with the museum before sale.",
    ],
    meetingPoint: {
      name: "Nelson Mandela Gateway to Robben Island",
      description:
        "Located at the V&A Waterfront in Cape Town, South Africa. Guests should check the current terminal directions, arrive at least 30 minutes before departure, and bring the identification and ticket details required by the museum.",
    },
    pricing: {
      adult: {
        amount: 40,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 20,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "The museum's official ticket terms govern the ferry and tour booking. Scheduled voyages may be cancelled or changed because of weather or operational requirements. Refund eligibility, amendments, and rescheduling are subject to the museum's current terms and procedures. Confirm the applicable policy before payment. Any separate Shungu Africa transfers or packaged services require their own disclosed cancellation terms.",
    },
    faqs: [
      {
        question: "What is included in the Robben Island Guided Heritage Tour?",
        answer:
          "The standard museum tour includes return ferry transport, the organised island visit, and guided interpretation at designated historical sites. Cape Town hotel transfers, meals, and additional sightseeing are not included unless separately arranged.",
      },
      {
        question: "How long does the tour take?",
        answer:
          "Allow approximately 3.5–4 hours for the standard tour, including both ferry journeys. Timing varies with the vessel, sea conditions, and museum operations.",
      },
      {
        question: "Where does the ferry depart from?",
        answer:
          "The ferry departs from the Nelson Mandela Gateway at the V&A Waterfront in Cape Town. Guests should arrive at least 30 minutes before the scheduled departure.",
      },
      {
        question: "How much does the tour cost for international visitors?",
        answer:
          "The museum's published standard ticket rates convert to approximately USD 40 per international adult and USD 20 per child under 18 using 9 October 2026 reference exchange rates. Confirm the current rate, visitor category, and departure availability with the official museum before booking.",
      },
      {
        question: "Will I visit Nelson Mandela's prison cell?",
        answer:
          "The standard museum itinerary culminates in a visit to Nelson Mandela's cell, subject to the museum's operating arrangements and site access on the day.",
      },
      {
        question: "Are hotel transfers included?",
        answer:
          "No, not by default. Shungu Africa can arrange a separate transfer from selected Cape Town hotels if confirmed in the final quotation.",
      },
      {
        question: "Can the ferry be cancelled because of weather?",
        answer:
          "Yes. Ferry departures depend on marine conditions and operational safety. Check the museum's current departure status and follow its official refund or rescheduling policy if a voyage is cancelled.",
      },
      {
        question: "Is the tour accessible to visitors with limited mobility?",
        answer:
          "Some parts of the visit involve walking, steps, uneven surfaces, and ferry boarding. Contact the museum before booking to discuss accessibility and assistance requirements.",
      },
      {
        question: "Is a private guided tour available?",
        answer:
          "The museum offers specialised tour formats, including private and VIP arrangements, subject to approval and availability. These are different products and require separate pricing and confirmation.",
      },
      {
        question: "Can visitors take photographs?",
        answer:
          "Personal photography is generally permitted under museum rules, but commercial photography and filming require prior permission. Drones and tripods are restricted under the museum's published guidance.",
      },
    ],
  },
  {
    slug: "cape-town-city-and-bo-kaap-tour",
    name: "Cape Town City & Bo-Kaap Cultural Tour",
    category: "City Sightseeing & Culture",
    location: "Cape Town City Centre and Bo-Kaap, Western Cape",
    country: "South Africa",
    image: "/images/activities/cape-town-city-and-bo-kaap-tour.webp",
    badge: "City & Cultural Heritage",
    description:
      "Discover Cape Town's historic centre and the vibrant Bo-Kaap neighbourhood on a guided city and cultural tour. Explore the city's architectural landmarks, public squares, heritage buildings, and stories of colonial settlement, slavery, resistance, and modern South African identity. Continue into Bo-Kaap, a historic neighbourhood known for its brightly painted houses, cobbled streets, Cape Malay heritage, and predominantly Muslim community. Learn about the area's cultural traditions, local cuisine, and the history of its residents while enjoying opportunities for photography and independent exploration. This experience is ideal for first-time visitors, families, small groups, and travellers seeking an engaging introduction to Cape Town's history and contemporary culture.",
    rating: null,
    reviewCount: 0,
    duration: "3–4 hours",
    groupSize:
      "Shared small group or private guided tour; maximum group size depends on the selected operator",
    pickup:
      "Central Cape Town hotel pickup may be available with selected operators. Walking-tour departures generally meet at an agreed central location. Confirm the exact arrangement before booking.",
    highlights: [
      "Explore historic Cape Town with a knowledgeable local guide",
      "Walk through the colourful streets of Bo-Kaap",
      "Learn about Cape Malay heritage and the area's Muslim community",
      "Discover the history of slavery, colonial settlement, and cultural identity",
      "See historic architecture and notable city-centre landmarks",
      "Learn about the Auwal Mosque and its significance, subject to access arrangements",
      "Visit Greenmarket Square or the Company's Garden when included in the selected route",
      "Discover local spice shops, traditional food, and Cape Malay culinary traditions",
      "Photograph Bo-Kaap's colourful houses and cobbled streets respectfully",
      "Enjoy a flexible introduction to Cape Town's history and everyday culture",
    ],
    itinerary: [
      {
        time: "09:00",
        title: "Meet your guide in central Cape Town",
        description:
          "Meet at the confirmed departure point or arrange pickup from an eligible hotel. Receive an introduction to Cape Town's history, geography, and cultural diversity before beginning the guided experience.",
      },
      {
        time: "09:15",
        title: "Historic city-centre orientation",
        description:
          "Explore selected streets, heritage buildings, and public spaces in the central city. Depending on the confirmed route, stops may include Greenmarket Square, the Company's Garden, St George's Cathedral exterior, or other historic landmarks. Access to interiors is not guaranteed.",
      },
      {
        time: "10:00",
        title: "Cape Town's layered history",
        description:
          "Learn about the city's development, colonial rule, slavery, migration, and the struggle against apartheid through stories connected to the sites visited. The exact landmarks and walking route depend on the guide and selected tour format.",
      },
      {
        time: "10:30",
        title: "Guided Bo-Kaap neighbourhood walk",
        description:
          "Continue into Bo-Kaap to explore its colourful homes, steep cobbled streets, historic setting, and Cape Malay cultural heritage. Learn about the community's history and the significance of the neighbourhood's architecture and traditions.",
      },
      {
        time: "11:00",
        title: "Cultural landmarks and local flavours",
        description:
          "Discover local spice shops and traditional food businesses, with time for questions and photographs. A visit to the Bo-Kaap Museum, an Auwal Mosque interior visit, or a Cape Malay tasting is included only if specifically arranged and available.",
      },
      {
        time: "11:45–12:00",
        title: "Tour conclusion",
        description:
          "Conclude at the agreed central location or return to the starting point if included. Your guide can suggest nearby cafés, museums, and other attractions for independent exploration after the tour.",
      },
    ],
    included: [
      "Guided city and Bo-Kaap sightseeing experience",
      "Local guide or driver-guide, according to the selected tour format",
      "Walking exploration of publicly accessible streets and heritage areas",
      "Historical and cultural interpretation of the places visited",
      "Standard city transfers only if explicitly included in the confirmed booking",
    ],
    notIncluded: [
      "Hotel pickup and drop-off unless specified",
      "Private vehicle and driver for a walking-only tour",
      "Bo-Kaap Museum admission unless explicitly included",
      "Meals, Cape Malay tastings, and drinks",
      "Specialist cooking classes or private home visits",
      "Admission to other museums or heritage buildings",
      "Interior visits to mosques or religious buildings unless expressly permitted and arranged",
      "Tips and gratuities",
      "Personal purchases and souvenirs",
      "Travel insurance and personal expenses",
      "Other Cape Town attractions or excursions not listed in the confirmed itinerary",
    ],
    information: [
      "This is a proposed Shungu Africa catalogue product. Confirm the tour operator, guide, route, departure point, group size, transport, inclusions, and supplier rates before accepting bookings.",
      "The base experience is designed as a 3–4-hour guided city and neighbourhood tour. It does not automatically include Table Mountain, Robben Island, the Castle of Good Hope interior, or other separately ticketed attractions.",
      "Bo-Kaap is a living residential neighbourhood with deep cultural and religious significance, not simply a photographic attraction. Guides and guests should respect residents, private property, and community activities.",
      "Ask permission before photographing residents, shopkeepers, or other identifiable individuals. Do not block doorways, enter private property, or disrupt daily life to obtain photographs.",
      "The neighbourhood includes steep streets, cobblestones, slopes, and uneven pavements. Comfortable walking shoes are recommended, and accessibility needs should be discussed with the operator before booking.",
      "Bo-Kaap is home to a predominantly Muslim community. Visitors should dress respectfully, particularly near religious sites, and follow local guidance concerning prayer times and access to mosques.",
      "The Auwal Mosque is an important historical and religious landmark. An exterior stop does not imply permission to enter; any interior visit must be arranged appropriately and is subject to local rules and religious activities.",
      "The Bo-Kaap Museum is located at 71 Wale Street. Opening days, admission prices, and access should be verified before including a museum visit in the itinerary.",
      "Cape Malay food tastings, spice demonstrations, cooking classes, and private community-hosted experiences are optional enhancements and must be booked and priced separately unless explicitly included.",
      "A walking tour and a vehicle-based city tour are different products. Confirm whether the selected supplier provides transport between the city centre and Bo-Kaap or conducts the entire experience on foot.",
      "Morning departures may provide comfortable walking conditions and useful photography light, but exact departure times depend on the operator and booking arrangements.",
      "Some landmarks may be viewed only from outside due to opening hours, religious services, security, or access restrictions. The guide may adjust the route as necessary.",
      "For private groups, corporate guests, and educational visits, request a specialist guide and a route suited to the group's interests, walking pace, and available time.",
      "The listed prices are draft planning estimates, not verified supplier rates. Confirm whether the price is per person or per private group, and whether transport, museum admission, tastings, and guide fees are included.",
    ],
    meetingPoint: {
      name: "Confirmed central Cape Town meeting point",
      description:
        "The meeting point depends on the chosen operator. Walking tours may depart from a central-city office or designated landmark, while private tours may offer hotel pickup. Confirm the exact address, departure time, and transport arrangements before booking.",
    },
    pricing: {
      adult: {
        amount: 53,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 32,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy: obtain the selected supplier's written cancellation, amendment, refund, and no-show terms before payment. Walking tours may be adjusted due to weather, public events, access restrictions, or operational requirements. Museum visits, food tastings, private transfers, and other add-ons may have separate conditions. Any Shungu Africa package components must have their own clearly disclosed cancellation terms.",
    },
    faqs: [
      {
        question: "What is included in the Cape Town City and Bo-Kaap Tour?",
        answer:
          "The base product includes guided sightseeing and cultural interpretation in central Cape Town and Bo-Kaap. Transport, museum tickets, food tastings, and access to building interiors depend on the selected package.",
      },
      {
        question: "How long does the tour take?",
        answer:
          "Allow approximately three to four hours for a guided introduction to the city centre and Bo-Kaap. A longer itinerary can be arranged if additional museums or activities are included.",
      },
      {
        question: "What is Bo-Kaap famous for?",
        answer:
          "Bo-Kaap is known for its brightly painted houses, cobbled streets, Cape Malay heritage, historic mosques, and longstanding Muslim community. Its history is closely connected to slavery, migration, and the development of Cape Town.",
      },
      {
        question: "Does the tour include the Bo-Kaap Museum?",
        answer:
          "Not automatically. The museum can be added subject to opening hours, admission fees, and the tour schedule. Confirm the inclusion in the final booking.",
      },
      {
        question: "Can we visit the Auwal Mosque?",
        answer:
          "The mosque may be included as an exterior heritage stop. Interior access depends on permission, religious activities, and local visitor guidance; it should never be promised without confirmation.",
      },
      {
        question: "Will we taste Cape Malay food?",
        answer:
          "Food tastings are an optional enhancement unless stated in the confirmed itinerary. Traditional snacks, spice experiences, or a cooking demonstration can be arranged subject to supplier availability.",
      },
      {
        question: "Is this a walking tour or a vehicle tour?",
        answer:
          "Either format may be available. A walking tour focuses on the central streets and Bo-Kaap, while a vehicle-based tour can connect more distant city landmarks. Confirm the format and transport inclusions before booking.",
      },
      {
        question: "Is the tour suitable for children and older travellers?",
        answer:
          "It can suit many ages, but steep streets, cobblestones, uneven pavements, and walking duration may be challenging for some visitors. Discuss mobility needs and any child-specific requirements with the operator.",
      },
      {
        question: "Can guests take photographs in Bo-Kaap?",
        answer:
          "Yes, in public areas where permitted. Visitors should respect residents' privacy, ask permission before photographing individuals, and avoid entering private property or obstructing doorways.",
      },
      {
        question: "How much does the tour cost?",
        answer:
          "The listed adult and child rates are unverified planning estimates. Obtain a current supplier quotation and confirm transport, guide fees, museum admission, and any food experiences before publishing final prices.",
      },
    ],
  },
  {
    slug: "cape-winelands-wine-tasting-tour",
    name: "Cape Winelands Wine Tasting Tour",
    category: "Wine & Culinary Experiences",
    location: "Cape Town, Stellenbosch, Franschhoek and the Cape Winelands",
    country: "South Africa",
    image: "/images/activities/cape-winelands-wine-tasting-tour.webp",
    badge: "Full-Day Experience",
    description:
      "Discover the scenic Cape Winelands on a guided day trip through the celebrated wine regions of Stellenbosch and Franschhoek, with the option to include Paarl. Travel through vineyard-covered valleys, mountain landscapes and historic wine towns while sampling a selection of regional wines at carefully chosen estates. Depending on the confirmed route and tasting package, experiences may include cellar tastings, cheese or chocolate pairings, a guided town walk and time for lunch at a vineyard restaurant. This experience is suitable for couples, friends, small groups and wine enthusiasts seeking an introduction to South African wine culture. Estate visits, tasting menus and pairings are subject to availability and must be confirmed before the tour.",
    rating: null,
    reviewCount: 0,
    duration: "8–9 hours",
    groupSize:
      "Private tour or small group; minimum group size for shared departures depends on the operator",
    pickup:
      "Hotel or accommodation pickup in Cape Town or Stellenbosch, subject to the selected supplier and confirmed service area",
    highlights: [
      "Explore the renowned Stellenbosch and Franschhoek wine regions",
      "Visit selected wine estates for guided tastings",
      "Learn about South African grape varieties, winemaking and regional wine styles",
      "Enjoy vineyard and mountain scenery along the Cape Winelands routes",
      "Optional cheese, chocolate or other food-and-wine pairings",
      "Time to explore a historic Winelands town",
      "Optional vineyard restaurant lunch",
      "Relax with a designated driver-guide rather than driving between tastings",
    ],
    itinerary: [
      {
        time: "08:00–09:00",
        title: "Pickup and departure",
        description:
          "Meet your guide at the confirmed pickup point and travel towards the Cape Winelands. The departure time and transfer duration depend on your accommodation and the selected route.",
      },
      {
        time: "09:30–10:30",
        title: "First wine estate",
        description:
          "Begin with a guided tasting at a selected estate. Learn about the wines being poured, the vineyard environment and the estate's approach to winemaking. The specific estate and tasting flight are subject to confirmation.",
      },
      {
        time: "11:00–12:00",
        title: "Second estate or wine-pairing experience",
        description:
          "Continue to another participating estate for a further tasting. A cheese, chocolate or other pairing may be arranged if included in the confirmed package.",
      },
      {
        time: "12:30–14:00",
        title: "Lunch in the Winelands",
        description:
          "Enjoy free time or a pre-booked lunch at a vineyard restaurant. Unless expressly included in the confirmed rate, food and drinks are at the guest's own expense.",
      },
      {
        time: "14:00–15:30",
        title: "Third estate or historic town visit",
        description:
          "Visit a third wine estate for another tasting, or spend time exploring Stellenbosch or Franschhoek, depending on the agreed itinerary, opening times and booking availability.",
      },
      {
        time: "15:30–17:30",
        title: "Return transfer",
        description:
          "Travel back to the agreed drop-off point. Arrival time varies with the route, traffic, tasting schedule and any additional stops.",
      },
    ],
    included: [
      "Guided tour with a professional driver-guide, subject to supplier confirmation",
      "Transport for the confirmed itinerary",
      "Pickup and drop-off within the agreed service area",
      "Wine-tasting fees only where explicitly listed in the confirmed booking",
      "Pre-arranged estate visits included in the final itinerary",
    ],
    notIncluded: [
      "Lunch, unless expressly included in the selected package",
      "Additional food, beverages and wine purchases",
      "Premium tastings, cellar tours or pairings not specified in the booking",
      "Gratuities",
      "Personal expenses",
      "Transfers outside the agreed pickup and drop-off area",
      "Any optional activities or estate visits not listed in the confirmed itinerary",
    ],
    information: [
      "This is a draft catalogue product. Confirm the supplier, operating schedule, estate visits, tasting inclusions and final selling price before accepting payment.",
      "Wine estates and tasting menus may change according to opening days, seasonal schedules, private events and availability.",
      "Advance reservations are recommended, particularly for popular estates, restaurant lunches and peak travel periods.",
      "Guests must comply with the minimum legal drinking age and the identification requirements applicable at each venue.",
      "Guests who do not drink alcohol may be able to join the tour, but non-alcoholic alternatives must be confirmed with each estate.",
      "The driver-guide should remain the designated driver throughout the tour. Guests must not drive after drinking.",
      "Inform the operator of dietary requirements, mobility needs and any accessibility considerations before booking.",
      "Wear comfortable clothing and walking shoes; bring sun protection and a light layer for changing weather.",
      "Allow flexibility in the itinerary for traffic, tasting durations and restaurant service.",
      "Child participation and child pricing depend on the supplier's policy. Wine tastings are for eligible adults only.",
      "Private and shared tours may have different departure times, minimum group sizes, estate selections and cancellation terms.",
    ],
    meetingPoint: {
      name: "Confirmed accommodation pickup point",
      description:
        "Pickup is arranged at the guest's accommodation in Cape Town or Stellenbosch only where supported by the selected supplier. For other locations, the operator will confirm a meeting point and any additional transfer charges before booking.",
    },
    pricing: {
      adult: {
        amount: 137,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 0,
        currency: "USD",
          label:
            "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Supplier-specific policy to be confirmed before booking. Communicate the applicable cancellation deadlines, refund conditions, minimum group requirements, no-show rules and any estate or tasting fees that are non-refundable before taking payment.",
    },
    faqs: [
      {
        question: "Which wine regions does the tour visit?",
        answer:
          "The itinerary can feature Stellenbosch and Franschhoek, with Paarl as an optional addition. The exact regions and estates depend on the selected route and confirmed bookings.",
      },
      {
        question: "How many wine estates will we visit?",
        answer:
          "A typical full-day itinerary allows for approximately three estate visits, sometimes combined with a town stop. The actual number depends on travel time, tasting duration and the package booked.",
      },
      {
        question: "Are wine tastings included in the price?",
        answer:
          "Only when the confirmed package explicitly includes them. Check the final itinerary and supplier voucher for the number of tastings, pairings and any premium tasting supplements.",
      },
      {
        question: "Is lunch included?",
        answer:
          "Lunch is not included by default. A restaurant reservation can be arranged where available, with the cost either paid directly by guests or included in a separately confirmed package.",
      },
      {
        question: "Can you pick us up from our hotel in Cape Town?",
        answer:
          "Hotel pickup may be available in Cape Town and Stellenbosch, depending on the supplier and service area. The pickup time, address and any surcharge must be confirmed before travel.",
      },
      {
        question: "Can non-drinkers or families join?",
        answer:
          "Non-drinkers may be able to enjoy the scenery, food and estate visits, but non-alcoholic options and child participation must be checked with the supplier in advance.",
      },
      {
        question: "Can the tour be customised?",
        answer:
          "Private tours may be tailored to preferred wine styles, estates, food pairings or time in Stellenbosch and Franschhoek. Customisation can affect the price and is subject to estate availability.",
      },
      {
        question: "What should we bring?",
        answer:
          "Bring a valid form of identification if required, comfortable walking shoes, sun protection and a light layer. Allow extra spending money for lunch, additional tastings and wine purchases.",
      },
    ],
  },
  {
    slug: "kirstenbosch-botanical-garden-tour",
    name: "Kirstenbosch Botanical Garden Tour",
    category: "Nature & Botanical Experiences",
    location: "Kirstenbosch National Botanical Garden, Cape Town",
    country: "South Africa",
    image: "/images/activities/kirstenbosch-botanical-garden-tour.jpg",
    badge: "Nature Experience",
    description:
      "Explore Kirstenbosch National Botanical Garden on the eastern slopes of Table Mountain, one of Cape Town's most celebrated natural attractions. Discover South Africa's remarkable indigenous plant diversity, including fynbos, proteas, cycads and other plants adapted to the Cape's unique environment. Wander through landscaped gardens, shaded pathways, open lawns and seasonal displays while enjoying views of the surrounding mountains. Depending on the selected option, the experience can include a guided botanical walk, time at the iconic Boomslang Tree Canopy Walkway, a visit to the conservatory, or a relaxed stop at a garden café. Choose a self-guided visit or arrange a private guide for a more in-depth introduction to the garden's plant life, conservation work and natural heritage.",
    rating: null,
    reviewCount: 0,
    duration: "2–4 hours",
    groupSize: "Private tour or small group; subject to supplier arrangements",
    pickup:
      "Hotel pickup in Cape Town may be arranged at an additional cost; alternatively, meet at Kirstenbosch National Botanical Garden, Gate 1",
    highlights: [
      "Explore one of Cape Town's most celebrated botanical attractions",
      "Discover indigenous Cape flora and the distinctive fynbos biome",
      "Enjoy views of Table Mountain and the surrounding natural landscape",
      "Walk through landscaped gardens, seasonal flower displays and shaded paths",
      "Visit the Boomslang Tree Canopy Walkway when accessible",
      "Explore the conservatory and learn about plants from different climate zones",
      "Learn about South African biodiversity and botanical conservation",
      "Enjoy optional refreshments or lunch at a garden café",
    ],
    itinerary: [
      {
        time: "09:00–09:30",
        title: "Arrival and garden entrance",
        description:
          "Meet your guide or arrive at the confirmed meeting point. Complete entry arrangements and receive an overview of the garden, suggested walking route and key botanical highlights.",
      },
      {
        time: "09:30–10:15",
        title: "Indigenous gardens and fynbos",
        description:
          "Explore selected garden sections featuring indigenous plants, seasonal flowers and examples of the Cape's distinctive vegetation. A private guide can explain plant adaptations, biodiversity and conservation.",
      },
      {
        time: "10:15–11:00",
        title: "Boomslang Tree Canopy Walkway",
        description:
          "Visit the curved elevated walkway through the tree canopy, subject to access and operating conditions. Enjoy views across the garden and surrounding landscape. Allow time for photographs and a relaxed walk.",
      },
      {
        time: "11:00–11:45",
        title: "Conservatory and themed garden areas",
        description:
          "Explore the conservatory and selected themed garden areas at a comfortable pace. The exact route depends on guest interests, walking ability, weather and the time available.",
      },
      {
        time: "11:45–12:30",
        title: "Free time and refreshments",
        description:
          "Enjoy time for photographs, browsing the garden shop or purchasing refreshments at a café. Food, drinks and shopping are at guests' own expense unless otherwise agreed.",
      },
      {
        time: "12:30–13:00",
        title: "Tour conclusion and departure",
        description:
          "Return to the agreed meeting point or transfer vehicle. Guests may remain in the garden independently if opening hours and ticket conditions permit.",
      },
    ],
    included: [
      "Pre-arranged tour coordination",
      "Guided garden walk where a guide is included in the confirmed booking",
      "Garden admission only when explicitly included in the selected package",
      "Private transfers only when confirmed in the booking",
      "Time to explore selected garden highlights",
    ],
    notIncluded: [
      "Garden admission unless explicitly included",
      "Private botanical guide fees unless specified",
      "Hotel transfers unless specified",
      "Meals, refreshments and personal purchases",
      "Tips and gratuities",
      "Special events or separately ticketed experiences",
      "Any additional activities not listed in the confirmed itinerary",
    ],
    information: [
      "This is a draft Shungu Africa catalogue product. Confirm the operating arrangement, guide availability, admission category and final selling price before accepting bookings.",
      "Kirstenbosch is managed by the South African National Biodiversity Institute (SANBI). Published 2026–2027 adult entry rates vary by visitor category and proof of residency; check the official tariff before quoting. Children aged 6–17 and children under 6 have separate published rates.",
      "The garden's published opening hours are generally 08:00–19:00 from September to March and 08:00–18:00 from April to August. Confirm the latest hours before travel.",
      "Free volunteer-led garden walks are generally offered on weekdays at 10:00 and 11:00, weather permitting, subject to capacity and schedule exceptions. They last approximately 90 minutes, and admission fees still apply. These walks do not accommodate tour groups, so Shungu Africa should arrange a separate guide for a commercial group.",
      "The Boomslang Tree Canopy Walkway and individual garden sections may be affected by maintenance, weather or access restrictions.",
      "The garden has uneven paths, slopes and steps. Not all areas are wheelchair accessible; guests with mobility needs should select an appropriate route in advance.",
      "Wear comfortable walking shoes and bring sun protection, drinking water and a light layer for changing weather.",
      "Spring and early summer can offer rewarding seasonal floral displays, but flowering varies by weather and plant species.",
      "Guests should remain on designated paths, avoid picking plants and follow garden conservation rules.",
      "Admission and guided-tour arrangements should be confirmed separately where necessary. Do not promise a free public walk as the private guiding service.",
      "Allow extra time for traffic between central Cape Town and Kirstenbosch, especially during peak visitor periods or events.",
    ],
    meetingPoint: {
      name: "Kirstenbosch National Botanical Garden, Visitors' Centre, Gate 1",
      description:
        "The standard meeting point for a self-arranged garden visit or a pre-booked guide is the Visitors' Centre at Gate 1, Rhodes Drive, Newlands, Cape Town. Confirm the precise meeting instructions with the guide before the tour. Hotel pickup is available only if separately arranged.",
    },
    pricing: {
      adult: {
        amount: 59,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 28,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Supplier-specific cancellation policy to be confirmed before booking. Clearly communicate guide cancellation deadlines, any non-refundable admission or transfer costs, weather-related changes and no-show conditions before taking payment.",
    },
    faqs: [
      {
        question: "How long should I spend at Kirstenbosch?",
        answer:
          "Allow approximately two hours for a highlights visit and three to four hours for a more relaxed guided experience with additional garden areas, the canopy walkway and refreshments.",
      },
      {
        question: "Is the garden entrance fee included?",
        answer:
          "Not automatically. The final Shungu Africa offer should clearly state whether admission is included and which visitor tariff applies. Current fees vary by visitor category and eligibility for concessions.",
      },
      {
        question: "Can I join a guided tour at the garden?",
        answer:
          "SANBI generally offers free volunteer-led walks on weekdays at 10:00 and 11:00, subject to weather, capacity and schedule exceptions. These public walks are not suitable for commercial tour groups, so a separate guide should be arranged for group bookings.",
      },
      {
        question: "Is the Boomslang Tree Canopy Walkway included?",
        answer:
          "The walkway can be included as a stop when accessible. Confirm current access conditions and any relevant restrictions before promising this feature.",
      },
      {
        question: "Is Kirstenbosch suitable for children?",
        answer:
          "Yes, it can be an enjoyable family outing. Choose a manageable route, supervise children around steps and elevated areas, and confirm the applicable child admission rate.",
      },
      {
        question: "Is the garden wheelchair accessible?",
        answer:
          "Some visitor facilities and garden sections are accessible, but steep slopes, steps and uneven paths limit access to other areas. Request an appropriate route in advance.",
      },
      {
        question: "Can hotel transfers be arranged?",
        answer:
          "Yes, subject to supplier availability and the pickup location. Transfers should be quoted separately or clearly included in the confirmed package.",
      },
      {
        question: "What is the best time of year to visit?",
        answer:
          "The garden is open year-round. Spring and early summer can be particularly attractive for seasonal flowers, although displays depend on weather and flowering cycles.",
      },
    ],
  },
  {
    slug: "cape-town-sunset-cruise",
    name: "Cape Town Sunset Cruise",
    category: "Boat Cruises & Coastal Experiences",
    location: "V&A Waterfront, Cape Town",
    country: "South Africa",
    image: "/images/activities/cape-town-sunset-cruise.jpg",
    badge: "Sunset Experience",
    description:
      "Experience Cape Town from the water on a scenic sunset cruise departing from the iconic Victoria & Alfred Waterfront. Sail into Table Bay along the Atlantic coastline as the late-afternoon light illuminates Table Mountain, the city skyline and the surrounding mountains. Depending on the selected vessel and route, guests may enjoy views towards the Atlantic Seaboard, Milnerton Lighthouse and Granger Bay, with opportunities to photograph the coastline as the sun sets over the ocean. Many scheduled cruises include a complimentary glass or two of sparkling wine, while additional drinks may be available from an onboard bar. Marine wildlife such as seals, dolphins and seabirds may occasionally be seen, but sightings are not guaranteed. This relaxing experience is ideal for couples, families, friends and small groups looking to enjoy Cape Town's coastal scenery from a different perspective.",
    rating: null,
    reviewCount: 0,
    duration: "2 hours",
    groupSize:
      "Shared scheduled cruise or private charter, depending on the selected vessel",
    pickup:
      "No hotel pickup by default; guests meet at the confirmed departure point at the V&A Waterfront",
    highlights: [
      "Enjoy a scenic sunset cruise on Table Bay",
      "Admire views of Table Mountain and Cape Town's skyline from the ocean",
      "Photograph the Atlantic coastline in the golden-hour light",
      "Relax aboard a sailing catamaran, yacht or motor vessel, depending on the booking",
      "Enjoy complimentary sparkling wine where included in the selected cruise",
      "Look out for seals, dolphins and seabirds in their natural environment",
      "Experience the V&A Waterfront from the water",
      "Optional private charters for romantic occasions, celebrations and corporate groups",
    ],
    itinerary: [
      {
        time: "Approximately 30 minutes before departure",
        title: "Arrival and boarding",
        description:
          "Arrive at the confirmed departure point at the V&A Waterfront, check in with the cruise operator and board the vessel. Guests should arrive at least 15 minutes before departure, or earlier if instructed on the booking confirmation.",
      },
      {
        time: "Departure",
        title: "Leave the V&A Waterfront",
        description:
          "Set sail or motor out of the harbour with the skipper and crew. The departure time changes seasonally to align with the sunset and the operator's schedule.",
      },
      {
        time: "First 30 minutes",
        title: "Coastal sightseeing",
        description:
          "Cruise into Table Bay and enjoy views of the city, harbour and Table Mountain. The route depends on the vessel, sea conditions and skipper's operational decision.",
      },
      {
        time: "Middle of the cruise",
        title: "Sunset and ocean views",
        description:
          "Relax on deck, take photographs and enjoy the changing colours of the sky and coastline. Complimentary sparkling wine or other welcome drinks are provided only where specified in the selected cruise package.",
      },
      {
        time: "Final 15–30 minutes",
        title: "Return to the Waterfront",
        description:
          "Head back towards the V&A Waterfront, with opportunities to view the coastline and city as evening lights begin to appear. Wildlife sightings depend on natural conditions and are not guaranteed.",
      },
      {
        time: "Cruise conclusion",
        title: "Disembark",
        description:
          "Return to the designated quay and disembark. Guests can continue exploring the V&A Waterfront or make their own arrangements for dinner and onward transport.",
      },
    ],
    included: [
      "Scheduled shared sunset cruise of approximately 90 minutes",
      "Crew and skipper",
      "Welcome drink or sparkling wine only where specified by the selected operator",
      "Scenic coastal cruise from and back to the confirmed V&A Waterfront departure point",
    ],
    notIncluded: [
      "Hotel transfers to and from the V&A Waterfront",
      "Additional alcoholic and non-alcoholic drinks unless expressly included",
      "Meals and snacks unless specified in the selected package",
      "Private charter or exclusive use of the vessel",
      "Gratuities and personal expenses",
      "Guaranteed wildlife sightings",
      "Any activity or service not listed in the confirmed booking",
    ],
    information: [
      "This is a draft Shungu Africa catalogue product. Confirm the operating supplier, vessel, departure quay, sailing time, inclusions and current rate before accepting bookings.",
      "Scheduled sunset cruises generally last around 90 minutes, but duration and route vary by operator and vessel.",
      "Departure times change seasonally with sunset. The exact boarding and departure times must be checked for the travel date.",
      "Guests should arrive at least 15 minutes before departure, or follow the operator's stated check-in instructions.",
      "Cruises are subject to sea conditions, wind, weather, vessel availability and the skipper's safety decision. Cancellations, route changes or alternative arrangements may occur.",
      "Bring a warm layer or windproof jacket, even in summer, as it can feel cooler offshore. Comfortable, non-slip footwear is recommended.",
      "Guests prone to motion sickness should consider suitable precautions before boarding and consult a healthcare professional if unsure which option is appropriate for them.",
      "Sparkling wine, soft drinks, snacks and onboard bar arrangements differ by operator. Confirm the exact package inclusions before sale.",
      "Alcohol is available only subject to applicable age restrictions and operator policies. Non-alcoholic alternatives should be requested where needed.",
      "Children may be accepted on selected scheduled cruises, but age rules, child fares and complimentary infant policies vary by operator.",
      "Private charters may be available for birthdays, proposals, corporate events and special occasions, subject to vessel capacity and separate quotation.",
      "Wildlife sightings are possible but cannot be guaranteed. Guests must follow crew instructions and must not attempt to feed or disturb marine animals.",
      "The standard experience begins and ends at the Waterfront. Parking, transfers and onward transport are not included unless separately arranged.",
    ],
    meetingPoint: {
      name: "V&A Waterfront, confirmed cruise departure quay",
      description:
        "Scheduled cruises commonly depart from Quay 5 or another designated pier at the V&A Waterfront, depending on the operator and vessel. The exact quay, check-in location and boarding time must be provided on the supplier's booking confirmation; do not assume all sunset cruises use the same departure point.",
    },
    pricing: {
      adult: {
        amount: 48,
        currency: "USD",
          label:
            "From per person",
      },
      child: {
        amount: 25,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Supplier-specific cancellation and refund policy to be confirmed before booking. Explain weather-related cancellations, operator rescheduling, late arrival, no-show rules and any non-refundable fees before collecting payment.",
    },
    faqs: [
      {
        question: "How long does the Cape Town Sunset Cruise last?",
        answer:
          "Most scheduled sunset cruises last approximately 90 minutes. Confirm the duration with the selected operator, particularly when comparing standard cruises with premium or private charter options.",
      },
      {
        question: "Where does the cruise depart from?",
        answer:
          "Cruises depart from designated quays at the V&A Waterfront. Quay 5 is used by several operators, but the exact departure point depends on the vessel and booking.",
      },
      {
        question: "What time does the sunset cruise depart?",
        answer:
          "Departure times change throughout the year to match sunset. The confirmed boarding and departure times should be checked for the exact travel date.",
      },
      {
        question: "Is sparkling wine included?",
        answer:
          "Some sunset cruises include a complimentary glass or two of sparkling wine, while others have different welcome-drink arrangements. Check the selected operator's inclusions before booking.",
      },
      {
        question: "Can we see dolphins, seals or whales?",
        answer:
          "Marine wildlife may occasionally be seen, depending on season and sea conditions. Sightings are natural and cannot be guaranteed.",
      },
      {
        question: "Is the cruise suitable for children?",
        answer:
          "Many scheduled cruises welcome families, but minimum ages, child fares and infant policies vary. Confirm these details before booking for children.",
      },
      {
        question: "What happens if the weather is bad?",
        answer:
          "The skipper and operator determine whether it is safe to sail. Depending on the conditions and supplier policy, the cruise may proceed, change route, be rescheduled or be cancelled.",
      },
      {
        question: "Can we book a private sunset cruise?",
        answer:
          "Private catamaran and yacht charters may be available for couples, celebrations and groups. Prices depend on vessel, capacity, duration, catering and drinks, and must be quoted separately.",
      },
      {
        question: "What should we bring?",
        answer:
          "Bring a camera or phone, a warm layer and comfortable non-slip footwear. Consider motion-sickness precautions if needed, and check whether snacks and drinks are permitted aboard.",
      },
    ],
  },
  {
    slug: "cape-town-paragliding-experience",
    name: "Cape Town Tandem Paragliding Experience",
    category: "Adventure & Aerial Experiences",
    location: "Signal Hill or Lion's Head, Cape Town",
    country: "South Africa",
    image: "/images/activities/cape-town-paragliding-experience.jpg",
    badge: "Adventure Experience",
    description:
      "Experience Cape Town from the air on an exhilarating tandem paragliding flight with a qualified instructor. Take off from Signal Hill or Lion's Head, depending on the wind direction and conditions, and soar above the city with panoramic views of Table Mountain, the Atlantic coastline, Sea Point and the surrounding mountains. Your instructor manages the glider and guides you through the launch, flight and landing, making this experience accessible to first-time flyers who meet the operator's requirements. The experience includes a safety briefing, equipment fitting and a tandem flight, with optional in-flight photographs and video available from selected operators. Flight duration and route depend on weather conditions, so flexibility is essential when booking this unforgettable Cape Town adventure.",
    rating: null,
    reviewCount: 0,
    duration:
      "10–40 minutes",
    groupSize:
      "Individual tandem flights; couples and groups can book consecutive flights subject to instructor availability",
    pickup:
      "Meet at the operator's confirmed launch-site meeting point at Signal Hill or Lion's Head. Hotel transfers are not included unless separately arranged.",
    highlights: [
      "Enjoy a tandem paragliding flight over Cape Town",
      "Take off from Signal Hill or Lion's Head, depending on wind conditions",
      "Admire aerial views of Table Mountain and the Atlantic coastline",
      "Fly with an experienced tandem instructor",
      "Receive a pre-flight briefing and equipment fitting",
      "No previous paragliding experience required",
      "Optional in-flight photographs and video footage",
      "A memorable adventure for eligible thrill-seekers visiting Cape Town",
    ],
    itinerary: [
      {
        time: "15–20 minutes before flight",
        title: "Arrival and check-in",
        description:
          "Meet the operator at the confirmed launch-site meeting point. Complete registration and any required declarations, and confirm that your age, weight and other eligibility requirements meet the operator's current rules.",
      },
      {
        time: "Next 10–15 minutes",
        title: "Safety briefing and equipment fitting",
        description:
          "Meet your tandem instructor, receive instructions for take-off and landing, and be fitted with the appropriate harness and safety equipment. Follow the instructor's guidance throughout the experience.",
      },
      {
        time: "Flight preparation",
        title: "Launch from the hillside",
        description:
          "Prepare for take-off at Signal Hill or Lion's Head, selected according to the wind and operating conditions. The instructor will explain when to walk or run during the launch.",
      },
      {
        time: "Approximately 10–20 minutes",
        title: "Tandem paragliding flight",
        description:
          "Soar above Cape Town with views of the city, mountains and coastline. The actual flight time, route and landing location depend on wind strength, weather and operational conditions.",
      },
      {
        time: "After landing",
        title: "Landing and return arrangements",
        description:
          "Land at the designated landing area under your instructor's guidance. Follow the operator's instructions for any transfer back to the launch area and collect any purchased photo or video files.",
      },
    ],
    included: [
      "One tandem paragliding flight with an instructor",
      "Pre-flight safety briefing",
      "Standard flight equipment and harness",
      "Applicable activity permit or association fee where included in the selected supplier package",
      "Post-landing transfer back to the launch area only where confirmed by the operator",
    ],
    notIncluded: [
      "Hotel pickup and drop-off",
      "In-flight photographs and video unless included in the selected package",
      "Personal expenses and gratuities",
      "Meals and refreshments",
      "Additional activities or private transport",
      "Any service not expressly listed in the confirmed booking",
    ],
    information: [
      "This is a draft Shungu Africa catalogue product. Confirm the supplier, flight date, price, inclusions and operating conditions before accepting payment.",
      "Tandem flights are weather-dependent and may be delayed, rescheduled or cancelled when conditions are unsuitable. The instructor and operator make the final safety decision.",
      "Signal Hill and Lion's Head are alternative launch sites. The operator chooses the appropriate site according to wind direction, strength and other conditions; guests should not assume they can choose their launch site.",
      "A typical flight may last approximately 10–40 minutes, but no exact flight duration can be guaranteed.",
      "Many Cape Town operators set a minimum age of 14 years. Check the selected supplier's policy before accepting a booking for a younger guest.",
      "Weight restrictions vary by operator and conditions. Published limits commonly fall around 100–120 kg, with some operators also setting a minimum weight. Confirm the actual limit directly with the supplier before taking payment.",
      "Guests should disclose relevant mobility limitations or medical concerns to the operator in advance and follow its participation requirements.",
      "Wear closed shoes that will remain secure during take-off and landing, plus comfortable long trousers and weather-appropriate clothing. Avoid sandals, flip-flops and loose items.",
      "Bring a warm layer because conditions can feel cooler in the air. Secure phones and valuables and follow the instructor's advice about carrying personal items.",
      "The launch can require a short walk or run. The instructor will explain the required movement based on the conditions.",
      "Photos and video are commonly available as an optional paid extra. Confirm the current fee, recording method and delivery process with the supplier.",
      "Any return transfer from the landing area to the launch site should be confirmed as included rather than assumed.",
      "Use an appropriately qualified and authorised operator. Confirm current South African Civil Aviation Authority and South African Hang Gliding and Paragliding Association credentials before contracting a supplier.",
      "The experience is not suitable for guests who cannot meet the selected operator's safety and participation requirements.",
    ],
    meetingPoint: {
      name: "Operator-confirmed Signal Hill or Lion's Head meeting point",
      description:
        "The meeting location depends on the launch site selected for the day's wind conditions. It may be a designated parking or viewing area at Signal Hill or near the Lion's Head trail parking area. Send guests the exact location and arrival instructions after the operator confirms the flight.",
    },
    pricing: {
      adult: {
        amount: 110,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 0,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Supplier-specific cancellation policy to be confirmed before booking. Explain weather-related rescheduling or cancellation, refund eligibility, late arrival, no-shows and any non-refundable fees before collecting payment. Do not promise a refund or rescheduling arrangement until the supplier's written policy has been verified.",
    },
    faqs: [
      {
        question: "Do I need previous paragliding experience?",
        answer:
          "No. This is a tandem experience with an instructor who provides a briefing and manages the flight. You must follow the instructions for take-off, flight and landing.",
      },
      {
        question: "Where does the flight take off?",
        answer:
          "Flights generally launch from Signal Hill or Lion's Head. The operator selects the suitable location based on the wind and weather conditions on the day.",
      },
      {
        question: "How long will I be in the air?",
        answer:
          "Flight time is commonly around 10–40 minutes, although conditions can make it shorter or longer. The total experience usually takes about an hour, including check-in and preparation.",
      },
      {
        question: "What is the minimum age?",
        answer:
          "Many local operators accept participants from age 14. Confirm the exact age requirement and any conditions for minors with the selected supplier before booking.",
      },
      {
        question: "Are there weight restrictions?",
        answer:
          "Yes. Weight limits vary by operator and weather conditions, with published maximums commonly around 100–120 kg. A minimum weight may also apply. Confirm the operator's current limits before payment.",
      },
      {
        question: "Are photos and videos included?",
        answer:
          "Not always. Some operators sell in-flight photographs and videos separately, while certain packages include them. Confirm the selected package's inclusions and current media fee."
      },
      {
        question: "What happens if the weather is unsuitable?",
        answer:
          "The operator may delay, reschedule or cancel the flight for safety reasons. The available alternatives and refund terms depend on the supplier's policy, which should be explained before booking.",
      },
      {
        question: "What should I wear?",
        answer:
          "Wear secure closed shoes, comfortable long trousers and a suitable top or jacket. Avoid sandals and loose items, and follow the instructor's guidance on securing personal belongings.",
      },
      {
        question: "Is transport included?",
        answer:
          "Hotel transfers are not included by default. Some operators provide transport from the landing area back to the launch site; confirm whether this service is included in your chosen package.",
      },
      {
        question: "Can I book this experience for a group?",
        answer:
          "Yes, subject to available instructors, suitable weather and scheduling. Flights may take place one after another rather than simultaneously, so allow sufficient time for group members.",
      },
    ],
  },
  {
    slug: "hermanus-whale-watching-tour",
    name: "Hermanus Whale Watching Boat Tour",
    category: "Marine Wildlife & Nature Experiences",
    location: "Hermanus New Harbour, Walker Bay",
    country: "South Africa",
    image: "/images/activities/hermanus-whale-watching-boat-tour.jpg",
    badge: "Seasonal Wildlife Experience",
    description:
      "Discover the spectacular marine wildlife of Walker Bay on a guided boat-based whale-watching excursion from Hermanus, one of South Africa's best-known whale-watching destinations. Cruise along the scenic Cape Whale Coast in search of southern right whales, which visit these sheltered waters during their annual breeding and calving migration. Depending on the season and sea conditions, you may also encounter humpback whales, Bryde's whales, dolphins, Cape fur seals and a variety of seabirds. An experienced skipper and knowledgeable crew provide guidance throughout the voyage, helping guests appreciate the region's marine ecosystem while observing wildlife responsibly. This experience is ideal for nature enthusiasts, couples, families and photographers. Cape Town transfers can be arranged separately for guests wishing to combine whale watching with a coastal day trip.",
    rating: null,
    reviewCount: 0,
    duration:
      "2–3 hours",
    groupSize:
      "Shared scheduled boat tour; private charter subject to separate quotation and vessel availability",
    pickup:
      "Meet at Hermanus New Harbour. Round-trip transfers from Cape Town or nearby accommodation can be arranged separately.",
    highlights: [
      "Search for southern right whales in the waters of Walker Bay",
      "Explore Hermanus's celebrated whale-watching coastline",
      "Observe marine wildlife from a licensed whale-watching vessel",
      "Learn about whale migration, breeding and conservation",
      "Look out for humpback and Bryde's whales, dolphins and Cape fur seals",
      "Enjoy views of the rugged Cape Whale Coast",
      "Capture wildlife photographs from designated viewing areas aboard the vessel",
      "Optional Cape Town transfer and coastal sightseeing itinerary",
    ],
    itinerary: [
      {
        time: "30 minutes before departure",
        title: "Arrival and check-in",
        description:
          "Arrive at Hermanus New Harbour and check in at the designated operator's office. Confirm the departure time, weather conditions and boarding instructions. Guests should arrive at least 30 minutes before sailing unless their booking confirmation states otherwise.",
      },
      {
        time: "Departure",
        title: "Boarding and safety briefing",
        description:
          "Board the vessel and receive a safety briefing from the crew. Learn about onboard safety procedures, appropriate wildlife-viewing behaviour and the expected route.",
      },
      {
        time: "First 30 minutes",
        title: "Cruise into Walker Bay",
        description:
          "Travel along the coastline into the whale-watching area. The skipper selects the route according to sea conditions, wildlife reports and operational requirements.",
      },
      {
        time: "Middle of the excursion",
        title: "Whale and marine wildlife observation",
        description:
          "Watch for southern right whales and other marine wildlife while the crew provides information about the animals and their environment. Sightings, viewing distances and time spent observing individual animals depend on natural conditions and applicable wildlife regulations.",
      },
      {
        time: "Final 20–30 minutes",
        title: "Coastal sightseeing and return",
        description:
          "Continue observing the coastline and other marine life as conditions allow, then return towards Hermanus New Harbour. The precise duration depends on the wildlife encountered and the skipper's decisions.",
      },
      {
        time: "After docking",
        title: "Disembark and onward arrangements",
        description:
          "Disembark at the harbour. Guests continuing to Cape Town or another destination should follow their separately confirmed transfer itinerary.",
      },
    ],
    included: [
      "One scheduled shared boat-based whale-watching excursion",
      "Professional skipper and onboard crew",
      "Wildlife interpretation and safety briefing",
      "Use of standard onboard passenger facilities",
      "Bottled water or refreshments only where included in the selected supplier package",
    ],
    notIncluded: [
      "Transfers between Cape Town and Hermanus",
      "Hotel pickup and drop-off unless separately confirmed",
      "Meals and refreshments not specified in the booking",
      "Private boat charter",
      "Gratuities and personal expenses",
      "Guaranteed whale or other wildlife sightings",
      "Accommodation",
      "Additional sightseeing activities or entrance fees",
      "Any service not expressly listed in the confirmed booking",
    ],
    information: [
      "This is a draft Shungu Africa catalogue product. Confirm the operating supplier, vessel, departure schedule, inclusions, child policy and final selling price before accepting bookings.",
      "The principal southern right whale-watching season generally runs from June to November. Some operators advertise trips into December or offer alternative marine wildlife excursions outside the main season.",
      "August to October is often a particularly rewarding period for southern right whale viewing, but sightings depend on migration patterns, weather and natural behaviour.",
      "Boat trips typically last 1.5–2 hours, although the exact duration depends on the operator, sea conditions and wildlife activity.",
      "Departures are weather- and sea-condition-dependent. The operator may delay, reschedule or cancel a trip when conditions are unsuitable.",
      "Whale sightings cannot be guaranteed. Do not advertise guaranteed sightings or a guaranteed refund unless the selected supplier's written policy explicitly provides one.",
      "Guests should arrive at least 30 minutes before departure and follow the exact check-in instructions on their booking confirmation.",
      "Departures generally operate from Hermanus New Harbour, but the exact operator office, boarding point and schedule must be reconfirmed before travel.",
      "The boat fare does not automatically include transport from Cape Town. The drive commonly takes around 1.5–2 hours each way, depending on the starting point, traffic and route.",
      "For a Cape Town day-trip package, allow approximately 8–10 hours including road transfers, check-in, the boat excursion and any additional stops.",
      "Bring a warm, windproof jacket, sun protection, comfortable non-slip footwear and a camera. Conditions offshore may feel colder than on land.",
      "Guests prone to motion sickness should consider appropriate precautions before boarding and seek professional advice if unsure what is suitable for them.",
      "Children's age limits, fares, infant policies and passenger capacity depend on the operator. Confirm eligibility before taking payment.",
      "Guests with mobility requirements should check boarding access, onboard facilities and assistance availability with the supplier before booking.",
      "Wildlife viewing must comply with the operator's permits and applicable regulations. Guests must follow crew instructions and must not attempt to touch, feed or disturb marine animals.",
      "For travel outside the main whale season, ask the supplier whether a marine wildlife cruise is available instead of a dedicated whale-watching trip.",
    ],
    meetingPoint: {
      name: "Hermanus New Harbour, confirmed operator check-in office",
      description:
        "Meet at the operating company's designated check-in office at Hermanus New Harbour, Westcliff Road, Hermanus. Different operators use different offices and boarding arrangements, so provide the exact meeting instructions and check-in time from the confirmed booking voucher. Cape Town pickup is not included unless separately arranged.",
    },
    pricing: {
      adult: {
        amount: 110,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 60,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Confirm the selected supplier's written cancellation policy before booking. Explain weather-related cancellations, rescheduling options, refund conditions, guest cancellations, late arrival and no-show rules before collecting payment. Any Cape Town transfer or third-party service may have separate cancellation terms.",
    },
    faqs: [
      {
        question: "When is the best time to go whale watching in Hermanus?",
        answer:
          "The main southern right whale season generally runs from June to November, with August to October often offering particularly good opportunities. Whale movements vary each year, so sightings are never guaranteed.",
      },
      {
        question: "How long is the boat trip?",
        answer:
          "Most excursions last approximately 1.5–2 hours. Allow additional time for check-in, boarding and disembarkation.",
      },
      {
        question: "Are whales guaranteed to be seen?",
        answer:
          "No. Whales are wild animals, and sightings depend on their presence and behaviour, as well as weather and sea conditions. Check the selected operator's policy if a trip is cancelled or no whales are seen.",
      },
      {
        question: "Where does the tour depart from?",
        answer:
          "Boat-based whale-watching trips generally depart from Hermanus New Harbour. The exact check-in office and boarding point depend on the supplier and should be confirmed before departure.",
      },
      {
        question: "Can I book this tour from Cape Town?",
        answer:
          "Yes. Shungu Africa can package the boat excursion with round-trip road transfers from Cape Town. Transfers should be quoted separately or included in a clearly priced full-day package.",
      },
      {
        question: "What other wildlife might we see?",
        answer:
          "Depending on the season, sightings may include humpback and Bryde's whales, dolphins, Cape fur seals and seabirds. Wildlife encounters are natural and cannot be guaranteed.",
      },
      {
        question: "Is this activity suitable for children?",
        answer:
          "Many operators welcome families, but minimum ages, child fares and infant arrangements vary. Confirm the chosen operator's rules before booking.",
      },
      {
        question:
          "What happens if the boat trip is cancelled because of weather?",
        answer:
          "The operator may offer rescheduling or a refund according to its policy. Explain the actual supplier terms to guests before accepting payment.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring a warm windproof jacket, sun protection, comfortable non-slip footwear and a camera. Consider motion-sickness precautions if needed.",
      },
      {
        question: "Can the excursion operate outside whale season?",
        answer:
          "Some operators offer alternative marine wildlife trips outside the main southern right whale season. Confirm what wildlife excursion is operating before marketing the product for those dates.",
      },
    ],
  },
  {
    slug: "kruger-national-park-guided-game-drive",
    name: "Kruger National Park Guided Game Drive",
    category: "Wildlife Safaris & Game Drives",
    location: "Kruger National Park, Mpumalanga and Limpopo",
    country: "South Africa",
    image: "/images/activities/kruger-national-park-guided-game-drive.jpg",
    badge: "Big Five Safari",
    description:
      "Discover the wildlife-rich landscapes of Kruger National Park on a guided safari in an open safari vehicle. Accompanied by an experienced field guide, travel through a network of designated park roads in search of elephants, lions, leopards, rhinos, buffalo, giraffes, zebras, antelope and a remarkable variety of birdlife. Morning drives offer opportunities to experience the bush as it awakens, while afternoon and sunset excursions explore changing wildlife activity as temperatures cool. Your guide shares insights into animal behaviour, tracks, vegetation and conservation, helping you appreciate the park beyond the wildlife sightings themselves. Choose a shared scheduled drive from a participating rest camp or arrange a guided excursion with an approved safari operator based near the park. Every drive is different, and wildlife sightings depend on natural conditions.",
    rating: null,
    reviewCount: 0,
    duration:
      "3–5 hours",
    groupSize:
      "Shared open safari vehicle or private guided vehicle, subject to operator and availability",
    pickup:
      "Pickup at a confirmed Kruger rest camp, park entrance gate or participating lodge outside the park, depending on the selected supplier",
    highlights: [
      "Explore Kruger National Park with an experienced field guide",
      "Search for the iconic Big Five: lion, leopard, elephant, rhino and buffalo",
      "Travel in an open safari vehicle for improved viewing and photography",
      "Learn about wildlife behaviour, tracks, habitats and conservation",
      "Choose a morning, sunset or other available guided drive",
      "Enjoy opportunities to spot giraffes, zebras, antelope and diverse birdlife",
      "Experience the sights and sounds of the African bush",
      "Optional full-day guided safari with additional time to explore different park areas",
    ],
    itinerary: [
      {
        time: "30 minutes before departure",
        title: "Check-in and safari preparation",
        description:
          "Meet at the confirmed rest camp, gate or lodge collection point. Check in with the operator, confirm the departure arrangements and prepare for the drive. Early-morning departures may require guests to arrive before the park's regular gate-opening time.",
      },
      {
        time: "Departure",
        title: "Board the open safari vehicle",
        description:
          "Meet your field guide and receive a safety briefing covering seating, wildlife-viewing etiquette, photography and remaining inside the vehicle unless the guide authorises a designated stop.",
      },
      {
        time: "First hour",
        title: "Explore wildlife habitats",
        description:
          "Travel along approved park roads through suitable wildlife habitats. Your guide interprets animal tracks, vegetation and recent sightings while looking for species active in the area.",
      },
      {
        time: "Middle of the drive",
        title: "Wildlife viewing and interpretation",
        description:
          "Pause at suitable viewing locations when wildlife is encountered. Search for elephants, buffalo, giraffes, zebras, antelope and predators, depending on local conditions. The guide determines safe viewing distances and the route.",
      },
      {
        time: "Final hour",
        title: "Continue the guided safari",
        description:
          "Explore additional roads or habitats as time allows, with opportunities for birdwatching and photography. Sightings and route choices depend on wildlife movement, traffic, weather and the scheduled return time.",
      },
      {
        time: "End of drive",
        title: "Return and safari conclusion",
        description:
          "Return to the agreed rest camp, entrance gate or lodge drop-off point. Guests booked on a full-day excursion may continue with additional wildlife viewing and scheduled meal breaks.",
      },
    ],
    included: [
      "One scheduled guided game drive of the duration specified in the booking",
      "Professional field guide or authorised safari guide",
      "Shared open safari vehicle for scheduled departures",
      "Safety briefing and wildlife interpretation",
      "Park conservation or entrance fees only where expressly included in the selected supplier package",
    ],
    notIncluded: [
      "Accommodation",
      "Meals, snacks and drinks unless specified",
      "Transfers from airports, hotels or locations outside the confirmed pickup area",
      "Park conservation fees or entrance charges when excluded by the supplier",
      "Private vehicle or exclusive-use surcharge",
      "Gratuities and personal expenses",
      "Additional game drives or full-day extensions",
      "Guaranteed sightings of any animal, including the Big Five",
      "Any service not expressly listed in the confirmed booking",
    ],
    information: [
      "This is a draft Shungu Africa catalogue product. Confirm the supplier, departure location, drive duration, park fees, age rules and final rate before accepting bookings.",
      "SANParks-operated morning drives generally last around 3-5 hours and depart from designated camps or gates. Sunset drives last approximately three hours, while night drives are generally around two hours. Exact schedules vary by camp and season.",
      "Children under six are not permitted on SANParks guided game drives for safety reasons. Other private operators may have different minimum ages, so confirm the applicable policy before booking.",
      "Departure times change seasonally with daylight and park gate schedules. Guests should follow the supplier's confirmed check-in time rather than relying on a generic departure time.",
      "Kruger National Park is a large protected area. The selected camp, gate and operating region significantly affect driving distances, likely habitats and transfer requirements.",
      "Park conservation fees may be charged separately from the guided-drive rate, especially when the excursion is sold by an outside operator. Clearly state whether fees are included.",
      "Wildlife sightings are never guaranteed. Avoid promising Big Five sightings or specific animals on a particular departure.",
      "Guests must remain seated and follow the guide's instructions. Do not stand, lean outside the vehicle, feed animals or attempt to attract wildlife.",
      "Vehicles must remain on authorised roads unless a specifically authorised activity permits otherwise. Guests must not request off-road driving or unsafe approaches to animals.",
      "Bring binoculars if available, a camera, sun protection and a warm layer for early-morning or evening drives. Neutral-coloured clothing and closed shoes are practical choices.",
      "Guests with mobility needs should confirm vehicle access, boarding assistance and seating arrangements with the operator before booking.",
      "Private drives may be available at a vehicle rate or minimum group charge. Confirm passenger capacity, duration and whether conservation fees are additional.",
      "A full-day safari is a different product from the standard three-hour game drive and should be quoted with its own inclusions, meal arrangements and departure schedule.",
      "If pickup is from a lodge outside Kruger National Park, confirm the gate used, transfer time, entry arrangements and whether the guide is authorised to conduct the activity inside the park.",
      "SANParks official tariffs change by season and visitor category. Recheck the current rate for the exact travel date, including any community levy or applicable conservation charge.",
    ],
    meetingPoint: {
      name: "Confirmed Kruger rest camp, entrance gate or participating safari lodge",
      description:
        "The exact meeting point depends on the selected product. SANParks drives normally collect guests at the designated rest camp or gate stated in the reservation. Third-party excursions may depart from a lodge outside the park and use a specified entrance gate. Confirm the exact address, check-in time and included transfers on the booking voucher.",
    },
    pricing: {
      adult: {
        amount: 72,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 51,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Confirm the supplier's written cancellation policy before booking. Explain payment deadlines, late arrival and no-show rules, weather or operational cancellations, minimum group requirements, and whether park fees or third-party transfers are refundable. SANParks and private operators may have different booking and refund conditions.",
    },
    faqs: [
      {
        question: "What animals can I see on a Kruger game drive?",
        answer:
          "Possible sightings include elephants, lions, leopards, rhinos, buffalo, giraffes, zebras, antelope and many bird species. Wildlife is free-roaming, so sightings vary by location, season and day.",
      },
      {
        question: "How long does a guided game drive last?",
        answer:
          "A standard SANParks morning drive generally lasts around 3–3.5 hours, while sunset drives last approximately three hours. Full-day guided safaris are available through selected operators and should be booked separately.",
      },
      {
        question: "Are park entrance fees included?",
        answer:
          "Not always. Some suppliers include conservation fees, while others charge them separately. The final quotation should clearly state which fees are included and which must be paid separately.",
      },
      {
        question: "Can children join the game drive?",
        answer:
          "SANParks guided game drives do not permit children under six. Private operators may have different age restrictions, so confirm the chosen supplier's rules before booking.",
      },
      {
        question: "What is the best time for a game drive?",
        answer:
          "Early morning and late afternoon are popular because temperatures are often cooler and wildlife may be more active. The best departure depends on the season, location and the animals' natural behaviour.",
      },
      {
        question: "Will I see the Big Five?",
        answer:
          "A guide will look for the Big Five where conditions permit, but sightings cannot be guaranteed. Animals move freely across the park, and some species may be difficult to find.",
      },
      {
        question: "Where does the game drive start?",
        answer:
          "Departure may be from a Kruger rest camp, an entrance gate or a lodge outside the park. The meeting point depends on the operator and must be confirmed on the booking voucher.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring a camera or binoculars, sun protection, drinking water where permitted, comfortable clothing and a warm layer for early or evening departures. Follow the operator's guidance about food and personal items.",
      },
      {
        question: "Can I book a private game drive?",
        answer:
          "Yes, subject to vehicle and guide availability. Private drives may be priced per vehicle and can have different pickup arrangements, passenger limits and park-fee requirements.",
      },
      {
        question: "What happens if the weather is poor?",
        answer:
          "Game drives may operate in a range of weather conditions, but the operator may alter or cancel a departure for safety or operational reasons. Rescheduling and refund options depend on the supplier's policy.",
      },
    ],
  },
  {
    slug: "sossusvlei-and-deadvlei-guided-tour",
    name: "Sossusvlei and Deadvlei Guided Desert Tour",
    category: "Desert Adventures & Nature Experiences",
    location: "Sossusvlei, Deadvlei and Sesriem, Namib-Naukluft National Park",
    country: "Namibia",
    image: "/images/optimized/activities/sossusvlei-and-deadvlei-desert-guided-tour.webp",
    badge: "Namib Desert Highlights",
    description:
      "Discover the extraordinary landscapes of Namibia's Namib-Naukluft National Park on a guided excursion to Sossusvlei and Deadvlei. Travel through the spectacular dune country of the Namib Desert, where immense orange-red sand dunes rise above ancient gravel plains and dry riverbeds. Visit the iconic Deadvlei clay pan, known for its pale cracked surface and centuries-old camelthorn trees, and explore Sossusvlei, where dunes meet the ephemeral Tsauchab River basin. Depending on the departure time and itinerary, the excursion can also include photographic stops at Dune 45 and a visit to Sesriem Canyon. A knowledgeable guide explains the desert's geology, ecology and remarkable adaptations of plants and animals to extreme arid conditions. This experience is ideal for photographers, nature lovers, couples and adventurous travellers seeking Namibia's most recognisable desert scenery.",
    rating: null,
    reviewCount: 0,
    duration:
      "5–7 hours",
    groupSize:
      "Shared guided excursion or private tour, subject to supplier availability",
    pickup:
      "Pickup from a participating lodge or camp in the Sesriem area, or meeting at a confirmed departure point near Sesriem",
    highlights: [
      "Explore the spectacular dunes of the Namib Desert",
      "Visit the iconic white clay pan and ancient trees of Deadvlei",
      "Discover the Sossusvlei pan and surrounding dune landscape",
      "Photograph towering red-orange dunes and contrasting desert colours",
      "Stop at Dune 45 when included in the confirmed itinerary",
      "Learn about desert geology, plants and wildlife from a knowledgeable guide",
      "Experience the Namib-Naukluft National Park in the cooler morning hours",
      "Optional visit to Sesriem Canyon",
      "Optional sunrise departure or private photography-focused excursion",
    ],
    itinerary: [
      {
        time: "Before sunrise or early morning",
        title: "Pickup and departure",
        description:
          "Meet your guide at the confirmed lodge, camp or meeting point in the Sesriem area. Depart early to take advantage of cooler temperatures and favourable light. The exact departure time depends on the season, park access arrangements and the booked itinerary.",
      },
      {
        time: "Early morning",
        title: "Scenic drive through the dune corridor",
        description:
          "Travel through the Namib-Naukluft National Park towards the Sossusvlei area. Enjoy views of the changing desert landscape and learn about dune formation, desert ecology and the Tsauchab River system.",
      },
      {
        time: "Morning",
        title: "Dune 45 photographic stop",
        description:
          "Where included and time permits, stop at Dune 45 for photographs or an optional walk on the dune. Climbing is physically demanding and should be attempted only when conditions and the guide's advice make it appropriate.",
      },
      {
        time: "Morning",
        title: "Transfer to the Sossusvlei and Deadvlei access area",
        description:
          "Continue to the designated 2x4 parking area. Access beyond this point depends on the current park rules and the vehicle and operator permissions. Guests without an eligible 4x4 or authorised guide arrangement must use the approved shuttle where required.",
      },
      {
        time: "Late morning",
        title: "Explore Deadvlei",
        description:
          "Walk across the desert terrain to Deadvlei's striking clay pan and ancient camelthorn trees. Your guide explains how the pan formed and why the trees remain preserved in the arid environment. Allow time for photographs, while staying on permitted routes and respecting the fragile landscape.",
      },
      {
        time: "Late morning to midday",
        title: "Visit Sossusvlei",
        description:
          "Explore the Sossusvlei area and surrounding dunes, subject to access, weather and the confirmed route. The guide identifies suitable viewpoints and walking opportunities according to the group's fitness and available time.",
      },
      {
        time: "Midday or early afternoon",
        title: "Return journey and optional Sesriem Canyon",
        description:
          "Return towards Sesriem. A Sesriem Canyon visit may be included if the booked itinerary allows enough time. The excursion concludes at the agreed drop-off point; meals and additional stops depend on the package selected.",
      },
    ],
    included: [
      "Guided excursion from the confirmed Sesriem-area departure point",
      "Transport during the excursion as specified by the supplier",
      "Services of a professional driver-guide or authorised guide",
      "Stops at Sossusvlei and Deadvlei, subject to park access and operating conditions",
      "Authorised 4x4 transport or shuttle for the final sandy section only where expressly included",
      "Park conservation fees only when listed in the confirmed package",
    ],
    notIncluded: [
      "Accommodation in Sesriem or elsewhere in Namibia",
      "Transfers to Sesriem from Windhoek, Swakopmund or other destinations unless specified",
      "Park entrance and conservation fees unless expressly included",
      "Authorised shuttle charges unless expressly included",
      "Meals, snacks and drinks unless stated",
      "Optional dune climbing or other activities not listed in the package",
      "Gratuities and personal expenses",
      "Private charter or exclusive-use vehicle surcharge",
      "Any service not expressly stated in the confirmed booking",
    ],
    information: [
      "This is a draft Shungu Africa catalogue product. Confirm the operating supplier, route, departure point, transport arrangements, park fees and final selling price before accepting bookings.",
      "Sossusvlei and Deadvlei are located within Namib-Naukluft National Park. Access is affected by park opening times, seasonal conditions, road conditions and current regulations.",
      "The final sandy 4x4 section requires an appropriate vehicle and suitable driving skills. Guests in ordinary 2x4 vehicles should use the authorised shuttle service or an eligible guided transport arrangement.",
      "Namibia's rules concerning access to the final section have changed during 2026. Check the latest Ministry of Environment, Forestry and Tourism guidance and confirm the permitted arrangement with the operator before every departure. Do not assume that a standard tour vehicle may use the sandy section.",
      "Only use an authorised shuttle or a suitably registered guide and vehicle permitted under current park rules. Confirm whether the shuttle is included in the quoted rate or payable separately.",
      "The walk from the parking area to Deadvlei crosses sand and can be strenuous, especially in heat. Guests should wear suitable walking shoes and assess their fitness before attempting longer dune climbs.",
      "Temperatures can become extremely high, particularly in the middle of the day. Early departures are strongly recommended, and guests should carry sufficient drinking water and sun protection.",
      "The duration varies with the departure location, time spent at each stop, walking pace, vehicle arrangements and weather. A tour starting outside Sesriem may require a substantially longer day.",
      "Dune 45 and Sesriem Canyon are optional itinerary stops unless specifically included in the booking confirmation.",
      "Sunrise access depends on the location of the accommodation, gate opening arrangements and the booked tour's departure time. Do not promise sunrise at Deadvlei unless the logistics have been confirmed.",
      "The landscape is fragile. Guests must not damage vegetation, disturb wildlife, leave rubbish or disregard designated access rules.",
      "The region is remote and mobile coverage may be limited. Guests should follow the guide's instructions and remain with the group.",
      "Bring a hat, sunglasses, sunscreen, closed walking shoes, drinking water and a camera. A light layer may be useful before sunrise.",
      "Child eligibility and pricing depend on the operator, walking demands and transport arrangements. Confirm child suitability before accepting a family booking.",
      "Wheelchair access to the pans is very limited because of deep sand and uneven terrain. Discuss mobility requirements with the operator before booking.",
      "Park entry, shuttle fares and other official charges can change. Verify the applicable rates for the travel date and state clearly which charges are included.",
      "Private photography tours, sunrise excursions and lodge-based guided departures may be available at different rates and should be quoted separately.",
    ],
    meetingPoint: {
      name: "Confirmed lodge or camp in the Sesriem area",
      description:
        "Pickup is normally arranged from a participating lodge or camp near Sesriem, or from a supplier-confirmed meeting point. The exact location and departure time depend on the operator and park access arrangements. Guests staying in Windhoek or Swakopmund generally require a separate transfer or overnight stay; confirm this before booking.",
    },
    pricing: {
      adult: {
        amount: 132,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 66,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Confirm the selected supplier's written cancellation and refund policy before booking. Explain weather-related changes, park-access restrictions, shuttle arrangements, late arrival, no-show rules and any non-refundable entry or transport charges before collecting payment.",
    },
    faqs: [
      {
        question: "What is the difference between Sossusvlei and Deadvlei?",
        answer:
          "Sossusvlei is a salt and clay pan in the desert dune system, while Deadvlei is a separate, pale clay pan famous for its dark, ancient camelthorn trees. Both are major highlights of the Namib Desert.",
      },
      {
        question: "How long does the guided tour take?",
        answer:
          "A typical excursion from Sesriem takes approximately five to seven hours, depending on the route and time spent walking and photographing. Longer itineraries may include Sesriem Canyon or additional dune stops.",
      },
      {
        question: "Can a normal 2x4 vehicle reach Deadvlei?",
        answer:
          "Ordinary 2x4 vehicles should not attempt the deep-sand section. Use the authorised shuttle or a permitted guided transport arrangement. Confirm the latest access rules and operator permissions before travel.",
      },
      {
        question: "Is the shuttle included in the tour price?",
        answer:
          "Not automatically. Some packages include the final-section shuttle or authorised 4x4 transport, while others charge it separately. Check the confirmed supplier inclusions before booking.",
      },
      {
        question: "Can we see sunrise at Deadvlei?",
        answer:
          "Some early departures can reach the area in the morning light, but sunrise access depends on accommodation location, gate arrangements, current rules and the operator's schedule. Confirm this specifically if it is a priority.",
      },
      {
        question: "Is climbing the dunes included?",
        answer:
          "Dune walks or climbs may be possible at selected locations, but they are physically demanding and depend on the itinerary, temperature and guide's advice. A dune climb should not be assumed to be included.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring drinking water, sun protection, a hat, sunglasses, closed walking shoes and a camera. Wear light, breathable clothing and consider a warm layer for an early-morning departure.",
      },
      {
        question: "Is the tour suitable for children?",
        answer:
          "It may suit older children who are comfortable walking on sand and coping with heat. The minimum age and child pricing depend on the operator, and families should discuss the walking demands before booking.",
      },
      {
        question: "Can the tour include Sesriem Canyon?",
        answer:
          "Yes, some itineraries add Sesriem Canyon on the return journey. Confirm this stop in advance because the available time depends on the departure schedule and the duration of the visits to Sossusvlei and Deadvlei.",
      },
      {
        question: "Can I book a tour from Windhoek?",
        answer:
          "Yes, but a Windhoek-based excursion involves substantial road travel. A multi-day package with an overnight stay near Sesriem is generally more practical than combining all transfers and the desert excursion into one long day.",
      },
    ],
  },
  {
    slug: "dune-45-sunrise-excursion",
    name: "Dune 45 Sunrise Excursion",
    category: "Desert Adventures & Sunrise Experiences",
    location: "Dune 45, Sesriem, Namib-Naukluft National Park",
    country: "Namibia",
    image: "/images/activities/dune-45-sunrise-excursion.jpg",
    badge: "Sunrise Adventure",
    description:
      "Experience the Namib Desert at its most captivating on an early-morning excursion to Dune 45, one of Namibia's most recognisable sand dunes. Travel through the desert landscape before sunrise and watch the first golden light illuminate the dune's distinctive ridges, revealing striking contrasts of red-orange sand and deep shadows. Guests can enjoy a scenic stop at the base or, where appropriate, undertake a guided climb to appreciate panoramic views across the surrounding dune sea. The experience combines desert scenery, photography and an introduction to the geology and ecology of the Namib. It is ideal for photographers, nature enthusiasts and adventurous travellers seeking a memorable sunrise in southern Africa. The precise departure time and opportunity to watch sunrise from the dune depend on accommodation location, park access arrangements and the selected operator.",
    rating: null,
    reviewCount: 0,
    duration:
      "2–3 hours",
    groupSize:
      "Shared guided excursion or private tour, subject to supplier availability",
    pickup:
      "Pickup from a participating lodge or camp in the Sesriem area, or a confirmed meeting point near Sesriem",
    highlights: [
      "Watch sunrise illuminate the iconic red dunes of the Namib Desert",
      "Visit Dune 45, approximately 45 kilometres from the Sesriem gate",
      "Photograph dramatic dune ridges and shifting desert colours",
      "Enjoy optional guided climbing where conditions permit",
      "Learn about dune formation and the Namib Desert environment",
      "Experience the desert during the cooler hours of the morning",
      "Enjoy scenic stops along the road through the dune corridor",
      "Optional combination with Sossusvlei, Deadvlei or Sesriem Canyon",
    ],
    itinerary: [
      {
        time: "Before sunrise",
        title: "Early-morning pickup",
        description:
          "Meet your guide at the confirmed lodge, camp or meeting point in the Sesriem area. Depart according to the park access arrangements and seasonal sunrise time. Guests staying outside the park may have different access timing from those staying inside the park boundary.",
      },
      {
        time: "Early morning",
        title: "Scenic drive through the Namib Desert",
        description:
          "Travel towards Dune 45 along the park's designated road. Observe the desert landscape as the sky begins to brighten, and learn about the formation of the dunes and the area's arid environment.",
      },
      {
        time: "Around sunrise",
        title: "Sunrise at Dune 45",
        description:
          "Arrive at Dune 45 for photographs and views of the surrounding dunes. The exact light conditions depend on the season, weather and arrival time. Watching sunrise from the dune crest requires enough time and suitable access.",
      },
      {
        time: "After sunrise",
        title: "Optional dune climb",
        description:
          "Guests who wish to climb may follow the designated route at their own pace, subject to the guide's advice and prevailing conditions. The climb involves walking on soft sand and can be strenuous; guests may instead enjoy the views from the base.",
      },
      {
        time: "Morning",
        title: "Photography and desert interpretation",
        description:
          "Enjoy time for photography and learn about the desert's geology, changing dune shapes and survival adaptations of desert plants and animals. Keep to permitted areas and avoid disturbing the environment.",
      },
      {
        time: "Morning",
        title: "Return to Sesriem",
        description:
          "Return to the agreed pickup or drop-off point. Guests booked on a combination itinerary may continue towards Sossusvlei, Deadvlei or Sesriem Canyon if those visits are included in the confirmed booking.",
      },
    ],
    included: [
      "Guided Dune 45 sunrise excursion",
      "Transport from the confirmed Sesriem-area pickup point where specified",
      "Services of a professional driver-guide or authorised guide",
      "Time for photography and optional dune climbing",
      "Park entrance and conservation fees only where expressly included in the confirmed package",
    ],
    notIncluded: [
      "Accommodation",
      "Transfers to Sesriem from Windhoek, Swakopmund or other distant locations unless specified",
      "Park entrance and conservation fees when excluded from the supplier rate",
      "Meals, snacks and drinks unless expressly included",
      "Sossusvlei and Deadvlei visits unless included in a combination package",
      "Private vehicle or exclusive-use surcharge",
      "Gratuities and personal expenses",
      "Any activity or service not listed in the confirmed booking",
    ],
    information: [
      "This is a draft Shungu Africa catalogue product. Confirm the supplier, pickup location, park access timing, route, inclusions and final selling price before accepting bookings.",
      "Dune 45 is located approximately 45 kilometres from the Sesriem gate along the main route into the dune area. It is accessible by the park's designated road, subject to current conditions and access rules.",
      "Sunrise timing changes throughout the year. Confirm the local sunrise time and the applicable gate opening arrangements on the evening before departure.",
      "The Sesriem access system has an outer gate and an inner gate. The inner gate may open earlier for guests staying within the park, allowing earlier access than visitors staying outside the park boundary. Confirm current operating hours with the park or accommodation provider.",
      "Do not promise that guests staying outside the park will reach the dune crest before sunrise. Actual access depends on gate opening times, queues, driving time and the pace of the climb.",
      "The climb involves soft sand and may be physically demanding. Guests should assess their fitness, follow the guide's advice and avoid climbing if heat, fatigue or other conditions make it unsafe.",
      "Temperatures can be cold before sunrise and become hot quickly after dawn. Bring a warm layer, sun protection, a hat and sufficient drinking water.",
      "Wear closed walking shoes or other secure footwear suitable for sand. Sand can become hot later in the day, and loose footwear may be uncomfortable on steep sections.",
      "Guests must remain within permitted areas, avoid damaging vegetation and follow the guide's instructions. Drones require the appropriate approvals and must not be advertised as permitted by default.",
      "Park entry fees and vehicle charges may change. Verify the current tariff for the travel date and state clearly whether fees are included.",
      "The excursion is normally focused on Dune 45 and does not automatically include Sossusvlei or Deadvlei. These destinations require additional time and appropriate transport arrangements.",
      "Children may be able to join the excursion, but suitability for the dune climb depends on age, fitness, weather and operator policy. Confirm child eligibility before booking.",
      "Guests with mobility limitations should discuss access requirements with the operator. Deep sand and the dune climb make access difficult for many mobility needs.",
      "Private sunrise excursions may offer greater flexibility but remain subject to park rules, safe driving conditions and access schedules.",
    ],
    meetingPoint: {
      name: "Confirmed Sesriem-area lodge or camp",
      description:
        "Pickup is arranged from a participating lodge or camp near Sesriem, or from a supplier-confirmed meeting point. The exact pickup time depends on the season, accommodation location and current park access arrangements. Guests staying outside the park should receive clear instructions about the earliest achievable arrival at Dune 45.",
    },
    pricing: {
      adult: {
        amount: 72,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 36,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Confirm the supplier's written cancellation policy before booking. Explain weather-related changes, park access restrictions, late arrival, no-show rules and refund conditions. Any accommodation or transfer booked separately may have different cancellation terms.",
    },
    faqs: [
      {
        question: "What is Dune 45?",
        answer:
          "Dune 45 is a well-known dune in Namibia's Namib Desert, named for its approximate distance from the Sesriem gate. It is popular for its distinctive shape, accessible road location and striking morning light.",
      },
      {
        question: "Can I climb Dune 45?",
        answer:
          "Visitors can generally climb Dune 45, subject to current park rules and conditions. Walking on soft sand is strenuous, so climb at your own pace and follow your guide's advice.",
      },
      {
        question: "Will I see sunrise from the top?",
        answer:
          "That depends on the season, park access timing, queues, accommodation location and climbing pace. Staying inside the park can provide earlier access, but sunrise from the crest should never be guaranteed without checking the itinerary.",
      },
      {
        question: "How long does the excursion take?",
        answer:
          "A focused excursion from the Sesriem area usually takes around two to three hours, including transfers and time at the dune. Combination tours that continue to Sossusvlei or Deadvlei take substantially longer.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring drinking water, a warm layer for the early morning, a hat, sunscreen, sunglasses and secure footwear. A camera is recommended for the changing colours and shadows.",
      },
      {
        question: "Are park fees included?",
        answer:
          "Not automatically. Confirm whether the tour rate includes the applicable national park fees and vehicle charges. List any exclusions clearly before payment.",
      },
      {
        question: "Can children join the excursion?",
        answer:
          "Children may be able to join, subject to the operator's age policy and the child's ability to manage the early start and sandy terrain. Climbing should be optional and supervised.",
      },
      {
        question: "Can the excursion include Deadvlei?",
        answer:
          "Yes, as part of a longer combination tour. Deadvlei requires additional travel and walking time, plus suitable transport arrangements for the final sandy section. Book a combined itinerary rather than assuming it is included in the sunrise excursion.",
      },
      {
        question: "What happens if weather or park access affects the trip?",
        answer:
          "The operator may adjust departure times or the itinerary in response to weather, road conditions or park restrictions. Rescheduling and refund terms depend on the confirmed supplier policy.",
      },
    ],
  },
  {
    slug: "sesriem-canyon-guided-tour",
    name: "Sesriem Canyon Guided Tour",
    category: "Nature & Scenic Tours",
    location: "Sesriem Canyon, Namib-Naukluft National Park",
    country: "Namibia",
    image: "/images/activities/sesriem-canyon-guided-tour.jpg",
    badge: "Geological Wonder",
    description:
      "Discover the remarkable rock formations and narrow passages of Sesriem Canyon on a guided exploration of one of Namibia's distinctive desert landscapes. Carved by the Tsauchab River over millions of years, the canyon reaches depths of approximately 30 metres and offers a striking contrast to the surrounding arid plains. Learn about its geological history, seasonal water flows and the origins of its name while exploring accessible sections on foot. This experience is ideal for travellers interested in nature, geology, photography and the landscapes of the Namib Desert.",
    rating: null,
    reviewCount: 0,
    duration: "2–3 hours",
    groupSize: "Private tour or small group; confirm supplier capacity",
    pickup:
      "Pickup from accommodation in Sesriem or nearby lodges, subject to location and supplier confirmation",
    highlights: [
      "Explore the dramatic rock walls and narrow passages of Sesriem Canyon",
      "Learn how the Tsauchab River shaped the canyon over millions of years",
      "Discover the origin of the name Sesriem and its connection to early settlers",
      "Enjoy photography opportunities among distinctive sedimentary rock formations",
      "Experience a cooler, shaded environment compared with the surrounding desert",
      "Combine the canyon visit with a Sossusvlei or Namib Desert excursion",
    ],
    itinerary: [
      {
        time: "00:00",
        title: "Meet your guide",
        description:
          "Meet at the agreed accommodation, Sesriem area meeting point or canyon parking area. Confirm the day's route, walking conditions and any applicable park entry arrangements.",
      },
      {
        time: "00:15",
        title: "Introduction to the canyon",
        description:
          "Begin with an overview of the canyon's location, the Tsauchab River and the geological processes that shaped this landscape. Your guide introduces the area's natural history and desert environment.",
      },
      {
        time: "00:30",
        title: "Guided canyon walk",
        description:
          "Explore accessible sections of the canyon on foot, observing the layered rock walls, narrow passages and evidence of erosion. The route and distance depend on conditions, mobility and the guide's safety assessment.",
      },
      {
        time: "01:15",
        title: "Geology, history and photography",
        description:
          "Pause at suitable viewpoints to learn about seasonal water flows, the canyon's formation and the traditional explanation behind its name. Allow time for photographs and questions.",
      },
      {
        time: "01:45",
        title: "Return and tour conclusion",
        description:
          "Walk back to the agreed meeting point. Guests continuing to Sossusvlei, Deadvlei or nearby dunes can coordinate onward arrangements with their tour operator.",
      },
    ],
    included: [
      "Guided canyon walk",
      "Local area and geological interpretation",
      "Time for photography and questions",
      "Pickup and drop-off only when explicitly confirmed in the booking",
    ],
    notIncluded: [
      "Namib-Naukluft National Park entry permits or conservation fees unless specified",
      "Private vehicle, fuel or transfers unless specified",
      "Meals, snacks and drinks",
      "Accommodation",
      "Travel insurance and personal expenses",
      "Additional excursions to Sossusvlei, Deadvlei or nearby dunes",
    ],
    information: [
      "Location: Sesriem Canyon, near the entrance area of Namib-Naukluft National Park, Namibia.",
      "Recommended timing: Early morning or later afternoon can offer more comfortable temperatures, subject to park access hours and the supplier's schedule.",
      "Walking conditions: The route may include uneven ground, loose gravel, rocks, narrow sections and changes in elevation. This is not a fully paved or universally accessible attraction.",
      "Footwear: Wear sturdy closed walking shoes with good grip.",
      "What to bring: Drinking water, sun protection, a hat, lightweight clothing and a camera.",
      "Fitness: A basic level of mobility is recommended. Guests should discuss mobility limitations with the operator before booking.",
      "Weather and water: The canyon is generally dry, but heavy rainfall can cause flash flooding in the wider catchment. Never enter during unsafe conditions or contrary to local guidance.",
      "Park access: Follow current Namibian park regulations, gate hours, permit requirements and instructions from authorities. Entry fees should be confirmed before travel because rates can change.",
      "Combination tours: The canyon can be paired with a Sossusvlei or wider Namib Desert itinerary, but travel time, park access and the day's schedule must be planned separately.",
      "Pricing status: The listed price is a draft estimate for catalogue development, not a verified supplier quotation. Confirm guide fees, transfers, group size, taxes and conservation charges before publishing a live offer.",
    ],
    meetingPoint: {
      name: "Sesriem Canyon parking area, Sesriem, Namibia",
      description:
        "Meet at the designated canyon parking area unless accommodation pickup has been confirmed. The operator must confirm the exact meeting instructions, access arrangements and whether a park permit or vehicle fee is payable.",
    },
    pricing: {
      adult: {
        amount: 40,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 20,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy: Cancellation terms depend on the confirmed supplier and booking conditions. Before payment, disclose the applicable cancellation deadline, refund rules, no-show policy and arrangements for unsafe weather or access restrictions. Any supplier-specific terms take precedence.",
    },
    faqs: [
      {
        question: "How long does the Sesriem Canyon tour take?",
        answer:
          "Allow approximately 2–3 hours for a guided visit, including interpretation, walking and photography. The duration may vary with the route, guest pace and starting point.",
      },
      {
        question: "Is Sesriem Canyon suitable for children?",
        answer:
          "It can suit families when children can manage uneven terrain under close adult supervision. The canyon includes rocky and narrow sections, so confirm the route and any minimum-age requirements with the operator.",
      },
      {
        question: "Do I need a park permit to visit Sesriem Canyon?",
        answer:
          "Entry requirements and fees depend on the current park rules and access arrangements. Confirm the applicable permit and vehicle charges before departure rather than assuming they are included in the tour price.",
      },
      {
        question: "Can this tour be combined with Sossusvlei and Deadvlei?",
        answer:
          "Yes, it can be included in a longer desert itinerary. The canyon visit is relatively short, but the dunes and pans require additional driving and walking time. Confirm the complete itinerary and access conditions with your operator.",
      },
      {
        question: "Will we see water in the canyon?",
        answer:
          "Not necessarily. Water levels depend on rainfall and seasonal conditions; the canyon is often dry, although pools may remain in some sections.",
      },
      {
        question: "What should I wear and bring?",
        answer:
          "Wear sturdy walking shoes and comfortable clothing, and bring drinking water, a hat, sunscreen and a camera. Conditions can be hot and exposed outside the canyon.",
      },
      {
        question: "Is the tour accessible to wheelchair users?",
        answer:
          "The natural terrain is uneven and includes rocky sections, so access may be limited. Contact the operator in advance to discuss mobility needs and the accessibility of the proposed route.",
      },
      {
        question: "Is transportation included?",
        answer:
          "Transportation is included only if stated in the confirmed booking. The standard draft product assumes a meeting at the canyon area unless pickup and drop-off are separately agreed.",
      },
    ],
  },
  {
    slug: "namib-desert-scenic-flight",
    name: "Namib Desert Scenic Flight",
    category: "Scenic Flights & Aerial Experiences",
    location: "Swakopmund, Namib Desert and Skeleton Coast",
    country: "Namibia",
    image: "/images/activities/namib-desert-scenic-helicopter-flight.jpg",
    badge: "Aerial Adventure",
    description:
      "Experience the extraordinary contrasts of Namibia's desert and Atlantic coastline on a scenic flight departing from Swakopmund Airport. Enjoy sweeping aerial views of the vast Namib sand sea, sculpted dunes, gravel plains and rugged coastal landscapes. Depending on the confirmed route and flying conditions, highlights may include the dune belt between Swakopmund and Walvis Bay, the remote Diamond Coast, shipwreck sites, seal colonies, Sandwich Harbour and coastal salt pans. A scenic flight offers a unique perspective on landscapes that can take many hours to explore by road, making it an excellent addition to a Namibia self-drive itinerary, coastal stay or luxury safari.",
    rating: null,
    reviewCount: 0,
    duration:
      "2–3 hours",
    groupSize:
      "Small aircraft; passenger capacity and per-person pricing depend on the aircraft and total booking",
    pickup:
      "Meet at Swakopmund Airport. Hotel transfers may be available at an additional cost, subject to supplier confirmation.",
    highlights: [
      "Admire the sweeping dunes of the Namib Desert from the air",
      "See the dramatic meeting point of the desert and Atlantic Ocean",
      "Enjoy aerial views of the remote Diamond Coast and selected shipwreck sites, depending on the route",
      "Look for coastal seal colonies and birdlife from the aircraft",
      "View Sandwich Harbour and the Walvis Bay salt pans if included on the selected route",
      "Capture distinctive aerial photographs of Namibia's contrasting landscapes",
    ],
    itinerary: [
      {
        time: "00:00",
        title: "Arrival and flight briefing",
        description:
          "Meet at Swakopmund Airport at the supplier's confirmed check-in time. Complete passenger registration, receive the safety briefing and review the planned route, aircraft arrangements and photography guidance.",
      },
      {
        time: "00:15",
        title: "Board the scenic aircraft",
        description:
          "Board the high-wing scenic aircraft with assistance from the flight crew. Seating is assigned according to aircraft configuration, passenger weight and operational requirements.",
      },
      {
        time: "00:25",
        title: "Fly over the Namib Desert",
        description:
          "Depart Swakopmund and head south over the coastal dune belt and desert terrain. Observe the changing colours, patterns and textures of the sand sea and surrounding gravel plains.",
      },
      {
        time: "00:45",
        title: "Explore the desert coastline from above",
        description:
          "Continue along the designated scenic route. Depending on the flight booked, the views may include coastal dunes, shipwreck locations, seal colonies, Sandwich Harbour or Walvis Bay's salt pans. Actual routing is determined by the operator and flying conditions.",
      },
      {
        time: "01:10",
        title: "Return to Swakopmund",
        description:
          "Turn back toward Swakopmund and enjoy the final aerial views before landing. The flight duration and route may vary with the specific product, wind, air traffic and operational requirements.",
      },
      {
        time: "01:20",
        title: "Disembark and conclude",
        description:
          "Disembark at the airport and continue with your own arrangements or a separately confirmed transfer to your accommodation.",
      },
    ],
    included: [
      "Scenic flight on the confirmed route",
      "Qualified flight crew and standard pre-flight safety briefing",
      "Passenger seat in the aircraft, subject to the confirmed booking",
      "Applicable aviation charges included in the supplier's confirmed quotation",
    ],
    notIncluded: [
      "Hotel pickup and drop-off unless confirmed",
      "Private aircraft charter unless specifically booked",
      "Meals, drinks and refreshments",
      "Accommodation and other excursions",
      "Personal travel insurance",
      "Optional photography or video packages, if offered separately",
      "Any additional fees not expressly included in the supplier's written quotation",
    ],
    information: [
      "Departure point: Swakopmund Airport, Namibia. Confirm the exact check-in location and reporting time with the operator.",
      "Flight product: This listing is intended for a roughly one-hour Namib Desert scenic flight. Longer Sossusvlei or Skeleton Coast routes are separate products and should be listed and priced independently.",
      "Route: The exact flight path and visible landmarks depend on the booked route, weather, wind, air traffic and operational decisions made by the pilot.",
      "Aircraft: Scenic flights commonly use high-wing aircraft designed to provide broad views of the landscape. Aircraft type, seating capacity and window access must be confirmed for each departure.",
      "Passenger numbers: Per-person rates may change according to the number of passengers sharing the aircraft. Confirm minimum passenger requirements, any shared-flight arrangements and private-charter options.",
      "Weight restrictions: Operators may apply individual passenger weight limits or request passenger weights in advance for aircraft balance and safety. Confirm the selected operator's requirements before accepting the booking.",
      "Children: Child eligibility, seating requirements and fares depend on the aircraft and operator. Confirm age restrictions and any required accompanying adult before booking.",
      "Weather: Flights are weather dependent and may be delayed, rerouted or cancelled for safety reasons. Explain the supplier's rescheduling and refund terms before payment.",
      "What to bring: Valid booking confirmation, sun protection, a light jacket and a camera or phone secured for flight. Follow crew instructions on electronic devices and photography.",
      "Accessibility: Aircraft steps, cabin dimensions and seating may limit accessibility for guests with reduced mobility. Confirm individual needs with the operator before confirming the reservation.",
      "Pricing status: The adult and child amounts below are draft catalogue estimates, not verified supplier rates. Obtain a current written quotation, including passenger-count bands, taxes, airport charges and cancellation terms, before publishing or selling.",
      "Supplier verification: Confirm the operator's current aviation authorisations, insurance, departure arrangements and exact route before accepting payment.",
    ],
    meetingPoint: {
      name: "Swakopmund Airport, Namibia",
      description:
        "Guests should report to the scenic-flight operator's designated check-in point at Swakopmund Airport at the time stated on their booking confirmation. The operator must provide exact directions, reporting time and passenger documentation requirements.",
    },
    pricing: {
      adult: {
        amount: 330,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 330,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Supplier-specific cancellation terms must be confirmed before booking. The policy should clearly state the cancellation deadline, refund or credit conditions, no-show rules and arrangements for weather-related cancellations, operational disruptions or minimum-passenger requirements. Do not promise a full refund or a replacement flight until the supplier's terms have been verified.",
    },
    faqs: [
      {
        question: "How long is the Namib Desert scenic flight?",
        answer:
          "This catalogue product is planned as an approximately one-hour flight. Longer routes over Sossusvlei or further along the Skeleton Coast are separate experiences with different durations and prices.",
      },
      {
        question: "Where does the scenic flight depart?",
        answer:
          "The proposed departure point is Swakopmund Airport. Confirm the exact check-in location and reporting time with the operator before travel.",
      },
      {
        question: "What can I see during the flight?",
        answer:
          "Depending on the booked route, you may see the Namib Desert dune belt, coastal desert, parts of the Diamond Coast, shipwreck sites, seal colonies, Sandwich Harbour or the Walvis Bay salt pans. No particular landmark or wildlife sighting is guaranteed.",
      },
      {
        question: "Is the flight suitable for first-time flyers?",
        answer:
          "Scenic flights are generally designed for sightseeing passengers, including first-time flyers. Guests should tell the operator about any concerns or relevant mobility needs and follow the crew's safety instructions.",
      },
      {
        question: "Can I book a private flight?",
        answer:
          "Private charter may be available, subject to aircraft and operator availability. The price is usually different from a shared flight and should be quoted separately.",
      },
      {
        question: "Are hotel transfers included?",
        answer:
          "Not by default. The draft product starts at Swakopmund Airport. Add hotel transfers only when the supplier confirms the service and price.",
      },
      {
        question: "What happens if the weather is unsuitable?",
        answer:
          "The operator may delay, reroute or cancel the flight for safety reasons. The available alternatives and refund arrangements depend on the supplier's written terms.",
      },
      {
        question: "How is the price calculated?",
        answer:
          "Scenic-flight rates can depend on the selected route and the number of passengers sharing the aircraft. Shungu Africa should confirm the current per-person rate, minimum passenger requirements and private-charter pricing before issuing a final quote.",
      },
    ],
  },
  {
    slug: "sossusvlei-hot-air-balloon-safari",
    name: "Sossusvlei Hot-Air Balloon Safari",
    category: "Adventure & Scenic Flights",
    location: "Sossusvlei, Sesriem, Namib-Naukluft National Park",
    country: "Namibia",
    image: "/images/activities/sossusvlei-hot-tair-balloon-safari.jpg",
    badge: "Signature Desert Experience",
    description:
      "Rise before dawn for an unforgettable hot-air balloon safari over the spectacular Namib Desert near Sossusvlei. Watch the first sunlight illuminate the vast dunes, rugged mountains and open desert plains as your balloon drifts quietly with the morning breeze. Following the flight, celebrate with a freshly prepared safari-style breakfast in the desert, often accompanied by sparkling wine, before returning by ground vehicle to the departure area. This premium experience is ideal for couples, photographers, special occasions and travellers seeking a memorable highlight on a Namibia itinerary. Flights are operated subject to weather, safety conditions and confirmed supplier availability.",
    rating: null,
    reviewCount: 0,
    duration:
      "3–4 hours",
    groupSize:
      "Shared balloon flight; minimum booking requirements and basket capacity subject to supplier confirmation",
    pickup:
      "Pre-dawn pickup from selected accommodation around Sesriem and Sossusvlei, subject to the operator's transfer network and confirmation",
    highlights: [
      "Watch the sunrise over the Namib Desert from a hot-air balloon",
      "Enjoy panoramic views of dunes, mountains and expansive desert plains",
      "Experience the quiet beauty of the desert from above",
      "Observe the changing colours and shadows across the landscape",
      "Celebrate the flight with a safari-style breakfast at the landing site",
      "Receive a flight certificate, subject to the operator's standard package",
      "Create a memorable experience for honeymoons, anniversaries and special occasions",
    ],
    itinerary: [
      {
        time: "Pre-dawn",
        title: "Early-morning pickup",
        description:
          "Meet the confirmed transfer vehicle at your designated lodge or collection point while it is still dark. Travel to the balloon operator's launch area near Sesriem. Exact pickup time depends on accommodation location and the sunrise schedule.",
      },
      {
        time: "Before sunrise",
        title: "Arrival and safety briefing",
        description:
          "Meet the balloon crew and pilot, receive the passenger safety briefing and observe the balloon being prepared and inflated. Follow all crew instructions when approaching and boarding the basket.",
      },
      {
        time: "Sunrise",
        title: "Take flight over the Namib",
        description:
          "Lift off as the desert begins to glow in the early morning light. Drift over the surrounding sand sea, open plains and mountain scenery, with the route determined by wind direction and the pilot's operational decisions.",
      },
      {
        time: "Approximately 1 hour after take-off",
        title: "Desert landing",
        description:
          "Land at a location selected according to the wind and operational conditions. The ground crew meets the balloon and assists passengers with disembarkation.",
      },
      {
        time: "After landing",
        title: "Safari-style breakfast",
        description:
          "Enjoy the operator's desert breakfast, typically featuring a selection of hot and cold foods, with sparkling wine or other beverages where provided. Dietary requirements should be requested in advance and confirmed by the supplier.",
      },
      {
        time: "Mid-morning",
        title: "Return transfer and conclusion",
        description:
          "Travel back by ground vehicle to the operator's base or designated return point. Your return time varies with the landing location, weather and operational arrangements.",
      },
    ],
    included: [
      "Approximately one-hour shared hot-air balloon flight",
      "Professional pilot and ground crew",
      "Pre-flight safety briefing",
      "Return ground transfer associated with the balloon operation, where included in the confirmed package",
      "Safari-style breakfast at the landing site",
      "Celebratory sparkling wine or equivalent, subject to the supplier's standard offering",
      "Flight certificate, subject to operator practice",
      "Applicable park or concession fees where expressly included in the confirmed supplier rate",
    ],
    notIncluded: [
      "Transfers from accommodation outside the operator's standard collection network unless confirmed",
      "Accommodation and other meals",
      "Additional activities such as dune excursions or guided Sossusvlei and Deadvlei visits",
      "Private balloon charter unless separately arranged",
      "Personal travel insurance",
      "Special dietary arrangements unless confirmed",
      "Personal expenses and gratuities",
      "Any fees or charges not expressly included in the supplier's written quotation",
    ],
    information: [
      "Departure area: The balloon safari operates in the Sossusvlei and Sesriem area of Namibia. The precise launch location can change with wind and operational conditions.",
      "Recommended season: Cooler months from approximately April to October are often favourable for comfortable desert conditions, although flights operate seasonally according to the supplier's schedule.",
      "Seasonal closure: Namib Sky Balloon Safaris publishes a closure on 25 December, 1 January and from 15 January to 15 February. Confirm the selected operator's current operating calendar before accepting a booking.",
      "Weather dependency: Flights are subject to wind and weather assessment by the pilot. A flight may be delayed or cancelled for safety reasons, including on the morning of departure.",
      "Booking advice: Reserve in advance, especially for peak travel periods. Confirm the passenger minimum, departure date, collection point and payment deadline with the operator.",
      "Accommodation planning: Guests staying for only one night in the Sesriem area may have no second opportunity if the flight is cancelled. Where practical, consider two nights in the area to allow flexibility, without guaranteeing a replacement flight.",
      "Child eligibility: Minimum age, height and other eligibility requirements must be confirmed with the selected operator. Do not assume that every child can safely or legally board.",
      "Passenger weights: The operator may request passenger weights for balloon loading and safety planning. Supply accurate information when requested and follow any applicable restrictions.",
      "Accessibility: Boarding and riding in a balloon basket requires physical movement and the ability to follow crew instructions. Discuss mobility or other access requirements with the operator before booking.",
      "What to wear: Dress in comfortable layers for cool pre-dawn conditions. Wear flat, secure footwear and bring sun protection and a camera. Avoid high heels and bulky luggage.",
      "Photography: Cameras and phones may be used only in accordance with the pilot's safety instructions. Secure loose equipment during the flight.",
      "Transport inclusions: Standard balloon packages may include transfers associated with the flight, but transport from every lodge is not guaranteed. Remote accommodation transfers can incur additional charges.",
      "Pricing status: The adult amount below reflects a published rate for the 2026–2027 season from 1 July 2026 to 30 June 2027. Confirm the current rate, minimum passenger requirement, transfer arrangements and package inclusions with the supplier before each sale.",
      "Operational verification: Confirm the licensed operator, flight date, weather-cancellation policy, refund conditions and any passenger eligibility requirements before issuing final booking confirmation.",
    ],
    meetingPoint: {
      name: "Namib Sky Balloon Safaris designated collection point, Sesriem area, Namibia",
      description:
        "Guests are normally collected before sunrise from selected accommodation or agreed collection points. The operator confirms the pickup time and location on the evening before the flight. Do not instruct guests to drive independently to the launch site unless the supplier has specifically arranged this.",
    },
    pricing: {
      adult: {
        amount: 645,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 645,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Supplier terms must be confirmed and communicated before payment. The policy should distinguish guest-initiated cancellations from operator cancellations caused by unsafe weather or other operational conditions. Confirm refund or credit eligibility, notice deadlines, transfer charges, no-show rules and whether a replacement date can be offered. Never guarantee a flight or refund outside the supplier's written terms.",
    },
    faqs: [
      {
        question: "How long does the Sossusvlei hot-air balloon safari take?",
        answer:
          "Allow approximately 3–4 hours for the complete experience, including pre-dawn transfers, preparation, around one hour in the air, breakfast and the return journey. The exact duration depends on the landing site and operating conditions.",
      },
      {
        question: "What is included in the balloon safari?",
        answer:
          "The standard experience generally includes a shared balloon flight, pilot and ground crew, breakfast after landing and associated transfers. Published packages may also include a flight certificate and applicable park or concession fees. Verify the exact inclusions for the booked supplier and departure.",
      },
      {
        question: "Is the flight guaranteed to operate?",
        answer:
          "No. Flights depend on suitable wind and weather conditions and the pilot's safety assessment. The operator may cancel or delay a departure even after guests have arrived at the launch area.",
      },
      {
        question: "When is the best time to go ballooning?",
        answer:
          "Flights are offered seasonally, with the cooler months from April to October often providing comfortable conditions. The operating calendar and daily weather determine whether a flight can proceed.",
      },
      {
        question: "Can children take part?",
        answer:
          "Possibly, but the selected operator's age, height and safety requirements must be checked before booking. The published standard rate should not be treated as confirmation that a child is eligible to fly.",
      },
      {
        question: "Where will the balloon land?",
        answer:
          "The landing location depends on wind direction and the pilot's decisions. A ground crew follows the balloon and meets passengers at the landing site before the breakfast and return transfer.",
      },
      {
        question: "Is breakfast included?",
        answer:
          "A safari-style breakfast is a standard feature of the Namib Sky experience. Confirm the menu, beverages and arrangements for dietary requirements with the operator in advance.",
      },
      {
        question: "What happens if the flight is cancelled due to weather?",
        answer:
          "The operator's cancellation policy determines whether guests receive a refund, credit or alternative date. Guests with flexible itineraries may have a better chance of rescheduling, but a replacement flight cannot be guaranteed.",
      },
      {
        question:
          "Can the balloon safari be combined with Sossusvlei and Deadvlei?",
        answer:
          "Yes, it can be incorporated into a wider desert itinerary. Because the balloon experience occupies the early morning, plan the day's driving, park access and visits to the dunes and pans around the confirmed return time.",
      },
      {
        question: "How much does the balloon safari cost?",
        answer:
          "The published Namib Sky rate for 1 July 2026 to 30 June 2027 converts to approximately USD 645.19 per person using 9 October 2026 reference exchange rates. Published rate information states a minimum of two passengers. Confirm current pricing and all transfer arrangements before issuing a quote.",
      },
    ],
  },
  {
    slug: "swakopmund-desert-living-tour",
    name: "Swakopmund Living Desert Tour",
    category: "Nature & Wildlife Experiences",
    location: "Coastal Dune Belt, between Swakopmund and Walvis Bay",
    country: "Namibia",
    image: "/images/activities/swakopmund-living-desert-tour.jpg",
    badge: "Discover the Little Five",
    description:
      "Discover the remarkable wildlife hidden within Namibia's coastal dunes on a guided Living Desert Tour from Swakopmund. Travel by 4x4 through the dune belt with an experienced desert guide who reveals the tracks, burrows and survival adaptations of the Namib's small inhabitants. Search for fascinating creatures such as the Namaqua chameleon, web-footed gecko, shovel-snouted lizard, sidewinder snake, beetles and other desert-adapted species. Along the way, learn how fog, sand and specialised animal behaviour sustain life in this seemingly barren environment. With scenic dune stops, wildlife interpretation and opportunities for close-up photography, this educational half-day excursion is ideal for families, nature lovers and curious travellers. Wildlife sightings are not guaranteed, and responsible observation is prioritised throughout.",
    rating: null,
    reviewCount: 0,
    duration: "4–5 hours",
    groupSize:
      "Small shared group; minimum 2 adults for the standard morning departure, subject to supplier confirmation",
    pickup:
      "Hotel or guesthouse pickup and drop-off in Swakopmund, subject to the confirmed operator's service area",
    highlights: [
      "Search for the Namib Desert's famous Little Five and other small wildlife",
      "Learn to identify animal tracks and burrows in the sand",
      "Discover how desert creatures survive extreme temperatures and scarce water",
      "Explore the coastal dune belt in a 4x4 vehicle",
      "Photograph unique reptiles, insects and striking dune landscapes",
      "Learn about the Namib's fragile ecosystem from an experienced local guide",
      "Enjoy scenic viewpoints overlooking the dunes and Atlantic coastline",
      "Experience a conservation-focused excursion suitable for a wide range of ages",
    ],
    itinerary: [
      {
        time: "08:00",
        title: "Accommodation pickup",
        description:
          "Meet your guide and 4x4 vehicle at your confirmed Swakopmund accommodation. After introductions and a short briefing, travel toward the coastal dune belt between Swakopmund and Walvis Bay. Exact pickup times may vary by operator and accommodation location.",
      },
      {
        time: "08:30",
        title: "Enter the coastal dune environment",
        description:
          "Begin exploring the desert landscape while your guide introduces its geology, climate, vegetation and ecological importance. Learn how coastal fog helps sustain life in this arid region.",
      },
      {
        time: "09:00",
        title: "Track the Little Five",
        description:
          "Search for animal footprints, burrows and other signs of nocturnal activity. Your guide explains how to locate and identify desert-adapted creatures, which may include geckos, beetles, lizards, spiders, snakes and chameleons.",
      },
      {
        time: "10:15",
        title: "Wildlife interpretation and photography",
        description:
          "Pause at suitable locations to observe wildlife when found and learn about camouflage, movement across loose sand, temperature regulation and water conservation. Sightings depend on natural conditions and cannot be guaranteed.",
      },
      {
        time: "11:00",
        title: "Scenic dune drive and refreshments",
        description:
          "Continue through authorised sections of the dune area, stopping for photographs and refreshments. The guide may demonstrate how wind shapes the dunes and creates different patterns across the landscape.",
      },
      {
        time: "12:00",
        title: "Return to Swakopmund",
        description:
          "Travel back to town and conclude the excursion with hotel or guesthouse drop-off where included. The exact return time depends on wildlife activity, group pace and operating conditions.",
      },
    ],
    included: [
      "Guided Living Desert wildlife experience",
      "4x4 transport during the excursion",
      "Professional desert guide",
      "Drinking water and soft drinks",
      "Light snacks or refreshments, subject to the selected supplier's package",
      "Hotel pickup and drop-off within the confirmed Swakopmund service area",
      "Applicable conservation or park fees only where expressly included in the supplier quotation",
    ],
    notIncluded: [
      "Breakfast and lunch",
      "Pickup from accommodation outside the agreed service area unless arranged",
      "Private vehicle or exclusive tour unless specifically booked",
      "Additional excursions such as Sandwich Harbour or the Moon Landscape",
      "Accommodation and other personal travel expenses",
      "Travel insurance",
      "Gratuities",
      "Any fees not explicitly included in the confirmed booking",
    ],
    information: [
      "Tour area: The coastal dune belt between Swakopmund and Walvis Bay, in the wider Dorob National Park environment.",
      "Departure: The standard morning departure is around 08:00, with a typical return around 12:00–13:00. Exact times depend on the selected operator.",
      "Afternoon departures: Some operators may offer afternoon tours subject to weather, minimum passenger numbers and availability. These must be confirmed before sale.",
      "Wildlife sightings: This is a wildlife-tracking experience rather than a zoo or guaranteed animal encounter. Sightings depend on temperature, wind, recent conditions and the animals' natural behaviour.",
      "Conservation: Follow the guide's instructions and remain within authorised driving areas. Do not remove animals, plants or other natural material, and do not handle wildlife without the guide's explicit direction.",
      "Terrain: Guests may walk short distances over soft sand and uneven ground. A basic level of mobility is helpful, but the experience is generally considered easy.",
      "What to bring: Closed walking shoes, a hat, sunglasses, sunscreen, a camera or phone, and a warm layer for cool or windy coastal conditions.",
      "Children: The tour is family-friendly, but children must remain supervised. Confirm child age bands, seat requirements and applicable rates with the selected operator.",
      "Group size: Shared departures may use one or more 4x4 vehicles. Confirm maximum group size, minimum departure numbers and whether a private tour is available.",
      "Weather: Wind, fog, temperature and local conditions may affect the route, wildlife sightings and departure arrangements.",
      "Accessibility: Soft sand, vehicle access and uneven terrain may limit accessibility. Discuss mobility requirements with the operator before confirming the booking.",
      "Combination tours: This activity can be paired with a Sandwich Harbour excursion, subject to the operator's itinerary, available daylight, transfer logistics and confirmed combination rate.",
      "Pricing status: The prices below are based on published 2026 rates from a local Living Desert Tour operator. Verify the selected supplier, applicable taxes, inclusions and any changes to rates before publishing a live offer.",
      "Payment and cancellation: Some operators require cash payment or a pre-payment link and apply full charges to late cancellations or no-shows. Confirm the selected supplier's payment method and written cancellation terms before collecting payment.",
    ],
    meetingPoint: {
      name: "Guest accommodation in Swakopmund, Namibia",
      description:
        "Pickup is normally arranged at the guest's hotel or guesthouse in Swakopmund. Guests staying outside the usual pickup area should receive a confirmed alternative meeting point and time from the operator before the excursion.",
    },
    pricing: {
      adult: {
        amount: 60,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 33,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Draft policy based on published operator terms: cancellations made more than 24 hours before departure may be accepted without a cancellation charge by some operators. Cancellations within 24 hours and no-shows may incur the full tour cost. Group bookings may have an earlier cancellation deadline. Confirm the selected supplier's written terms, payment requirements, weather arrangements and refund conditions before booking.",
    },
    faqs: [
      {
        question: "What is the Living Desert Tour?",
        answer:
          "It is a guided 4x4 and short-walk experience in the coastal dunes near Swakopmund, focused on discovering small desert-adapted wildlife and learning how these species survive in the Namib.",
      },
      {
        question: "Which animals might we see?",
        answer:
          "Possible sightings include Namaqua chameleons, web-footed geckos, shovel-snouted lizards, sidewinder snakes, beetles, spiders and other small desert creatures. Sightings are not guaranteed.",
      },
      {
        question: "How long does the tour last?",
        answer:
          "Allow approximately 4–5 hours, including transfers from Swakopmund, wildlife tracking, scenic stops and refreshments.",
      },
      {
        question: "Is the tour suitable for children?",
        answer:
          "Yes, it is generally suitable for families. Children should remain under adult supervision, and parents should confirm the selected operator's age, seating and pricing requirements.",
      },
      {
        question: "Is hotel pickup included?",
        answer:
          "Pickup and drop-off are normally offered for accommodation within Swakopmund. Guests staying outside the standard service area may need to meet at an agreed location or pay an additional transfer charge.",
      },
      {
        question: "Will we definitely see the Little Five?",
        answer:
          "No. The guide uses tracks, burrows and knowledge of animal behaviour to improve the chances of sightings, but the animals live freely in their natural habitat.",
      },
      {
        question: "What should I wear?",
        answer:
          "Wear comfortable clothing, closed walking shoes, a hat and sunscreen. A warm layer is useful because coastal mornings can be cool and windy.",
      },
      {
        question: "Does the tour include food and drinks?",
        answer:
          "Drinking water, soft drinks and light refreshments are commonly included. Breakfast and lunch are generally not included, so guests should eat beforehand and plan their own lunch.",
      },
      {
        question: "Can this tour be combined with Sandwich Harbour?",
        answer:
          "Yes. Some operators sell a combined Living Desert and Sandwich Harbour excursion with a longer duration and lunch. Confirm the exact itinerary, price and inclusions before booking.",
      },
      {
        question: "How much does the tour cost?",
        answer:
          "The draft catalogue price uses USD equivalents of approximately USD 60.19 per person aged 13 and above and USD 33.10 per child aged 12 and under, converted from published 2026 rates using 9 October 2026 reference exchange rates. Confirm current supplier rates before issuing a quotation.",
      },
    ],
  },
  {
    slug: "walvis-bay-dolphin-and-seal-cruise",
    name: "Walvis Bay Dolphin & Seal Cruise",
    category: "Marine Wildlife & Boat Cruises",
    location: "Walvis Bay Waterfront, Pelican Point and Walvis Bay Lagoon",
    country: "Namibia",
    image: "/images/activities/walvis-bay-dolphin-and-seal-cruise.jpg",
    badge: "Marine Wildlife Experience",
    description:
      "Discover Namibia's remarkable Atlantic marine life on a guided dolphin and seal cruise from the Walvis Bay Waterfront. Board a comfortable motorised or sailing catamaran and explore the sheltered bay, passing oyster farms, coastal bird habitats and the iconic Pelican Point Lighthouse. Watch for Cape fur seals, playful dolphins and seabirds while your crew shares insights into the region's marine ecosystem. Depending on the route and season, you may also encounter whales, ocean sunfish or turtles. Many cruises include refreshments, fresh oysters and sparkling wine, creating a relaxed combination of wildlife viewing and coastal hospitality. This half-day experience is ideal for couples, families, photographers and travellers exploring Namibia's Atlantic coast. Wildlife sightings are never guaranteed, as animals remain in their natural environment.",
    rating: null,
    reviewCount: 0,
    duration: "4 hours",
    groupSize:
      "Shared catamaran cruise; vessel capacity and minimum passenger requirements depend on the operator",
    pickup:
      "Meet at the operator's check-in office at Walvis Bay Waterfront. Transfers from Swakopmund or nearby accommodation may be available at an additional cost.",
    highlights: [
      "Look for bottlenose and Heaviside's dolphins in Walvis Bay",
      "Observe Cape fur seals around Pelican Point",
      "Cruise past oyster farms and the Pelican Point Lighthouse",
      "Watch pelicans, cormorants, gulls and other coastal birdlife",
      "Learn about Namibia's marine ecosystem from an experienced crew",
      "Enjoy onboard refreshments, with oysters and sparkling wine on applicable packages",
      "Look for migrating whales between approximately July and November",
      "Experience the Atlantic coastline from a comfortable catamaran",
    ],
    itinerary: [
      {
        time: "08:15",
        title: "Check-in at Walvis Bay Waterfront",
        description:
          "Arrive at the confirmed operator's waterfront office for registration and boarding instructions. The crew provides an overview of the cruise, expected conditions and onboard safety procedures. Check-in time varies by supplier.",
      },
      {
        time: "08:30",
        title: "Depart into Walvis Bay",
        description:
          "Board the catamaran and begin cruising through the bay. Enjoy views of the harbour, lagoon and coastal landscape while the crew introduces the region's marine wildlife and birdlife.",
      },
      {
        time: "09:00",
        title: "Explore oyster farms and coastal waters",
        description:
          "Continue past oyster farming areas and other features of the bay. Watch for dolphins surfacing near the vessel and seabirds flying overhead. The skipper adjusts the route according to conditions and wildlife activity.",
      },
      {
        time: "09:45",
        title: "Pelican Point and seal colony",
        description:
          "Cruise toward Pelican Point and its lighthouse, an important landmark beside a large Cape fur seal colony. Observe seals from the boat and learn about their behaviour and coastal habitat.",
      },
      {
        time: "10:30",
        title: "Marine wildlife viewing and refreshments",
        description:
          "Continue searching for dolphins and other marine wildlife. During the whale season, keep watch for migrating whales. Enjoy the refreshments included in the selected package, which may feature oysters, sparkling wine, hot drinks, snacks and soft drinks.",
      },
      {
        time: "11:30",
        title: "Return cruise to the waterfront",
        description:
          "Begin the return journey through the bay, with further opportunities to photograph the coastline and seabirds. The crew may provide additional commentary on local conservation and marine life.",
      },
      {
        time: "12:00",
        title: "Disembark and conclude",
        description:
          "Return to the Walvis Bay Waterfront and disembark. Guests using pre-arranged transfers can continue to Swakopmund or their accommodation according to the confirmed transport schedule.",
      },
    ],
    included: [
      "Shared catamaran cruise of approximately 4 hours",
      "Professional skipper and crew",
      "Onboard marine wildlife interpretation",
      "Standard safety briefing and required onboard safety equipment",
      "Refreshments according to the confirmed operator package",
      "Oysters and sparkling wine where included in the selected package",
      "Applicable marine, park or concession fees where expressly included in the supplier quotation",
    ],
    notIncluded: [
      "Transfers between Swakopmund and Walvis Bay unless confirmed",
      "Hotel pickup and drop-off unless expressly included",
      "Beach lunch or barbecue unless a premium package is booked",
      "Private catamaran charter",
      "Additional excursions such as Sandwich Harbour 4x4 tours",
      "Accommodation and meals outside the cruise package",
      "Personal travel insurance",
      "Gratuities and personal expenses",
      "Any supplier charges not specified in the confirmed booking",
    ],
    information: [
      "Departure location: Walvis Bay Waterfront, Namibia. The exact check-in office and boarding jetty depend on the selected operator.",
      "Standard departure: Many shared cruises check in around 08:15–08:30 and depart around 08:30–09:00, returning around 12:00–12:30. Confirm the actual schedule on the booking date.",
      "Wildlife: Common sightings can include Cape fur seals, bottlenose dolphins, Heaviside's dolphins and coastal seabirds. Whales, ocean sunfish and turtles are less predictable and cannot be guaranteed.",
      "Whale season: Migrating whales may be seen approximately from July to November, although timing and sightings vary from year to year.",
      "Weather: The Atlantic coast can be cold, windy and changeable even on sunny days. Departures may be delayed, modified or cancelled for safety reasons.",
      "What to wear: Bring a warm jacket, comfortable flat shoes, sun protection and a camera. Secure loose items when on deck.",
      "Food and drinks: Inclusions vary by operator. Standard cruises may provide hot drinks, water, snacks, oysters and sparkling wine, while beach lunch or barbecue experiences are separate premium products.",
      "Dietary needs: Notify the operator of allergies, dietary requirements or other food restrictions when booking and obtain confirmation before departure.",
      "Children: Child fares, minimum ages and infant policies differ by operator. Confirm the correct age band and whether children under four travel free before quoting.",
      "Accessibility: Some operators can accommodate guests who require physical assistance, but boarding arrangements differ by vessel. Discuss mobility requirements with the operator in advance.",
      "Transfers: Transport from Swakopmund, Long Beach or other accommodation may be available for an additional fee. Confirm collection times, return transfers and any minimum passenger requirements.",
      "Marine conservation: Wildlife is observed in its natural habitat. Sightings, proximity and the route depend on animal behaviour, weather and skipper decisions.",
      "Pricing status: The prices below use a published 2026 rate from Catamaran Charters as a reference. Shungu Africa should verify the selected supplier's current rate, taxes, inclusions and child conditions before publishing a live offer.",
      "Supplier selection: Compare the standard marine cruise with premium beach-lunch packages before confirming the product, as duration, catering and pricing can differ significantly.",
    ],
    meetingPoint: {
      name: "Walvis Bay Waterfront, operator's designated check-in office",
      description:
        "Guests should arrive at the specific waterfront office stated on their booking confirmation, usually 15–30 minutes before departure. The selected operator must confirm the exact check-in point, boarding jetty and reporting time.",
    },
    pricing: {
      adult: {
        amount: 87,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 48,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Confirm the selected operator's written cancellation terms before taking payment. The policy should specify guest cancellation deadlines, late cancellation and no-show charges, weather-related cancellations, refund or credit arrangements, and whether an alternative departure can be offered. Do not guarantee a refund or replacement cruise beyond the supplier's confirmed terms.",
    },
    faqs: [
      {
        question: "How long does the Walvis Bay Dolphin & Seal Cruise last?",
        answer:
          "Most standard cruises last approximately 3–3.5 hours on the water, with around 3.5–4 hours allowed for check-in and the complete experience.",
      },
      {
        question: "Which animals can I see?",
        answer:
          "Common sightings include Cape fur seals, bottlenose dolphins, Heaviside's dolphins and seabirds. Whales may appear during the migration season, and ocean sunfish or turtles are possible but less predictable. No wildlife encounter is guaranteed.",
      },
      {
        question: "When is the best time to see whales?",
        answer:
          "Migrating whales may be seen between approximately July and November. Actual sightings depend on the year, weather and animal movements.",
      },
      {
        question: "Are oysters and sparkling wine included?",
        answer:
          "Many operators include fresh oysters and sparkling wine alongside other refreshments, but inclusions vary. Check the selected package before advertising these items as guaranteed.",
      },
      {
        question: "Is the cruise suitable for children?",
        answer:
          "Yes, many operators welcome families. Child prices and policies vary, so confirm the child's age band and any infant requirements when booking.",
      },
      {
        question: "Where does the cruise depart?",
        answer:
          "The cruise departs from the Walvis Bay Waterfront. Guests must use the specific check-in office and jetty confirmed by their operator.",
      },
      {
        question: "Can I be picked up from Swakopmund?",
        answer:
          "Transfers can often be arranged for an additional charge. Confirm the pickup location, departure time, return transport and cost before booking.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring a warm jacket, flat comfortable shoes, sunscreen, a hat and a camera. Coastal conditions can be chilly and windy, so dress in layers.",
      },
      {
        question: "Can the cruise be combined with Sandwich Harbour?",
        answer:
          "Yes. Several operators offer full-day packages combining the morning marine cruise with an afternoon 4x4 excursion to Sandwich Harbour. These have different prices, durations and inclusions and should be sold as a separate package.",
      },
      {
        question: "How much does the cruise cost?",
        answer:
          "The reference price used here is approximately USD 87 per adult and USD 48 per child aged 4–12, converted from a published 2026 Catamaran Charters rate using 9 October 2026 reference exchange rates. Confirm current pricing and package inclusions with your contracted supplier before issuing a quotation.",
      },
    ],
  },
  {
    slug: "sandwich-harbour-4x4-excursion",
    name: "Sandwich Harbour 4x4 Excursion",
    category: "Adventure & Nature Tours",
    location: "Sandwich Harbour, Namib-Naukluft National Park, near Walvis Bay",
    country: "Namibia",
    image: "/images/activities/sandwich-habour-excursion.jpg",
    badge: "Desert Meets the Atlantic",
    description:
      "Explore one of Namibia's most extraordinary coastal landscapes on a guided 4x4 excursion to Sandwich Harbour, where towering Namib Desert dunes meet the Atlantic Ocean. Departing from Walvis Bay, travel through the coastal desert and around the Walvis Bay Lagoon, with opportunities to observe flamingos and other wetland birds. Continue through the Kuiseb River Delta and across spectacular dune terrain with an experienced local guide at the wheel. Depending on tides, weather and access conditions, the journey may reach the Sandwich Harbour Lagoon, a remarkable wetland framed by dunes and ocean. Enjoy scenic stops, wildlife interpretation and photography opportunities throughout this memorable desert adventure. The route is carefully selected according to tidal conditions and authorised access requirements.",
    rating: null,
    reviewCount: 0,
    duration: "4–5 hours",
    groupSize:
      "Shared guided 4x4 vehicle; minimum passenger numbers and vehicle capacity depend on the operator",
    pickup:
      "Meet at the confirmed operator's office at Walvis Bay Waterfront. Swakopmund accommodation transfers may be available for an additional fee.",
    highlights: [
      "Experience the dramatic meeting point of the Namib dunes and the Atlantic Ocean",
      "Explore coastal desert terrain in a specialised 4x4 vehicle",
      "Visit viewpoints overlooking Sandwich Harbour Lagoon, subject to tides and access",
      "Observe flamingos and other birdlife around Walvis Bay Lagoon",
      "Travel through the Kuiseb River Delta and surrounding desert landscapes",
      "Stop for panoramic photography among towering dunes",
      "Look for oryx, springbok, ostriches and other desert-adapted wildlife",
      "Learn about the area's ecology, coastal environment and conservation",
      "Enjoy refreshments and scenic breaks according to the selected supplier package",
    ],
    itinerary: [
      {
        time: "08:00",
        title: "Check-in and departure briefing",
        description:
          "Meet at the confirmed Walvis Bay departure point, usually 15–30 minutes before departure. Meet your guide, review the safety briefing and learn how tide levels and coastal conditions influence the day's route.",
      },
      {
        time: "08:30",
        title: "Explore Walvis Bay Lagoon",
        description:
          "Begin the drive with a stop near Walvis Bay Lagoon, an important wetland habitat for flamingos and other coastal birds. Enjoy birdwatching and photography when conditions and wildlife activity permit.",
      },
      {
        time: "09:00",
        title: "Travel through the coastal desert",
        description:
          "Continue through the salt works and surrounding desert landscape toward the Kuiseb River Delta. Your guide explains the area's geography, ecology and the role of the river system in this arid environment.",
      },
      {
        time: "09:45",
        title: "Enter the dune landscape",
        description:
          "Follow authorised routes through the coastal dunes in a specialist 4x4 vehicle. Enjoy scenic stops and learn how wind, sand and the Atlantic have shaped this dramatic landscape.",
      },
      {
        time: "10:30",
        title: "Sandwich Harbour viewpoints",
        description:
          "Where tides, weather and access allow, continue toward Sandwich Harbour Lagoon and suitable coastal viewpoints. The guide selects safe stopping points according to the day's conditions; reaching the lagoon itself cannot be guaranteed.",
      },
      {
        time: "11:15",
        title: "Refreshments and photography",
        description:
          "Pause for refreshments and photographs overlooking the dunes or coastline. Food and beverage inclusions depend on the confirmed package.",
      },
      {
        time: "12:00",
        title: "Return to Walvis Bay",
        description:
          "Begin the return journey through the authorised route, with further stops where time and conditions permit.",
      },
      {
        time: "12:30",
        title: "Tour conclusion",
        description:
          "Return to the confirmed Walvis Bay drop-off point. Guests with pre-arranged transfers to Swakopmund can continue according to the agreed transport schedule.",
      },
    ],
    included: [
      "Guided half-day 4x4 excursion",
      "Professional driver-guide",
      "Specialist 4x4 transport during the excursion",
      "Scenic and wildlife-viewing stops",
      "Refreshments, snacks and drinks where included in the selected supplier package",
      "Park permits and concession fees only where expressly included in the confirmed quotation",
    ],
    notIncluded: [
      "Transfers from Swakopmund or accommodation outside the agreed pickup area unless confirmed",
      "Full-day excursion or premium beach barbecue unless specifically booked",
      "Private vehicle or exclusive departure unless arranged",
      "Meals beyond the selected package inclusions",
      "Accommodation and other excursions",
      "Personal travel insurance",
      "Gratuities and personal expenses",
      "Any permit, concession or other charge not expressly included in the confirmed supplier quotation",
    ],
    information: [
      "Departure point: Walvis Bay Waterfront, Namibia. The exact operator office and check-in location must be supplied on the booking confirmation.",
      "Tour format: This catalogue entry represents the standard half-day guided 4x4 excursion. Full-day, sunset, shipwreck and marine-combination experiences should be sold as separate products with their own rates and inclusions.",
      "Tidal access: Reaching Sandwich Harbour Lagoon or driving along the narrow coastal strip depends on tides, surf, weather and the operator's safety assessment. A lagoon visit cannot be guaranteed.",
      "Permits: Sandwich Harbour is within the Namib-Naukluft National Park, and access to this area requires the appropriate permit arrangements. Confirm that the operator has secured the necessary permissions and whether fees are included.",
      "Vehicle requirements: This is a specialist off-road excursion. Guests should not attempt the dune or coastal route in a standard rental vehicle or independently unless explicitly authorised and properly equipped.",
      "Wildlife: Possible sightings include flamingos, other waterbirds, oryx, springbok, ostriches and jackals. Animals live freely in their natural habitat, and sightings are not guaranteed.",
      "Departure times: Morning and afternoon departures are commonly offered. Exact start times may be adjusted according to tides, weather, season and supplier operations.",
      "Weather: Coastal winds, fog, surf and shifting sand can affect the route and visibility. The operator may change the itinerary or cancel the excursion for safety reasons.",
      "What to bring: Sun protection, a hat, sunglasses, a camera, comfortable clothing and a warm layer. Flat, secure footwear is recommended.",
      "Walking: Most stops involve optional short walks on sand or uneven ground. Inform the operator in advance about mobility needs or any requirement for physical assistance.",
      "Children: Child fares, car-seat availability and minimum age rules depend on the operator. Confirm requirements and vehicle seating before accepting a family booking.",
      "Food and drinks: Some half-day packages include light refreshments, while others offer more substantial meals or a beach barbecue. Confirm the exact catering package, dietary requirements and beverage inclusions.",
      "Transfers: Hotel pickup in Swakopmund may incur an additional charge. Confirm collection time, return transport and any minimum passenger requirements before sale.",
      "Pricing status: The adult and child amounts below use a published 2026 half-day rate as a reference. Verify the selected operator's current rate, child age bands, minimum passenger count, permit fees and package inclusions before issuing a quote.",
      "Conservation: Follow the guide's instructions, stay within authorised routes and do not disturb wildlife, vegetation or sensitive dune habitats.",
    ],
    meetingPoint: {
      name: "Walvis Bay Waterfront, Namibia",
      description:
        "Guests should check in at the specific tour operator's office at the Walvis Bay Waterfront at the time stated in the booking confirmation. Confirm the exact location, check-in time, pickup arrangements and return point before travel.",
    },
    pricing: {
      adult: {
        amount: 186,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 132,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Confirm the contracted operator's written cancellation policy before taking payment. The policy should state guest cancellation deadlines, late cancellation and no-show charges, weather or tide-related changes, refund or credit arrangements and any minimum-passenger requirements. If conditions prevent access to the lagoon, the operator may use a safe alternative route or viewpoint rather than guaranteeing a specific destination.",
    },
    faqs: [
      {
        question: "What is Sandwich Harbour?",
        answer:
          "Sandwich Harbour is a remarkable coastal wetland and dune landscape south of Walvis Bay, where the Namib Desert meets the Atlantic Ocean. It is known for its scenery, birdlife and environmentally sensitive coastal habitat.",
      },
      {
        question: "How long does the 4x4 excursion take?",
        answer:
          "The standard half-day excursion generally takes around 4–5 hours, depending on the departure time, tides, weather and route. Full-day and combination packages take longer.",
      },
      {
        question: "Will the vehicle reach Sandwich Harbour Lagoon?",
        answer:
          "Not always. Access depends on tides, surf, weather and the guide's safety assessment. The operator may instead use authorised dune viewpoints or an alternative route.",
      },
      {
        question: "Can I drive to Sandwich Harbour myself?",
        answer:
          "This is a permit-controlled, technically demanding coastal and dune route. Book with an appropriately authorised specialist operator rather than attempting the route in a standard rental vehicle.",
      },
      {
        question: "Which animals might I see?",
        answer:
          "Possible sightings include flamingos, other coastal birds, oryx, springbok, ostriches and jackals. Wildlife sightings are not guaranteed.",
      },
      {
        question: "Are park permits included?",
        answer:
          "Some operators include applicable park or concession fees, while others may list them separately. Confirm the inclusions in writing before booking.",
      },
      {
        question: "Is lunch included?",
        answer:
          "Not necessarily. Standard half-day trips may include light snacks and drinks, while certain premium packages offer a substantial beach barbecue. Confirm the exact menu and package.",
      },
      {
        question: "Can the tour depart from Swakopmund?",
        answer:
          "The standard meeting point is generally in Walvis Bay. Swakopmund pickup may be arranged for an additional charge, depending on the operator.",
      },
      {
        question: "What should I wear?",
        answer:
          "Wear comfortable clothing, flat shoes, sunglasses and sun protection. A warm layer is useful because the coastal wind can make mornings feel cool.",
      },
      {
        question: "How much does the half-day excursion cost?",
        answer:
          "The reference price in this draft is approximately USD 186 per adult and USD 132 per child aged 4–12, converted from a published 2026 Sandwich Harbour 4x4 rate using 9 October 2026 reference exchange rates. Confirm the current rate, minimum passenger requirements and inclusions with the contracted supplier.",
      },
    ],
  },
  {
    slug: "etosha-national-park-guided-game-drive",
    name: "Etosha National Park Guided Game Drive",
    category: "Wildlife Safaris & Game Drives",
    location: "Etosha National Park, northern Namibia",
    country: "Namibia",
    image: "/images/activities/etosha-national-park-guided-game-drive.jpg",
    badge: "Big Game Safari",
    description:
      "Explore the wildlife-rich landscapes of Etosha National Park on a guided safari drive with an experienced local guide. Travel through open savannah, mopane woodland and the vast salt pan in search of Namibia's remarkable wildlife. Depending on the season, route and luck, sightings may include elephants, lions, giraffes, zebras, springbok, oryx, wildebeest, hyenas and a variety of bird species. Visit natural and managed waterholes where animals may gather, particularly during the dry season, while your guide explains animal behaviour, tracks and the ecology of this unique environment. Choose a morning or full-day shared game drive for a memorable introduction to one of southern Africa's most celebrated wildlife destinations.",
    rating: null,
    reviewCount: 0,
    duration:
      "5–6 hours",
    groupSize:
      "Shared open safari vehicle; minimum passenger numbers and vehicle capacity depend on the selected operator",
    pickup:
      "Pickup from selected lodges and camps near Etosha, subject to the operator's service area. Some departures begin directly at the lodge or designated park gate.",
    highlights: [
      "Search for elephants, lions, giraffes, zebras and antelope",
      "Explore Etosha's diverse savannah, woodland and salt-pan landscapes",
      "Visit wildlife waterholes and observe natural animal behaviour",
      "Learn about animal tracks, habitats and conservation from a knowledgeable guide",
      "Enjoy photography opportunities from a dedicated safari vehicle",
      "Discover the changing wildlife patterns between wet and dry seasons",
      "Choose a morning or full-day guided safari",
      "Experience one of Namibia's premier national park destinations",
    ],
    itinerary: [
      {
        time: "Before sunrise",
        title: "Early-morning pickup and briefing",
        description:
          "Meet your guide at the confirmed lodge, camp or collection point. Receive a short safety briefing, check the day's route and depart in time for park entry according to the applicable gate opening schedule.",
      },
      {
        time: "Early morning",
        title: "Enter Etosha National Park",
        description:
          "Enter through the designated gate and begin exploring the park's gravel roads, open plains and woodland. Your guide explains the landscape and looks for fresh tracks, animal movement and promising wildlife-viewing areas.",
      },
      {
        time: "Morning",
        title: "Waterhole and wildlife viewing",
        description:
          "Visit selected waterholes and wildlife areas in search of elephants, giraffes, zebras, antelope, lions and other species. Sightings depend on natural conditions, animal movements and the day's route.",
      },
      {
        time: "Mid-morning",
        title: "Scenic drive and interpretation",
        description:
          "Continue through changing habitats while your guide discusses Etosha's ecology, conservation and wildlife behaviour. Pause at authorised viewpoints and rest areas when permitted.",
      },
      {
        time: "Around midday",
        title: "Refreshment or lunch break",
        description:
          "On a morning drive, enjoy the refreshments included in the selected package before returning toward the departure point. Full-day guests may have lunch at a designated camp or use a pre-ordered lunch pack, depending on the booking.",
      },
      {
        time: "Afternoon, full-day option",
        title: "Continue the safari",
        description:
          "Guests on the full-day option continue exploring additional roads and waterholes, adapting the route to wildlife activity, time limits and park regulations.",
      },
      {
        time: "Afternoon",
        title: "Return to the lodge or gate",
        description:
          "Return to the agreed drop-off point before the relevant park closing time. The exact finish time varies with the selected package, wildlife stops and travel distance.",
      },
    ],
    included: [
      "Guided game drive in a shared safari vehicle",
      "Experienced driver-guide",
      "Wildlife interpretation and scheduled viewing stops",
      "Light refreshments and drinking water where included by the supplier",
      "Park entrance fees only when expressly included in the confirmed quotation",
      "Pickup and drop-off only within the operator's confirmed service area",
    ],
    notIncluded: [
      "Park entrance and conservation fees unless explicitly included",
      "Vehicle fees or additional permits not included in the supplier's quotation",
      "Lunch, unless specified for the selected package",
      "Accommodation and meals outside the activity",
      "Transfers from distant lodges or towns unless confirmed",
      "Private vehicle or exclusive safari guide unless separately booked",
      "Travel insurance and personal expenses",
      "Gratuities",
      "Additional safari activities or night drives not included in the booking",
    ],
    information: [
      "Destination: Etosha National Park in northern Namibia. Select the departure area carefully because the park is large and travel between gates and lodges can take considerable time.",
      "Tour options: The standard product can be sold as a morning shared game drive or a full-day safari. Confirm the selected option, duration and price before accepting payment.",
      "Wildlife sightings: Elephants, giraffes, zebras, springbok and oryx are among the species visitors may encounter. Lions, leopards, cheetahs, rhinos and other animals are present in the park but sightings are never guaranteed.",
      "Best season: The dry season, generally from May to October, can concentrate wildlife around waterholes. The wet season brings greener scenery, migratory birds and young animals, but wildlife may be more dispersed.",
      "Park hours: Entry and exit are governed by official park gate hours, which change seasonally with sunrise and sunset. All routes must comply with current park regulations.",
      "Park fees: Namibia's park entrance and conservation tariffs changed from 1 April 2026. Confirm the visitor's nationality category, age, vehicle class and applicable fees before quoting if park charges are not included.",
      "Children: Child fares and minimum ages vary by operator and vehicle. Confirm eligibility, child seating and supervision requirements before booking.",
      "What to bring: Binoculars, a camera, sun protection, a hat, comfortable clothing, closed shoes and a warm layer for cool early-morning conditions.",
      "Food and drinks: Light refreshments are often included. Lunch may be optional or available at a park camp on full-day drives. Confirm catering arrangements and dietary needs beforehand.",
      "Safety: Remain inside the safari vehicle unless the guide authorises disembarkation at a designated safe area. Never feed wildlife or approach animals on foot.",
      "Accessibility: Open safari vehicles may involve steps and limited space. Discuss mobility needs and any assistance requirements with the operator in advance.",
      "Weather: Rain, heat, road conditions and wildlife activity may affect the itinerary. The guide may alter the route for safety and compliance with park rules.",
      "Transfers: Some drives depart from lodges close to the park, while others collect guests at nearby accommodation. Transfers from distant towns may require a separate arrangement.",
      "Pricing status: The prices below use published 2026 shared-drive rates from Etosha Village as a reference. Its published information states a minimum of four paying passengers and includes park entrance fees and refreshments. Confirm the contracted operator's current price, minimum group size, vehicle capacity and exact inclusions before sale.",
      "Supplier selection: Different lodges and operators have different routes, departure times and inclusion policies. Do not combine rates or inclusions from multiple suppliers in a single live offer.",
    ],
    meetingPoint: {
      name: "Confirmed lodge or designated Etosha park access point, Namibia",
      description:
        "The exact meeting point depends on the operator and departure package. Guests should receive the confirmed pickup time, lodge or gate location, park-fee arrangements and return details before travel. Do not assume that a drive departing from a lodge outside the park begins at the national park gate.",
    },
    pricing: {
      adult: {
        amount: 83,
          currency: "USD",
          label:
            "From per person",
      },
      child: {
        amount: 83,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Confirm the selected operator's written cancellation policy before accepting payment. Specify cancellation deadlines, late cancellation and no-show charges, minimum passenger requirements, weather-related changes and refund or credit arrangements. If park access is restricted or conditions affect the route, the operator may change the itinerary in accordance with its terms.",
    },
    faqs: [
      {
        question: "What animals can I see in Etosha National Park?",
        answer:
          "Possible sightings include elephants, lions, giraffes, zebras, springbok, oryx, wildebeest, hyenas and many bird species. Sightings vary by season, location and animal behaviour, so no particular species is guaranteed.",
      },
      {
        question: "How long does a guided game drive last?",
        answer:
          "A morning drive typically takes around 5–6 hours, while a full-day option can last approximately 8–9 hours. Confirm the duration and departure point with the selected supplier.",
      },
      {
        question: "When is the best time for wildlife viewing?",
        answer:
          "The dry season, generally May to October, can provide excellent viewing around waterholes. The greener wet season offers attractive scenery and birdlife, although animals may be more dispersed.",
      },
      {
        question: "Are park entrance fees included?",
        answer:
          "Some operators include park entrance and conservation fees, while others charge them separately. Confirm the supplier's written inclusions and the applicable tariff for each traveller before booking.",
      },
      {
        question: "Can children join the game drive?",
        answer:
          "Many operators welcome children, but minimum ages, child rates and vehicle safety requirements vary. Confirm these details before accepting a family reservation.",
      },
      {
        question: "Is lunch included on a full-day safari?",
        answer:
          "Not necessarily. Some operators offer optional lunch packs or a stop at a designated park camp. Check the specific package and dietary arrangements in advance.",
      },
      {
        question: "Where does the game drive depart from?",
        answer:
          "Departure may be from a lodge near Etosha or a designated park access point. The correct meeting point depends on the operator, so check the booking confirmation carefully.",
      },
      {
        question: "Will we see lions or rhinos?",
        answer:
          "These species occur in Etosha, but sightings are unpredictable. Your guide will search suitable habitats and waterholes without guaranteeing encounters.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring binoculars, a camera, a hat, sunscreen, drinking water if not provided and a warm layer for the early start. Neutral-coloured, comfortable clothing is recommended.",
      },
      {
        question: "How much does the guided game drive cost?",
        answer:
          "The draft adult rate is approximately USD 83 per person for a shared morning drive, converted from Etosha Village's published 2026 rate using 9 October 2026 reference exchange rates. Its listing specifies a minimum of four paying passengers and states that park entrance fees and refreshments are included. Confirm the current rate and child pricing with your contracted supplier.",
      },
    ],
  },
  {
    slug: "damaraland-rock-art-and-landscape-tour",
    name: "Damaraland Rock Art & Landscape Tour",
    category: "Cultural & Heritage Tours",
    location: "Twyfelfontein, Damaraland, Kunene Region",
    country: "Namibia",
    image: "/images/activities/damaraland-rock-art-and-landscape-tour.png",
    badge: "Heritage & Nature",
    description:
      "Explore Namibia's ancient cultural heritage and striking desert geology on a guided excursion to Twyfelfontein, a UNESCO World Heritage Site renowned for its extensive collection of prehistoric rock engravings. Discover depictions of wildlife and animal tracks while learning about the area's early hunter-gatherer communities. Continue to the nearby Organ Pipes and Burnt Mountain to admire unusual rock formations and colourful geological landscapes. Depending on the departure point and tour duration, the experience can be extended to include the Petrified Forest. This excursion is ideal for travellers interested in archaeology, local heritage, geology and landscape photography.",
    rating: null,
    reviewCount: 0,
    duration: "4–6 hours",
    groupSize: "Private or small group; subject to supplier confirmation",
    pickup:
      "Selected lodges and camps in the Twyfelfontein and Damaraland area; other pickup locations by prior arrangement",
    highlights: [
      "Visit Twyfelfontein, Namibia's UNESCO-listed rock-art site",
      "Join a guided walk to discover ancient rock engravings",
      "Learn about the cultural and historical significance of the artwork",
      "See the distinctive geological columns of the Organ Pipes",
      "Admire the unusual colours and formations of Burnt Mountain",
      "Explore the rugged scenery of the Damaraland region",
      "Enjoy opportunities for landscape and heritage photography",
      "Optional Petrified Forest extension, subject to availability and additional fees",
    ],
    itinerary: [
      {
        time: "08:00",
        title: "Pickup and departure",
        description:
          "Meet your driver-guide at the agreed lodge or collection point. Review the day's schedule and travel through Damaraland's rugged desert scenery toward Twyfelfontein. Departure time may change according to the pickup location.",
      },
      {
        time: "09:00",
        title: "Arrival at Twyfelfontein",
        description:
          "Arrive at the visitor centre and receive an introduction to the site's cultural heritage, rock-art preservation and guided walking routes.",
      },
      {
        time: "09:15",
        title: "Guided rock-art exploration",
        description:
          "Follow the designated walking route with a local site guide to discover engravings of animals, tracks and other motifs. Learn about their possible meanings and the archaeological importance of the site. The walk generally takes around one to two hours, depending on the route and group pace.",
      },
      {
        time: "11:15",
        title: "Scenic drive through Damaraland",
        description:
          "Continue through the surrounding landscape, with opportunities to stop for photographs and a short refreshment break where appropriate.",
      },
      {
        time: "11:45",
        title: "Organ Pipes geological formation",
        description:
          "Visit the striking columnar rock formation and learn how geological processes created its pipe-like appearance. Allow time for a short walk and photographs, subject to access conditions.",
      },
      {
        time: "12:15",
        title: "Burnt Mountain viewpoint",
        description:
          "Explore the nearby geological landmark and observe its distinctive colours and barren slopes. Lighting conditions influence the appearance of the landscape, making early or late light particularly attractive for photography.",
      },
      {
        time: "13:00",
        title: "Return transfer",
        description:
          "Travel back to the agreed drop-off point. Guests wishing to visit the Petrified Forest or the Damara Living Museum can request an extended itinerary, subject to available time, site access and additional costs.",
      },
    ],
    included: [
      "Transport for the confirmed itinerary",
      "Driver-guide services",
      "Guided Twyfelfontein rock-art walk with a local site guide",
      "Visits to the Organ Pipes and Burnt Mountain when specified in the confirmed package",
      "Drinking water",
      "Basic itinerary coordination",
    ],
    notIncluded: [
      "Accommodation",
      "Meals, snacks and beverages other than water provided",
      "Entrance and conservation fees unless expressly included in the quotation",
      "Petrified Forest or Damara Living Museum visits unless booked as extensions",
      "Transfers outside the agreed pickup area",
      "Personal expenses and travel insurance",
      "Tips and gratuities",
      "Additional activities or specialist guiding services not listed in the booking confirmation",
    ],
    information: [
      "This is a draft product listing for Shungu Africa. Confirm supplier availability, site fees, transport arrangements and inclusions before publishing or accepting payment.",
      "Twyfelfontein is a protected UNESCO World Heritage Site. Visitors must follow the designated routes and instructions of the local site guide.",
      "The rock-art walk takes place on uneven, exposed terrain and may involve steps and rocky surfaces. Comfortable closed shoes and reasonable walking ability are recommended.",
      "Damaraland can be very hot, particularly during the warmer months. Morning visits are recommended where practical.",
      "Bring a hat, sunscreen, drinking water and a camera. Shade along the rock-art routes may be limited.",
      "The Organ Pipes and Burnt Mountain are separate nearby attractions. Confirm their inclusion and applicable entrance charges with the supplier.",
      "The Petrified Forest is not included in the standard itinerary and may require a longer tour, additional driving and separate fees.",
      "Guests must not touch, climb on or mark the protected rock engravings or geological features.",
      "Road conditions, weather, site access and the group's walking pace may affect the itinerary and return time.",
      "Confirm child suitability, age-based pricing, mobility requirements, minimum group size and pickup arrangements before booking.",
    ],
    meetingPoint: {
      name: "Confirmed lodge pickup or Twyfelfontein visitor centre",
      description:
        "Pickup is arranged with the participating lodge or local operator. Self-driving guests may meet at the agreed visitor-centre location. The exact meeting point and reporting time must be confirmed before departure.",
    },
    pricing: {
      adult: {
        amount: 87,
        currency: "USD",
        label:
          "From per person",
      },
      child: {
        amount: 54,
        currency: "USD",
        label:
          "From per person",
      },
    },
    availability: [],
    cancellation: {
      policy:
        "Cancellation terms must be confirmed with the contracted supplier before booking. Specify the cancellation deadline, deposit requirements, refund conditions, no-show policy and arrangements for weather-related changes in the booking confirmation.",
    },
    faqs: [
      {
        question: "What is Twyfelfontein known for?",
        answer:
          "Twyfelfontein is known for its extensive prehistoric rock engravings and its importance as a UNESCO World Heritage Site. The engravings depict animals, tracks and other motifs associated with the region's early communities.",
      },
      {
        question: "Is a guide required at the rock-art site?",
        answer:
          "The activity is designed around a guided visit with a local site guide. Access arrangements and available walking routes should be confirmed with the site operator.",
      },
      {
        question: "How long does the tour take?",
        answer:
          "Allow approximately four to six hours for the standard excursion, depending on the pickup point, walking route and time spent at the geological stops.",
      },
      {
        question: "Are the Organ Pipes and Burnt Mountain included?",
        answer:
          "They are planned stops in the standard extended itinerary, but their inclusion and any associated site fees must be confirmed in the final quotation.",
      },
      {
        question: "Can I visit the Petrified Forest on the same day?",
        answer:
          "An extension may be possible, but it adds driving and visiting time. Confirm the route, opening arrangements, local guiding and additional charges before booking.",
      },
      {
        question: "What should I wear and bring?",
        answer:
          "Wear comfortable closed walking shoes and lightweight clothing. Bring a hat, sunscreen, water and a camera.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "It may suit families whose children can manage the walking route. Confirm age restrictions, child rates and supervision requirements with the operator.",
      },
      {
        question: "Are meals and entrance fees included?",
        answer:
          "Not automatically. The final quotation must clearly state whether site fees, refreshments, meals and any additional attractions are included.",
      },
    ],
  },
];
