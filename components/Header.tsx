"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Calendar, Users, Info, Mail, Ticket } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: Calendar, label: "Events", href: "#events" },
    { icon: Users, label: "Artists", href: "#artists" },
    { icon: Ticket, label: "Tickets", href: "#tickets" },
    { icon: Info, label: "About", href: "#about" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

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
          className="flex flex-col items-center font-light tracking-wider space-y-2">
          <motion.span className="text-lg md:text-xl text-yellow-100 font-normal">
            MUSICAL CULTURAL FESTIVAL
          </motion.span>
          <motion.span className="text-md md:text-lg mt-1 text-yellow-100 font-normal">
            ARTIST REVEAL
          </motion.span>
          <motion.span className="text-md md:text-lg text-yellow-100 font-normal">
            ON 14TH NOV
          </motion.span>
          <motion.span className="text-md md:text-lg mt-3 text-gray-400 font-normal">
            DUBAI ISLANDS
          </motion.span>
        </motion.div>

        {/* Find Out More Button */}
        <motion.button
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="border border-white/70 text-white px-10 py-3 mt-8 rounded-sm text-sm md:text-base tracking-widest hover:bg-white/10 transition-colors duration-300">
          FIND OUT MORE
        </motion.button>
      </motion.div>

      {/* Hamburger Menu Button */}
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        className="absolute top-4 right-8 sm:top-6 sm:right-6 md:top-8 md:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-sm rounded-full flex flex-col items-center justify-center space-y-1.5 p-2 transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95 shadow-lg z-50"
      >
        <motion.span 
          animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-0.5 bg-[#111111] block"
        ></motion.span>
        <motion.span 
          animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-0.5 bg-[#111111] block"
        ></motion.span>
        <motion.span 
          animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-0.5 bg-[#111111] block"
        ></motion.span>
      </motion.button>

      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMenu}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Sliding Menu Panel - IMPROVED */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 sm:w-96 bg-[#111111] shadow-2xl z-50"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-semibold text-white tracking-wide">MENU</h2>
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Menu Items - IMPROVED */}
            <nav className="p-6 space-y-1">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    onClick={toggleMenu}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-all duration-200 group cursor-pointer"
                  >
                    <Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-200" />
                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200">
                      {item.label}
                    </span>
                  </motion.a>
                );
              })}
            </nav>

            {/* Menu Footer - IMPROVED */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
              <div className="text-center space-y-4">
                <p className="text-xs text-white/50 tracking-widest">FOLLOW US</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-all duration-200 group">
                    <span className="text-white/60 text-xs font-medium group-hover:text-white">f</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-all duration-200 group">
                    <span className="text-white/60 text-xs font-medium group-hover:text-white">in</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-all duration-200 group">
                    <span className="text-white/60 text-xs font-medium group-hover:text-white">tw</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;