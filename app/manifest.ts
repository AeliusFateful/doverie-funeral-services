import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { asset } from "@/lib/utils";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const icon = asset("images/dove.svg");

  return {
    id: "/",
    name: `${siteConfig.legalName} — ${siteConfig.address.city}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    dir: "ltr",
    lang: "ru",
    categories: ["business", "lifestyle"],
    background_color: "#12100e",
    theme_color: "#12100e",
    icons: [
      { src: icon, sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: icon, sizes: "any", type: "image/svg+xml", purpose: "maskable" },
    ],
  };
}
