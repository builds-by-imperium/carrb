import React from "react";
import { Nav } from "../components/nav/Nav";
import Hero from "../components/Hero";
import Banner from "../components/home/Banner";
import Footer from "../components/Footer";
import Faqs from "@/app/drive/_components/Faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "We’re here to answer questions you have.",
  metadataBase: new URL("https://carrb.vercel.app"), // ensures absolute URLs for OG images

  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Frequently Asked Questions",
    description: "We’re here to answer questions you have.",
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
    title: "Frequently Asked Questions",
    description: "We’re here to answer questions you have.",
    images: ["/logo.png"], // logo for Twitter card
  },
};
const Faq = () => {
  return (
    <section>
      <Nav />
      <Hero
        title="Frequently Asked Questions"
        body="We’re here to answer questions you have."
        hero="hero4"
      />
      <Faqs />
      <div className="px-[6%] md:px-[4%] lg:px-[8%] my-20 ">
        <Banner />
      </div>
      <Footer />
      <div className="bg-[#1049A1] w-full m-0! p-0! h-[23px]"></div>
    </section>
  );
};

export default Faq;
