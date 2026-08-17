"use client";

import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { cn } from "@/lib/utils";
import {
  getTheme,
  initTheme,
  setTheme,
  subscribeTheme,
  type Theme,
} from "@/lib/theme";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    initTheme();
    setThemeState(getTheme());
    setMounted(true);
    return subscribeTheme(setThemeState);
  }, []);

  const toggle = () => {
    const next: Theme = getTheme() === "light" ? "dark" : "light";
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "light" ? "Включить тёмную тему" : "Включить светлую тему"
      }
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors duration-300 ease-in-out hover:border-accent/40 hover:text-accent",
        className,
      )}
    >
      {mounted ? (
        theme === "light" ? (
          <LuMoon className="h-4 w-4" />
        ) : (
          <LuSun className="h-4 w-4" />
        )
      ) : (
        <LuSun className="h-4 w-4 opacity-0" aria-hidden="true" />
      )}
    </button>
  );
}
