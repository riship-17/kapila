"use client";

import * as m from "motion/react-m";
import { cx } from "@/lib/cx";
import { useMotionPreference } from "@/lib/motion";

type RuleProps = {
  /** Inside the content column, extend left across the label column to the page margin. */
  bleed?: boolean;
  className?: string;
};

/** 1px hairline. Draws left to right when its parent <Reveal> enters view. */
export function Rule({ bleed = false, className }: RuleProps) {
  const { transition } = useMotionPreference();

  return (
    <m.div
      aria-hidden
      data-reveal
      variants={{ hidden: { scaleX: 0 }, shown: { scaleX: 1, transition: transition(0.7) } }}
      className={cx("h-px origin-left bg-rule", bleed && "rule-bleed", className)}
    />
  );
}
