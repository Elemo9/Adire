"use client";
import React from "react";
import { motion } from "framer-motion";
import productImg from "../../../public/assets/product.png";

// fadeIn variant function
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 50 : -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      delay,
    },
  },
});

export default function WhatToExpect() {
  return (
    <section
      className="relative w-full py-16 text-white overflow-hidden min-h-[600px]"
      style={{
        backgroundImage: `url(${productImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(80%) contrast(90%)", // Darken and enhance contrast
      }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95))",
        }}
      />

      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider text-shadow"
        >
          What to Expect
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          className="text-xl md:text-2xl text-gray-200 mb-10"
        >
          Explore the Unique Features of the Adire Market App
        </motion.p>

        {/* Features List */}
        <ul className="mx-auto max-w-2xl space-y-8 text-left">
          {[
            {
              title: "Design Ownership",
              description: "Maintain control of your unique designs with our secure token system.",
            },
            {
              title: "AI-Generated Patterns",
              description: "Bring your ideas to life using our AI-powered pattern creation tool.",
            },
            {
              title: "Fabric Search",
              description:
                "Find designs or stores effortlessly by snapping a photo, searching by name, or scanning a store tag.",
            },
            {
              title: "Social Feed",
              description:
                "Show off your style, tag stores, and connect with a community of Adire enthusiasts.",
            },
            {
              title: "Secure Shopping",
              description:
                "Enjoy a seamless e-commerce experience with safe payment options and order tracking.",
            },
          ].map((feature, index) => (
            <motion.li
              key={index}
              variants={fadeIn("up", 0.2 + index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              className="flex items-start"
            >
              <span className="text-3xl text-white opacity-80 mr-4">➤</span>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-300">{feature.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
