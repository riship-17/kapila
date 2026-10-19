"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import Link from "next/link";
import { useState, type PointerEvent } from "react";
import type { ResolvedImage } from "@/lib/images";
import { useMotionPreference } from "@/lib/motion";
import { Label } from "./Label";
import { PhotoFrame } from "./PhotoFrame";
import { RevealItem } from "./Reveal";
import { Rule } from "./Rule";
import { Section } from "./Section";

export type IndexEntry = {
  slug: string;
  index: string;
  name: string;
  highlights: string[];
  image: ResolvedImage;
};

type ProductIndexListProps = { number: string; title: string; entries: IndexEntry[] };

export function ProductIndexList({ number, title, entries }: ProductIndexListProps) {
  const [active, setActive] = useState<string | null>(null);
  const { reduced, transition } = useMotionPreference();
  const activeEntry = entries.find((entry) => entry.slug === active);

  // Touch input never drives the preview; touch layouts show in-row thumbnails instead.
  const onPointerEnter = (slug: string) => (event: PointerEvent) => {
    if (event.pointerType === "mouse") setActive(slug);
  };

  const preview = (
    <div aria-hidden className="relative mt-8 hidden w-full max-w-[280px] lg:block">
      <AnimatePresence>
        {activeEntry && (
          <m.div
            key={activeEntry.slug}
            className="absolute inset-x-0 top-0"
            initial={{ opacity: 0, y: reduced ? 0 : 6 }}
            animate={{ opacity: 1, y: 0, transition: transition(0.25) }}
            exit={{ opacity: 0, transition: transition(0.25) }}
          >
            <PhotoFrame image={activeEntry.image} sizes="280px" decorative className="aspect-[4/5]" />
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <Section number={number} title={title} aside={preview} flush>
      <ul onPointerLeave={() => setActive(null)}>
        {entries.map((entry) => (
          <RevealItem as="li" key={entry.slug}>
            <Link
              href={`/products/${entry.slug}`}
              className="group flex items-start gap-x-4 py-6 lg:grid lg:min-h-[120px] lg:grid-cols-9 lg:items-baseline lg:gap-x-(--gutter)"
              onPointerEnter={onPointerEnter(entry.slug)}
              onFocus={() => setActive(entry.slug)}
              onBlur={() => setActive(null)}
            >
              <PhotoFrame
                image={entry.image}
                sizes="64px"
                decorative
                caption={false}
                className="aspect-[4/5] w-16 shrink-0 can-hover:hidden lg:hidden"
              />
              <Label className="hidden lg:block">{entry.index}</Label>
              <div className="min-w-0 flex-1 lg:contents">
                <h3 className="text-heading decoration-1 underline-offset-4 group-hover:underline group-focus-visible:underline lg:col-span-4">
                  <span className="mr-3 font-mono text-label lg:hidden">{entry.index}</span>
                  {entry.name}
                </h3>
                <ul className="mt-3 lg:col-span-3 lg:mt-0">
                  {entry.highlights.map((line) => (
                    <Label as="li" key={line} tone="secondary">
                      {line}
                    </Label>
                  ))}
                </ul>
              </div>
              <span aria-hidden className="text-heading lg:col-start-9 lg:justify-self-end">
                →
              </span>
            </Link>
            <Rule bleed />
          </RevealItem>
        ))}
      </ul>
    </Section>
  );
}
