"use client";

import Image from "next/image";
import { useState } from "react";

export default function ColorContainer() {
  const [color, setColor] = useState("Black");

  return (
    <div className="py-12 flex flex-col justify-center items-center gap-14 overflow-hidden">
      <div className="w-full px-20 xl:px-48 pt-12">
        <h1 className="w-[40rem] text-5xl font-semibold">Choose from a wide range of stunning colors</h1>
      </div>
      <div className="flex items-center justify-center">
        <h1
          className={`gredient-text ${
            color === "Black"
              ? "gredient-text-black"
              : color === "Blue"
              ? "gredient-text-blue"
              : color === "White"
              ? "gredient-text-white"
              : color === "Purple"
              ? "gredient-text-purple"
              : "gredient-text-red -translate-x-10"
          } w-full text-center font-calligraphy text-[250px] lg:text-[275px] xl:text-[350px] 2xl:text-[490px] absolute z-0`}
        >
          {color}
        </h1>
        <div className={`w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] 2xl:w-[550px] 2xl:h-[550px] image-overlay ${color.toLowerCase()} transition-all`}></div>
        <Image className="w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[550px] block z-10" src="/images/OPods.png" width={550} height={550} alt="Image of our OPods" />
      </div>
      <p
        className={`mx-auto text-2xl font-medium transition-all ${
          color === "Black" ? "text-foreground" : color === "Blue" ? "text-teal" : color === "White" ? "text-grey" : color === "Purple" ? "text-purple" : "text-red"
        }`}
      >
        {color === "Black"
          ? "Midnight Black - Bold and Timeless"
          : color === "Blue"
          ? "Ocean Blue: Cool and Vibrant"
          : color === "White"
          ? "Pure White: Sleek and Elegant"
          : color === "Purple"
          ? "Royal Purple: Majestic and Unique"
          : "Fiery Red: Vibrant and Striking"}
      </p>
      <div className="w-[11rem] h-[22rem] flex justify-items-start items-center absolute translate-y-10 lg:translate-y-0 -right-6 lg:right-0 scale-75 lg:scale-100 overflow-hidden">
        <div className="w-[22rem] h-[22rem] flex justify-center items-center absolute left-3">
          <div className="w-[20rem] h-[20rem] bg-off-white rounded-full absolute z-10"></div>
          <div className="w-[18rem] h-[18rem] bg-background rounded-full flex justify-start items-center absolute z-10 shadow-inner-xl">
            <div
              onClick={() => setColor("White")}
              className={`w-10 h-10 bg-white rounded-full ${
                color === "White" && "outline outline-1 outline-black outline-offset-[6px]"
              } absolute left-[5rem] top-[-1.25rem] z-30 shadow-outer-xl cursor-pointer transition-all`}
            ></div>
            <div
              onClick={() => setColor("Blue")}
              className={`w-10 h-10 bg-teal rounded-full ${
                color === "Blue" && "outline outline-1 outline-teal outline-offset-[6px]"
              } absolute left-[-0.05rem] top-[2.5rem] z-30 shadow-outer-xl shadow-teal cursor-pointer transition-all`}
            ></div>
            <div
              onClick={() => setColor("Black")}
              className={`w-10 h-10 bg-black rounded-full ${
                color === "Black" && "outline outline-1 outline-black outline-offset-[6px]"
              } absolute left-[-1.65rem] z-30 shadow-outer-xl shadow-black cursor-pointer transition-all`}
            ></div>
            <div
              onClick={() => setColor("Purple")}
              className={`w-10 h-10 bg-purple rounded-full ${
                color === "Purple" && "outline outline-1 outline-purple outline-offset-[6px]"
              } absolute left-[-0.05rem] bottom-[2.5rem] z-30 shadow-outer-xl shadow-purple cursor-pointer transition-all`}
            ></div>
            <div
              onClick={() => setColor("Red")}
              className={`w-10 h-10 bg-red rounded-full ${
                color === "Red" && "outline outline-1 outline-red outline-offset-[6px]"
              } absolute left-[5rem] bottom-[-1.25rem] z-30 shadow-outer-xl shadow-red cursor-pointer transition-all`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
