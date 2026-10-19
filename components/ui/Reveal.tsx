"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { useMotionPreference } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul";
};

const containers = { div: m.div, ul: m.ul };
const items = { div: m.div, li: m.li, p: m.p };

/**
 * Triggers once at 15% visibility. Descendant <RevealItem> and <Rule>
 * elements animate in sequence, 60ms apart.
 */
export function Reveal({ children, className, as = "div" }: RevealProps) {
  const { reduced } = useMotionPreference();
  const Tag = containers[as];

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, shown: { transition: { staggerChildren: reduced ? 0 : 0.06 } } }}
    >
      {children}
    </Tag>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  as?: keyof typeof items;
};

/** Opacity 0 → 1 and 12px rise, 500ms. Under reduced motion it appears instantly. */
export function RevealItem({ children, className, as = "div" }: RevealItemProps) {
  const { transition } = useMotionPreference();
  const Tag = items[as];

  return (
    <Tag
      data-reveal
      className={className}
      variants={{ hidden: { opacity: 0, y: 12 }, shown: { opacity: 1, y: 0, transition: transition(0.5) } }}
    >
      {children}
    </Tag>
  );
}
