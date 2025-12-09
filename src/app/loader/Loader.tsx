import Image from "next/image";
import React from "react";
import Logo from "../../assets/logo.png";

const Loader = () => {
  return (
    <section className="flex items-center justify-center max-md:h-screen h-[80vh]">
      {/* <Image
        src="/logo.png"
        alt="Carrb"
        className="animate-pulse"
        width={150}
        height={150}
      /> */}
      <Image src={Logo} alt="Carrb" className="animate-pulse " />
    </section>
  );
};

export default Loader;
