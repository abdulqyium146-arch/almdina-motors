import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: "Car Inspection Manchester | Al Medina Motors",
    template: `%s | Al Medina Motors`,
  },

  description: SITE.description,

  keywords: [
    "car inspection Manchester",
    "pre purchase car inspection Manchester",
    "vehicle check Manchester",
    "used car inspection Manchester",
    "car check before buying",
    "independent car inspection",
    "vehicle inspection service Manchester",
    "bmw inspection Manchester",
    "audi inspection Manchester",
    "car emissions testing Manchester",
    "pre purchase inspection",
    "mechanic check car before buying",
    "comprehensive vehicle inspection",
    "100 point car inspection",
  ],

  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE.url,
    siteName: SITE.name,
    title: "Car Inspection Manchester | Al Medina Motors",
    description: SITE.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Al Medina Motors – Car Inspection Station Manchester",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Car Inspection Manchester | Al Medina Motors",
    description: SITE.description,
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: "/apple-touch-icon.png",
  },

  other: {
    "geo.region": "GB-MAN",
    "geo.placename": "Manchester",
    "geo.position": "53.5020;-2.1890",
    ICBM: "53.5020, -2.1890",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#dc2626",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
