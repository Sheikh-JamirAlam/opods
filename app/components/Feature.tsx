interface PropType {
  imgUrl: string;
  imgText: string;
  desc: string;
  txtSide: string;
}

export default function Feature(props: PropType) {
  return (
    <div
      style={{ backgroundImage: props.imgUrl, backgroundSize: "cover" }}
      className={`w-[22rem] h-[14rem] sm:w-[34rem] sm:h-[20rem] 2xl:w-[46.25rem] 2xl:h-[26.875rem] ${
        props.txtSide === "left" ? "px-10 sm:px-14 bg-right" : "px-4 bg-left"
      } rounded-3xl sm:rounded-[40px] flex flex-col gap-1 sm:gap-5 justify-center scale-[0.85] 2xs:scale-100`}
    >
      <h1
        style={{ marginLeft: props.txtSide === "left" ? 0 : "auto", color: props.txtSide === "left" ? "#080808" : "#F3F3F5" }}
        className={`${props.txtSide === "left" ? "w-[8rem] sm:w-[19rem] 2xl:w-[24rem]" : "w-[8rem] sm:w-[14rem] 2xl:w-[20rem]"} text-3xl sm:text-6xl 2xl:text-8xl font-medium`}
      >
        {props.imgText}
      </h1>
      <p
        style={{ marginLeft: props.txtSide === "left" ? 0 : "auto", color: props.txtSide === "left" ? "#080808" : "#F3F3F5" }}
        className={`${props.txtSide === "left" ? "w-[13rem] sm:w-[20rem] 2xl:w-[24rem]" : "w-[8rem] sm:w-[14rem] 2xl:w-[20rem]"} text-xs sm:text-base 2xl:text-xl font-medium text-grey`}
      >
        {props.desc}
      </p>
    </div>
  );
}
