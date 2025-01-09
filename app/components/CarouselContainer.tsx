"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "motion/react";
import Carousel from "./Carousel";
import FeatureInfo from "./FeatureInfo";
import { Arrow } from "./Icons";

export default function CarouselContainer() {
  const [animation, setAnimation] = useState<number>(0);
  const dragX = useMotionValue(0);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const [stepSize, setStepSize] = useState<number>(0);
  const [maxSteps, setMaxSteps] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [featureTexts, setFeatureTexts] = useState<{ title: string; desc: string; imgUrl: string }>({ title: "", desc: "", imgUrl: "" });

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

  const onClickedMore = (title: string, desc: string, imgUrl: string) => {
    setFeatureTexts({ title, desc, imgUrl });
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-start justify-center overflow-hidden">
      <button
        onClick={() => {
          setAnimation((pv) => pv - 1);
        }}
        aria-label="Pervious button, click to see the other features"
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
        aria-label="Next button, click to see the other features"
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
        <Carousel
          onClickedMore={onClickedMore}
          imgUrl="url('https://www.apple.com/v/airpods-4/b/images/overview/stories/audio_h2__7lchtwyfpnmi_large.jpg')"
          imgText="A roaring leap in capabilities"
          imgDesc="The powerful H2 chip comes to OPods Z1, making audio and calls sound better than ever. With a range of intelligent features, OPods Z1 adapt to virtually any listening environment — even when you want complete silence."
          width="24rem"
          height="37rem"
        />
        <Carousel
          onClickedMore={onClickedMore}
          imgUrl="url('https://www.apple.com/v/airpods-4/b/images/overview/stories/audio_voice__fsh5v6wchyqa_large.jpg')"
          imgText="Super-clear call quality"
          imgDesc="Using advanced computational audio, Voice Isolation minimises background noise while clarifying the sound of your voice. So you'll be easier to understand when you're speaking in loud or windy conditions."
          width="24rem"
          height="37rem"
        />
        <Carousel
          onClickedMore={onClickedMore}
          imgUrl="url('https://www.apple.com/v/airpods-4/b/images/overview/stories/audio_airpod__fxaq33c1a7iy_large.jpg')"
          imgText="Enjoy every beat and vibe"
          imgDesc="The entirely new acoustic architecture uses an Apple-designed low-distortion driver powered by a custom high dynamic range amplifier. Put simply, you hear music in exceptional detail, with deeper bass and crystal-clear highs."
          width="24rem"
          height="37rem"
        />
        <Carousel
          onClickedMore={onClickedMore}
          imgUrl="url('https://www.apple.com/v/airpods-4/b/images/overview/stories/audio_music__codaubhynsr6_large.jpg')"
          imgText="Calibrates music to your ears"
          imgDesc="Adaptive EQ automatically tunes music to your ears. Inward-facing microphones detect what you're hearing, then adjust low- and mid-range frequencies to deliver rich detail in every song."
          width="24rem"
          height="37rem"
        />
        <Carousel
          onClickedMore={onClickedMore}
          imgUrl="url('https://www.apple.com/v/airpods-4/b/images/overview/stories/audio_facetime__cd84uowabys2_large.jpg')"
          imgText="Real talk in real time"
          imgDesc="Connect on FaceTime in crisp, HD quality with an AAC-ELD speech codec. And Group FaceTime calls sound more true to life than ever with support for Personalised Spatial Audio."
          width="24rem"
          height="37rem"
        />
      </motion.div>
      {isOpen && <div className="w-screen h-screen fixed top-0 right-0 bg-black/30"></div>}
      <FeatureInfo isOpen={isOpen} setIsOpen={setIsOpen} featureTexts={featureTexts} />
    </div>
  );
}
