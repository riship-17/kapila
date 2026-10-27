import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type ContainerProps = { children: ReactNode; className?: string };

/** Page width: 1200px of content plus page margins. */
export function Container({ children, className }: ContainerProps) {
  return <div className={cx("mx-auto w-full max-w-[calc(1200px+2*var(--margin))] px-(--margin)", className)}>{children}</div>;
}
