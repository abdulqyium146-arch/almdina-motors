import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Common Car Problems Found During Pre-Purchase Inspections | Al Medina Motors",
  description:
    "Our Manchester mechanics share the most common — and most costly — faults found during pre-purchase car inspections. Read before buying a used car.",
  alternates: { canonical: "/blog/common-car-problems-pre-purchase-inspection" },
  openGraph: {
    title: "Common Car Problems Found During Pre-Purchase Inspections",
    description:
      "The most frequent faults our Manchester mechanics find during used car inspections — and how much they cost to fix.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Common Car Problems Found During Pre-Purchase Inspections",
  description:
    "The most common and costly faults found during pre-purchase car inspections in Manchester, from Al Medina Motors' experienced technicians.",
  author: {
    "@type": "Organization",
    name: "Al Medina Motors",
    url: "https://www.almedinamotors.co.uk",
  },
  publisher: {
    "@type": "Organization",
    name: "Al Medina Motors",
    logo: { "@type": "ImageObject", url: "https://www.almedinamotors.co.uk/og-image.png" },
  },
  datePublished: "2025-11-03",
  dateModified: "2025-11-03",
  url: "https://www.almedinamotors.co.uk/blog/common-car-problems-pre-purchase-inspection",
  mainEntityOfPage: "https://www.almedinamotors.co.uk/blog/common-car-problems-pre-purchase-inspection",
};

const commonFaults = [
  {
    title: "Timing Chain / Belt Wear",
    severity: "Critical",
    cost: "£500–£2,000+",
    desc: "Worn or stretched timing chains are one of the most common — and most expensive — faults we find on used BMWs, Audis, and Volkswagens. A snapped timing chain can destroy an engine entirely. Without a diagnostic scan and physical inspection, this fault is almost impossible for a buyer to detect.",
  },
  {
    title: "Hidden Accident Damage",
    severity: "High",
    cost: "£200–£5,000+",
    desc: "Sellers often repaint or fill over accident damage rather than disclosing it. We use trained eyes and reference guide measurements to detect mismatched panel gaps, overspray, filler, and structural repairs that suggest a significant previous collision.",
  },
  {
    title: "Worn Brakes & Discs",
    severity: "Safety Critical",
    cost: "£150–£600",
    desc: "Brake pads and discs are often near the end of their life when cars appear on the used market. This is something sellers rarely disclose. We measure pad thickness and inspect disc condition as standard in every pre-purchase inspection.",
  },
  {
    title: "DPF / Catalytic Converter Issues",
    severity: "High",
    cost: "£300–£1,500+",
    desc: "Diesel particulate filter (DPF) and catalytic converter faults are extremely common on diesel cars used primarily for short, urban journeys. Replacement can be very expensive — and sellers frequently clear the warning light before putting a car up for sale.",
  },
  {
    title: "Suspension Wear",
    severity: "Medium–High",
    cost: "£150–£800",
    desc: "Worn bushes, ball joints, and shock absorbers are common on higher-mileage cars. They affect handling and safety, but are often masked during a brief test drive. Our inspection physically checks every suspension component.",
  },
  {
    title: "Engine Oil & Coolant Issues",
    severity: "High",
    cost: "£100–£3,000+",
    desc: "Milky oil or coolant, low fluid levels, or signs of recent topping-up can indicate head gasket failure — one of the most expensive engine repairs. We check all fluids and look for the tell-tale signs of coolant-oil contamination.",
  },
  {
    title: "Stored OBD Fault Codes",
    severity: "Variable",
    cost: "£50–£2,000+",
    desc: "Sellers frequently clear fault codes before advertising a car. However, many faults return quickly, and our professional diagnostic equipment captures even recently-cleared codes and 'pending' faults that a basic reader would miss.",
  },
  {
    title: "Gearbox Problems",
    severity: "High",
    cost: "£500–£3,000+",
    desc: "DSG and dual-clutch gearboxes in particular are prone to expensive issues that can be hidden with a fresh oil change. We put cars through their full driving range on a ramp to assess gearbox behaviour under load.",
  },
];

