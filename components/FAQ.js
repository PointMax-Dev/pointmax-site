"use client";
import React from "react";

const faqs = [
  {
    question: "What is PointMax and how does it work?",
    answer:
      "PointMax helps users maximize credit card rewards by recommending their best card for each purchase. It provides real-time insights, a category optimization tool, and spending breakdowns to ensure you earn the most points, cashback, or travel rewards.",
  },
  {
    question: "Is PointMax safe to use with my credit card information?",
    answer:
      "Yes, PointMax uses encrypted connections and never stores sensitive financial data. Our security follows industry standards, ensuring your information remains protected at all times.",
  },
  {
    question: "How does PointMax help me optimize my spending?",
    answer:
      "PointMax identifies the best cards for common spending categories like dining, travel, and groceries. It also alerts you to limited-time offers, bonus spending thresholds, and statement credits to help you maximize your rewards.",
  },
  {
    question: "Can I use PointMax with multiple credit cards?",
    answer:
      "Yes! PointMax analyzes all your cards and suggests the best one for each transaction, helping you take advantage of sign-up bonuses, rotating category rewards, and spending thresholds.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>

        {/* ✅ 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;