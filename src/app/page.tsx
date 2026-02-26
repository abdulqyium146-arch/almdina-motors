import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Inspection Manchester | Al Medina Motors",
  description:
    "Independent car inspection & pre-purchase vehicle check in Manchester. 4.3★ rated by 341 drivers. BMW, Audi, VW specialists. Same day available. Call 0161 202 0033.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Car Inspection Manchester | Al Medina Motors",
    description:
      "Independent car inspection & pre-purchase vehicle check in Manchester. 4.3★ rated by 341 drivers. BMW, Audi, VW specialists. Same day available. Call 0161 202 0033.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "AutoRepair"],
      "@id": "https://www.almedinamotors.co.uk/#business",
      name: "Al Medina Motors",
      description:
        "Independent car inspection station in Manchester offering pre-purchase inspections, full vehicle checks, emissions testing, and diagnostic checks for all makes and models.",
      url: "https://www.almedinamotors.co.uk",
      telephone: "+441612020033",
      priceRange: "££",
      currenciesAccepted: "GBP",
      paymentAccepted: "Cash, Credit Card",
      image: "https://www.almedinamotors.co.uk/og-image.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "313/317 Oldham Road",
        addressLocality: "Manchester",
        addressRegion: "Greater Manchester",
        postalCode: "M40 7PS",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 53.502,
        longitude: -2.189,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "17:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.3",
        reviewCount: "341",
        bestRating: "5",
        worstRating: "1",
      },
      sameAs: [
        "https://share.google/uZUwvdIEIlOkhy5Nf",
        "https://www.facebook.com/p/Al-Medina-Motors-100021212835789/",
      ],
      areaServed: [
        { "@type": "City", name: "Manchester" },
        { "@type": "City", name: "Salford" },
        { "@type": "City", name: "Oldham" },
        { "@type": "City", name: "Stockport" },
        { "@type": "City", name: "Rochdale" },
        { "@type": "AdministrativeArea", name: "Greater Manchester" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Car Inspection Services Manchester",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pre Purchase Car Inspection",
              description:
                "Comprehensive independent pre-purchase vehicle inspection covering 100+ check points. Ideal for checking a used car before buying from a private seller or dealer in Manchester.",
              areaServed: "Manchester",
              provider: { "@id": "https://www.almedinamotors.co.uk/#business" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full Vehicle Inspection",
              description:
                "100-point multi-point car inspection covering engine, transmission, brakes, suspension, steering, bodywork, electrics, and full diagnostic scan.",
              areaServed: "Manchester",
              provider: { "@id": "https://www.almedinamotors.co.uk/#business" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Car Emissions Testing",
              description:
                "Vehicle emission inspection and car diagnostic check for petrol, diesel, and hybrid vehicles in Manchester.",
              areaServed: "Manchester",
              provider: { "@id": "https://www.almedinamotors.co.uk/#business" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Car Diagnostic Check",
              description:
                "Professional OBD diagnostic check covering fault codes, sensor failures, engine management, and emissions systems for all makes and models.",
              areaServed: "Manchester",
              provider: { "@id": "https://www.almedinamotors.co.uk/#business" },
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.almedinamotors.co.uk/#website",
      url: "https://www.almedinamotors.co.uk",
      name: "Al Medina Motors",
      description:
        "Independent car inspection & pre-purchase vehicle check in Manchester. 4.3★ rated by 341 drivers.",
      publisher: { "@id": "https://www.almedinamotors.co.uk/#business" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a pre-purchase car inspection include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our pre-purchase car inspection covers over 100 check points including bodywork condition, engine health, gearbox, brakes, suspension, steering, tyres, electrics, emissions, and a full OBD diagnostic scan. We also verify the VIN and chassis number and check for outstanding finance or category damage.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a car inspection cost in Manchester?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer competitively priced, transparent car inspection services in Manchester with no hidden fees. Call 0161 202 0033 for current pricing — we aim to provide the most affordable and comprehensive independent inspection service in Greater Manchester.",
          },
        },
        {
          "@type": "Question",
          name: "Do you inspect BMW, Audi, VW and other German cars?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our technicians specialise in BMW inspection, Audi inspection, Volkswagen inspection, Mercedes-Benz, and Porsche pre-purchase inspection. We also cover Nissan, Kia, Volvo, Škoda, and all other makes using professional brand-specific diagnostic equipment.",
          },
        },
        {
          "@type": "Question",
          name: "Can you inspect a used car before I buy it from a private seller?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Our independent vehicle inspection service is ideal for checking a used car before buying from any private seller or dealership. We provide a completely honest, unbiased written report so you can buy with full confidence.",
          },
        },
        {
          "@type": "Question",
          name: "Is same-day car inspection available in Manchester?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, subject to availability we offer same-day car inspections at our Oldham Road garage in Manchester. Call us on 0161 202 0033 to check availability and book your slot.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Al Medina Motors located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We are located at 313/317 Oldham Road, Manchester M40 7PS — easily accessible from Manchester city centre, Oldham, Rochdale, Salford, and across Greater Manchester.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.almedinamotors.co.uk",
        },
      ],
    },
  ],
};

