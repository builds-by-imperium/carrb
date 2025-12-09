import React from "react";
import CtaSoild from "../btn/CtaSolid";
import SmarterRides from "./SmarterRides";
import StepServices from "../home/StepServices";
import Banner from "./Banner";
import Footer from "../Footer";
import Heading from "./Heading";

const Body = () => {
  return (
    <section className="w-full px-[6%] md:px-[4%] lg:px-[8%] mx-auto h-auto gap-20 flex flex-col justify-center">
      <Heading />
      <SmarterRides />
      <StepServices />
      <Banner />
    </section>
  );
};

export default Body;
