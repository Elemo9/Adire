"use client";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="p-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl max-w-4xl w-full mx-4">
        <div className="bg-black rounded-xl p-8 text-white">
          {/* Main Title */}
          <h1
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent 
                       bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                       mb-8 text-center uppercase tracking-wider"
          >
            About Adire Market
          </h1>

          {/* Intro Paragraph */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            “The Adire Market App is an innovative e-commerce platform tailored for
            Adire designers, vendors, and enthusiasts. It is designed to preserve
            the cultural heritage of Adire fabrics while making it easy for buyers
            to access authentic designs. Whether you’re a designer showcasing your
            creativity or a buyer searching for unique styles, this app will be
            your ultimate destination.”
          </p>

          {/* Key Highlights Section */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6 border-b border-gray-700 pb-2">
            Key Highlights
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg md:text-xl leading-relaxed">
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
              : Explore and trade in all types of Adire creations custom designed fabrics, 
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
