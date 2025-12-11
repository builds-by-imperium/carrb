import Image from "next/image";
import React from "react";

const Icons = ({ name, alt }: any) => {
  return (
    <div className="w-[76px] h-[76px] rounded-xl bg-[#BFDBFB] flex justify-center items-center">
      <Image src={name} alt={alt} />
    </div>
  );
};

export default Icons;
