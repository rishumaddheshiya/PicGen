import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
    >
      {/* Gradient Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text mb-3">
        Create AI Images
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Turn your imagination into stunning visuals ✨
      </p>

      {/* Content Section */}
      <div className="flex flex-col gap-6 md:gap-14 md:flex-row items-center bg-white shadow-xl rounded-xl p-6 md:p-10 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
        {/* Image with Glow Effect */}
        <motion.img
          whileHover={{ scale: 1.05 }}
          className="w-80 xl:w-96 rounded-lg shadow-lg border border-gray-300"
          src={assets.img6}
          alt="AI Generated"
        />

        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-semibold max-w-lg mb-4 text-gray-800">
            Introducing the <span className="text-blue-500">AI-Powered</span>{" "}
            Text to Image Generator
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Easily bring your ideas to life with our advanced AI image
            generator. Whether you need stunning visuals or unique imagery, our
            tool transforms your text into eye-catching images with just a few
            clicks.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Simply type a text prompt, and our AI will generate high-quality
            images in seconds. From product visuals to character designs and
            portraits, even concepts that don’t yet exist can be visualized
            effortlessly. The creative possibilities are limitless! 🚀
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
