"use client";

import { useMotionValueEvent, useScroll, useSpring, useTransform, motion } from "motion/react";
import { useRef, useState } from "react";

export default function ScreenContainer() {
  const scrollDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollDivRef,
    offset: ["start end", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 25,
  });

  const homeScreenOpacity = useTransform(smoothScroll, [0, 0.65], [0, 1]);
  const caseOpacity = useTransform(smoothScroll, [0.15, 0.65], [0, 1]);
  const caseScale = useTransform(smoothScroll, [0.15, 0.65], [1.3, 1]);
  const musicScreenOpacity = useTransform(smoothScroll, [0.85, 0.95], [0, 1]);

  const [isBlinking, setIsBlinking] = useState<string>("white");

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value >= 0.65 && value < 0.85) {
      setIsBlinking("blink");
    } else if (value >= 0.85) {
      setIsBlinking("green");
    } else {
      setIsBlinking("white");
    }
  });

  return (
    <div ref={scrollDivRef} className="h-[65rem] md:h-[90rem] z-10">
      <div className="h-[475px] md:h-[690px] mt-10 md:mt-20 sticky top-[15%] flex justify-center items-center">
        <div className="flex items-end">
          <motion.img className="w-60 md:w-[350px]" style={{ opacity: homeScreenOpacity }} src="/images/HomeScreen.png" width={350} alt="Connection screen" />
          <motion.img className="w-60 md:w-[350px] opacity-0 absolute" style={{ opacity: musicScreenOpacity }} src="/images/MusicScreen.png" width={350} alt="Connection screen" />
          <motion.img
            style={{ opacity: caseOpacity, scale: caseScale, translateX: "10rem", translateY: "-0.7rem" }}
            className="w-32 md:w-[200px] absolute translate-x-40 -translate-y-[0.7rem]"
            src="/images/OpenCase.png"
            width={200}
            alt="Open OPods Case"
          />
          <div
            className={`w-[0.25rem] h-[0.25rem] md:w-[0.45rem] md:h-[0.45rem] rounded-full absolute translate-x-[13.9rem] -translate-y-[5rem] md:translate-x-[21.05rem] md:-translate-y-[7.65rem] transition-all duration-500 ${
              isBlinking === "blink" ? "animate-blink" : isBlinking === "green" ? "bg-lime" : "bg-white"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
