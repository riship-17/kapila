import Link from "next/link";
import type { RichText as RichTextData } from "@/content/products";

/** Renders text runs with inline underlined links. */
export function RichText({ runs }: { runs: RichTextData }) {
  return runs.map((run) =>
    typeof run === "string" ? (
      run
    ) : (
      <Link key={run.href} href={run.href} className="link">
        {run.text}
      </Link>
    ),
  );
}
