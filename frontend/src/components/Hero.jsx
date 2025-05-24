import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const images = assets.hero_carousel; // An array of image URLs
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => setCurrentIndex(index);

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
            <NavLink
              to="/collection"
              className="font-semibold text-base md:text-lg hover:opacity-80 transition-opacity"
            >
              <p>SHOP NOW</p>
            </NavLink>
            <div className="w-10 md:w-16 h-[1.5px] bg-[#414141] flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* Hero Right Side: Sliding Carousel */}
      <div className="w-full sm:w-1/2 relative overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full flex-shrink-0 object-cover h-full"
            />
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-1.5 w-1.5 rounded-full ${
                currentIndex === idx ? "bg-white" : "bg-white/50"
              } transition-all duration-300`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
