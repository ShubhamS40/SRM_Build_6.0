"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What is RelocateEase?",
    answer: "RelocateEase is a platform that helps users find rental homes, home appliances, domestic help, and grocery services when relocating to a new city.",
  },
  {
    question: "How can I find rental homes on RelocateEase?",
    answer: "You can search for homes based on location, budget, and amenities. Our platform connects you with verified landlords for security and trust.",
  },
  {
    question: "Can I rent home appliances instead of buying them?",
    answer: "Yes! You can rent essential home appliances like refrigerators, washing machines, beds, and kitchen equipment at affordable prices.",
  },
  {
    question: "How do I hire domestic help through RelocateEase?",
    answer: "We provide a list of verified maids, cooks, babysitters, and cleaners with ratings and reviews. You can book them on demand.",
  },
  {
    question: "Are there laundry and ironing services available?",
    answer: "Yes! Our platform lists nearby ironing and laundry services with pricing transparency for a hassle-free experience.",
  },
  {
    question: "Can I order groceries and vegetables through the platform?",
    answer: "Absolutely! We connect you with local grocery vendors, allowing you to compare prices and find the best deals.",
  },
  {
    question: "Is there a service charge for using RelocateEase?",
    answer: "Basic services are free, but premium features like verified listings and priority bookings may have additional charges.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto my-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
        Got Questions? <br /> We've Got Answers!
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 bg-white text-red-500 border border-red-500 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition"
            >
              <span>{index + 1}. {faq.question}</span>
              {openIndex === index ? <FiMinus className="text-xl" /> : <FiPlus className="text-xl" />}
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 bg-white border-l-4 border-red-500">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
