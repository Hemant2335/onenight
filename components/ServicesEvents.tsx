"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const upcomingEvents = [
  {
    id: 1,
    date: "Friday, Nov 14",
    title: "The Global Fintech Summit 2025",
    location: "The Metropolitan Center",
    status: "Booking Open",
    link: "/register",
  },
  {
    id: 2,
    date: "Saturday, Nov 22",
    title: "Web3 Innovation Conference",
    location: "Digital Hub Dubai",
    status: "Booking Open",
    link: "/register",
  },
  {
    id: 3,
    date: "Tuesday, Dec 3",
    title: "Sustainable Energy Forum",
    location: "Green Tech Valley",
    status: "Coming Soon",
    link: "/register",
  },
  {
    id: 4,
    date: "Thursday, Dec 12",
    title: "Space Technology Expo",
    location: "Innovation Park",
    status: "Booking Open",
    link: "/register",
  },
  {
    id: 5,
    date: "Friday, Dec 20",
    title: "Private Equity Trends 2025",
    location: "Financial District",
    status: "Limited Spots",
    link: "/register",
  },
  {
    id: 6,
    date: "Saturday, Jan 10",
    title: "RISE Academy: AI Masterclass",
    location: "Tech Campus",
    status: "Booking Open",
    link: "/register",
  },
];

const attendingEvents = [
  {
    id: 7,
    date: "Thursday, Nov 6",
    title: "AI for Business Leaders",
    location: "Downtown Conference Hall",
    status: "In Progress",
    link: "/view-details",
  },
  {
    id: 8,
    date: "Wednesday, Nov 12",
    title: "Advanced DevOps Workshop",
    location: "Tech Center",
    status: "Confirmed",
    link: "/view-details",
  },
  {
    id: 9,
    date: "Friday, Nov 15",
    title: "Blockchain Deep Dive",
    location: "Innovation Hub",
    status: "Confirmed",
    link: "/view-details",
  },
];

export default function ServicesEvents() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedEventId, setSelectedEventId] = useState(1);

  const currentEvents =
    activeTab === "upcoming" ? upcomingEvents : attendingEvents;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Booking Open":
        return "text-teal-600";
      case "Coming Soon":
        return "text-orange-600";
      case "Limited Spots":
        return "text-red-600";
      case "In Progress":
        return "text-green-600";
      case "Confirmed":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 flex justify-center items-start">
      {/* Main container holding both panels */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 px-4">
        {/* Left Panel */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 bg-[#f4f4f4] rounded-2xl px-6 md:px-8 py-10 flex flex-col items-center">
          {/* Logo */}
          <Image
            src="/assets/RISE_DXB_Events_Dark.png"
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
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="w-full flex flex-col gap-6">
            {/* Summit Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-gray-50 rounded-xl px-6 py-6 cursor-pointer transition-colors hover:bg-gray-100">
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
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-gray-50 rounded-xl px-6 py-6 cursor-pointer transition-colors hover:bg-gray-100">
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
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-gray-50 rounded-xl px-6 py-6 cursor-pointer transition-colors hover:bg-gray-100">
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
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 bg-[#f4f4f4] rounded-2xl shadow-lg px-2 lg:px-8 py-8 flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 text-center">
            Event Calendar
          </h2>
          {/* Tab Navigation */}
          <div className="flex gap-3 rounded-xl px-3 py-2 mb-7 border-b border-gray-300">
            <motion.button
              onClick={() => {
                setActiveTab("upcoming");
                setSelectedEventId(upcomingEvents[0].id);
              }}
              className={`px-4 py-2 font-semibold transition-all ${
                activeTab === "upcoming"
                  ? "text-gray-900 border-b-2 border-teal-500"
                  : "text-gray-400 border-b-2 border-transparent"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}>
              Upcoming
            </motion.button>
            <motion.button
              onClick={() => {
                setActiveTab("attending");
                setSelectedEventId(attendingEvents[0].id);
              }}
              className={`px-4 py-2 font-semibold transition-all ${
                activeTab === "attending"
                  ? "text-gray-900 border-b-2 border-teal-500"
                  : "text-gray-400 border-b-2 border-transparent"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}>
              Attending
            </motion.button>
          </div>
          {/* Event Items */}
          <div className="flex flex-col gap-3 bg-white mb-8 rounded-lg p-2 lg:p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-3">
                {currentEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setSelectedEventId(event.id)}
                    whileHover={{ y: -4, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)" }}
                    className={`rounded-lg px-2 lg:px-5 py-4 cursor-pointer transition-all ${
                      selectedEventId === event.id
                        ? "bg-teal-50 border-l-4 border-teal-500 shadow-md"
                        : "bg-gray-50 border-l-4 border-transparent hover:bg-gray-100"
                    }`}>
                    <div className="text-xs text-gray-400 mb-1">{event.date}</div>
                    <div className="font-semibold text-gray-800 mb-1">
                      {event.title}
                    </div>
                    <div className="text-xs text-gray-500 mb-3">
                      📍 {event.location}
                    </div>
                    <div className="flex gap-4 items-center">
                      <span
                        className={`font-semibold text-xs ${getStatusColor(
                          event.status
                        )}`}>
                        {event.status}
                      </span>
                      <motion.a
                        href={event.link}
                        className="text-blue-600 text-xs font-medium underline hover:text-blue-700"
                        whileHover={{ x: 2 }}
                        whileTap={{ scale: 0.98 }}>
                        {activeTab === "upcoming"
                          ? "Register/Tickets →"
                          : "View Details →"}
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Feed Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-auto border-t pt-4">
            <h4 className="font-semibold text-gray-700 mb-2 text-sm">
              Feed Highlights
            </h4>
            <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
              <li>
                <b>Venture Studio:</b> New Product Launch!{" "}
                <motion.span
                  className="underline cursor-pointer text-blue-600 inline-block"
                  whileHover={{ x: 3 }}>
                  Read More →
                </motion.span>
              </li>
              <li>
                <b>Events:</b> Sold Out! Review the highlights from the
                three-day concert series produced by RISE DXB.{" "}
                <motion.span
                  className="underline cursor-pointer text-blue-600 inline-block"
                  whileHover={{ x: 3 }}>
                  View Gallery →
                </motion.span>
              </li>
              <li>
                <b>Studio:</b> Studio begins principal photography on its new
                documentary
              </li>
            </ul>
          </motion.div>
        </motion.aside>
      </div>
    </motion.div>
  );
}