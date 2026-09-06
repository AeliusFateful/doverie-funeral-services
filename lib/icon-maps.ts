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
} from "@/lib/icons";
import type { IconType } from "react-icons";

export const icons = {
  flower: LuFlower2,
  file: LuFileText,
  truck: LuTruck,
  flame: LuFlame,
  church: LuChurch,
  cross: LuCross,
  phone: LuPhone,
  user: LuUserRound,
  clipboard: LuClipboardList,
  clock: LuClock,
  scale: LuScale,
  shield: LuShieldCheck,
  route: LuRoute,
  handshake: LuHandshake,
  heartHandshake: LuHeartHandshake,
  map: LuMapPinned,
  award: LuAward,
} satisfies Record<string, IconType>;

export type IconName = keyof typeof icons;
