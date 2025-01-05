"use client";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Gradient Border */}
      <div className="p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg max-w-3xl w-full mx-4">
        <div className="bg-black rounded-lg p-6 sm:p-8 text-white">
          {/* Main Title */}
          <h1
            className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent 
                       bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                       mb-6 text-center uppercase tracking-wide"
          >
            About
          </h1>

          {/* Intro Paragraph */}
          <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
            “The Adire Market App is an innovative e-commerce platform tailored for
            Adire designers, vendors, and enthusiasts. It is designed to preserve
            the cultural heritage of Adire fabrics while making it easy for buyers
            to access authentic designs. Whether you’re a designer showcasing your
            creativity or a buyer searching for unique styles, this app will be
            your ultimate destination.”
          </p>

          {/* Key Highlights Section */}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
            Key Highlights
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300 text-base sm:text-lg leading-relaxed">
            <li>
              <span className="font-semibold text-white">
                Exclusive design ownership
              </span>
              : Token-based sharing ensures authenticity and protects your designs and patterns.
            </li>
            <li>
              <span className="font-semibold text-white">Advanced AI-powered</span>{" "}
              fabric search and pattern creation for endless Adire possibilities.
            </li>
            <li>
              <span className="font-semibold text-white">Social integration</span>
              : Share your unique styles, follow favorite vendors, and build a community.
            </li>
            <li>
              <span className="font-semibold text-white">
                Seamless shopping experience
              </span>
              : Secure payments, real-time order tracking, and global shipping coverage.
            </li>
            <li>
              <span className="font-semibold text-white">
                Dedicated marketplace
              </span>
              : Explore and trade in all types of Adire creations—custom designed fabrics, 
              ready-to-wear pieces, and exclusive limited collections all in one place.
            </li>
            <li>
              <span className="font-semibold text-white">Community features</span>
              : Connect with fellow Adire lovers, join events, and find local artisans.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
