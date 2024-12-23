interface PropType {
  imgUrl: string;
  imgText: string;
}

export default function Carousel(props: PropType) {
  return (
    <div style={{ backgroundImage: props.imgUrl, backgroundSize: "cover" }} className="w-96 h-[37rem] group rounded-[2.5rem] flex flex-col-reverse hover:shadow-inner-3xl transition-all">
      <div className="px-6 py-8 flex justify-between items-center opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all">
        <p className="w-60 text-3xl font-medium pointer-events-none">{props.imgText}</p>
        <div className="w-24 h-11 rounded-full font-medium bg-white text-black flex justify-center items-center cursor-pointer">More +</div>
      </div>
    </div>
  );
}
