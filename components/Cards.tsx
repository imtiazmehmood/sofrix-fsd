import Image from "next/image";
import React from "react";
import Googlers from "../app/assets/svg/Googlers.svg";
import Community from "../app/assets/svg/Community.svg";
import Amazonians from "../app/assets/svg/Amazonians.svg";

const Cards = () => {
  return (
    <div className="py-[70px] px-[30px] w-full h-auto bg-DarkBlueBg bg-cover">
      <div className="flex flex-col lg:flex-row justify-center items-center py-[60px] bg-white rounded-[25px]">
        {/* Text Section */}
        <div className="w-full lg:w-[522px] text-center lg:text-start mb-8 lg:mb-0">
          <p className="text-bluechill text-[17px] lg:text-[22px] font-medium">
            <span className="text-bluechilldark font-bold hover:cursor-pointer">
              Connect your brokerage accounts
            </span>
            <span>
              <br />
              and get access to trading ideas,
              <br />
              <span>aggregated stats and discussion in</span>
              <br />
              <span> your tech investing community right</span>
              <br />
              <span>away.</span>
            </span>
          </p>
        </div>

        {/* Image Section with Padding */}
        <div className="relative w-full lg:w-[642px] pt-[56.25%] lg:pt-[45%] flex justify-center items-center p-5">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            {[
              { src: Amazonians, alt: "Amazonians", bottom: "30px" },
              { src: Googlers, alt: "Googlers", bottom: "25px" },
              { src: Community, alt: "Community", bottom: "5px" },
            ].map(({ src, alt, bottom }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className={`absolute bottom-[${bottom}] transition-transform duration-300 ease-in-out hover:scale-110`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
