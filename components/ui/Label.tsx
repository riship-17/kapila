import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type LabelProps = {
  children: ReactNode;
  as?: "span" | "p" | "h2" | "h3" | "div" | "li" | "dt" | "dd";
  tone?: "ink" | "secondary";
  id?: string;
  className?: string;
};

/** Mono, uppercase, 11px. Section labels, nav, specs, model codes. */
export function Label({ children, as: Tag = "span", tone = "ink", id, className }: LabelProps) {
  return (
    <Tag
      id={id}
      className={cx("font-mono text-label uppercase", tone === "secondary" && "text-ink-secondary", className)}
    >
      {children}
    </Tag>
  );
}
