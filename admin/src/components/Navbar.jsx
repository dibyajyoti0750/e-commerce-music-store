import React from "react";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-14" src={assets.logo} alt="Logo" />
      <button
        onClick={() => {
          setToken("");
          toast.info("You have been logged out successfully.");
        }}
        className="bg-gray-700 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base hover:bg-gray-800 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
