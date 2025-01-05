"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string;
  type: "success" | "error";
  position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right" | "center";
  onClose: () => void;
}

const toastVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const positionClasses: Record<string, string> = {
  "top-left": "top-5 left-5",
  "top-center": "top-5 left-1/2 transform -translate-x-1/2",
  "top-right": "top-5 right-5",
  "bottom-left": "bottom-5 left-5",
  "bottom-center": "bottom-5 left-1/2 transform -translate-x-1/2",
  "bottom-right": "bottom-5 right-5",
  "center": "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
};

const Toast: React.FC<ToastProps> = ({ message, type, position = "top-right", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed ${positionClasses[position]} z-50 w-72 sm:w-80 max-w-full p-4 rounded-lg shadow-lg flex items-center space-x-4 ${
          type === "success" ? "bg-green-500" : "bg-red-500"
        } text-white`}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={toastVariants}
        transition={{ duration: 0.5 }}
        role="alert"
        aria-live="assertive"
      >
        <div>
          <p className="text-sm">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-auto text-lg font-bold focus:outline-none focus:ring-2 focus:ring-white rounded"
          aria-label="Close"
        >
          &times;
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;
