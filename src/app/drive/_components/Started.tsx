"use client";
import React from "react";
import StartedItem from "./StartedItem";
import Image from "next/image";
import LUp from "@/assets/LUp.png";
import LDown from "@/assets/LDown.png";

interface StartedProps {
  items: {
    icon: any;
    title: string;
    text: string;
  }[];
}

const Started = ({ items }: StartedProps) => {
  return (
    <section className="bg-[#0B3B87] py-20 flex flex-col justify-center relative">
      <Image src={LUp} alt="decoration" className="absolute top-0 right-0" />

      <div className="px-[6%] md:px-[4%] lg:px-[8%]">
        <h2 className="text-[36px] font-semibold leading-[52px] text-white my-5 md:my-10">
          Get Started
        </h2>

        <div className="flex max-md:flex-col max-md:gap-[34px] justify-between items-center">
          {items.map((item, index) => (
            <StartedItem
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>

      <Image
        src={LDown}
        alt="decoration"
        className="absolute bottom-0 left-0"
      />
    </section>
  );
};

export default Started;
