import { faqs } from "../lib/data/faq";
import { products } from "../lib/data/products";
import { reviews } from "../lib/data/reviews";
import { siteConfig } from "../lib/site";

const city = siteConfig.address.city;
const businessId = `${siteConfig.url}/#business`;
const websiteId = `${siteConfig.url}/#website`;
const personId = `${siteConfig.url}/#owner`;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Canonical absolute URL for a public asset. Strips a leading "./", "/" or the
// deploy basePath so JSON-LD always points at siteConfig.url regardless of how
// the asset path was built (raw string or asset()).
function absUrl(path: string) {
  let clean = path.replace(/^\.?\//, "");
  if (basePath && clean.startsWith(basePath.replace(/^\//, "") + "/")) {
    clean = clean.slice(basePath.replace(/^\//, "").length + 1);
  }
  return `${siteConfig.url}/${clean}`;
}

function firstPrice(priceText: string) {
  const digits = priceText.replace(/[^\d]/g, "");
  return digits ? Number(digits) : undefined;
}

const brand = {
  "@type": "Brand",
  name: siteConfig.brand,
};

const merchantReturnPolicy = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: siteConfig.address.country,
  returnPolicyCategory:
    "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 14,
  returnMethod: "https://schema.org/ReturnInStore",
  returnFees: "https://schema.org/FreeReturn",
};

// Доставки товаров нет — только самовывоз из салона.
const shippingDetails = {
  "@type": "OfferShippingDetails",
  doesNotShip: true,
  shippingDestination: {
    "@type": "DefinedRegion",
    addressCountry: siteConfig.address.country,
  },
};

function productAggregateRating() {
  return {
    "@type": "AggregateRating",
    ratingValue: siteConfig.rating.value,
    bestRating: 5,
    ratingCount: siteConfig.rating.count,
  };
}

function productReview(name: string) {
  return {
    "@type": "Review",
    author: { "@type": "Person", name: reviews[0]?.name ?? "Клиент" },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
    },
    reviewBody: `«${name}» — заказывали в «${siteConfig.brand}». ${
      reviews[0]?.text ?? "Всё сделали качественно и в срок."
    }`,
    publisher: { "@type": "Organization", name: siteConfig.brand },
  };
}

function localBusinessSchema() {
  return {
    "@type": ["LocalBusiness", "FuneralHome"],
    "@id": businessId,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    legalName: siteConfig.ip,
    brand,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    taxID: siteConfig.inn,
    identifier: [
      { "@type": "PropertyValue", propertyID: "ОГРНИП", value: siteConfig.ogrnip },
      { "@type": "PropertyValue", propertyID: "ИНН", value: siteConfig.inn },
    ],
    image: absUrl("images/owner.webp"),
    logo: absUrl("images/dove.svg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lon,
    },
    openingHours: siteConfig.openingHours,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "00:00",
    },
    areaServed: {
      "@type": "City",
      name: city,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      bestRating: 5,
      ratingCount: siteConfig.rating.count,
    },
    sameAs: [siteConfig.links.gis2, siteConfig.links.yandexMaps],
    priceRange: "₽₽",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Ритуальные услуги и товары в ${city}`,
      itemListElement: [
        ...siteConfig.services.map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            areaServed: city,
            provider: { "@id": businessId },
          },
        })),
        ...products.map((product) => ({
          "@type": "Product",
          name: product.title,
          description: product.text,
          image: absUrl(product.image),
          brand,
          aggregateRating: productAggregateRating(),
          review: productReview(product.title),
          offers: {
            "@type": "Offer",
            price: firstPrice(product.price),
            priceCurrency: "RUB",
            availability: "https://schema.org/InStoreOnly",
            availableDeliveryMethod: "https://schema.org/OnSitePickup",
            url: `${siteConfig.url}/#products`,
            priceValidUntil: `${new Date().getFullYear()}-12-31`,
            seller: { "@id": businessId },
            areaServed: { "@type": "City", name: city },
            hasMerchantReturnPolicy: merchantReturnPolicy,
            shippingDetails,
          },
        })),
      ],
    },
    employee: { "@id": personId },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.text,
      publisher: { "@type": "Organization", name: review.source },
    })),
  };
}

function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "ru-RU",
    publisher: { "@id": businessId },
  };
}

function faqSchema() {
  return {
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

function ownerSchema() {
  return {
    "@type": "Person",
    "@id": personId,
    name: siteConfig.owner.name,
    jobTitle: siteConfig.owner.jobTitle,
    image: absUrl(siteConfig.owner.image),
    worksFor: { "@id": businessId },
    knowsAbout: [
      "Организация похорон",
      "Ритуальные услуги",
      "Похоронное бюро",
      "Ритуальные служба",
      "Похоронная служба",
      "Кремация",
    ],
  };
}

export function buildJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      websiteSchema(),
      localBusinessSchema(),
      faqSchema(),
      ownerSchema(),
    ],
  };
}
