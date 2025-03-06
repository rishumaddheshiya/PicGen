import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const GenerateBtn = () => {
  const navigate = useNavigate();
  const { user, setShowLogin } = useContext(AppContext);

  const handleClick = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="pb-16 text-center"
    >
      {/* Gradient Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text py-6">
        See the magic. Try now ✨
      </h1>

      {/* Styled Button */}
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 4px 20px rgba(100, 100, 255, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="inline-flex items-center gap-3 px-14 py-3 rounded-full text-lg font-medium tracking-wide text-white transition-all duration-500 
                   bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 
                   hover:from-purple-600 hover:to-indigo-500 
                   hover:shadow-[0px_0px_20px_rgba(136,58,255,0.6)] 
                   focus:ring-4 focus:ring-purple-300"
      >
        Generate Images
        <img className="h-6" src={assets.star_group} alt="Star Icon" />
      </motion.button>
    </motion.div>
  );
};

export default GenerateBtn;
