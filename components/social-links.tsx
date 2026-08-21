import { FaTelegram, FaVk, FaWhatsapp } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/lib/social-links";

const icons = {
  WhatsApp: FaWhatsapp,
  Telegram: FaTelegram,
  VK: FaVk,
} as const;

export function SocialLinks({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((link) => {
        const Icon = icons[link.name];
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 ease-in-out hover:border-accent/40 hover:text-accent",
              iconClassName,
            )}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
