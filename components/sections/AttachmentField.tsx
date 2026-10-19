"use client";

import { useRef } from "react";
import { ATTACHMENT_ACCEPT } from "@/lib/enquiry";
import { Label } from "../ui/Label";

type AttachmentFieldProps = {
  file: File | null;
  error: string | null;
  onChange: (file: File | null) => void;
};

/** A plain underlined link that opens the file picker. The input stays keyboard-focusable. */
export function AttachmentField({ file, error, onChange }: AttachmentFieldProps) {
  const input = useRef<HTMLInputElement>(null);

  const clear = () => {
    if (input.current) input.current.value = "";
    onChange(null);
  };

  return (
    <div>
      <input
        ref={input}
        id="attachment"
        type="file"
        accept={ATTACHMENT_ACCEPT}
        aria-describedby="attachment-note attachment-error"
        className="peer sr-only"
        onChange={(event) => onChange(event.target.files?.[0] ?? null)}
      />
      <label
        htmlFor="attachment"
        className="link cursor-pointer peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink"
      >
        {file ? "Replace attachment" : "Attach a drawing or specification"}
      </label>
      <p id="attachment-note" className="mt-2">
        <Label tone="secondary">{file ? file.name : "PDF, JPG, PNG or Excel, up to 5 MB"}</Label>
        {file && (
          <button type="button" onClick={clear} className="ml-4 font-mono text-label uppercase link">
            Remove
          </button>
        )}
      </p>
      <p id="attachment-error" className="mt-2 min-h-4 font-mono text-label uppercase">
        {error}
      </p>
    </div>
  );
}
