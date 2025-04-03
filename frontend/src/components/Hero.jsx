import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-300 rounded-lg overflow-hidden my-2">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center p-6 sm:p-10 lg:p-14">
        <div className="text-[#414141] space-y-4 md:space-y-6">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 md:w-16 h-[2px] bg-[#414141] flex-shrink-0" />
            <p className="font-medium text-sm md:text-lg tracking-wide">
              OUR BESTSELLERS
            </p>
          </div>

          <h1 className="prata-regular text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-snug">
            The Soul of Indian Music
          </h1>

          <div className="flex items-center gap-3 md:gap-4 group cursor-pointer">
            <p className="font-semibold text-base md:text-lg hover:opacity-80 transition-opacity">
              SHOP NOW
            </p>
            <div className="w-10 md:w-16 h-[1px] bg-[#414141] flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2 aspect-square sm:aspect-auto">
        <img
          className="w-full h-full object-cover"
          src={assets.hero_img}
          alt="Indian musical instrument"
        />
      </div>
    </div>
  );
};

export default Hero;
