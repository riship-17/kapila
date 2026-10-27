import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { Label } from "@/components/ui/Label";
import { getProduct, products } from "@/content/products";
import { productJsonLd } from "@/lib/product-jsonld";
import { breadcrumbJsonLd, describe, pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return pageMetadata({ title: product.name, description: describe(product.summary.join(" ")), path: `/products/${product.slug}` });
}

export default async function ProductPage({ params }: Params) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const position = products.indexOf(product);
  const next = products[(position + 1) % products.length] ?? products[0]!;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.name, path: `/products/${product.slug}` },
  ];

  return (
    <>
      <Container className="grid gap-x-12 gap-y-12 pt-10 lg:grid-cols-12 lg:pt-16">
        <div className="lg:col-span-5 lg:col-start-8">
          <div className="rise lg:sticky lg:top-[calc(var(--header-height)+40px)]">
            <nav aria-label="Breadcrumb">
              <Label as="p" tone="secondary">
                <Link href="/products" className="decoration-1 underline-offset-4 hover:underline">
                  Products
                </Link>
                <span aria-hidden> / </span>
                {String(position + 1).padStart(2, "0")}
              </Label>
            </nav>
            <h1 className="mt-5 text-title text-balance">{product.name}</h1>
            <div className="mt-6 space-y-4">
              {product.summary.map((paragraph) => (
                <p key={paragraph} className="measure text-ink-secondary">
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="mt-10">
              {product.details.map((row) => (
                <div key={row.label} className="grid grid-cols-[9rem_1fr] gap-4 border-t border-rule py-3.5 last:border-b">
                  <dt className="font-mono text-label leading-6 text-ink-secondary uppercase">{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>

            <Label as="h2" tone="secondary" className="mt-10">
              Used for
            </Label>
            <ul className="mt-3 space-y-1">
              {product.uses.map((use) => (
                <li key={use}>{use}</li>
              ))}
            </ul>

            <ButtonLink href={`/contact?product=${product.slug}`} className="mt-10">
              Enquire about this product
            </ButtonLink>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-6 lg:col-start-1 lg:row-start-1">
          {product.images.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority={index === 0}
              sizes="(min-width: 1024px) 588px, 100vw"
              className="h-auto w-full bg-surface"
            />
          ))}
        </div>
      </Container>

      <Container className="mt-28 lg:mt-40">
        <Link href={`/products/${next.slug}`} className="group flex items-end justify-between gap-6 border-t border-rule pt-6">
          <span>
            <Label as="span" tone="secondary" className="block">
              Next product
            </Label>
            <span className="mt-3 block text-title decoration-1 underline-offset-8 group-hover:underline">{next.name}</span>
          </span>
          <span aria-hidden className="text-title transition-transform duration-300 ease-(--ease-out) group-hover:translate-x-1">
            →
          </span>
        </Link>
      </Container>

      <JsonLd data={productJsonLd(product)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
