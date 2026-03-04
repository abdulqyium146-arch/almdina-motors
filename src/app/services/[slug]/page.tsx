import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES, getService } from "@/lib/services-data";
import { LOCATIONS } from "@/lib/locations";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const svc = getService(params.slug);
  if (!svc) return {};
  return {
    title: `${svc.name} Manchester | Al Medina Motors`,
    description: svc.metaDesc,
    alternates: { canonical: `/services/${svc.slug}` },
    openGraph: {
      title: `${svc.name} in Manchester | Al Medina Motors`,
      description: svc.metaDesc,
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

export default function ServicePage({ params }: Props) {
  const svc = getService(params.slug);
  if (!svc) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: svc.schemaName,
        description: svc.schemaDesc,
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
        areaServed: { "@type": "AdministrativeArea", name: "Greater Manchester" },
        url: `https://www.almedinamotors.co.uk/services/${svc.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: svc.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.almedinamotors.co.uk" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.almedinamotors.co.uk/services" },
          { "@type": "ListItem", position: 3, name: svc.name, item: `https://www.almedinamotors.co.uk/services/${svc.slug}` },
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
                href="/services"
                className="hover:text-slate-900 transition-colors"
              >
                Services
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-slate-900 font-medium" aria-current="page">
              {svc.name}
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="bg-slate-900 text-white px-4 pt-12 pb-14">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-red-700/40 text-red-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              {svc.shortDesc}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-5 tracking-tight leading-tight">
              {svc.heroHeading}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {svc.heroPara}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+441612020033"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-7 py-4 rounded-xl text-base transition-colors shadow-lg shadow-red-900/40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.58l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Book Now — 0161 202 0033
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

        {/* Body content */}
        <section className="bg-white px-4 py-14">
          <div className="max-w-3xl mx-auto prose prose-slate max-w-none">
            {svc.body.map((para, i) => (
              <p key={i} className="text-slate-600 leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-red-600 text-white px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              What&apos;s Included
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {svc.benefits.map(({ title, desc }) => (
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

        {/* Testimonials */}
        <section className="bg-slate-50 px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              What Our Customers Say
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {svc.testimonials.map(({ text, name, loc, stars }) => (
                <article
                  key={name}
                  className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col"
                >
                  <div
                    className="flex gap-0.5 mb-3"
                    aria-label={`${stars} out of 5 stars`}
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
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {svc.faqs.map(({ q, a }) => (
                <details
                  key={q}
                  className="group border border-slate-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-semibold text-slate-900 text-sm hover:bg-slate-50 transition-colors list-none">
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

        {/* Internal links to location pages */}
        <section className="bg-slate-50 px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-slate-900 mb-5">
              {svc.name} Available Across Greater Manchester
            </h2>
            <div className="flex flex-wrap gap-2">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:border-red-300 hover:text-red-700 text-slate-700 text-xs font-medium px-3 py-2 rounded-full transition-colors"
                >
                  {svc.name} in {loc.name} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white px-4 py-14 text-center">
          <div className="max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-900/60 border border-green-700 text-green-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
              Same Day Available
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Book Your {svc.name} Today
            </h2>
            <p className="text-slate-400 text-sm mb-7">
              313/317 Oldham Road, Manchester M40 7PS
            </p>
            <a
              href="tel:+441612020033"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-10 py-5 rounded-xl text-xl transition-colors"
            >
              0161 202 0033
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
