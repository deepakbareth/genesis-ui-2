import React, { useState, useEffect } from 'react';
import maintenanceImg from '../../assets/Servicesimg/maintenance.jpg'; // Single image asset matching your template layout

const MaintenanceService = () => {
    const [activeTab, setActiveTab] = useState('hydrogen');
    const [isExpanded, setIsExpanded] = useState(false);

    // Reset expand state when switching between service types
    useEffect(() => {
        setIsExpanded(false);
    }, [activeTab]);

    const evCapabilities = [
        "Inspecting and maintaining charging levels and power output",
        "Examining and cleaning charging connectors for proper contact",
        "Ensuring the adequacy of power supply to charging stations",
        "Maintaining electrical infrastructure, including transformers, switchgear, and cabling",
        "Regularly testing safety features, such as ground-fault protection, overcurrent protection, and electrical isolation",
        "Verifying ongoing compliance with local, regional, and national regulations and standards",
        "Monitoring communication systems for connectivity and reliability",
        "Servicing and updating payment systems to ensure seamless transactions"
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white font-sans scroll-mt-10" id="maintenance">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Grid Layout Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN: Large Single Image (Bottom on mobile, Left on desktop) */}
                    <div className="lg:col-span-6 w-full h-[400px] md:h-[500px] lg:h-[650px] order-2 lg:order-1">
                        <img
                            src={maintenanceImg}
                            alt="Industrial infrastructure maintenance and inspection services"
                            className="w-full h-full object-cover rounded-sm shadow-sm"
                        />
                    </div>

                    {/* RIGHT COLUMN: Tabbed Content (Top on mobile, Right on desktop) */}
                    <div className="lg:col-span-6 flex flex-col pt-2 lg:pt-4 order-1 lg:order-2">

                        {/* Overline Text */}
                        <span className="text-[13px] text-gray-500 tracking-[0.15em] uppercase mb-3 font-semibold">
                            Support & Operations
                        </span>

                        {/* Title */}
                        {/* Title */}
                        <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[48px] font-normal text-red-700 leading-[1.1] tracking-tight mb-6">
                            Maintenance Service
                        </h2>

                        {/* Thick Color Divider Bar */}
                        <div className="w-10 h-1.5 bg-red-700 mb-8"></div>

                        {/* Service Sub-Tab Navigation Menu - Clean Underline Style matching image_6e56e4.png */}
                        <div className="flex flex-wrap gap-x-8 gap-y-2 border-b border-gray-200 mb-8">
                            {[
                                { id: 'hydrogen', label: 'For Hydrogen' },
                                { id: 'cng-lng', label: 'For CNG/LNG' },
                                { id: 'ev-charging', label: 'For EV Charging' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`pb-3 text-[15px] cursor-pointer font-semibold transition-all duration-300 border-b-4 ${activeTab === tab.id
                                        ? 'border-red-700 text-red-700'
                                        : 'border-transparent text-gray-400 hover:text-red-700'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Smooth Transition Expansion Container */}
                        <div className="relative w-full">
                            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[2500px]' : 'max-h-[280px]'}`}>

                                {/* HYDROGEN TAB CONTENT */}
                                {activeTab === 'hydrogen' && (
                                    <div className="space-y-5 text-[15px] md:text-[20px] text-[#4A5568] leading-[1.75]">
                                        <p>
                                            Genesis Contracting Inc. is committed to providing exceptional maintenance services for hydrogen fueling systems, focusing on practical and effective solutions. Our expert technicians handle skid replacement, removing and replacing outdated or damaged skids to improve overall efficiency and safety. We also specialize in adding or replacing compressors, a critical component for managing high-pressure hydrogen storage and distribution. Moreover, our team is adept at maintaining high-pressure lines, addressing potential issues promptly to minimize downtime and ensure smooth operations of our clients' fueling infrastructure.
                                        </p>
                                        <p>
                                            In addition to these services, we offer prompt natural disaster hydrogen system repair, assisting clients in restoring their fueling systems after unexpected events such as hurricanes, earthquakes, or floods. Genesis Contracting Inc. is dedicated to optimizing compressed air systems, enhancing energy efficiency and reducing energy consumption. We provide cryogenic pump replacement services, guaranteeing the safe and effective functioning of the hydrogen fueling process. By focusing on these practical solutions, we ensure our clients benefit from a consistently high-performing and reliable hydrogen fueling infrastructure, promoting a cleaner, more sustainable future.
                                        </p>
                                    </div>
                                )}

                                {/* CNG/LNG TAB CONTENT */}
                                {activeTab === 'cng-lng' && (
                                    <div className="space-y-5 text-[15px] md:text-[20px] text-[#4A5568] leading-[1.75]">
                                        <p>
                                            Genesis Contracting Inc. is dedicated to providing top-notch maintenance services for compressed natural gas (CNG) fueling systems, with a focus on practical and efficient solutions. Our skilled technicians are proficient in handling skid replacements, removing and replacing outdated or damaged skids to enhance overall efficiency and safety. In addition, we specialize in adding or replacing compressors, a critical component for maintaining the proper storage and distribution of compressed natural gas.
                                        </p>
                                        <p>
                                            Our team is adept at managing high-pressure lines, ensuring potential issues are swiftly addressed to minimize downtime and maintain the smooth operation of our clients' CNG fueling infrastructure. Moreover, we offer prompt natural disaster CNG system repair services, assisting clients in restoring their fueling systems after unforeseen events such as hurricanes, earthquakes, or floods.
                                        </p>
                                        <p>
                                            Genesis Contracting Inc. is committed to improving the performance of our clients' fueling systems by optimizing compressed air systems, leading to enhanced energy efficiency and reduced energy consumption. We also offer cryogenic pump replacement services, ensuring the safe and effective operation of the CNG fueling process. By concentrating on these practical and tangible solutions, we ensure that our clients can rely on a consistently high-performing and dependable CNG fueling infrastructure, contributing to a cleaner, more sustainable future.
                                        </p>
                                    </div>
                                )}

                                {/* EV CHARGING TAB CONTENT */}
                                {activeTab === 'ev-charging' && (
                                    <div className="text-[15px] md:text-[20px] text-[#4A5568] leading-[1.75] space-y-5">
                                        <p>
                                            Genesis Contracting recognizes the importance of keeping EV charging stations operating at peak performance to ensure uninterrupted service for our clients. Our dedicated maintenance support helps minimize downtime and guarantees reliable, efficient charging infrastructure for all users.
                                        </p>
                                        <div>
                                            <p className="mb-4 text-gray-900 font-semibold text-[20px]">Key maintenance aspects include:</p>
                                            <ul className="space-y-4">
                                                {evCapabilities.map((capability, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <svg className="w-5 h-5 text-[#1ba345] mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="text-[#4A5568]">{capability}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                            </div>

                            {/* Fading Gradient Content Mask */}
                            {!isExpanded && (
                                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                            )}
                        </div>

                        {/* Read More / Read Less CTA Button */}
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

export default MaintenanceService;