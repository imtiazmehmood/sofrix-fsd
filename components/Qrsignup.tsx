import React from "react";
import Womens from "../app/assets/svg/Womens.svg";
import BlueBg from "../app/assets/svg/BlueBg.svg";
import Qr from "../app/assets/svg/Qr.svg";
import Image from "next/image";
function Qrsignup() {
  return (
    <div className="hidden lg:flex gap-x-5 h-[680px] bg-BlueBg bg-cover items-center px-5">
      <div className=" w-[418px] h-[490px] bg-white rounded-[25px] p-5">
        <div className="flex px-6 flex-col w-full h-full items-center justify-center bg-bluechill rounded-[25px]">
          <Image src={Qr} alt="qr code" className=" w-[200px] h-[200px]" />
          <p className="font-medium text-[45px] mt-5 text-white">Sign Up</p>
        </div>
      </div>
      <div className="flex items-center justify-between relative w-full h-[490px] bg-white rounded-[25px] p-4 pb-3">
        <Image src={Womens} alt="womens" className="object-cover" />
        <div className="flex max-w-[522px] min-h-[202px] items-center text-left text-wrap pr-[20px]">
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
      </div>
    </div>
  );
}

export default Qrsignup;
