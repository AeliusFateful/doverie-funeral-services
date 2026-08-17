export type ProductItem = {
  image: string
  title: string
  text: string
  price: string
}

export const products: ProductItem[] = [
  {
    image: '../../public/images/product-coffin.webp',
    title: 'Гробы',
    text: 'От лаконичных до премиальных моделей из массива дерева с атласной обивкой.',
    price: 'от 6 900 ₽',
  },
  {
    image: '../../public/images/product-wreath.webp',
    title: 'Венки и цветы',
    text: 'Траурные венки, корзины и живые композиции с лентами и надписями.',
    price: 'от 1 200 ₽',
  },
  {
    image: '../../public/images/product-monument.webp',
    title: 'Памятники',
    text: 'Гранит и мрамор, гравировка портрета, изготовление и установка.',
    price: 'от 14 500 ₽',
  },
  {
    image: '../../public/images/product-urn.webp',
    title: 'Урны и принадлежности',
    text: 'Урны для праха, таблички, покрывала и сопутствующие товары.',
    price: 'от 900 ₽',
  },
  {
    image: '../../public/images/product-cross.webp',
    title: 'Кресты',
    text: 'Деревянные и металлические кресты, распятия и надгробные символы.',
    price: 'от 800 ₽',
  },
  {
    image: '../../public/images/product-clothing.webp',
    title: 'Похоронная одежда',
    text: 'Комплекты одежды для захоронения — подберём размер и комплектацию.',
    price: 'от 2 500 ₽',
  },
]
