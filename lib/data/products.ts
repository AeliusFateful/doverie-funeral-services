import { asset } from "@/lib/utils";

export type ProductItem = {
  image: string;
  title: string;
  text: string;
  price: string;
};

export const products: ProductItem[] = [
  {
    image: asset("images/product-coffin.webp"),
    title: "Гробы",
    text: "От лаконичных до премиальных моделей из массива дерева с атласной обивкой.",
    price: "от 5 990 ₽",
  },
  {
    image: asset("images/wreath.webp"),
    title: "Венки и цветы",
    text: "Траурные венки, корзины и живые композиции с лентами и надписями.",
    price: "от 1 490 ₽",
  },
  {
    image: asset("images/product-cross.webp"),
    title: "Кресты",
    text: "Деревянные и металлические кресты, распятия и надгробные символы.",
    price: "от 1 490 ₽",
  },
  {
    image: asset("images/product-gates.webp"),
    title: "Калитки и заборы",
    text: "Конструкции устойчивы к коррозии, температур и ветровым нагрузкам.",
    price: "от 1 590 ₽ за пог. м",
  },
  {
    image: asset("images/clothing.webp"),
    title: "Похоронная одежда",
    text: "Комплекты одежды для захоронения — подберём размер и комплектацию.",
    price: "от 1 990 ₽",
  },
  {
    image: asset("images/product-pamyat.webp"),
    title: "Памятники",
    text: "Гранит и мрамор, гравировка портрета, изготовление и установка.",
    price: "от 11 990 ₽",
  },
  {
    image: asset("images/product-urn.webp"),
    title: "Урны",
    text: "Урны для праха. Захоранивают в землю, помещают в ячейку колумбария или оставляют дома.",
    price: "от 1 490 ₽",
  },
  {
    image: asset("images/product-linen.webp"),
    title: "Ритуальная постель",
    text: "Ритуальный комплект для захоронения, состоящий из пододеяльника, простыни и наволочки.",
    price: "от 990 ₽",
  },
  {
    image: asset("images/product-plaques.webp"),
    title: "Ритуальные таблички",
    text: "Мемориальная пластина с данными об усопшем, закрепляют на крест или памятник.",
    price: "от 990 ₽",
  },
  {
    image: asset("images/funeral-set.webp"),
    title: "Отпевальный набор",
    text: "Комплект религиозных принадлежностей для проведения православного обряда отпевания.",
    price: "от 300 ₽",
  },
  {
    image: asset("images/ribbons.webp"),
    title: "Ритуальные ленты",
    text: "Ленты с индивидуальной надписью, прикрепляются к венкам или корзинкам.",
    price: "от 990 ₽",
  },
];
