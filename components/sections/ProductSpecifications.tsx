import type { Product } from "@/content/products";
import { ComparisonTable } from "../ui/ComparisonTable";
import { RevealItem } from "../ui/Reveal";
import { SpecTable } from "../ui/SpecTable";

/** Comparison tables first, then two-column tables. A product may have either shape or both. */
export function ProductSpecifications({ product }: { product: Product }) {
  const single = (product.comparisonTables?.length ?? 0) + product.specTables.length === 1;

  return (
    <div className="space-y-16">
      {product.comparisonTables?.map((table) => (
        <RevealItem key={table.title}>
          <ComparisonTable table={table} captionHidden={single} />
        </RevealItem>
      ))}
      {product.specTables.map((table) => (
        <RevealItem key={table.title}>
          <SpecTable table={table} captionHidden={single} />
        </RevealItem>
      ))}
    </div>
  );
}
