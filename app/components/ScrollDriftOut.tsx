"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type ScrollDriftOutProps = {
  children: React.ReactNode;
  className?: string;
};

export function ScrollDriftOut({ children, className }: ScrollDriftOutProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.15]);

  return (
    <motion.div
      ref={ref}
      style={reduceMotion ? undefined : { y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
