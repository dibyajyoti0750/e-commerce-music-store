import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import CurrencySelector from "../components/CurrencySelector";
import WhatsAppIcon from "../components/WhatsAppIcon";

const Home = () => {
  return (
    <div>
      <CurrencySelector />
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
      <WhatsAppIcon />
    </div>
  );
};

export default Home;
