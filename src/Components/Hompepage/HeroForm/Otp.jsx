import React, { useState, useRef } from 'react';
import { Manrope } from "next/font/google";
import Image from 'next/image';
<link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
    rel="stylesheet"
/>

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const Otp = ({ step, setStep }) => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputsRef = useRef([]);

    const handleChange = (element, index) => {
        if (!isNaN(element.value)) {
            const newOtp = [...otp];
            newOtp[index] = element.value;
            setOtp(newOtp);
            // focus next input
            if (index < 5 && element.value !== "") {
                inputsRef.current[index + 1].focus();
            }
        }
    };

    const handleBackspace = (e, index) => {
        if (e.key === "Backspace" && otp[index] === "" && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

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

                <h1
                    className={`${manrope.className} text-[40px] font-semibold flex items-center text-[#5B215F]`}
                >
                    <span>Nexus</span>
                    <span className="ml-[10px]">Hyderabad</span>
                </h1>

                <p className={`${manrope.className} text-[16px] font-[400] leading-[23.52px] text-gray-600`}>
                    Discover the events, offers and updates all in one place
                </p>
            </div>
            <div>
                <h1 className={`text-[18px] ml-[30px] text-black  leading-none mb-1 ${manrope.className}`}>Enter OTP sent to your mobile number +91 98989898989</h1>

            </div>



            <div className="flex justify-between max-w-[360px] mx-6 mt-[100px]">
                {otp.map((data, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        onKeyDown={(e) => handleBackspace(e, index)}
                        ref={(el) => (inputsRef.current[index] = el)}
                        className="w-12 bg-[#F4F4F4] border-0 h-12 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-lg"
                    />
                ))}


            </div>
            <div className="flex items-center ml-[50px] mt-[50px] space-x-2">
                <FontAwesomeIcon
                    icon={faRotateRight}
                    className="fa-flip-horizontal text-[#5B215F] text-lg cursor-pointer"
                />
                <h1 className="font-semibold text-lg text-[#5B215F]">Resend OTP</h1>
            </div>
            <div onClick={() => {
                if (otp.every((digit) => digit !== "")) {
                    setStep(2);
                }
            }} className={`m-5   mt-[40px] rounded-[11px] w-[439px] h-[44px] flex justify-center items-center cursor-pointer
        ${otp.every((digit) => digit !== "")
                    ? "bg-gradient-to-r from-[#FF6B00] to-[#E72276] text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
                <button className={`ml-[10px] cursor-pointer text-white font-semibold ${manrope.className}`}>Submit</button>
            </div>


            <Image
                src="/orangeleaf.png"
                width={43.96}
                height={34.71}
                alt="Orange Leaf"
                className="absolute -bottom-4 -left-4"
            />
        </div>
    );
};

export default Otp;


