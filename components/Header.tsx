// components/Header.tsx (simplified)
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useState } from 'react';

const Header = () => {
  const images = [
    "/assets/banner.jpeg",
    "/assets/Web_Carousal_Ver03_01.jpg",
    "/assets/Web_Carousal_Ver03_03.jpg"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-screen relative text-white">
      {/* Background Image Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="absolute inset-0"
        style={{ height: '100%' }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative h-full">
            <Image
              src={image}
              fill={true}
              alt="Dubai Skyline Banner"
              className="object-cover object-center"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 -z-5"></div>

      {/* Main Content - Only show on first slide */}
      {activeIndex === 0 && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 z-10">

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
      )}
    </div>
  );
};

export default Header;