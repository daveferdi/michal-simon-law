"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollReveal(
  margin: `${number}px` | `${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px` = "-100px",
  amount: number | "some" | "all" = 0.3
) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin, amount });
  return { ref, isInView };
}
