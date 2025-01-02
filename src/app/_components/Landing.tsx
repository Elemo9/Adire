"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import landing from "../../../public/assets/landing.jpeg";
import bg2 from "../../../public/assets/bg1.jpeg";

// Fade-in animation variants
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

export default function Landing() {
  const [showForm, setShowForm] = useState(false);
  const slidingText = ["Buy, Sell and Explore Adire.", "Generate and Modify Sketched Patterns with AI."];
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
        {/* Scrolling Text */}
        <div className="relative overflow-hidden whitespace-nowrap w-full py-4">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {slidingText.map((text, index) => (
              <span
                key={index}
                className={`text-2xl md:text-3xl font-semibold bg-clip-text text-transparent ${
                  index === 0
                    ? "bg-gradient-to-r from-pink-500 to-purple-500"
                    : index === 1
                    ? "bg-gradient-to-r from-purple-500 to-pink-500"
                    : index === 2
                    ? "bg-gradient-to-r from-blue-500 to-purple-500"
                    : index === 3
                    ? "bg-gradient-to-r from-pink-500 to-blue-500"
                    : "bg-gradient-to-r from-blue-500 to-purple-500"
                }`}
              >
                {text}
              </span>
            ))}
          </motion.div>
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
            whileTap={{ scale: 0.95 }} // Animate button on click
            className="p-[1px] rounded-full shadow-lg"
            style={{
              background: "linear-gradient(to right, #ec4899, #a855f7, #3b82f6)",
            }}
          >
            <div
              className="relative rounded-full font-semibold text-white text-shadow hover:opacity-90 px-6 md:px-8 py-2"
              style={{
                background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${bg2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              Get In Touch
            </div>
          </motion.button>
        </motion.div>
        {/* Airtable Form Modal */}
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div
              className="relative w-full max-w-3xl rounded-lg p-4"
              style={{
                border: "3px solid",
                borderImage: "linear-gradient(to right, #ec4899, #a855f7, #3b82f6) 1",
                background: "#ffffff",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Add a subtle shadow for aesthetics
              }}
            >
              <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/app9ZWB8rHrwMmWYG/pagOrtfyBh8AtyedT/form"
                width="100%"
                height="700"
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