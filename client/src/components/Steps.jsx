import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "framer-motion";

const Steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-32 px-6"
    >
      {/* Gradient Heading for a Premium Look */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
        How It Works
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Transform Words Into Stunning Images ✨
      </p>

      {/* Steps Container */}
      <div className="space-y-8 w-full max-w-3xl">
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative flex items-center gap-6 p-6 bg-gradient-to-br from-gray-50 to-white shadow-xl border border-gray-200 rounded-2xl cursor-pointer transition-all duration-300"
          >
            {/* Background Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>

            {/* Animated Glowing Border on Hover */}
            <div className="absolute inset-0 border-2 border-transparent rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all duration-500"></div>

            {/* Step Icon */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full shadow-md">
              <img className="w-12" src={item.icon} alt={`Step ${index + 1}`} />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
