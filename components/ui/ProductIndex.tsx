import { products } from "@/content/products";
import { resolveImage } from "@/lib/images";
import { ProductIndexList, type IndexEntry } from "./ProductIndexList";

type ProductIndexProps = { number: string; title: string };

/** Server entry: resolves which product photographs exist, then renders the interactive index. */
export function ProductIndex({ number, title }: ProductIndexProps) {
  const entries: IndexEntry[] = products.map((product) => ({
    slug: product.slug,
    index: product.index,
    name: product.name,
    highlights: product.highlights,
    image: resolveImage(product.images[0]),
  }));

  return <ProductIndexList number={number} title={title} entries={entries} />;
}
