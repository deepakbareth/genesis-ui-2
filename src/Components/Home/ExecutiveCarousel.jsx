import React, { useState, useEffect } from 'react';
import Img1 from '../../assets/Home/own1.jpg'
import Img2 from '../../assets/Home/own2.jpg'
import Img3 from '../../assets/Home/own4.jpg'
import s1 from '../../assets/Home/h3.jpg'
import s2 from '../../assets/Home/h4.jpg'
import s3 from '../../assets/Home/img3.jpg'


// 1. Unified array holding distinct content for each slide
const carouselData = [
    {
        headline: "Leading the Alternative Fueling Industry",
        paragraph: "With all the changes we’re seeing in the alternative fueling industry including electrical vehicle (EV) filling we are extremely excited for future growth and expansion.", //
        author: {
            name: "Matt Roller", //
            role: "SENIOR PROJECT MANAGER & FOUNDER", //
            avatar: Img1
        },
        mainImage: s1
    },
    {
        headline: "Over 30 Years of Construction Excellence",
        paragraph: "After being in the construction industry for over 30 years the path to this point amazes me . We continue to expand in the alternative field keeping our business goals of honesty and quality that speaks volumes.", //
        author: {
            name: "John Lang", //
            role: "PRESIDENT", //
            avatar: Img2
        },
        mainImage: s2
    },
    {
        headline: "Building Trusting Relationships",
        paragraph: "The foundation of our business is based on trusting relationships with each other, our employees, clients, and customers. We are a team of professionals with mid-west values that strives for the best in everything we do.", //
        author: {
            name: "James Gordon", //
            role: "CFO", //
            avatar: Img3
        },
        mainImage: s3
    }
];

const ExecutiveCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    // Handle automated slide rotation
    useEffect(() => {
        let interval = null;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
                );
            }, 5000); // Transitions every 5 seconds
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const activeSlide = carouselData[currentIndex];

    return (
        <section className="relative w-full py-16 lg:py-24 font-sans overflow-hidden">
            
            {/* Standard Dotted Edge Background */}
            <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-[size:30px_30px]"></div>

            {/* Main Solid Center Block */}
            <div className="relative z-10 max-w-[1400px] mx-auto bg-white px-6 lg:px-12 py-12 lg:py-16 rounded-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* LEFT CONTAINER: Fully dynamic copy and controls (7 columns) */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full min-h-[480px]">
                        
                        <div>
                            {/* Quote Icon */}
                            <svg className="w-10 h-10 text-[#9CA3AF] mb-4 opacity-35" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 231v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            
                            {/* Heading */}
                            <h2 key={`head-${currentIndex}`}
className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[48px] font-normal text-[#2A3A4A] leading-[1.15] tracking-tight mb-10 whitespace-pre-line">
     {activeSlide.headline}
                            </h2>
                              
                            {/* Description Paragraph */}
                            <p key={`para-${currentIndex}`} className="text-[15px] md:text-[20px] text-[#4A5568] leading-[1.7] mb-8 max-w-[92%] animate-fade-in">
                                {activeSlide.paragraph}
                            </p>
                        </div>

                        {/* Profile Block & Dynamic Progress Bar System */}
                        <div className="mt-auto">
                            
                            {/* Member Meta */}
                            <div key={`auth-${currentIndex}`} className="flex items-center gap-4 mb-10 animate-fade-in">
                                <img 
                                    src={activeSlide.author.avatar} 
                                    alt={activeSlide.author.name} 
                                    className="w-[56px] h-[56px] rounded-full object-cover shadow-sm border border-gray-100"
                                />
                                <div className="flex flex-col">
                                    <span className="text-[17px] font-semibold text-[#111827]">
                                        {activeSlide.author.name}
                                    </span>
                                    <span className="text-[11px] font-bold text-[#6B7280] tracking-widest uppercase mt-0.5">
                                        {activeSlide.author.role}
                                    </span>
                                </div>
                            </div>

                            {/* PROGRESS TRACKERS & PLAY/PAUSE TRIGGER */}
                            <div className="flex flex-col gap-4 max-w-[450px]">
                                
                                {/* Progress Bar Segments */}
                                <div className="grid grid-cols-4 gap-2">
                                    {carouselData.map((slide, idx) => (
                                        <button
                                            key={slide.year || idx}
                                            onClick={() => setCurrentIndex(idx)}
                                            className="h-[5px] w-full rounded-full transition-all duration-300 relative bg-gray-200 overflow-hidden cursor-pointer"
                                        >
                                            {/* Fill line inside segment */}
                                            <div className={`absolute top-0 left-0 h-full bg-[#DA291C] transition-all ${
                                                idx === currentIndex ? 'w-full duration-[5000ms] ease-linear' : 'w-0 duration-0'
                                            }`} />
                                        </button>
                                    ))}
                                </div>

                                {/* Play / Pause Control Button */}
                                <div className="flex items-center pl-0.5">
                                    <button 
                                        onClick={() => setIsPlaying(!isPlaying)}
                                        className="p-1.5 rounded-full border border-gray-300 text-[#4A5568] hover:text-[#DA291C] hover:border-[#DA291C] transition-colors cursor-pointer"
                                        aria-label={isPlaying ? "Pause automatic slide presentation" : "Play automatic slide presentation"}
                                    >
                                        {isPlaying ? (
                                            /* Pause Symbol Graphic */
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                                            </svg>
                                        ) : (
                                            /* Play Symbol Graphic */
                                            <svg className="w-4 h-4 pl-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        )}
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* RIGHT CONTAINER: Main sliding visual card (5 columns) */}
                    <div className="lg:col-span-5 w-full h-[350px] lg:h-[520px] relative rounded-xl overflow-hidden shadow-md">
                        <img 
                            key={`img-${currentIndex}`}
                            src={activeSlide.mainImage} 
                            alt="Infrastructure detail presentation" 
                            className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExecutiveCarousel;