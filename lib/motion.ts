"use client";

import { useReducedMotion, type Transition } from "motion/react";

export const EASE_REVEAL = [0.16, 1, 0.3, 1] as const;

/**
 * The single reduced-motion check for every JS-driven behaviour.
 * Under prefers-reduced-motion every transition collapses to instant, and
 * callers drop transform offsets so only opacity changes.
 * The CSS behaviours (display heading, page fade) mirror this in globals.css.
 */
export function useMotionPreference() {
  const reduced = useReducedMotion() ?? false;

  const transition = (seconds: number, delay = 0): Transition =>
    reduced ? { duration: 0 } : { duration: seconds, delay, ease: EASE_REVEAL };

  return { reduced, transition };
}
