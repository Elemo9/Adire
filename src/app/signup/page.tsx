"use client";
import React from "react";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Outer gradient frame */}
      <div className="p-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl max-w-4xl w-full mx-4">
        {/* Inner container */}
        <div className="bg-black rounded-xl p-8 text-white">

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            Check back soon <span role="img" aria-label="smiley">😊</span>
          </p>
        </div>
      </div>
    </div>
  );
}
