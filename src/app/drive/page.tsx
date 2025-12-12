import React from "react";
import { Nav } from "../components/nav/Nav";
import Hero from "../components/Hero";
import Image from "next/image";
import calender from "@/assets/calender.png";
import coin from "@/assets/coin.png";
import moneys from "@/assets/moneys.png";
import onboarding from "@/assets/onboarding.png";
import Icons from "./_components/Icons";
import Started from "./_components/Started";
import StepServices from "../components/home/StepServices";
import Banner from "../components/home/Banner";
import Footer from "../components/Footer";
import Faq from "./_components/Faq";
import type { Metadata } from "next";
 
const data = [
  {
    icon: calender,
    title: "Earn on your terms with Carrb",
    text: "Earn during evenings and weekends, or maximize your earnings with regular driving. Drive when it suits you",
  },
  {
    icon: coin,
    title: "Weekly payouts",
    text: "Receive your earnings at the end of each week. No hidden subscription fees — only commission on your earnings.",
  },
  {
    icon: moneys,
    title: "A reliable source of income",
    text: "You’ll receive orders from our large network of riders anytime you’re online.",
  },
];


export const metadata:Metadata = {
  title: " Make money driving with Carrb in Auchi",
  description:
    "Become a Carrb driver, set your schedule and earn money by driving!",
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
        url: "/logo.png", // logo in your public folder
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
    images: ["/logo.png"], // logo for Twitter card
  },
};


const Drive = () => {
  return (
    <>
      {" "}
      <Nav />
      <Hero
        title="Make money driving with Carrb in Auchi"
        body="Become a Carrb driver, set your schedule and earn money by driving!"
        hero="hero3"
      />
      <div className="my-20 flex flex-col gap-20 justify-center px-[6%] md:px-[4%] lg:px-[8%] ">
        <div className="flex flex-col gap-2.5 text-[#404A66] md:w-[573px]">
          <h2 className="capitalize font-semibold text-[20px] md:text-[38px]">
            Why become a Carrb driver?
          </h2>
          <p className="font-medium max-md:text-[16px] text-[18px] leading-6">
            Whether you want to drive a few hours or make it a regular hustle,
            Carrb lets you earn on your schedule.
          </p>
        </div>
        <div className="flex max-md:flex-col max-md:gap-[34px] justify-between items-center">
          <div className="flex gap-[18px] md:w-[348px] flex-col">
            <Icons name={calender} alt="calender icon" />

            <div className=" flex flex-col max-md:gap-2.5 gap-[18px]">
              <h3 className="font-semibold text-[20px] capitalize">
                Earn on your terms with Carrb
              </h3>
              <p className="max-md:text-[14px] text-[18px] font-light text-[#404A66]">
                Earn during evenings and weekends, or maximize your earnings
                with regular driving. Drive when it suits you
              </p>
            </div>
          </div>
          <div className="flex gap-[18px] md:w-[348px] flex-col">
            <Icons name={coin} alt="coin icon" />

            <div className=" flex flex-col max-md:gap-2.5 gap-[18px]">
              <h3 className="font-semibold text-[20px] capitalize">
                Weekly payouts
              </h3>
              <p className="max-md:text-[14px] text-[18px] font-light text-[#404A66]">
                Receive your earnings at the end of each week. There are no
                hidden subscription fees and you’ll only pay commission on your
                earnings.
              </p>
            </div>
          </div>{" "}
          <div className="flex gap-[18px] md:w-[348px] flex-col">
            <Icons name={moneys} alt="money icon" />
            <div className=" flex flex-col max-md:gap-2.5 gap-[18px]">
              <h3 className="font-semibold text-[20px] capitalize">
                A reliable source of income
              </h3>
              <p className="max-md:text-[14px] text-[18px] font-light text-[#404A66]">
                You’ll receive orders from our large network of riders anytime
                you’re online.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Started items={data} />;
      <div className="px-[6%] md:px-[4%] lg:px-[8%] my-20 ">
        <StepServices
          heading="Quick Steps To Use Our Services"
          title1="Download the app"
          paragraph1="Go to your smartphone's app store (such as Google Play Store or
              Apple App Store), search for the ridesharing app you want to use,
              and download it to your device."
          title2="Sign Up/Login"
          paragraph2="Once the app is installed, open it and either sign up for a new
              account or log in if you already have one. You'll need to provide
              some basic information like your name, email address, and payment
              details."
          title3="Request A Ride"
          paragraph3={`Confirm your pickup and drop-off locations, then tap on the
              "Request Ride" button. The app will match you with a nearby
              driver, and you can track their arrival on the map. Once they
              arrive, hop in and enjoy your ride!`}
          btnText="Get Started"
          imageUrl={onboarding}
        />
      </div>
      <div className="px-[6%] md:px-[4%] lg:px-[8%] my-20 ">
        <Banner />
      </div>
      <Faq />
      <Footer />
      <div className="bg-[#1049A1] w-full m-0! p-0! h-[23px]"></div>
    </>
  );
};

export default Drive;
