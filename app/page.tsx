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
import MenuContainer from "./components/MenuContainer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="font-sans">
      <main>
        <section className="w-full bg-transparent px-20 xl:px-48 py-6 hidden lg:flex justify-between items-center text-white absolute top-0 z-50">
          <div className="text-3xl font-bold cursor-pointer">OPods</div>
          <Navbar />
          <div className="px-6 py-2 rounded-xl bg-light-black cursor-pointer hover:bg-dark-grey transition-all duration-500">Buy now</div>
        </section>
        <section className="bg-transparent visible lg:invisible">
          <div className="text-4xl text-white font-bold absolute top-12 left-6 md:left-10 cursor-pointer z-50">OPods</div>
          <MenuContainer />
        </section>
        <section className="h-svh min-h-[34.375rem] max-h-[62.5rem] xs:min-h-[37.5rem] xs:max-h-[53.125rem] md:min-h-[43.75rem] md:max-h-[53.125rem] lg:min-h-[50rem] lg:max-h-full w-full relative text-white">
          <video autoPlay loop muted playsInline preload="none" className="h-full w-full absolute top-0 z-0 object-cover pointer-events-none" aria-label="A video of showcasing OPods">
            <source src="/videos/Opods.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="h-[90%] px-6 md:px-20 xl:px-48 relative z-10 flex justify-between items-end">
            <div className="w-[70%] sm:w-80">
              <p className="text-3xl sm:text-4xl font-bold">OPods</p>
              <p className="text-4xl sm:text-5xl font-semibold">Next evolution of sound and comfort</p>
            </div>
            <VideoArrow />
          </div>
        </section>
        <section id="opods" className="bg-white">
          <OpodsAnimation />
        </section>
        <section id="features" style={{ background: "radial-gradient(ellipse at 33% 0%, rgb(189,175,227) 0%, rgb(67,51,114) 72%)", backgroundSize: "150% 100%" }}>
          <div className="py-24 text-white flex flex-col gap-20">
            <h1 className="px-6 md:px-20 xl:px-48 text-3xl md:text-5xl font-medium">Premium Features</h1>
            <CarouselContainer />
          </div>
        </section>
        <section className="overflow-hidden">
          <ColorContainer />
        </section>
        <section className="px-6 md:px-20 xl:px-48 sm:pb-28 lg:pb-52 flex flex-col items-center gap-12">
          <div className="w-full h-[29rem] xs:h-[31rem] md:h-[33rem] lg:h-[41rem] absolute bg-gradient-to-t from-aqua from-45%"></div>
          <h1 className="w-[20rem] md:w-[30rem] lg:w-[40rem] mt-56 text-center text-5xl md:text-6xl lg:text-8xl text-white font-semibold z-10 drop-shadow-[0_6px_6px_rgba(0,0,0,0.4)]">
            Charged fast. And lasts.
          </h1>
          <CaseContainer />
          <p className="w-[70%] lg:w-[53rem] text-base xs:text-lg md:text-2xl lg:text-4xl text-center font-medium">
            Power for hours with a smaller, more capable case.
            <span className="text-dark-grey"> The streamlined charging case is more than 10% smaller by volume than the previous generation, with no sacrifice to charging times.</span>
          </p>
          <div className="lg:w-[53rem] flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-5 lg:gap-0">
            <Carousel imgUrl="url('/images/Cord.jpg')" imgText="Easy as USB-C" width="26rem" height="26rem" section="charge" />
            <Carousel imgUrl="url('/images/Charger.jpg')" imgText="New wireless option" width="26rem" height="26rem" section="charge" />
          </div>
        </section>
        <section id="specs" className="px-6 md:px-20 xl:px-48 py-12 pb-24 flex flex-col lg:flex-row justify-between">
          <div className="lg:w-[36%] relative">
            <div className="sticky top-36">
              <h1 className="text-2xl md:text-4xl 2xl:text-5xl font-semibold">Redesigned for comfort. How fitting.</h1>
              <p className="mt-5 text-xl md:text-3xl 2xl:text-4xl font-medium">OPods Z1 provide exceptional fit, all-day comfort and greater stability with your every move.</p>
            </div>
          </div>
          <div className="mt-4 2xs:mt-10 lg:mt-0 flex flex-col items-center lg:items-start gap-4 2xs:gap-12 sm:gap-16">
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
        <section className="px-6 md:px-20 xl:px-48 pb-20 flex flex-col items-center">
          <div className="w-full h-[54rem] absolute bg-gradient-to-b from-lighter-red from-[34%] via-pink via-[54%]"></div>
          <h1 className="w-[18rem] md:w-[35rem] lg:w-[46rem] pt-[6.25rem] text-center text-2xl md:text-5xl lg:text-6xl text-white font-semibold z-10">Seamless Pairing, Instant Connectivity Always</h1>
          <ScreenContainer />
          <p className="md:text-xl xl:text-2xl font-semibold">An instant connection.</p>
          <p className="w-[80%] xl:w-[60rem] md:text-xl xl:text-2xl font-semibold text-center text-grey">
            OPods Z1 pair immediately with every device connected to your Apple Account. Just place your OPods near your device and tap Connect.
          </p>
        </section>
        <section className="py-16 md:py-28 pb-16 bg-white">
          <h1 className="w-[17rem] md:w-[35rem] mx-6 md:mx-20 xl:mx-48 md:pb-10 text-2xl md:text-5xl font-semibold">Why OPods are the best place to buy OPods.</h1>
          <ShopCardContainer />
        </section>
      </main>
      <footer className="px-6 md:px-20 xl:px-48 py-20 md:pt-40">
        <h1 className="text-3xl sm:text-5xl font-semibold">OPods</h1>
        <div className="py-10 sm:py-20 flex flex-wrap lg:flex-nowrap gap-10 sm:gap-20">
          <div className="w-full lg:w-auto flex flex-col gap-3 sm:gap-5">
            <h1 className="pb-2 text-base sm:text-xl text-grey">Explore OPods</h1>
            <p className="w-fit text-2xl sm:text-4xl font-medium link link-underline link-underline-big link-underline-black cursor-pointer">Explore All OPods</p>
            <p className="w-fit text-2xl sm:text-4xl font-medium link link-underline link-underline-big link-underline-black cursor-pointer">OPods X1</p>
            <p className="w-fit text-2xl sm:text-4xl font-medium link link-underline link-underline-big link-underline-black cursor-pointer">OPods X2 Pro</p>
            <p className="w-fit text-2xl sm:text-4xl font-medium link link-underline link-underline-big link-underline-black cursor-pointer">OPods Max</p>
          </div>
          <div className="flex flex-col gap-3 sm:gap-5">
            <h1 className="pb-2 text-base sm:text-xl text-grey">Shop OPods</h1>
            <p className="w-fit text-base sm:text-xl font-medium link link-underline link-underline-black cursor-pointer">Shop OPods</p>
            <p className="w-fit text-base sm:text-xl font-medium link link-underline link-underline-black cursor-pointer">OPods Accessories</p>
          </div>
          <div className="flex flex-col gap-3 sm:gap-5">
            <h1 className="pb-2 text-base sm:text-xl text-grey">More from OPods</h1>
            <p className="w-fit text-base sm:text-xl font-medium link link-underline link-underline-black cursor-pointer">OPods Support</p>
            <p className="w-fit text-base sm:text-xl font-medium link link-underline link-underline-black cursor-pointer">OCare+ for Headphones</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 lg:items-center">
          <div className="flex flex-wrap xs:flex-nowrap items-center gap-2 xs:gap-6 2xl:gap-10">
            <p className="w-full xs:w-auto text-grey text-xs sm:text-base">© 2025 OPods Inc.</p>
            <p className="mr-4 xs:mr-0 text-xs sm:text-base link link-underline link-underline-black cursor-pointer">Privacy Policy</p>
            <p className="text-xs sm:text-base link link-underline link-underline-black cursor-pointer">Terms and Conditions</p>
          </div>
          <div className="flex flex-wrap xs:flex-nowrap items-center gap-4 xs:gap-6 2xl:gap-10 text-base">
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
