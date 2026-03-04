import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Car Inspection Locations in Greater Manchester",
  description:
    "Al Medina Motors serves all of Greater Manchester — pre-purchase car inspections for Manchester, Salford, Oldham, Stockport, Rochdale, Bolton, Bury, Trafford & Tameside.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Car Inspection Locations | Al Medina Motors",
    description:
      "Independent car inspection across Greater Manchester. Find your nearest service area page.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Car Inspection Service Areas — Greater Manchester",
  description:
    "Al Medina Motors provides independent car inspection across all boroughs of Greater Manchester.",
  itemListElement: LOCATIONS.map((loc, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Car Inspection in ${loc.name}`,
    url: `https://www.almedinamotors.co.uk/locations/${loc.slug}`,
  })),
};

export default function LocationsIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* Hero */}
        <section className="bg-slate-900 text-white px-4 pt-14 pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">
              Service Areas
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
              Car Inspection Across{" "}
              <span className="text-red-500">Greater Manchester</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Al Medina Motors serves drivers across all of Greater Manchester.
              Our Oldham Road inspection station is easily accessible from every
              borough — book a pre-purchase or full vehicle inspection today.
            </p>
          </div>
        </section>

        {/* Locations grid */}
        <section className="bg-white px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 rounded-xl p-5 transition-colors"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
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
                    <div>
                      <h2 className="font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                        Car Inspection in {loc.name}
                      </h2>
                      <p className="text-slate-500 text-xs mt-0.5">
                        {loc.region}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                    {loc.intro}
                  </p>
                  <p className="text-red-600 text-sm font-semibold mt-3 group-hover:underline">
                    View service area →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white px-4 py-12 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">
              Ready to Book Your Inspection?
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Call us or visit 313/317 Oldham Road, Manchester M40 7PS
            </p>
            <a
              href="tel:+441612020033"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              0161 202 0033
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
