import { siteConfig } from "../lib/site";
export const dynamic = "force-static";

export default function sitemap() {
  const base = siteConfig.url;
  const lastModified = new Date(siteConfig.lastUpdated);

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