const PHONE_DISPLAY = "0161 202 0033";
const PHONE_HREF = "tel:+441612020033";
const GOOGLE_PROFILE = "https://share.google/uZUwvdIEIlOkhy5Nf";
const FACEBOOK_URL =
  "https://www.facebook.com/p/Al-Medina-Motors-100021212835789/";

// ── SVG Icons ────────────────────────────────────────────────────────────────

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.58l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 flex-shrink-0 text-green-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.013 3.5-4.428 3.5-7.327A8 8 0 004.5 12.25c0 2.899 1.556 5.314 3.5 7.327a19.578 19.578 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      clipRule="evenodd"
    />
  </svg>
);

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-slate-300"}`}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3.5 h-3.5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// ── Data ─────────────────────────────────────────────────────────────────────

const benefits = [
  {
    title: "4.3★ Google Rating",
    desc: "Rated by 341 verified Manchester drivers — consistently praised for honesty and thoroughness.",
  },
  {
    title: "Truly Independent",
    desc: "No ties to sellers or dealers. Our inspection report is 100% unbiased and entirely in your interest.",
  },
  {
    title: "Same Day Inspection",
    desc: "Need a quick turnaround? Same-day car inspection available subject to availability.",
  },
  {
    title: "100-Point Check",
    desc: "Every inspection covers 100+ check points — bodywork, mechanical, electrical, and full diagnostic.",
  },
  {
    title: "Transparent Pricing",
    desc: "Fair, upfront pricing with no hidden fees. Trusted by hundreds of Manchester and Greater Manchester drivers.",
  },
  {
    title: "All Makes & Models",
    desc: "From BMWs to Kias, German prestige to Japanese reliability — we inspect every make and model.",
  },
];

const testimonials = [
  {
    text: "Booked a pre-purchase inspection before buying an Audi A4. They found faults the seller hadn't mentioned — saved me a fortune. Honest, thorough service.",
    name: "Tariq M.",
    loc: "Manchester",
    stars: 5,
  },
  {
    text: "Best car inspection in Manchester. Quick, professional, and the report was detailed. Knew exactly what I was buying. Will definitely use again.",
    name: "Sarah K.",
    loc: "Oldham",
    stars: 5,
  },
  {
    text: "Used them to check a VW Golf before buying from a private seller. Mechanic was knowledgeable and explained everything clearly. Highly recommend.",
    name: "James R.",
    loc: "Salford",
    stars: 5,
  },
];

