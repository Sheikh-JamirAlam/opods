"use client";

import { Plus } from "./Icons";

interface PropType {
  imgUrl: string;
  imgText: string;
  imgDesc: string;
  width: string;
  height: string;
  onClickedMore: (title: string, desc: string, imgUrl: string) => void;
  section?: string;
}

export default function Carousel(props: PropType) {
  return (
    <div className="pl-4 md:pl-10 flex-auto" style={{ transform: "translate3d(0,0,0)" }}>
      <div
        style={{ backgroundImage: props.imgUrl, backgroundSize: "cover", backgroundPosition: "center" }}
        className={`group rounded-[2.5rem] flex flex-col-reverse hover:shadow-inner-2xl lg:hover:shadow-inner-3xl transition-all bg-cover ${
          props.section ? "w-[18rem] h-[18rem] lg:w-[26rem] lg:h-[26rem]" : "w-[16rem] h-[24rem] md:w-[24rem] md:h-[37rem]"
        }`}
      >
        <div className="px-6 py-8 flex justify-between items-center opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all">
          <p className="w-[64%] md:w-[58%] lg:w-60 text-lg md:text-2xl lg:text-3xl text-white font-medium pointer-events-none select-none">{props.imgText}</p>
          <div
            onClick={() => props.onClickedMore(props.imgText, props.imgDesc, props.imgUrl)}
            className="w-16 md:w-20 lg:w-24 h-8 md:h-11 text-xs md:text-base rounded-full font-medium bg-white text-black flex justify-center items-center cursor-pointer group/button"
          >
            More <Plus className="text-base md:text-lg transition-all duration-300 group-hover/button:rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
}
