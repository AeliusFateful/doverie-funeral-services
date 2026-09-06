import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { ownerValues } from "@/lib/data/owner";
import { icons } from "@/lib/icon-maps";
import { siteConfig } from "@/lib/site";
import { asset } from "@/lib/utils";

export function Owner() {
  return (
    <section id="about" className="section-surface-alt relative z-5">
      <div className="section-py mx-auto max-w-site px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex flex-col gap-10">
              <SectionHeading
                label="Владелец «Доверие»"
                title={siteConfig.owner.name}
                size="md"
                className="max-w-none lg:max-w-xl"
                lead="Много лет я лично руковожу агентством «Доверие» и сопровождаю семьи в самый трудный момент. Для меня ритуальные услуги — не просто работа: я бережно беру на себя организацию, оставляя вам главное — время побыть с близкими и достойно попрощаться."
              />
              <div className="relative mx-auto sm:min-w-[75%] md:min-w-[65%] min-w-full lg:hidden aspect-2/3">
                <div className="relative h-full overflow-hidden rounded-lg border border-border bg-card/30">
                  <Image
                    src={asset(siteConfig.owner.image)}
                    alt={`${siteConfig.owner.name} — владелец агентства «Доверие»`}
                    fill
                    sizes="(min-width: 1024px) 22rem, 90vw"
                    loading="lazy"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col divide-y divide-border border-y border-border">
              {ownerValues.map((value) => {
                const Icon = icons[value.icon];
                return (
                  <div
                    key={value.title}
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
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mx-auto max-lg:hidden min-w-[70%] lg:min-w-full aspect-2/3">
            <div className="relative h-full overflow-hidden rounded-lg border border-border bg-card/30">
              <Image
                src={asset(siteConfig.owner.image)}
                alt={`${siteConfig.owner.name} — владелец агентства «Доверие»`}
                fill
                sizes="(min-width: 1024px) 22rem, 90vw"
                loading="lazy"
                className="select-none object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
