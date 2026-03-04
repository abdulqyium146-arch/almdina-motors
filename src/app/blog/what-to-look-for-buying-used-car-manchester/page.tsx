import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What to Look for When Buying a Used Car in Manchester",
  description:
    "Complete guide to buying a used car in Manchester — from test drives to finance checks, private sellers to dealers, and why an independent inspection is essential.",
  alternates: { canonical: "/blog/what-to-look-for-buying-used-car-manchester" },
  openGraph: {
    title: "What to Look for When Buying a Used Car in Manchester",
    description:
      "Everything Manchester drivers need to know before buying a used car — checklists, red flags, and why a pre-purchase inspection matters.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What to Look for When Buying a Used Car in Manchester",
  description:
    "A complete buyer's guide for purchasing a used car in Manchester — covering test drives, history checks, common faults, and independent inspections.",
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
  datePublished: "2025-12-01",
  dateModified: "2025-12-01",
  url: "https://www.almedinamotors.co.uk/blog/what-to-look-for-buying-used-car-manchester",
  mainEntityOfPage: "https://www.almedinamotors.co.uk/blog/what-to-look-for-buying-used-car-manchester",
};

const steps = [
  {
    step: "1",
    title: "Research the Market Value",
    body: "Before viewing any car in Manchester, use tools like Auto Trader, Motors.co.uk, and WhatCar? to understand the fair market price for the make, model, year, and mileage you're interested in. Sellers sometimes inflate prices on desirable models — knowing the true value gives you negotiating power.",
  },
  {
    step: "2",
    title: "Run a Full HPI / Vehicle History Check",
    body: "An HPI check (or similar service like Experian AutoCheck) reveals outstanding finance, write-off history, number plate changes, stolen status, and mileage discrepancies. This is a paper check and costs around £10–20. Always run one before viewing — if the seller refuses to share the reg plate, walk away.",
  },
  {
    step: "3",
    title: "Check the Seller's Identity",
    body: "When buying privately in Manchester, verify that the seller's name matches the V5C logbook, their address matches the car's registered address, and the V5C document number hasn't been reported lost or stolen. Mismatched details are a major red flag.",
  },
  {
    step: "4",
    title: "Inspect the Bodywork Carefully",
    body: "Walk slowly around the car in good daylight. Look along each panel at a low angle to spot ripples, waves, or uneven surfaces that suggest accident damage or filler. Check all panel gaps are even — inconsistent gaps indicate a repaired or replaced panel. Look for overspray on rubber seals and plastic trims.",
  },
  {
    step: "5",
    title: "Check Under the Bonnet",
    body: "Look at engine oil condition (dipstick should show clean, amber oil — not dark sludge or milky emulsion). Check coolant colour and level. Look for oil leaks on the engine block or around seals. Inspect hoses and belts for cracking or perishing. If anything looks recently cleaned or repainted, ask why.",
  },
  {
    step: "6",
    title: "Test Every Electrical Feature",
    body: "Turn on every electrical feature — all windows, mirrors, heated seats, heated screens, air conditioning, all lights (including fog lights), Bluetooth, USB ports, and the infotainment system. Electrical repairs in modern cars can be unexpectedly expensive.",
  },
  {
    step: "7",
    title: "Take a Proper Test Drive",
    body: "A test drive should last at least 20 minutes and include a variety of road types — urban roads, faster A-roads, and if possible motorway speeds. Listen for knocking or rattling at low speeds (suspension), vibration through the steering wheel, clutch slippage, gearbox hesitation, and any warning lights illuminating when warm.",
  },
  {
    step: "8",
    title: "Book an Independent Pre-Purchase Inspection",
    body: "This is the most important step — and the one most buyers skip. An independent mechanic will find faults that no private buyer could detect through a visual inspection and test drive alone. At Al Medina Motors, our pre-purchase inspection covers 100+ checkpoints including a full OBD diagnostic scan, VIN verification, and written report. It regularly saves buyers hundreds or thousands of pounds.",
  },
];

