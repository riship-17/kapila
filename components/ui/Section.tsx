import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Container, Grid } from "./Container";
import { Label } from "./Label";
import { Reveal, RevealItem } from "./Reveal";
import { Rule } from "./Rule";

type SectionProps = {
  number: string;
  title: string;
  children: ReactNode;
  /** Extra content under the label, inside the sticky column. */
  aside?: ReactNode;
  /** Content starts at the section rule, for lists whose first row padding supplies the offset. */
  flush?: boolean;
};

/** Hairline, sticky mono label in cols 1–3, content in cols 4–12. */
export function Section({ number, title, children, aside, flush = false }: SectionProps) {
  const headingId = `section-${number}`;

  return (
    <section aria-labelledby={headingId} className="mt-24 lg:mt-40">
      <Container>
        <Reveal>
          <Rule />
          <Grid>
            <div className="col-span-12 pt-6 lg:col-span-3">
              <div className="relative z-10 lg:sticky lg:top-[calc(var(--header-height)+24px)]">
                <RevealItem>
                  <Label as="h2" id={headingId} className="w-fit bg-paper pr-4">
                    {number} — {title}
                  </Label>
                </RevealItem>
                {aside}
              </div>
            </div>
            <div className={cx("col-span-12 lg:col-span-9", flush ? "mt-4 lg:mt-0" : "mt-10 lg:mt-0 lg:pt-6")}>
              {children}
            </div>
          </Grid>
        </Reveal>
      </Container>
    </section>
  );
}
