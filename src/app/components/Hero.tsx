"use client";

import CtaSoild from "@/app/components/btn/CtaSolid";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
const Hero = ({ title, body, hero }: any) => {
  return (
    <section className="text">
      <div
        className={`${hero} flex flex-col justify-end h-[60vh] px-[6%] md:px-[4%] lg:px-[8%] gap-[0.4375em]`}
      >
        <motion.div
          className="max-md:w-[80%] lg:w-[45%] pb-[3.75em] flex flex-col gap-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="font-bold max-md:text-[24px] text-[3em] text-white">
            {title}
          </h2>

          <p className="text-white font-medium max-md:text-[18px] text-[1.125em]">
            {body}
          </p>
          <div className="">
            <CtaSoild text="Sign Up" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
