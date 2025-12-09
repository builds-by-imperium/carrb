import React from "react";

const CtaSoild = ({ text }: any) => {
  return (
    <button
      className="bg-[#016FED] hover:bg-[#017bed] transition-all ease-in-out cursor-pointer 
             text-[1.120em] py-3.5 px-[1.625em] text-white rounded-lg font-semibold gap-1.5 
             leading-5 min-w-[8.25em]"
    >
      {text}
    </button>
  );
};

export default CtaSoild;
