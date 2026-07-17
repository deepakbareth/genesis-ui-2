import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const HydrogenFoldable = () => {
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
                    {/* ITEM 1: CONSTRUCTION */}
                    <div className="border border-gray-200 rounded-sm overflow-hidden shadow-sm">
                        <button
                            onClick={() => setExpandedAccordion(expandedAccordion === 'construction' ? null : 'construction')}
                            className="w-full bg-gray-50/70 hover:bg-gray-50 px-6 py-5 md:py-6 flex items-center justify-between text-left transition-colors cursor-pointer"
                        >
                            <span className="font-['Apfel_Grotezk'] text-[22px] md:text-[28px] font-normal text-[#2A3A4A] flex items-center gap-3">
                                <span className="text-red-700 font-bold">—</span> Construction
                            </span>
                            <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${expandedAccordion === 'construction' ? 'rotate-180 text-red-700' : ''}`} />
                        </button>
                        <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                expandedAccordion === 'construction' ? 'max-h-[1500px]' : 'max-h-0'
                            }`}
                        >
                            <div className="p-6 md:p-10 border-t border-gray-100 bg-white space-y-6 text-[15px] md:text-[18px] text-gray-600 leading-relaxed font-sans">
                                <p>
                                    We understand that ground-up hydrogen fueling station construction is not standard commercial work. It requires precision, safety, coordination, and experience with high-pressure gas infrastructure. We bring that expertise to every project, supporting the hydrogen economy alternative fueling station construction, installation, capacity upgrades and ongoing maintenance around the USA.
                                </p>
                                <p>
                                    Our team delivers turnkey completion across the full project lifecycle, managing the critical stages that move a hydrogen infrastructure project from planning and permitting to construction, MEP coordination, system integration, pressure testing, commissioning, and final closeout.
                                </p>
                                <p>
                                    Backed by years of experience installing 6,000 to 10,000 psi systems, We thoroughly understand the specialized systems that make high pressure hydrogen infrastructure work. We ensure system integrity by applying expert Swagelok fitting practices and installing high-pressure stainless steel tubing for compressors, dispensers, cryogenic equipment, controls, and ESD systems. That experience helps us coordinate installation, maintenance, and upgrade work around equipment from leading manufacturers such as PDC Machines, Ariel Corporation and more.
                                </p>
                                <p>
                                    For owners and hydrogen infrastructure developers, our value is clear: we reduce construction risk, simplify trade coordination, and help bring complex fueling assets online safely, efficiently, and with accountability. From ground-up station builds to capacity expansions and long-term maintenance, we provide the field leadership, certified technical execution, and project management discipline needed to keep alternative fuel projects moving. When reliability, safety, and schedule certainty matter, we are the construction partner built for the next generation of fueling infrastructure.
                                </p>

                                <div className="pt-4 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                    <div className="italic text-[#2A3A4A] font-semibold text-[16px] md:text-[18px]">
                                        — John Lang, President
                                    </div>
                                    <a 
                                        href="tel:4194663262" 
                                        className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-sm font-semibold tracking-wider font-['Necto_Mono',monospace] text-[14px] uppercase flex items-center gap-2"
                                    >
                                        <span>Schedule a 15-Minute Project Review</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ITEM 2: UPGRADES */}
                    <div className="border border-gray-200 rounded-sm overflow-hidden shadow-sm">
                        <button
                            onClick={() => setExpandedAccordion(expandedAccordion === 'upgrades' ? null : 'upgrades')}
                            className="w-full bg-gray-50/70 hover:bg-gray-50 px-6 py-5 md:py-6 flex items-center justify-between text-left transition-colors cursor-pointer"
                        >
                            <span className="font-['Apfel_Grotezk'] text-[22px] md:text-[28px] font-normal text-[#2A3A4A] flex items-center gap-3">
                                <span className="text-red-700 font-bold">—</span> Upgrades
                            </span>
                            <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${expandedAccordion === 'upgrades' ? 'rotate-180 text-red-700' : ''}`} />
                        </button>
                        <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                expandedAccordion === 'upgrades' ? 'max-h-[1000px]' : 'max-h-0'
                            }`}
                        >
                            <div className="p-6 md:p-10 border-t border-gray-100 bg-white space-y-6 text-[15px] md:text-[18px] text-gray-600 leading-relaxed font-sans">
                                <p>
                                    Genesis helps hydrogen fueling operators scale infrastructure without starting from scratch. As fleet demand grows, station owners need more capacity, faster throughput, and stronger system reliability from assets already in the ground. Genesis supports that growth through strategic hydrogen station upgrades, including added dispensers, compressors, storage vessels, high-pressure tubing, valves, controls, and system integration improvements.
                                </p>
                                <p>
                                    With deep field experience in high-pressure fueling environments, Genesis coordinates upgrade work around live operational needs, equipment vendors, safety requirements, and commissioning timelines. The result is a smarter path to expansion: greater fueling capacity, improved station performance, and reduced downtime without the disruption of a full rebuild. For hydrogen infrastructure providers ready to move from pilot deployment to commercial-scale operations, Genesis delivers the construction expertise to make scaling practical, controlled, and built for long-term growth.
                                </p>

                                <div className="pt-4 border-t border-gray-100 flex justify-end">
                                    <a 
                                        href="tel:4194663262" 
                                        className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-sm font-semibold tracking-wider font-['Necto_Mono',monospace] text-[14px] uppercase flex items-center gap-2"
                                    >
                                        <span>Discuss Project Details</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ITEM 3: MAINTENANCE */}
                    <div className="border border-gray-200 rounded-sm overflow-hidden shadow-sm">
                        <button
                            onClick={() => setExpandedAccordion(expandedAccordion === 'maintenance' ? null : 'maintenance')}
                            className="w-full bg-gray-50/70 hover:bg-gray-50 px-6 py-5 md:py-6 flex items-center justify-between text-left transition-colors cursor-pointer"
                        >
                            <span className="font-['Apfel_Grotezk'] text-[22px] md:text-[28px] font-normal text-[#2A3A4A] flex items-center gap-3">
                                <span className="text-red-700 font-bold">—</span> Maintenance
                            </span>
                            <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${expandedAccordion === 'maintenance' ? 'rotate-180 text-red-700' : ''}`} />
                        </button>
                        <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                    expandedAccordion === 'maintenance' ? 'max-h-[1000px]' : 'max-h-0'
                            }`}
                        >
                            <div className="p-6 md:p-10 border-t border-gray-100 bg-white space-y-6 text-[15px] md:text-[18px] text-gray-600 leading-relaxed font-sans">
                                <p>
                                    Genesis ensures the safety, reliability, and continuous uptime of critical hydrogen fueling infrastructure. Operating at the intersection of high-pressure logistics and cryogenic engineering, the company provides station owners with the specialized maintenance, repair, and replacement services required to protect capital investments and eliminate operational bottlenecks.
                                </p>
                                <p>
                                    Because high-pressure hydrogen environments leave zero margin for error, minor failures quickly cascade into costly downtime. Genesis stabilizes station performance by troubleshooting control panels and skids, repairing compression fittings, airlines, valves, VJ line seals, hydrogen pad lights, and cryogenic line flashing, while replacing high-wear components like cryogenic pump heads.
                                </p>
                                <p>
                                    With deep field experience spanning high-pressure tubing, fueling skids, dispensers, and safety-critical controls, Genesis restores system integrity and extends equipment life, giving operators the certainty they need to scale with confidence.
                                </p>

                                <div className="pt-4 border-t border-gray-100 flex justify-end">
                                    <a 
                                        href="tel:4194663262" 
                                        className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-sm font-semibold tracking-wider font-['Necto_Mono',monospace] text-[14px] uppercase flex items-center gap-2"
                                    >
                                        <span>Learn More</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HydrogenFoldable;
