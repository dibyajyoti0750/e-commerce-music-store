import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] h-auto object-cover"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Rudra & Son's Music House—a family-run store built on a
            lifelong love for Indian classical music. We offer a carefully
            curated collection of handcrafted string instruments like sitars,
            tanpuras, veenas, and sarods, made by artisans who've been
            perfecting their craft for generations. Whether you're just
            beginning or have years of experience, we're here to help you find
            an instrument that truly resonates with you.
          </p>
          <p>
            We believe an instrument should carry more than just sound—it should
            carry soul, tradition, and a sense of connection. Every piece we
            offer is chosen with care, so your music can be as meaningful as it
            is beautiful.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to keep the soul of Indian classical music alive by
            providing beautifully crafted string instruments and supporting
            musicians at every stage of their journey. We're here to make
            tradition accessible, meaningful, and deeply personal.
          </p>
        </div>
      </div>

      <div className="text-2xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Authentic Craftsmanship:</b>
          <p className="text-gray-600">
            We source our instruments directly from seasoned artisans across
            India, preserving the rich heritage and soul of classical Indian
            music.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality You Can Trust:</b>
          <p className="text-gray-600">
            Every instrument is hand-inspected for tonal precision, build
            quality, and durability to ensure a premium musical experience.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Personalized Support:</b>
          <p className="text-gray-600">
            Whether you're a beginner or a maestro, our team offers expert
            guidance to help you find the perfect instrument suited to your
            needs.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
