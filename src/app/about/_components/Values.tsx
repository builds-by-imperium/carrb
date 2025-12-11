import React from "react";

const Values = () => {
  return (
    <section className="bg-[#0B3B87] w-full h-auto md:h-[50vh] px-[6%] md:px-[4%] lg:px-[8%] flex justify-center flex-col gap-[21] max-md:py-10 max-md:my-5 max-lg:py-15 lg:h-auto lg:py-20">
      <h2 className="text-[36px] font-semibold leading-[52px] text-white">
        Our Values
      </h2>
      <div className="grid max-md:grid-cols-1 grid-cols-2 gap-[35px] md:gap-[59px]">
        <div className="">
          <h3 className="font-medium max-md:text-[24px] text-[32px] text-white">
            Trust
          </h3>
          <p className="max-md:text-[14px] text-[18px] text-white leading-6">
            Everything we do is built on trust in our experts and fellow team
            members. We’re transparent about what we can and can’t do.
          </p>
        </div>

        <div className="">
          <h3 className="font-medium max-md:text-[24px] text-[32px] text-white">
            Entrepreneurship
          </h3>
          <p className="max-md:text-[14px] text-[18px] text-white leading-6">
            We empower freelancers and founders to grow their businesses and be
            their own bosses.
          </p>
        </div>
        <div className="">
          <h3 className="font-medium max-md:text-[24px] text-[32px] text-white">
            Great Experience
          </h3>
          <p className="max-md:text-[14px] text-[18px] text-white leading-6">
            Unlike platforms that prioritize one side over the other, we ensure
            companies and marketers are excited to work with us.
          </p>
        </div>

        <div className="">
          <h3 className="font-medium max-md:text-[24px] text-[32px] text-white">
            Professionalism
          </h3>
          <p className="max-md:text-[14px] text-[18px] text-white leading-6">
            We hold our employees and experts to the highest standards - a
            crucial edge in the labor market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Values;
