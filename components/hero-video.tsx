"use client";

import { useState, useEffect } from "react";

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
      src="./videos/HeroVideo.mp4"
      poster="./images/hero/Hero-Angel.webp"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
    />
  );
}
