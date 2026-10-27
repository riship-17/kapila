import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeading } from "@/components/ui/PageHeading";
import { ProductGrid } from "@/components/ui/ProductGrid";
import { site } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Products", description: site.description, path: "/products" });

export default function ProductsPage() {
  return (
    <>
      <PageHeading label="Products" intro={site.description}>
        Products
      </PageHeading>
      <Container className="mt-16 lg:mt-24">
        <div className="border-t border-rule pt-12">
          <ProductGrid headingLevel="h2" />
        </div>
      </Container>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
    </>
  );
}
