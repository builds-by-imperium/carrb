import React from "react";
import Image from "next/image";
import CtaSoild from "../btn/CtaSolid";

const StepServices = ({
  heading,
  title1,
  paragraph1,
  title2,
  paragraph2,
  title3,
  paragraph3,
  btnText,
  imageUrl,
}: any) => {
  return (
    <section className="flex max-md:flex-col items-center gap-[3.813em]">
      <div className="max-md:w-full w-[80%]">
        <Image src={imageUrl} alt="steps" className="w-full" />
      </div>
      <div className="flex gap-[2.125em] flex-col w-full">
        <h2 className="font-semibold text-[#07102A] max-md:text-[24px] text-[2.25em]">
          {heading}
        </h2>

        {/* Step 1 */}
        <div className="flex items-start gap-[1.438em] w-full">
          <div className="bg-[#013D9B] w-[2em] h-[2em] rounded-full flex items-center justify-center shrink-0 mt-[0.063em]">
            <p className="text-center text-white text-[0.924em] font-semibold">
              1
            </p>
          </div>
          <div className="flex flex-col gap-[0.938em]">
            <h3 className="text-[1.25em] font-semibold text-[#07102A]">
              {title1}
            </h3>
            <p className="text-[#404A66] text-[1em]">{paragraph1}</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-[1.438em] w-full">
          <div className="bg-[#013D9B] w-[2em] h-[2em] rounded-full flex items-center justify-center shrink-0 mt-[0.063em]">
            <p className="text-center text-white text-[0.924em] font-semibold">
              2
            </p>
          </div>
          <div className="flex flex-col gap-[0.938em]">
            <h3 className="text-[1.25em] font-semibold text-[#07102A]">
              {title2}
            </h3>
            <p className="text-[#404A66] text-[1em]">{paragraph2}</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-[1.438em] w-full">
          <div className="bg-[#013D9B] w-[2em] h-[2em] rounded-full flex items-center justify-center shrink-0 mt-[0.063em]">
            <p className="text-center text-white text-[0.924em] font-semibold">
              3
            </p>
          </div>
          <div className="flex flex-col gap-[0.938em] w-[60%] max-md:w-full">
            <h3 className="text-[1.25em] font-semibold text-[#07102A]">
              {title3}
            </h3>
            <p className="text-[#404A66] text-[1em]">{paragraph3}</p>
            <div className="w-[14.438em] max-md:hidden">
              <CtaSoild text={btnText} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepServices;
