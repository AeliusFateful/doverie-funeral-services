import { LuClock, LuMapPin } from "@/lib/icons";
import { navFooter } from "@/lib/nav";
import { siteConfig } from "@/lib/site";
import { SocialLinks } from "@/components/social-links";
import Link from "next/link";

const footerNavMid = Math.ceil(navFooter.length / 2);

export function SiteFooter() {
  return (
    <footer className="section-surface-alt border-t border-border">
      <div className="section-py pb-24! mx-auto max-w-site px-5 md:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <span className="font-serif text-3xl tracking-tight font-semibold text-foreground md:text-4xl">
              Доверие
            </span>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Ритуальная служба полного цикла в Кемерово. Круглосуточная помощь
              семьям в&nbsp;организации достойного прощания.
            </p>
            <p className="mt-4 lg:mt-6 text-sm text-muted-foreground">
              ОГРНИП - {siteConfig.ogrnip}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              ИНН - {siteConfig.inn}
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16 lg:gap-20">
            <nav
              className="flex flex-col gap-3 text-base"
              aria-label="Навигация в подвале"
            >
              <span className="font-serif text-xl font-semibold text-foreground md:text-2xl">
                Разделы
              </span>
              <div className="flex flex-col gap-3 min-[420px]:grid min-[420px]:grid-cols-2 min-[420px]:gap-x-16 max-w-80 ">
                <div className="flex flex-col gap-3">
                  {navFooter.slice(0, footerNavMid).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  {navFooter.slice(footerNavMid).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            <div className="flex flex-col gap-3 text-base">
              <span className="font-serif text-xl font-semibold text-foreground md:text-2xl">
                Контакты
              </span>
              <Link
                href={`tel:${siteConfig.phone}`}
                className="text-lg text-foreground transition-colors hover:text-accent"
              >
                {siteConfig.phoneDisplay}
              </Link>
              <a
                href={siteConfig.links.gis2}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-muted-foreground underline underline-offset-4 hover:text-accent"
              >
                <LuMapPin
                  className="mt-1 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>{siteConfig.address.full}</span>
              </a>
              <span className="flex items-start gap-2 text-muted-foreground">
                <LuClock
                  className="mt-1 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>Круглосуточно, без выходных</span>
              </span>
              <SocialLinks className="mt-2" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex max-md:flex-col gap-1 sm:text-left max-sm:text-center">
            <p>© 2026 {siteConfig.legalName}.</p>
            <p>Все права защищены.</p>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4 max-sm:text-center text-right">
            <Link
              href="/privacy"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="/consent"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Согласие на обработку персональных данных
            </Link>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <a
            href="https://github.com/AeliusFateful"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            <span className="font-sans">Разработка сайта</span>
            {" - "}
            <span className="font-serif text-2xl underline underline-offset-4">
              Aelius Fateful
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
