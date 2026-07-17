import React, { useState, useEffect } from 'react';

const safetySlides = [
    {
        title: "Avetta Safety Prequalified",
        desc: "Genesis Contracting is an Avetta-prequalified contractor, verifying our compliance with industrial safety, liability, and insurance standards.",
        highlight: "Verified Compliance"
    },
    {
        title: "ISN Member Contractor",
        desc: "Genesis is a registered ISN member contractor with audited safety protocols, training records, and performance metrics.",
        highlight: "Audited Quality"
    },
    {
        title: "Certified Swagelok Technicians",
        desc: "Our technicians hold active certifications in Swagelok high-pressure tube fitting and mechanical gas assemblies to ensure leak-free operations.",
        highlight: "Certified Technicians"
    },
    {
        title: "NFPA & ASME Code Integration",
        desc: "All mechanical assemblies, installations, and upgrades strictly comply with NFPA 2 (Hydrogen Technologies Code) and ASME piping codes.",
        highlight: "Code Compliance"
    }
];

const HydrogenSafety = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCarouselIndex((prev) => (prev + 1) % safetySlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-[12px] md:text-[13px] text-red-500 tracking-[0.25em] uppercase font-bold font-['Necto_Mono',monospace] block mb-3">
                            Rigorous Safety
                        </span>
                        <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[48px] font-normal tracking-tight leading-[1.1]">
                            Compliance & Safety Standards
                        </h2>
                    </div>
                    {/* Indicators dots */}
                    <div className="flex gap-2">
                        {safetySlides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCarouselIndex(i)}
                                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${carouselIndex === i ? 'bg-red-700 w-8' : 'bg-white/30 hover:bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Sliding frame */}
                <div className="relative w-full h-[280px] md:h-[200px]">
                    {safetySlides.map((slide, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 w-full h-full flex flex-col md:flex-row items-stretch gap-6 md:gap-12 transition-all duration-700 ease-in-out ${carouselIndex === i
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 translate-x-12 pointer-events-none'
                                }`}
                        >
                            <div className="md:w-1/4 flex flex-col justify-center">
                                <span className="text-[13px] font-semibold text-red-500 font-['Necto_Mono',monospace] uppercase tracking-wider mb-2 block">
                                    {slide.highlight}
                                </span>
                                <h3 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[24px] md:text-[28px] font-normal leading-tight">
                                    {slide.title}
                                </h3>
                            </div>
                            <div className="md:w-3/4 flex items-center text-white/80 text-[15px] md:text-[18px] leading-relaxed pl-0 md:pl-8 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0">
                                <p>{slide.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HydrogenSafety;
