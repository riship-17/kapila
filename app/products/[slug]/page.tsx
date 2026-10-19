import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { NextProduct } from "@/components/sections/NextProduct";
import { OrderingCode } from "@/components/sections/OrderingCode";
import { ProductSpecifications } from "@/components/sections/ProductSpecifications";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContentGrid } from "@/components/ui/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { DocumentList } from "@/components/ui/DocumentList";
import { HairlineList } from "@/components/ui/HairlineList";
import { JsonLd } from "@/components/ui/JsonLd";
import { Photo } from "@/components/ui/Photo";
import { RevealItem } from "@/components/ui/Reveal";
import { RichText } from "@/components/ui/RichText";
import { Section } from "@/components/ui/Section";
import { getNextProduct, getProduct, products, type Product } from "@/content/products";
import { publicFileExists } from "@/lib/images";
import { productJsonLd } from "@/lib/product-jsonld";
import { breadcrumbJsonLd, describe, pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };
type Block = { title: string; flush?: boolean; content: ReactNode };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  const description = describe(product.summary.join(" "));
  return pageMetadata({ title: product.name, description, path: `/products/${product.slug}` });
}

function blocksFor(product: Product): Block[] {
  const downloads = product.downloads.filter((file) => publicFileExists(file.href));
  const blocks: (Block | false | undefined)[] = [
    {
      title: "Construction",
      content: (
        <ContentGrid>
          <div className="col-span-9 space-y-6 lg:col-span-6">
            {product.summary.map((paragraph) => (
              <RevealItem as="p" key={paragraph} className="measure">
                {paragraph}
              </RevealItem>
            ))}
          </div>
        </ContentGrid>
      ),
    },
    { title: "Specifications", content: <ProductSpecifications product={product} /> },
    product.note && {
      title: product.note.title,
      content: (
        <>
          <RevealItem as="p" className="text-statement">
            {product.note.statement}
          </RevealItem>
          <RevealItem as="p" className="measure mt-8">
            <RichText runs={product.note.body} />
          </RevealItem>
        </>
      ),
    },
    { title: "Applications", flush: true, content: <HairlineList items={product.applications} /> },
    product.ordering && { title: "Ordering", content: <OrderingCode ordering={product.ordering} /> },
    downloads.length > 0 && {
      title: "Downloads",
      flush: true,
      content: (
        <DocumentList
          action="Download"
          documents={downloads.map((file) => ({ ...file, meta: `${file.format} · ${file.size}` }))}
        />
      ),
    },
  ];
  return blocks.filter((block): block is Block => Boolean(block));
}

export default async function ProductPage({ params }: Params) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.name, path: `/products/${product.slug}` },
  ];

  return (
    <>
      <DisplayHeading breadcrumb={<Breadcrumb crumbs={crumbs} />}>{product.name}</DisplayHeading>
      <Photo image={product.images[0]} sizes="100vw" priority className="mt-10 h-[64vh] w-full" />
      {blocksFor(product).map((block, position) => (
        <Section key={block.title} number={String(position + 1).padStart(2, "0")} title={block.title} flush={block.flush}>
          {block.content}
        </Section>
      ))}
      <NextProduct product={getNextProduct(product.slug)} />
      <JsonLd data={productJsonLd(product)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
