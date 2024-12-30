"use client";

import { useState } from "react";
import { motion } from "motion/react";
import ShopCard from "./ShopCard";
import { Arrow, CreditCard, Smiley, Truck } from "./Icons";

export default function ShopCardContainer() {
  const [animation, setAnimation] = useState<number>(0);

  return (
    <div className="flex items-center justify-end">
      <button
        onClick={() => {
          setAnimation(1);
        }}
        className={`w-14 h-14 mt-auto flex justify-center items-center text-xl ${
          animation === 0 ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        } bg-opacity-50 bg-light-black hover:bg-opacity-75 hover:bg-light-grey transition-all rounded-full absolute left-32 xl:left-52 z-50`}
      >
        <Arrow className="-rotate-90" />
      </button>
      <button
        onClick={() => {
          setAnimation(0);
        }}
        className={`w-14 h-14 mt-auto flex justify-center items-center text-xl ${
          animation === 1 ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        } bg-opacity-50 bg-light-black hover:bg-opacity-75 hover:bg-light-grey transition-all rounded-full absolute right-32 xl:right-52 z-50`}
      >
        <Arrow className="rotate-90" />
      </button>
      <motion.div style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }} className="py-10 pb-12 px-20 xl:px-48 flex gap-10 overflow-x-scroll scroll-p-20 xl:scroll-p-48">
        <ShopCard text="Personalise your AirPods for free." desc="Engrave your new OPods with a mix of emoji, names, initials and numbers." Icon={Smiley} />
        <ShopCard text="Monthly payment options available." desc="Choose the easy way to finance with convenient payment options." Icon={CreditCard} />
        <ShopCard text="Get flexible delivery and easy pickup." desc="Get free delivery or pickup at your nearest OPods Store." Icon={Truck} />
        <ShopCard text="Shop with a Specialist for free." desc="Whether you shop in a store or online, our Specialists can help you pick something perfect." Icon={Truck} />
      </motion.div>
    </div>
  );
}
