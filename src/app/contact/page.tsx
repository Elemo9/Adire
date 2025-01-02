"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { BsX as FaX } from "react-icons/bs";
import Link from "next/link";

// If using the App Router, file name: app/contact/page.tsx
// If using the Pages Router, file name: pages/contact.tsx

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Outer gradient frame */}
      <div className="p-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl max-w-4xl w-full mx-4">
        {/* Inner container */}
        <div className="bg-black rounded-xl p-8 text-white">
          {/* Main Title */}
          <h1
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent
                       bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                       mb-8 text-center uppercase tracking-wider"
          >
            Get In Touch
          </h1>

          {/* Intro Paragraph */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            We’d love to hear from you. Whether you have questions, partnership
            proposals, or simply want to learn more about Adire Market, here’s how
            you can reach us.
          </p>

          {/* Contact Info */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6 border-b border-gray-700 pb-2">
            Contact Information
          </h2>
          <ul className="space-y-4 text-lg md:text-xl text-gray-300 mb-8">
            <li>
              <span className="font-semibold text-white">For Support:</span>{" "}
              <Link
                href="mailto:support@adiremarket.com"
                className="underline hover:text-pink-300"
              >
                support@adiremarket.com
              </Link>
            </li>
            <li>
              <span className="font-semibold text-white">For Partnerships:</span>{" "}
              <Link
                href="mailto:partnerships@adiremarket.com"
                className="underline hover:text-pink-300"
              >
                partnerships@adiremarket.com
              </Link>
            </li>
            <li>
              <span className="font-semibold text-white">Call/WhatsApp:</span>{" "}
              <Link href="tel:+2348055529521" className="underline hover:text-pink-300">
                +234-805-552-9521
              </Link>
            </li>
          </ul>

          {/* Social Links */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6 border-b border-gray-700 pb-2">
            Follow Us
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
            Stay connected with Adire Market on social media:
          </p>
          <div className="flex gap-6 items-center">
            <Link
              href="https://www.facebook.com/adiremarket"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={28}
                className="text-gray-300 hover:text-white transition-colors"
              />
            </Link>
            <Link
              href="https://www.instagram.com/adiremarket"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={28}
                className="text-gray-300 hover:text-white transition-colors"
              />
            </Link>
            <Link
              href="https://www.x.com/adiremarket"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaX size={28} className="text-gray-300 hover:text-white transition-colors" />
            </Link>
            <Link
              href="https://www.pinterest.com/adiremarket"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest
                size={28}
                className="text-gray-300 hover:text-white transition-colors"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
