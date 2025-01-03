"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function CaseContainer() {
  const imgRef = useRef<HTMLImageElement>(null);

  const isInView = useInView(imgRef);

  return (
    <motion.img
      ref={imgRef}
      animate={{ scale: isInView ? 0.85 : 1 }}
      transition={{ delay: 0.25, duration: 0.5, ease: [0.39, 0.24, 0.3, 1] }}
      className="w-72 lg:w-auto z-10"
      src="/images/Case.png"
      width={400}
      height={400}
      alt="OPods case image"
    />
  );
}
