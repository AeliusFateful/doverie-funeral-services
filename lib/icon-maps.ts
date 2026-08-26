import {
  LuAward,
  LuChurch,
  LuClipboardList,
  LuClock,
  LuCross,
  LuFileText,
  LuFlame,
  LuFlower2,
  LuHandshake,
  LuHeartHandshake,
  LuMapPinned,
  LuPhone,
  LuRoute,
  LuScale,
  LuShieldCheck,
  LuTruck,
  LuUserRound,
} from "../lib/icons";
import type { OwnerValue } from "../lib/data/owner";
import type { ProcessStep } from "../lib/data/process";
import type { ServiceItem } from "../lib/data/services";
import type { WhyUsReason } from "../lib/data/why-us";
import type { IconType } from "react-icons";

const serviceIconMap: Record<ServiceItem["icon"], IconType> = {
  flower: LuFlower2,
  file: LuFileText,
  truck: LuTruck,
  flame: LuFlame,
  church: LuChurch,
  cross: LuCross,
};

const processIconMap: Record<ProcessStep["icon"], IconType> = {
  phone: LuPhone,
  user: LuUserRound,
  clipboard: LuClipboardList,
  handshake: LuHeartHandshake,
};

const whyUsIconMap: Record<WhyUsReason["icon"], IconType> = {
  clock: LuClock,
  scale: LuScale,
  shield: LuShieldCheck,
  handshake: LuHeartHandshake,
  route: LuRoute,
};

const ownerIconMap: Record<OwnerValue["icon"], IconType> = {
  handshake: LuHandshake,
  map: LuMapPinned,
  award: LuAward,
};

export function getServiceIcon(icon: ServiceItem["icon"]) {
  return serviceIconMap[icon];
}

export function getProcessIcon(icon: ProcessStep["icon"]) {
  return processIconMap[icon];
}

export function getWhyUsIcon(icon: WhyUsReason["icon"]) {
  return whyUsIconMap[icon];
}

export function getOwnerIcon(icon: OwnerValue["icon"]) {
  return ownerIconMap[icon];
}
