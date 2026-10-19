import Link from "next/link";
import type { Product } from "@/content/products";
import { Container, Grid } from "../ui/Container";
import { Label } from "../ui/Label";
import { Reveal } from "../ui/Reveal";
import { Rule } from "../ui/Rule";

/** Full-width, 160px row linking to the next product in the catalogue. */
export function NextProduct({ product }: { product: Product }) {
  return (
    <Container className="mt-24 lg:mt-40">
      <Reveal>
        <Rule />
        <Link href={`/products/${product.slug}`} className="group block">
          <Grid className="h-40 content-center items-baseline">
            <Label className="col-span-12 mb-3 lg:col-span-3 lg:mb-0">Next — {product.index}</Label>
            <span className="col-span-12 text-statement decoration-1 underline-offset-[6px] group-hover:underline group-focus-visible:underline lg:col-span-9">
              {product.name}
            </span>
          </Grid>
        </Link>
        <Rule />
      </Reveal>
    </Container>
  );
}
