import Link from "next/link";
import { ContentGrid } from "@/components/ui/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { JsonLd } from "@/components/ui/JsonLd";
import { Label } from "@/components/ui/Label";
import { RevealItem } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { Section } from "@/components/ui/Section";
import { industriesPage } from "@/content/pages";
import { getProduct, type Product } from "@/content/products";
import { industries } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industries",
  description: industriesPage.description,
  path: "/industries",
});

const productsFor = (slugs: string[]): Product[] =>
  slugs.map(getProduct).filter((product): product is Product => Boolean(product));

export default function IndustriesPage() {
  return (
    <>
      <DisplayHeading>Industries</DisplayHeading>
      <Section number="01" title="Industries served" flush>
        <ul>
          {industries.map((industry) => (
            <RevealItem as="li" key={industry.name}>
              <ContentGrid className="gap-y-4 py-6">
                <h3 className="col-span-9 text-heading md:col-span-5">{industry.name}</h3>
                <ul aria-label={`Products used in ${industry.name}`} className="col-span-9 md:col-span-4">
                  {productsFor(industry.products).map((product) => (
                    <Label as="li" key={product.slug}>
                      <Link href={`/products/${product.slug}`} className="inline-block py-[5px] decoration-1 underline-offset-4 hover:underline">
                        {product.name}
                      </Link>
                    </Label>
                  ))}
                </ul>
              </ContentGrid>
              <Rule bleed />
            </RevealItem>
          ))}
        </ul>
      </Section>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
    </>
  );
}
