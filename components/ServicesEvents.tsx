"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesEvents() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 flex justify-center items-start">
      {/* Main container holding both panels */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 px-4">
        {/* Left Panel */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 bg-[#f4f4f4] rounded-2xl px-6 md:px-8 py-10 flex flex-col items-center">
          {/* Logo */}
          <Image
            src="/assets/Logo.png" // Placeholder
            alt="RISE Venture Studio Logo"
            width={200}
            height={70}
            className="object-contain"
          />
          {/* Description */}
          <p className="text-gray-600 text-center mb-10">
            Our Events Division is the engine for community, bringing together
            professionals and audiences through highly organized and impactful
            live experiences spanning business, education, and mass
            entertainment
          </p>
          {/* Cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="w-full flex flex-col gap-6">
            {/* Summit Card */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="bg-gray-50 rounded-xl px-6 py-6">
              <h4 className="font-semibold text-gray-800 mb-1">
                RISE Summit / Forum (Professional)
              </h4>
              <p className="text-gray-600 text-sm">
                These are our premier industry-specific conferences and
                gatherings. Focusing on future-facing topics – from sustainable
                energy and space technology to private equity trends – we host
                high-level experts and facilitate networking that drives global
                partnerships and deal flow.
              </p>
            </motion.div>
            {/* Academy Card */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="bg-gray-50 rounded-xl px-6 py-6">
              <h4 className="font-semibold text-gray-800 mb-1">
                RISE Academy (Education & Workshops)
              </h4>
              <p className="text-gray-600 text-sm">
                Offering professional development and specialized learning, the
                Academy hosts workshops and masterclasses. Our focus is on
                practical, intensive training for executives, investors, and
                entrepreneurs.
              </p>
            </motion.div>
            {/* Live Entertainment Card */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="bg-gray-50 rounded-xl px-6 py-6">
              <h4 className="font-semibold text-gray-800 mb-1">
                Live Entertainment & Production
              </h4>
              <p className="text-gray-600 text-sm">
                We produce and execute large-scale consumer events, including
                concerts, musical festivals, theatrical shows, and other major
                live entertainment. This division leverages operational
                excellence to manage logistics, ticketing, and production,
                reinforcing our footprint in the consumer and cultural economy.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Right Panel */}
        <motion.aside
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 bg-[#f4f4f4] rounded-2xl shadow-lg px-6 md:px-8 py-8 flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 text-center">
            Event Calendar
          </h2>
          {/* Tab Navigation */}
          <div className="flex gap-3  rounded-xl px-3 py-2 mb-7">
            <span className="border-b-2 border-gray-400 font-semibold px-2">
              Upcoming
            </span>
            <span className="text-gray-400 px-2">Attending</span>
          </div>
          {/* Event Items */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="flex flex-col gap-3 bg-white mb-8">
            {[...Array(5)].map((_, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className={`rounded-lg px-5 py-3 ${
                  idx === 1 ? "bg-gray-100 border-l-4 border-teal-500" : ""
                }`}
              >
                <div className="text-xs text-gray-400 mb-1">Friday, Nov 14</div>
                <div className="font-semibold text-gray-800">
                  The Global Fintech Summit 2025
                </div>
                <div className="text-xs text-gray-400 mb-1">
                  The Metropolitan Center
                </div>
                <div className="flex gap-4">
                  <span className="text-teal-600 font-semibold text-xs">
                    Booking Open
                  </span>
                  <a
                    href="/"
                    className="text-blue-600 text-xs font-medium underline hover:text-blue-700"
                  >
                    Register/Tickets Link
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Feed Highlights */}
          <div className="mt-auto border-t pt-4">
            <h4 className="font-semibold text-gray-700 mb-2 text-sm">
              Feed Highlights
            </h4>
            <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
              <li>
                <b>[Venture Studio]:</b> New Product Launch!{" "}
                <span className="underline cursor-pointer text-blue-600">
                  Read More →
                </span>
              </li>
              <li>
                <b>[Events]:</b> Sold Out! Review the highlights from the
                three-day concert series produced by RISE DXB.{" "}
                <span className="underline cursor-pointer text-blue-600">
                  View Gallery →
                </span>
              </li>
              <li>
                <b>[Studio]:</b> Studio begins principal photography on its new
                documentary
              </li>
            </ul>
          </div>
        </motion.aside>
      </div>
    </motion.div>
  );
}
