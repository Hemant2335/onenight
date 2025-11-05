import Image from "next/image";

const Header = () => {
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
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
        
        <div className="mt-96 lg:mt-96"></div>

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

      {/* Hamburger Menu Icon */}
      <button
        aria-label="Open menu"
        className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/80 rounded-full flex flex-col items-center justify-center space-y-1 sm:space-y-1.5 p-2 transition-transform hover:scale-105 active:scale-95"
      >
        <span className="w-5 h-0.5 sm:w-6 bg-white block"></span>
        <span className="w-5 h-0.5 sm:w-6 bg-white block"></span>
        <span className="w-5 h-0.5 sm:w-6 bg-white block"></span>
      </button>
    </div>
  );
};

export default Header;