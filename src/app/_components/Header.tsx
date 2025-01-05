"use client";

import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
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

// Text glow animation variants
const textGlowVariants = {
  initial: { textShadow: "0px 0px 0px rgba(255,255,255,0)" },
  hover: {
    textShadow:
      "0px 0px 6px rgba(255,255,255,0.8), 0px 0px 12px rgba(255,255,255,0.8)",
    transition: { duration: 0.3 },
  },
};

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => setOpenNav(!openNav);
  const closeNav = () => setOpenNav(false);

  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "VISION", href: "/vision" },
    { name: "PARTNERS", href: "/partners" },
    { name: "CONTACT", href: "/contact" },
    { name: "SIGNUP", href: "/signup" },
  ];

  // Exclude "SIGNUP" from desktop menu
  const desktopMenuItems = menuItems.filter((item) => item.name !== "SIGNUP");
  const mobileMenuItems = menuItems;

  const glowClass =
    "transition-all duration-300 hover:[text-shadow:0_0_8px_#fff,0_0_15px_#fff,0_0_30px_#fff]";

  // Prevent background scrolling when side menu is open
  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openNav]);

  return (
    <header className={`${teslaFont.variable} sticky top-0 z-50`}>
      {/* Header Navbar */}
      <nav className="w-full bg-black flex items-center justify-center">
        <div className="relative flex justify-between w-[90%] max-lg:w-[95%] mx-auto h-fit items-center py-4 max-sm:py-3">
          {/* Logo Section */}
          <Link href="/" aria-label="Go to homepage">
            <div className="flex flex-col items-start h-fit w-fit cursor-pointer"> {/* Removed ml-6 and max-sm:ml-4 */}
              <Image
                src={logoImg}
                alt="Adire Market Logo"
                className="w-[50px] max-sm:w-[30px] aspect-auto" // Reduced size on mobile
                priority
              />
              <p className="text-xs italic text-gray-400 mt-2 text-left max-sm:text-[8px] max-sm:mt-1 max-sm:ml-0">
                A World of Adire Magic.
              </p>
            </div>
          </Link>

          {/* Adire Market Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none max-sm:top-8"
          >
            <h1
              className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent
                         bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                         max-sm:text-lg max-sm:leading-tight max-sm:px-5 max-sm:mb-5"
              style={{ fontFamily: "var(--font-tesla), sans-serif" }}
            >
              ADIRE MARKET
            </h1>
          </motion.div>

          <div className="flex items-center gap-4 max-sm:gap-2">
            {/* Desktop Menu Links */}
            <div className="text-white flex gap-6 h-fit w-fit tracking-wide text-sm max-xl:text-xs max-xl:hidden">
              {desktopMenuItems.map((item) => (
                <Link key={item.name} href={item.href} aria-label={item.name}>
                  <p className={`cursor-pointer ${glowClass}`}>{item.name}</p>
                </Link>
              ))}
            </div>

            {/* GET STARTED Button - Hidden on Mobile */}
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              className="hidden sm:block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
            >
              <Link href="/signup">
                <button
                  type="button"
                  style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg1.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="text-white py-1 px-3 font-semibold rounded-full text-sm hover:opacity-90
                             transition-all hover:[text-shadow:0_0_8px_#fff,0_0_15px_#fff,0_0_30px_#fff]"
                >
                  GET STARTED
                </button>
              </Link>
            </motion.div>

            {/* Mobile Menu Icon */}
            {openNav ? (
              <IoClose
                color="white"
                size={24}
                className="cursor-pointer hidden max-xl:flex"
                onClick={toggleNav}
                aria-label="Close menu"
              />
            ) : (
              <GiHamburgerMenu
                color="white"
                size={20}
                className="cursor-pointer hidden max-xl:flex"
                onClick={toggleNav}
                aria-label="Open menu"
              />
            )}
          </div>
        </div>
      </nav>

      {/* Gradient Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 w-[70%] max-w-[300px] h-auto max-h-full text-white transform ${
          openNav ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50 bg-black/100 flex flex-col shadow-lg overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <p className="text-lg font-semibold">Menu</p>
          {/* Close Icon Inside Side Menu */}
          <IoClose size={24} className="cursor-pointer" onClick={closeNav} aria-label="Close menu" />
        </div>
        <ul className="flex flex-col gap-4 p-6">
          {mobileMenuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeNav}
              aria-label={item.name}
            >
              <li className={`cursor-pointer ${glowClass} text-lg`}>{item.name}</li>
            </Link>
          ))}
        </ul>
        {/* Social Media Links Section */}
        <div className="flex justify-center gap-4 p-6 border-t border-gray-700">
          <Link
            href="https://x.com/adiremarket"
            aria-label="X (formerly Twitter)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/logos/x.svg"
              alt="X"
              width={24}
              height={24}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link
            href="https://www.facebook.com/adiremarket"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/logos/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link
            href="https://www.instagram.com/adiremarket"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/logos/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link
            href="https://www.pinterest.com/adiremarket"
            aria-label="Pinterest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/logos/pinterest.svg"
              alt="Pinterest"
              width={24}
              height={24}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
