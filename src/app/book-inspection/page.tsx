import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services-data";
import { LOCATIONS } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Book a Car Inspection in Manchester | Al Medina Motors",
  description:
    "Book your car inspection at Al Medina Motors, Manchester. Same-day available. Pre-purchase, full vehicle check, emissions testing & diagnostic. Call 0161 202 0033.",
  alternates: { canonical: "/book-inspection" },
  openGraph: {
    title: "Book Car Inspection Manchester | Al Medina Motors",
    description:
      "Book a same-day independent car inspection in Manchester. 100-point check, honest report. Call 0161 202 0033.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ReservationPackage",
  name: "Car Inspection Booking — Al Medina Motors Manchester",
  url: "https://www.almedinamotors.co.uk/book-inspection",
  provider: {
    "@type": ["LocalBusiness", "AutoRepair"],
    "@id": "https://www.almedinamotors.co.uk/#business",
    name: "Al Medina Motors",
    telephone: "+441612020033",
    address: {
      "@type": "PostalAddress",
      streetAddress: "313/317 Oldham Road",
      addressLocality: "Manchester",
      postalCode: "M40 7PS",
      addressCountry: "GB",
    },
  },
};

const steps = [
  {
    num: "1",
    title: "Choose Your Service",
    desc: "Select the inspection type that suits your needs — pre-purchase, full vehicle check, diagnostic, or emissions test.",
  },
  {
    num: "2",
    title: "Call or Message Us",
    desc: "Call 0161 202 0033 to book and check same-day availability. We'll confirm your slot immediately.",
  },
  {
    num: "3",
    title: "Bring the Vehicle",
    desc: "Drive or arrange for the vehicle to be brought to 313/317 Oldham Road, Manchester M40 7PS.",
  },
  {
    num: "4",
    title: "Get Your Report",
    desc: "We carry out a thorough inspection and hand you a full written report — usually on the same day.",
  },
];

export default function BookInspectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* Hero */}
        <section className="bg-slate-900 text-white px-4 pt-14 pb-14">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-900/60 border border-green-700 text-green-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
              Same Day Inspection Available
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
              Book Your Car Inspection
              <span className="text-red-500"> in Manchester</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
              Independent vehicle inspection at 313/317 Oldham Road, Manchester
              M40 7PS. Call to book — same-day slots often available.
            </p>
            <a
              href="tel:+441612020033"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-10 py-5 rounded-xl text-2xl transition-colors shadow-2xl shadow-red-900/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.58l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              0161 202 0033
            </a>
            <p className="text-slate-500 text-xs mt-4">
              Mon – Fri 8:00am–6:00pm · Sat 8:00am–5:00pm
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              How to Book
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {steps.map(({ num, title, desc }) => (
                <div
                  key={num}
                  className="flex gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5"
                >
                  <div className="flex-shrink-0 w-9 h-9 bg-red-600 text-white font-extrabold text-sm rounded-full flex items-center justify-center">
                    {num}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm mb-1">
                      {title}
                    </div>
                    <div className="text-slate-500 text-sm leading-relaxed">
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Choose a service */}
        <section className="bg-slate-50 px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">
              Choose Your Inspection Type
            </h2>
            <p className="text-slate-500 text-sm text-center mb-8">
              Not sure which service you need? Call us — we&apos;ll advise.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {SERVICES.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group bg-white hover:bg-red-50 border border-slate-200 hover:border-red-200 rounded-xl p-5 transition-colors"
                >
                  <div className="font-bold text-slate-900 group-hover:text-red-700 text-sm mb-1 transition-colors">
                    {svc.name}
                  </div>
                  <div className="text-slate-500 text-xs mb-2">
                    {svc.shortDesc}
                  </div>
                  <div className="text-red-600 text-xs font-semibold group-hover:underline">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Service areas */}
        <section className="bg-white px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Serving All of Greater Manchester
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="inline-flex items-center bg-slate-50 border border-slate-200 hover:border-red-300 text-slate-700 hover:text-red-700 text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-slate-900 text-white px-4 py-14">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold mb-2">Our Location</h2>
            <p className="text-slate-400 text-sm mb-6">
              313/317 Oldham Road, Manchester M40 7PS · Free on-site parking
            </p>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 h-72 mb-6">
              <iframe
                title="Al Medina Motors location — 313/317 Oldham Road Manchester M40 7PS"
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
              href="tel:+441612020033"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Call to Book — 0161 202 0033
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
