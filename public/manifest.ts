import { siteConfig } from "../lib/site";
export const dynamic = "force-static";

export default function manifest() {
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
        src: "../icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
