import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 px-6 py-6 mt-20 bg-blue-200 text-white rounded-t-2xl shadow-xl border-t border-gray-700">
      {/* Logo with Hover Effect */}
      <img
        width={50}
        src={assets.logo_icon}
        alt="Logo"
        className="brightness-110 hover:scale-110 transition-transform duration-300 cursor-pointer"
      />
      <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
        PicGen
      </span>

      {/* Copyright Text */}
      <p className="flex-1 border-l border-gray-600 pl-6 text-sm text-gray-400 hidden sm:block">
        Copyright ©{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-semibold">
          PicGen
        </span>{" "}
        | All rights reserved.
      </p>

      {/* Social Media Icons with Light Background for Visibility */}
      <div className="flex gap-4">
        {[
          { icon: assets.facebook_icon, alt: "Facebook" },
          { icon: assets.instagram_icon, alt: "Instagram" },
          { icon: assets.twitter_icon, alt: "Twitter" },
        ].map((item, index) => (
          <div key={index} className="p-2 bg-white rounded-full">
            <img
              src={item.icon}
              width={30}
              alt={item.alt}
              className="cursor-pointer hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
