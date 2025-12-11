// StartedItem.tsx
"use client";
import Image from "next/image";
import Icons from "./Icons";

interface ItemProps {
  icon: any;
  title: string;
  text: string;
}

const StartedItem = ({ icon, title, text }: ItemProps) => {
  return (
    <div className="flex gap-[18px] md:w-[348px] flex-col">
      <Icons name={icon} alt="calender icon" />

      <div className="flex flex-col max-md:gap-2.5 gap-[18px]">
        <h3 className="font-semibold text-[20px] text-white capitalize">
          {title}
        </h3>
        <p className="max-md:text-[14px] text-[18px] font-light text-white">
          {text}
        </p>
      </div>
    </div>
  );
};

export default StartedItem;
