import { Reveal } from "@/components/reveal";
import { WhyUsSlider } from "@/components/why-us-slider";
import { whyUsReasons } from "@/lib/data/why-us";
import { getWhyUsIcon } from "@/lib/icon-maps";

export function WhyUs() {
  return (
    <section id="why" className="why-gradient relative overflow-hidden">
      <div className="section-py relative mx-auto max-w-site px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="section-label mb-5 flex items-center gap-3 text-right text-accent">
            <span className="h-px w-8 bg-accent/60" />
            Почему именно мы
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight tracking-tight text-balance text-foreground md:text-5xl">
            Причины доверять нам
          </h2>
        </Reveal>

        <div className="relative mt-10 flex flex-col max-[350]:gap-0 gap-10 lg:flex-row lg:items-stretch">
          <Reveal className="relative h-full w-full lg:w-[46%]">
            <WhyUsSlider />
          </Reveal>
          <div
            className="why-us-fade-overlay absolute inset-y-0 right-0 z-10 hidden lg:block"
            style={{ left: "0%" }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col justify-center gap-8 sm:gap-10 lg:flex-1 lg:pl-2">
            {whyUsReasons.map((reason, i) => {
              const Icon = getWhyUsIcon(reason.icon);
              return (
                <Reveal key={reason.title} delay={i * 100}>
                  <div className="flex gap-4">
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-foreground">
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                        {reason.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
