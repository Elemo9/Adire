"use client";
import React from "react";

export default function Vision() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Outer gradient frame */}
      <div className="p-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl max-w-4xl w-full mx-4">
        {/* Inner container with background & content */}
        <div className="bg-black rounded-xl p-8 text-white">
          {/* Main Title */}
          <h1
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent
                       bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                       mb-8 text-center uppercase tracking-wider"
          >
            Empowering the Adire Industry
          </h1>

          {/* Intro Paragraph */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            “Our vision is to create a thriving digital marketplace where Adire
            designers can showcase their work to a global audience, buyers can
            access authentic fabrics, and innovators can collaborate on
            projects that celebrate creativity and innovation.”
          </p>

          {/* Why It Matters Section */}
          <h2
            className="text-2xl md:text-3xl font-semibold text-gray-100 mb-6 
                       border-b border-gray-700 pb-2"
          >
            Why It Matters
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300 text-lg md:text-xl leading-relaxed">
            <li>
              <span className="font-semibold text-white">
                Preserving cultural heritage
              </span>{" "}
              through modern technology.
            </li>
            <li>
              <span className="font-semibold text-white">
                Empowering local designers
              </span>{" "}
              and vendors with global reach.
            </li>
            <li>
              <span className="font-semibold text-white">
                Bringing innovation
              </span>{" "}
              to traditional crafts.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
