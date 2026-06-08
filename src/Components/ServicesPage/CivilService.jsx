import React, { useState, useEffect } from 'react';
import civilImg from '../../assets/Servicesimg/civil.jpg'; // Change to your actual single image path

const CivilService = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [isExpanded, setIsExpanded] = useState(false);

    // Reset expand state when switching between Overview and Capabilities tabs
    useEffect(() => {
        setIsExpanded(false);
    }, [activeTab]);

    const keyCapabilities = [
        {
            title: "Comprehensive engineering expertise",
            desc: "Possessing in-depth knowledge in civil, structural, mechanical, and electrical engineering, along with adherence to building codes, regulations, and industry standards."
        },
        {
            title: "Proficient project management",
            desc: "Demonstrating skills in planning, organizing, and coordinating resources, monitoring progress, and adjusting strategies as needed to keep projects on schedule and within budget."
        },
        {
            title: "Familiarity with construction materials",
            desc: "Understanding the properties, applications, strengths, and limitations of various materials, such as concrete, stainless steel."
        },
        {
            title: "Mastery of construction techniques",
            desc: "Applying suitable construction methods, including precast and cast-in-place concrete, steel erection, and modular construction, based on project requirements."
        },
        {
            title: "Effective site preparation and earthwork",
            desc: "Ensuring a solid foundation through proper excavation, grading, soil stabilization, and erosion control during site preparation."
        },
        {
            title: "In-depth knowledge of building systems",
            desc: "Implementing efficient and safe mechanical, electrical, and plumbing (MEP) systems, along with fire protection and safety systems in industrial facilities."
        },
        {
            title: "Accurate estimation and competitive bidding",
            desc: "Developing precise project cost estimates and preparing bids that balance competitiveness with profitability."
        },
        {
            title: "Proficient contract management",
            desc: "Navigating contract negotiation, administration, and dispute resolution to maintain strong relationships with clients, subcontractors, and suppliers."
        },
        {
            title: "Rigorous quality control and assurance",
            desc: "Implementing measures to guarantee that construction work meets or exceeds required quality standards, ensuring the durability and longevity of industrial facilities."
        },
        {
            title: "Commitment to safety and compliance",
            desc: "Upholding occupational safety and health regulations and environmental protection laws to create a safe work environment and avoid legal complications."
        },
        {
            title: "Effective communication and collaboration",
            desc: "Engaging in clear, concise communication with diverse teams, clients, and stakeholders to foster productive working relationships."
        },
        {
            title: "Strong problem-solving and adaptability",
            desc: "Responding swiftly to unexpected challenges and adjusting strategies to accommodate changing conditions in order to achieve project success."
        }
    ];

    const additionalCapabilities = [
        {
            title: "Technology integration",
            desc: "Staying up-to-date with the latest construction technologies and tools, such as Building Information Modeling (BIM), project management software, and advanced construction equipment to improve efficiency and precision."
        },
        {
            title: "Sustainable construction practices",
            desc: "Incorporating environmentally-friendly materials and methods, such as energy-efficient systems, waste reduction, and resource optimization, to minimize the environmental impact of construction projects."
        },
        {
            title: "Skilled workforce management",
            desc: "Overseeing the hiring, training, and development of a competent construction team, fostering a culture of continuous learning, and ensuring efficient utilization of human resources."
        }
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white font-sans scroll-mt-10" id="civil">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Grid Layout Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN: Large Single Image (Bottom on mobile, Left on desktop) */}
                    <div className="lg:col-span-6 w-full h-[400px] md:h-[500px] lg:h-[650px] order-2 lg:order-1 ">
                        <img
                            src={civilImg}
                            alt="Civil engineering site preparation and foundation construction"
                            className="w-full h-full object-cover rounded-sm shadow-sm"
                        />
                    </div>

                    {/* RIGHT COLUMN: Tabbed Content (Top on mobile, Right on desktop) */}
                    <div className="lg:col-span-6 flex flex-col pt-2 lg:pt-4 order-1 lg:order-2">

                        {/* Overline Text */}
                        <span className="text-[13px] text-gray-500 tracking-[0.15em] uppercase mb-3 font-semibold">
                            Infrastructure
                        </span>

                        {/* Title */}
                        <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[48px] font-normal text-red-700 leading-[1.1] tracking-tight mb-6">
                            Civil Service
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
                                            Genesis Contracting Inc. is a leading civil contractor specializing in the design, construction, and maintenance of concrete and heavy load-bearing structures for alternative fueling systems. With comprehensive engineering expertise, our team ensures the highest quality workmanship for CNG fueling systems, hydrogen fueling systems, and EV charging stations. We adhere to strict building codes, regulations, and industry standards while utilizing advanced construction techniques and materials to deliver durable, long-lasting solutions tailored to the unique requirements of each project.
                                        </p>
                                        <p>
                                            At Genesis Contracting Inc., we prioritize safety, efficiency, and sustainability in every project we undertake. Our proficient project management and strong communication skills ensure seamless coordination and timely completion of projects within budget. We are committed to integrating the latest technologies, such as Building Information Modeling (BIM) and sustainable construction practices, to minimize the environmental impact and enhance the performance of our structures. Trust Genesis Contracting Inc. to provide exceptional civil contracting services for your alternative fueling infrastructure, combining innovation and expertise for unparalleled results.
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

                                        {/* Additional Capabilities Subsection */}
                                        <div className="pt-4 border-t border-gray-100">
                                            <p className="mb-4 text-gray-900 font-semibold text-[20px]">Additional capabilities:</p>
                                            <ul className="space-y-4 mb-4">
                                                {additionalCapabilities.map((item, idx) => (
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
                                            <p className="text-gray-600 italic pl-8 pt-2">
                                                By focusing on these capabilities and continuously enhancing their skills, civil contractors can achieve success in the dynamic field of industrial construction.
                                            </p>
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

export default CivilService;