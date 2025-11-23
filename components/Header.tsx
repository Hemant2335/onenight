// components/Header.tsx (simplified)
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useState, useEffect } from 'react';
import { publicAPI } from '@/lib/api';

interface CarouselImage {
  id: string;
  image_url: string;
  alt_text?: string;
  order_index: number;
}

interface BannerContent {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  button_text?: string;
  button_link?: string;
}

const Header = () => {
  const [images, setImages] = useState<CarouselImage[]>([]);
  const [bannerContent, setBannerContent] = useState<BannerContent | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Fallback images - show immediately
  const fallbackImages = [
    "/assets/banner.jpeg",
    "/assets/Web_Carousal_Ver03_01.jpg",
    "/assets/Web_Carousal_Ver03_03.jpg"
  ];

  // Initialize with fallback images
  useState(() => {
    setImages(fallbackImages.map((url, index) => ({
      id: `fallback-${index}`,
      image_url: url,
      alt_text: 'Dubai Skyline Banner',
      order_index: index
    })));
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [carouselResponse, bannerResponse] = await Promise.all([
          publicAPI.getCarouselImages(),
          publicAPI.getBannerContent()
        ]);

        if (carouselResponse.success && carouselResponse.images && carouselResponse.images.length > 0) {
          setImages(carouselResponse.images);
        }

        if (bannerResponse.success && bannerResponse.banner) {
          setBannerContent(bannerResponse.banner);
        }
      } catch (error) {
        console.error('Failed to fetch header data:', error);
        // Keep fallback images
      }
    };

    fetchData();
  }, []);

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
          <SwiperSlide key={image.id} className="relative h-full">
            <Image
              src={image.image_url}
              fill={true}
              alt={image.alt_text || "Dubai Skyline Banner"}
              className="object-cover object-center"
              priority={true}
              quality={85}
              sizes="100vw"
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
              {bannerContent?.title || "MUSICAL CULTURAL FESTIVAL"}
            </motion.span>
            {bannerContent?.subtitle && (
              <motion.span className="text-md md:text-lg mt-1 text-yellow-100 font-normal">
                {bannerContent.subtitle}
              </motion.span>
            )}
            {bannerContent?.description && (
              <motion.span className="text-md md:text-lg text-yellow-100 font-normal">
                {bannerContent.description}
              </motion.span>
            )}
            {!bannerContent && (
              <>
                <motion.span className="text-md md:text-lg mt-1 text-yellow-100 font-normal">
                  ARTIST REVEAL
                </motion.span>
                <motion.span className="text-md md:text-lg text-yellow-100 font-normal">
                  ON 14TH NOV
                </motion.span>
                <motion.span className="text-md md:text-lg mt-3 text-gray-400 font-normal">
                  DUBAI ISLANDS
                </motion.span>
              </>
            )}
          </motion.div>

          {/* Find Out More Button */}
          {(bannerContent?.button_text || !bannerContent) && (
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="border border-white/70 text-white px-10 py-3 mt-8 rounded-sm text-sm md:text-base tracking-widest hover:bg-white/10 transition-colors duration-300"
              onClick={() => {
                if (bannerContent?.button_link) {
                  window.open(bannerContent.button_link, '_blank');
                }
              }}
            >
              {bannerContent?.button_text || "FIND OUT MORE"}
            </motion.button>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Header;