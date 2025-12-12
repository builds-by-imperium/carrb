import React from "react";
import { Nav } from "../components/nav/Nav";
import Hero from "../components/Hero";
import Icons from "../drive/_components/Icons";
import calender from "@/assets/calender.png";
import coin from "@/assets/coin.png";
import moneys from "@/assets/moneys.png";
import Started from "../drive/_components/Started";
import StepServices from "../components/home/StepServices";
import step2 from "@/assets/step2.png";
import Faq from "../drive/_components/Faq";
import Banner from "../components/home/Banner";
import Footer from "../components/Footer";
import type { Metadata } from "next";

const data = [
  {
    icon: calender,
    title: "Driving shift limits",
    text: "A consecutive driving hours limit allows Carrb drivers to get sufficient rest and always stay fresh and alert at the wheel. ",
  },
  {
    icon: coin,
    title: "Identity Verification",
    text: "Our drivers submit a real-time selfie as part of our identity verification process during registration, as well as on a regular basis.",
  },
  {
    icon: moneys,
    title: "Share trip details",
    text: "Send the car's make, model, registration number, and live location to friends or family via a shareable link. All trips are also tracked and recorded.",
  },
];

export const metadata: Metadata = {
  title: "Safer journeys with Carrb",
  description:
    "Hop in a Carrb ride and relax—your safety is always our priority.",
  metadataBase: new URL("https://carrb.vercel.app"), // ensures absolute URLs for OG images
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Carrb | Make money driving with Carrb in Auchi",
    description:
      "Become a Carrb driver, set your schedule and earn money by driving!",
    url: "https://carrb.vercel.app",
    siteName: "Carrb",
    images: [
      {
        url: "/favicon.png", // logo in your public folder
        width: 1200,
        height: 630,
        alt: "Carrb Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carrb | Make money driving with Carrb in Auchi",
    description:
      "Become a Carrb driver, set your schedule and earn money by driving!",
    images: ["/favicon.png"], // logo for Twitter card
  },
};
const Ride = () => {
  return (
    <>
      <Nav />
      <Hero
        title="Safer journeys with Carrb"
        body="Hop in a Carrb ride and relax—your safety is always our priority."
        hero="hero4"
      />
      <div className="my-20 flex flex-col gap-20 justify-center px-[6%] md:px-[4%] lg:px-[8%] ">
        <div className="flex flex-col gap-2.5 text-[#404A66] md:w-[573px]">
          <h2 className="capitalize font-semibold text-[20px] md:text-[38px]">
            Peace of mind, every time you ride
          </h2>
          <p className="font-medium max-md:text-[16px] text-[18px] leading-6">
            These innovative features ensure our riders always feel safe and
            comfortable while riding with Carrb.
          </p>
        </div>
        <div className="flex max-md:flex-col max-md:gap-[34px] justify-between items-center">
          <div className="flex gap-[18px] md:w-[348px] flex-col">
            <Icons name={calender} alt="calender icon" />

            <div className=" flex flex-col max-md:gap-2.5 gap-[18px]">
              <h3 className="font-semibold text-[20px] capitalize">
                24/7 SUpport
              </h3>
              <p className="max-md:text-[14px] text-[18px] font-light text-[#404A66]">
                Our Support team is always online. Contact them through the
                Carrb app or via phone.
              </p>
            </div>
          </div>
          <div className="flex gap-[18px] md:w-[348px] flex-col">
            <Icons name={coin} alt="coin icon" />

            <div className=" flex flex-col max-md:gap-2.5 gap-[18px]">
              <h3 className="font-semibold text-[20px] capitalize">
                Rate your driver
              </h3>
              <p className="max-md:text-[14px] text-[18px] font-light text-[#404A66]">
                Our Support team is always online. Contact them through the
                Carrb app or via phone.
              </p>
            </div>
          </div>{" "}
          <div className="flex gap-[18px] md:w-[348px] flex-col">
            <Icons name={moneys} alt="money icon" />
            <div className=" flex flex-col max-md:gap-2.5 gap-[18px]">
              <h3 className="font-semibold text-[20px] capitalize">
                SOS safety feature
              </h3>
              <p className="max-md:text-[14px] text-[18px] font-light text-[#404A66]">
                With just one tap, our SOS feature connects you to emergency
                assistance instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Started items={data} />
      <div className=" px-[6%] md:px-[4%] lg:px-[8%] my-20">
        <StepServices
          heading="Staying safe before, during and after your ride"
          title1="Before"
          paragraph1="Check that the driver’s face, car make and registration plate match those shown in the app."
          title2="During"
          paragraph2="Our Share Ride Details and Emergency Assist features allow you to ride without worry."
          title3="After"
          paragraph3={`Rate your driver honestly. Those who repeatedly receive low ratings will be banned.`}
          btnText="Get Started"
          imageUrl={step2}
        />
      </div>
      <Faq />
      <div className="px-[6%] md:px-[4%] lg:px-[8%] my-20 ">
        <Banner />
      </div>
      <Footer />
      <div className="bg-[#1049A1] w-full m-0! p-0! h-[23px]"></div>
    </>
  );
};

export default Ride;
