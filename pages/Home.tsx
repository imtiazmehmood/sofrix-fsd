"use client";
import Image from "next/image";
import React, { useState } from "react";
import Apple from "../app/assets/svg/Apple.svg";
import Google from "../app/assets/svg/Google.svg";
import Faces from "../app/assets/svg/Faces.svg";
import { Input } from "@/components/Input";
import Button from "@/components/Button";
const Home = () => {
  const [value, setlue] = useState({
    email: "",
    confirmEmail: "",
    password: "",
  });
  return (
    <div>
      <div className="flex w-full justify-evenly">
        {/* Left Section FAANG */}
        <div className="flex flex-col items-center justify-center lg:max-w-[460px] text-center lg:text-left">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-bluechill lg:leading-tight">
            FAANG INVESTING COMMUNITY
          </p>
          <span className="mt-4 space-y-2 text-base sm:text-lg md:text-xl lg:text-[29px] text-bluechilldark font-light">
            <p>We help people working in BigTech</p>
            <p> with data and insights</p>
            <p>make better financial decisions</p>
            <p>provided by AI</p>
          </span>
        </div>

        {/* Right Section (Form) */}
        <div className="hidden lg:flex flex-col items-center w-[500px] lg:w-[591px]">
          <div className="relative p-6  bg-CardBg bg-cover  rounded-[50px] ">
            <div className="bg-white p-6 rounded-[25px] h-full flex flex-col items-center">
              <p className="text-xl md:text-2xl font-semibold text-center mb-6">
                Welcome Back
              </p>

              {/* Input Fields */}
              <div className="space-y-4 w-full">
                <Input
                  value={value.email}
                  type="text"
                  placeholder="Enter your email address"
                  onChange={(e) => setlue({ ...value, email: e.target.value })}
                  className="w-full"
                />
                <Input
                  value={value.confirmEmail}
                  type="text"
                  placeholder="Confirm email address"
                  onChange={(e) =>
                    setlue({ ...value, confirmEmail: e.target.value })
                  }
                  className="w-full"
                />
                <Input
                  value={value.password}
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) =>
                    setlue({ ...value, password: e.target.value })
                  }
                  className="w-full"
                />
                <p className="text-bluechill font-medium text-sm mt-1 text-right">
                  Forgot Password?
                </p>
              </div>

              {/* Button */}
              <Button label="Log In" className="mt-6 w-full" />
            </div>
          </div>

          {/* Account Message */}
          <div className="flex flex-row mt-6 space-x-2 text-center">
            <p className="text-bluechilldark font-normal text-base md:text-lg">
              Don't have an account?
            </p>
            <p className="text-bluechill font-bold text-base md:text-lg hover:cursor-pointer">
              Create One
            </p>
          </div>
        </div>
      </div>
      {/* SOCIAL ICON VIEW */}
      <div className="flex lg:hidden flex-col py-8 items-center gap-y-4 justify-center">
        <Image src={Apple} alt="apple button" className="h-[60px] w-[210px]" />
        <Image
          src={Google}
          alt="google button"
          className="h-[60px] w-[210px]"
        />
      </div>
      {/* SIGNUP TEXT IEW */}
      <div className=" lg:hidden flex flex-row text-center lg:max-w-[260px]">
        <p className="text-bluechill text-[17px] font-medium">
          <span className="text-bluechilldark font-bold text-[16px] hover:cursor-pointer">
            Sign up today
          </span>
          <span>
            {" "}
            and manage your portfolio like a pro with a personalized assistant
            and access to a trusted tech community of 1,200 members who
            connected $150M+ of total assets.
          </span>
        </p>
      </div>
      {/* Background Section */}
      <div className="hidden lg:block w-full h-auto mt-10 -mb-5">
        <Image src={Faces} alt="faces" />
      </div>
    </div>
  );
};

export default Home;
