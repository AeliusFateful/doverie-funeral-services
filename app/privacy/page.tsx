import Link from 'next/link'
import { createPageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

export const metadata = createPageMetadata({
  title: 'Политика конфиденциальности',
  description:
    'Политика конфиденциальности ритуальной службы «Доверие» в Кемерово. Информация об обработке персональных данных.',
  path: '/privacy',
})

export default function PrivacyPage() {
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
          Политика конфиденциальности
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Дата последнего обновления: 17 августа 2026 г.</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-serif text-xl text-foreground">1. Общие положения</h2>
            <p className="mt-3">
              Настоящая Политика конфиденциальности (далее — Политика) определяет порядок обработки и защиты
              персональных данных пользователей сайта {siteConfig.url} (далее — Сайт), принадлежащего{' '}
              {siteConfig.legalName} (далее — Оператор).
            </p>
            <p className="mt-3">
              Оператор обеспечивает защиту персональных данных в соответствии с Федеральным законом № 152-ФЗ
              «О персональных данных» и иными нормативными актами Российской Федерации.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground">2. Персональные данные, которые мы обрабатываем</h2>
            <p className="mt-3">
              При использовании Сайта Оператор может получать следующие данные:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>номер телефона — при звонке или обращении через мессенджеры;</li>
              <li>имя и контактные данные — при обращении через WhatsApp, Telegram или ВКонтакте;</li>
              <li>технические данные: IP-адрес, тип браузера, данные cookie, информация об устройстве и посещённых страницах.</li>
            </ul>
            <p className="mt-3">
              Сайт не содержит форм сбора персональных данных. Обращение через телефон или мессенджеры происходит
              по инициативе пользователя.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground">3. Цели обработки персональных данных</h2>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>обработка обращений и предоставление ритуальных услуг;</li>
              <li>консультация по организации похорон и сопутствующих услуг;</li>
              <li>улучшение работы Сайта и качества обслуживания;</li>
              <li>соблюдение требований законодательства Российской Федерации.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground">4. Передача данных третьим лицам</h2>
            <p className="mt-3">
              Оператор не продаёт и не передаёт персональные данные третьим лицам, за исключением случаев,
              предусмотренных законодательством Российской Федерации, или когда передача необходима для исполнения
              договора (например, оформление документов в государственных органах).
            </p>
            <p className="mt-3">
              На Сайте могут использоваться сторонние сервисы (карты 2ГИС, аналитика), которые обрабатывают
              данные в соответствии с собственными политиками конфиденциальности.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground">5. Хранение и защита данных</h2>
            <p className="mt-3">
              Персональные данные хранятся на защищённых серверах и обрабатываются с применением организационных
              и технических мер, обеспечивающих их безопасность. Срок хранения определяется целями обработки и
              требованиями законодательства.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground">6. Права пользователя</h2>
            <p className="mt-3">Вы имеете право:</p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>получить информацию об обработке ваших персональных данных;</li>
              <li>требовать уточнения, блокирования или уничтожения данных;</li>
              <li>отозвать согласие на обработку персональных данных.</li>
            </ul>
            <p className="mt-3">
              Для реализации прав направьте запрос по телефону{' '}
              <a href={`tel:${siteConfig.phone}`} className="text-foreground underline underline-offset-4 hover:text-accent">
                {siteConfig.phoneDisplay}
              </a>{' '}
              или посетите наш офис: {siteConfig.address.full}.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground">7. Файлы cookie</h2>
            <p className="mt-3">
              Сайт может использовать файлы cookie для обеспечения корректной работы (например, сохранение
              предпочтений темы оформления) и сбора аналитических данных. Вы можете ограничить использование
              cookie в настройках браузера.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground">8. Изменения Политики</h2>
            <p className="mt-3">
              Оператор вправе обновлять настоящую Политику. Актуальная версия всегда доступна на данной странице.
              Продолжение использования Сайта после внесения изменений означает согласие с обновлённой Политикой.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground">9. Контактная информация</h2>
            <p className="mt-3">
              {siteConfig.legalName}
              <br />
              Адрес: {siteConfig.address.full}
              <br />
              Телефон:{' '}
              <a href={`tel:${siteConfig.phone}`} className="text-foreground underline underline-offset-4 hover:text-accent">
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
