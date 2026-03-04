import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Block all bots from internal Next.js paths and non-content routes
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/",
          "/api/",
          "/*.json$",
        ],
      },
      {
        // Googlebot: also block image optimisation endpoint (not indexable content)
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/_next/",
          "/api/",
          "/_next/image",
          "/*.json$",
        ],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
