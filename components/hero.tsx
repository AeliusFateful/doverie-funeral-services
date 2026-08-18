import { HiStar, LuMapPin, LuPhone } from "@/lib/icons";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col overflow-hidden"
    >
      <div
        className="absolute inset-y-0 right-0 hidden w-[52%] lg:block"
        aria-hidden="true"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
          src="./videos/hero_angel.mp4"
          poster="./images/Hero-Angel.webp"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-background via-background/20 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background via-transparent to-background/30" />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-background via-background/85 to-background/30 lg:to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/40" />

      <div className="relative mx-auto flex flex-1 w-full max-w-site items-center px-5 pt-28 pb-10 md:px-8 md:pb-12">
        <div className="max-w-2xl">
          <div>
            <p className="section-label mb-6 flex items-center gap-3 text-accent">
              <span className="h-px w-8 bg-accent/60" />
              Круглосуточно. без&nbsp;выходных
            </p>
            <h1 className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-foreground md:text-6xl">
              Ритуальные услуги в&nbsp;Кемерово
              <span className="mt-4 block text-2xl font-medium leading-snug tracking-tight text-foreground/90 md:text-3xl">
                Достойное прощание и забота о каждой семье
              </span>
            </h1>
          </div>
          <Reveal priority delay={80}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Мы берём на себя все хлопоты по&nbsp;организации&nbsp;похорон,
              <br />
              чтобы вы могли побыть рядом&nbsp;с&nbsp;близкими.
              <br />
              Бережно и с уважением к&nbsp;вашему&nbsp;горю.
            </p>
          </Reveal>
          <Reveal priority delay={160}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <HiStar className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="text-foreground">5,0</span> −{" "}
                {siteConfig.rating.countLabel} в 2ГИС
              </span>
              <a
                href={siteConfig.links.gis2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-accent"
              >
                <LuMapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                {siteConfig.address.full}
              </a>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-accent gap-2 px-6 py-3.5 text-base"
              >
                <LuPhone className="h-4 w-4" aria-hidden="true" />
                Вызовите агента
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3.5 text-base font-medium text-foreground transition-colors duration-300 ease-in-out hover:border-accent/50 hover:text-accent"
              >
                Наши услуги
              </a>
            </div>
            <SocialLinks className="mt-6 flex max-[480px]:justify-center" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
