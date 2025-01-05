// src/app/_components/Footer.tsx

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../public/assets/logo.png";
import bg2 from "../../../public/assets/bg1.jpeg";
import Toast from "./Toast"; // Import the Toast component

interface Message {
  text: string;
  type: "success" | "error";
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<Message | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({
          text: "Thank you for subscribing! We'll keep you informed about our development progress and notify you when signups are open.",
          type: "success",
        });
        setEmail("");
      } else {
        setMessage({ text: result.error, type: "error" });
      }
    } catch (error) {
      console.error("Subscription Error:", error);
      setMessage({
        text: "An unexpected error occurred. Please try again later.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative w-full py-12 md:py-24 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-200 transition-colors duration-500">
      <div className="absolute inset-0 bg-black opacity-30 dark:bg-white dark:opacity-10"></div>

      <div className="relative container mx-auto px-6 md:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* About Section */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
            className="flex flex-col md:items-start"
          >
            <Image
              src={logoImg}
              alt="Adire Market Logo"
              className="w-20 md:w-28 mb-4 md:mb-6"
              priority
            />
            <p className="italic text-gray-300 dark:text-gray-700 text-sm md:text-base mb-4">
              ...A World of Adire Magic.
            </p>
            <div>
              <h3 className="text-white dark:text-gray-800 text-lg md:text-xl tracking-widest uppercase mb-2">
                CATCH US ONLINE
              </h3>
              <div className="flex gap-4">
                {/* Social Media Links */}
                {["x", "facebook", "instagram", "pinterest"].map((platform) => (
                  <Link
                    key={platform}
                    href={`https://www.${platform}.com/adiremarket`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                  >
                    <Image
                      src={`/assets/logos/${platform}.svg`}
                      alt={`${platform} icon`}
                      width={24}
                      height={24}
                      className="hover:opacity-80 transition-opacity"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Us Section */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
            className="flex flex-col md:items-start"
          >
            <h3 className="text-white dark:text-gray-800 text-lg md:text-xl font-semibold uppercase tracking-widest mb-4">
              Contact Us
            </h3>
            <p className="text-gray-300 dark:text-gray-700 text-sm md:text-base">
              For Support:{" "}
              <a
                href="mailto:support@adiremarket.com"
                className="hover:underline text-blue-400 dark:text-blue-600"
              >
                support@adiremarket.com
              </a>
            </p>
            <p className="text-gray-300 dark:text-gray-700 text-sm md:text-base">
              For Partnerships:{" "}
              <a
                href="mailto:partnerships@adiremarket.com"
                className="hover:underline text-blue-400 dark:text-blue-600"
              >
                partnerships@adiremarket.com
              </a>
            </p>
            <p className="text-gray-300 dark:text-gray-700 text-sm md:text-base">
              Call/WhatsApp:{" "}
              <a
                href="tel:+2348055529521"
                className="hover:underline text-blue-400 dark:text-blue-600"
              >
                +234-805-552-9521
              </a>
            </p>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
            className="flex flex-col md:items-start"
          >
            <h3 className="text-white dark:text-gray-800 text-lg md:text-xl font-semibold uppercase tracking-widest mb-4">
              Join Our Newsletter
            </h3>
            <p className="text-gray-300 dark:text-gray-700 text-sm md:text-base mb-4">
              Stay updated with our application development progress and be the first to know when signups are available.
            </p>
            <form onSubmit={handleSubmit} className="w-full relative">
              <div className="p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  aria-label="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-full text-sm text-gray-700 dark:text-gray-900 placeholder-gray-400 bg-gray-100 dark:bg-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg2.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-white py-2 px-4 sm:px-6 rounded-full text-sm font-bold shadow-md hover:opacity-90 w-auto sm:w-32 text-shadow ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-center md:text-left">
          <p className="text-gray-300 dark:text-gray-700 text-sm md:text-base mb-2 md:mb-0">
            © 2025 Adire Market. All rights reserved.
          </p>
          <p className="text-gray-300 dark:text-gray-700 text-sm md:text-base">
            <Link
              href="https://stripeedge.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Website by{" "}
              <span className="text-yellow-400 dark:text-yellow-600 hover:text-yellow-500">
                StripeEdge Systems
              </span>
              .
            </Link>
          </p>
        </div>
      </div>

      {/* Toast Popup */}
      {message && (
        <Toast
          message={message.text}
          type={message.type}
          position="bottom-center"
          onClose={() => setMessage(null)}
        />
      )}
    </footer>
  );
};

export default Footer;
