import React, { useState, useEffect } from 'react';
import cngImg from '../../assets/Servicesimg/cng.jpg'; // Change to your actual single image path

const CNGService = () => {
    // State to handle tab switching and the Read More button
    const [activeTab, setActiveTab] = useState('overview');
    const [isExpanded, setIsExpanded] = useState(false);

    // Whenever a user clicks a new tab, automatically collapse the text back to normal
    useEffect(() => {
        setIsExpanded(false);
    }, [activeTab]);

    const capabilitiesList = [
        "Expertise in engineering design for fuel distribution systems and associated infrastructure",
        "Management of jobsite commencement by obtaining necessary local permits",
        "Execution of thorough jobsite inspections at every development phase",
        "Performing comprehensive excavation, grading, foundation work, and installation of electrical and mechanical underground systems, as well as grounding and supporting concrete structures",
        "Collaboration with strategic suppliers to secure essential materials and equipment",
        "Proficient installation of Compressed Natural Gas fueling systems",
        "Specialized system installations for various applications",
        "Efficient demolition and disposal of existing structures",
        "Implementing high volume fueling systems for demanding applications",
        "Skillful equipment installation for various needs",
        "Establishing fueling stations for disposal trucks and buses",
        "Piping installation expertise for seamless integration",
        "Providing general contracting services for a variety of projects",
        "Installation of compressed high-pressure gas lines",
        "Installation of liquid high-pressure gas lines",
        "Expertise in CNG compressor installation and maintenance",
        "Proficient in setting up CNG dispensers for fueling stations"
    ];

    const maintenanceList = [
        "Preventative maintenance scheduling and execution",
        "Monitoring and maintenance of CNG compressors",
        "Servicing and calibration of CNG dispensers",
        "Inspection and maintenance of high-pressure gas lines",
        "Leak detection and repair for compressed and liquid gas lines",
        "Inspection and servicing of storage vessels and pressure relief devices",
        "Coordination with suppliers for replacement parts and equipment",
        "Documentation and record-keeping for maintenance activities and regulatory requirements",
        "Compressors and CNG systems addings and upgrades through efficiency projects"
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white font-sans scroll-mt-10" id="cng">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Grid Layout: Left Image / Right Content (Matches Hydrogen exactly) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN: Large Single Image */}
                    <div className="lg:col-span-6 w-full h-[400px] md:h-[500px] lg:h-[650px]  order-2 lg:order-1">
                        <img
                            src={cngImg}
                            alt="Compressed Natural Gas Infrastructure"
                            className="w-full h-full object-cover rounded-sm shadow-sm"
                        />
                    </div>

                    {/* RIGHT COLUMN: Tabbed Content */}
                    <div className="lg:col-span-6 flex flex-col pt-2 lg:pt-4 order-1 lg:order-2">

                        {/* 1. Small Overline Text */}
                        <span className="text-[13px] text-gray-500 tracking-[0.15em] uppercase mb-3 font-semibold">
                            Alternative Fuels
                        </span>

                        {/* 2. Main Title */}
                        <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[48px] font-normal text-red-700 leading-[1.1] tracking-tight mb-6">
                            Compressed Natural Gas Service
                        </h2>

                        {/* 3. Short Thick Divider Line (CNG Branding Green) */}
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

                            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[2000px]' : 'max-h-[280px]'}`}>

                                {/* OVERVIEW TAB */}
                                {activeTab === 'overview' && (
                                    <div className="space-y-5 text-[15px] md:text-[20px] text-[#4A5568] leading-[1.75]">
                                        <p>
                                            Genesis CNG Fuel System Contractor is a leading expert in the design, installation, and maintenance of Compressed Natural Gas (CNG) fueling stations. With extensive experience in engineering design for fuel distribution systems and associated infrastructure, our team is equipped to handle jobsite management, from obtaining local permits to conducting thorough inspections at every development phase. Our comprehensive services include excavation, grading, foundation work, and installation of electrical and mechanical underground systems, as well as grounding and supporting concrete structures.
                                        </p>
                                        <p>
                                            Partnering with strategic suppliers, we ensure the procurement of essential materials and equipment for the proficient installation of CNG fueling systems. Our capabilities extend to specialized system installations, efficient demolition and disposal of existing structures, and implementing high-volume fueling systems for demanding applications. Genesis CNG Fuel System Contractor is your one-stop solution for establishing fueling stations for disposal trucks, buses, and other vehicles. Our expertise in piping installation, general contracting, and CNG equipment installation ensures seamless integration and optimal performance for your fueling station. Trust Genesis CNG to deliver unparalleled service and expertise for all your CNG fueling needs.
                                        </p>
                                    </div>
                                )}

                                {/* CAPABILITIES TAB */}
                                {activeTab === 'capabilities' && (
                                    <div className="text-[15px] md:text-[20px] text-[#4A5568] leading-[1.75]">
                                        <p className="mb-4 text-gray-800 font-semibold">Key capabilities include:</p>
                                        <ul className="space-y-3">
                                            {capabilitiesList.map((item, idx) => (
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
                                    <div className="text-[15px] md:text-[20px] text-[#4A5568] leading-[1.75]">
                                        <p className="text-gray-800 font-semibold mb-4">Maintenance and upgrades:</p>
                                        <ul className="space-y-3">
                                            {maintenanceList.map((item, idx) => (
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

export default CNGService;