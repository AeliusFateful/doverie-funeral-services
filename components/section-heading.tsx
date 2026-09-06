import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  size?: "lg" | "md";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  lead,
  children,
  align = "left",
  size = "lg",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      <p
        className={cn(
          "section-label mb-5 flex items-center gap-3 text-accent",
          centered && "justify-center",
        )}
      >
        <span className="h-px w-8 bg-accent/60" />
        {label}
      </p>
      <h2
        className={cn(
          "font-serif text-3xl font-light tracking-tight text-balance text-foreground leading-[1.15]",
          size === "lg" ? "md:text-5xl" : "md:text-4xl",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-muted-foreground",
            centered ? "mx-auto max-w-md" : "text-pretty",
          )}
        >
          {lead}
        </p>
      ) : null}
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}
