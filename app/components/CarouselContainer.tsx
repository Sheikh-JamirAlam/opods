"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "motion/react";
import Carousel from "./Carousel";
import { Arrow } from "./Icons";

export default function CarouselContainer() {
  const [animation, setAnimation] = useState<number>(0);
  const dragX = useMotionValue(0);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const [stepSize, setStepSize] = useState<number>(0);
  const [maxSteps, setMaxSteps] = useState<number>(0);

  useEffect(() => {
    const calculateStepSize = () => {
      if (carouselContainerRef.current) {
        const containerWidth = carouselContainerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        const totalSteps = Math.ceil((containerWidth - viewportWidth) / (viewportWidth >= 768 ? 384 : 256)) - 1;
        if (totalSteps > 0) {
          setStepSize((containerWidth - viewportWidth + scrollbarWidth) / totalSteps);
          setMaxSteps(totalSteps);
        } else {
          setStepSize(containerWidth - viewportWidth + scrollbarWidth);
          setMaxSteps(1);
        }
      }
    };

    calculateStepSize();
    window.addEventListener("resize", calculateStepSize);
    return () => {
      window.removeEventListener("resize", calculateStepSize);
    };
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -25 && animation < maxSteps) {
      setAnimation((pv) => pv + 1);
    } else if (x >= 25 && animation > 0) {
      setAnimation((pv) => pv - 1);
    }
  };

  return (
    <div className="flex flex-col items-start justify-center overflow-hidden">
      <button
        onClick={() => {
          setAnimation((pv) => pv - 1);
        }}
        className={`w-10 h-10 md:w-14 md:h-14 mt-auto flex justify-center items-center text-xl ${
          animation === 0 ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        } bg-opacity-50 bg-light-black hover:bg-opacity-75 hover:bg-light-grey transition-all rounded-full absolute left-4 xs:left-10 md:left-24 xl:left-52 z-40`}
      >
        <Arrow className="-rotate-90" />
      </button>
      <button
        onClick={() => {
          setAnimation((pv) => pv + 1);
        }}
        className={`w-10 h-10 md:w-14 md:h-14 mt-auto flex justify-center items-center text-xl ${
          animation === maxSteps ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        } bg-opacity-50 bg-light-black hover:bg-opacity-75 hover:bg-light-grey transition-all rounded-full absolute right-4 xs:right-10 md:right-24 xl:right-52 z-40`}
      >
        <Arrow className="rotate-90" />
      </button>
      <motion.div
        ref={carouselContainerRef}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${animation * stepSize}px` }}
        transition={{ duration: 0.5, ease: [0.39, 0.24, 0.3, 1] }}
        onDragEnd={onDragEnd}
        className="px-6 md:px-20 xl:px-48 flex gap-4 md:gap-10"
      >
        <Carousel imgUrl="url('https://www.apple.com/v/airpods-4/b/images/overview/stories/audio_h2__7lchtwyfpnmi_large.jpg')" imgText="A roaring leap in capabilities" width="24rem" height="37rem" />
        <Carousel imgUrl="url('https://www.apple.com/v/airpods-4/b/images/overview/stories/audio_voice__fsh5v6wchyqa_large.jpg')" imgText="Super-clear call quality" width="24rem" height="37rem" />
        <Carousel imgUrl="url('https://www.apple.com/v/airpods-4/b/images/overview/stories/audio_airpod__fxaq33c1a7iy_large.jpg')" imgText="Enjoy every beat and vibe" width="24rem" height="37rem" />
        <Carousel
          imgUrl="url('https://www.apple.com/v/airpods-4/b/images/overview/stories/audio_music__codaubhynsr6_large.jpg')"
          imgText="Calibrates music to your ears"
          width="24rem"
          height="37rem"
        />
        <Carousel imgUrl="url('https://www.apple.com/v/airpods-4/b/images/overview/stories/audio_facetime__cd84uowabys2_large.jpg')" imgText="Real talk in real time" width="24rem" height="37rem" />
      </motion.div>
    </div>
  );
}
