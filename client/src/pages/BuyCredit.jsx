import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const BuyCredit = () => {
  const { user, setShowLogin, backendUrl, loadCreditsData, token } =
    useContext(AppContext);
  const navigate = useNavigate();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verify-razor",
            response,
            {
              headers: { token },
            }
          );
          if (data.success) {
            loadCreditsData();
            navigate("/");
            toast.success("Credits Added");
          }
        } catch (error) {
          console.log(error.message);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
      }
      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",
        { planId },
        { headers: { token } }
      );
      if (data.success) {
        initPay(data.order);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleOnClick = () => {
    if (!user) {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-[80vh] text-center pt-14 mb-10 px-6"
    >
      {/* Plans Header */}
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6 text-gray-700 font-semibold hover:bg-gray-100 transition-all duration-300">
        Our Plans
      </button>
      <h1 className="text-4xl font-bold text-gray-800 mb-6 sm:mb-10">
        Choose the Best Plan
      </h1>

      {/* Plan Cards */}
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white drop-shadow-lg border border-gray-200 rounded-lg py-12 px-8 text-gray-700 hover:shadow-2xl transition-all duration-500 max-w-xs"
          >
            <img
              width={50}
              src={assets.logo_icon}
              alt="Plan Logo"
              className="mb-4"
            />
            <p className="font-semibold text-lg text-gray-900">{item.id}</p>
            <p className="text-sm text-gray-600">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-bold text-gray-900">
                Rs. {item.price}
              </span>
              <span className="text-gray-500"> / {item.credits} credits</span>
            </p>
            <button
              onClick={() => paymentRazorpay(item.id)}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mt-8 text-sm rounded-md py-3 font-semibold shadow-md hover:scale-105 transition-all duration-300"
            >
              {user ? "Purchase" : "Get Started"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
