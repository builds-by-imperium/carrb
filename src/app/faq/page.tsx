import React from "react";
import { Nav } from "../components/nav/Nav";
import Hero from "../components/Hero";
import Banner from "../components/home/Banner";
import Footer from "../components/Footer";
import Faqs from "@/app/drive/_components/Faq";

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
