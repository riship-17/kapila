"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { useMotionPreference } from "@/lib/motion";

/** Lenis smooth scroll, off under prefers-reduced-motion. */
export function SmoothScroll() {
  const { reduced } = useMotionPreference();

  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.1, autoRaf: true });
    return () => lenis.destroy();
  }, [reduced]);

  return null;
}
