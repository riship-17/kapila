import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type ButtonLinkProps = { href: string; children: ReactNode; variant?: "solid" | "inverse" | "text"; className?: string };

export function ButtonLink({ href, children, variant = "solid", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cx(
        "group inline-flex h-12 items-center gap-3 text-body font-medium",
        variant === "text"
          ? "decoration-1 underline-offset-4 hover:underline"
          : cx("px-6 transition-opacity hover:opacity-85", variant === "solid" ? "bg-brand text-paper" : "bg-paper text-brand"),
        className,
      )}
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 ease-(--ease-out) group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
