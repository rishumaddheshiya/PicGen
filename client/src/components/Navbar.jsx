import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4 px-6 bg-white shadow-md">
      <Link
        to={"/"}
        className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
      >
        <img src={assets.logo_icon} alt="Camera Logo" className="w-8 h-8" />
        <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          PicGen
        </span>
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              className="flex items-center gap-2 bg-blue-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white hover:bg-blue-600 transition"
              onClick={() => navigate("/buy")}
            >
              <span className="text-xs sm:text-sm font-medium">
                Credits: {credit}
              </span>
            </button>

            <p className="text-gray-700 text-sm sm:text-base hidden sm:block">
              Hi, {user.name}
            </p>

            <div className="relative group">
              <button className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-shadow">
                  {user.name.charAt(0)}
                </div>
              </button>
              <div className="absolute right-0 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md mt-2 py-2 w-36 z-20 transition-all duration-300">
                <button
                  onClick={logout}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4 sm:gap-6">
            <p
              className="cursor-pointer text-gray-700 hover:text-gray-900 transition"
              onClick={() => navigate("/buy")}
            >
              Pricing
            </p>

            <button
              onClick={() => setShowLogin(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 sm:px-8 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
