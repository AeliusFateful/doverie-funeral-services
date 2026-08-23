import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { CookieBanner } from "../components/cookie-banner";
import { JsonLd } from "../components/json-ld";
import { rootMetadata } from "../lib/seo";
import "./globals.css";

const cormorant = localFont({
  src: [
    {
      path: "../public/Cormorant Garamond/CormorantGaramond-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/Cormorant Garamond/CormorantGaramond-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Cormorant Garamond/CormorantGaramond-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cormorant",
  display: "optional",
  adjustFontFallback: "Times New Roman",
  preload: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const manrope = localFont({
  src: "../public/Manrope/Manrope-VariableFont_wght.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
  adjustFontFallback: "Arial",
  preload: true,
});

export const metadata: Metadata = {
  ...rootMetadata,
  icons: {
    icon: [{ url: "./images/dove.svg", type: "image/svg+xml" }],
    apple: "./images/dove.svg",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#12100e",
};

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
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="./images/hero/Hero-Angel.webp"
          fetchPriority="high"
        />
      </head>
      <body className="antialiased bg-background font-sans">
        <JsonLd />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
