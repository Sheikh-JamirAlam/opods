"use client";

interface PropType {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu(props: PropType) {
  return (
    <nav className="w-full h-screen py-28 px-12 bg-pure-white fixed top-0 right-0 z-50 translate-x-[100%]">
      <ul className="text-4xl font-medium flex flex-col gap-6">
        <li
          className="cursor-pointer"
          onClick={(e) => {
            document.getElementById("opods")?.scrollIntoView({ behavior: "smooth" });
            e.preventDefault();
            props.setIsOpen((prev) => !prev);
          }}
        >
          Overview
        </li>
        <li
          className="cursor-pointer"
          onClick={(e) => {
            document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
            e.preventDefault();
            props.setIsOpen((prev) => !prev);
          }}
        >
          Features
        </li>
        <li
          className="cursor-pointer"
          onClick={(e) => {
            document.getElementById("specs")?.scrollIntoView({ behavior: "smooth" });
            e.preventDefault();
            props.setIsOpen((prev) => !prev);
          }}
        >
          Specs
        </li>
        <li>
          <div className="w-fit px-6 py-2 text-xl text-white rounded-xl bg-light-black cursor-pointer hover:bg-dark-grey transition-all duration-500">Buy now</div>
        </li>
      </ul>
    </nav>
  );
}
