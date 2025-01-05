"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const socialPlatforms = [
    { name: "Facebook", url: "https://www.facebook.com/adiremarket", icon: "/assets/logos/facebook.svg" },
    { name: "Instagram", url: "https://www.instagram.com/adiremarket", icon: "/assets/logos/instagram.svg" },
    { name: "X", url: "https://www.x.com/adiremarket", icon: "/assets/logos/x.svg" },
    { name: "Pinterest", url: "https://www.pinterest.com/adiremarket", icon: "/assets/logos/pinterest.svg" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Outer gradient line wrapper */}
      <div className="p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg max-w-4xl w-full mx-4">
        {/* Inner container */}
        <div className="bg-black rounded-lg p-8 text-white">
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
            {socialPlatforms.map(({ name, url, icon }) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${name}`}
              >
                <Image
                  src={icon}
                  alt={`${name} Icon`}
                  width={28}
                  height={28}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
