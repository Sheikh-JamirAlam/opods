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
      className="w-[46.25rem] h-[26.875rem] rounded-[40px] flex flex-col gap-5 justify-center"
    >
      <h1
        style={{ marginLeft: props.txtSide === "left" ? 0 : "auto", color: props.txtSide === "left" ? "#080808" : "#F3F3F5", width: props.txtSide === "left" ? "24rem" : "20rem" }}
        className="text-8xl font-medium"
      >
        {props.imgText}
      </h1>
      <p
        style={{ marginLeft: props.txtSide === "left" ? 0 : "auto", color: props.txtSide === "left" ? "#080808" : "#F3F3F5", width: props.txtSide === "left" ? "24rem" : "20rem" }}
        className="text-xl font-medium text-grey"
      >
        {props.desc}
      </p>
    </div>
  );
}
