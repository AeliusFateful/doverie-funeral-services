import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { aboutValues } from "@/lib/data/about";
import { getAboutIcon } from "@/lib/icon-maps";
import { siteConfig } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="section-surface">
      <div className="section-py mx-auto max-w-site px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal className="flex flex-col gap-10">
              <div>
                <p className="section-label mb-5 flex items-center gap-3 text-accent">
                  <span className="h-px w-8 bg-accent/60" />
                  Владелец «Доверие»
                </p>
                <h2 className="font-serif text-3xl font-light leading-tight tracking-tight text-balance text-foreground md:text-4xl">
                  {siteConfig.owner.name}
                </h2>
                <p className="mt-6 max-w-4xl lg:max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Много лет я лично руковожу агентством «Доверие» и сопровождаю
                  семьи в самый трудный момент. Для меня ритуальные услуги — не
                  просто работа: я бережно беру на себя организацию, оставляя
                  вам главное — время побыть с близкими и достойно попрощаться.
                </p>
              </div>
              <div className="relative mx-auto sm:min-w-[75%] md:min-w-[65%] min-w-full lg:hidden aspect-2/3">
                <div className="relative h-full min-h-80 overflow-hidden rounded-lg border border-border bg-card/30 lg:absolute lg:inset-0 lg:min-h-0">
                  <Image
                    src={siteConfig.owner.image}
                    alt={`${siteConfig.owner.name} — владелец агентства «Доверие»`}
                    fill
                    sizes="(min-width: 1024px) 22rem, 90vw"
                    quality={80}
                    loading="lazy"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>

            <div className="mt-10 flex flex-col divide-y divide-border border-y border-border">
              {aboutValues.map((value, i) => {
                const Icon = getAboutIcon(value.icon);
                return (
                  <Reveal
                    key={value.title}
                    delay={(i + 1) * 100}
                    className="flex items-start gap-5 py-6"
                  >
                    <span className="mt-0.5 flex h-11 w-11 flex-none items-center justify-center rounded-md border border-accent/30 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-foreground">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                        {value.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal className="relative mx-auto max-lg:hidden min-w-[70%] lg:min-w-full aspect-2/3">
            <div className="relative h-full min-h-80 overflow-hidden rounded-lg border border-border bg-card/30 lg:absolute lg:inset-0 lg:min-h-0">
              <Image
                src={siteConfig.owner.image}
                alt={`${siteConfig.owner.name} — владелец агентства «Доверие»`}
                fill
                sizes="(min-width: 1024px) 22rem, 90vw"
                quality={80}
                loading="lazy"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
