import type { Product } from "@/content/products";
import { site } from "@/content/site";
import { publicFileExists } from "./images";

/** Schema.org Product, with every specification row as an additionalProperty. */
export function productJsonLd(product: Product) {
  const image = product.images[0];
  const rows = [
    ...product.specTables.flatMap((table) => table.rows),
    ...(product.comparisonTables ?? []).flatMap((table) =>
      table.rows.map((row) => ({ label: `${table.title}: ${row.label}`, value: row.values.join("; ") })),
    ),
  ];

  return {
    "@type": "Product",
    name: product.name,
    description: product.summary.join(" "),
    category: product.category,
    url: `${site.url}/products/${product.slug}`,
    brand: { "@type": "Brand", name: site.name },
    image: publicFileExists(image.src) ? `${site.url}${image.src}` : undefined,
    additionalProperty: rows.map((row) => ({ "@type": "PropertyValue", name: row.label, value: row.value })),
  };
}
