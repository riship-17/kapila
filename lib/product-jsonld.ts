import type { Product } from "@/content/products";
import { site } from "@/content/site";

/** Schema.org Product, with every detail row as an additionalProperty. */
export function productJsonLd(product: Product) {
  return {
    "@type": "Product",
    name: product.name,
    description: product.summary.join(" "),
    category: product.category,
    url: `${site.url}/products/${product.slug}`,
    brand: { "@type": "Brand", name: site.name },
    image: product.images.map((image) => `${site.url}${image.src}`),
    additionalProperty: product.details.map((row) => ({ "@type": "PropertyValue", name: row.label, value: row.value })),
  };
}
