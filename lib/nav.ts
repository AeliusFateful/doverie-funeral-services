export const navDesktop = [
  { label: "Услуги", href: "#services" },
  { label: "Товары", href: "#products" },
  { label: "Почему мы", href: "#why" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Вопросы", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
] as const;

export const navMobile = [
  { label: "Как мы работаем", href: "#process" },
  { label: "Услуги", href: "#services" },
  { label: "Товары", href: "#products" },
  { label: "Почему мы", href: "#why" },
  { label: "О нас", href: "#about" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Вопросы", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
] as const;

export const navFooter = [...navMobile] as const;
