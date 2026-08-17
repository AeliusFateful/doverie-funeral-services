import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { rootMetadata } from "@/lib/seo";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["700", "300", "500"],
  variable: "--font-cormorant",
  display: "optional",
  adjustFontFallback: true,
  preload: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
  adjustFontFallback: true,
  preload: false,
});

export const metadata: Metadata = {
  ...rootMetadata,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#12100e" },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased bg-background font-sans">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
