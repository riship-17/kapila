import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { JsonLd } from "@/components/ui/JsonLd";
import { ProductIndex } from "@/components/ui/ProductIndex";
import { productsPage } from "@/content/pages";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Products", description: productsPage.description, path: "/products" });

export default function ProductsPage() {
  return (
    <>
      <DisplayHeading>Products</DisplayHeading>
      <ProductIndex number="01" title="Index" />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
    </>
  );
}
