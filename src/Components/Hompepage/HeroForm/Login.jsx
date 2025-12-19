import React from 'react'
import Image from 'next/image'
import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const Login = ({step,setStep}) => {


    return (
        <div className="relative w-[479px] max-w-[479px] w-[400px] mr-[106px] mt-[40px] rounded-xl h-[546px] bg-white overflow-visible">
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
                    className={`
                                ${manrope.className}
                                text-[40px]
                                font-semibold
                                flex
                                items-center
                                text-[#5B215F]
                                `}
                >
                    <span>Nexus</span>
                    <span className="ml-[10px]">Hyderabad</span>
                </h1>
                <p
                    className={`
                                ${manrope.className}
                                text-[16px]
                                font-[400]
                                leading-[23.52px]
                                tracking-[0]
                                flex
                                items-center
                                text-gray-600
                                
                            `}
                >
                    Discover the events, offers and updates all in one place
                </p>

            </div>

            <div className="p-6">
                <h1 className={`text-[24px] text-black font-bold leading-none mb-1 ${manrope.className}`}>Signup for the event</h1>

                <form>
                    <div className="mt-[20px] space-y-[12px]">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter name"
                            className="bg-[#F4F4F4] px-3 py-2 h-[52px] rounded-[11px] w-full"
                        />

                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter phone number"
                            className="bg-[#F4F4F4] px-3 h-[52px] py-2 rounded-[11px] w-full"
                        />

                    </div>
                    <div className='space-y-[15px]'>
                        <div className="flex  ml-[20px] mt-[20px] items-center">
                            <input
                                type="checkbox"
                                className="
                                        w-[24px] h-[24px]
                                        rounded-[4px]
                                        bg-[#E5E5E5]
                                        appearance-none
                                        border-0
                                        cursor-pointer
                                        checked:bg-[#5e9ee8]
    "
                            />
                            <p className={`ml-[10px] text-[#5B215F] font-semibold ${manrope.className}`}>
                                Terms & Conditions
                            </p>

                        </div>

                        <div className="flex ml-[20px] mt-[5px] items-center">
                            <input
                                type="checkbox"

                                className="
                                        w-[24px] h-[24px]
                                        rounded-[4px]
                                        bg-[#E5E5E5]
                                        appearance-none
                                        border-0
                                        cursor-pointer
                                        checked:bg-[#5e9ee8]
                                        "
                            />
                            <p className={`ml-[10px] text-[#5B215F] font-semibold ${manrope.className}`}>Get offers via WhatsApp/SMS</p>
                        </div>




                    </div>
                    <div onClick={()=>{
                        setStep(1)
                    }}  className='  bg-gradient-to-r  cursor-pointer from-[#FF6B00] to-[#E72276]  mt-[40px] rounded-[11px] w-max-[439px] h-[44px] flex text-center justify-center'>
                        <button className={`ml-[10px] cursor-pointer  text-white font-semibold ${manrope.className}`}>Join</button>
                    </div>



                </form>

                <div>
                    <Image
                src="/orangeleaf.png"
                width={43.96}
                height={34.71}
                alt="Yellow Leaf"
                className="absolute -bottom-4 -left-4"
            />
                </div>
               


            </div>






            

        </div>



    )
}

export default Login
