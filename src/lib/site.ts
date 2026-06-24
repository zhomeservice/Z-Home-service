export const SITE = {
  name: "Z Home Service",
  tagline: "Professional Cleaning Services",
  phone: "07544487000",
  phoneDisplay: "07544 487 000",
  email: "info@zhomeservice.co.uk",
  website: "www.zhomeservice.co.uk",
  instagram: "zhomeservice.uk",
  instagramUrl: "https://instagram.com/zhomeservice.uk",
  facebookUrl: "#",
  whatsappMessage: "Hello! I'd like to book a cleaning service.",
};

export const whatsappUrl = (msg = SITE.whatsappMessage) =>
  `https://wa.me/44${SITE.phone.replace(/^0/, "")}?text=${encodeURIComponent(msg)}`;

export const telUrl = `tel:+44${SITE.phone.replace(/^0/, "")}`;
export const mailUrl = `mailto:${SITE.email}`;

export const SERVICES = [
  {
    slug: "end-of-tenancy-cleaning",
    title: "End of Tenancy Cleaning",
    short: "Meticulous deep cleaning to secure your deposit",
    icon: "Key",
    image: "tenancy",
    photos: {
      before: "/images/eot/eot-kitchen-before.jpg",
      after: "/images/eot/eot-kitchen-after.jpg",
      gallery: [
        "/images/eot/eot-1.jpg",
        "/images/eot/eot-2.jpg",
        "/images/eot/eot-3.jpg",
        "/images/eot/eot-4.jpg",
        "/images/eot/eot-5.jpg",
        "/images/eot/eot-6.jpg",
        "/images/eot/eot-7.jpg",
        "/images/eot/eot-8.jpg",
        "/images/eot/eot-9.jpg",
        "/images/eot/eot-10.jpg",
        "/images/eot/eot-11.jpg",
        "/images/eot/eot-12.jpg"
      ]
    },
    startingFrom: "£149",
    hero: "Deposit-back guaranteed deep cleans for tenants, landlords and agents.",
    included: [
      "Full kitchen degrease — oven, hob, extractor, cupboards inside & out",
      "Bathrooms descaled, sanitised and polished",
      "All hard floors mopped; carpets vacuumed (steam-clean add-on)",
      "Inside windows, sills, frames, switches and skirtings",
      "Inside cupboards, wardrobes and drawers",
      "Removal of cobwebs, dust and limescale throughout",
    ],
    why: [
      "Cleaned to inventory-clerk and letting-agent standards",
      "Re-clean guarantee within 72 hours if anything's missed",
      "Discreet keyholder service with full insurance",
    ],
    faqs: [
      { q: "Do you guarantee my deposit?", a: "We guarantee a re-clean within 72 hours if the agent or landlord highlights any issue with our work — at no extra cost." },
      { q: "Do I need to be there?", a: "No. We can collect keys and return them to the agent, landlord or a safe location of your choosing." },
      { q: "Is carpet cleaning included?", a: "Standard vacuuming is included. Professional steam cleaning is available as an add-on at a preferential rate when booked together." },
      { q: "How long does it take?", a: "A typical 2-bedroom flat takes 4–6 hours with a team of two. Larger properties are quoted on inspection." },
    ],
  },
  {
    slug: "oven-cleaning",
    title: "Oven Cleaning",
    short: "Restore your oven to like-new condition",
    icon: "Flame",
    image: "oven",
    photos: {
      before: "/images/oven/oven-before.jpg",
      after: "/images/oven/oven-after.jpg",
      gallery: [
        "/images/oven/oven-1.jpg",
        "/images/oven/oven-2.jpg",
        "/images/oven/oven-3.jpg",
        "/images/oven/oven-4.jpg",
        "/images/oven/oven-5.jpg"
      ]
    },
    startingFrom: "£55",
    hero: "Fume-free, dip-tank deep cleaning that brings ovens back to showroom shine.",
    included: [
      "Full strip-down of doors, racks, trays and side panels",
      "Off-site eco dip-tank treatment for racks and trays",
      "Interior degrease, glass polish, seal check",
      "Hob, extractor and splashback shine on request",
    ],
    why: [
      "Non-caustic, fume-free formulas — safe for family kitchens",
      "Single and double ovens, ranges, AGAs and microwaves",
      "Fixed pricing — quoted before we start, no surprises",
    ],
    faqs: [
      { q: "How long does an oven clean take?", a: "Most single ovens take 90 minutes; double ovens and ranges 2–3 hours." },
      { q: "Are the products safe?", a: "Yes. We use non-caustic, biodegradable solutions suitable for homes with children and pets." },
      { q: "Can you clean an AGA?", a: "Yes — AGAs, Rayburns and range cookers are all part of our specialist service." },
      { q: "Do you clean the hob and extractor too?", a: "Absolutely. Add hob, extractor or microwave to your booking at a reduced bundle rate." },
    ],
  },
  {
    slug: "carpet-upholstery-cleaning",
    title: "Carpet & Upholstery",
    short: "Deep steam cleaning for fresh, hygienic fabrics",
    icon: "Sofa",
    image: "carpet",
    photos: {
      before: "/images/carpet/carpet-before.jpg",
      after: "/images/carpet/carpet-after.jpg",
      gallery: [
        "/images/carpet/carpet-1.jpg",
        "/images/carpet/carpet-2.jpg",
        "/images/carpet/carpet-3.jpg"
      ]
    },
    startingFrom: "£45",
    hero: "Hot-water extraction that lifts deep soiling, allergens and odours from fibres.",
    included: [
      "Pre-vacuum and fibre inspection",
      "Spot treatment of stains and high-traffic areas",
      "Hot-water extraction with eco-certified solutions",
      "Deodorising and fibre grooming finish",
    ],
    why: [
      "Safe on wool, silk-blend, viscose and synthetic fibres",
      "Rapid-dry technique — most rooms ready within 3–4 hours",
      "Pet- and child-safe products throughout",
    ],
    faqs: [
      { q: "How long until the carpet is dry?", a: "Typically 3–4 hours with good ventilation; we'll advise on the day." },
      { q: "Can you remove pet stains and odours?", a: "Yes — we use enzymatic treatments specifically designed for protein-based stains and odours." },
      { q: "Do you clean rugs and sofas?", a: "Yes. Rugs, sofas, dining chairs, mattresses and curtains are all part of our upholstery service." },
      { q: "Will it damage delicate fibres?", a: "We test every fabric first and adjust temperature and chemistry to match." },
    ],
  },
  {
    slug: "after-builder-cleaning",
    title: "After Builder Cleaning",
    short: "Remove all dust and debris after renovations",
    icon: "HardHat",
    image: "builder",
    startingFrom: "£199",
    hero: "Post-construction deep cleans that get your project handover-ready.",
    included: [
      "Removal of dust, plaster, paint splashes and adhesive residue",
      "Window, frame and sill detail clean (inside)",
      "Floor washing, sealing and polishing where required",
      "Sanitary-ware descale and polish",
      "Kitchen unit detail clean inside and out",
    ],
    why: [
      "Trade-friendly scheduling — evenings and weekends available",
      "HEPA-filter vacuums to capture fine construction dust",
      "Two- and three-stage cleans for new-build handovers",
    ],
    faqs: [
      { q: "Do you do snagging cleans?", a: "Yes — pre-handover, post-snagging and final-finish cleans are part of what we do." },
      { q: "Can you handle large sites?", a: "We scale teams to the project. New builds, refurbishments and HMO conversions all welcome." },
      { q: "How quickly can you start?", a: "Often within 48 hours. Trade clients with regular work get priority scheduling." },
      { q: "Do you take rubbish away?", a: "Light builder debris can be bagged and removed on request; large skips arranged separately." },
    ],
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    short: "Streak-free shine inside and out",
    icon: "Sparkles",
    image: "window",
    startingFrom: "£35",
    hero: "Pure-water reach-and-wash systems for crystal-clear glass up to four storeys.",
    included: [
      "Exterior glass, frames and sills",
      "Interior glass, sills and ledges on request",
      "Conservatory roofs, skylights and Velux windows",
      "Reach-and-wash pure-water finish — no streaks",
    ],
    why: [
      "Fully insured operatives with safe working at height training",
      "Regular maintenance plans — monthly, fortnightly or one-off",
      "Eco pure-water system — no chemicals on planting or paintwork",
    ],
    faqs: [
      { q: "Do you clean inside windows too?", a: "Yes — interior glass, frames and sills can be added to any external clean." },
      { q: "What's the highest you can reach?", a: "Our pure-water poles safely reach up to four storeys without ladders." },
      { q: "Will it rain-mark afterwards?", a: "Pure-water systems leave nothing behind — light rain after will not mark." },
      { q: "Can I set up a regular schedule?", a: "Absolutely — most clients choose monthly or six-weekly visits with priority booking." },
    ],
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];
