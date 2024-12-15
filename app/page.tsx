//import Image from "next/image";
import { Arrow } from "./components/Icons";
import dynamic from "next/dynamic";
// import OpodsAnimation from "./components/OpodsAnimation";
const OpodsAnimation = dynamic(() => import("./components/OpodsAnimation"));

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
          <video
            src="https://res.cloudinary.com/ddh8nxew6/video/upload/v1734240685/videos/OPods.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="h-full w-full absolute top-0 z-0 object-cover pointer-events-none"
          ></video>
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
      </main>
      <footer className=""></footer>
    </div>
  );
}