const faqs = [
  {
    q: "What does a pre-purchase car inspection include?",
    a: "Our pre-purchase car inspection covers over 100 check points: bodywork condition, engine health, gearbox, brakes, suspension, steering, tyres, electrics, emissions, and a full OBD diagnostic scan. We also verify the VIN and chassis number, and check for outstanding finance or category damage.",
  },
  {
    q: "How much does a car inspection cost in Manchester?",
    a: "We offer competitively and transparently priced car inspection services with no hidden fees. Call 0161 202 0033 for current pricing — we aim to be the most affordable independent vehicle inspection service in Greater Manchester.",
  },
  {
    q: "Do you inspect BMW, Audi, VW, and other German cars?",
    a: "Yes. Our technicians specialise in BMW, Audi, Volkswagen, Mercedes-Benz, and Porsche, as well as all other makes including Nissan, Kia, Volvo, and Škoda — using professional brand-specific diagnostic tools.",
  },
  {
    q: "Can you inspect a used car before I buy it from a private seller?",
    a: "Absolutely. Our independent vehicle inspection is ideal for private-sale purchases. We provide a fully honest, unbiased written report with no ties to the seller — so you can buy with complete confidence.",
  },
  {
    q: "Is same-day car inspection available in Manchester?",
    a: "Yes, subject to availability we offer same-day car inspections at our Oldham Road, Manchester garage. Call 0161 202 0033 to check available slots and book.",
  },
  {
    q: "Where is Al Medina Motors located?",
    a: "We're at 313/317 Oldham Road, Manchester M40 7PS — easily reachable from Manchester city centre, Oldham, Rochdale, Salford, Stockport, and across Greater Manchester.",
  },
];

const makes = [
  "BMW",
  "Audi",
  "Volkswagen",
  "Mercedes",
  "Porsche",
  "Volvo",
  "Škoda",
  "Nissan",
  "Kia",
  "All Makes",
];

const serviceAreas = [
  "Manchester",
  "Salford",
  "Oldham",
  "Rochdale",
  "Stockport",
  "Bolton",
  "Bury",
  "Trafford",
  "Tameside",
  "Greater Manchester",
];

