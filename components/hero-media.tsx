"use client";

import dynamic from "next/dynamic";

const HeroVideo = dynamic(
  () => import("@/components/hero-video").then((m) => m.HeroVideo),
  { ssr: false },
);

export function HeroMedia() {
  return <HeroVideo />;
}
