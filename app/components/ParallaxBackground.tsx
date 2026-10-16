"use client";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type ParallaxBackgroundProps = {
  src: string;
};

export function ParallaxBackground({ src }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <div ref={ref} aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div style={{ y: reduceMotion ? 0 : y }} className="absolute inset-0">
        <Image src={src} alt="" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
    </div>
  );
}
