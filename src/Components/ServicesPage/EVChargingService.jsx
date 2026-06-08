import React, { useState, useEffect } from 'react';
import evImg from '../../assets/Servicesimg/ev-charging.jpg'; // Change to your actual single image path

const EVChargingService = () => {
    // State to handle tab switching and the Read More button
    const [activeTab, setActiveTab] = useState('overview');
    const [isExpanded, setIsExpanded] = useState(false);

    // Whenever a user clicks a new tab, automatically collapse the text back to normal
    useEffect(() => {
        setIsExpanded(false);
    }, [activeTab]);

    return (
        <section className="w-full py-16 md:py-24 bg-white font-sans scroll-mt-10" id="ev-charging">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Grid Layout: Left Image / Right Content (Matches previous sections perfectly) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12  lg:gap-16 items-start">

                    {/* LEFT COLUMN: Large Single Image */}
                    <div className="lg:col-span-6 w-full h-[400px] md:h-[500px] lg:h-[650px] order-2 lg:order-1">
                        <img
                            src={evImg}
                            alt="Electric Vehicle Charging Infrastructure"
                            className="w-full h-full object-cover rounded-sm shadow-sm"
                        />
                    </div>

                    {/* RIGHT COLUMN: Tabbed Content */}
                    <div className="lg:col-span-6 flex flex-col pt-2 lg:pt-4">

                        {/* 1. Small Overline Text */}
                        <span className="text-[13px] text-gray-500 tracking-[0.15em] uppercase mb-3 font-semibold">
                            EV Infrastructure
                        </span>

                        {/* 2. Main Title */}
                        {/* Title */}
                        <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[48px] font-normal text-red-700 leading-[1.1] tracking-tight mb-6">
                            Electrical Vehicle Charging Service
                        </h2>

                        {/* 3. Short Thick Divider Line (Electric Blue branding) */}
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

                            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[3000px]' : 'max-h-[280px]'}`}>

                                {/* OVERVIEW TAB */}
                                {activeTab === 'overview' && (
                                    <div className="space-y-5 text-[15px] md:text-[20px] text-[#4A5568] leading-[1.75]">
                                        <p>
                                            Genesis Contracting Inc. is a leading provider of expert services and workmanship in the field of electric vehicle (EV) charging station installation. With a strong commitment to quality and customer satisfaction, our skilled team delivers tailored solutions to a diverse range of clients, helping them transition to a sustainable, eco-friendly future.
                                        </p>
                                        <p>
                                            Our clientele includes businesses and commercial establishments such as department stores, discount stores, specialty stores, grocery stores, online retailers, convenience stores, and luxury retailers. We also cater to <strong className="text-[#00205b] font-semibold">EV fleets in logistics, transportation, retail, delivery and courier services, construction, public transportation, and emergency services.</strong> Furthermore, we collaborate with automakers, assisting them in setting up charging infrastructure on their premises for in-house testing, validation, and ensuring their EV models are ready for distribution. Genesis Contracting Inc. is proud to support government initiatives, partnering with public agencies to build robust, reliable EV charging networks that contribute to national sustainability goals.
                                        </p>
                                        <p>
                                            A competent EV charging station contractor offers a comprehensive range of services to ensure seamless installation and setup.
                                        </p>
                                    </div>
                                )}

                                {/* CAPABILITIES TAB */}
                                {activeTab === 'capabilities' && (
                                    <div className="text-[15px] md:text-[20px] text-[#4A5568] leading-[1.75]">
                                        <p className="mb-4 text-gray-800 font-semibold">Key capabilities include:</p>
                                        <ul className="space-y-4">
                                            {[
                                                "Engineering design of charging stations networks and supporting infrastructure",
                                                "Managing of jobsite commencement permits",
                                                "Conducting jobsite inspections for every stage of development",
                                                "Performing excavation, grading, foundation work and supporting concrete structures",
                                                "Employing certified electricians for safe project completion",
                                                "Collaborating with strategic suppliers for materials and equipment"
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <svg className="w-5 h-5 text-[#1ba345] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>{item}</span>
                                                </li>
                                            ))}

                                            {/* Nested Levels Section */}
                                            <li className="flex items-start gap-3 flex-col w-full">
                                                <div className="flex items-start gap-3">
                                                    <svg className="w-5 h-5 text-[#1ba345] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="font-semibold text-gray-800">Installing Level 1, Level 2, and Level 3 EV charging stations:</span>
                                                </div>
                                                <ul className="pl-8 space-y-3 mt-2 border-l-2 border-gray-100 ml-2.5">
                                                    <li className="text-[14px] md:text-[15px] text-gray-600">
                                                        <strong className="text-gray-800">Level 1 (AC):</strong> Offers slow charging (2-5 miles of range per hour) with a power output of around 1-2 kW. It typically uses a standard 120V household outlet.
                                                    </li>
                                                    <li className="text-[14px] md:text-[15px] text-gray-600">
                                                        <strong className="text-gray-800">Level 2 (AC):</strong> Offers faster charging (10-60 miles of range per hour) with a power output of around 3.3-19.2 kW. It requires a 208-240V electrical connection.
                                                    </li>
                                                    <li className="text-[14px] md:text-[15px] text-gray-600">
                                                        <strong className="text-gray-800">Level 3 (DC):</strong> Also known as DC fast charging or supercharging, it offers rapid charging (60-250+ miles of range per hour) with a power output of around 50-350 kW or higher. It requires a 480V+ electrical connection.
                                                    </li>
                                                </ul>
                                            </li>

                                            {[
                                                "Ensuring compatibility with various charging connectors (SAE J1772 [Type 1] commonly used for Level 1 and Level 2 charging in North America, IEC 62196 Type 2, CHAdeMO, CCS)",
                                                "Providing appropriate power supply for charging stations",
                                                "Establishing required electrical infrastructure (transformers, switchgear, cabling)",
                                                "Implementing safety features (ground-fault protection, overcurrent protection, electrical isolation)",
                                                "Ensuring regulatory compliance with local, regional, and national standards",
                                                "Integrating communication systems for networked charging stations",
                                                "Setting up payment systems for user convenience"
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <svg className="w-5 h-5 text-[#1ba345] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
                                    <div className="space-y-6 text-[15px] md:text-[20px] text-[#4A5568] leading-[1.75]">
                                        <div>
                                            <p className="text-gray-800 font-semibold mb-4">Key maintenance aspects include:</p>
                                            <ul className="space-y-3">
                                                {[
                                                    "Inspecting and maintaining charging levels and power output",
                                                    "Examining and cleaning charging connectors for proper contact",
                                                    "Ensuring the adequacy of power supply to charging stations",
                                                    "Maintaining electrical infrastructure, including transformers, switchgear, and cabling",
                                                    "Regularly testing safety features, such as ground-fault protection, overcurrent protection, and electrical isolation",
                                                    "Verifying ongoing compliance with local, regional, and national regulations and standards",
                                                    "Monitoring communication systems for connectivity and reliability",
                                                    "Servicing and updating payment systems to ensure seamless transactions"
                                                ].map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <svg className="w-5 h-5 text-[#1ba345] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Nested Sub-Section for Upgrades */}
                                        <div className="pt-4 border-t border-gray-100">
                                            <h3 className="text-[22px] font-normal text-[#00205b] mb-3 tracking-tight">
                                                Upgrades and Modifications
                                            </h3>
                                            <p className="mb-4">
                                                Genesis Contracting is committed to helping clients stay at the forefront of EV charging technology by offering expert upgrades and modifications. As the industry evolves, we ensure our clients' charging infrastructure remains efficient, reliable, and compatible with the latest innovations.
                                            </p>
                                            <p className="text-gray-800 font-semibold mb-3">Key aspects of upgrades and modifications include:</p>
                                            <ul className="space-y-3">
                                                {[
                                                    "Enhancing charging levels and power output to accommodate faster charging speeds",
                                                    "Updating charging connectors to support new EV models and standards",
                                                    "Expanding power supply capacity to meet the growing demand for charging points",
                                                    "Upgrading electrical infrastructure to comply with the latest safety and efficiency guidelines",
                                                    "Implementing advanced safety features and monitoring systems",
                                                    "Ensuring ongoing regulatory compliance as regulations and standards evolve",
                                                    "Integrating cutting-edge communication and networking technologies",
                                                    "Incorporating the latest payment systems for improved user experience and convenience"
                                                ].map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <svg className="w-5 h-5 text-[#1ba345] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
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

export default EVChargingService;