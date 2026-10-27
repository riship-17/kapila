import type { ReactNode } from "react";
import { Container } from "./Container";
import { Label } from "./Label";

type PageHeadingProps = { label: ReactNode; children: ReactNode; intro?: string };

/** The page h1 at display size, with a mono label above and an optional lead paragraph. */
export function PageHeading({ label, children, intro }: PageHeadingProps) {
  return (
    <Container className="rise pt-14 lg:pt-24">
      <Label as="p" tone="secondary">
        {label}
      </Label>
      <h1 className="mt-6 max-w-[16ch] text-display text-balance">{children}</h1>
      {intro && <p className="measure mt-8 text-lead text-ink-secondary">{intro}</p>}
    </Container>
  );
}
