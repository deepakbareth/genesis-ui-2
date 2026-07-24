import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const servicesData = [
    {
        id: 'construction',
        title: 'Construction',
        paragraphs: [
            "Genesis Contracting Inc. is a leading provider of expert services and workmanship in the field of electric vehicle (EV) charging station installation. With a strong commitment to quality and customer satisfaction, our skilled team delivers tailored solutions to a diverse range of clients, helping them transition to a sustainable, eco-friendly future.",
            "Our clientele includes businesses and commercial establishments such as department stores, discount stores, specialty stores, grocery stores, online retailers, convenience stores, and luxury retailers. We also cater to EV fleets in logistics, transportation, retail, delivery and courier services, construction, public transportation, and emergency services.",
            "Furthermore, we collaborate with automakers, assisting them in setting up charging infrastructure on their premises for in-house testing, validation, and ensuring their EV models are ready for distribution. Genesis Contracting Inc. is proud to support government initiatives, partnering with public agencies to build robust, reliable EV charging networks that contribute to national sustainability goals."
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
            "Genesis Contracting is committed to helping clients stay at the forefront of EV charging technology by offering expert upgrades and modifications. As the industry evolves, we ensure our clients' charging infrastructure remains efficient, reliable, and compatible with the latest innovations.",
            "Key aspects of upgrades and modifications include enhancing charging levels and power output to accommodate faster charging speeds, updating charging connectors to support new EV models and standards, expanding power supply capacity to meet the growing demand for charging points, upgrading electrical infrastructure to comply with the latest safety and efficiency guidelines, integrating cutting-edge communication and networking technologies, and incorporating the latest payment systems for improved user experience and convenience."
        ],
        buttonText: "Discuss Project Details",
        phone: "4194663262",
        maxHeight: "max-h-[1000px]"
    },
    {
        id: 'maintenance',
        title: 'Maintenance',
        paragraphs: [
            "Genesis ensures the safety, reliability, and continuous uptime of critical EV charging stations. A primary focus of this support is regular inspections and diagnostics, which serve to optimize charger performance and extend operational longevity.",
            "Key maintenance aspects include inspecting and maintaining charging levels and power output, examining and cleaning charging connectors for proper contact, ensuring the adequacy of power supply to charging stations, maintaining electrical infrastructure, including transformers, switchgear, and cabling, and regularly testing safety features, such as ground-fault protection, overcurrent protection, and electrical isolation."
        ],
        buttonText: "Discuss Maintenance",
        phone: "4194663262",
        maxHeight: "max-h-[1000px]"
    }
];

const EVFoldable = () => {
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
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? service.maxHeight : 'max-h-0'
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

export default EVFoldable;
