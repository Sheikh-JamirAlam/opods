"use client";

import { useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FloatingNavbar from "./FloatingNavbar";

export default function ScrollVideo() {
  const [isFloatingNavVisible, setIsFloatingNavVisible] = useState<boolean>(false);
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

  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const calculateViewport = () => {
      setViewportWidth(window.innerWidth);
    };
    calculateViewport();
    window.addEventListener("resize", calculateViewport);
    return () => {
      window.removeEventListener("resize", calculateViewport);
    };
  }, []);

  const [deviceType, setDeviceType] = useState<"desktop" | "mobile">("desktop");

  useEffect(() => {
    const hoverMediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateDeviceType = () => {
      setDeviceType(hoverMediaQuery.matches ? "desktop" : "mobile");
    };
    updateDeviceType();
    hoverMediaQuery.addEventListener("change", updateDeviceType);
    return () => {
      hoverMediaQuery.removeEventListener("change", updateDeviceType);
    };
  }, []);

  const [lastProgress, setLastProgress] = useState(0);

  const opacity = useTransform(smoothVideoProgress, [0.26, 0.36, 0.46], [0, 1, 0]);
  const opacitySecond = useTransform(smoothVideoProgress, [0.49, 0.59, 0.69], [0, 1, 0]);
  const opacityThird = useTransform(smoothVideoProgress, [0.9, 1], [0, 1]);

  const opacityPhone = useTransform(scrollYProgress, [0.3, 0.36, 0.38], [0, 1, 0]);
  const opacitySecondPhone = useTransform(scrollYProgress, [0.53, 0.59, 0.6], [0, 1, 0]);
  const opacityThirdPhone = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  useMotionValueEvent(smoothVideoProgress, "change", (latest) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const progress = smoothVideoProgress.get();
    const targetTime = progress * video.duration;

    if (Math.abs(progress - lastProgress) > 0.002) {
      video.currentTime = targetTime;
      setLastProgress(latest);
    }

    if (latest > 0.33) {
      setIsFloatingNavVisible(true);
    } else {
      setIsFloatingNavVisible(false);
    }
  });

  return deviceType === "desktop" ? (
    <div className="h-[300vh] relative flex justify-center lg:block" ref={scrollRef}>
      <FloatingNavbar isFloatingNavVisible={isFloatingNavVisible} />
      <div className="h-screen sticky flex justify-center items-center top-0">
        <div className="w-auto xs:w-96 pr-6 xs:pr-0 absolute top-24 left-6 md:left-20 xl:left-48 text-lg xs:text-2xl flex flex-col gap-5">
          <h1 className="font-medium">OPods Z1</h1>
          <p>Experience immersive sound with OPods Z1: sleek, wireless, and built for unbeatable audio clarity.</p>
        </div>
        <video className="w-[90%] xs:w-[75%] lg:w-[50%] ml-8 xs:ml-0 mr-0 lg:mr-16 xl:mr-0 h-auto" ref={videoRef} muted playsInline aria-label="A video of the different features of OPods">
          <source src="/videos/Features.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        style={{ opacity: viewportWidth < 1024 ? opacityPhone.get() : opacity.get() >= 0.9 ? 1 : opacity.get() }}
        className="w-[70%] sm:w-[30rem] lg:w-64 text-center lg:text-left absolute top-[85vh] lg:top-[50vh] lg:right-[15%] 2xl:right-[20%] flex flex-col text-lg font-medium"
      >
        <h1>Physical fit-ness.</h1>
        <p className="text-grey">
          The new internal architecture and a refined contour provide a <span className="text-green">natural and secure fit</span> for more people than ever.
        </p>
      </div>
      <div
        style={{ opacity: viewportWidth < 1024 ? opacitySecondPhone.get() : opacitySecond.get() >= 0.9 ? 1 : opacitySecond.get() }}
        className="w-[70%] sm:w-[30rem] lg:w-72 text-center lg:text-left absolute top-[150vh] lg:top-[130vh] lg:right-[10%] 2xl:right-[16%] flex flex-col text-lg font-medium"
      >
        <h1>Updated stem with force sensor.</h1>
        <p className="text-grey">
          The shortened stem houses the <span className="text-green">H2 chip</span>, while the new force sensor lets you control playback and calls with just a pinch.
        </p>
      </div>
      <div
        style={{ opacity: viewportWidth < 1024 ? opacityThirdPhone.get() : opacityThird.get() >= 0.9 ? 1 : opacityThird.get() }}
        className="w-[70%] sm:w-[30rem] lg:w-[17rem] text-center lg:text-left absolute top-[270vh] lg:top-[240vh] lg:right-[8%] 2xl:right-[14%] flex flex-col text-lg font-medium"
      >
        <h1>Dust, sweat and water resistant.</h1>
        <p className="text-grey">
          OPods Z1 and the charging case are rated <span className="text-green">IP54 dust, sweat and water resistant</span>, so they&apos;ll withstand anything from rain to heavy workouts.
        </p>
      </div>
    </div>
  ) : (
    <div className="pb-32 md:pb-72 relative flex flex-col items-center overflow-x-hidden">
      <div className="w-auto pt-24 mx-6 md:mx-20 xl:mx-48 flex flex-col items-center gap-8">
        <h1 className="text-4xl md:text-6xl font-semibold">OPods Z1</h1>
        <p className="md:w-[40rem] text-center text-lg md:text-xl text-dark-grey font-medium">Experience immersive sound with OPods Z1: sleek, wireless, and built for unbeatable audio clarity.</p>
      </div>
      <div className="w-[125%] xs:w-[95%] md:w-[45rem] mt-16 md:flex justify-end overflow-x-hidden">
        <Image className="w-full ml-14 2xs:ml-16 md:ml-0" src="/images/Feature1.jpg" width={500} height={500} alt="Features of OPods" />
        <div className="w-[65%] xs:w-[70%] md:w-48 mx-auto mt-6 md:mt-0 text-sm md:text-base text-center md:text-left md:absolute md:translate-y-40">
          <h1>Physical fit-ness.</h1>
          <p className="text-grey">
            The new internal architecture and a refined contour provide a <span className="text-green">natural and secure fit</span> for more people than ever.
          </p>
        </div>
      </div>
      <div className="w-[100%] xs:w-[87%] md:w-[35rem] mt-40 md:mt-52 lg:mt-60 md:mr-20 md:flex justify-end overflow-x-hidden">
        <Image className="w-full" src="/images/Feature2.jpg" width={500} height={500} alt="Second Feature of OPods" />
        <div className="w-[65%] xs:w-[70%] md:w-64 mx-auto mt-14 md:mt-0 text-sm md:text-base text-center md:text-left md:absolute md:translate-x-28 md:translate-y-36">
          <h1>Updated stem with force sensor.</h1>
          <p className="text-grey">
            The shortened stem houses the <span className="text-green">H2 chip</span>, while the new force sensor lets you control playback and calls with just a pinch.
          </p>
        </div>
      </div>
      <div className="w-[100%] xs:w-[87%] md:w-[35rem] mt-40 md:mt-60 md:flex justify-center overflow-x-hidden">
        <Image className="w-full" src="/images/Feature3.jpg" width={500} height={500} alt="Third Feature of OPods" />
        <div className="w-[65%] xs:w-[70%] md:w-[30rem] mx-auto mt-14 md:mt-0 text-sm md:text-base text-center md:absolute md:translate-y-[22rem]">
          <h1>Dust, sweat and water resistant.</h1>
          <p className="text-grey">
            OPods Z1 and the charging case are rated <span className="text-green">IP54 dust, sweat and water resistant</span>, so they&apos;ll withstand anything from rain to heavy workouts.
          </p>
        </div>
      </div>
    </div>
  );
}
