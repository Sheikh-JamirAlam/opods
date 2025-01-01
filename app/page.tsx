import { Send, SmartPhone } from "./components/Icons";
import OpodsAnimation from "./components/OpodsAnimation";
import CarouselContainer from "./components/CarouselContainer";
import CaseContainer from "./components/CaseContainer";
import ColorContainer from "./components/ColorContainer";
import Carousel from "./components/Carousel";
import Feature from "./components/Feature";
import AnimateFeature from "./components/AnimateFeature";
import ScreenContainer from "./components/ScreenContainer";
import VideoArrow from "./components/VideoArrow";
import ShopCardContainer from "./components/ShopCardContainer";

export default function Home() {
  return (
    <div className="font-sans">
      <main>
        <section className="w-full bg-transparent px-20 xl:px-48 py-6 flex justify-between items-center text-white absolute top-0 z-50 invisible lg:visible">
          <div className="text-3xl font-bold cursor-pointer">OPods</div>
          <div className="w-80 flex justify-between items-center font-semibold">
            <p className="px-4 py-2 rounded-full cursor-pointer hover:bg-grey/[0.2] transition-all duration-500">Overview</p>
            <p className="px-4 py-2 rounded-full cursor-pointer hover:bg-grey/[0.2] transition-all duration-500">Specs</p>
            <p className="px-4 py-2 rounded-full cursor-pointer hover:bg-grey/[0.2] transition-all duration-500">Compare</p>
          </div>
          <div className="px-6 py-2 rounded-xl bg-light-black cursor-pointer hover:bg-dark-grey transition-all duration-500">Buy now</div>
        </section>
        {/* <section className=""></section> */}
        <section className="h-screen w-full relative text-white">
          <video src="/videos/OPods.mp4" autoPlay loop muted playsInline preload="none" className="h-full w-full absolute top-0 z-0 object-cover pointer-events-none"></video>
          <div className="px-20 xl:px-48 pt-[70vh] relative z-10 flex justify-between">
            <div className="w-80">
              <p className="text-4xl font-bold">OPods</p>
              <p className="text-5xl font-semibold">Next evolution of sound and comfort</p>
            </div>
            <VideoArrow />
          </div>
        </section>
        <section id="opods-animation-section" className="bg-white">
          <OpodsAnimation />
        </section>
        <section style={{ background: "radial-gradient(ellipse at 33% 0%, rgb(189,175,227) 0%, rgb(67,51,114) 72%)", backgroundSize: "150% 100%" }}>
          <div className="py-24 text-white flex flex-col gap-20">
            <h1 className="px-20 xl:px-48 text-5xl font-medium">Premium Features</h1>
            <CarouselContainer />
          </div>
        </section>
        <section className="overflow-hidden">
          <ColorContainer />
        </section>
        <section className="px-20 xl:px-48 pb-52 flex flex-col items-center gap-12">
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
        <section className="px-20 xl:px-48 py-12 pb-24 flex flex-col lg:flex-row justify-between">
          <div className="lg:w-[36%] relative">
            <div className="sticky top-36">
              <h1 className="text-4xl 2xl:text-5xl font-semibold">Redesigned for comfort. How fitting.</h1>
              <p className="mt-5 text-3xl 2xl:text-4xl font-medium">OPods Z1 provide exceptional fit, all-day comfort and greater stability with your every move.</p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 flex flex-col items-center lg:items-start gap-16">
            <Feature
              imgUrl="url(/images/Fitness.png)"
              imgText="Physical fit-ness."
              desc="The new internal architecture and a refined contour provide a natural and secure fit for more people than ever."
              txtSide="left"
            />
            <AnimateFeature imgUrl="url(/images/Controls.png)" imgText="Touch control." desc="The new force sensor lets you control playback and calls with just a pinch." txtSide="right" />
            <Feature imgUrl="url(/images/Resist.png)" imgText="Resist Ready." desc="Rated IP54 dust, sweat and water resistant to withstand anything from rain to heavy workouts." txtSide="right" />
          </div>
        </section>
        <section className="px-20 xl:px-48 pb-20 flex flex-col items-center">
          <div className="w-full h-[54rem] absolute bg-gradient-to-b from-lighter-red from-[34%] via-pink via-[54%]"></div>
          <h1 className="w-[46rem] pt-[6.25rem] text-center text-6xl text-white font-semibold z-10">Seamless Pairing, Instant Connectivity Always</h1>
          <ScreenContainer />
          <p className="pt-20 text-xl xl:text-2xl font-semibold">An instant connection.</p>
          <p className="w-[80%] xl:w-[60rem] text-xl xl:text-2xl font-semibold text-center text-grey">
            OPods Z1 pair immediately with every device connected to your Apple Account. Just place your OPods near your device and tap Connect.
          </p>
        </section>
        <section className="py-28 pb-16 bg-white">
          <h1 className="w-[35rem] mx-20 xl:mx-48 pb-10 text-5xl font-semibold">Why OPods are the best place to buy OPods.</h1>
          <ShopCardContainer />
        </section>
      </main>
      <footer className="px-20 xl:px-48 py-20 pt-40">
        <h1 className="text-5xl font-semibold">OPods</h1>
        <div className="py-20 flex gap-20">
          <div className="flex flex-col gap-5">
            <h1 className="pb-2 text-xl text-grey">Explore OPods</h1>
            <p className="w-fit text-4xl font-medium link link-underline link-underline-big link-underline-black cursor-pointer">Explore All OPods</p>
            <p className="w-fit text-4xl font-medium link link-underline link-underline-big link-underline-black cursor-pointer">OPods X1</p>
            <p className="w-fit text-4xl font-medium link link-underline link-underline-big link-underline-black cursor-pointer">OPods X2 Pro</p>
            <p className="w-fit text-4xl font-medium link link-underline link-underline-big link-underline-black cursor-pointer">OPods Max</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="pb-2 text-xl text-grey">Shop OPods</h1>
            <p className="w-fit text-xl font-medium link link-underline link-underline-black cursor-pointer">Shop OPods</p>
            <p className="w-fit text-xl font-medium link link-underline link-underline-black cursor-pointer">OPods Accessories</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="pb-2 text-xl text-grey">More from OPods</h1>
            <p className="w-fit text-xl font-medium link link-underline link-underline-black cursor-pointer">OPods Support</p>
            <p className="w-fit text-xl font-medium link link-underline link-underline-black cursor-pointer">OCare+ for Headphones</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 lg:items-center">
          <div className="flex items-center gap-6 2xl:gap-10">
            <p className="text-grey">© 2025 OPods Inc.</p>
            <p className="link link-underline link-underline-black cursor-pointer">Privacy Policy</p>
            <p className="link link-underline link-underline-black cursor-pointer">Terms and Conditions</p>
          </div>
          <div className="flex items-center gap-6 2xl:gap-10">
            <div className="flex justify-center items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 text-xl bg-lighter-grey rounded-full flex justify-center items-center transition-all cursor-pointer before:absolute before:h-6 before:w-6 before:rounded-full before:bg-light-black/[0] before:duration-300 before:ease-out group-hover:before:bg-light-black group-hover:before:h-10 group-hover:before:w-10">
                <SmartPhone className="z-10 transition-all group-hover:text-white" />
              </div>
              <p>+91 2222222222</p>
            </div>
            <div className="flex justify-center items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 text-xl bg-lighter-grey rounded-full flex justify-center items-center transition-all cursor-pointer before:absolute before:h-6 before:w-6 before:rounded-full before:bg-light-black/[0] before:duration-300 before:ease-out group-hover:before:bg-light-black group-hover:before:h-10 group-hover:before:w-10">
                <Send className="z-10 transition-all group-hover:text-white" />
              </div>
              <p>opods@hello.design</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
