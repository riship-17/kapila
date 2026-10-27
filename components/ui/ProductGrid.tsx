import Image from "next/image";
import Link from "next/link";
import { featuredSlug, products } from "@/content/products";
import { Label } from "./Label";

/** The featured product as a wide card, then every other product three to a row. */
export function ProductGrid({ headingLevel: Heading = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const featured = products.find((product) => product.slug === featuredSlug);
  const rest = products.filter((product) => product !== featured);

  return (
    <div className="space-y-12 lg:space-y-16">
      {featured && (
        <Link href={`/products/${featured.slug}`} className="group grid items-end gap-x-6 gap-y-5 lg:grid-cols-3">
          <div className="relative aspect-[3/2] overflow-hidden bg-surface lg:col-span-2">
            <Image
              src={featured.images[0].src}
              alt=""
              fill
              sizes="(min-width: 1024px) 792px, 100vw"
              className="object-cover transition-transform duration-700 ease-(--ease-out) group-hover:scale-[1.02]"
            />
          </div>
          <div className="lg:pb-2">
            <Label as="p" tone="secondary">
              Featured
            </Label>
            <Heading className="mt-3 text-title text-balance decoration-1 underline-offset-8 group-hover:underline">
              {featured.name}
            </Heading>
            <p className="mt-3 text-ink-secondary">{featured.short}</p>
          </div>
        </Link>
      )}
      <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((product) => (
          <li key={product.slug}>
            <Link href={`/products/${product.slug}`} className="group block">
              <div className="relative aspect-square overflow-hidden bg-surface">
                <Image
                  src={product.images[0].src}
                  alt=""
                  style={{ objectPosition: product.images[0].focus }}
                  fill
                  sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-(--ease-out) group-hover:scale-[1.03]"
                />
              </div>
              <Heading className="mt-5 text-heading decoration-1 underline-offset-4 group-hover:underline">
                {product.name}
              </Heading>
              <p className="mt-1.5 text-ink-secondary">{product.short}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
