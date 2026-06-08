const StatsRow = () => {
    const stats = [
        {
            number: "25",
            top: "Service",
            bottom: "Years",
            desc: "Providing dedicated alternative fuel infrastructure and engineering services for over two decades."
        },
        {
            number: "134",
            top: "Projects",
            bottom: "Completed",
            desc: "Successfully delivered highly complex, turnkey solutions across the continental United States."
        },
        {
            number: "12",
            top: "Industries",
            bottom: "Served",
            desc: "Supporting diverse commercial, industrial, automotive, and governmental facility sectors."
        },
        {
            number: "$97K",
            top: "Safety",
            bottom: "Investment",
            desc: "Continuous financial commitment to rigorous safety standards, training, and field equipment optimization."
        }
    ];

    return (
        <div className="relative w-full py-20 lg:py-32 bg-white font-sans">
            {/* Dotted Background */}
            <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-[size:30px_30px]"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
                {/* Adjusted to grid-cols-4 to fit the 4 data points from the screenshot */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  lg:gap-10">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col">
                            {/* Number & Title Area */}
                            <div className="flex items-center mb-5">
                                {/* Big Number */}
                                <span className="text-[56px] lg:text-[72px] font-bold text-[#DA291C] leading-none mr-4 shrink-0">
                                    {stat.number}
                                </span>

                                {/* Text next to the number */}
                                <h3 className="text-[24px] lg:text-[25px] text-[#2A3A4A] font-light leading-[1.2]">
                                    <span className='text-[24px]  lg:text-[34px]'>{stat.top}</span>
                                    {stat.bottom && <><br /><span className=''>{stat.bottom}</span></>}
                                </h3>
                            </div>

                            {/* Horizontal Divider Line */}
                            <div className="w-full h-[1px] bg-gray-300 mb-5"></div>

                            {/* Small Description */}
                            {/* <p className="text-[15px] text-[#4A5568] leading-relaxed max-w-[95%]">
                {stat.desc}
            </p> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsRow;