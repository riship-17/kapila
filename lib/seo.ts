import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMeta = { title: string; description: string; path: string };

/** Canonical URL, OpenGraph and Twitter card for one page. */
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: site.name, locale: "en_GB", title, description, url: path },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** Trims to the last full sentence that fits a search-result description. */
export function describe(text: string, max = 160): string {
  if (text.length <= max) return text;
  const sentences = text.match(/[^.]+\./g) ?? [];
  let out = "";
  for (const sentence of sentences) {
    if ((out + sentence).trim().length > max) break;
    out += sentence;
  }
  return out.trim() || `${text.slice(0, max - 1).trimEnd()}…`;
}

export type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, position) => ({
      "@type": "ListItem",
      position: position + 1,
      name: crumb.name,
      item: `${site.url}${crumb.path}`,
    })),
  };
}
