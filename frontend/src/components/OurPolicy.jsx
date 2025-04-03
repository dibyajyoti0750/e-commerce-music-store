import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.replace_icon} className="w-12 m-auto mb-5" alt="" />
        {/* <a href="https://www.flaticon.com/free-icons/replace" title="replace icons">Replace icons created by Uniconlabs - Flaticon</a> */}
        <p className="font-semibold">Hassle-Free Replacements</p>
        <p className="text-gray-400">
          Easily replace your product within 7 days if you face any issues.
        </p>
      </div>

      <div>
        <img src={assets.check_icon} className="w-12 m-auto mb-5" alt="" />
        {/* <a href="https://www.flaticon.com/free-icons/yes" title="yes icons">Yes icons created by meaicon - Flaticon</a> */}
        <p className="font-semibold">7-Day Replacement Guarantee</p>
        <p className="text-gray-400">
          We ensure a quick replacement if your product is damaged or incorrect.
        </p>
      </div>

      <div>
        <img src={assets.support_icon} className="w-12 m-auto mb-5" alt="" />
        {/* <a href="https://www.flaticon.com/free-icons/customer-service" title="customer service icons">Customer service icons created by apien - Flaticon</a> */}
        <p className="font-semibold">Reliable Customer Support</p>
        <p className="text-gray-400">
          Have questions? Our team is available 24/7 to assist you.
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
