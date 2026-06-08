import React, { useState, useEffect } from 'react';
import hydrogenImg from '../../assets/Servicesimg/hydrogen.jpg'; // Change to your actual image path

const HydrogenService = () => {
    // State to handle tab switching and the Read More button
    const [activeTab, setActiveTab] = useState('overview');
    const [isExpanded, setIsExpanded] = useState(false);

    // Whenever a user clicks a new tab, automatically collapse the text back to normal
    useEffect(() => {
        setIsExpanded(false);
    }, [activeTab]);

    useEffect(() => {
        if (window.location.hash === '#hydrogen') {
            const element = document.getElementById('hydrogen');
            if (element) {
                // Small timeout ensures the DOM is fully painted
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    return (
        <section className="w-full py-16 md:py-24 bg-white font-sans scroll-mt-10" id="hydrogen">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Grid Layout: Left Image / Right Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN: Large Image */}

                    <div className="lg:col-span-6 w-full h-[400px] md:h-[500px] lg:h-[650px] order-2 ">
                        <img
                            src={hydrogenImg}
                            alt="Hydrogen Powered Infrastructure"
                            className="w-full h-full object-cover rounded-sm shadow-sm"
                        />
                    </div>

                    {/* RIGHT COLUMN: Airbus Style Content */}
                    <div className="lg:col-span-6 flex flex-col pt-2 lg:pt-4">

                        {/* 1. Small Overline Text */}
                        <span className="text-[13px] text-gray-500 tracking-[0.15em] uppercase mb-3 font-semibold">
                            Alternative Fuels
                        </span>

                        {/* 2. Main Title (Deep Airbus Blue) */}
                        {/* Title */}
                        <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[48px] font-normal text-red-700 leading-[1.1] tracking-tight mb-6">
                            Hydrogen Service
                        </h2>

                        {/* 3. Short Thick Divider Line */}
                        <div className="w-10 h-1.5 bg-red-700 mb-8"></div>

                        {/* 4. Tab Navigation */}
                        <div className="flex flex-wrap gap-6 border-b border-gray-200 mb-8">
                            {['overview', 'capabilities', 'maintenance'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-3 text-[15px] cursor-pointer font-semibold transition-all duration-300 border-b-4 capitalize ${activeTab === tab
                                        ? 'border-red-700 text-red-700'
                                        : 'border-transparent text-gray-400 hover:text-red-700'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* 5. Expanding Content Area */}
                        <div className="relative w-full">

                            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[2000px]' : 'max-h-[280px]'
                                }`}>

                                {/* OVERVIEW TAB */}
                                {activeTab === 'overview' && (
                                    <div className="space-y-5 text-[15px] md:text-[20px] text-[#4A5568] leading-[1.75]">
                                        <p>
                                            Genesis Contracting Inc. proudly offers its exceptional expertise and workmanship in creating hydrogen fueling systems for a diverse array of clients. As a leading provider of clean energy solutions, we are dedicated to fostering a greener and more sustainable future through our innovative hydrogen fueling infrastructure. Our services cater to businesses and commercial establishments, hydrogen fueled fleets, and material handling equipment (MHE) across various sectors.
                                        </p>
                                        <p>
                                            Our clientele encompasses grocery stores, convenience stores, logistics and transportation firms, retail chains, delivery and courier services, construction companies, public transportation providers, and emergency services. By choosing Genesis Contracting Inc., you invest in cutting edge technology and unparalleled expertise, propelling your organization towards a more eco-friendly and prosperous future.
                                        </p>
                                    </div>
                                )}

                                {/* CAPABILITIES TAB */}
                                {activeTab === 'capabilities' && (
                                    <div className="text-[15px] md:text-[20px] text-[#4A5568] leading-[1.75]">
                                        <p className="mb-4 text-gray-800 font-semibold">Key capabilities include:</p>
                                        <ul className="space-y-3">
                                            {[
                                                "Engineering design of fuel distribution systems and supporting infrastructure",
                                                "Managing of jobsite commencement local permits",
                                                "Conducting jobsite inspections for every stage of development",
                                                "Performing excavation, grading, foundation work, electrical and mechanical underground, grounding and supporting concrete structures",
                                                "Employing certified Swagelok and Orbital technicians safe project completion",
                                                "Collaborating with strategic suppliers for materials and equipment",
                                                "Installs hydrogen distribution pads",
                                                "Routes and installs high-pressure mechanical lines",
                                                "Fits interior fueling dispensers per local, state, and fire codes",
                                                "Implements vent stack installations",
                                                "Establishes fiber optic communication systems",
                                                "Sets up compressed air distribution",
                                                "Installs continuous volume air compressors",
                                                "Mounts hydrogen storage tanks",
                                                "Installs cryogenic pumps",
                                                "Implements skid control panel installations",
                                                "Installs gaseous hydrogen tubes",
                                                "Sets up two and three-stage hydrogen compressors"
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <svg className="w-5 h-5 text-[#21a552] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* MAINTENANCE TAB */}
                                {activeTab === 'maintenance' && (
                                    <div className="space-y-5 text-[15px] md:text-[20px] text-[#4A5568] leading-[1.75]">
                                        <p className="text-gray-800 font-semibold mb-1">Maintenance and upgrades:</p>
                                        <p>
                                            Genesis Contracting Inc. excels in providing comprehensive support for clients through its expertise in maintenance and upgrades of hydrogen fueling systems. A primary focus of this support is the execution of efficiency projects, which serve to optimize system performance and extend operational longevity. <strong className="text-red-700 font-bold">One such efficiency project involves the addition or replacement of hydrogen compressors and dispensers,</strong> a critical component that greatly influences the effectiveness of the fueling infrastructure.
                                        </p>
                                        <p>
                                            Efficiency projects undertaken by Genesis Contracting Inc. are carefully assessed to identify the most appropriate solutions, striking the ideal balance between performance, reliability, and cost-effectiveness. By placing an emphasis on these projects, the company ensures that clients receive improved fueling rates, reduced operational costs, and extended system lifespans. This approach demonstrates Genesis Contracting Inc.’s commitment to fostering long-term relationships with clients and delivering exceptional value through their hydrogen fueling infrastructure investments.
                                        </p>
                                    </div>
                                )}

                            </div>

                            {/* White Fade Gradient overlay when text is collapsed */}
                            {!isExpanded && (
                                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                            )}

                        </div>

                        {/* 6. Read More Button */}
                        <div className="mt-8">
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="bg-red-700 cursor-pointer hover:bg-[#00153b] text-white px-7 py-3 rounded-sm font-semibold text-[15px] transition-colors duration-300 shadow-md"
                            >
                                {isExpanded ? 'Read less' : 'Read more'}
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default HydrogenService;