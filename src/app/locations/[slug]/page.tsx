import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LOCATIONS, getLocation } from "@/lib/locations";
import { SERVICES } from "@/lib/services-data";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const loc = getLocation(params.slug);
  if (!loc) return {};
  return {
    title: `Car Inspection in ${loc.name} | Al Medina Motors`,
    description: `Independent pre-purchase car inspection & full vehicle check in ${loc.name}. Al Medina Motors — 313/317 Oldham Road, Manchester. Call 0161 202 0033.`,
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: {
      title: `Car Inspection in ${loc.name} | Al Medina Motors`,
      description: `Independent car inspection service for ${loc.name} drivers. 100-point check, honest report, same day available.`,
    },
  };
}

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 flex-shrink-0 text-green-500"
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

export default function LocationPage({ params }: Props) {
  const loc = getLocation(params.slug);
  if (!loc) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "AutoRepair"],
        "@id": "https://www.almedinamotors.co.uk/#business",
        name: "Al Medina Motors",
        url: "https://www.almedinamotors.co.uk",
        telephone: "+441612020033",
        image: "https://www.almedinamotors.co.uk/og-image.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "313/317 Oldham Road",
          addressLocality: "Manchester",
          addressRegion: "Greater Manchester",
          postalCode: "M40 7PS",
          addressCountry: "GB",
        },
        geo: { "@type": "GeoCoordinates", latitude: 53.502, longitude: -2.189 },
        areaServed: { "@type": "City", name: loc.name },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.3",
          reviewCount: "341",
          bestRating: "5",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.almedinamotors.co.uk" },
          { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.almedinamotors.co.uk/locations" },
          { "@type": "ListItem", position: 3, name: `Car Inspection in ${loc.name}`, item: `https://www.almedinamotors.co.uk/locations/${loc.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* Breadcrumb */}
        <nav
          className="bg-slate-100 border-b border-slate-200 px-4 py-2.5"
          aria-label="Breadcrumb"
        >
          <ol className="max-w-4xl mx-auto flex items-center gap-1.5 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-900 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link
                href="/locations"
                className="hover:text-slate-900 transition-colors"
              >
                Locations
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-slate-900 font-medium" aria-current="page">
              {loc.name}
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="bg-slate-900 text-white px-4 pt-12 pb-14">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">
              {loc.region}
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-5 tracking-tight leading-tight">
              Car Inspection in{" "}
              <span className="text-red-500">{loc.name}</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {loc.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+441612020033"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-7 py-4 rounded-xl text-base transition-colors shadow-lg shadow-red-900/40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.58l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Book Inspection — 0161 202 0033
              </a>
              <Link
                href="/book-inspection"
                className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white font-semibold px-7 py-4 rounded-xl text-base transition-colors"
              >
                Book Online
              </Link>
            </div>
          </div>
        </section>

        {/* Local content */}
        <section className="bg-white px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              Independent Car Inspection for {loc.name} Drivers
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">{loc.body}</p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our 313/317 Oldham Road garage is {loc.distance}. We offer{" "}
              <strong>pre-purchase car inspections</strong>,{" "}
              <strong>full 100-point vehicle checks</strong>,{" "}
              <strong>car emissions testing</strong>, and{" "}
              <strong>professional diagnostic checks</strong> for all makes and
              models — including BMW, Audi, Volkswagen, Mercedes-Benz, Nissan,
              Kia, and more.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Pre-Purchase Car Inspection",
                "100-Point Full Vehicle Check",
                "OBD Diagnostic Scan",
                "Car Emissions Testing",
                "VIN & Chassis Verification",
                "Battery & Suspension Check",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <CheckIcon />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="bg-slate-50 px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Why {loc.name} Drivers Choose Al Medina Motors
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "4.3★ Google Rating", desc: "Rated by 341 verified Greater Manchester drivers." },
                { title: "Truly Independent", desc: "No ties to any dealer or seller — 100% unbiased reports." },
                { title: "Same Day Available", desc: "Urgent purchase? Call to check same-day slots." },
                { title: "All Makes & Models", desc: "German prestige to Japanese reliability — we cover every make." },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="bg-white border border-slate-200 rounded-xl p-5"
                >
                  <div className="font-bold text-slate-900 text-sm mb-1.5">
                    ✓ {title}
                  </div>
                  <div className="text-slate-500 text-sm">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services links */}
        <section className="bg-white px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Our Services Available for {loc.name}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {SERVICES.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group flex items-start gap-3 bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 rounded-xl p-4 transition-colors"
                >
                  <CheckIcon />
                  <div>
                    <div className="font-semibold text-slate-900 group-hover:text-red-700 text-sm transition-colors">
                      {svc.name}
                    </div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      {svc.shortDesc}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Map + CTA */}
        <section className="bg-slate-900 text-white px-4 py-14">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-900/60 border border-green-700 text-green-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
              Same Day Inspection Available
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Book Your Car Inspection in {loc.name}
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              313/317 Oldham Road, Manchester M40 7PS · {loc.distance}
            </p>
            <a
              href="tel:+441612020033"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-10 py-4 rounded-xl text-xl transition-colors mb-8"
            >
              0161 202 0033
            </a>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 h-64">
              <iframe
                title={`Al Medina Motors — car inspection for ${loc.name} drivers`}
                src={loc.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
