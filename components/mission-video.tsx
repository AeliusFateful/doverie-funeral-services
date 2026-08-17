"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site";

export function MissionVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section className="section-surface">
      <div className="section-py mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <div className="group relative aspect-video w-full overflow-hidden rounded-lg bg-muted/20">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src="/videos/human.mp4"
              loop
              muted
              playsInline
              controls
              preload="none"
              aria-label="Видео агентства «Доверие»"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[25%] bg-linear-to-t from-background/70 to-transparent" />
          </div>
        </Reveal>
        <Reveal delay={300}>
          <div className="mx-auto mt-6 max-w-4xl text-center md:mt-8">
            <blockquote className="font-serif font-bold text-xl leading-snug text-foreground md:text-2xl">
              «Мы не можем вернуть тех, кого&nbsp;потеряли, но&nbsp;можем
              провести&nbsp;их&nbsp;в&nbsp;последний&nbsp;путь
              с&nbsp;тем&nbsp;достоинством, которого&nbsp;они&nbsp;заслуживают.»
            </blockquote>
            <Reveal delay={600}>
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                {siteConfig.owner.jobTitle} «Доверие» –{" "}
                {siteConfig.owner.name.split(" ").join("\u00a0")}
              </p>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
