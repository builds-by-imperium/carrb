"use client";
import Image from "next/image";
import CtaSoild from "../btn/CtaSolid";
import arrowdown from "@/assets/arrowdown.png";
import arrowup from "@/assets/arrowup.png";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Delay between each child
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const arrowDownVariant = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const arrowUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <section className="hero flex items-center justify-center flex-col px-[8%] relative w-[879px]">
      {/* Arrow Down - animates from top */}
      <motion.div
        variants={arrowDownVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="absolute top-0 right-[53px] max-sm:w-[54.81px] max-sm:right-[25px]"
      >
        <Image src={arrowdown} alt="arrow down" />
      </motion.div>

      {/* Text + Button with stagger */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[54.94em] flex flex-col items-center"
      >
        <motion.h1
          variants={item}
          className="text-[1.5em] sm:text-[2em] lg:text-[2.5em] font-bold text-center text-white md:max-w-[55em]"
        >
          Ride Smarter, Arrive Faster, Your Reliable Ride-Hailing Partner
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-[54.5em] text-center text-[#F8F8F8] py-3 text-[1em] md:text-[0.875em] lg:text-[18px]"
        >
          Experience seamless, affordable rides across the city with our
          user-friendly app. Book in seconds, track in real-time, and enjoy
          safe, comfortable journeys every time. Whether it's daily commutes or
          late-night adventures, we've got you covered.
        </motion.p>

        <motion.div variants={item}>
          <CtaSoild text="Download the app" />
        </motion.div>
      </motion.div>

      {/* Arrow Up - animates from bottom */}
      <motion.div
        variants={arrowUpVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="absolute bottom-0 left-[53px] max-sm:w-[54.81px] max-sm:left-[25px]"
      >
        <Image src={arrowup} alt="arrow up" />
      </motion.div>
    </section>
  );
};

export default Hero;
