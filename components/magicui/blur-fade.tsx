"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  UseInViewOptions,
  Variants,
  MotionProps,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

type MarginType = UseInViewOptions["margin"];

interface BlurFadeProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  inView?: boolean;
  inViewMargin?: MarginType;
  once?: boolean;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = false,
  inViewMargin = "-50px",
  once = true,
  blur = "6px",
  ...props
}: BlurFadeProps) {
  const ref = useRef(null);
  const entered = useInView(ref, { once, margin: inViewMargin });
  const partlyVisible = useInView(ref);
  const [shown, setShown] = useState(false);
  // Hide only once fully off-screen, so the hidden offset can't re-trigger the reveal
  useEffect(() => {
    if (entered) setShown(true);
    else if (!partlyVisible) setShown(false);
  }, [entered, partlyVisible]);
  const isInView = !inView || (once ? entered : shown);
  const defaultVariants: Variants = {
    hidden: {
      [direction === "left" || direction === "right" ? "x" : "y"]:
        direction === "right" || direction === "down" ? -offset : offset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      [direction === "left" || direction === "right" ? "x" : "y"]: 0,
      opacity: 1,
      filter: `blur(0px)`,
    },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
