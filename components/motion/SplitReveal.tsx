"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SplitReveal({
  children,
  className,
  delay = 0,
  duration = 1,
}) {
  return (
    <motion.div
      style={{ overflow: "hidden", display: "inline-block" }}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration, delay, ease: [0.5, 1, 0.89, 1] }}
      viewport={{ once: true, amount: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
