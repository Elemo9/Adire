"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import landing from "../../../public/assets/landing.jpeg";
import bg2 from "../../../public/assets/bg1.jpeg";

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 50 : -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
    },
  },
});

const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};


const textGlowVariants = {
  initial: { textShadow: "0px 0px 0px rgba(255,255,255,0)" },
  hover: {
    textShadow:
      "0px 0px 6px rgba(255,255,255,0.8), 0px 0px 12px rgba(255,255,255,0.8)",
    transition: { duration: 0.3 },
  },
};

export default function Landing() {
  const [showForm, setShowForm] = useState(false);

  // Base array for the marquee
  const slidingText = [
    "Buy, Sell and Explore Adire.",
    "Generate and Modify Sketched Patterns with AI.",
  ];

  const marqueeText = [
    ...slidingText,
    ...slidingText,
    ...slidingText,
    ...slidingText,
  ];

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <Image
        src={landing}
        alt="Adire Market Background"
        className="w-full h-full object-cover brightness-50 absolute inset-0"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-10">
        {/* Title Section */}
        <motion.header
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest text-white leading-tight">
            Unveiling Soon:{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text uppercase block">
              The Ultimate Platform for{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text uppercase">
                Adire
              </span>
            </span>
            <span className="text-white uppercase block leading-tight">
              Designers and{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text uppercase">
                Enthusiasts!
              </span>
            </span>
          </h2>
        </motion.header>

        {/* Scrolling Text (Marquee) */}
        <div className="relative overflow-hidden w-full py-4">
          <div className="whitespace-nowrap flex items-center">
            <motion.div
              className="flex items-center space-x-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 16,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {marqueeText.map((text, index) => (
                <span
                  key={index}
                  className={`text-2xl md:text-3xl font-semibold bg-clip-text text-transparent ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-pink-500 to-purple-500"
                      : "bg-gradient-to-r from-purple-500 to-pink-500"
                  }`}
                >
                  {text}
                </span>
              ))}
            </motion.div>
            <motion.div
              className="flex items-center space-x-16"
              animate={{ x: ["0%", "-50%"] }} // Same animation for the second div
              transition={{
                duration: 16,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {marqueeText.map((text, index) => (
                <span
                  key={index}
                  className={`text-2xl md:text-3xl font-semibold bg-clip-text text-transparent ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-pink-500 to-purple-500"
                      : "bg-gradient-to-r from-purple-500 to-pink-500"
                  }`}
                >
                  {text}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Get In Touch Button */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          className="mt-8"
        >
          <motion.button
            onClick={toggleForm}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="p-[1px] rounded-full shadow-lg"
            style={{
              background: "linear-gradient(to right, #ec4899, #a855f7, #3b82f6)",
            }}
          >
            <div
              className="relative rounded-full font-semibold text-white hover:opacity-90 px-6 md:px-8 py-2 flex items-center justify-center"
              style={{
                background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${bg2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <motion.span
                className="block"
                variants={textGlowVariants}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                Get In Touch
              </motion.span>
            </div>
          </motion.button>
        </motion.div>

        {/* Airtable Form */}
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div
              className="relative w-full max-w-3xl rounded-lg p-4"
              style={{
                border: "3px solid",
                borderImage: "linear-gradient(to right, #ec4899, #a855f7, #3b82f6) 1",
                background: "#ffffff",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/app9ZWB8rHrwMmWYG/pagOrtfyBh8AtyedT/form"
                width="100%"
                height="600"
                style={{
                  background: "transparent",
                  border: "none",
                  borderRadius: "8px",
                }}
                allowFullScreen
              ></iframe>
              <button
                onClick={toggleForm}
                className="absolute top-4 right-4 bg-purple-500 text-white rounded-full px-4 py-2 hover:bg-pink-600 transition duration-300"
                aria-label="Close form"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}