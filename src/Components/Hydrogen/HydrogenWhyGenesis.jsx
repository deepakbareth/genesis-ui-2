import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const whyGenesisPoints = [
    {
        title: "Turnkey Delivery",
        desc: "We eliminate the friction of managing multiple subcontractors. By integrating civil, concrete, mechanical, electrical, installation, and commissioning under a single point of contact, we streamline communication, align construction schedules, and significantly reduce project risk."
    },
    {
        title: "Alternative Fuel Expertise",
        desc: "Deploying next-generation energy infrastructure requires specialized technical precision. Our teams bring deep, hands-on experience with hydrogen, CNG and EV charging stations ensuring your facility is designed, built, and optimized for maximum operational readiness."
    },
    {
        title: "Multi-State Execution",
        desc: "Scale your regional footprint with a single, capable partner. Backed by qualified mobile crews and rigorous project controls, we deliver consistent, high-quality workmanship across multiple jurisdictions while maintaining strict adherence to local codes and timelines."
    },
    {
        title: "Faster Coordination",
        desc: "Regulatory and utility bottlenecks can stall project momentum. Our established relationships and deep familiarity with local AHJs (Authorities Having Jurisdiction), utility providers, equipment vendors, and inspectors allow us to navigate permitting and interconnection quickly to accelerate your time-to-market."
    },
    {
        title: "Safety-Critical Capability",
        desc: "High-risk, high-pressure environments demand uncompromising safety standards. We specialize in safety critical execution, including high-pressure utility piping, classified hazardous electrical installations, emergency shutdown (ESD) systems, and rigorous pre-commissioning testing."
    },
    {
        title: "Lifecycle Support",
        desc: "Our partnership extends far beyond the initial build. We protect your long-term capital investment and infrastructure by offering ongoing preventative maintenance, rapid emergency repairs and capacity upgrades to ensure your facility scales alongside market demand."
    }
];

const HydrogenWhyGenesis = () => {
    return (
        <section className="relative py-20 md:py-28 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[12px] md:text-[13px] text-gray-500 tracking-[0.25em] uppercase font-bold font-['Necto_Mono',monospace] block mb-3">
                        Our Advantage
                    </span>
                    <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[48px] font-normal text-red-700 leading-[1.1] tracking-tight">
                        Why Genesis?
                    </h2>
                    <div className="w-12 h-1 bg-red-700 mx-auto mt-5"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {whyGenesisPoints.map((point, i) => (
                        <div key={i} className="flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-red-700" />
                                </div>
                                <h3 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[20px] md:text-[22px] font-semibold text-gray-900 tracking-tight">
                                    {point.title}
                                </h3>
                            </div>
                            <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed font-sans">
                                {point.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HydrogenWhyGenesis;
