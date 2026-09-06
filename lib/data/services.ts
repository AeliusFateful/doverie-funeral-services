import { asset } from "@/lib/utils";

export type ServiceItem = {
  icon: "flower" | "file" | "truck" | "flame" | "church" | "cross";
  title: string;
  text: string;
  image: string;
};

export const services: ServiceItem[] = [
  {
    icon: "flower",
    title: "Полная организация похорон",
    text: "Персональный агент возьмёт на себя все заботы — от первого звонка до дня прощания.",
    image: asset("images/organization.webp"),
  },
  {
    icon: "file",
    title: "Оформление документов",
    text: "Свидетельство о смерти, справки, разрешения. Мы соберём всё за вас, без очередей.",
    image: asset("images/service-documents.webp"),
  },
  {
    icon: "truck",
    title: "Транспортировка и катафалк",
    text: "Аккуратная перевозка, катафалк и сопровождение по городу и области.",
    image: asset("images/service-katafalk.webp"),
  },
  {
    icon: "flame",
    title: "Кремация",
    text: "Организация кремации в проверенных крематориях с последующей передачей урны.",
    image: asset("images/service-cremat.webp"),
  },
  {
    icon: "church",
    title: "Прощальный зал и церемония",
    text: "Тихий зал для прощания, отпевание и проведение гражданской панихиды.",
    image: asset("images/service-zal.webp"),
  },
  {
    icon: "cross",
    title: "Памятники и благоустройство",
    text: "Изготовление и установка памятников, ограды, уход за местом захоронения.",
    image: asset("images/service-pamyat.webp"),
  },
];
