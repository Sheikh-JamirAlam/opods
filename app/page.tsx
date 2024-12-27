import { Arrow, CreditCard, Send, SmartPhone, Smiley, Truck } from "./components/Icons";
import OpodsAnimation from "./components/OpodsAnimation";
import CarouselContainer from "./components/CarouselContainer";
import CaseContainer from "./components/CaseContainer";
import ColorContainer from "./components/ColorContainer";
import Carousel from "./components/Carousel";
import Feature from "./components/Feature";
import AnimateFeature from "./components/AnimateFeature";
import ScreenContainer from "./components/ScreenContainer";
import ShopCard from "./components/ShopCard";

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
        <section className="px-48 pb-52 flex flex-col items-center gap-12">
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
        <section className="px-48 py-12 pb-24 flex justify-between">
          <div className="w-[33rem] h-[96.625rem] relative">
            <div className="flex flex-col gap-5 sticky top-36">
              <h1 className="text-5xl font-semibold">Redesigned for comfort. How fitting.</h1>
              <p className="text-4xl font-medium">OPods Z1 provide exceptional fit, all-day comfort and greater stability with your every move.</p>
            </div>
          </div>
          <div className="flex flex-col gap-32">
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
        <section className="px-48 pb-20 flex flex-col items-center">
          <div className="w-full h-[54rem] absolute bg-gradient-to-b from-lighter-red from-[34%] via-pink via-[54%]"></div>
          <h1 className="w-[46rem] pt-[6.25rem] text-center text-6xl text-white font-semibold z-10">Seamless Pairing, Instant Connectivity Always</h1>
          <ScreenContainer />
          <p className="pt-20 text-2xl font-semibold">An instant connection.</p>
          <p className="w-[60rem] text-2xl font-semibold text-center text-grey">
            OPods Z1 pair immediately with every device connected to your Apple Account. Just place your OPods near your device and tap Connect.
          </p>
        </section>
        <section className="px-48 py-28 bg-white">
          <h1 className="w-[35rem] pb-20 text-5xl font-semibold">Why OPods are the best place to buy OPods.</h1>
          <div className="flex justify-between">
            <ShopCard text="Personalise your AirPods for free." desc="Engrave your new OPods with a mix of emoji, names, initials and numbers." Icon={Smiley} />
            <ShopCard text="Monthly payment options available." desc="Choose the easy way to finance with convenient payment options." Icon={CreditCard} />
            <ShopCard text="Get flexible delivery and easy pickup." desc="Get free delivery or pickup at your OPods Store." Icon={Truck} />
          </div>
        </section>
      </main>
      <footer className="px-48 py-20 pt-40">
        <h1 className="text-5xl font-semibold">OPods</h1>
        <div className="py-20 flex gap-20">
          <div className="flex flex-col gap-5">
            <h1 className="pb-2 text-xl text-grey">Explore OPods</h1>
            <p className="text-4xl font-medium">Explore All OPods</p>
            <p className="text-4xl font-medium">OPods X1</p>
            <p className="text-4xl font-medium">OPods X2 Pro</p>
            <p className="text-4xl font-medium">OPods Max</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="pb-2 text-xl text-grey">Shop OPods</h1>
            <p className="text-xl font-medium">Shop OPods</p>
            <p className="text-xl font-medium">OPods Accessories</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="pb-2 text-xl text-grey">More from OPods</h1>
            <p className="text-xl font-medium">OPods Support</p>
            <p className="text-xl font-medium">OCare+ for Headphones</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-10">
            <p className="text-grey">Copyright © 2024 Apple Inc. All rights reserved.</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
          <div className="flex gap-10">
            <div className="flex justify-center items-center gap-2">
              <div className="w-8 h-8 text-xl bg-lighter-grey rounded-full flex justify-center items-center">
                <SmartPhone />
              </div>
              <p>+91 2222222222</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-8 h-8 text-xl bg-lighter-grey rounded-full flex justify-center items-center">
                <Send />
              </div>
              <p>opods@hello.design</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
