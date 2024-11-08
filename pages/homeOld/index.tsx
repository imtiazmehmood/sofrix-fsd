"use client";

import Button from "@/components/Button";
import { Input } from "@/components/Input";
import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center mt-12 bg-white px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center space-y-8 lg:space-y-0 lg:space-x-10">
        {/* Left Section (Text) */}
        <div className="max-w-lg text-center lg:text-left">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-bluechill leading-tight">
            FAANG INVESTING COMMUNITY
          </p>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-bluechilldark font-medium leading-7">
            We help people working in BigTech make better financial decisions
            with data and insights provided by AI.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="flex flex-col items-center w-full max-w-md">
          <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 bg-cardBg bg-cover w-full h-full rounded-2xl shadow-lg">
            <div className="bg-white p-6 sm:p-8 rounded-xl h-full flex flex-col items-center">
              <p className="text-xl md:text-2xl font-semibold text-center mb-6">
                Welcome Back
              </p>

              {/* Input Fields */}
              <div className="space-y-4 w-full">
                <Input
                  value="Hi"
                  type="text"
                  onChange={() => {}}
                  className="w-full"
                />
                <Input
                  value="Hi"
                  type="text"
                  onChange={() => {}}
                  className="w-full"
                />
                <Input
                  value="Hi"
                  type="text"
                  onChange={() => {}}
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

      {/* Background Section */}
      <div className="w-full h-[200px] sm:h-[258px] bg-facesBg bg-cover mt-10"></div>
    </div>
  );
}

export default Home;
