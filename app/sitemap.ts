import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/products", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${site.url}${path}`, priority: path === "" ? 1 : 0.7 })),
    ...products.map((product) => ({ url: `${site.url}/products/${product.slug}`, priority: 0.9 })),
  ];
}
