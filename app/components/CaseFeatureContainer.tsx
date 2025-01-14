"use client";

import { useState } from "react";
import Carousel from "./Carousel";
import FeatureInfo from "./FeatureInfo";

export default function CaseFeatureContainer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [featureTexts, setFeatureTexts] = useState<{ title: string; desc: string; imgUrl: string }>({ title: "", desc: "", imgUrl: "" });

  const onClickedMore = (title: string, desc: string, imgUrl: string) => {
    setFeatureTexts({ title, desc, imgUrl });
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="lg:w-[53rem] flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-5 lg:gap-0">
      <Carousel
        onClickedMore={onClickedMore}
        imgUrl="url('/images/Cord.jpg')"
        imgText="Easy as USB-C"
        imgDesc="Both OPods Z1 models now feature USB-C charging capabilities, offering faster and more efficient charging than ever before. With a universally compatible connector, you can seamlessly charge your OPods Z1 using the same cable as your other devices, reducing clutter and simplifying your tech life."
        width="26rem"
        height="26rem"
        section="charge"
      />
      <Carousel
        onClickedMore={onClickedMore}
        imgUrl="url('/images/Charger.jpg')"
        imgText="New wireless option"
        imgDesc="The OPods Z1 with Active Noise Cancellation now supports wireless charging, giving you greater flexibility. Recharge the case effortlessly using an Apple Watch charger or any Qi-certified charger, ensuring a seamless and convenient experience for your on-the-go lifestyle."
        width="26rem"
        height="26rem"
        section="charge"
      />
      {isOpen && <div className="w-screen h-screen fixed top-0 right-0 bg-black/30 z-50"></div>}
      <FeatureInfo isOpen={isOpen} setIsOpen={setIsOpen} featureTexts={featureTexts} />
    </div>
  );
}
