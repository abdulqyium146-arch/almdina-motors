import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Al Medina Motors — Car Inspection Manchester",
  description:
    "Contact Al Medina Motors for car inspection bookings in Manchester. Call 0161 202 0033 or visit 313/317 Oldham Road, Manchester M40 7PS. Mon–Fri 8am–6pm, Sat 8am–5pm.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Al Medina Motors Manchester",
    description:
      "Get in touch with Al Medina Motors — independent car inspection on Oldham Road, Manchester M40 7PS.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Al Medina Motors",
  url: "https://www.almedinamotors.co.uk/contact",
  mainEntity: {
    "@type": ["LocalBusiness", "AutoRepair"],
    "@id": "https://www.almedinamotors.co.uk/#business",
    name: "Al Medina Motors",
    telephone: "+441612020033",
    email: "info@almedinamotors.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "313/317 Oldham Road",
      addressLocality: "Manchester",
      postalCode: "M40 7PS",
      addressCountry: "GB",
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
  },
};

const contactMethods = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.58l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    label: "Phone",
    value: "0161 202 0033",
    href: "tel:+441612020033",
    note: "Fastest way to book — call for same-day availability",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: "info@almedinamotors.co.uk",
    href: "mailto:info@almedinamotors.co.uk",
    note: "For non-urgent enquiries — we aim to reply within 24 hours",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.013 3.5-4.428 3.5-7.327A8 8 0 004.5 12.25c0 2.899 1.556 5.314 3.5 7.327a19.578 19.578 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd"/>
      </svg>
    ),
    label: "Address",
    value: "313/317 Oldham Road, Manchester M40 7PS",
    href: "https://share.google/uZUwvdIEIlOkhy5Nf",
    note: "Free parking on-site · Easily accessible from all Greater Manchester areas",
  },
];

export default function ContactPage() {
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
              Get in Touch
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
              Contact <span className="text-red-500">Al Medina Motors</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Book a car inspection, ask about our services, or get directions
              to our Manchester garage. We&apos;re here to help.
            </p>
          </div>
        </section>

        {/* Contact cards */}
        <section className="bg-white px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-5 mb-12">
              {contactMethods.map(({ icon, label, value, href, note }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center text-center bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 rounded-2xl p-6 transition-colors"
                >
                  <div className="w-12 h-12 bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white rounded-xl flex items-center justify-center mb-4 transition-colors">
                    {icon}
                  </div>
                  <div className="font-bold text-slate-900 text-sm mb-1">{label}</div>
                  <div className="text-red-600 font-semibold text-sm mb-2">{value}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{note}</div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-12">
              <h2 className="font-bold text-slate-900 text-lg mb-4">Opening Hours</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { day: "Monday", hours: "8:00am – 6:00pm" },
                  { day: "Tuesday", hours: "8:00am – 6:00pm" },
                  { day: "Wednesday", hours: "8:00am – 6:00pm" },
                  { day: "Thursday", hours: "8:00am – 6:00pm" },
                  { day: "Friday", hours: "8:00am – 6:00pm" },
                  { day: "Saturday", hours: "8:00am – 5:00pm" },
                  { day: "Sunday", hours: "Closed" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700">{day}</span>
                    <span className={hours === "Closed" ? "text-slate-400" : "text-slate-600"}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-4">
                Same-day appointments available subject to availability — call
                early to check slots.
              </p>
            </div>

            {/* Map */}
            <h2 className="font-bold text-slate-900 text-xl mb-4">Find Us</h2>
            <div className="rounded-2xl overflow-hidden border border-slate-200 h-72">
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
            <p className="text-slate-500 text-xs mt-3 text-center">
              313/317 Oldham Road, Manchester M40 7PS · Free parking on-site
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white px-4 py-12 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">
              Book Your Inspection Now
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Call for same-day availability — Mon–Sat
            </p>
            <a
              href="tel:+441612020033"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl text-xl transition-colors"
            >
              0161 202 0033
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
