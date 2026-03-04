import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Car Inspection Services Manchester | Al Medina Motors",
  description:
    "Independent car inspection services in Manchester — pre-purchase inspection, full vehicle check, emissions testing, diagnostic check & used car inspection. Call 0161 202 0033.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Car Inspection Services | Al Medina Motors Manchester",
    description:
      "Full range of independent vehicle inspection services in Manchester. Book same day.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Car Inspection Services — Al Medina Motors Manchester",
  itemListElement: SERVICES.map((svc, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: svc.name,
    url: `https://www.almedinamotors.co.uk/services/${svc.slug}`,
  })),
};

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

export default function ServicesPage() {
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
              Our Services
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
              Car Inspection Services in{" "}
              <span className="text-red-500">Manchester</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Al Medina Motors offers a full range of independent vehicle
              inspection services at our 313/317 Oldham Road, Manchester garage.
              4.3★ rated by 341 drivers — honest, thorough, transparent.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="bg-white px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6">
              {SERVICES.map((svc) => (
                <article
                  key={svc.slug}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col"
                >
                  <h2 className="font-bold text-slate-900 text-lg mb-2">
                    {svc.name}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                    {svc.heroPara}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {svc.benefits.slice(0, 3).map((b) => (
                      <li
                        key={b.title}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <CheckIcon />
                        <span className="font-medium">{b.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center justify-center bg-red-600 hover:bg-red-500 text-white font-semibold px-5 py-3 rounded-lg text-sm transition-colors"
                  >
                    Learn More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white px-4 py-12 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">
              Not Sure Which Inspection You Need?
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Call us and we&apos;ll help you choose the right service.
              313/317 Oldham Road, Manchester M40 7PS
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
