"use client";

import { motion, useMotionValueEvent, useScroll, useTransform, useSpring } from "motion/react";
import { useRef, useState } from "react";

export default function ScrollVideo() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothVideoProgress = useSpring(scrollYProgress, {
    stiffness: 200, // Adjust for faster/slower response
    damping: 25, // Reduce oscillation
    // mass: 1, // Adjust for more weight (smoother easing)
  });

  // const videoProgress = useTransform(smoothVideoProgress, [0, 1], [0, 1]);

  const [lastProgress, setLastProgress] = useState(0);

  useMotionValueEvent(smoothVideoProgress, "change", (latest) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const progress = smoothVideoProgress.get();
    const targetTime = progress * video.duration;
    console.log(targetTime);

    if (Math.abs(progress - lastProgress) > 0.001) {
      video.currentTime = targetTime;
      setLastProgress(latest);
    }
  });

  return (
    <div className="h-[300vh] relative" ref={scrollRef}>
      <div className="h-screen sticky flex justify-center items-center top-0">
        <motion.video
          transition={{ delay: 1, ease: "linear" }}
          className="w-[40rem] h-auto"
          ref={videoRef}
          src="https://res.cloudinary.com/ddh8nxew6/video/upload/v1734240683/videos/Features.mp4"
          muted
          playsInline
          preload="auto"
        ></motion.video>
      </div>
    </div>
  );
}
