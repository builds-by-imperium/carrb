import React from "react";
import CtaSoild from "../btn/CtaSolid";

const Heading = () => {
  return (
    <div className="heading">
      <h2 className="font-inter font-semibold md:text-[2.5em] text-[24px] text-center my-15 sm:text-[24px] max-w-[17em] mx-auto leading-snug">
        Turn Your City Drives Into Earnings With{" "}
        <span className="text-[#013D9B]">Carrb</span>.
      </h2>

      <div className="flex max-md:flex-col-reverse flex-row items-center h-[548px] m-auto rounded-[20px]  ">
        <div className="writeup bg-[#013D9B] w-full flex flex-col justify-center md:w-3/5 h-full p-8 text-white max-md:rounded-b-[20px] md:rounded-l-[20px]">
          <div className=" flex flex-col justify-center items-start md:max-w-[35.8125em]">
            <h2 className="font-inter font-bold text-[1.25em] md:text-[2em] leading-snug tracking-normal capitalize mb-4 max-w-full md:max-w-[35.8125em]">
              Make your own driving schedule, earn accordingly.
            </h2>

            <p className="mt-2 mb-6 xs:text-[1.25em] md:text-[1.13em]">
              Join Carrb and enjoy the freedom to set your own hours. Get paid
              for every ride you give, and watch your earnings grow. It’s the
              perfect way to be your own boss and maximize your income
              potential. Sign up today!
            </p>

            <CtaSoild text="Signup" />
          </div>
        </div>
        <div className="earning flex flex-col md:flex-row items-center gap-8 max-md:rounded-t-[20px] md:rounded-r-[20px] h-full md: w-full md:w-1/2"></div>
      </div>
    </div>
  );
};

export default Heading;
