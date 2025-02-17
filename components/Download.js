"use client";
import { motion } from "framer-motion";
import React from "react";

const Download = () => {
  return (
    <motion.section
      id="download"
      className="py-20 text-center bg-gradient-to-r from-blue-800 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h2 className="text-3xl font-bold mb-4">Coming Soon to the App Store</h2>
      <p className="text-lg mb-6">PointMax will be available for iOS soon. Stay tuned for updates!</p>
      <div className="flex justify-center">
        <button className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg cursor-not-allowed">
          App Store (Coming Soon)
        </button>
      </div>
    </motion.section>
  );
};

export default Download;
