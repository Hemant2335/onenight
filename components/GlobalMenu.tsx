"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Calendar, DollarSign, Film, Mail, Gift } from "lucide-react";
import { useMenu } from "../contexts/MenuContext";
import Image from "next/image";

const GlobalMenu = () => {
  const { isMenuOpen, closeMenu } = useMenu();

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: DollarSign, label: "Invest", href: "#invest" },
    { icon: Calendar, label: "Events", href: "#events" },
    { icon: Film, label: "Studio", href: "#studio" },
    { icon: Gift, label: "Rewards", href: "/rewards" },
    { icon: Mail, label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Sliding Menu Panel */}
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
                onClick={closeMenu}
                aria-label="Close menu"
                className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="p-6 space-y-1">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isInvest = item.label === "Invest";

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    // No hover background — show a boundary on hover instead
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group focus:outline-none
                      ${
                        isInvest
                          ? "bg-gradient-to-r from-white/3 via-white/6 to-white/3 ring-2 ring-indigo-500/30 shadow-[0_8px_24px_rgba(99,102,241,0.12)]"
                          : "cursor-pointer"
                      }
                    `}
                    // Add accessible focus and hover boundary for all items
                    onMouseEnter={(e) => {
                      // add boundary effect via classList to avoid hover background
                      if (!isInvest) e.currentTarget.classList.add("ring-2", "ring-white/10");
                    }}
                    onMouseLeave={(e) => {
                      if (!isInvest) e.currentTarget.classList.remove("ring-2", "ring-white/10");
                    }}
                    onFocus={(e) => {
                      if (!isInvest) e.currentTarget.classList.add("ring-2", "ring-white/10");
                    }}
                    onBlur={(e) => {
                      if (!isInvest) e.currentTarget.classList.remove("ring-2", "ring-white/10");
                    }}
                  >
                    {Icon && (
                      <Icon
                        className={`w-5 h-5 transition-colors duration-200 ${
                          isInvest ? "text-white" : "text-white/80"
                        }`}
                      />
                    )}
                    <span
                      className={`text-sm font-medium transition-colors duration-200 ${
                        isInvest ? "text-white" : "text-white/80"
                      }`}
                    >
                      {item.label}
                    </span>
                  </motion.a>
                );
              })}
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
              <div className="text-center space-y-4">
                <p className="text-xs text-white/50 tracking-widest">FOLLOW US</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-all duration-200 group"
                  >
                    <span className="text-white/60 text-xs font-medium group-hover:text-white">f</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-all duration-200 group"
                  >
                    <span className="text-white/60 text-xs font-medium group-hover:text-white">in</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-all duration-200 group"
                  >
                    <span className="text-white/60 text-xs font-medium group-hover:text-white">tw</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GlobalMenu;
