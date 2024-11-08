"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "..//app/assets/svg/Logo.svg";
import Menu from "..//app/assets/svg/Menu.svg";
function Navbar() {
  const navItems = ["App", "Security", "Contact"];

  return (
    <nav className="flex flex-col w-full py-4 px-[20px] lg:container lg:mx-auto lg:px-20">
      <div className="flex lg:hidden justify-end">
        <Image src={Menu} alt="menu" />
      </div>
      <div className="flex items-center justify-between w-full">
        {/* Logo and Title */}
        <div className="flex flex-col lg:flex-row items-center justify-center md:justify-start  w-full">
          <Image
            alt="logo"
            src={Logo}
            className="w-8 h-auto sm:w-10 md:w-12 lg:w-14"
          />
          <span className="flex items-center ml-2 space-x-1 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            <p className="text-bluechill">Stock</p>
            <p className="text-bluechilldark">Clubs</p>
          </span>
        </div>

        {/* Navigation Links (only on large screens and up) */}
        <div className="hidden lg:flex gap-8 ">
          {navItems.map((item, idx) => (
            <Link key={`link=${idx}`} href={`/${item.toLowerCase()}`}>
              <p className="font-bold text-base lg:text-lg xl:text-xl text-bluechill hover:text-bluechilldark">
                {item}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
