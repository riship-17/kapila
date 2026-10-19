import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type BoxProps = { children: ReactNode; className?: string };

/** Page width: 1240px of grid plus page margins. Also the query container for rule-bleed. */
export function Container({ children, className }: BoxProps) {
  return (
    <div className={cx("@container mx-auto w-full max-w-[calc(1240px+2*var(--margin))] px-(--margin)", className)}>
      {children}
    </div>
  );
}

/** The 12-column grid with 24px gutters. */
export function Grid({ children, className }: BoxProps) {
  return <div className={cx("grid grid-cols-12 gap-x-(--gutter)", className)}>{children}</div>;
}

/** The nine columns of the content area (cols 4–12), on the same column lines as <Grid>. */
export function ContentGrid({ children, className }: BoxProps) {
  return <div className={cx("grid grid-cols-9 gap-x-(--gutter)", className)}>{children}</div>;
}
