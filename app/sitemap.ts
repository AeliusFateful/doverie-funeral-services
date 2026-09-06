import type { MetadataRoute } from "next";
import { products } from "@/lib/data/products";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
function absUrl(path: string) {
  let clean = path.replace(/^\.?\//, "");
  const bare = basePath.replace(/^\//, "");
  if (bare && clean.startsWith(`${bare}/`)) clean = clean.slice(bare.length + 1);
  return `${siteConfig.url}/${clean}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date(siteConfig.lastUpdated);

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: products.map((p) => absUrl(p.image)),
    },
    {
      url: `${base}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    }
  ];
}
