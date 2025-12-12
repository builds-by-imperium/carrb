import React from "react";
import { Nav } from "../components/nav/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Testimonial from "./_components/Testimonial";
import CtaSoild from "../components/btn/CtaSolid";
import Image from "next/image";
import man from "@/assets/happyMan.png";
// import Imagining from "./_components/Imagining";
import Mission from "./_components/Mission";
import Values from "./_components/Values";
import Letter from "./_components/Letter";
import Imagining from "./_components/Imagining";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "We Are Carrb",
  description:
    "We’re passionate about solving problems. We take on challenges others deem impossible.",
  metadataBase: new URL("https://carrb.vercel.app"), // ensures correct absolute URLs
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "We Are Carrb",
    description:
      "We’re passionate about solving problems. We take on challenges others deem impossible.",
    url: "https://carrb.vercel.app",
    siteName: "Carrb",
    images: [
      {
        url: "/favicon.png", // or your logo
        width: 1200,
        height: 630,
        alt: "Carrb Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "We Are Carrb",
    description:
      "We’re passionate about solving problems. We take on challenges others deem impossible.",
    images: ["/favicon.png"], // logo for Twitter cards
  },
};

const About = () => {
  return (
    <div>
      <Nav />
      <Hero
        title="We Are Carrb"
        body="We’re passionate about solving problems. We take on challenges others deem impossible."
        hero="hero2"
      />
      <Imagining />
      <Mission />
      <Letter />
      <Values />
      <Testimonial />
      <div className="bg-[#0B3B87] w-full h-auto md:h-[50vh] px-[6%] md:px-[4%] lg:px-[8%] flex max-md:flex-col justify-between items-center gap-[21] max-md:py-10 max-md:my-5 max-lg:py-15 lg:h-auto">
        <div className="w-full md:w-[50.2%] flex flex-col gap-[37px] max-md:justify-center max-md:items-center">
          <h2 className="max-md:text-[24px] capitalize text-[48px] font-semibold text-white max-md:text-center">
            Join us to make cities for people, not cars
          </h2>
          <div className="">
            <CtaSoild text="View Open Roles" />
          </div>
        </div>
        <div className="">
          <Image src={man} alt="Happy Man" priority />
        </div>
      </div>
      <Footer />
      <div className="bg-[#1049A1] w-full m-0! p-0! h-[23px]"></div>
    </div>
  );
};

export default About;
