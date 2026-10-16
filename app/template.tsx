"use client";
import { motion, MotionConfig } from "motion/react";

// template.tsx (unlike layout.tsx) remounts on navigation, replaying the animation.
export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
