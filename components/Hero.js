"use client";
import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center h-screen bg-gradient-to-r from-blue-900 to-black px-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold text-white text-left max-w-4xl"
      >
        Maximize Every Purchase, Unlock More Rewards
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl text-gray-300 mt-4 text-left max-w-2xl"
      >
        Smarter Spending, Bigger Benefits
      </motion.p>
    </section>
  );
};

export default HeroSection;