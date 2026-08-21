import Image from "next/image";
import { LuPhone } from "@/lib/icons";
import { Reveal } from "@/components/reveal";
import { processSteps } from "@/lib/data/process";
import { getProcessIcon } from "@/lib/icon-maps";
import { siteConfig, telHref } from "@/lib/site";

function StepCard({
  step,
  variant,
}: {
  step: (typeof processSteps)[number];
  variant: "featured" | "compact" | "mobile";
}) {
  const Icon = getProcessIcon(step.icon);
  const isFeatured = variant === "featured";

  return (
    <article
      className={
        isFeatured
          ? "relative overflow-hidden rounded-xl border-2 border-accent/50 bg-card/60 p-5 md:p-8"
          : "relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card/40 p-6"
      }
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src={step.image}
          alt=""
          fill
          sizes={isFeatured ? "40vw" : "25vw"}
          loading="lazy"
          className="object-cover opacity-15 transition-opacity duration-300 ease-in-out group-hover:opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-t from-card/75 via-card/45 to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <span
            className={
              isFeatured
                ? "flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-accent/10 text-accent"
                : "flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-background/80 text-accent"
            }
          >
            <Icon
              className={isFeatured ? "h-5 w-5" : "h-4 w-4"}
              aria-hidden="true"
            />
          </span>
          <span className="font-serif text-3xl font-light text-accent/70">
            {step.n}
          </span>
        </div>

        <h3
          className={`mt-5 font-serif text-foreground ${isFeatured ? "text-2xl md:text-3xl" : "text-xl"}`}
        >
          {step.title}
        </h3>
        <p
          className={`mt-3 text-base leading-relaxed text-muted-foreground ${isFeatured ? "text-lg" : ""}`}
        >
          {step.text}
        </p>

        {isFeatured ? (
          <a
            href={telHref(siteConfig.phone)}
            className="btn-accent mt-6 gap-2 px-2 py-3 text-base w-full"
          >
            <LuPhone className="h-4 w-4" aria-hidden="true" />
            Позвоните сейчас
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function Process() {
  const [featured, ...rest] = processSteps;

  return (
    <section id="process" className="section-surface-alt">
      <div className="section-py mx-auto max-w-site px-5 md:px-8">
        <Reveal priority className="max-w-2xl">
          <p className="section-label mb-5 flex items-center gap-3 text-accent">
            <span className="h-px w-8 bg-accent/60" />
            Как мы работаем
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight tracking-tight text-balance text-foreground md:text-5xl">
            Один звонок — и вы больше не одни
          </h2>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-base font-medium text-accent">
            <LuPhone className="h-4 w-4 shrink-0" aria-hidden="true" />
            Агент приедет за {siteConfig.agentArrivalMinutes} минут после звонка
          </p>
        </Reveal>

        <div className="relative mt-14 hidden lg:block">
          <div
            className="process-timeline-line absolute z-10 right-[12%] left-[12%] h-px"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_2.25fr] lg:items-start">
            <Reveal priority delay={100} className="group">
              <div className="relative">
                <span
                  className="absolute left-1/2 z-10 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-background bg-accent lg:block"
                  aria-hidden="true"
                />
                <StepCard step={featured} variant="featured" />
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:items-stretch">
              {rest.map((step, i) => (
                <Reveal
                  key={step.n}
                  delay={(i + 2) * 100}
                  className="group flex"
                >
                  <div className="relative flex flex-1 flex-col">
                    <span
                      className="absolute left-1/2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-accent"
                      aria-hidden="true"
                    />
                    <StepCard step={step} variant="compact" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:hidden">
          <div
            className="absolute top-2 bottom-2 left-[0.65rem] w-px bg-accent/30"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-10">
            {processSteps.map((step, i) => (
              <Reveal
                key={step.n}
                delay={i * 100}
                className="group relative pl-8"
              >
                <span
                  className="absolute top-6 left-0 z-10 flex h-[1.35rem] w-[1.35rem] items-center justify-center rounded-full border-2 border-background bg-accent"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground/80" />
                </span>
                <StepCard
                  step={step}
                  variant={step.featured ? "featured" : "mobile"}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
