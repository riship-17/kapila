import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Rule } from "./Rule";

type DisplayHeadingProps = { children: ReactNode; breadcrumb?: ReactNode };

/**
 * The page h1 at display size. It rises once on load from behind the hairline
 * beneath it; the overflow clip sits on that hairline.
 */
export function DisplayHeading({ children, breadcrumb }: DisplayHeadingProps) {
  return (
    <Container className="pt-16 lg:pt-24">
      {breadcrumb}
      <div className="overflow-hidden pb-[0.12em]">
        <h1 className="display-rise text-display text-balance">{children}</h1>
      </div>
      <Reveal>
        <Rule />
      </Reveal>
    </Container>
  );
}
