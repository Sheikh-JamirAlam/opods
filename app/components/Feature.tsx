interface PropType {
  imgUrl: string;
  imgText: string;
  desc: string;
  txtSide: string;
}

export default function Feature(props: PropType) {
  return (
    <div
      style={{ backgroundImage: props.imgUrl, backgroundSize: "cover", padding: props.txtSide === "left" ? "0 3.5rem" : "0 1rem" }}
      className="w-[20rem] h-[14rem] sm:w-[34rem] sm:h-[20rem] 2xl:w-[46.25rem] 2xl:h-[26.875rem] bg-right rounded-[40px] flex flex-col gap-5 justify-center"
    >
      <h1
        style={{ marginLeft: props.txtSide === "left" ? 0 : "auto", color: props.txtSide === "left" ? "#080808" : "#F3F3F5" }}
        className={`${props.txtSide === "left" ? "w-[8rem] sm:w-[19rem] 2xl:w-[24rem]" : "w-[14rem] 2xl:w-[20rem]"} text-3xl sm:text-6xl 2xl:text-8xl font-medium`}
      >
        {props.imgText}
      </h1>
      <p
        style={{ marginLeft: props.txtSide === "left" ? 0 : "auto", color: props.txtSide === "left" ? "#080808" : "#F3F3F5" }}
        className={`${props.txtSide === "left" ? "w-[20rem] 2xl:w-[24rem]" : "w-[14rem] 2xl:w-[20rem]"} text-xs sm:text-base 2xl:text-xl font-medium text-grey`}
      >
        {props.desc}
      </p>
    </div>
  );
}
