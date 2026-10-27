import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/content/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], weight: "400", variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, locale: "en_IN" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#fafaf8" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-paper font-sans text-body text-ink">
        <a
          href="#main"
          className="sr-only z-50 bg-paper px-3 py-2 font-mono text-label uppercase focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <Footer />
        <JsonLd
          data={{
            "@type": "Organization",
            name: site.name,
            url: site.url,
            description: site.description,
            ...(site.email && { email: site.email }),
            ...(site.phones.length > 0 && { telephone: site.phones }),
            ...(site.address.length > 0 && {
              address: { "@type": "PostalAddress", streetAddress: site.address.join(", "), addressCountry: "IN" },
            }),
          }}
        />
      </body>
    </html>
  );
}
