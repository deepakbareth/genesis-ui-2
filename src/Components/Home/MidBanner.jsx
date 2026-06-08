import { useState, useEffect } from 'react';
import Img1 from '../../assets/Home/img1.jpg'
import Img2 from '../../assets/Home/img2.jpg'
import Img3 from '../../assets/Home/img3.jpg'
import Img4 from '../../assets/Home/h5.jpg'


// 1. Data Object driving the entire Banner layout and content
const bannerData = {
    images: [
        Img1,
        Img2,
        Img3,
        Img4
    ],
    textContent: {
        titleTop: "Digital Delivery:",
        titleBottom: "Building at Scale",
        paragraph1: "Genesis Contracting delivers commercial fuel projects with greater speed and certainty by leveraging modern digital estimation tools, turn-key scheduling, and field-proven system designs.",
        paragraph2: "Real-time budgetary data streamlines local permitting and engineering workflows. Our advanced modular infrastructure improves setup quality and reduces environmental risk—ensuring highly cost-effective, debt-free execution that safely accelerates project schedules."
    }
};

const MidBanner = () => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    // Automatically cycle through images every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImgIndex((prevIndex) => 
                prevIndex === bannerData.images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // 4000ms = 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-screen flex items-center bg-gray-900 overflow-hidden font-sans">
            
            {/* --- SMOOTH BACKGROUND IMAGE SLIDESHOW --- */}
            <div className="absolute inset-0 w-full h-full z-0">
                {bannerData.images.map((imgUrl, index) => {
                    const isActive = index === currentImgIndex;
                    return (
                        <img
                            key={imgUrl}
                            src={imgUrl}
                            alt={`Banner slideshow ${index + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-100'
                            } transform duration-[4000ms]`} // Optional subtle zoom effect
                        />
                    );
                })}
            </div>

            {/* Dark Gradient Overlay for Maximum Readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

            {/* --- CONTENT CONTAINER --- */}
            <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-24">
                {/* Responsive 2-Column Text Layout to match screenshot structure */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
                    
                    {/* Left Big Heading (Takes 5 columns on desktop) */}
                    <div className="lg:col-span-6">
                        <h1 className="text-white text-5xl md:text-6xl lg:text-[76px] font-bold tracking-tight leading-[1.05] drop-shadow-md">
                            {bannerData.textContent.titleTop} 
                            <span className="block font-normal mt-2">
                                {bannerData.textContent.titleBottom}
                            </span>
                        </h1>
                    </div>

                    {/* Right Dual Paragraphs (Takes 6 columns on desktop) */}
                    <div className="lg:col-span-6 flex flex-col gap-6 text-white/90 text-[15px] md:text-[20px] leading-[1.65] lg:pl-6 max-w-xl">
                        <p className="drop-shadow-sm font-semibold">
                            {bannerData.textContent.paragraph1}
                        </p>
                        <p className="drop-shadow-sm text-white/80">
                            {bannerData.textContent.paragraph2}
                        </p>
                    </div>

                </div>
            </div>
            
        </section>
    );
};

export default MidBanner;