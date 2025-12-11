import React from "react";
import man1 from "@/assets/ceo.png";
import quote from "@/assets/quotes.png";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className=" px-[6%] md:px-[4%] lg:px-[8%] flex flex-col my-15 max-md:gap-30 gap-50 items-center justify-center">
      <div className="flex max-md:flex-col justify-center max-md:gap-[30px] gap-[77px] w-full">
        <Image priority src={man1} alt="man1" />
        <div className="md:w-[708px] flex flex-col gap-[21px]">
          <Image priority src={quote} alt="quote" />
          <div className=" flex flex-col gap-[21px] ml-10 md:ml-20">
            <p className="text-[#07102A] max-md:text-[16px] text-[18px] font-medium">
              Although some days might be challenging, it’s when you step back
              and realise what you’ve accomplished the knowledge you’ve shared,
              the relationships you’ve formed, what you’ve learned, and the
              value you’ve added that everything clicks.
            </p>
            <h4 className="font-semibold max-md:text-[18px] text-[20px]">
              Nlebemchukwu Joshua{" "}
            </h4>
            <p className="text-[16px] text-[#404A66] font-medium">
              Head of product strategy
            </p>
          </div>
        </div>
      </div>
      <div className="flex max-md:flex-col flex-row-reverse justify-center gap-[77px] w-full">
        <Image priority src={man1} alt="man1" />
        <div className="md:w-[708px] flex flex-col gap-[21px]">
          <Image priority src={quote} alt="quote" />
          <div className=" flex flex-col gap-[21px] ml-10 md:ml-20">
            <p className="text-[#07102A] max-md:text-[16px] text-[18px] font-medium leading-6">
              Although some days might be challenging, it’s when you step back
              and realise what you’ve accomplished the knowledge you’ve shared,
              the relationships you’ve formed, what you’ve learned, and the
              value you’ve added that everything clicks.
            </p>
            <h4 className="font-semibold max-md:text-[18px] text-[20px]">
              Nlebemchukwu Joshua{" "}
            </h4>
            <p className="text-[16px] text-[#404A66] font-medium">
              Head of product strategy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
