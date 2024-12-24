import Image from "next/image";

export default function ColorContainer() {
  return (
    <div className="px-48 py-12 flex flex-col gap-10">
      <h1 className="w-[40rem] text-5xl font-semibold">Choose from a wide range of stunning colors</h1>
      <div className="flex items-center justify-center">
        <h1 className="gredient-text w-full text-center font-calligraphy text-[500px] absolute z-0">Black</h1>
        <Image className="relative z-10" src="/images/OPods.png" width={550} height={550} alt="Image of our OPods" />
      </div>
      <p className="mx-auto text-2xl font-medium">Midnight Black - Bold and Timeless</p>
    </div>
  );
}
