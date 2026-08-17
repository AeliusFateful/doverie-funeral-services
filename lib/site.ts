export const siteConfig = {
  name: "Доверие",
  legalName: "Ритуальная служба «Доверие»",
  title: "Ритуальные услуги в Кемерово — агентство «Доверие»",
  description:
    "Ритуальное агентство «Доверие» в Кемерово. Организация похорон, вызов ритуального агента, кремация, оформление документов, памятники и ритуальные товары. Похоронное бюро полного цикла. Круглосуточный выезд агента за 30–40 минут. Звонок бесплатный.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://doverie-kemerovo.ru",
  phone: "+79001068023",
  phoneDisplay: "+7 900 106-80-23",
  address: {
    street: "ул. Металлистов, 1а/3",
    city: "Кемерово",
    region: "Кемеровская область",
    country: "RU",
    postalCode: "650000",
    full: "ул. Металлистов, 1а/3, Кемерово",
  },
  geo: {
    lat: 55.401657450030015,
    lon: 86.04440689086914,
    region: "RU-KEM",
  },
  owner: {
    name: "Сергей Равильевич Гусманов",
    jobTitle: "Владелец агентства «Доверие»",
    image: "/images/Sergey/Sergey.webp",
  },
  links: {
    gis2: "https://2gis.ru/kemerovo/firm/70000001091831399",
    yandexMaps: "https://yandex.ru/maps/org/doveriye/189836077749",
  },
  rating: {
    value: 5,
    count: 99,
    countLabel: "99+ оценок",
  },
  openingHours: "Mo-Su 00:00-24:00",
  agentArrivalMinutes: "15–30",
  lastUpdated: "2026-08-17",
  services: [
    "Организация похорон",
    "Вызов ритуального агента",
    "Оформление документов",
    "Кремация",
    "Транспортировка и катафалк",
    "Прощальный зал и церемония",
    "Памятники и благоустройство",
  ],
} as const;

export function telHref(phone: string = siteConfig.phone) {
  return `tel:${phone}`;
}
