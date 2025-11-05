"use client";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gray-900 text-gray-400 mt-16 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="flex justify-center gap-6 mb-6">
          <motion.a variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} href="#" className="hover:text-white"><Facebook size={24} /></motion.a>
          <motion.a variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} href="#" className="hover:text-white"><Twitter size={24} /></motion.a>
          <motion.a variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} href="#" className="hover:text-white"><Instagram size={24} /></motion.a>
          <motion.a variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} href="#" className="hover:text-white"><Linkedin size={24} /></motion.a>
        </motion.div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} RISE Events. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          One Night in Dubai | Venture Studio | Event Management
        </p>
      </div>
    </motion.footer>
  )
}