import React from 'react';
import Image from 'next/image';

import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
        
       
        <div className="mb-8">
          <Image 
            src="/nexus-logo-white.png.png" 
            alt="Nexus Select Trust Logo" 
            width={151} 
            height={37}
            className="object-contain"
          />
        </div>


        <div className="space-y-4 max-w-2xl">
          <h3 className={` ${manrope.className}text-[17px]     font-semibold tracking-wide`}>
            Terms and Condition
          </h3>
          
          <p className="text-[12px] font-medium max-w-[556px] text-white leading-relaxed">
            This landing page is created solely for promotional and awareness purposes by Nexus Malls. All 
            information, offers, and event details are subject to change without prior notice.
          </p>

          <p className={`${manrope.className} text-[16px] text-white pt-4`}>
            © 2026 Nexus Select Trust
          </p>
        </div>
      </div>
    </footer>
  );
}