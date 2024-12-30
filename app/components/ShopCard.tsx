import { SVGProps } from "react";
import { Plus } from "./Icons";

interface PropType {
  text: string;
  desc: string;
  Icon: React.FC<SVGProps<SVGSVGElement>>;
}

export default function ShopCard(props: PropType) {
  return (
    <div className="w-[20re] 2xl:w-[25re] h-[19.375re] p-10 flex flex-col gap-2 justify-between rounded-[40px] shadow-outer-lg">
      <props.Icon className="text-6xl" />
      <h1 className="text-3xl font-medium">{props.text}</h1>
      <p className="text-base text-dark-grey">{props.desc}</p>
      <div className="w-10 h-10 ml-auto flex items-center justify-center rounded-full text-3xl text-white bg-black cursor-pointer group">
        <Plus className="transition-all duration-300 group-hover:rotate-90" />
      </div>
    </div>
  );
}
