import React, { useState } from 'react';
import timelineImg1 from '../../assets/Home/img1.jpg'
import timelineImg2 from '../../assets/Home/img2.jpg'
import timelineImg3 from '../../assets/Home/img3.jpg'
import timelineImg4 from '../../assets/Home/h5.jpg'
import timelineImg5 from '../../assets/Home/h6.jpg'


// 1. Static data for the left side
const leftSideData = {
    headline: "The Genesis Story:\nBuilding the Future",
    paragraphs: [
        {
            text: "Our story began long before the modern push for alternative fuels. Genesis's history dates back to 1998, laying a strong foundation in Ohio.",
            isBold: true
        },
        {
            text: "Over the decades, clients have turned to Genesis to get complex infrastructure projects on track. By utilizing a sophisticated bidding process and managing projects using internal cash flow, we guarantee financial stability and flexibility.",
            isBold: false
        }
    ]
};

// 2. Dynamic data array for the right side & timeline buttons
const rightSideData = [
    {
        year: "1998",
        title: "Genesis is Founded",
        description: "Genesis Contracting Inc. is established in Ohio as a general contractor, laying the foundational groundwork for a future specializing in alternative fuel systems.",
        image: timelineImg3
    },
    {
        year: "2005",
        title: "Expanding Infrastructure",
        description: "We expanded our operational footprint, taking on complex Civil & Concrete projects and establishing our reputation for debt-free, cash-flow positive project management.",
        image: timelineImg4
    },
    {
        year: "2012",
        title: "CNG & LNG Division",
        description: "Genesis officially launches its specialized CNG & LNG Systems division, partnering with major energy providers to build sustainable fueling stations across the continental U.S.",
        image: timelineImg5
    },
    {
        year: "2018",
        title: "Pioneering Hydrogen",
        description: "Genesis launches the Hydrogen Division, executing highly specialized design-build projects and solidifying our position as a leader in modern alternative fuel infrastructure.",
        image: timelineImg2
    },
    {
        year: "2024",
        title: "EV Charging Solutions",
        description: "Recognizing the shift in automotive technology, we integrated turn-key EV Charging Solutions, handling everything from local permit processing to final electrical commissioning.",
        image: timelineImg1
    },
];

const TimelineSection = () => {
    // State to track which year is clicked
    const [activeYear, setActiveYear] = useState(rightSideData[0].year);

    // Get the object for the currently clicked year
    const activeData = rightSideData.find(item => item.year === activeYear);

    return (
        <section className="relative w-full py-16 lg:py-24  font-sans">

            {/* Dotted Background on the edges */}
            <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-[size:30px_30px]"></div>

            {/* Main White Container */}
            <div className="relative z-10 max-w-[1400px] mx-auto bg-white px-6 lg:px-12 py-16 rounded-sm">

                {/* Grid Layout: Left (5 cols) | Mid (2 cols) | Right (5 cols) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6">

                    {/* LEFT COLUMN: Static Text */}
                    <div className="lg:col-span-5 pr-0 lg:pr-8 flex flex-col justify-center">
                        <h2
                            className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[64px] font-normal text-[#2A3A4A] leading-[1.15] tracking-tight mb-10 whitespace-pre-line">
                            {leftSideData.headline}
                        </h2>

                        <div className="space-y-6 text-[15px] md:text-[20px] text-[#4A5568] leading-[1.7]">
                            {leftSideData.paragraphs.map((p, index) => (
                                <p key={index} className={p.isBold ? "font-bold text-[#111827]" : ""}>
                                    {p.text}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* MIDDLE COLUMN: Vertical Timeline Buttons */}
                    <div className="lg:col-span-2 flex flex-row  flex-wrap lg:flex-col justify-center items-center gap-6 lg:gap-8  py-4 lg:py-0 border-y lg:border-y-0 lg:border-r border-gray-100">
                        {rightSideData.map((item) => {
                            const isActive = activeYear === item.year;
                            return (
                                <button
                                    key={item.year}
                                    onClick={() => setActiveYear(item.year)}
                                    className={`flex items-center gap-3 transition-all duration-300 cursor-pointer ${isActive
                                        ? 'bg-[#DA291C] text-white px-4 py-1.5 rounded-full font-bold text-[14px] shadow-md'
                                        : 'text-[#9CA3AF] hover:text-[#DA291C] font-semibold text-[14px]'
                                        }`}
                                >
                                    {/* Tiny dot for inactive years */}
                                    {!isActive && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]"></span>
                                    )}
                                    {item.year}
                                </button>
                            );
                        })}
                    </div>

                    {/* RIGHT COLUMN: Dynamic Image & Overlay Text */}
                    <div className="lg:col-span-5 h-[400px] lg:h-[600px] w-full relative rounded-[16px] overflow-hidden shadow-lg group">

                        {/* Background Image changes based on state */}
                        <img
                            key={activeData.image}
                            src={activeData.image}
                            alt={activeData.title}
                            className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                        />

                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                        {/* Changing Text */}
                        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-10 text-white">
                            <h3 className="text-[28px] md:text-[34px] font-semibold mb-3 leading-tight">
                                {activeData.title}
                            </h3>
                            <p className="text-[14px] md:text-[15px] text-gray-200 leading-relaxed max-w-[95%]">
                                {activeData.description}
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default TimelineSection;