"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent-ack";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "consent received");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="max-w-site mx-auto rounded-3xl opacity-90 fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-site flex-col gap-3 px-5 py-2 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Мы используем файлы cookie и сервисы&nbsp;аналитики (Яндекс.Метрика,&nbsp;Google&nbsp;Analytics)
          для улучшения&nbsp;работы&nbsp;сайта.
          <br />Подробнее —{" "}
          <Link
            href="/consent"
            className="text-foreground underline underline-offset-4 hover:text-accent"
          >
            Согласие на обработку персональных&nbsp;данных
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="btn-accent shrink-0 px-6 py-2.5 text-sm"
        >
          Понятно
        </button>
      </div>
    </div>
  );
}
