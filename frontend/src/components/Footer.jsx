import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img
            src={assets.logo}
            className="mb-5 w-14 -rotate-[20deg]"
            alt="Logo"
          />
          {/* <a href="https://www.flaticon.com/free-icons/sitar" title="sitar icons">Sitar icons created by Three musketeers - Flaticon</a> */}
          <p className="w-full md:w-2/3 text-gray-600">
            Experience the soulful melodies of Indian classical music with our
            exquisite collection of handcrafted string instruments. From sitars
            to sarods and tanpuras, each piece is crafted with precision and
            tradition. Explore our store and bring home the essence of India's
            rich musical heritage. Harmony begins here.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a href="tel:+918777435274" className="underline">
                (+91) 87774 35274
              </a>
            </li>
            <li>
              <a href="mailto:sambhumondal572@gmail.com" className="underline">
                sambhumondal572@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @ thiswebsite_domain.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
