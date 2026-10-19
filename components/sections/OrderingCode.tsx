import type { Product } from "@/content/products";
import { Label } from "../ui/Label";
import { RevealItem } from "../ui/Reveal";

type OrderingCodeProps = { ordering: NonNullable<Product["ordering"]> };

/** Example part number split into its segments, each named beneath. */
export function OrderingCode({ ordering }: OrderingCodeProps) {
  const parts = ordering.pattern.split("-");

  return (
    <>
      <RevealItem>
        <dl className="flex flex-wrap gap-x-3 gap-y-8 md:gap-x-(--gutter)">
          {parts.map((part, position) => (
            <div key={`${part}-${position}`} className="flex flex-col-reverse gap-3">
              <dt>
                <Label tone="secondary">{ordering.segments[position]}</Label>
              </dt>
              <dd className="font-mono text-statement">
                {part}
                {position < parts.length - 1 && <span aria-hidden className="ml-3 text-ink-secondary md:ml-(--gutter)">–</span>}
              </dd>
            </div>
          ))}
        </dl>
      </RevealItem>
      <RevealItem as="p" className="measure mt-10">
        {ordering.note}
      </RevealItem>
    </>
  );
}
