import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
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
  preload: false,
});

export const metadata: Metadata = {
  ...rootMetadata,
  icons: {
    icon: [{ url: "./images/dove.svg", type: "image/svg+xml" }],
    apple: "./images/dove.svg",
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
      className={`${cormorant.variable} ${manrope.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script async dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased bg-background font-sans">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
