import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { user, setShowLogin } = useContext(AppContext);

  const handleClick = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  // Array of 5 different sample images
  const sampleImages = [
    assets.img1,
    assets.img2,
    assets.img3,
    assets.img4,
    assets.img5,
  ];

  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center my-20 px-4"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-stone-500 inline-flex text-center bg-white gap-2 px-6 py-1 rounded-full border border-neutral-500 shadow-md"
      >
        <p className="font-medium">Best AI text-to-image generator</p>
        <img src={assets.star_icon} alt="Star" />
      </motion.div>

      {/* Main Heading with Poppins Font */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
        className="text-4xl sm:text-7xl font-bold max-w-[320px] sm:max-w-[650px] mx-auto mt-10 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-poppins"
      >
        Turn text into <span className="text-blue-600">stunning images</span>,
        in seconds.
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-center max-w-xl mx-auto mt-5 text-gray-600 text-lg"
      >
        Unleash your creativity with AI. Type your vision and transform it into
        breathtaking artwork within seconds.
      </motion.p>

      {/* Generate Button */}
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 20px rgba(0, 0, 255, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
        onClick={handleClick}
        className="sm:text-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 w-auto mt-8 px-12 py-3 flex items-center gap-2 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        Generate Images
        <img className="w-6" src={assets.star_group} alt="Star Group" />
      </motion.button>

      {/* Sample Images - 5 Different Images */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-wrap justify-center mt-16 gap-4"
      >
        {sampleImages.map((imgSrc, index) => (
          <motion.img
            className="rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-12 shadow-md"
            src={imgSrc}
            key={index}
            width={80}
            alt={`Sample Art ${index + 1}`}
          />
        ))}
      </motion.div>

      {/* Generated Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-3 text-neutral-600 text-sm sm:text-base font-medium"
      >
        Generated images from{" "}
        <span className="font-bold text-blue-600">PicGen</span>
      </motion.p>
    </motion.div>
  );
};

export default Header;