const services = [
  {
    label: "Pre Purchase Inspection",
    desc: "Full report before you buy",
  },
  {
    label: "100-Point Vehicle Check",
    desc: "Mechanical, electrical & bodywork",
  },
  {
    label: "Car Diagnostic Check",
    desc: "OBD scan — all makes & models",
  },
  {
    label: "Emissions Testing",
    desc: "Petrol, diesel & hybrid",
  },
  {
    label: "VIN & Chassis Check",
    desc: "Identity & history verified",
  },
  {
    label: "Battery & Suspension Check",
    desc: "Included in every full inspection",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HEADER ── */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div>
            <span className="font-extrabold text-base sm:text-lg leading-tight block tracking-tight">
              Al Medina Motors
            </span>
            <span className="text-slate-400 text-xs hidden sm:block">
              Car Inspection Station · Oldham Road, Manchester M40
            </span>
          </div>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 focus-visible:outline-red-500 text-white font-bold px-4 py-2.5 rounded-lg text-sm transition-colors shadow-md shadow-red-900/40 whitespace-nowrap"
          >
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      <main>
        {/* ── HERO ── */}
        <section
          className="bg-slate-900 text-white px-4 pt-14 pb-16"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-3xl mx-auto text-center">
            {/* Rating badge */}
            <a
              href={GOOGLE_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-medium px-4 py-2 rounded-full mb-6 transition-colors"
              aria-label="View our Google Reviews — 4.3 stars, 341 reviews"
            >
              <span className="text-yellow-400 tracking-wider" aria-hidden="true">
                ★★★★☆
              </span>
              <span className="text-slate-300">4.3 · 341 Google Reviews</span>
              <ExternalLinkIcon />
            </a>

            <h1
              id="hero-heading"
              className="text-balance text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-5"
            >
              Car Inspection &amp; Vehicle Check
              <span className="text-red-500"> in Manchester</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-9 leading-relaxed">
              Manchester&apos;s trusted{" "}
              <strong className="text-white">
                independent car inspection station
              </strong>{" "}
              on Oldham Road, M40. Pre-purchase vehicle checks, full diagnostic
              inspections &amp; emissions testing — honest reports, fair prices,
              same day available.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-xl shadow-red-900/40"
              >
                <PhoneIcon />
                Call Now — {PHONE_DISPLAY}
              </a>
              <a
                href="#book"
                className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Book Inspection
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-2xl mx-auto">
              {[
                "Same Day Available",
                "100-Point Check",
                "Independent Service",
                "All Makes & Models",
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center justify-center gap-1.5 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-slate-300"
                >
                  <CheckIcon />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section
          className="bg-white px-4 py-12 border-b border-slate-100"
          aria-label="Services overview"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-red-600 mb-6">
              What We Offer
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {services.map(({ label, desc }) => (
                <div
                  key={label}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                >
                  <div className="flex items-start gap-2 mb-1">
                    <CheckIcon />
                    <span className="text-slate-900 font-semibold text-sm leading-snug">
                      {label}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs pl-6 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRE PURCHASE INSPECTION ── */}
        <section className="bg-white px-4 py-14" id="pre-purchase">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-red-50 text-red-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Most Popular Service
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5">
              Pre Purchase Car Inspection in Manchester
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Thinking of buying a used car in Manchester or Greater Manchester?
              Our <strong>pre-purchase car inspection</strong> is the smartest
              investment you can make before signing the deal. A qualified
              mechanic will check the car before you buy — examining over 100
              points across the engine, gearbox, brakes, suspension, bodywork,
              and electrics — and deliver an honest, independent written report
              you can negotiate with.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Unlike dealership checks, our{" "}
              <strong>independent vehicle inspection</strong> has no financial
              interest in the sale. Whether you&apos;re viewing a vehicle in
              Manchester, Salford, Oldham, or anywhere across Greater Manchester,
              book a <strong>pre-purchase vehicle check</strong> with us first —
              and buy with complete confidence.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              <PhoneIcon />
              Book a Pre-Purchase Inspection
            </a>
          </div>
        </section>

        {/* ── USED CAR INSPECTION ── */}
        <section className="bg-slate-50 px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5">
              Used Car Inspection Before Buying
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Buying from a private seller or a used car lot? Our{" "}
              <strong>used car inspection</strong> covers everything an AA car
              check or RAC car check would — and more. As a fully independent
              inspection garage, we have no ties to any seller, giving you a
              completely unbiased assessment of the vehicle&apos;s true
              condition.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We act as your trusted{" "}
              <strong>mechanic to check a used car before buying</strong> —
              spotting hidden accident damage, mechanical wear, fluid leaks, and
              electrical faults that sellers may not disclose. Our{" "}
              <strong>comprehensive vehicle inspection</strong> helps Manchester
              drivers avoid costly mistakes on the used car market. It&apos;s
              the best pre-purchase car inspection service available in the city.
            </p>
          </div>
        </section>

        {/* ── FULL VEHICLE CHECK ── */}
        <section className="bg-white px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5">
              Full Vehicle Check &amp; HPI Car Check
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our <strong>full car check</strong> is a thorough{" "}
              <strong>100-point multi-point inspection</strong> covering every
              major vehicle system — engine, transmission, cooling, brakes,
              suspension, steering, tyres, bodywork, electrics, and safety
              equipment. We also carry out a full{" "}
              <strong>car diagnostic check</strong> using professional OBD
              equipment to surface hidden fault codes and sensor failures.
            </p>
            <p className="text-slate-600 leading-relaxed">
              As part of our <strong>vehicle checks before buying</strong>, we
              verify the VIN (<strong>car VIN check</strong>), inspect the car
              chassis (<strong>car chassis check</strong>), and cross-reference
              against vehicle history data. This gives you a complete picture
              alongside any HPI car check report — total clarity before you
              commit.
            </p>
          </div>
        </section>

        {/* ── EMISSIONS ── */}
        <section className="bg-slate-50 px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5">
              Car Emissions &amp; State Inspection
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our <strong>car emissions testing</strong> and{" "}
              <strong>vehicle emission inspection</strong> service covers all
              petrol, diesel, and hybrid models. Using professional diagnostic
              equipment, we identify emissions-related fault codes, faulty
              sensors, catalytic converter issues, and DPF problems — keeping
              your vehicle road-legal and running efficiently.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether you need a routine <strong>car check-up</strong>, a{" "}
              <strong>winter car check</strong>, a{" "}
              <strong>road trip car inspection</strong>, or a pre-MOT vehicle
              check, our Oldham Road garage covers you. We also carry out{" "}
              <strong>car battery checks</strong> and{" "}
              <strong>car suspension checks</strong> as part of every full
              inspection package.
            </p>
          </div>
        </section>

        {/* ── GERMAN CAR SPECIALISTS ── */}
        <section className="bg-white px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5">
              BMW, Audi, VW &amp; German Car Inspection Specialists
            </h2>
            <p className="text-slate-600 leading-relaxed mb-7">
              Our experienced technicians specialise in{" "}
              <strong>BMW inspection</strong>,{" "}
              <strong>BMW pre-purchase inspection</strong>,{" "}
              <strong>Audi inspection</strong>, <strong>VW inspection</strong>,{" "}
              <strong>Mercedes pre-purchase inspection</strong>, and{" "}
              <strong>Porsche pre-purchase inspection</strong>. Using
              brand-specific diagnostic tools, we go beyond a generic vehicle
              check to identify marque-specific known issues — including timing
              chain wear, DSG faults, air suspension failures, and more. We also
              cover <strong>Volvo inspection</strong>,{" "}
              <strong>Škoda inspection</strong>,{" "}
              <strong>Nissan inspection</strong>, and{" "}
              <strong>Kia inspection</strong>.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {makes.map((make) => (
                <div
                  key={make}
                  className="bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold text-center py-2.5 px-2 rounded-lg border border-slate-200"
                >
                  {make}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICE AREAS ── */}
        <section className="bg-slate-50 px-4 py-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-4 text-center">
              Service Area
            </p>
            <p className="text-slate-600 text-sm text-center mb-5 leading-relaxed">
              We provide car inspection services across{" "}
              <strong>Manchester</strong> and all of{" "}
              <strong>Greater Manchester</strong>, including:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1 bg-white border border-slate-200 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  <MapPinIcon />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE ── */}
        <section className="bg-red-600 text-white px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
              Why Choose Al Medina Motors?
            </h2>
            <p className="text-red-200 text-center text-sm mb-9">
              Trusted by 300+ Manchester drivers for honest, thorough car
              inspections
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map(({ title, desc }) => (
                <div
                  key={title}
                  className="bg-red-700/50 border border-red-500/30 rounded-xl p-5"
                >
                  <div className="font-bold text-sm mb-1.5">✓ {title}</div>
                  <div className="text-red-100 text-sm leading-relaxed">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="bg-slate-50 px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-9">
              <div
                className="flex justify-center gap-0.5 mb-2"
                aria-label="4.3 out of 5 stars"
              >
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} filled={i <= 4} />
                ))}
              </div>
              <p className="font-bold text-slate-900 text-xl">
                Trusted by 300+ Manchester Drivers
              </p>
              <p className="text-slate-500 text-sm mt-1">
                4.3 out of 5 · 341 verified Google Reviews
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {testimonials.map(({ text, name, loc, stars }) => (
                <article
                  key={name}
                  className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col"
                >
                  <div
                    className="flex gap-0.5 mb-3"
                    aria-label={`${stars} stars`}
                  >
                    {[1, 2, 3, 4, 5].map((i) => (
                      <StarIcon key={i} filled={i <= stars} />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 italic flex-1">
                    &ldquo;{text}&rdquo;
                  </p>
                  <p className="text-slate-900 font-semibold text-sm">
                    {name}{" "}
                    <span className="text-slate-400 font-normal">· {loc}</span>
                  </p>
                </article>
              ))}
            </div>

            {/* CTA to read all reviews */}
            <div className="text-center">
              <a
                href={GOOGLE_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-lg text-sm transition-colors shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-4 h-4 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#34A853"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#EA4335"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
                Read All 341 Google Reviews
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-white px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-center text-sm mb-9">
              Everything you need to know about car inspection in Manchester
            </p>
            <div className="space-y-3">
              {faqs.map(({ q, a }) => (
                <details
                  key={q}
                  className="group border border-slate-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-semibold text-slate-900 text-sm sm:text-base hover:bg-slate-50 transition-colors list-none">
                    <span>{q}</span>
                    <span
                      className="text-slate-400 group-open:rotate-180 transition-transform duration-200 text-xl ml-4 flex-shrink-0 leading-none"
                      aria-hidden="true"
                    >
                      ▾
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-3 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOOK CTA ── */}
        <section
          className="bg-slate-900 text-white px-4 py-16 text-center"
          id="book"
        >
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-900/60 border border-green-700 text-green-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
              Same Day Inspection Available
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Book Your Car Inspection Today
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mb-8 leading-relaxed">
              Independent vehicle inspection service in Manchester.
              <br />
              <span className="text-slate-300">
                313/317 Oldham Road, Manchester M40 7PS
              </span>
            </p>

            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold px-10 py-5 rounded-xl text-xl sm:text-2xl transition-colors shadow-2xl shadow-red-900/40 mb-5"
            >
              <PhoneIcon />
              {PHONE_DISPLAY}
            </a>

            <p className="text-slate-500 text-xs mb-10">
              Mon – Fri&nbsp; 8:00am – 6:00pm&nbsp; ·&nbsp; Sat&nbsp; 8:00am –
              5:00pm
            </p>

            {/* Google Map embed — coordinates-based for accuracy */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 h-64 sm:h-72">
              <iframe
                title="Al Medina Motors — 313/317 Oldham Road, Manchester M40 7PS"
                src="https://maps.google.com/maps?q=53.5020,-2.1890&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={GOOGLE_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-slate-500 hover:text-slate-300 text-xs transition-colors"
            >
              <MapPinIcon />
              Get Directions on Google Maps
              <ExternalLinkIcon />
            </a>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-950 text-slate-400 px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 mb-8 text-sm">
            <div>
              <div className="text-white font-bold text-base mb-3">
                Al Medina Motors
              </div>
              <address className="not-italic space-y-1 text-slate-400">
                <div>313/317 Oldham Road</div>
                <div>Manchester, M40 7PS</div>
                <div>Greater Manchester, England</div>
              </address>
            </div>

            <div>
              <div className="text-white font-bold text-base mb-3">
                Contact
              </div>
              <a
                href={PHONE_HREF}
                className="hover:text-white transition-colors font-medium block mb-1"
              >
                {PHONE_DISPLAY}
              </a>
              <div className="text-yellow-400 text-xs mt-3 mb-4">
                ★★★★☆ 4.3 · 341 Google Reviews
              </div>
              {/* Social links */}
              <div className="flex flex-col gap-2">
                <a
                  href={GOOGLE_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-xs"
                >
                  <ExternalLinkIcon />
                  Google Business Profile
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-xs"
                >
                  <ExternalLinkIcon />
                  Facebook Page
                </a>
              </div>
            </div>

            <div>
              <div className="text-white font-bold text-base mb-3">
                Services
              </div>
              <ul className="space-y-1.5 text-slate-400">
                <li>Pre Purchase Car Inspection</li>
                <li>Full Vehicle Check</li>
                <li>Car Emissions Testing</li>
                <li>Car Diagnostic Check</li>
                <li>Used Car Inspection</li>
                <li>VIN &amp; Chassis Verification</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 text-xs text-slate-600 text-center">
            © {new Date().getFullYear()} Al Medina Motors · Car Inspection
            Station · 313/317 Oldham Road, Manchester M40 7PS, England
          </div>
        </div>
      </footer>
    </>
  );
}
