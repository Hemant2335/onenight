"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { details } from "framer-motion/client";

// Data for each category's services
const servicesByCategory = {
  Fintech: [
    {
      title: "Digital Payment Solutions",
      description: "Next-generation payment infrastructure for emerging markets",
      details: "Blockchain-powered cross-border transactions",
    },
    {
      title: "Financial Inclusion Tech",
      description: "Banking solutions for the unbanked populations",
      details: "Mobile-first financial services platform",
    },
    {
      title: "Investment Analytics",
      description: "AI-driven portfolio management and risk assessment",
      details: "Real-time market intelligence integration",
    },
  ],
  Energy: [
    {
      title: "RISE Launch Pad (Venture Building)",
      description: "Creation Meets Market Void",
      details: "full-scale growth and external capital.",
    },
    {
      title: "RISE Insights (Deep Research)",
      description:
        "Meticulous, data-driven analysis: market intelligence and trend forecasting built for future demand, not current noise.",
      details:''
    },
    {
      title: "RISE Connect (Deal Flow & Acceleration)",
      description:
        "Bridging CEOs with Strategic partnerships and Facilitating Fundraising.",
      details:''
    },
  ],
  Space: [
    {
      title: "Satellite Infrastructure",
      description: "Low-orbit satellite networks for global connectivity",
      details: "Next-gen communication and observation systems",
    },
    {
      title: "Space Logistics",
      description: "Supply chain solutions for orbital operations",
      details: "Automated docking and cargo management",
    },
    {
      title: "Aerospace Innovation",
      description: "Advanced propulsion and materials research",
      details: "Sustainable space exploration technologies",
    },
  ],
  Entertainment: [
    {
      title: "Immersive Experiences",
      description: "AR/VR platforms for next-generation storytelling",
      details: "Multi-sensory entertainment ecosystems",
    },
    {
      title: "Content Distribution",
      description: "Decentralized media networks and creator economies",
      details: "Blockchain-based rights management",
    },
    {
      title: "Live Event Tech",
      description: "Hybrid physical-digital event platforms",
      details: "Real-time engagement and analytics",
    },
  ],
  Healthcare: [
    {
      title: "Precision Medicine",
      description: "Genomics-driven personalized treatment protocols",
      details: "AI-powered diagnostic and therapeutic solutions",
    },
    {
      title: "Telemedicine Infrastructure",
      description: "Remote healthcare delivery at scale",
      details: "Integrated patient monitoring systems",
    },
    {
      title: "Medical Devices",
      description: "IoT-enabled diagnostic and treatment devices",
      details: "Real-time health data analytics",
    },
  ],
} as const;

type Category = keyof typeof servicesByCategory;
const tabs: Category[] = ["Fintech", "Energy", "Space", "Entertainment", "Healthcare"];

// Only "Energy" is enabled/functional
const ENABLED_TABS: readonly Category[] = ["Energy"];

export default function VentureStudio() {
  const [activeTab, setActiveTab] = useState<Category>("Energy");

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50/50 pt-16 lg:px-8 pb-16"
    >
      {/* Main container with a subtle background */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* === Left Column === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center bg-[#f4f4f4] p-6 md:p-2 lg:p-10 rounded-xl justify-between space-y-8 h-full"
        >
          {/* Logo */}
          <Image
            src="/assets/RISE_DXB_Invest_Dark.png"
            alt="RISE Studio Logo"
            width={200}
            height={80}
            className="mb-8"
          />

          {/* Main Title & Subtitle */}
          <div className="w-full flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-600 tracking-wide">
              VENTURE STUDIO
            </h1>
            <p className="text-sm font-semibold text-gray-600 tracking-wider">
              Blueprints for Tomorrow
            </p>
          </div>

          <div className="text-lg flex flex-col items-center justify-center text-gray-600 text-center">
            <p>RISE DXB:</p> Building the Future at the Intersection of Tech, Capital,
            and Culture.
          </div>

          {/* Inner description box */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-gray-700 text-center lg:px-10 leading-relaxed">
              In the heart of Dubai, we integrate strategic insight, operational
              execution, and creative power to turn ambitious ideas into lasting
              global impact. Your next major venture, connection or cultural
              movement starts here.
            </p>
          </div>
        </motion.div>

        {/* === Right Column === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col space-y-6 bg-[#f4f4f4] p-6 md:p-4 lg:p-10 rounded-lg h-full"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {tabs.map((tab) => {
              const isEnabled = ENABLED_TABS.includes(tab);
              const isActive = tab === activeTab && isEnabled;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    if (isEnabled) setActiveTab(tab);
                  }}
                  disabled={!isEnabled}
                  aria-disabled={!isEnabled}
                  className={[
                    "text-sm font-medium relative pb-1 transition-colors",
                    isEnabled
                      ? isActive
                        ? "text-black cursor-pointer"
                        : "text-gray-500 hover:text-gray-700 cursor-pointer"
                      : "text-gray-300 cursor-not-allowed select-none",
                  ].join(" ")}
                >
                  {tab}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Service Cards (only render for active enabled tab) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col space-y-4"
            >
              {servicesByCategory[activeTab].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-6 transition-shadow hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                  {service.details && (
                    <p className="text-sm text-gray-500 mt-1">{service.details}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Contact Button */}
          <button className="w-full bg-gray-800 text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-gray-900 transition-colors">
            CONTACT US
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
