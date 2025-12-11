import Link from "next/link";
import React from "react";
import CtaSoild from "../btn/CtaSolid";

const MobileNav = () => {
  return (
    <div className="bg-white py-7 -z-100 hidden max-md:block overfldow-hidden">
      <div className="flex items-center justify-center overflow-y-hidden">
        <ul className="text-center flex items-center justify-between flex-col gap-20">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link href="/about"> About Us</Link>
          </li>
          <li>
            {" "}
            <Link href="drive">Become a Driver</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="ride">Become a Rider</Link>
          </li>
          <CtaSoild text={"Signup"} />
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
