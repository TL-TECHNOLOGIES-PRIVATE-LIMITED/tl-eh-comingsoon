import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export const SocialLinks = () => (
  <div className="text-center space-y-4">
    <div className="flex justify-center space-x-6">
      <a href="https://www.instagram.com/tltechnologiespvtltd/" className="text-gray-300 hover:text-white transition-colors duration-200">
        <FaInstagram className="w-8 h-8" />
      </a>
      <a href="https://www.facebook.com/tltechnologiespvtltd/" target="_blank" className="text-gray-300 hover:text-white transition-colors duration-200">
        <FaFacebookF className="w-8 h-8" />
      </a>
      <a href="https://www.linkedin.com/company/tltechnologiespvtltd/" target="_blank" className="text-gray-300 hover:text-white transition-colors duration-200">
        <FaLinkedinIn className="w-8 h-8" />
      </a>
      <a target='_blank' href="https://api.whatsapp.com/send/?phone=%2B919061432814&text=Hello%2C+I+am+interested+to+know+more+about+PRODUCTS+%26+SERVICES&type=phone_number&app_absent=0" className="text-gray-300 hover:text-white transition-colors duration-200">
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  </div>
);