"use client";

import { useEffect } from "react";
import { motion, useInView, useAnimate } from "motion/react";

interface PropType {
  imgUrl: string;
  imgText: string;
  desc: string;
  txtSide: string;
}

export default function AnimateFeature(props: PropType) {
  const [scope, animate] = useAnimate();

  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      if (window.innerWidth >= 1536) {
        const enterAnimation = async () => {
          await animate(scope.current, { opacity: 0.7, transform: "translate(7.5rem, 0)" }, { delay: 0.5, duration: 0.3 });
          animate(scope.current, { transform: "translate(4.5rem, -8rem)" }, { duration: 0.7, ease: [0.39, 0.24, 0.3, 1] });
          await animate(scope.current, { opacity: 0 }, { delay: 0.5, duration: 0.2 });
          animate(scope.current, { opacity: 0.7 }, { delay: 0.2, duration: 0.2 });
          await animate(scope.current, { transform: "translate(7.5rem, 0)" }, { delay: 0.2, duration: 0.7, ease: [0.39, 0.24, 0.3, 1] });
        };
        enterAnimation();
      } else if (window.innerWidth >= 640) {
        const enterAnimation = async () => {
          await animate(scope.current, { opacity: 0.7, transform: "translate(5.5rem, 0)" }, { delay: 0.5, duration: 0.3 });
          animate(scope.current, { transform: "translate(3rem, -6rem)" }, { duration: 0.7, ease: [0.39, 0.24, 0.3, 1] });
          await animate(scope.current, { opacity: 0 }, { delay: 0.5, duration: 0.2 });
          animate(scope.current, { opacity: 0.7 }, { delay: 0.2, duration: 0.2 });
          await animate(scope.current, { transform: "translate(5.5rem, 0)" }, { delay: 0.2, duration: 0.7, ease: [0.39, 0.24, 0.3, 1] });
        };
        enterAnimation();
      } else {
        const enterAnimation = async () => {
          await animate(scope.current, { opacity: 0.7, transform: "translate(5rem, 0.5rem)" }, { delay: 0.5, duration: 0.3 });
          animate(scope.current, { transform: "translate(2.9rem, -4.5rem)" }, { duration: 0.7, ease: [0.39, 0.24, 0.3, 1] });
          await animate(scope.current, { opacity: 0 }, { delay: 0.5, duration: 0.2 });
          animate(scope.current, { opacity: 0.7 }, { delay: 0.2, duration: 0.2 });
          await animate(scope.current, { transform: "translate(5rem, 0.5rem)" }, { delay: 0.2, duration: 0.7, ease: [0.39, 0.24, 0.3, 1] });
        };
        enterAnimation();
      }
    } else {
      const exitAnimation = async () => {
        await animate(scope.current, { opacity: 0 });
      };
      exitAnimation();
    }
  }, [isInView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      style={{ backgroundImage: props.imgUrl, backgroundSize: "cover" }}
      className={`w-[22rem] h-[14rem] sm:w-[34rem] sm:h-[20rem] 2xl:w-[46.25rem] 2xl:h-[26.875rem] ${
        props.txtSide === "left" ? "px-10 sm:px-14" : "px-4 sm:px-8"
      } rounded-3xl sm:rounded-[40px] flex flex-col gap-1 sm:gap-5 justify-center scale-[0.85] 2xs:scale-100`}
    >
      <motion.img
        ref={scope}
        initial={{ opacity: 0 }}
        className="w-[6rem] sm:w-[10rem] 2xl:w-fit absolute translate-y-2 sm:translate-y-0 translate-x-[4.8rem] sm:translate-x-[5.5rem] 2xl:translate-x-[7.5rem] opacity-70"
        src="/images/AnimateControls.png"
        alt="Control animate touch simulation"
      />
      <h1
        style={{ marginLeft: props.txtSide === "left" ? 0 : "auto", color: props.txtSide === "left" ? "#080808" : "#F3F3F5" }}
        className={`${props.txtSide === "left" ? "w-[8rem] sm:w-[19rem] 2xl:w-[24rem]" : "w-[8rem] sm:w-[14rem] 2xl:w-[20rem]"} text-3xl sm:text-6xl 2xl:text-8xl font-medium`}
      >
        {props.imgText}
      </h1>
      <p
        style={{ marginLeft: props.txtSide === "left" ? 0 : "auto", color: props.txtSide === "left" ? "#080808" : "#F3F3F5" }}
        className={`${props.txtSide === "left" ? "w-[13rem] sm:w-[20rem] 2xl:w-[24rem]" : "w-[8rem] sm:w-[14rem] 2xl:w-[20rem]"} text-xs sm:text-base 2xl:text-xl font-medium text-grey`}
      >
        {props.desc}
      </p>
    </div>
  );
}
