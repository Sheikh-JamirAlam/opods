"use client";

import { Arrow } from "./Icons";

export default function VideoArrow() {
  return (
    <div
      onClick={(e) => {
        document.getElementById("opods")?.scrollIntoView({ behavior: "smooth" });
        e.preventDefault();
      }}
      className="w-14 h-14 sm:w-16 sm:h-16 lg:w-12 lg:h-12 mt-auto flex justify-center items-center text-2xl lg:text-xl bg-light-black/[0.4] rounded-full transition-all cursor-pointer before:absolute before:h-6 before:w-6 before:rounded-full before:bg-light-black/[0] before:duration-300 before:ease-out hover:before:bg-light-black hover:before:h-12 hover:before:w-12"
    >
      <Arrow className="z-10 rotate-180" />
    </div>
  );
}
