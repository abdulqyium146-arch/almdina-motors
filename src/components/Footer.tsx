import Link from "next/link";
import { SITE } from "@/lib/site";

const PHONE_HREF = `tel:${SITE.phone}`;
const GOOGLE_PROFILE = "https://share.google/uZUwvdIEIlOkhy5Nf";
const FACEBOOK_URL =
  "https://www.facebook.com/p/Al-Medina-Motors-100021212835789/";

const serviceLinks = [
  { label: "Pre Purchase Car Inspection", href: "/services/pre-purchase-car-inspection" },
  { label: "Full Vehicle Check", href: "/services/full-vehicle-check" },
  { label: "Car Emissions Testing", href: "/services/car-emissions-testing" },
  { label: "Diagnostic Check", href: "/services/diagnostic-check" },
  { label: "Used Car Inspection", href: "/services/used-car-inspection" },
];

const locationLinks = [
  { label: "Manchester", href: "/locations/manchester" },
  { label: "Salford", href: "/locations/salford" },
  { label: "Oldham", href: "/locations/oldham" },
  { label: "Stockport", href: "/locations/stockport" },
  { label: "Rochdale", href: "/locations/rochdale" },
  { label: "Bolton", href: "/locations/bolton" },
  { label: "Bury", href: "/locations/bury" },
  { label: "Trafford", href: "/locations/trafford" },
  { label: "Tameside", href: "/locations/tameside" },
];

const ExternalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3.5 h-3.5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 px-4 pt-12 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-sm">
          {/* Brand */}
          <div>
            <div className="text-white font-bold text-base mb-3">
              Al Medina Motors
            </div>
            <address className="not-italic space-y-1 text-slate-400 mb-4">
              <div>313/317 Oldham Road</div>
              <div>Manchester, M40 7PS</div>
              <div>Greater Manchester, England</div>
            </address>
            <a
              href={PHONE_HREF}
              className="text-white font-semibold hover:text-red-400 transition-colors block mb-3"
            >
              {SITE.phoneDisplay}
            </a>
            <div className="text-yellow-400 text-xs mb-1">
              ★★★★☆ {SITE.rating} · {SITE.reviewCount} Google Reviews
            </div>
            <div className="text-slate-500 text-xs">
              Mon–Fri 8:00am–6:00pm · Sat 8:00am–5:00pm
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-white font-bold text-base mb-3">Services</div>
            <ul className="space-y-2">
              {serviceLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <div className="text-white font-bold text-base mb-3">Locations</div>
            <ul className="space-y-2">
              {locationLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Car Inspection in {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links & Social */}
          <div>
            <div className="text-white font-bold text-base mb-3">
              Quick Links
            </div>
            <ul className="space-y-2 mb-6">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Blog &amp; Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/book-inspection"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Book Inspection
                </Link>
              </li>
            </ul>

            <div className="text-white font-bold text-sm mb-3">Follow Us</div>
            <div className="flex flex-col gap-2">
              <a
                href={GOOGLE_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-xs"
              >
                <ExternalIcon />
                Google Business Profile
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-xs"
              >
                <ExternalIcon />
                Facebook Page
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden border border-slate-800 h-48 mb-8">
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

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 text-xs text-slate-600 text-center">
          <p>
            © {new Date().getFullYear()} Al Medina Motors · Car Inspection
            Station · 313/317 Oldham Road, Manchester M40 7PS, England
          </p>
          <p className="mt-1">
            Site by{" "}
            <a
              href="https://share.google/dWOmhT6JRQ7kzzaZO"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition-colors underline underline-offset-2"
            >
              Web Developer Manchester
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
