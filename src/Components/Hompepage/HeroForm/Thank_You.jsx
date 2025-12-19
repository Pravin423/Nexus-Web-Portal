import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const Thank_You = () => {
    const [count, setCount] = useState(3); 

    useEffect(() => {
        if (count === 0) return;

        const timer = setTimeout(() => {
            setCount(count - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [count]);

    return (
        <div className="relative max-w-[479px] w-[479px] mr-[106px] mt-[40px] rounded-xl h-[546px] bg-white overflow-visible">
            <Image
                src="/yellowleaf.png"
                width={36.69}
                height={28.97}
                alt="Yellow Leaf"
                className="absolute -top-4 -right-4"
            />

            <div className="p-6">
                <h1 className={`text-[24px] text-gray-700 font-semibold leading-none mb-1 ${manrope.className}`}>
                    Welcome to
                </h1>

                <h1 className={`${manrope.className} text-[40px] font-semibold flex items-center text-[#5B215F]`}>
                    <span>Nexus</span>
                    <span className="ml-[10px]">Hyderabad</span>
                </h1>

                <p className={`${manrope.className} text-[16px] font-[400] leading-[23.52px] text-gray-600`}>
                    Discover the events, offers and updates all in one place
                </p>
            </div>

            <div className='mt-[20px]'>
                <Image
                    src="/typagelogo.png"
                    width={459}
                    height={63}
                    alt="Typage Logo"
                />
            </div>

            <div className='flex flex-col p-6 justify-center mt-[30px]'>
                <h1 className={`font-semibold text-center text-black ${manrope.className} text-[30px]`}>Thank You!</h1>
                <h1 className={`font-medium text-center text-gray-600 ${manrope.className} text-[24px]`}>
                    Redirecting you to BookMyShow
                    <br /> for more information.
                </h1>
            </div>

            
            <div className={`text-[40px] font-medium text-center ${manrope.className} text-gray-400 mt-2`}>
                {count > 0 ? count : 0}
            </div>

            <div>
                <Image
                    src="/orangeleaf.png"
                    width={43.96}
                    height={34.71}
                    alt="Orange Leaf"
                    className="absolute -bottom-4 -left-4"
                />
            </div>
        </div>
    );
};

export default Thank_You;
