"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Carousel from "./Carousel";
import FeatureInfo from "./FeatureInfo";
import { Arrow } from "./Icons";

export default function CarouselContainer() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [canPrevScroll, setCanPrevScroll] = useState<boolean>(false);
  const [canNextScroll, setCanNextScroll] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [featureTexts, setFeatureTexts] = useState<{ title: string; desc: string; imgUrl: string }>({ title: "", desc: "", imgUrl: "" });

  const onClickedMore = (title: string, desc: string, imgUrl: string) => {
    setFeatureTexts({ title, desc, imgUrl });
    setIsOpen((prev) => !prev);
  };

  const onSelect = (emblaApi: EmblaCarouselType) => {
    setCanPrevScroll(emblaApi.canScrollPrev);
    setCanNextScroll(emblaApi.canScrollNext);
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi]);

  return (
    <div className="max-w-full w-full m-auto flex items-center">
      <button
        onClick={() => {
          emblaApi?.scrollPrev();
        }}
        aria-label="Pervious button, click to see the other features"
        className={`w-10 h-10 md:w-14 md:h-14 mt-auto flex justify-center items-center text-xl ${
          canPrevScroll ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } bg-opacity-50 bg-light-black hover:bg-opacity-75 hover:bg-light-grey transition-all rounded-full absolute left-4 xs:left-10 md:left-24 xl:left-52 z-40`}
      >
        <Arrow className="-rotate-90" />
      </button>
      <button
        onClick={() => {
          emblaApi?.scrollNext();
        }}
        aria-label="Next button, click to see the other features"
        className={`w-10 h-10 md:w-14 md:h-14 mt-auto flex justify-center items-center text-xl ${
          canNextScroll ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } bg-opacity-50 bg-light-black hover:bg-opacity-75 hover:bg-light-grey transition-all rounded-full absolute right-4 xs:right-10 md:right-24 xl:right-52 z-40`}
      >
        <Arrow className="rotate-90" />
      </button>
      <div ref={emblaRef} className="px-6 md:px-20 xl:px-48 overflow-hidden">
        <div className="ml-[-1rem] md:ml-[-2.5rem] flex touch-pan-y touch-pinch-zoom">
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
        </div>
      </div>
      {isOpen && <div onClick={() => setIsOpen(false)} className="w-screen h-screen fixed top-0 right-0 bg-black/30"></div>}
      <FeatureInfo isOpen={isOpen} setIsOpen={setIsOpen} featureTexts={featureTexts} />
    </div>
  );
}
