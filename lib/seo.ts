import type { Metadata } from "next";
import { siteConfig } from "../lib/site";

const city = siteConfig.address.city;

export const seoKeywords = [
  `ритуальные услуги ${city}`,
  `организация похорон ${city}`,
  `вызов ритуального агента ${city}`,
  `похоронное бюро ${city}`,
  `похоронное агентство ${city}`,
  `похоронное агентство премиум`,
  `ритуальное агентство ${city}`,
  `ритуальное агентство премиум`,
  `ритуальная служба ${city}`,
  `похороны ${city}`,
  `похоронные услуги`,
  `похоронные услуги премиум`,
  `похороные услуги ${city}`,
  `ритуальные услуги в ${city}`,
  `организация похорон в ${city}`,
  `организация похорон премиум`,
  `ритуальный агент ${city}`,
  `кремация ${city}`,
  `ритуальные товары ${city}`,
  `памятники ${city}`,
  `памятники на могилу`,
  `надгробия на могилу`,
  `гробы ${city}`,
  `венки ${city}`,
  `кресты ${city}`,
  `катафалк ${city}`,
  `оформление документов похорон ${city}`,
  `круглосуточные ритуальные услуги ${city}`,
  `${siteConfig.name} ритуальные услуги`,
  `ритуальные услуги ${siteConfig.name}`,
  "ритуальные услуги",
  "организация похорон",
  "вызов ритуального агента",
  "ритуальный агент цена",
  "организация похорон цена",
  "похоронное бюро недорого",
  "ритуальная служба недорого",
  "ритуальная служба премиум",
  "похороны заказать",
  "ритуальная служба заказать",
  `бюро ритуальных услуг ${city}`,
  `бюро похорон ${city}`,
  `бюро похорон`,
  `бюро похорон премиум`,
  `бюро похорон заказать`,
  `Ритуальные услуги ${city} недорого`,
  `Ритуальные услуги ${city} заказать`,
  `бюро похорон лучшие`,
  `ритуальный агент лучшие`,
  `ритуальный агент премиум`,
  `онлайн ритуальная служба`,
] as const;

const geoMeta = {
  "geo.region": siteConfig.geo.region,
  "geo.placename": city,
  "geo.position": `${siteConfig.geo.lat};${siteConfig.geo.lon}`,
  ICBM: `${siteConfig.geo.lat}, ${siteConfig.geo.lon}`,
} as const;

const ogImage = {
  url: "./images/dove.svg",
  width: 512,
  height: 512,
  alt: `${siteConfig.name} — ритуальные услуги в ${city}`,
} as const;

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...seoKeywords],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "business",
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "ru-RU": siteConfig.url,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteConfig.url,
    siteName: siteConfig.name,
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
      title,
      description,
      url,
      images: [ogImage],
    },
    twitter: {
      title,
      description,
      images: [ogImage.url],
    },
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}
