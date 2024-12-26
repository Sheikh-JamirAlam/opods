import { Arrow } from "./components/Icons";
import OpodsAnimation from "./components/OpodsAnimation";
import CarouselContainer from "./components/CarouselContainer";
import CaseContainer from "./components/CaseContainer";
import ColorContainer from "./components/ColorContainer";
import Carousel from "./components/Carousel";

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
          <div className="px-6 py-2 rounded-xl bg-light-black">Buy now</div>
        </section>
        <section className="h-screen w-full relative text-white">
          <video src="/videos/OPods.mp4" autoPlay loop muted playsInline preload="none" className="h-full w-full absolute top-0 z-0 object-cover pointer-events-none"></video>
          <div className="px-48 pt-[70vh] relative z-10 flex justify-between">
            <div className="w-80">
              <p className="text-4xl font-bold">OPods</p>
              <p className="text-5xl font-semibold">Next evolution of sound and comfort</p>
            </div>
            <div className="w-12 h-12 mt-auto flex justify-center items-center text-xl bg-light-black rounded-full">
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
        <section className="h-screen">
          <ColorContainer />
        </section>
        <section className="px-48 pb-12 flex flex-col items-center gap-12">
          <div className="w-full h-[41rem] absolute bg-gradient-to-t from-aqua from-45%"></div>
          <h1 className="w-[40rem] mt-56 text-center text-8xl text-white font-semibold z-10 drop-shadow-[0_6px_6px_rgba(0,0,0,0.4)]">Charged fast. And lasts.</h1>
          <CaseContainer />
          <p className="w-[53rem] text-4xl text-center font-medium">
            Power for hours with a smaller, more capable case.
            <span className="text-dark-grey"> The streamlined charging case is more than 10% smaller by volume than the previous generation, with no sacrifice to charging times.</span>
          </p>
          <div className="w-[53rem] flex justify-between items-center">
            <Carousel imgUrl="url('/images/Cord.jpg')" imgText="Easy as USB-C" width="26rem" height="26rem" />
            <Carousel imgUrl="url('/images/Charger.jpg')" imgText="New wireless option" width="26rem" height="26rem" />
          </div>
        </section>
      </main>
      <footer className=""></footer>
    </div>
  );
}
