interface PropType {
  imgUrl: string;
  imgText: string;
  width: string;
  height: string;
}

export default function Carousel(props: PropType) {
  return (
    <div
      style={{ backgroundImage: props.imgUrl, backgroundSize: "cover", width: props.width, height: props.height }}
      className={`group rounded-[2.5rem] flex flex-col-reverse hover:shadow-inner-3xl transition-all`}
    >
      <div className="px-6 py-8 flex justify-between items-center opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all">
        <p className="w-60 text-3xl text-white font-medium pointer-events-none">{props.imgText}</p>
        <div className="w-24 h-11 rounded-full font-medium bg-white text-black flex justify-center items-center cursor-pointer">More +</div>
      </div>
    </div>
  );
}
