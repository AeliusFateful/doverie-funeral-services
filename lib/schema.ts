import { faqs } from '@/lib/data/faq'
import { reviews } from '@/lib/data/reviews'
import { siteConfig } from '@/lib/site'

const city = siteConfig.address.city
const businessId = `${siteConfig.url}/#business`
const websiteId = `${siteConfig.url}/#website`
const personId = `${siteConfig.url}/#owner`

function funeralHomeSchema() {
  return {
    '@type': 'FuneralHome',
    '@id': businessId,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}/images/Hero-Angel.webp`,
    logo: `${siteConfig.url}/images/dove.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lon,
    },
    openingHours: siteConfig.openingHours,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: {
      '@type': 'City',
      name: city,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.rating.value,
      bestRating: 5,
      ratingCount: siteConfig.rating.count,
    },
    sameAs: [siteConfig.links.gis2, siteConfig.links.yandexMaps],
    priceRange: '₽₽',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Ритуальные услуги в ${city}`,
      itemListElement: siteConfig.services.map((name) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name,
          areaServed: city,
          provider: { '@id': businessId },
        },
      })),
    },
    employee: { '@id': personId },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: review.name },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.text,
      publisher: { '@type': 'Organization', name: review.source },
    })),
  }
}

function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'ru-RU',
    publisher: { '@id': businessId },
  }
}

function faqSchema() {
  return {
    '@type': 'FAQPage',
    '@id': `${siteConfig.url}/#faq`,
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

function ownerSchema() {
  return {
    '@type': 'Person',
    '@id': personId,
    name: siteConfig.owner.name,
    jobTitle: siteConfig.owner.jobTitle,
    image: `${siteConfig.url}${siteConfig.owner.image}`,
    worksFor: { '@id': businessId },
    knowsAbout: [
      'Организация похорон',
      'Ритуальные услуги',
      'Оформление документов',
      'Кремация',
    ],
  }
}

export function buildJsonLdGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [websiteSchema(), funeralHomeSchema(), faqSchema(), ownerSchema()],
  }
}
