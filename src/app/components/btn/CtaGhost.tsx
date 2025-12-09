import React from "react";

const CtaGhost = ({ text }: any) => {
  return (
    <button className="bg-transparent text-[1.120em] cursor-pointer text-[#323232] font-semibold leading-5">
      {text}
    </button>
  );
};

export default CtaGhost;
