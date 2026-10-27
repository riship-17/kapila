import type { ReactNode } from "react";
import { Label } from "./Label";

type SectionHeadingProps = { label: string; id?: string; children: ReactNode; action?: ReactNode };

/** Hairline, mono label, then the section title; an optional link sits at the right. */
export function SectionHeading({ label, id, children, action }: SectionHeadingProps) {
  return (
    <div className="border-t border-rule pt-6">
      <Label as="p" tone="secondary">
        {label}
      </Label>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <h2 id={id} className="max-w-[18ch] text-title text-balance">
          {children}
        </h2>
        {action}
      </div>
    </div>
  );
}
