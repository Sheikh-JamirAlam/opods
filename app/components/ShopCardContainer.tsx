"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "motion/react";
import ShopCard from "./ShopCard";
import { Arrow, Chat, CreditCard, Smiley, Truck } from "./Icons";
import ShopCardInfo from "./ShopCardInfo";

export default function ShopCardContainer() {
  const [animation, setAnimation] = useState<number>(0);
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [stepSize, setStepSize] = useState<number>(0);
  const [maxSteps, setMaxSteps] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [shopCardTexts, setShopCardTexts] = useState<{ title: string; desc: string }>({ title: "", desc: "" });

  useEffect(() => {
    const calculateStepSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        const totalSteps = Math.ceil((containerWidth - viewportWidth) / (viewportWidth >= 768 ? 448 : 288)) - 1;
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

  const onClickedMore = (title: string, desc: string) => {
    setShopCardTexts({ title, desc });
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-start justify-center overflow-hidden">
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${animation * stepSize}px` }}
        transition={{ duration: 0.5, ease: [0.39, 0.24, 0.3, 1] }}
        onDragEnd={onDragEnd}
        className="py-10 pb-12 px-6 md:px-20 xl:px-48 flex gap-5 md:gap-10 cursor-grab active:cursor-grabbing"
      >
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
      </motion.div>
      <div className="md:pb-12 px-6 md:px-20 xl:px-48 ml-auto flex gap-5 items-center">
        <button
          onClick={() => {
            setAnimation((pv) => pv - 1);
          }}
          aria-label="Previous button, click to see the other advantages"
          className={`w-10 h-10 mt-auto flex justify-center items-center text-xl text-grey ${
            animation === 0 ? "opacity-50 pointer-events-none" : "opacity-100 pointer-events-auto"
          } bg-opacity-35 bg-light-grey hover:bg-opacity-50 hover:bg-lighter-grey transition-all rounded-full`}
        >
          <Arrow className="-rotate-90" />
        </button>
        <button
          onClick={() => {
            setAnimation((pv) => pv + 1);
          }}
          aria-label="Next button, click to see the other advantages"
          className={`w-10 h-10 mt-auto flex justify-center items-center text-xl text-grey ${
            animation === maxSteps ? "opacity-50 pointer-events-none" : "opacity-100 pointer-events-auto"
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
