import { LuMapPin, LuPhone } from "@/lib/icons";
import { SocialLinks } from "@/components/social-links";
import { siteConfig, telHref } from "@/lib/site";

export function Contact() {
  return (
    <section id="contacts" className="section-surface relative overflow-hidden">
      <div className="relative z-1 section-py mx-auto max-w-site px-5 md:px-8">
        <img
          src="./images/candle.jpg"
          alt=""
          className="pointer-events-none select-none absolute inset-0 object-cover opacity-8 w-full h-full -z-1"
        />
        <div className="mx-auto max-w-2xl text-center">
          <div>
            <p className="section-label mb-5 flex items-center justify-center gap-3 text-accent">
              <span className="h-px w-8 bg-accent/60 max-sm:hidden" />
              Мы рядом в&nbsp;трудную&nbsp;минуту
            </p>
            <h2 className="font-serif text-3xl font-light leading-tight tracking-tight text-balance text-foreground md:text-5xl">
              Позвоните нам в любое время
            </h2>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Дежурный агент ответит немедленно и подскажет, что делать дальше.
              Звонок бесплатный и ни к чему не обязывает.
            </p>
          </div>

          <div>
            <a
              href={telHref(siteConfig.phone)}
              className="mt-10 btn-accent gap-3 px-8 py-4 text-base"
            >
              <LuPhone className="h-5 w-5" aria-hidden="true" />
              <span className="tabular-nums">{siteConfig.phoneDisplay}</span>
            </a>
            <SocialLinks className="mt-8 justify-center" />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-xl overflow-hidden rounded-lg border border-border bg-border">
          <a
            href={siteConfig.links.gis2}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 bg-background/80 px-6 py-8 text-center backdrop-blur-sm group"
          >
            <LuMapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Адрес
            </span>
            <span className="text-base text-foreground underline group-hover:text-accent underline-offset-4 transition-colors duration-300 ease-in-out">
              {siteConfig.address.full}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
