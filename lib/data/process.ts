export type ProcessStep = {
  n: string;
  title: string;
  text: string;
  icon: "phone" | "user" | "clipboard" | "handshake";
  image: string;
  featured: boolean;
};

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: "Звонок",
    text: "Позвоните в любое время дня и ночи. Мы ответим спокойно и подскажем первые шаги.",
    icon: "phone",
    image: "./images/process/call.webp",
    featured: true,
  },
  {
    n: "02",
    title: "Встреча агента",
    text: "Агент приедет к вам, обсудит пожелания и бюджет, ответит на все вопросы.",
    icon: "user",
    image: "./images/process/agent.webp",
    featured: false,
  },
  {
    n: "03",
    title: "Организация",
    text: "Берём на себя документы, транспорт, зал и все детали предстоящей церемонии.",
    icon: "clipboard",
    image: "./images/organization.webp",
    featured: false,
  },
  {
    n: "04",
    title: "Сопровождение",
    text: "Будем рядом в день прощания и останемся на связи, чтобы помочь и после.",
    icon: "handshake",
    image: "./images/process/dove_in_hands.webp",
    featured: false,
  },
];
