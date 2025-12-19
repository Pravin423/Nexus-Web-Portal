import React from "react";
import { Manrope } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ServicePage = () => {
  const headingStyle = `${manrope.className} font-bold text-[#1e1b4b]`;
  const bodyStyle = `${manrope.className} text-gray-500`;

  return (
    <div className="bg-gray-100 h-auto">
      <div className="max-w-7xl mx-auto px-2 py-[60px]">

        <div className="mb-16 text-left">
          <h2 className={`${headingStyle} text-[34px] leading-tight`}>
            Services & More
          </h2>
          <p className={`${bodyStyle} text-[22px] mt-2 max-w-[535px] leading-snug`}>
            Lorem ipsum dolor sit amet consectetur. Volutpat turpis in commodo
            bibendum aliquam scelerisque.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        
          <div className="flex flex-col items-center md:items-start">
            <div className="
              w-[220px] h-[220px]
              md:w-[300px] md:h-[300px]
              rounded-full
              bg-white
              mb-6
              hover:bg-[#5B215F]
              transition-colors duration-1000
            ">
              <div className="group">
                <div className="flex justify-center mt-[30px] mr-[30px]">
                  <Image src="/babycarelogo.png" width={50} height={50} alt="Baby Care Logo" />
                  <h2 className="max-w-[190px] max-h-[32px] mt-[20px] text-[20px] text-[#5B215F] font-medium group-hover:text-white transition-colors duration-1000">
                    Baby Care room
                  </h2>
                </div>

                <div className="relative w-[300px] h-[300px] border-2 border-[#5B215F] rounded-full">
                  <Image
                    className="
                      absolute
                      left-[100px]
                      top-0
                      rounded-full
                      transition-transform duration-1000 ease-in-out
                      group-hover:translate-x-[-100px]
                    "
                    src="/babycare.png"
                    width={300}
                    height={300}
                    alt="Baby Care"
                  />
                </div>
              </div>
            </div>
          </div>

        
          <div className="flex flex-col items-center md:items-start">
            <div className="
              w-[220px] h-[220px]
              md:w-[300px] md:h-[300px]
              rounded-full
              bg-white
              
              mb-6
              hover:bg-[#5B215F]
              transition-colors duration-1000
            ">
              <div className="group">
                <div className="flex justify-center mt-[20px] ">
                  <Image className="" src="/family-room.svg.png" width={50} height={50} alt="Baby Care Logo" />
                  <h2 className="max-w-[190px] max-h-[32px] mt-[20px] text-[20px] text-[#5B215F] font-medium group-hover:text-white transition-colors duration-1000">
                   Family room
                  </h2>
                </div>

                <div className="relative w-[300px] h-[300px] border-2 border-[#5B215F] rounded-full">
                  <Image
                    className="
                      absolute
                      left-[100px]
                      top-0
                      rounded-full
                      transition-transform duration-1000 ease-in-out
                      group-hover:translate-x-[-100px]
                    "
                     src="/familyroom.png"
                    width={300}
                    height={300}
                    alt="familyy room"
                  />
                </div>
              </div>
            </div>
          </div>

     
          <div className="flex flex-col items-center md:items-start">
            <div className="
              w-[220px] h-[220px]
              md:w-[300px] md:h-[300px]
              rounded-full
              bg-white
              
              mb-6
              hover:bg-[#5B215F]
              transition-colors duration-1000
            ">
              <div className="group">
                <div className="flex justify-center mt-[20px] ">
                  <Image className="mt-3" src="/EVCharging.svg.png" width={50} height={50} alt="Baby Care Logo" />
                  <h2 className="max-w-[190px] max-h-[32px] mt-[20px] text-[20px] text-[#5B215F] font-medium group-hover:text-white transition-colors duration-1000">
                    Ev charging socket
                  </h2>
                </div>

                <div className="relative w-[300px] h-[300px] border-2 border-[#5B215F] rounded-full">
                  <Image
                    className="
                    
                      absolute
                      left-[100px]
                      top-0
                      rounded-full
                      transition-transform duration-1000 ease-in-out
                      group-hover:translate-x-[-100px]
                    "
                    src="/charging.png"
                    width={300}
                    height={300}
                    alt="Baby Care"
                  />
                </div>
              </div>
            </div>
          </div>
          

        </div>
        <div className="flex flex-col gap-12 md:gap-8">
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
   
  </div>

 
  <div className="grid grid-cols-1 md:flex md:justify-center  md:gap-8">
    
  
    <div className="flex flex-col items-center">
      <div className="
        w-[220px] h-[220px]
        md:w-[300px] md:h-[300px]
        rounded-full
        bg-white
        mb-6
        hover:bg-[#5B215F]
        transition-colors duration-1000
      ">
        <div className="group">
          <div className="flex justify-center mt-[20px]">
            <Image src="/parking.png" width={50} height={50} alt="Valet Parking Icon" />
            <h2 className="max-w-[190px] max-h-[32px] mt-[20px] text-[20px] text-[#5B215F] font-medium group-hover:text-white transition-colors duration-1000">
              Valet parking
            </h2>
          </div>

          <div className="relative w-[300px] h-[300px] border-2 border-[#5B215F] rounded-full">
            <Image
              className="
                absolute
                left-[100px]
                top-0
                rounded-full
                transition-transform duration-1000 ease-in-out
                group-hover:translate-x-[-100px]
              "
              src="/vallet.png"
              width={300}
              height={300}
              alt="Valet Parking"
            />
          </div>
        </div>
      </div>
    </div>

 
    <div className="flex flex-col items-center">
      <div className="
        w-[220px] h-[220px]
        md:w-[300px] md:h-[300px]
        rounded-full
        bg-white
        mb-6
        hover:bg-[#5B215F]
        transition-colors duration-1000
      ">
        <div className="group">
          <div className="flex justify-center mt-[20px]">
            <Image src="/fa_wheelchair-alt.png" width={50} height={50} alt="Wheelchair Icon" />
            <h2 className="max-w-[190px] max-h-[32px] mt-[20px] text-[20px] text-[#5B215F] font-medium group-hover:text-white transition-colors duration-1000">
              Wheel chair
            </h2>
          </div>

          <div className="relative w-[300px] h-[300px] border-2 border-[#5B215F] rounded-full">
            <Image
              className="
                absolute
                left-[100px]
                top-0
                rounded-full
                transition-transform duration-1000 ease-in-out
                group-hover:translate-x-[-100px]
              "
              src="/wheelchair.png"
              width={300}
              height={300}
              alt="Wheel Chair"
            />
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
        

      </div>
    </div>
  );
};

export default ServicePage;
