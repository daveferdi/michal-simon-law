import type { Variants } from "framer-motion";

export const LUXURY_EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
export const REVEAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function staggerContainer(
  stagger = 0.15,
  delayChildren = 0.2
): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

export function fadeInUp(duration = 0.8, delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: LUXURY_EASE },
    },
  };
}

export const fadeInUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: LUXURY_EASE },
  },
};

export function fadeInFromEnd(duration = 0.8): Variants {
  return {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration, ease: LUXURY_EASE },
    },
  };
}

export function fadeInFromStart(duration = 0.8): Variants {
  return {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration, ease: LUXURY_EASE },
    },
  };
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: LUXURY_EASE },
  },
};

export const lineExpand: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: REVEAL_EASE },
  },
};
