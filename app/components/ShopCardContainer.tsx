"use client";

import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import ShopCard from "./ShopCard";
import { Arrow, Chat, CreditCard, Smiley, Truck } from "./Icons";
import ShopCardInfo from "./ShopCardInfo";

export default function ShopCardContainer() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [canPrevScroll, setCanPrevScroll] = useState<boolean>(false);
  const [canNextScroll, setCanNextScroll] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [shopCardTexts, setShopCardTexts] = useState<{ title: string; desc: string }>({ title: "", desc: "" });

  const onClickedMore = (title: string, desc: string) => {
    setShopCardTexts({ title, desc });
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
    <div className="max-w-full w-full m-auto">
      <div ref={emblaRef} className="py-10 pb-12 px-6 md:px-20 xl:px-48 overflow-hidden">
        <div className="ml-[-1.25rem] md:ml-[-2.5rem] flex touch-pan-y touch-pinch-zoom">
          <ShopCard
            onClickedMore={onClickedMore}
            text="Personalise your AirPods for free."
            desc="Engrave your new OPods with a mix of emoji, names, initials and numbers."
            info="Choose from new engraving options. It's the perfect way to personalise your OPods. Add a special message, name or birthday. Even combine text and numbers with your favourite emoji."
            Icon={Smiley}
          />
          <ShopCard
            onClickedMore={onClickedMore}
            text="Monthly payment options available."
            desc="Choose the easy way to finance with convenient payment options."
            info="No matter how you like to buy, we have an option that works for you. You can pay with credit or debit card, RuPay, UPI, Net Banking, and credit or debit card EMI with most leading banks.# Or cover your interest on eligible products when you choose to pay with No Cost EMI for 3 or 6 months from most leading banks.‡ And, if you're buying a new iPhone, you can exchange your current smartphone for instant credit."
            Icon={CreditCard}
          />
          <ShopCard
            onClickedMore={onClickedMore}
            text="Get flexible delivery and easy pickup."
            desc="Get free delivery or pickup at your nearest OPods Store."
            info="Get your new OPod products quickly and easily with a handful of delivery and pickup options to choose from."
            Icon={Truck}
          />
          <ShopCard
            onClickedMore={onClickedMore}
            text="Shop with a Specialist for free."
            desc="Whether you shop in a store or online, our Specialists can help pick your perfect fit."
            info="Shop one-to-one with a Specialist online. Or reserve a shopping session at an OPods Store."
            Icon={Chat}
          />
        </div>
      </div>
      <div className="md:pb-12 px-6 md:px-20 xl:px-48 ml-auto flex gap-5 items-center">
        <button
          onClick={() => {
            emblaApi?.scrollPrev();
          }}
          aria-label="Previous button, click to see the other advantages"
          className={`w-10 h-10 mt-auto flex justify-center items-center text-xl text-grey ${
            canPrevScroll ? "opacity-100 pointer-events-auto" : "opacity-50 pointer-events-none"
          } bg-opacity-35 bg-light-grey hover:bg-opacity-50 hover:bg-lighter-grey transition-all rounded-full`}
        >
          <Arrow className="-rotate-90" />
        </button>
        <button
          onClick={() => {
            emblaApi?.scrollNext();
          }}
          aria-label="Next button, click to see the other advantages"
          className={`w-10 h-10 mt-auto flex justify-center items-center text-xl text-grey ${
            canNextScroll ? "opacity-100 pointer-events-auto" : "opacity-50 pointer-events-none"
          } bg-opacity-35 bg-light-grey hover:bg-opacity-50 hover:bg-lighter-grey transition-all rounded-full`}
        >
          <Arrow className="rotate-90" />
        </button>
      </div>
      {isOpen && <div onClick={() => setIsOpen(false)} className="w-screen h-screen fixed top-0 right-0 bg-black/30 z-50"></div>}
      <ShopCardInfo isOpen={isOpen} setIsOpen={setIsOpen} shopCardTexts={shopCardTexts} />
    </div>
  );
}