export default function BlogPost3() {
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
            <li className="text-slate-900 font-medium" aria-current="page">Buying Guide</li>
          </ol>
        </nav>

        {/* Header */}
        <section className="bg-slate-900 text-white px-4 pt-12 pb-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-700/40 text-red-300 text-xs font-semibold px-2.5 py-1 rounded-full">Buying Guide</span>
              <time dateTime="2025-12-01" className="text-slate-400 text-xs">1 December 2025</time>
              <span className="text-slate-500 text-xs">· 10 min read</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-4">
              What to Look for When Buying a Used Car in Manchester
            </h1>
            <p className="text-slate-300 leading-relaxed">
              Manchester&apos;s used car market is one of the largest in the North West — with thousands of private listings and dealer forecourts to navigate. This complete guide covers everything you need to check before handing over your money.
            </p>
          </div>
        </section>

        {/* Body */}
        <article className="bg-white px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <p className="text-slate-600 leading-relaxed mb-10">
              Buying a used car in Manchester is one of the biggest purchases most people make outside of property. Yet most buyers spend just 20–30 minutes with a vehicle before committing. Follow this 8-step guide to protect yourself — and always end with a professional independent inspection.
            </p>

            <div className="space-y-8 mb-12">
              {steps.map(({ step, title, body }) => (
                <div key={step} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white font-extrabold text-sm rounded-full flex items-center justify-center">
                    {step}
                  </div>
                  <div>
                    <h2 className="font-bold text-slate-900 text-lg mb-2">{title}</h2>
                    <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-10">
              <h2 className="font-bold text-slate-900 mb-4">Quick Checklist — Before You Buy</h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  "Research market value beforehand",
                  "Run an HPI / history check",
                  "Verify seller identity vs V5C",
                  "Inspect bodywork in daylight",
                  "Check all fluids under the bonnet",
                  "Test every electrical feature",
                  "Test drive on multiple road types",
                  "Book an independent inspection",
                  "Get everything agreed in writing",
                  "Never pay by bank transfer to a stranger",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-xl font-bold text-slate-900 mb-4">Private Seller vs Dealer — Key Differences</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">Buying Privately</h3>
                <ul className="space-y-1.5 text-sm text-blue-800">
                  <li>✓ Usually cheaper price</li>
                  <li>✓ Can negotiate more freely</li>
                  <li>✗ Sold as seen — limited legal recourse</li>
                  <li>✗ Seller may not disclose known faults</li>
                  <li>✗ Higher risk of fraud / cloned vehicles</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-900 mb-3">Buying from a Dealer</h3>
                <ul className="space-y-1.5 text-sm text-green-800">
                  <li>✓ Consumer Rights Act protection</li>
                  <li>✓ Finance options available</li>
                  <li>✓ Often includes warranty</li>
                  <li>✗ Higher prices</li>
                  <li>✗ Dealer may prep car to hide faults</li>
                </ul>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed mb-10">
              Whether you buy privately or from a dealer, an <strong>independent pre-purchase inspection</strong> is the only way to get a truly unbiased assessment of the vehicle&apos;s condition. Dealer-prepared cars can look immaculate but hide serious mechanical faults.
            </p>

            {/* Internal links */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">Related Articles &amp; Services</h3>
              <div className="flex flex-col gap-2">
                <Link href="/services/pre-purchase-car-inspection" className="text-red-600 hover:underline text-sm">→ Pre-Purchase Car Inspection in Manchester</Link>
                <Link href="/services/used-car-inspection" className="text-red-600 hover:underline text-sm">→ Used Car Inspection Service</Link>
                <Link href="/blog/common-car-problems-pre-purchase-inspection" className="text-red-600 hover:underline text-sm">→ Common Car Problems Found During Pre-Purchase Inspections</Link>
                <Link href="/blog/how-to-choose-car-inspection-manchester" className="text-red-600 hover:underline text-sm">→ How to Choose the Right Car Inspection Service in Manchester</Link>
              </div>
            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="bg-slate-900 text-white px-4 py-12 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">Ready to Inspect Before You Buy?</h2>
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
