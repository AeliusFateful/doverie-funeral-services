import { siteConfig } from "@/lib/site";

export type ReviewItem = {
  name: string;
  source: string;
  rating: number;
  text: string;
};

export type ReviewPlatform = {
  name: string;
  rating: string;
  count: string;
  href: string;
};

export const reviewPlatforms: ReviewPlatform[] = [
  {
    name: "2ГИС",
    rating: "5.0",
    count: siteConfig.rating.countLabel,
    href: siteConfig.links.gis2,
  },
  {
    name: "Яндекс Карты",
    rating: "5.0",
    count: "Отзывы на картах",
    href: siteConfig.links.yandexMaps,
  },
];

export const reviews: ReviewItem[] = [
  {
    name: "Ирина М.",
    source: "2ГИС",
    rating: 5,
    text: "В самый тяжёлый момент нам помогли собраться. Агент приехал ночью, всё взял на себя — документы, транспорт, зал. Ни одного лишнего вопроса, только поддержка. Спасибо, что были рядом.",
  },
  {
    name: "Сергей В.",
    source: "2ГИС",
    rating: 5,
    text: "Цену назвали сразу и не изменили ни на рубль. Всё честно, по договору, с чеком. Организовали прощание достойно и спокойно. Рекомендую людям, попавшим в беду.",
  },
  {
    name: "Наталья К.",
    source: "2ГИС",
    rating: 5,
    text: "Заказывали памятник и благоустройство. Сделали красиво, гравировка идеальная, установили в срок. Отдельное спасибо за терпение и человеческое отношение к нашей семье.",
  },
  {
    name: "Дмитрий А.",
    source: "2ГИС",
    rating: 5,
    text: "Обратились по рекомендации и не пожалели. Один специалист вёл нас от начала и до конца, всегда на связи. Чувствуется опыт и уважение к людям.",
  },
];
