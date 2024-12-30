"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "motion/react";
import ShopCard from "./ShopCard";
import { Arrow, CreditCard, Smiley, Truck } from "./Icons";

export default function ShopCardContainer() {
  const [animation, setAnimation] = useState<number>(0);
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [stepSize, setStepSize] = useState<number>(0);
  const [maxSteps, setMaxSteps] = useState<number>(0);

  useEffect(() => {
    const calculateStepSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const totalSteps = Math.ceil((containerWidth - viewportWidth) / 448) - 1;
        if (totalSteps > 0) {
          setStepSize((containerWidth - viewportWidth) / totalSteps);
          setMaxSteps(totalSteps);
        } else {
          setStepSize(448);
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

    if (x <= -50 && animation < maxSteps) {
      setAnimation((pv) => pv + 1);
    } else if (x >= 50 && animation > 0) {
      setAnimation((pv) => pv - 1);
    }
  };

  return (
    <div className="flex items-center justify-start overflow-hidden">
      <button
        onClick={() => {
          setAnimation((pv) => pv - 1);
        }}
        className={`w-14 h-14 mt-auto flex justify-center items-center text-xl ${
          animation === 0 ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        } bg-opacity-50 bg-light-black hover:bg-opacity-75 hover:bg-light-grey transition-all rounded-full absolute left-32 xl:left-52 z-50`}
      >
        <Arrow className="-rotate-90" />
      </button>
      <button
        onClick={() => {
          setAnimation((pv) => pv + 1);
        }}
        className={`w-14 h-14 mt-auto flex justify-center items-center text-xl ${
          animation === maxSteps ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        } bg-opacity-50 bg-light-black hover:bg-opacity-75 hover:bg-light-grey transition-all rounded-full absolute right-32 xl:right-52 z-50`}
      >
        <Arrow className="rotate-90" />
      </button>
      <motion.div
        id="hello"
        ref={containerRef}
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${animation * stepSize}px`,
        }}
        transition={{ duration: 0.5, ease: [0.39, 0.24, 0.3, 1] }}
        onDragEnd={onDragEnd}
        className="py-10 pb-12 px-20 xl:px-48 flex gap-10 cursor-grab active:cursor-grabbing"
      >
        <ShopCard text="Personalise your AirPods for free." desc="Engrave your new OPods with a mix of emoji, names, initials and numbers." Icon={Smiley} />
        <ShopCard text="Monthly payment options available." desc="Choose the easy way to finance with convenient payment options." Icon={CreditCard} />
        <ShopCard text="Get flexible delivery and easy pickup." desc="Get free delivery or pickup at your nearest OPods Store." Icon={Truck} />
        <ShopCard text="Shop with a Specialist for free." desc="Whether you shop in a store or online, our Specialists can help you pick something perfect." Icon={Truck} />
      </motion.div>
    </div>
  );
}