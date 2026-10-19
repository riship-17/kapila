import type { Metadata } from "next";
import { HomeManufacturing } from "@/components/sections/HomeManufacturing";
import { HomeOpening } from "@/components/sections/HomeOpening";
import { HairlineList } from "@/components/ui/HairlineList";
import { ProductIndex } from "@/components/ui/ProductIndex";
import { RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { home } from "@/content/pages";
import { industries, site } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">
        {site.name} — manufacturer of filter cartridges, filter housings, activated carbon and RO membrane elements
      </h1>
      <HomeOpening />
      <Section number="01" title="What we make">
        <RevealItem as="p" className="text-statement">
          {home.statement}
        </RevealItem>
      </Section>
      <ProductIndex number="02" title="Products" />
      <HomeManufacturing />
      <Section number="04" title="Industries" flush>
        <HairlineList items={industries.map((industry) => industry.name)} />
      </Section>
    </>
  );
}
