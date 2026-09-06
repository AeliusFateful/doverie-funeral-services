"use client";

import { useEffect, useState } from "react";
import { asset } from "@/lib/utils";

export function HeroVideo() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);

    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!isDesktop) return null;

  return (
    <video
      className="absolute select-none inset-0 h-full w-full object-cover object-[25%_30%]"
      src={asset("videos/HeroVideo.mp4")}
      poster={asset("images/hero-angel.webp")}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
    />
  );
}
