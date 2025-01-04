"use client";

import { motion } from "motion/react";

interface PropType {
  isFloatingNavVisible: boolean;
}

export default function FloatingNavbar(props: PropType) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, visibility: "hidden" }}
      animate={props.isFloatingNavVisible ? { opacity: 1, y: 0, visibility: "visible" } : {}}
      transition={{ duration: 0.5, ease: [0.39, 0.24, 0.3, 1] }}
      className="w-full fixed top-6 z-50 hidden lg:block"
    >
      <div className="w-[45rem] px-3 py-2 mx-auto flex justify-between items-center rounded-full bg-white border border-lighter-grey shadow-outer-lg">
        <div className="pl-6 text-3xl font-bold cursor-pointer">OPods</div>
        <div className="w-80 flex justify-between items-center font-semibold">
          <p
            className="px-4 py-2 rounded-full cursor-pointer hover:bg-grey/[0.2] transition-all duration-500"
            onClick={(e) => {
              document.getElementById("opods")?.scrollIntoView({ behavior: "smooth" });
              e.preventDefault();
            }}
          >
            Overview
          </p>
          <p
            className="px-4 py-2 rounded-full cursor-pointer hover:bg-grey/[0.2] transition-all duration-500"
            onClick={(e) => {
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
              e.preventDefault();
            }}
          >
            Features
          </p>
          <p
            className="px-4 py-2 rounded-full cursor-pointer hover:bg-grey/[0.2] transition-all duration-500"
            onClick={(e) => {
              document.getElementById("specs")?.scrollIntoView({ behavior: "smooth" });
              e.preventDefault();
            }}
          >
            Specs
          </p>
        </div>
        <div className="px-6 py-2 rounded-full bg-light-black text-white cursor-pointer hover:bg-dark-grey transition-all duration-500">Buy now</div>
      </div>
    </motion.div>
  );
}
