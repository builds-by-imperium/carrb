import CtaSoild from '@/app/components/btn/CtaSolid';
import Image from 'next/image';
import React from 'react'
import ceo from "@/assets/ceo.png";


const Letter = () => {
  return (
    <div className="max-md:h-auto h-[60vh] flex max-md:flex-col-reverse gap-5 items-center justify-between px-[6%] md:px-[4%] lg:px-[8%] my-5">
      <div className="w-[55%] max-md:w-[95%] flex flex-col gap-[1.3125em]">
        <h2 className="capitalize font-semibold text-[#07102A] text-[2.25em]">
          A letter from our CEO
        </h2>
        <p className="text-[#404A66] font-light text-[1em]">
          Read about our team’s commitment to provide everyone on our global
          platform with the technology that can help them move ahead.
        </p>
        <div className="">
          <CtaSoild text="Read Grahams Letter" />
        </div>
      </div>
      <div className="">
        <Image src={ceo} alt="CEO" className="" />
      </div>
    </div>
  );
}

export default Letter