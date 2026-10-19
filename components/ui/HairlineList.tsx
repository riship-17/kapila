import { RevealItem } from "./Reveal";
import { Rule } from "./Rule";

type HairlineListProps = { items: string[] };

/** Plain list at heading size, a full-width hairline under each line. Use inside a flush <Section>. */
export function HairlineList({ items }: HairlineListProps) {
  return (
    <ul>
      {items.map((item) => (
        <RevealItem as="li" key={item}>
          <p className="py-6 text-heading">{item}</p>
          <Rule bleed />
        </RevealItem>
      ))}
    </ul>
  );
}
