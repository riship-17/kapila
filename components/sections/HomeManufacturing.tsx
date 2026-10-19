import { home } from "@/content/pages";
import { ContentGrid } from "../ui/Container";
import { Photo } from "../ui/Photo";
import { RevealItem } from "../ui/Reveal";
import { Section } from "../ui/Section";

/** Body text in cols 4–8; a tall photograph in cols 9–12 whose foot sits on the text's last baseline. */
export function HomeManufacturing() {
  return (
    <Section number="03" title="Manufacturing">
      <ContentGrid className="gap-y-10 [align-items:last_baseline]">
        <div className="col-span-9 space-y-6 md:col-span-5">
          {home.manufacturing.map((paragraph) => (
            <RevealItem as="p" key={paragraph} className="measure">
              {paragraph}
            </RevealItem>
          ))}
        </div>
        <RevealItem className="col-span-9 md:col-span-4">
          <Photo
            image={home.manufacturingImage}
            sizes="(min-width: 1320px) 400px, (min-width: 768px) 32vw, 100vw"
            className="aspect-[3/4] w-full"
          />
        </RevealItem>
      </ContentGrid>
    </Section>
  );
}
