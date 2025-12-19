import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <div className="w-full py-2  border-y border-gray-100">

      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-orange-200">
        
   
        <div className="flex flex-col items-center justify-center p-6 text-center">
          <Image 
            src="/features1.png" 
            width={310} 
            height={228} 
            alt="Brands" 
          />
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center justify-center p-6 text-center">
          <Image 
            src="/features2.png" 
             width={310} 
            height={228}  
            alt="Dining" 
          />
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center justify-center p-6 text-center">
          <Image 
            src="/features3.png" 
             width={310} 
            height={228}  
            alt="Entertainment" 
          />
          
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center justify-center p-6 text-center">
          <Image 
            src="/features4.png" 
             width={310} 
            height={228} 
            alt="Parking" 
          />
         
        </div>

      </div>
    </div>
  )
}

export default Features