export type ProductItem = {
  image: string;
  title: string;
  text: string;
  price: string;
};

export const products: ProductItem[] = [
  {
    image: "./images/products/product-coffin.webp",
    title: "Гробы",
    text: "От лаконичных до премиальных моделей из массива дерева с атласной обивкой.",
    price: "от 6 990 ₽",
  },
  {
    image: "./images/products/product-wreath.webp",
    title: "Венки и цветы",
    text: "Траурные венки, корзины и живые композиции с лентами и надписями.",
    price: "от 990 ₽",
  },
  {
    image: "./images/products/product-cross.webp",
    title: "Кресты",
    text: "Деревянные и металлические кресты, распятия и надгробные символы.",
    price: "от 1 990 ₽",
  },
  {
    image: "./images/products/product-gates.webp",
    title: "Калитки и заборы",
    text: "Конструкции устойчивы к коррозии, перепадам температур и ветровым нагрузкам.",
    price: "от 1 990 ₽ за м²",
  },
  {
    image: "./images/products/product-clothing.webp",
    title: "Похоронная одежда",
    text: "Комплекты одежды для захоронения — подберём размер и комплектацию.",
    price: "от 2 990 ₽",
  },
  {
    image: "./images/products/pamyat.webp",
    title: "Памятники",
    text: "Гранит и мрамор, гравировка портрета, изготовление и установка.",
    price: "от 9 990 ₽",
  },
  {
    image: "./images/products/product-urn.jpg",
    title: "Урны и принадлежности",
    text: "Урны для праха, таблички, покрывала и сопутствующие товары.",
    price: "от 990 ₽",
  },
];
