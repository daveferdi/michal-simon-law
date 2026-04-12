"use client";

import { useEffect, useState } from "react";

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function useCountUp(end: number, trigger: boolean, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start: number | null = null;
    let raf: number;

    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(easeOutExpo(progress) * end));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [trigger, end, duration]);

  return value;
}
