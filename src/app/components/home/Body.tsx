import React from "react";
import CtaSoild from "../btn/CtaSolid";
import SmarterRides from "./SmarterRides";
import StepServices from "../home/StepServices";
import Banner from "./Banner";
import steps from "@/assets/steps.png";

import Heading from "./Heading";

const Body = () => {
  return (
    <section className="w-full px-[6%] md:px-[4%] lg:px-[8%] mx-auto h-auto gap-20 flex flex-col justify-center">
      <Heading />
      <SmarterRides />
      <StepServices
        heading="Quick Steps To Use Our Services"
        title1="Download the app"
        paragraph1="Go to your smartphone's app store (such as Google Play Store or
              Apple App Store), search for the ridesharing app you want to use,
              and download it to your device."
        title2="Sign Up/Login"
        paragraph2="Once the app is installed, open it and either sign up for a new
              account or log in if you already have one. You'll need to provide
              some basic information like your name, email address, and payment
              details."
        title3="Request A Ride"
        paragraph3={`Confirm your pickup and drop-off locations, then tap on the
              "Request Ride" button. The app will match you with a nearby
              driver, and you can track their arrival on the map. Once they
              arrive, hop in and enjoy your ride!`}
        btnText="Get Started"
        imageUrl={steps}
      />
      <Banner />
    </section>
  );
};

export default Body;
