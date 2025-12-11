import React from "react";
import CtaSoild from "../btn/CtaSolid";

const Banner = () => {
  return (
    <div className="flex flex-col max-md:gap-10 gap-15 max-md:my-7">
      {" "}
      {/* 60px = 3.75rem */}
      <h2 className="text-center font-semibold text-[#07102A] text-[24px] md:text-[2.5rem]">
        Download Our App
      </h2>
      <div className="banner md:w-[90%] max-md:p-2.5 h-[511px] md:h-95 rounded-[1.25rem] mx-auto flex justify-center items-center flex-col gap-3">
        <h2 className="font-bold text-white text-[18px] md:text-[2.5rem] text-center">
          Request In Seconds, Ride In Minutes.
        </h2>

        <p className="font-semibold text-white text-[16px] md:text-[1.5rem] text-center">
          Available for iOS and Android devices.
        </p>

        <CtaSoild text="Get the app" />
      </div>
    </div>
  );
};

export default Banner;
