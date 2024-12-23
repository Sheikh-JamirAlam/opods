import { Arrow } from "./components/Icons";
import OpodsAnimation from "./components/OpodsAnimation";
import CarouselContainer from "./components/CarouselContainer";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="">
        <section className="w-full bg-transparent px-48 py-6 flex justify-between items-center text-white absolute top-0 z-50">
          <div className="text-3xl font-bold">OPods</div>
          <div className="w-80 flex justify-between items-center font-semibold">
            <p>Overview</p>
            <p>Specs</p>
            <p>Compare</p>
          </div>
          <div className="px-6 py-2 rounded-xl bg-dark-grey">Buy now</div>
        </section>
        <section className="h-screen w-full relative text-white">
          <video src="/videos/OPods.mp4" autoPlay loop muted playsInline preload="none" className="h-full w-full absolute top-0 z-0 object-cover pointer-events-none"></video>
          <div className="px-48 pt-[70vh] relative z-10 flex justify-between">
            <div className="w-80">
              <p className="text-4xl font-bold">OPods</p>
              <p className="text-5xl font-semibold">Next evolution of sound and comfort</p>
            </div>
            <div className="w-12 h-12 mt-auto flex justify-center items-center text-xl bg-dark-grey rounded-full">
              <Arrow className="rotate-180" />
            </div>
          </div>
        </section>
        <section className="bg-white">
          <OpodsAnimation />
        </section>
        <section style={{ background: "radial-gradient(ellipse at 33% 0%, rgb(189,175,227) 0%, rgb(67,51,114) 72%)", backgroundSize: "150% 100%" }} className="h-screen">
          <div className="px-48 py-24 text-white flex flex-col gap-20">
            <h1 className="text-5xl font-medium">Premium Features</h1>
            <CarouselContainer />
          </div>
        </section>
      </main>
      <footer className=""></footer>
    </div>
  );
}
