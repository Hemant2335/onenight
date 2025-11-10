// components/FloatingMenuButton.tsx
"use client";
import { motion } from "framer-motion";
import { useMenu } from "../contexts/MenuContext";

const FloatingMenuButton = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <motion.button
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onClick={toggleMenu}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      aria-expanded={isMenuOpen}
      className="fixed bottom-6 left-6 w-14 h-14 bg-blue-500 backdrop-blur-sm rounded-full flex flex-col items-center justify-center space-y-1.5 p-2 transition-all duration-300 hover:bg-blue-400 cursor-pointer hover:scale-110 active:scale-95 shadow-lg z-50"
    >
      <motion.span 
        animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-white block"
      ></motion.span>
      <motion.span 
        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-white block"
      ></motion.span>
      <motion.span 
        animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-white block"
      ></motion.span>
    </motion.button>
  );
};

export default FloatingMenuButton;