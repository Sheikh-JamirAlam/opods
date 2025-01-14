"use client";

import { SVGProps } from "react";
import { Plus } from "./Icons";

interface PropType {
  text: string;
  desc: string;
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  info: string;
  onClickedMore: (title: string, desc: string) => void;
}

export default function ShopCard(props: PropType) {
  return (
    <div className="pl-5 md:pl-10 flex-auto" style={{ transform: "translate3d(0,0,0)" }}>
      <div className="rounded-[40px] shadow-outer-lg cursor-default">
        <div className="w-[18rem] h-[12rem] md:w-[28rem] md:h-[20rem] p-6 md:p-10 flex flex-col md:gap-2 justify-between">
          <props.Icon className="text-3xl md:text-6xl" />
          <h1 className="text-lg md:text-3xl font-medium">{props.text}</h1>
          <p className="text-xs md:text-base text-dark-grey">{props.desc}</p>
          <div
            onClick={() => props.onClickedMore(props.text, props.info)}
            className="w-6 h-6 md:w-10 md:h-10 ml-auto flex items-center justify-center rounded-full text-base md:text-3xl text-white bg-black cursor-pointer group"
          >
            <Plus className="transition-all duration-300 group-hover:rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
}
