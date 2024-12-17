"use client";

import { useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useRef, useState } from "react";

export default function ScrollVideo() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
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
        <video className="w-[40rem] h-auto" ref={videoRef} src="/videos/Features.mp4" muted playsInline></video>
      </div>
    </div>
  );
}
