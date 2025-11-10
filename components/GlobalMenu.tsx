// components/GlobalMenu.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Calendar, Users, Info, Mail, Gift } from "lucide-react";
import { useMenu } from "../contexts/MenuContext";

const GlobalMenu = () => {
  const { isMenuOpen, closeMenu } = useMenu();

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Users, label: "Invest", href: "/invest" },
    { icon: Calendar, label: "Events", href: "/events" },
    { icon: Info, label: "Studio", href: "/studio" },
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
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    onClick={closeMenu}
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
    </>
  );
};

export default GlobalMenu;