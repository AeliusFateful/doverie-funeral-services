import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { LuPhone } from '../lib/icons'
import { createPageMetadata } from '../lib/seo'
import { siteConfig, telHref } from '../lib/site'

export const metadata: Metadata = createPageMetadata({
  title: 'Страница не найдена',
  description: `Страница не найдена. Ритуальная служба «Доверие» в ${siteConfig.address.city} — круглосуточная помощь в организации похорон.`,
  path: '/404',
  noIndex: true,
})

export default function NotFound() {
  return (
    <main className="min-h-dvh bg-background">
      <div className="mx-auto flex min-h-dvh max-w-site flex-col items-center gap-12 px-5 py-16 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="max-w-xl">
          <p className="section-label mb-5 flex items-center gap-3 text-accent">
            <span className="h-px w-8 bg-accent/60" />
            Ошибка 404
          </p>
          <h1 className="font-serif text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl">
            Страница не найдена
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Возможно, ссылка устарела или страница была перемещена. Вернитесь на главную — мы всегда рядом,
            если нужна помощь.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/" className="btn-accent px-6 py-3.5 text-base">
              На главную
            </Link>
            <a
              href={telHref(siteConfig.phone)}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3.5 font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              <LuPhone className="h-4 w-4" aria-hidden="true" />
              Позвонить нам
            </a>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-lg lg:max-w-lg">
          <Image
            src="../images/angel404.png"
            alt="Ангел — страница не найдена"
            fill
            sizes="(min-width: 1024px) 32vw, 90vw"
            quality={75}
            loading="lazy"
            className="object-cover"
          />
        </div>
      </div>
    </main>
  )
}
