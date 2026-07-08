import React from 'react';

const testimonialsData = [
    {
        name: "Bruce Stoehr",
        role: "Maintenance Supervisor",
        quote: "The project was to build two aviation fuel facilities at Fort Bragg. These are complex tasks involving frequent change orders. The facilities include aviation fuel facilities: fuel storage, bulk receipt and issue facilities, large vehicle dispensing facilities (including tactical), airport hydrant systems, roads, civil engineering, various laboratory and control buildings. In all Hawthorne construction activities Genesis has been 100% in charge of day to day control of the projects.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
            </svg>
        )
    },
    {
        name: "Richard Dunham",
        role: "Maintenance Director",
        quote: "Thanks for the exceptional job your crew did removing our old gas tank and pump and installing our new equipment. The staff very professional and we were informed of you plans and methods on a daily basis. The job was accomplished in a timely manner and exceeded the contract specs. Also, your staff did a great job of cleaning up and seeding the lawn around the excavated area and always did more than asked of them.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25M3 14.25h15v2.25H3v-2.25Zm0 0V4.875C3 3.839 3.84 3 4.875 3H13.5M18 14.25V7.875C18 6.839 17.16 6 16.125 6H13.5M13.5 6v8.25" />
            </svg>
        )
    },
    {
        name: "Brian P. McManus",
        role: "City Engineer",
        quote: "Recently Genesis Contracting completed a project for the City of Midland’s Jack Barstow Airport involving removal of three underground fuel tanks and installation of two new underground tanks. We are very pleased with the outcome of the project and the cooperation of Genesis.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V10.5m0 10.5a9 9 0 1 1 0-18 9 9 0 0 1 0 18ZM12 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
        )
    }
];

const AboutTestimonials = () => {
    return (
        <section className="relative w-full py-16 md:py-24 bg-slate-50 font-sans">
            {/* Dotted backdrop */}
            <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-[size:30px_30px] pointer-events-none"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
                
                {/* Header */}
                <div className="mb-12">
                    <span className="text-[13px] text-gray-500 tracking-[0.15em] uppercase mb-3 font-semibold block">
                        Endorsements
                    </span>
                    <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[48px] font-normal text-red-700 leading-[1.1] tracking-tight">
                        Client testimonials
                    </h2>
                    <div className="w-10 h-1.5 bg-red-700 mt-6"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {testimonialsData.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                {/* Header Info inside card */}
                                <div className="flex items-center gap-4">
                                    <div className="p-2.5 rounded-lg bg-red-50 text-[#DA291C] shrink-0 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-[18px] text-[#2A3A4A] leading-tight">
                                            {item.name}
                                        </span>
                                        <span className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider mt-0.5">
                                            {item.role}
                                        </span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-[1px] bg-gray-100 my-6"></div>

                                {/* Testimonial Quote */}
                                <p className="text-[14px] md:text-[15px] text-[#4A5568] leading-relaxed italic">
                                    "{item.quote}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutTestimonials;
