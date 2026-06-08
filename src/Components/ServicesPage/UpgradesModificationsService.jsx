import React, { useState, useEffect } from 'react';
import upgradesImg from '../../assets/Servicesimg/upgrades.jpg'; // Single image asset positioned on the right column

const UpgradesModificationsService = () => {
    const [activeTab, setActiveTab] = useState('hydrogen');
    const [isExpanded, setIsExpanded] = useState(false);

    // Reset expand state when switching between service types
    useEffect(() => {
        setIsExpanded(false);
    }, [activeTab]);

    const evUpgrades = [
        "Enhancing charging levels and power output to accommodate faster charging speeds",
        "Updating charging connectors to support new EV models and standards",
        "Expanding power supply capacity to meet the growing demand for charging points",
        "Upgrading electrical infrastructure to comply with the latest safety and efficiency guidelines",
        "Implementing advanced safety features and monitoring systems",
        "Ensuring ongoing regulatory compliance as regulations and standards evolve",
        "Integrating cutting-edge communication and networking technologies",
        "Incorporating the latest payment systems for improved user experience and convenience"
    ];

    return (
        <section className="w-full py-16 md:py-24  font-sans scroll-mt-10" id="upgrades">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Grid Layout Container - TEXT LEFT, IMAGE RIGHT (Alternating Pattern) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN: Tabbed Content (Top on mobile, Left on desktop) */}
                    <div className="lg:col-span-6 flex flex-col pt-2 lg:pt-4 order-1">

                        {/* Overline Text */}
                        <span className="text-[13px] text-gray-500 tracking-[0.15em] uppercase mb-3 font-semibold">
                            System Optimization
                        </span>

                        {/* Title */}
                        {/* Title */}
                        <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[48px] font-normal text-red-700 leading-[1.1] tracking-tight mb-6">
                            Upgrades & Modifications Service
                        </h2>

                        {/* Thick Color Divider Bar */}
                        <div className="w-10 h-1.5 bg-red-700 mb-8"></div>

                        {/* Service Sub-Tab Navigation Menu - Clean Underline Style */}
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
                                            Genesis Contracting Inc. is committed to providing outstanding efficiency projects and upgrade services for hydrogen fueling systems, concentrating on practical and impactful solutions. Our experienced technicians are skilled in executing system upgrades, such as replacing outdated components or integrating cutting-edge technologies, to enhance the overall efficiency, safety, and reliability of hydrogen fueling systems.
                                        </p>
                                        <p>
                                            One of our key services includes the addition or replacement of compressors, a crucial component for managing high-pressure hydrogen storage and distribution. By optimizing these elements, we ensure our clients benefit from improved fueling rates and extended system lifespans. Furthermore, our team excels in handling high-pressure line upgrades, addressing potential issues swiftly to minimize downtime and maintain seamless operations for our clients' hydrogen fueling infrastructure.
                                        </p>
                                        <p>
                                            In addition to these services, Genesis Contracting Inc. offers comprehensive efficiency projects that include optimizing compressed air systems, resulting in increased energy efficiency and reduced energy consumption. We also provide cryogenic pump replacement services, ensuring the safe and effective functioning of the hydrogen fueling process. By focusing on these practical and impactful solutions, we guarantee that our clients can rely on a consistently high-performing and dependable hydrogen fueling infrastructure, fostering a cleaner and more sustainable future.
                                        </p>
                                    </div>
                                )}

                                {/* CNG/LNG TAB CONTENT */}
                                {activeTab === 'cng-lng' && (
                                    <div className="space-y-5 text-[15px] md:text-[20px] text-[#4A5568] leading-[1.75]">
                                        <p>
                                            Genesis Contracting Inc. is dedicated to offering exceptional efficiency projects and upgrade services for compressed natural gas (CNG) fueling systems, emphasizing practical and results-driven solutions. Our expert technicians have the know-how to carry out system upgrades, such as replacing outdated components or incorporating advanced technologies, to improve the overall efficiency, safety, and reliability of CNG fueling systems.
                                        </p>
                                        <p>
                                            A key service we provide includes the addition or replacement of compressors, an essential component for managing compressed natural gas storage and distribution. By optimizing these elements, we ensure that our clients benefit from enhanced fueling rates and extended system lifespans. Additionally, our team is adept at handling high-pressure line upgrades, addressing potential issues promptly to minimize downtime and maintain smooth operations for our clients' CNG fueling infrastructure.
                                        </p>
                                        <p>
                                            Alongside these services, Genesis Contracting Inc. offers comprehensive efficiency projects that encompass optimizing compressed air systems, leading to increased energy efficiency and reduced energy consumption. We also provide cryogenic pump replacement services, ensuring the safe and effective operation of the CNG fueling process. By concentrating on these practical and results-driven solutions, we guarantee that our clients can depend on a consistently high-performing and reliable CNG fueling infrastructure, contributing to a cleaner and more sustainable future.
                                        </p>
                                    </div>
                                )}

                                {/* EV CHARGING TAB CONTENT */}
                                {activeTab === 'ev-charging' && (
                                    <div className="text-[15px] md:text-[20px] text-[#4A5568] leading-[1.75] space-y-5">
                                        <p>
                                            Genesis Contracting is committed to helping clients stay at the forefront of EV charging technology by offering expert upgrades and modifications. As the industry evolves, we ensure our clients' charging infrastructure remains efficient, reliable, and compatible with the latest innovations.
                                        </p>
                                        <div>
                                            <p className="mb-4 text-gray-900 font-semibold text-[20px]">Key aspects of upgrades and modifications include:</p>
                                            <ul className="space-y-4">
                                                {evUpgrades.map((capability, idx) => (
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

                            {/* Fading Gradient Content Mask - Blends with gray-50 background */}
                            {!isExpanded && (
                                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
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

                    {/* RIGHT COLUMN: Large Single Image (Bottom on mobile, Right on desktop) */}
                    <div className="lg:col-span-6 w-full h-[400px] md:h-[500px] lg:h-[650px] order-2">
                        <img
                            src={upgradesImg}
                            alt="Industrial infrastructure upgrades and modification process"
                            className="w-full h-full object-cover rounded-sm shadow-sm"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UpgradesModificationsService;