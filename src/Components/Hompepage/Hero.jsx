import React from 'react'
import HeroForm from './HeroForm/HeroForm'
import Banner from './Banner'

export default function Hero() {
    return (
        
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-[20px] px-4 py-10 lg:py-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/herobackground.png')" }}>
            
            
            <div className="w-full lg:w-auto flex justify-center">
                <Banner />
            </div>

            <div className="w-full lg:w-auto flex justify-center">
                <HeroForm />
            </div>

            
            
        </div>
    )
}