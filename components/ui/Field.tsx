import type { ReactNode } from "react";
import { Label } from "./Label";

/** Bottom rule only, 56px tall. Shared by inputs, select and textarea. */
export const fieldControl =
  "block w-full appearance-none border-b border-rule bg-transparent text-body text-ink transition-colors focus:border-ink aria-[invalid=true]:border-ink disabled:text-ink-secondary";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
};

/** Mono label above, control, and an inline error beneath the rule. Give the control aria-describedby={`${id}-error`}. */
export function Field({ id, label, error, optional = false, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block">
        <Label>
          {label}
          {optional && <span className="text-ink-secondary"> (optional)</span>}
        </Label>
      </label>
      {children}
      <p id={`${id}-error`} className="mt-2 min-h-4 font-mono text-label uppercase">
        {error}
      </p>
    </div>
  );
}
