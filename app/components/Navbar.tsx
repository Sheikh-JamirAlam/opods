"use client";

export default function Navbar() {
  return (
    <div className="w-80 flex justify-between items-center font-semibold">
      <a
        className="px-4 py-2 rounded-full cursor-pointer hover:bg-grey/[0.2] transition-all duration-500 whatever"
        onClick={(e) => {
          document.getElementById("opods")?.scrollIntoView({ behavior: "smooth" });
          e.preventDefault();
        }}
        href="#opods"
      >
        Overview
      </a>
      <a
        className="px-4 py-2 rounded-full cursor-pointer hover:bg-grey/[0.2] transition-all duration-500"
        onClick={(e) => {
          document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
          e.preventDefault();
        }}
        href="#features"
      >
        Features
      </a>
      <a
        className="px-4 py-2 rounded-full cursor-pointer hover:bg-grey/[0.2] transition-all duration-500"
        onClick={(e) => {
          document.getElementById("specs")?.scrollIntoView({ behavior: "smooth" });
          e.preventDefault();
        }}
        href="#specs"
      >
        Specs
      </a>
    </div>
  );
}
