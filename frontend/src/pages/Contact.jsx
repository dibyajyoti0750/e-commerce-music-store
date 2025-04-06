import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsletterBox";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px] h-auto object-cover"
          src={assets.contact_img}
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            Dadpur, Tabupara 241, Dhulasimla
            <br />
            Uluberia I, Howrah - 711315
            <br />
            West Bengal, India
          </p>
          <p className="text-gray-500 mt-2">
            Tel:{" "}
            <a href="tel:+918777435274" className="underline">
              (+91) 87774 35274
            </a>
            <br />
            Email:{" "}
            <a href="mailto:sambhumondal572@gmail.com" className="underline">
              sambhumondal572@gmail.com
            </a>
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Join the Legacy of Craftsmanship
          </p>
          <p className="text-gray-500">
            Rudra & Son's Music House welcomes skilled artisans and passionate
            musicians dedicated to preserving the art of Indian classical
            instruments.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            View Openings
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
