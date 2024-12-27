"use client";

import { useMotionValueEvent, useScroll, useSpring, useTransform, motion } from "motion/react";
import { useRef, useState } from "react";

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
  const musicScreenOpacity = useTransform(smoothScroll, [9450, 9650], [0, 1]);

  const [isBlinking, setIsBlinking] = useState<string>("white");

  useMotionValueEvent(smoothScroll, "change", (value) => {
    if (value >= 9064 && value < 9450) {
      setIsBlinking("blink");
    } else if (value >= 9450) {
      setIsBlinking("green");
    } else {
      setIsBlinking("white");
    }
  });

  return (
    <div ref={scrollDivRef} className="h-[150vh] z-10">
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
          <motion.div
            className={`w-[0.45rem] h-[0.45rem] rounded-full absolute translate-x-[21.05rem] -translate-y-[7.65rem] transition-all duration-500 ${
              isBlinking === "blink" ? "animate-blink" : isBlinking === "green" ? "bg-lime" : "bg-white"
            }`}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
