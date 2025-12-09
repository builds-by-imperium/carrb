import Image from "next/image";
import React from "react";
import frame1 from "@/assets/frame.png";
import frame2 from "@/assets/frame2.png";
import frame3 from "@/assets/frame3.png";

const SmarterRides = () => {
  return (
    <section className="relative h-[42.54em] max-lg:h-[1765px] max-md:h-[1625px]">
      <div className="max-lg:h-[1325px] h-[24.9375em] bg-[#013D9B] w-full rounded-[1.25em]">
        <h2 className="max-md:text-[24px] text-[2em] font-bold text-white absolute top-[1.5em] left-[2.56%] w-[90%]">
          Smarter Rides, and Better Features
        </h2>
      </div>

      <div className="absolute top-[10.0625em] w-[95%] left-1/2 -translate-x-1/2 flex max-lg:flex-col gap-7 justify-between">
        <Image
          src={frame1}
          alt="frame1"
          className="max-md:w-[293px] max-md:h-[428.08px] m-auto"
        />
        <Image
          src={frame2}
          alt="frame2"
          className="max-md:w-[293px] max-md:h-[428.08px] m-auto"
        />
        <Image
          src={frame3}
          alt="frame3"
          className="max-md:w-[293px] max-md:h-[428.08px] m-auto"
        />
      </div>
    </section>
  );
};

export default SmarterRides;
