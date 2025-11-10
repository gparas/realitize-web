import type { Variants } from "motion/react";
import { stagger } from "motion/react";

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.07, { startDelay: 0.2 }),
    },
  },
};

export const dotVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
};

export const dateVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const nameVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

export const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

export const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.3, { startDelay: 0.2 }),
    },
  },
};
