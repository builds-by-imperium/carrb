"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import CtaSolid from "../btn/CtaSolid";
import CtaGhost from "../btn/CtaGhost";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

export const Nav = () => {
  const pathname = usePathname(); // <-- get current route
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen((prev: boolean) => !prev);
  };

  const isActive = (path: string) =>
    pathname === path ? "text-[#158AFF] font-semibold" : "text-[#323232]";
  return (
    <>
      <nav className="bg-white flex items-center justify-between h-[70px] md:h-20 px-[6%] md:px-[4%] lg:px-[8%] sticky top-0 z-100 rounded-b-lg">
        {/* Logo */}
        <div className="logo">
          <Image
            src={logo}
            alt="carrb"
            className="max-w-[6.8125em] max-h-[2.12em]"
          />
        </div>

        {/* Main Links */}
        <ul className="md:flex items-center gap-7 font-normal hidden">
          <li
            className={`text-[1em] md:text-[1.12rem] leading-5 ${isActive(
              "/"
            )}`}
          >
            <Link href="/">Home</Link>
          </li>

          <li
            className={`text-[1em] md:text-[1.120rem] leading-5 ${isActive(
              "/about"
            )}`}
          >
            <Link href="/about">About Us</Link>
          </li>

          <li
            className={`text-[1em] md:text-[1.120rem] leading-5 ${isActive(
              "/drive"
            )}`}
          >
            <Link href="/drive">Become a driver</Link>
          </li>

          <li
            className={`text-[1em] md:text-[1.120rem] leading-5 ${isActive(
              "/ride"
            )}`}
          >
            <Link href="/ride">Become a rider</Link>
          </li>
        </ul>

        {/* CTA Buttons */}
        <ul className="lg:flex items-center gap-5.75 hidden md:hidden">
          {/* <CtaGhost text={"Sign in"} /> */}
          <CtaSolid text={"Get the app"} />
        </ul>

        {/* Dropdown cards */}
        {/* <div className="drop-down absolute shadow-2xl lg:top-21.25 sm:left-187.5 2xl:top-20 w-76.25 h-37.5 bg-[#FFFFFF] md:left-247.75 2xl:left-305 rounded-[0.875rem] px-5 lg:flex hidden flex-col justify-center gap-5 z-10">
        <div className="flex items-center justify-between">
          <div>
            <Image src={car} alt="car icon" />
          </div>
          <div>
            <h5 className="font-semibold text-[1rem] text-[#000000]">
              Become a driver
            </h5>
            <p className="text-[0.75rem]">Make money on your terms</p>
          </div>
          <div>
            <Image src={next} alt="next arrow" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Image src={avatar} alt="avatar icon" />
          </div>
          <div>
            <h5 className="font-semibold text-[1rem] text-[#000000]">
              Become a driver
            </h5>
            <p className="text-[0.75rem]">Make money on your terms</p>
          </div>
          <div>
            <Image src={next} alt="next arrow" />
          </div>
        </div>
      </div> */}

        {/* Mobile menu button */}
        <button className="md:hidden block" onClick={handleNavOpen}>
          {navOpen ? (
            <GrClose size={1.75 * 16} />
          ) : (
            <FiMenu size={1.75 * 16} />
          )}
        </button>
      </nav>
      {navOpen && <MobileNav />}
    </>
  );
};
