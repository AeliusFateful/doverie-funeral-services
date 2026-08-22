"use client";

import { useState } from "react";
import { LuPlus } from "@/lib/icons";
import { faqs } from "@/lib/data/faq";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-surface-alt px-5 py-12 md:px-8 md:py-16"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <p className="section-label mb-5 flex items-center justify-center gap-3 text-accent">
            <span className="h-px w-8 bg-accent/60" />
            Частые вопросы
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight tracking-tight text-balance text-foreground md:text-5xl">
            Отвечаем на важные вопросы
          </h2>
        </div>

        <div
          className="mt-14 divide-y divide-border border-y border-border"
        >
          {faqs.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <div
                key={item.q}
                className="overflow-clip lg:overflow-visible"
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-serif text-xl text-foreground md:text-2xl">
                    {item.q}
                  </span>
                  <LuPlus
                    className={cn(
                      "h-5 w-5 shrink-0 text-accent transition-transform duration-300 ease-in-out",
                      isOpen && "rotate-45",
                    )}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] pb-6 opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-4xl pr-10 text-base leading-relaxed text-muted-foreground md:text-lg">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
