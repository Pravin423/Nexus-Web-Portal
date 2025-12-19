import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
   
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 py-3 sm:px-8 md:px-12 flex items-center justify-between">
        
        
        <div className="flex-shrink-0">
          <Image
            src="/nexus_logonew.png"
            width={203}
            height={30}
            alt="Nexus Logo"
            priority
            className="w-[130px] sm:w-[160px] md:w-[203px] h-auto transition-all"
          />
        </div>

      
        <button
          className="
            h-[38px] sm:h-[44px]
            px-4 sm:px-8
            flex items-center justify-center
            bg-gradient-to-r from-[#FF6B00] to-[#E72276]
            text-white
            text-[13px] sm:text-[16px]
            font-semibold
            rounded-tr-[10px]
            rounded-bl-[10px]
            shadow-md
            hover:shadow-lg
            transition-all duration-200
            active:scale-95
            hover:brightness-110
          "
        >
          Explore Events
        </button>
      </div>
    </nav>
  );
};

export default Navbar;