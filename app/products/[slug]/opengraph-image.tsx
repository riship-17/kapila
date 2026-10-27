import { getProduct, products } from "@/content/products";
import { ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Product";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductOpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug);
  return ogImage(product?.name ?? "Products", product?.category ?? "");
}
