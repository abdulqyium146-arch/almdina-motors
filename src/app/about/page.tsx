import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Al Medina Motors — Independent Car Inspection Manchester",
  description:
    "Al Medina Motors is an independent car inspection station at 313/317 Oldham Road, Manchester M40 7PS. 4.3★ rated by 341 drivers. Honest, thorough, transparent.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Al Medina Motors | Car Inspection Station Manchester",
    description:
      "Independent vehicle inspection garage on Oldham Road, Manchester. Learn about our team, our values, and why 341+ drivers rate us 4.3★.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Al Medina Motors",
  url: "https://www.almedinamotors.co.uk/about",
  mainEntity: {
    "@type": ["LocalBusiness", "AutoRepair"],
    "@id": "https://www.almedinamotors.co.uk/#business",
    name: "Al Medina Motors",
    description:
      "Independent car inspection station in Manchester offering pre-purchase inspections, full vehicle checks, emissions testing, and diagnostic checks.",
    telephone: "+441612020033",
    address: {
      "@type": "PostalAddress",
      streetAddress: "313/317 Oldham Road",
      addressLocality: "Manchester",
      postalCode: "M40 7PS",
      addressCountry: "GB",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      reviewCount: "341",
      bestRating: "5",
    },
  },
};

const values = [
  {
    title: "Complete Independence",
    desc: "We have no financial relationship with any car seller, dealer, or finance company. Our only client is you — the buyer.",
  },
  {
    title: "Absolute Honesty",
    desc: "We tell you everything we find, without softening the blow. A difficult truth is always better than an expensive surprise.",
  },
  {
    title: "Technical Excellence",
    desc: "Our technicians use professional-grade diagnostic equipment and undergo continuous training across all major makes and models.",
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden charges, no upselling, no pressure. You get a clear price upfront and a detailed report upon completion.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* Hero */}
        <section className="bg-slate-900 text-white px-4 pt-14 pb-14">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">
              About Us
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-5 tracking-tight leading-tight">
              Manchester&apos;s Independent
              <span className="text-red-500"> Car Inspection Station</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Al Medina Motors is an independent vehicle inspection garage at
              313/317 Oldham Road, Manchester M40 7PS. We&apos;re rated 4.3★ by
              341 verified Google reviewers — trusted by hundreds of Greater
              Manchester drivers every year.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="bg-white px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              Who We Are
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Al Medina Motors is a family-run, independent car inspection
              station based on Oldham Road in Manchester M40 — serving drivers
              across the whole of Greater Manchester, including Salford, Oldham,
              Rochdale, Stockport, Bolton, Bury, Trafford, and Tameside.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              We specialise in <strong>pre-purchase car inspections</strong>,{" "}
              <strong>full 100-point vehicle checks</strong>,{" "}
              <strong>car emissions testing</strong>, and{" "}
              <strong>professional OBD diagnostic checks</strong> for all makes
              and models. Our technicians have specialist expertise in BMW,
              Audi, Volkswagen, Mercedes-Benz, Porsche, Volvo, Škoda, Nissan,
              and Kia — using brand-specific diagnostic equipment alongside
              professional universal tools.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Unlike dealerships and seller-arranged inspections, we are
              completely independent — with no financial ties to any car seller,
              dealer, or finance provider. Our only responsibility is to you,
              the buyer, and to giving you a completely honest picture of any
              vehicle you&apos;re considering.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We&apos;re proud of our 4.3★ Google rating — built entirely on
              honest, thorough work and the trust of Manchester drivers who
              return to us time and again.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="bg-red-600 text-white px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Our Values
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map(({ title, desc }) => (
                <div
                  key={title}
                  className="bg-red-700/50 border border-red-500/30 rounded-xl p-5"
                >
                  <div className="font-bold text-sm mb-1.5">✓ {title}</div>
                  <div className="text-red-100 text-sm leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="bg-white px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              Find Us
            </h2>
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div>
                <address className="not-italic space-y-2 text-slate-600 text-sm mb-4">
                  <div className="font-bold text-slate-900 text-base">
                    Al Medina Motors
                  </div>
                  <div>313/317 Oldham Road</div>
                  <div>Manchester, M40 7PS</div>
                  <div>Greater Manchester, England</div>
                </address>
                <a
                  href="tel:+441612020033"
                  className="text-red-600 font-bold text-lg block mb-4 hover:text-red-700"
                >
                  0161 202 0033
                </a>
                <div className="text-slate-500 text-sm space-y-1">
                  <div>Mon – Fri: 8:00am – 6:00pm</div>
                  <div>Saturday: 8:00am – 5:00pm</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
              <div>
                <div className="text-slate-600 text-sm leading-relaxed mb-4">
                  Our Oldham Road location is easily accessible from Manchester
                  city centre, Oldham, Rochdale, Salford, Stockport, and all
                  parts of Greater Manchester — with free parking available
                  on-site.
                </div>
                <Link
                  href="/locations"
                  className="text-red-600 hover:underline text-sm font-semibold"
                >
                  → View all service areas
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 h-64">
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
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white px-4 py-12 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">
              Book an Inspection Today
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Same-day available · 100-point check · Written report
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+441612020033"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                0161 202 0033
              </a>
              <Link
                href="/book-inspection"
                className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Book Online
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
