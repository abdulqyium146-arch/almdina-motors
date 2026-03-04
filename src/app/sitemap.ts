import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { LOCATIONS } from "@/lib/locations";
import { SERVICES } from "@/lib/services-data";

const base = SITE.url;

// Fixed dates — Google uses lastModified to decide recrawl frequency.
// Use real dates, not build time, so they don't shift on every deploy.
const SITE_LAUNCHED = new Date("2025-01-01");
const LAST_UPDATED = new Date("2025-03-01");

const BLOG_POSTS: { slug: string; published: Date }[] = [
  {
    slug: "how-to-choose-car-inspection-manchester",
    published: new Date("2025-01-15"),
  },
  {
    slug: "common-car-problems-pre-purchase-inspection",
    published: new Date("2025-02-01"),
  },
  {
    slug: "what-to-look-for-buying-used-car-manchester",
    published: new Date("2025-02-20"),
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/services`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/locations`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/book-inspection`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: SITE_LAUNCHED,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/contact`,
      lastModified: SITE_LAUNCHED,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${base}/blog`,
      lastModified: BLOG_POSTS[BLOG_POSTS.length - 1].published,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((svc) => ({
    url: `${base}/services/${svc.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const locationRoutes: MetadataRoute.Sitemap = LOCATIONS.map((loc) => ({
    url: `${base}/locations/${loc.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map(({ slug, published }) => ({
    url: `${base}/blog/${slug}`,
    lastModified: published,
    changeFrequency: "yearly" as const,
    priority: 0.65,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...blogRoutes,
  ];
}
