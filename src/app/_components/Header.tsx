"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import localFont from "@next/font/local";
import { motion } from "framer-motion";

import logoImg from "../../../public/assets/logo.png";
import bg1 from "../../../public/assets/bg1.jpeg";

const teslaFont = localFont({
  src: [
    {
      path: "../../../public/fonts/TESLA.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/TESLA.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-tesla",
});

// Animation variants for the button
const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => setOpenNav(!openNav);
  const closeNav = () => setOpenNav(false);

  const glowClass =
    "transition-all duration-300 hover:[text-shadow:0_0_8px_#fff,0_0_15px_#fff,0_0_30px_#fff]";

  return (
    <header className={`${teslaFont.variable} sticky top-0 z-50`}>
      {/* Header Navbar */}
      <nav className="w-full bg-black flex items-center justify-center">
        <div className="relative flex justify-between w-[90%] max-lg:w-[95%] mx-auto h-fit items-center py-4 max-sm:py-3">
          {/* Logo Section */}
          <Link href="/" aria-label="Go to homepage">
            <div className="flex flex-col items-center h-fit w-fit cursor-pointer">
              <Image
                src={logoImg}
                alt="Adire Market Logo"
                className="w-[50px] max-sm:w-[40px] aspect-auto"
                priority
              />
              <p className="text-xs italic text-gray-400 mt-2 text-center max-sm:text-[8px] max-sm:mt-1">
                ...A World of Adire Magic.
              </p>
            </div>
          </Link>

          {/* Adire Market Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex justify-center items-center pointer-events-none"
          >
            <h1
              className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent
                         bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                         max-sm:text-lg max-sm:leading-4"
              style={{ fontFamily: "var(--font-tesla), sans-serif" }}
            >
              ADIRE MARKET
            </h1>
          </motion.div>

          <div className="flex items-center gap-4 max-sm:gap-2">
            {/* Desktop Menu Links */}
            <div className="text-white flex gap-6 h-fit w-fit tracking-wide text-sm max-xl:text-xs max-xl:hidden">
              {["HOME", "ABOUT", "VISION", "PARTNERS", "CONTACT"].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} aria-label={item}>
                  <p className={`cursor-pointer ${glowClass}`}>{item}</p>
                </Link>
              ))}
            </div>

            {/* GET STARTED Button with Gradient Wrapper */}
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
            >
              <Link href="/signup">
                <button
                  type="button"
                  style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg1.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="text-white py-1 px-3 font-semibold rounded-full text-sm max-sm:py-1 max-sm:px-2 max-sm:text-xs hover:opacity-90
                             transition-all hover:[text-shadow:0_0_8px_#fff,0_0_15px_#fff,0_0_30px_#fff]"
                >
                  GET STARTED
                </button>
              </Link>
            </motion.div>

            {/* Mobile Menu Icon */}
            <GiHamburgerMenu
              color="white"
              size={20}
              className="cursor-pointer hidden max-xl:flex"
              onClick={toggleNav}
            />
          </div>
        </div>
      </nav>

      {/* Gradient Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 w-[70%] max-w-[300px] h-screen text-white transform ${
          openNav ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50 bg-black/80`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <p className="text-lg font-semibold">Menu</p>
          <IoClose size={24} className="cursor-pointer" onClick={closeNav} />
        </div>
        <ul className="flex flex-col gap-4 p-6">
          <Link href="/" onClick={closeNav} aria-label="Home">
            <li className={`cursor-pointer ${glowClass}`}>HOME</li>
          </Link>
          <Link href="/about" onClick={closeNav} aria-label="About">
            <li className={`cursor-pointer ${glowClass}`}>ABOUT</li>
          </Link>
          <Link href="/vision" onClick={closeNav} aria-label="Vision">
            <li className={`cursor-pointer ${glowClass}`}>VISION</li>
          </Link>
          <Link href="/partners" onClick={closeNav} aria-label="Partners">
            <li className={`cursor-pointer ${glowClass}`}>PARTNERS</li>
          </Link>
          <Link href="/signup" onClick={closeNav} aria-label="Signup">
            <li className={`cursor-pointer ${glowClass}`}>SIGNUP</li>
          </Link>
          <Link href="/contact" onClick={closeNav} aria-label="Contact">
            <li className={`cursor-pointer ${glowClass}`}>CONTACT</li>
          </Link>

          {/* Social Media Links */}
          <div className="flex gap-4 pt-4">
            <Link
              href="https://x.com/adiremarket"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <img
                src="/assets/logos/x.svg"
                alt="Twitter"
                width={24}
                height={24}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link
              href="https://facebook.com/adiremarket"
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
              href="https://instagram.com/adiremarket"
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
              href="https://pinterest.com/adiremarket"
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
        </ul>
      </div>
    </header>
  );
}
