import React from "react";
import steps from "@/assets/steps.png";
import Image from "next/image";
import CtaSoild from "../btn/CtaSolid";

const StepServices = () => {
  return (
    <section className="flex max-md:flex-col items-center gap-[3.813em]">
      <div className="max-md:w-full w-[80%]">
        <Image src={steps} alt="steps" className="w-full" />
      </div>
      <div className="flex gap-[2.125em] flex-col w-full">
        <h2 className="font-semibold text-[#07102A] max-md:text-[24px] text-[2.25em]">
          Quick Steps To Use Our Services
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
              Download the app
            </h3>
            <p className="text-[#404A66] text-[1em]">
              Go to your smartphone's app store (such as Google Play Store or
              Apple App Store), search for the ridesharing app you want to use,
              and download it to your device.
            </p>
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
              Sign Up/Login
            </h3>
            <p className="text-[#404A66] text-[1em]">
              Once the app is installed, open it and either sign up for a new
              account or log in if you already have one. You'll need to provide
              some basic information like your name, email address, and payment
              details.
            </p>
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
              Request A Ride
            </h3>
            <p className="text-[#404A66] text-[1em]">
              Confirm your pickup and drop-off locations, then tap on the
              "Request Ride" button. The app will match you with a nearby
              driver, and you can track their arrival on the map. Once they
              arrive, hop in and enjoy your ride!
            </p>
            <div className="w-[14.438em] max-md:hidden">
              <CtaSoild text="Get Started" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepServices;
