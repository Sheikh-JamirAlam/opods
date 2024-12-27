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
      const enterAnimation = async () => {
        await animate(scope.current, { opacity: 0.7, transform: "translate(7.5rem, 0)" }, { delay: 0.5, duration: 0.3 });
        animate(scope.current, { transform: "translate(4.5rem, -8rem)" }, { duration: 0.7, ease: [0.39, 0.24, 0.3, 1] });
        await animate(scope.current, { opacity: 0 }, { delay: 0.5, duration: 0.2 });
        animate(scope.current, { opacity: 0.7 }, { delay: 0.2, duration: 0.2 });
        await animate(scope.current, { transform: "translate(7.5rem, 0)" }, { delay: 0.2, duration: 0.7, ease: [0.39, 0.24, 0.3, 1] });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(scope.current, { opacity: 0 });
      };
      exitAnimation();
    }
  }, [isInView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      style={{ backgroundImage: props.imgUrl, backgroundSize: "cover", padding: props.txtSide === "left" ? "0 3.5rem" : "0 2rem" }}
      className="w-[46.25rem] h-[26.875rem] rounded-[40px] flex flex-col gap-5 justify-center"
    >
      <motion.img ref={scope} initial={{ opacity: 0 }} className="absolute translate-x-[7.5rem] opacity-70" src="/images/AnimateControls.png" alt="Control animate touch simulation" />
      <h1
        style={{ marginLeft: props.txtSide === "left" ? 0 : "auto", color: props.txtSide === "left" ? "#080808" : "#F3F3F5", width: props.txtSide === "left" ? "24rem" : "20rem" }}
        className="text-8xl font-medium"
      >
        {props.imgText}
      </h1>
      <p
        style={{ marginLeft: props.txtSide === "left" ? 0 : "auto", color: props.txtSide === "left" ? "#080808" : "#F3F3F5", width: props.txtSide === "left" ? "24rem" : "20rem" }}
        className="text-xl font-medium text-grey"
      >
        {props.desc}
      </p>
    </div>
  );
}
