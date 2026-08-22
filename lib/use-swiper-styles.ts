"use client";

import { useEffect } from "react";

type SwiperStyleModule = "base" | "effect-cards" | "navigation";

const importers: Record<SwiperStyleModule, () => Promise<unknown>> = {
  base: () => import("swiper/css"),
  "effect-cards": () => import("swiper/css/effect-cards"),
  navigation: () => import("swiper/css/navigation"),
};

const loaded = new Set<SwiperStyleModule>();

export function useSwiperStyles(modules: SwiperStyleModule[]) {
  useEffect(() => {
    for (const mod of modules) {
      if (loaded.has(mod)) continue;
      loaded.add(mod);
      importers[mod]().catch(() => loaded.delete(mod));
    }
  }, [modules]);
}
