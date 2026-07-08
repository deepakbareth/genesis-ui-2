import React from 'react';

const statsData = [
    {
        number: "808",
        top: "Skilled",
        bottom: "Contractors"
    },
    {
        number: "8,400",
        top: "Projects",
        bottom: "Completed"
    },
    {
        number: "560",
        top: "Industries",
        bottom: "Served"
    },
    {
        number: "65,000",
        top: "Satisfied",
        bottom: "Clients"
    }
];

const AboutStats = () => {
    return (
        <div className="relative w-full py-16 lg:py-24 bg-white font-sans">
            {/* Dotted Background */}
            <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-[size:30px_30px]"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                    {statsData.map((stat, idx) => (
                        <div key={idx} className="flex flex-col">
                            {/* Number & Title Area */}
                            <div className="flex items-center mb-5">
                                {/* Big Number */}
                                <span className="text-[56px] lg:text-[72px] font-bold text-[#DA291C] leading-none mr-4 shrink-0">
                                    {stat.number}
                                </span>

                                {/* Text next to the number */}
                                <h3 className="text-[24px] lg:text-[25px] text-[#2A3A4A] font-light leading-[1.2]">
                                    <span className="text-[24px] font-semibold lg:text-[28px]">{stat.top}</span>
                                    {stat.bottom && <><br /><span>{stat.bottom}</span></>}
                                </h3>
                            </div>

                            {/* Horizontal Divider Line */}
                            <div className="w-full h-[1px] bg-gray-300 mb-5"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutStats;
