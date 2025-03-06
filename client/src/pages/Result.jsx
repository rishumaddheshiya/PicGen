import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(assets.img4);
  const [input, setInput] = useState("");

  const { generateImage } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (input) {
      const image = await generateImage(input);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="flex flex-col min-h-[90vh] justify-center items-center bg-gray-50 p-6"
    >
      {/* Image Display */}
      <div className="relative bg-white p-6 shadow-lg rounded-lg">
        <div className="relative">
          <img
            className="max-w-sm rounded-lg shadow-md"
            src={image}
            alt="Generated"
          />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            }`}
          ></span>
        </div>
        <p
          className={`text-center mt-2 text-gray-600 ${
            loading ? "block" : "hidden"
          }`}
        >
          Generating Image...
        </p>
      </div>

      {/* Input and Generate Button */}
      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-white shadow-md border border-gray-300 rounded-full p-1 mt-10">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate..."
            className="flex-1 bg-transparent outline-none px-4 py-3 text-gray-800 rounded-full"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 sm:px-16 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-md"
          >
            Generate
          </button>
        </div>
      )}

      {/* Buttons After Image is Loaded */}
      {isImageLoaded && (
        <div className="flex flex-wrap gap-3 justify-center items-center mt-10">
          <button
            onClick={() => setIsImageLoaded(false)}
            className="bg-transparent border border-gray-700 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            Generate Another
          </button>
          <a
            href={image}
            download
            className="bg-black text-white px-10 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-md"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
