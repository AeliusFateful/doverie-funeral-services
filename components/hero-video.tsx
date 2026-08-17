"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroVideo() {
  const [showPoster, setShowPoster] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const activatePoster = () => {
      if (cancelled) return;

      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(
          () => {
            if (!cancelled) setShowPoster(true);
          },
          { timeout: 2000 },
        );
        return;
      }

      window.setTimeout(() => {
        if (!cancelled) setShowPoster(true);
      }, 200);
    };

    if (document.readyState === "complete") {
      activatePoster();
    } else {
      window.addEventListener("load", activatePoster, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", activatePoster);
    };
  }, []);

  useEffect(() => {
    if (!showPoster) return;

    const scheduleVideo = () => setShowVideo(true);

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(scheduleVideo, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = window.setTimeout(scheduleVideo, 800);
    return () => window.clearTimeout(timer);
  }, [showPoster]);

  return (
    <div
      className="absolute inset-y-0 right-0 hidden w-[52%] lg:block"
      aria-hidden="true"
    >
      {showPoster ? (
        <Image
          src="/images/Hero-Angel.webp"
          alt=""
          fill
          sizes="52vw"
          quality={75}
          className="object-cover object-[50%_30%]"
        />
      ) : null}
      {showVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
          src="/videos/angel2.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        />
      ) : null}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-background via-background/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background via-transparent to-background/30" />
    </div>
  );
}
