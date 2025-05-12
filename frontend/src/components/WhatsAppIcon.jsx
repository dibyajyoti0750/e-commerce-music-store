import React from "react";
import { assets } from "../assets/assets";

const WhatsAppIcon = () => {
  const phoneNumber = "918777435274";
  const message = "Hello! I have a question about your products.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <img
        src={assets.whatsapp_icon}
        alt="Chat with us on WhatsApp"
        className="w-14 h-14 md:w-16 md:h-16 hover:scale-110 transition-transform duration-200"
      />
    </a>
  );
};

export default WhatsAppIcon;
