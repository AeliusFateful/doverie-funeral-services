import Link from "next/link";
import { LuPhone } from "@/lib/icons";
import { createPageMetadata } from "@/lib/seo";
import { formatLastUpdated, siteConfig, telHref } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Согласие на обработку персональных данных",
  description:
    "Согласие на обработку персональных данных на сайте ритуальной службы «Доверие» в Кемерово, включая данные, собираемые системами аналитики Яндекс.Метрика и Google Analytics.",
  path: "/consent",
});

export default function ConsentPage() {
  return (
    <main id="main-content" className="min-h-dvh bg-background">
      <div className="section-py mx-auto max-w-3xl px-5 md:px-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-accent"
        >
          ← На главную
        </Link>

        <h1 className="mt-8 font-serif text-3xl font-light leading-tight tracking-tight text-foreground md:text-4xl">
          Согласие на обработку персональных данных
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Дата последнего обновления: {formatLastUpdated()}
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-serif text-xl text-foreground">
              1. Общие положения
            </h2>
            <p className="mt-3">
              Настоящее Согласие на обработку персональных данных (далее —
              Согласие) регулирует условия обработки данных пользователей сайта{" "}
              {siteConfig.url} (далее — Сайт), принадлежащего{" "}
              {siteConfig.legalName} (далее — Оператор), при использовании
              Сайта, включая данные, собираемые системами веб-аналитики.
            </p>
            <p className="mt-3">
              Согласие является дополнением к{" "}
              <Link
                href="/privacy"
                className="text-foreground underline underline-offset-4 hover:text-accent"
              >
                Политике конфиденциальности
              </Link>{" "}
              и применяется в части, касающейся обработки технических и
              статистических данных, в том числе с использованием сервисов
              аналитики.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground">
              2. Состав обрабатываемых данных
            </h2>
            <p className="mt-3">
              При посещении Сайта могут собираться следующие данные:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>IP-адрес и данные о местоположении (город/регион);</li>
              <li>
                тип и версия браузера, операционная система, тип устройства;
              </li>
              <li>файлы cookie и идентификаторы посещений;</li>
              <li>
                данные о посещённых страницах, времени на сайте, источнике
                перехода и действиях пользователя.
              </li>
            </ul>
            <p className="mt-3">
              Указанные данные собираются, в частности, с использованием
              сервисов{" "}
              <strong className="text-foreground">Яндекс.Метрика</strong>{" "}
              (Яндекс) и{" "}
              <strong className="text-foreground">Google Analytics</strong>{" "}
              (Google), которые обрабатывают данные в соответствии с
              собственными политиками конфиденциальности.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground">
              3. Цели обработки
            </h2>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>анализ посещаемости и поведения пользователей на Сайте;</li>
              <li>
                улучшение работы Сайта и качества предоставляемой информации;
              </li>
              <li>
                оценка эффективности рекламных и информационных материалов;
              </li>
              <li>формирование статистики обращений и посещений.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground">
              4. Порядок предоставления согласия
            </h2>
            <p className="mt-3">
              Согласие считается предоставленным с момента начала использования
              Сайта (в том числе при сохранении файлов cookie в браузере) и
              действует до момента его отзыва пользователем. Продолжение
              использования Сайта означает согласие с условиями обработки
              данных, описанными в настоящем документе.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground">
              5. Передача данных третьим лицам
            </h2>
            <p className="mt-3">
              Данные, собираемые системами аналитики, передаются операторам этих
              систем — Яндекс и Google — в объёме, необходимом для
              функционирования соответствующих сервисов. Обработка данных этими
              операторами осуществляется в соответствии с их собственными
              политиками конфиденциальности:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                Яндекс.Метрика — политика конфиденциальности ООО «Яндекс»;
              </li>
              <li>
                Google Analytics — политика конфиденциальности Google LLC.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground">
              6. Отзыв согласия
            </h2>
            <p className="mt-3">
              Вы можете отозвать согласие на обработку данных, ограничив или
              отключив использование файлов cookie в настройках браузера, а
              также с помощью инструментов отказа от отслеживания,
              предоставляемых Яндекс и Google. Для вопросов, связанных с
              обработкой персональных данных, вы также можете обратиться по
              телефону{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-foreground underline underline-offset-4 hover:text-accent whitespace-nowrap"
              >
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground">
              7. Заключительные положения
            </h2>
            <p className="mt-3">
              Оператор вправе обновлять настоящее Согласие, в том числе при
              подключении новых сервисов аналитики. Актуальная версия всегда
              доступна на данной странице. Дополнительную информацию об
              обработке персональных данных см. в{" "}
              <Link
                href="/privacy"
                className="text-foreground underline underline-offset-4 hover:text-accent"
              >
                Политике конфиденциальности
              </Link>
              .
            </p>
            <p className="mt-3">
              {siteConfig.legalName}
              <br />
              ОГРНИП: {siteConfig.ogrnip}
              <br />
              ИНН: {siteConfig.inn}
              <br />
              Адрес: {siteConfig.address.full}
              <br />
              Телефон:{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-foreground underline underline-offset-4 hover:text-accent whitespace-nowrap"
              >
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </section>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
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
      </div>
    </main>
  );
}
