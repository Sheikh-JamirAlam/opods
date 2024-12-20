"use client";

import { useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useRef, useState } from "react";

export default function ScrollVideo() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end end"],
  });

  const smoothVideoProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 25,
  });

  const [lastProgress, setLastProgress] = useState(0);

  useMotionValueEvent(smoothVideoProgress, "change", (latest) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const progress = smoothVideoProgress.get();
    const targetTime = progress * video.duration;

    if (Math.abs(progress - lastProgress) > 0.002) {
      video.currentTime = targetTime;
      setLastProgress(latest);
    }
  });

  return (
    <div className="h-[300vh] relative" ref={scrollRef}>
      <div className="h-screen sticky flex justify-center items-center top-0">
        <div className="w-96 absolute top-24 left-48  text-2xl flex flex-col gap-5">
          <h1>OPods Z1</h1>
          <p>Experience immersive sound with OPods Z1: sleek, wireless, and built for unbeatable audio clarity.</p>
        </div>
        <video className="w-[65rem] h-auto" ref={videoRef} src="/videos/Features.mp4" muted playsInline></video>
      </div>
    </div>
  );
}
