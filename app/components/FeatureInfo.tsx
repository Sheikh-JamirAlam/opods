"use client";

import { useAnimate, Segment } from "motion/react";
import { useEffect } from "react";
import { Arrow } from "./Icons";

function useInfoAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations: Segment[] = isOpen
      ? [[scope.current, { transform: "translateX(10%)", opacity: 1 }, { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }]]
      : [[scope.current, { transform: "translateX(100%)", opacity: 0 }, { at: "-0.1", duration: 0.4 }]];

    animate([...menuAnimations]);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  return scope;
}

export default function FeatureInfo({
  isOpen,
  setIsOpen,
  featureTexts,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  featureTexts: { title: string; desc: string; imgUrl: string };
}) {
  const scope = useInfoAnimation(isOpen);

  return (
    <div ref={scope} className="w-full h-screen p-4 bg-pure-white flex justify-between fixed top-0 right-0 z-50 translate-x-[100%]">
      <ul className="w-[50%] p-10 flex flex-col gap-10 text-foreground">
        <li
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Next button, click to see the other features"
          className={`w-10 h-10 md:w-10 md:h-10 flex justify-center items-center text-xl text-white cursor-pointer bg-opacity-50 bg-light-black hover:bg-opacity-75 hover:bg-light-grey transition-all rounded-full`}
        >
          <Arrow className="-rotate-90" />
        </li>
        <li className="text-4xl">{featureTexts.title}</li>
        <li className="text-4xl">{featureTexts.desc}</li>
      </ul>
      <div style={{ backgroundImage: featureTexts.imgUrl, backgroundSize: "cover", backgroundPosition: "center" }} className="w-[40%] h-full mr-[10%] rounded-[30px] shadow-outer-2xl" />
    </div>
  );
}
