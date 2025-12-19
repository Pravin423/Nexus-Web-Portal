import React from 'react';
import Image from 'next/image';
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



const OfferCard = () => {
  const featureData = [
    {
      src: "/offer1.jpg",
      alt: "Xtreme Reality",
      title: "Xtreme Reality",
      description: "Step into a thrilling multiverse with immersive VR adventures at Nexus Hyderabad.",
      button: "Know More"
    },
    {
      src: "/offer2.jpg",
      alt: "Latest Offers",
      title: "Latest Offers",
      description: "Unbeatable deals across your favorite brands, only for a limited time.",
      button: "Get Updates"
    },
    {
      src: "/offer3.png",
      alt: "Shop & Win",
      title: "Shop & Win",
      description: "Nexus One is your all-in-one mall companion, offering exclusive deals, event updates, rewards, and a seamless shopping experience.",
      button: "Get More Info"
    },
  ];

  return (
    <section className="w-full py-12 bg-[#F9FAFB]">
      <div className="max-w-7xl  mx-auto px-6">




        <div className="grid grid-cols-1 md:grid-cols-3 gap-[8px]">
          {featureData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >

              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>


              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className={`${manrope.className} text-[32px] font-medium  text-gray-900 mb-3`}>
                  {item.title}
                </h3>
                <p className={`${manrope.className} text-gray-600 text-[18px] max-w-[358px] leading-tight mb-2 flex-grow line-clamp-2`}>
                  {item.description}
                </p>


                <button className="w-full py-3 px-6 text-white font-bold rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E72276] hover:opacity-90 transition-opacity">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferCard;