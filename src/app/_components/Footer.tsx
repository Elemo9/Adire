"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../public/assets/logo.png";
import bg2 from "../../../public/assets/bg1.jpeg";

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-24 bg-gradient-to-br from-gray-800 to-gray-1000">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo Section */}
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
            <p className="italic text-gray-300 text-sm md:text-base mb-4">
              ...A World of Adire Magic.
            </p>
            <div>
              <h3 className="text-white text-lg md:text-xl tracking-widest uppercase mb-2">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <Link
                  href="https://x.com/adiremarket"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <img
                    src="/assets/logos/x.svg"
                    alt="X"
                    width={24}
                    height={24}
                    className="hover:opacity-80 transition-opacity"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/adiremarket"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <img
                    src="/assets/logos/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="hover:opacity-80 transition-opacity"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/adiremarket"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <img
                    src="/assets/logos/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="hover:opacity-80 transition-opacity"
                  />
                </Link>
                <Link
                  href="https://www.pinterest.com/adiremarket"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                >
                  <img
                    src="/assets/logos/pinterest.svg"
                    alt="Pinterest"
                    width={24}
                    height={24}
                    className="hover:opacity-80 transition-opacity"
                  />
                </Link>
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
            <h3 className="text-white text-lg md:text-xl font-semibold uppercase tracking-widest mb-4">
              Contact Us
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              For Support:{" "}
              <a
                href="mailto:support@adiremarket.com"
                className="hover:underline"
              >
                support@adiremarket.com
              </a>
            </p>
            <p className="text-gray-300 text-sm md:text-base">
              For Partnerships:{" "}
              <a
                href="mailto:partnerships@adiremarket.com"
                className="hover:underline"
              >
                partnerships@adiremarket.com
              </a>
            </p>
            <p className="text-gray-300 text-sm md:text-base">
              Call/WhatsApp:{" "}
              <a href="tel:+2348055529521" className="hover:underline">
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
            <h3 className="text-white text-lg md:text-xl font-semibold uppercase tracking-widest mb-4">
              Join Our Newsletter
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              Stay updated with the latest Adire trends and offers.
            </p>
            <form className="w-full relative">
              <div className="p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  aria-label="Enter your email"
                  className="w-full p-3 rounded-full text-sm text-gray-700 placeholder-gray-400 
                             bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                style={{
                  background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg2.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 
                           text-white py-2 px-4 sm:px-6 rounded-full text-sm font-bold 
                           shadow-md hover:opacity-90 w-auto sm:w-32 text-shadow"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-center md:text-left">
          <p className="text-gray-300 text-sm md:text-base mb-2 md:mb-0">
            © 2025 Adire Market. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm md:text-base">
            <Link
              href="https://stripeedge.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Website by{" "}
              <span className="text-yellow-300 hover:text-yellow-400">
                StripeEdge Systems
              </span>.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
