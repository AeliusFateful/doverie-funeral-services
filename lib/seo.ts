import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const city = siteConfig.address.city;

export const seoKeywords = [
  `ритуальные услуги ${city}`,
  `ритуальные услуги ${city} круглосуточно`,
  `ритуальные принадлежности ${city}`,
  `организация похорон ${city}`,
  `заказать похороны ${city}`,
  `вызов ритуального агента ${city}`,
  `похоронное бюро ${city}`,
  `похороны под ключ ${city}`,
  `ритуальная служба ${city}`,
  `гробы ${city}`,
  `венки ${city}`,
  `кремация ${city}`,
  `памятники ${city}`,
  `катафалк ${city}`,
  `оформление документов на похороны ${city}`,
  `круглосуточные ритуальные услуги ${city}`,
  `${siteConfig.name} ${city}`,
] as const;

const geoMeta = {
  "geo.region": siteConfig.geo.region,
  "geo.placename": city,
  "geo.position": `${siteConfig.geo.lat};${siteConfig.geo.lon}`,
  ICBM: `${siteConfig.geo.lat}, ${siteConfig.geo.lon}`,
} as const;

const ogImage = {
  url: "/images/og-image.jpg",
  width: 1200,
  height: 1200,
  type: "image/jpeg",
  alt: `${siteConfig.legalName} — ритуальные услуги в ${city}`,
} as const;

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...seoKeywords],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "business",
  formatDetection: { telephone: false, address: false, email: false },
  alternates: {
    canonical: siteConfig.url,
    languages: { "ru-RU": siteConfig.url, "x-default": siteConfig.url },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  other: { ...geoMeta },
};

export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      siteName: siteConfig.legalName,
      title,
      description,
      url,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    ...(noIndex && {
      robots: { index: false, follow: false, nocache: true },
    }),
  };
}
