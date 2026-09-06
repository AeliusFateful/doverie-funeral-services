import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { asset } from "@/lib/utils";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.legalName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#12100e",
    theme_color: "#12100e",
    lang: "ru",
    icons: [
      {
        src: asset("images/dove.svg"),
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
