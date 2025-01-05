"use client";
import React from "react";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Outer gradient line */}
      <div className="p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl max-w-4xl w-full mx-4">
        {/* Inner container */}
        <div className="bg-black rounded-xl p-8 text-white relative">
          {/* Close Button */}
          <Link href="/" aria-label="Go back to home">
            <button
              className="absolute top-4 right-4 text-white bg-purple-700 hover:bg-pink-600 p-2 rounded-full 
                         transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <span className="text-xl font-bold">×</span>
            </button>
          </Link>

          {/* Main Content */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            Check back soon <span role="img" aria-label="smiley">😊</span>
          </p>
        </div>
      </div>
    </div>
  );
}
