import Image from "next/image";
import down from "@/assets/arrow-circle-down.png";
import up from "@/assets/arrow-circle-up.png";
import React from "react";

const FaqQuestions = ({ title, text, isOpen, onToggle }: any) => {
  return (
    <div className="questions md:w-[70%] w-full md:mx-auto my-5">
      <div
        className={`question ${
          isOpen ? `bg-[#0B3B87]` : `bg-[#BFD8FB]`
        } px-[23px] py-[30px] rounded-[10px] cursor-pointer`}
        onClick={onToggle}
      >
        <div className=" flex items-center justify-between">
          <p
            className={`${
              isOpen ? `text-white` : `text-[#07102A]`
            } max-md:text-[12px] text-[24px] font-medium capitalize`}
          >
            {title}
          </p>
          <span>
            {isOpen ? (
              <Image src={up} alt="close" />
            ) : (
              <Image src={down} alt="open" />
            )}
          </span>
        </div>

        {isOpen && (
          <div className="py-10">
            <p className={`${isOpen ? `text-white` : `text-[#013D9B]`}`}>
              {text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqQuestions;
