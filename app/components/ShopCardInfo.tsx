"use client";

import { useAnimate, Segment } from "motion/react";
import { useEffect } from "react";
import { Plus } from "./Icons";

function useInfoAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations: Segment[] = isOpen
      ? [[scope.current, { transform: window.innerWidth >= 425 ? "translate(-50%,-50%) scale(1)" : "scale(1)", opacity: 1 }, { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.3 }]]
      : [[scope.current, { transform: window.innerWidth >= 425 ? "translate(-50%,-50%) scale(0)" : "scale(0)", opacity: 0 }, { at: "-0.1", duration: 0.3 }]];

    animate([...menuAnimations]);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  return scope;
}

export default function ShopCardInfo({
  isOpen,
  setIsOpen,
  shopCardTexts,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  shopCardTexts: { title: string; desc: string };
}) {
  const scope = useInfoAnimation(isOpen);

  return (
    <div
      ref={scope}
      className="w-full xs:w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:[40%] h-fit p-4 bg-pure-white rounded-t-[30px] xs:rounded-[30px] flex flex-col justify-between fixed bottom-0 xs:top-[50%] xs:left-[50%] xs:-translate-x-[50%] xs:-translate-y-[50%] z-50 scale-0"
    >
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Next button, click to see the other features"
        className={`w-10 h-10 md:w-8 md:h-8 ml-auto flex justify-center items-center text-xl text-white cursor-pointer bg-opacity-50 bg-light-black hover:bg-opacity-75 hover:bg-light-grey transition-all rounded-full`}
      >
        <Plus className="text-2xl rotate-45" />
      </div>
      <div className="p-10">
        <h1 className="text-lg 2xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl pb-5 font-semibold">{shopCardTexts.title}</h1>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl">{shopCardTexts.desc}</p>
      </div>
    </div>
  );
}
