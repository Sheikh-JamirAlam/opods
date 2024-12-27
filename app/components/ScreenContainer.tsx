"use client";

import { useScroll, useSpring, useTransform, motion } from "motion/react";
import { useRef } from "react";

export default function ScreenContainer() {
  const scrollDivRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({
    target: scrollDivRef,
    offset: ["start end", "end end"],
  });

  const smoothScroll = useSpring(scrollY, {
    stiffness: 180,
    damping: 25,
  });

  const homeScreenOpacity = useTransform(smoothScroll, [8152, 9064], [0, 1]);
  const caseOpacity = useTransform(smoothScroll, [8352, 9064], [0, 1]);
  const caseScale = useTransform(smoothScroll, [8352, 9064], [1.3, 1]);
  const musicScreenOpacity = useTransform(smoothScroll, [9264, 9452], [0, 1]);

  return (
    <div ref={scrollDivRef} className="h-[145vh] z-10">
      <div className="h-[80vh] pt-[20vh] sticky top-0 flex justify-center items-center">
        <div className="flex items-end">
          <motion.img style={{ opacity: homeScreenOpacity }} src="/images/HomeScreen.png" width={350} height={350} alt="Connection screen" />
          <motion.img style={{ opacity: musicScreenOpacity }} className="opacity-0 absolute" src="/images/MusicScreen.png" width={350} height={350} alt="Connection screen" />
          <motion.img
            style={{ opacity: caseOpacity, scale: caseScale, translateX: "15rem", translateY: "-1rem" }}
            className="absolute translate-x-60 -translate-y-4"
            src="/images/OpenCase.png"
            width={200}
            height={200}
            alt="Open OPods Case"
          />
        </div>
      </div>
    </div>
  );
}
