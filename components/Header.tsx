"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="w-full h-screen relative text-white">
      
      {/* Background Image */}
      <Image
        src="/assets/banner.jpeg"
        fill={true}
        alt="Dubai Skyline Banner"
        className="object-cover object-center -z-10" 
        priority
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 -z-5"></div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
        }}
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
        
        <div className="mt-96 lg:mt-96"></div>

        {/* Festival Info Text */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="flex flex-col items-center font-light tracking-wider space-y-1.5 sm:space-y-2">
          <motion.span className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-100 font-normal">
            MUSICAL CULTURAL FESTIVAL
          </motion.span>
          <motion.span className="text-xs sm:text-sm md:text-base text-yellow-100 font-normal mt-1 sm:mt-2">
            ARTIST REVEAL
          </motion.span>
          <motion.span className="text-xs sm:text-sm md:text-base text-yellow-100 font-normal">
            ON 14TH NOV
          </motion.span>
          <motion.span className="text-xs sm:text-sm md:text-base mt-2 sm:mt-3 text-gray-300 font-normal">
            DUBAI ISLANDS
          </motion.span>
        </motion.div>

        {/* Find Out More Button */}
        <motion.button
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="border border-white/70 text-white px-6 py-2 sm:px-8 sm:py-2.5 md:px-10 md:py-3 mt-6 sm:mt-8 md:mt-10 rounded-sm text-xs sm:text-sm md:text-base tracking-widest hover:bg-white/10 active:bg-white/20 transition-colors duration-300">
          FIND OUT MORE
        </motion.button>
      </motion.div>

      {/* Hamburger Menu Icon */}
      <motion.button
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        aria-label="Open menu"
        className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/80 rounded-full flex flex-col items-center justify-center space-y-1 sm:space-y-1.5 p-2 transition-transform hover:scale-105 active:scale-95"
      >
        <span className="w-5 h-0.5 sm:w-6 bg-white block"></span>
        <span className="w-5 h-0.5 sm:w-6 bg-white block"></span>
        <span className="w-5 h-0.5 sm:w-6 bg-white block"></span>
      </motion.button>
    </div>
  );
};

export default Header;