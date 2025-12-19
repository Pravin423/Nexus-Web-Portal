import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className="w-full max-w-[729px] px-4 lg:px-0 lg:ml-[106px] mt-10">
      <Image 
        src="/banner1.png" 
        width={729}
        height={546}
        alt="Nexus Logo"
        priority 
        className="w-full h-auto rounded-[14px] object-cover"
      />
    </div>
  )
} 

export default Banner