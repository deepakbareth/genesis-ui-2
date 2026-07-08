import React from 'react';

const statsData = [
    { value: "808", label: "Skilled Contractors" },
    { value: "8,400", label: "Projects Completed" },
    { value: "560", label: "Industries Served" },
    { value: "65,000", label: "Satisfied Clients" }
];

const AboutStats = () => {
    return (
        <section className="relative w-full bg-[#1A2230] py-16 md:py-20 font-sans overflow-hidden">
            {/* Subtle decorative background shape */}
            <div className="absolute top-0 right-0 w-80 h-full bg-[#141A25] transform skew-x-12 translate-x-24 z-0 pointer-events-none"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center text-center">
                    
                    {statsData.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            
                            {/* Stat Value */}
                            <span className="text-[52px] md:text-[68px] font-bold text-white leading-none tracking-tight mb-2">
                                {stat.value}
                            </span>
                            
                            {/* Stat Divider */}
                            <div className="w-8 h-1 bg-[#DA291C] mb-3"></div>

                            {/* Stat Label */}
                            <span className="text-[13px] md:text-[14px] font-bold text-gray-300 uppercase tracking-widest font-['Necto_Mono',ui-monospace]">
                                {stat.label}
                            </span>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default AboutStats;
