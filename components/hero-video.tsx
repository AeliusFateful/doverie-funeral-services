"use client";

import { useState, useEffect } from "react";
import { asset } from "@/lib/utils";

export function HeroVideo() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
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
