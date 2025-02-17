'use client';
import { motion } from "framer-motion";
import React from "react";

const Features = () => {  
  const features = [
    { title: "Optimize Rewards", desc: "Get AI-based recommendations.", img: "/optimize.png" },
    { title: "Track Spending", desc: "Stay in control with insights.", img: "/track.png" },
    { title: "Secure & Reliable", desc: "Built with top-tier security.", img: "/secure.png" }
  ];

  return (
    <section id="features" className="py-20 bg-gray-100 text-black">
      <h2 className="text-center text-3xl font-bold mb-12">Why PointMax?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {features.map((feature, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg text-center shadow-lg">
            <img src={feature.img} alt={feature.title} className="h-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
