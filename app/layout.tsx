import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { JsonLd } from "@/components/ui/JsonLd";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { site } from "@/content/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], weight: "400", variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Water filtration consumables`, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, locale: "en_GB" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#fafaf8" };

// Without JS, motion's initial hidden state would never clear.
const noScriptReveal = "[data-reveal]{opacity:1!important;transform:none!important}";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-paper font-sans text-body text-ink">
        <noscript>
          <style>{noScriptReveal}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only z-50 bg-paper px-3 py-2 font-mono text-label uppercase focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main" tabIndex={-1} className="focus:outline-none">
            {children}
          </main>
          <Footer />
        </MotionProvider>
        <SmoothScroll />
        <JsonLd
          data={{
            "@type": "Organization",
            name: site.name,
            url: site.url,
            description: site.description,
            email: site.email,
            telephone: site.phones,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address.street,
              addressLocality: site.address.locality,
              addressRegion: site.address.region,
              postalCode: site.address.postalCode,
              addressCountry: site.address.country,
            },
          }}
        />
      </body>
    </html>
  );
}
