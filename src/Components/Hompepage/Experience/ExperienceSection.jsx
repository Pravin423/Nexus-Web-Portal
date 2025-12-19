import React, { useState } from 'react';
import Image from 'next/image';
import FakeSearchbar from './FakeSearchbar';
import ExpCard from './ExpCard';

const ExperienceSection = () => {
    const exp = [
        { src: "/exp1.jpg", title: "Shopping", bg: "oklch(51.8% 0.253 323.949)", clicked:"/shopping.png" },
        { src: "/exp2.jpg", title: "Dining", bg: "oklch(70.5% 0.213 47.604)", clicked:"/dining.png.jpg" },
        { src: "/exp3.jpg", title: "Entertainment", bg: "oklch(50.5% 0.213 27.518)", clicked:"/entertainment.png" },
        { src: "/exp4.jpg", title: "Others", bg: "oklch(87.9% 0.169 91.605)", clicked:"/others.png" }
    ];

    const [modalImage, setModalImage] = useState(null); 

    return (
        <section className="w-full bg-white py-10 relative">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#00153D]">Featured Experiences</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto overflow-hidden gap-6">
                {exp.map((item, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden aspect-[16/9] cursor-pointer"
                    >
                        <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700"
                        />

                        <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                            <div 
                                style={{ backgroundColor: item.bg }}
                                className="absolute inset-0 opacity-40" 
                            />
                            <div className="absolute inset-0 flex mb-[20px] items-baseline-last justify-center">
                                <FakeSearchbar  
                                    title={item.title} 
                                    color={item.bg} 
                                    click={() => setModalImage(item.clicked)} 
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

    
            {modalImage && (
                <div 
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={() => setModalImage(null)} 
                >
                    <div 
                        className="relative bg-white rounded-lg p-4 max-w-[90%] max-h-[90%]"
                        onClick={e => e.stopPropagation()} 
                    >
                        <button
                            className="absolute top-2 right-2 text-black text-2xl font-bold"
                            onClick={() => setModalImage(null)}
                        >
                            &times;
                        </button>
                        <ExpCard image={modalImage} />
                    </div>
                </div>
            )}
        </section>
    );
};

export default ExperienceSection;
