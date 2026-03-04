import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Al Medina Motors — Car Inspection Manchester",
    short_name: "Al Medina Motors",
    description:
      "Independent car inspection & pre-purchase vehicle check in Manchester. 4.3★ rated. Call 0161 202 0033.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#dc2626",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
