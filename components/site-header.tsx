"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuMenu, LuPhone, LuX } from "@/lib/icons";
import { navDesktop, navMobile } from "@/lib/nav";
import { siteConfig, telHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 pt-1 pb-1 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-2 px-2 sm:px-5 md:px-8">
        <Link
          href="#top"
          className="flex flex-col items-center gap-1"
          aria-label="Доверие — на главную"
        >
          <div className="flex items-center gap-1">
            <Image
              className="pointer-events-none select-none hidden min-[420px]:block"
              src="./images/dove.svg"
              alt=""
              width={23}
              height={23}
            />
            <span className="font-serif text-2xl font-medium min-[480px]:text-3xl leading-none tracking-tight text-foreground mx-0.5">
              Доверие
            </span>
            <Image
              className="pointer-events-none select-none hidden min-[420px]:block transform-[scaleX(-1)]"
              src="./images/dove.svg"
              alt=""
              width={23}
              height={23}
            />
          </div>
          <span className="hidden max-[480px]:text-[9px] text-[11px] uppercase tracking-[0.24em] text-muted-foreground min-[420px]:inline">
            ритуальная служба
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 xl:gap-8 lg:flex"
          aria-label="Основная навигация"
        >
          {navDesktop.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors duration-300 ease-in-out hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href={telHref()}
            className="group flex min-w-0 items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 ease-in-out"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent transition-colors duration-300 ease-in-out group-hover:bg-accent group-hover:text-accent-foreground">
              <LuPhone className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="flex min-w-0 flex-col leading-tight">
              <span className="truncate max-[360px]:text-xs text-sm tabular-nums sm:text-base">
                {siteConfig.phoneDisplay}
              </span>
              <span className="truncate uppercase max-[360px]:text-[9px] text-[10px] tracking-[0.25em] text-muted-foreground/70 transition-colors duration-300 ease-in-out group-hover:text-accent sm:text-xs">
                Круглосуточно
              </span>
            </div>
          </Link>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors duration-300 ease-in-out hover:border-accent/40 hover:text-accent lg:hidden"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <LuX className="h-5 w-5" />
            ) : (
              <LuMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-16 z-40 border-b border-border bg-background/95 backdrop-blur-md transition-all duration-300 lg:hidden",
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none",
        )}
      >
        <nav
          className="mx-auto flex max-w-site flex-col px-4 py-4 sm:px-5 md:px-8 gap-2"
          aria-label="Мобильная навигация"
        >
          {navMobile.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-border/60 py-4 text-base text-foreground transition-colors last:border-b-0 hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
