import React from 'react'
import OfferCard from './OfferCard'
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const OfferMain = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-2 mt-[60px]">

        <div className="mb-10 text-left">
          <h2 className={`text-3xl ${manrope.className} font-bold text-[#1e1b4b] text-[34px]`}>Latest Offers & Deals</h2>
          <p className={` ${manrope.className} text-gray-500  text-[20px] mt-2 max-w-[456px]`}>
            Shop smarter with special discounts and in-store promotions across your favorite brands.
          </p>
        </div>
        <OfferCard />

      </div>
    </div>
  )
}

export default OfferMain
