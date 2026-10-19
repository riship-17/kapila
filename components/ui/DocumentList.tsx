import { Label } from "./Label";
import { RevealItem } from "./Reveal";
import { Rule } from "./Rule";

export type DocumentRow = { name: string; href: string; meta?: string };

type DocumentListProps = { documents: DocumentRow[]; action: string };

/** Hairline rows: document name, optional mono detail, and a right-aligned mono link. Use in a flush <Section>. */
export function DocumentList({ documents, action }: DocumentListProps) {
  return (
    <ul>
      {documents.map((document) => (
        <RevealItem as="li" key={document.href}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-(--gutter) gap-y-2 py-6">
            <p className="text-heading">{document.name}</p>
            <div className="flex items-baseline gap-x-8">
              {document.meta && <Label tone="secondary">{document.meta}</Label>}
              <a href={document.href} className="font-mono text-label uppercase link">
                {action}
                <span className="sr-only">: {document.name}</span>
              </a>
            </div>
          </div>
          <Rule bleed />
        </RevealItem>
      ))}
    </ul>
  );
}
