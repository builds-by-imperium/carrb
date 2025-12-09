import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="max-md:h-[618px] h-[325px] mt-20 px-[6%] md:px-[4%] lg:px-[8%] mx-auto gap-20 flex flex-col justify-between">
      <section className="flex max-md:flex-col justify-between gap-[42px]">
        <div className=" md:w-[518px] flex flex-col gap-[17px] max-md:h-[152.92px] h-[107.9]">
          {/* Logo */}
          <div className="logo">
            <Image
              src={logo}
              alt="carrb"
              className="max-w-[6.8125em] max-h-[2.12em]"
            />
          </div>
          <p className="text-[1em] text-[#545454]">
            Carrb reimagines your ride. We connect you with nearby drivers fast,
            optimize routes for speedy arrivals, and show upfront fares so you
            save. Plus, rigorous driver checks ensure a safe ride.
          </p>
        </div>
        <div className="flex max-md:flex-col gap-[54px] items-cente">
          <ul className="flex flex-col gap-3.5">
            <li className=" font-medium text-[20px]">Company</li>
            <li className="text-[16px] font-light">About Us</li>
          </ul>

          <ul className="flex flex-col gap-3.5">
            <li className=" font-medium text-[20px]">Products</li>
            <li className="text-[16px] font-light">Driver</li>
            <li className="text-[16px] font-light">Rider</li>
          </ul>

          <ul className="flex flex-col gap-3.5">
            <li className=" font-medium text-[20px]">Socials</li>
          </ul>
        </div>
      </section>
      {/* <div className="bg-[#1049A1] w-full !m-0 !p-0 h-[23px]"></div> */}
    </footer>
  );
};

export default Footer;
