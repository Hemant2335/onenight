"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Data for the service cards. This makes it easy to manage.
const services = [
  {
    title: "RISE Launch Pad (Venture Building)",
    description: "Creation Meets Market Void",
    details: "full-scale growth and external capital.",
  },
  {
    title: "RISE Insights (Deep Research)",
    description:
      "Meticulous, data-driven analysis: market intelligence and trend forecasting built for future demand, not current noise.",
  },
  {
    title: "RISE Connect (Deal Flow & Acceleration)",
    description:
      "Bridging CEOs with Strategic partnerships and Facilitating Fundraising.",
  },
];

// Data for the navigation tabs
const tabs = ["Fintech", "Energy", "Space", "Entertainment", "Healthcare"];

export default function VentureStudio() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50/50 pt-16 lg:px-8">
      {/* Main container with a subtle background */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* === Left Column === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center bg-[#f4f4f4] p-2 lg:p-10 rounded-xl justify-between space-y-8 h-full">
          {/* Logo */}
          <div className="w-48">
            <Image
              src="/assets/Logo.png" // Placeholder
              alt="RISE Venture Studio Logo"
              width={200}
              height={70}
              className="object-contain"
            />
          </div>

          {/* Main Title & Subtitle */}
          <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-gray-600 tracking-wide">
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
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col space-y-6 bg-[#f4f4f4] p-4 lg:p-10 rounded-lg h-full">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {tabs.map((tab) => (
              <span
                key={tab}
                className={`text-sm font-medium ${
                  tab === "Energy"
                    ? "text-black border-b-2 border-blue-600 pb-1" // Active tab style
                    : "text-gray-400 hover:text-gray-600" // Inactive tab style
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Service Cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="flex flex-col space-y-4 ">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="bg-white border border-gray-200 rounded-lg p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                {service.details && (
                  <p className="text-sm text-gray-500 mt-1">
                    {service.details}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Button */}
          <button className="w-full bg-gray-800 text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-gray-900 transition-colors">
            CONTACT US
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}