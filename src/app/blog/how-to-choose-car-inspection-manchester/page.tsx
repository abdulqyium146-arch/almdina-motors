import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Choose the Right Car Inspection Service in Manchester",
  description:
    "Not all car inspections are equal. Learn what to look for when choosing an independent vehicle inspection service in Manchester — and the red flags to avoid.",
  alternates: { canonical: "/blog/how-to-choose-car-inspection-manchester" },
  openGraph: {
    title: "How to Choose the Right Car Inspection Service in Manchester",
    description:
      "Expert guide on choosing an independent car inspection garage in Manchester. Key questions to ask, red flags to avoid, and what a good inspection includes.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose the Right Car Inspection Service in Manchester",
  description:
    "A complete guide to choosing an independent car inspection service in Manchester — what to look for, questions to ask, and red flags to avoid.",
  author: {
    "@type": "Organization",
    name: "Al Medina Motors",
    url: "https://www.almedinamotors.co.uk",
  },
  publisher: {
    "@type": "Organization",
    name: "Al Medina Motors",
    logo: {
      "@type": "ImageObject",
      url: "https://www.almedinamotors.co.uk/og-image.png",
    },
  },
  datePublished: "2025-10-14",
  dateModified: "2025-10-14",
  url: "https://www.almedinamotors.co.uk/blog/how-to-choose-car-inspection-manchester",
  mainEntityOfPage: "https://www.almedinamotors.co.uk/blog/how-to-choose-car-inspection-manchester",
};

export default function BlogPost1() {
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
            <li className="text-slate-900 font-medium" aria-current="page">How to Choose</li>
          </ol>
        </nav>

        {/* Header */}
        <section className="bg-slate-900 text-white px-4 pt-12 pb-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-700/40 text-red-300 text-xs font-semibold px-2.5 py-1 rounded-full">Buying Advice</span>
              <time dateTime="2025-10-14" className="text-slate-400 text-xs">14 October 2025</time>
              <span className="text-slate-500 text-xs">· 6 min read</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-4">
              How to Choose the Right Car Inspection Service in Manchester
            </h1>
            <p className="text-slate-300 leading-relaxed">
              Manchester has plenty of garages offering vehicle inspections — but not all are equal. Here's exactly what to look for when choosing an independent car inspection service, and the questions you should always ask before booking.
            </p>
          </div>
        </section>

        {/* Article body */}
        <article className="bg-white px-4 py-14">
          <div className="max-w-3xl mx-auto prose-like">

            <h2 className="text-xl font-bold text-slate-900 mt-0 mb-4">Why Independence Matters</h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              The most important factor when choosing a car inspection service is <strong>independence</strong>. A dealership or seller-arranged inspection has a financial interest in the sale going through — which means their "inspection" is unlikely to surface problems that might kill the deal.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              A truly independent inspection station — like Al Medina Motors on Oldham Road, Manchester — has no connection to the seller, no commission arrangement, and no incentive to hide faults. Their only job is to tell you the truth about the vehicle's condition.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">What a Good Inspection Should Cover</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              When comparing inspection services in Manchester, ask exactly what's included. A comprehensive pre-purchase car inspection should cover, as a minimum:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Bodywork — accident damage, corrosion, mismatched panels, paint repairs",
                "Engine — condition, leaks, noises, timing components, coolant and oil condition",
                "Gearbox and clutch — smooth operation, signs of wear or slippage",
                "Brakes — pad thickness, disc condition, brake fluid",
                "Suspension and steering — wear, play, shock absorber condition",
                "Tyres — tread depth, condition, age markings",
                "Electrics — all lights, windows, mirrors, heated screens",
                "Full OBD diagnostic scan — reads all stored and pending fault codes",
                "VIN and chassis number verification — confirms the car's identity",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0 text-green-500 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Questions to Ask Before Booking</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Before booking any car inspection in Manchester, ask the garage these questions:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { q: "Are you fully independent from the seller?", a: "The answer must be an unequivocal yes. Any affiliation with a dealer or seller is a red flag." },
                { q: "Do you use professional OBD diagnostic equipment?", a: "A basic code reader isn't enough. Look for a garage that uses professional-grade diagnostic tools with live data capability." },
                { q: "Will I get a written report?", a: "A verbal summary isn't sufficient. You need a written report you can reference, negotiate with, or use as evidence if the seller has misrepresented the vehicle." },
                { q: "Do you have experience with this make and model?", a: "Brand-specific knowledge matters, especially for German marques like BMW, Audi, VW, and Mercedes — where marque-specific faults require specialist diagnostic software." },
                { q: "How long will the inspection take?", a: "A thorough pre-purchase inspection should take at least 1–2 hours. Anything significantly shorter is likely cutting corners." },
              ].map(({ q, a }) => (
                <div key={q} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="font-semibold text-slate-900 text-sm mb-1">Q: {q}</div>
                  <div className="text-slate-600 text-sm">{a}</div>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Red Flags to Watch Out For</h2>
            <ul className="space-y-2 mb-6">
              {[
                "The garage is recommended by the seller",
                "No written report offered",
                "Inspection takes less than 30 minutes",
                "No OBD diagnostic scan included",
                "No physical address or no ability to see the work being done",
                "Unusually low price with no explanation of what's covered",
              ].map((flag) => (
                <li key={flag} className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">✗</span>
                  {flag}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Why Manchester Drivers Choose Al Medina Motors</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Al Medina Motors at 313/317 Oldham Road, Manchester M40 7PS is a fully independent inspection station serving the whole of Greater Manchester. Our team carries out thorough 100-point pre-purchase inspections using professional-grade diagnostic equipment — with no ties to any seller, dealer, or finance company.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              We're rated 4.3★ by 341 verified Google reviewers, and our technicians specialise in BMW, Audi, Volkswagen, Mercedes-Benz, and all other makes. Every inspection includes a full written report and OBD diagnostic scan.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Same-day inspections are available — call <strong>0161 202 0033</strong> to check availability.
            </p>

            {/* Internal links */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">Related Articles &amp; Services</h3>
              <div className="flex flex-col gap-2">
                <Link href="/services/pre-purchase-car-inspection" className="text-red-600 hover:underline text-sm">→ Pre-Purchase Car Inspection in Manchester</Link>
                <Link href="/blog/common-car-problems-pre-purchase-inspection" className="text-red-600 hover:underline text-sm">→ Common Car Problems Found During Pre-Purchase Inspections</Link>
                <Link href="/blog/what-to-look-for-buying-used-car-manchester" className="text-red-600 hover:underline text-sm">→ What to Look for When Buying a Used Car in Manchester</Link>
                <Link href="/services/used-car-inspection" className="text-red-600 hover:underline text-sm">→ Used Car Inspection Service</Link>
              </div>
            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="bg-slate-900 text-white px-4 py-12 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">Book an Independent Inspection Today</h2>
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
