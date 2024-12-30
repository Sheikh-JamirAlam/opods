"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Carousel from "./Carousel";
import { Arrow } from "./Icons";

export default function CarouselContainer() {
  const [animation, setAnimation] = useState<number>(0);

  return (
    <div className="px-20 xl:px-48 flex items-center justify-end overflow-hidden">
      <button
        onClick={() => {
          setAnimation(0);
        }}
        className={`w-14 h-14 mt-auto flex justify-center items-center text-xl ${
          animation === 0 ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        } bg-opacity-50 bg-light-black hover:bg-opacity-75 hover:bg-light-grey transition-all rounded-full absolute left-52 z-50`}
      >
        <Arrow className="-rotate-90" />
      </button>
      <button
        onClick={() => {
          setAnimation(1);
        }}
        className={`w-14 h-14 mt-auto flex justify-center items-center text-xl ${
          animation === 1 ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        } bg-opacity-50 bg-light-black hover:bg-opacity-75 hover:bg-light-grey transition-all rounded-full absolute right-52 z-50`}
      >
        <Arrow className="rotate-90" />
      </button>
      <motion.div animate={{ x: animation === 0 ? 0 : -560 }} transition={{ duration: 0.7, ease: [0.39, 0.24, 0.3, 1] }} className="w-full flex gap-10">
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
