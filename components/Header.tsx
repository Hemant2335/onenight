import Image from "next/image";

const Header = () => {
  return (
    // Set a height for the banner, h-screen usually works well for a hero
    <div className="w-full h-screen relative text-white">
      
      <Image
        src="/assets/banner.jpeg" // <-- Make sure this path is correct
        fill={true}
        alt="Dubai Skyline Banner"
        className="w-full h-full object-cover -z-10" 
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-4 pb-32">
        {/* Festival Info Text */}
        <div className="flex flex-col items-center font-light tracking-wider space-y-2">
          <span className="text-lg md:text-xl text-yellow-100 font-normal">
            MUSICAL CULTURAL FESTIVAL
          </span>
          <span className="text-md md:text-lg mt-1 text-yellow-100 font-normal">
            ARTIST REVEAL
          </span>
          <span className="text-md md:text-lg text-yellow-100 font-normal">
            ON 14TH NOV
          </span>
          <span className="text-md md:text-lg mt-3 text-gray-400 font-normal">
            DUBAI ISLANDS
          </span>
        </div>

        {/* Find Out More Button */}
        <button className="border border-white/70 text-white px-10 py-3 mt-8 rounded-sm text-sm md:text-base tracking-widest hover:bg-white/10 transition-colors duration-300">
          FIND OUT MORE
        </button>
      </div>

      {/* 3. Hamburger Menu Icon (Bottom Left) */}
      {/* Positioned separately from the centered content */}
      <button
        aria-label="Open menu"
        className="absolute bottom-8 left-8 w-12 h-12 bg-blue-600/80 rounded-full flex flex-col items-center justify-center space-y-1.5 p-2 transition-transform hover:scale-105"
      >
        <span className="w-6 h-0.5 bg-white block"></span>
        <span className="w-6 h-0.5 bg-white block"></span>
        <span className="w-6 h-0.5 bg-white block"></span>
      </button>
    </div>
  );
};

export default Header;