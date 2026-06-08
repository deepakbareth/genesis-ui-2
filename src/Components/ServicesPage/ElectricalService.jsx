import React, { useState, useEffect } from 'react';
import electricalImg from '../../assets/Servicesimg/electrical.jpg'; // Adjust path to your actual single image

const ElectricalService = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [isExpanded, setIsExpanded] = useState(false);

    // Reset expand state when switching between Overview and Capabilities tabs
    useEffect(() => {
        setIsExpanded(false);
    }, [activeTab]);

    const keyCapabilities = [
        {
            title: "Electrical Design and Engineering",
            desc: "A strong understanding of electrical engineering principles and the ability to design electrical systems, including power distribution, lighting, grounding, and control systems, in compliance with applicable codes, regulations, and industry standards."
        },
        {
            title: "Underground Electrical Systems",
            desc: "Expertise in designing, installing, and maintaining underground electrical systems, such as conduits, cables, and vaults, for reliable and secure power distribution in industrial settings."
        },
        {
            title: "Grounding and Bonding",
            desc: "Knowledge of proper grounding and bonding techniques to ensure electrical system safety, minimize the risk of equipment damage, and protect personnel from electrical hazards."
        },
        {
            title: "Project Management",
            desc: "Proficient in planning, organizing, and coordinating electrical projects, monitoring progress, and making adjustments as needed to ensure timely completion within budget constraints."
        },
        {
            title: "Knowledge of Electrical Components",
            desc: "Familiarity with various electrical components, such as transformers, switchgears, circuit breakers, motor control centers, and protective devices, and their appropriate applications in industrial settings."
        },
        {
            title: "Industrial Control Systems",
            desc: "Experience in designing, installing, and maintaining industrial control systems, such as Programmable Logic Controllers (PLCs), Distributed Control Systems (DCS), and Supervisory Control and Data Acquisition (SCADA) systems."
        },
        {
            title: "Equipment Installation and Maintenance",
            desc: "Expertise in installing and maintaining electrical equipment, such as motors, generators, and drives, in industrial facilities, ensuring efficient and safe operation."
        },
        {
            title: "Wiring and Cabling",
            desc: "Knowledge of different types of wiring and cabling systems, including power, control, and communication wiring, as well as best practices for installation and maintenance."
        },
        {
            title: "Hazardous Area Installations",
            desc: "Understanding of electrical installations in hazardous areas, such as those with flammable or explosive materials, and the ability to implement safety measures and select appropriate equipment to prevent accidents."
        },
        {
            title: "Estimation and Bidding",
            desc: "The ability to accurately estimate project costs, prepare competitive bids, and manage contracts with clients, subcontractors, and suppliers."
        },
        {
            title: "Safety and Compliance",
            desc: "Familiarity with electrical safety standards and regulations, such as the National Electrical Code (NEC), Occupational Safety and Health Administration (OSHA) guidelines, and other applicable codes, to ensure a safe working environment and avoid legal issues."
        },
        {
            title: "Troubleshooting and Problem-solving",
            desc: "The ability to quickly diagnose and repair electrical issues, ensuring minimal downtime and disruptions to industrial operations."
        },
        {
            title: "Energy Efficiency and Sustainability",
            desc: "Knowledge of energy-efficient electrical systems and components, as well as best practices for reducing energy consumption and minimizing environmental impact."
        },
        {
            title: "Communication and Collaboration",
            desc: "Strong communication and interpersonal skills for working effectively with diverse teams, clients, and stakeholders."
        }
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white font-sans scroll-mt-10" id="electrical">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Grid Layout Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN: Large Single Image (Bottom on mobile, Left on desktop) */}
                    <div className="lg:col-span-6 w-full h-[400px] md:h-[500px] lg:h-[650px] order-1 lg:order-2 ">
                        <img
                            src={electricalImg}
                            alt="Industrial electrical panels and control wire installation"
                            className="w-full h-full object-cover rounded-sm shadow-sm"
                        />
                    </div>

                    {/* RIGHT COLUMN: Tabbed Content (Top on mobile, Right on desktop) */}
                    <div className="lg:col-span-6 flex flex-col pt-2 lg:pt-4 order-2 lg:order-1">

                        {/* Overline Text */}
                        <span className="text-[13px] text-gray-500 tracking-[0.15em] uppercase mb-3 font-semibold">
                            Electrical
                        </span>

                        {/* Title */}
                        <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[48px] font-normal text-red-700 leading-[1.1] tracking-tight mb-6">
                            Electrical Service
                        </h2>

                        {/* Thick Color Divider Bar */}
                        <div className="w-10 h-1.5 bg-red-700 mb-8"></div>

                        {/* Tab Navigation Menu */}
                        <div className="flex gap-8 border-b border-gray-200 mb-8">
                            {['overview', 'capabilities'].map((tab) => (
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

                        {/* Smooth Transition Expansion Container */}
                        <div className="relative w-full">
                            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[2500px]' : 'max-h-[280px]'}`}>

                                {/* OVERVIEW TAB */}
                                {activeTab === 'overview' && (
                                    <div className="space-y-5 text-[15px] md:text-[20px] text-[#4A5568] leading-[1.75]">
                                        <p>
                                            Genesis Contracting Inc. excels in providing top-notch electrical expertise and capabilities for alternative fueling systems, including CNG fueling systems, hydrogen fueling systems, and EV charging stations. Our team of skilled professionals has a strong understanding of electrical engineering principles and is proficient in designing, installing, and maintaining electrical systems that adhere to the highest industry standards. From underground electrical systems to industrial control systems, we ensure reliable and secure power distribution while prioritizing safety, compliance, and efficiency.
                                        </p>
                                        <p>
                                            At Genesis Contracting Inc., we pride ourselves on our commitment to excellence and customer satisfaction. Our project management and communication skills enable seamless coordination and timely completion of projects within budget constraints. Additionally, our team's experience in hazardous area installations, energy efficiency, and sustainable practices makes us the ideal partner for your alternative fueling infrastructure needs. Trust Genesis Contracting Inc. to deliver outstanding electrical services, combining cutting-edge solutions with unparalleled industry expertise.
                                        </p>
                                    </div>
                                )}

                                {/* CAPABILITIES TAB */}
                                {activeTab === 'capabilities' && (
                                    <div className="text-[15px] md:text-[20px] text-[#4A5568] leading-[1.75] space-y-6">
                                        <div>
                                            <p className="mb-4 text-gray-900 font-semibold text-[20px]">Key capabilities include:</p>
                                            <ul className="space-y-4">
                                                {keyCapabilities.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <svg className="w-5 h-5 text-[#1ba345] mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span>
                                                            <strong className="text-gray-800 font-semibold">{item.title}:</strong> {item.desc}
                                                        </span>
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

export default ElectricalService;