export default function BlogPost2() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* Breadcrumb */}
        <nav className="bg-slate-100 border-b border-slate-200 px-4 py-2.5" aria-label="Breadcrumb">
          <ol className="max-w-3xl mx-auto flex items-center gap-1.5 text-xs text-slate-500">
            <li><Link href="/" className="hover:text-slate-900 transition-colors">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/blog" className="hover:text-slate-900 transition-colors">Blog</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-slate-900 font-medium" aria-current="page">Common Faults</li>
          </ol>
        </nav>

        {/* Header */}
        <section className="bg-slate-900 text-white px-4 pt-12 pb-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-700/40 text-red-300 text-xs font-semibold px-2.5 py-1 rounded-full">Inspection Insights</span>
              <time dateTime="2025-11-03" className="text-slate-400 text-xs">3 November 2025</time>
              <span className="text-slate-500 text-xs">· 8 min read</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-4">
              Common Car Problems Found During Pre-Purchase Inspections
            </h1>
            <p className="text-slate-300 leading-relaxed">
              Our mechanics have carried out thousands of pre-purchase car inspections across Manchester and Greater Manchester. Here are the most common — and most expensive — faults we find, and why a professional inspection is the only reliable way to spot them before you buy.
            </p>
          </div>
        </section>

        {/* Body */}
        <article className="bg-white px-4 py-14">
          <div className="max-w-3xl mx-auto">

            <p className="text-slate-600 leading-relaxed mb-8">
              The used car market in Manchester is competitive — and sellers don't always disclose known faults. In fact, our experience shows that <strong>more than 60% of pre-purchase inspections reveal at least one significant fault</strong> the buyer was unaware of. Below are the eight most common problems our technicians encounter.
            </p>

            <div className="space-y-6 mb-12">
              {commonFaults.map((fault, i) => (
                <div key={fault.title} className="border border-slate-200 rounded-2xl overflow-hidden">
                  <div className="bg-slate-50 px-5 py-4 flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3">
                      <span className="bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <h2 className="font-bold text-slate-900">{fault.title}</h2>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        fault.severity === "Critical" || fault.severity === "Safety Critical"
                          ? "bg-red-100 text-red-700"
                          : fault.severity === "High"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {fault.severity}
                      </span>
                      <span className="text-xs font-semibold text-slate-600 bg-slate-200 px-2.5 py-1 rounded-full">
                        Repair: {fault.cost}
                      </span>
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-slate-600 text-sm leading-relaxed">{fault.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-slate-900 mb-4">The Bottom Line</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The cost of a professional pre-purchase inspection in Manchester is a fraction of the potential repair bills these faults can generate. Our inspection fee regularly saves buyers hundreds — sometimes thousands — of pounds, either by identifying faults that allow price renegotiation, or by highlighting issues serious enough to walk away from altogether.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Don't buy a used car in Manchester or Greater Manchester without getting it independently inspected first. Call Al Medina Motors on <strong>0161 202 0033</strong> to book.
            </p>

            {/* Internal links */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">Related Articles &amp; Services</h3>
              <div className="flex flex-col gap-2">
                <Link href="/services/pre-purchase-car-inspection" className="text-red-600 hover:underline text-sm">→ Pre-Purchase Car Inspection in Manchester</Link>
                <Link href="/services/used-car-inspection" className="text-red-600 hover:underline text-sm">→ Used Car Inspection Service</Link>
                <Link href="/blog/how-to-choose-car-inspection-manchester" className="text-red-600 hover:underline text-sm">→ How to Choose the Right Car Inspection Service</Link>
                <Link href="/blog/what-to-look-for-buying-used-car-manchester" className="text-red-600 hover:underline text-sm">→ What to Look for When Buying a Used Car in Manchester</Link>
              </div>
            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="bg-slate-900 text-white px-4 py-12 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">Don&apos;t Buy Blind — Get an Independent Inspection</h2>
            <p className="text-slate-400 text-sm mb-6">313/317 Oldham Road, Manchester M40 7PS · Same day available</p>
            <a href="tel:+441612020033" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors">
              0161 202 0033
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
