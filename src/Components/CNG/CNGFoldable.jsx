import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const servicesData = [
    {
        id: 'construction',
        title: 'Construction',
        paragraphs: [
            "Genesis CNG Fuel System Contractor is a leading expert in the design, installation, and construction of Compressed Natural Gas (CNG) fueling stations. With extensive experience in engineering design for fuel distribution systems and associated infrastructure, our team is equipped to handle jobsite management, from obtaining local permits to conducting thorough inspections at every development phase.",
            "Our comprehensive services include excavation, grading, foundation work, and installation of electrical and mechanical underground systems, as well as grounding and supporting concrete structures.",
            "Partnering with strategic suppliers, we ensure the procurement of essential materials and equipment for the proficient installation of CNG fueling systems. Our capabilities extend to specialized system installations, efficient demolition and disposal of existing structures, and implementing high-volume fueling systems for demanding applications. Genesis CNG Fuel System Contractor is your one-stop solution for establishing fueling stations for disposal trucks, buses, and other vehicles.",
            "Our expertise in piping installation, general contracting, and CNG equipment installation ensures seamless integration and optimal performance for your fueling station. Trust Genesis CNG to deliver unparalleled service and expertise for all your CNG fueling needs."
        ],
        quote: "— John Lang, President",
        buttonText: "Schedule a 15-Minute Project Review",
        phone: "4194663262",
        maxHeight: "max-h-[1500px]"
    },
    {
        id: 'upgrades',
        title: 'Upgrades',
        paragraphs: [
            "Genesis helps CNG fueling operators scale infrastructure. As fleet demand grows, station owners need more capacity, faster throughput, and stronger system reliability from assets already in the ground. Genesis supports that growth through strategic natural gas station upgrades, including compressor additions, dispenser replacements, and safety valve modernizations.",
            "With deep field experience in high-pressure natural gas environments, Genesis coordinates upgrade work around live operational needs, equipment vendors, safety requirements, and commissioning timelines. The result is a smarter path to expansion: greater fueling capacity, improved station performance, and reduced downtime without the disruption of a full rebuild."
        ],
        buttonText: "Discuss Project Details",
        phone: "4194663262",
        maxHeight: "max-h-[1000px]"
    },
    {
        id: 'maintenance',
        title: 'Maintenance',
        paragraphs: [
            "Genesis Contracting Inc. excels in providing comprehensive support for clients through its expertise in maintenance and upgrades of Compressed Natural Gas (CNG) fueling systems. A primary focus of this support is the execution of efficiency projects, which serve to optimize system performance and extend operational longevity. One such efficiency project involves the addition or replacement of CNG compressors and dispensers, a critical component that greatly influences the effectiveness of the fueling infrastructure.",
            "Efficiency projects undertaken by Genesis Contracting Inc. are carefully assessed to identify the most appropriate solutions, striking the ideal balance between performance, reliability, and cost-effectiveness. By placing an emphasis on these projects, the company ensures that clients receive improved fueling rates, reduced operational costs, and extended system lifespans. This approach demonstrates Genesis Contracting Inc.’s commitment to fostering long-term relationships with clients and delivering exceptional value through their CNG fueling infrastructure investments."
        ],
        buttonText: "Learn More",
        phone: "4194663262",
        maxHeight: "max-h-[1000px]"
    }
];

const CNGFoldable = () => {
    const [expandedAccordion, setExpandedAccordion] = useState('construction');

    return (
        <section className="relative py-20 md:py-28 bg-white scroll-mt-20">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="max-w-3xl mb-16">
                    <span className="text-[12px] md:text-[13px] text-gray-500 tracking-[0.25em] uppercase font-bold font-['Necto_Mono',monospace] block mb-3">
                        Deep Dive
                    </span>
                    <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[48px] font-normal text-red-700 leading-[1.1] tracking-tight">
                        Description of Services
                    </h2>
                    <div className="w-12 h-1 bg-red-700 mt-5"></div>
                </div>

                <div className="flex flex-col gap-6">
                    {servicesData.map((service) => {
                        const isExpanded = expandedAccordion === service.id;
                        return (
                            <div key={service.id} className="border border-gray-200 rounded-sm overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setExpandedAccordion(isExpanded ? null : service.id)}
                                    className="w-full bg-gray-50/70 hover:bg-gray-50 px-6 py-5 md:py-6 flex items-center justify-between text-left transition-colors cursor-pointer"
                                >
                                    <span className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[22px] md:text-[28px] font-normal text-[#2A3A4A] flex items-center gap-3">
                                        <span className="text-red-700 font-bold">—</span> {service.title}
                                    </span>
                                    <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-red-700' : ''}`} />
                                </button>
                                <div 
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                        isExpanded ? service.maxHeight : 'max-h-0'
                                    }`}
                                >
                                    <div className="p-6 md:p-10 border-t border-gray-100 bg-white space-y-6 text-[15px] md:text-[18px] text-gray-600 leading-relaxed font-sans">
                                        {service.paragraphs.map((paragraph, idx) => (
                                            <p key={idx}>{paragraph}</p>
                                        ))}

                                        <div className={`pt-4 border-t border-gray-100 flex flex-col md:flex-row gap-6 ${service.quote ? 'justify-between items-start md:items-center' : 'justify-end'}`}>
                                            {service.quote && (
                                                <div className="italic text-[#2A3A4A] font-semibold text-[16px] md:text-[18px]">
                                                    {service.quote}
                                                </div>
                                            )}
                                            <a 
                                                href={`tel:${service.phone}`} 
                                                className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-sm font-semibold tracking-wider font-['Necto_Mono',monospace] text-[14px] uppercase flex items-center gap-2"
                                            >
                                                <span>{service.buttonText}</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CNGFoldable;
