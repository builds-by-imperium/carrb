"use client";

import CtaSoild from "@/app/components/btn/CtaSolid";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="hero2 flex flex-col justify-end h-[60vh] px-[6%] md:px-[4%] lg:px-[8%] gap-[0.4375em]">
        <motion.div
          className="max-md:w-full w-[45%] pb-[3.75em] flex flex-col gap-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="font-bold max-md:text-[24px] text-[3em] text-white">
            We Are Carrb
          </h2>

          <p className="text-white font-medium max-md:text-[18px] text-[1.125em]">
            We’re passionate about solving problems. We take on challenges
            others deem impossible.
          </p>
          <div className="">
            <CtaSoild text="Sign Up" />
          </div>
        </motion.div>
      </div>

      <div className=" max-md:w-full w-[59.4%] px-[6%] md:px-[4%] lg:px-[8%] h-[13.375em] top-[661px] left-[12.5%] max-md:h-[239px] flex flex-col gap-[0.15625em] my-[2.8em]">
        <h2 className="text-[#07102A] w-full max-w-[50em] font-semibold max-md:text-[24px] text-[2.25em] h-[6.5em] capitalize">
          We reimagine the way the world moves for the better
        </h2>
        <p className="font-light text-[#404A66] max-md:text-[16px] text-[1.125em]">
          Movement is what we power. It’s our lifeblood. It runs through our
          veins. It’s what gets us out of bed each morning. It pushes us to
          constantly reimagine how we can move better. For you. For all the
          places you want to go. For all the things you want to get. For all the
          ways you want to earn. Across the entire world. In real time. At the
          incredible speed of now.
        </p>
      </div>

      <div className="bg-[#0B3B87] w-full h-auto md:h-[50vh] px-[6%] md:px-[4%] lg:px-[8%] flex justify-center flex-col gap-[21]">
        <h2 className="capitalize text-white font-semibold text-[32px]">
          Our mission statement{" "}
        </h2>
        <p className="font-light text-white text-[18px] leading-9 ">
          We are CARRB. The go-getters. The kind of people who are relentless
          about our mission to help people go anywhere and get anything and earn
          their way. Movement is what we power. It’s our lifeblood. It runs
          through our veins. It’s what gets us out of bed each morning. It
          pushes us to constantly reimagine how we can move better. For you. For
          all the places you want to go. For all the things you want to get. For
          all the ways you want to earn. Across the entire world. In real time.
          At the incredible speed of now. We are a tech company that connects
          the physical and digital worlds to help make movement happen at the
          tap of a button. Because we believe in a world where movement should
          be accessible. So you can move and earn safely. In a way that’s
          sustainable for our planet. And regardless of your gender, race,
          religion, abilities, or sexual orientation, we champion your right to
          move and earn freely and without fear. Of course, we haven’t always
          gotten it right. But we’re not afraid of failure, because it makes us
          better, wiser, and stronger. And it makes us even more committed to do
          the right thing by our customers, local communities and cities, and
          our incredibly diverse set of{" "}
        </p>
      </div>

      <div className="">
        <div className="">
          <h2 className="capitalize">A letter from our CEO</h2>
          <p>
            Read about our team’s commitment to provide everyone on our global
            platform with the technology that can help them move ahead.
          </p>
        </div>
        <div className=""></div>
      </div>
      {/* <Footer /> */}
    </section>
  );
};

export default Hero;
