import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ThreeGrid = ({ subtitle, title, cardsData }) => {
    return (
        <section className="relative py-20 bg-gray-50 border-y border-gray-200/50">
            <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-[size:30px_30px] pointer-events-none"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-3 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[12px] md:text-[13px] text-gray-500 tracking-[0.25em] uppercase font-bold font-['Necto_Mono',monospace] block mb-3">
                        {subtitle}
                    </span>
                    <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[26px] md:text-[48px] font-normal text-[#2A3A4A] leading-[1.1] tracking-tight">
                        {title}
                    </h2>
                    <div className="w-12 h-1 bg-red-700 mx-auto mt-5"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cardsData.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-gray-200/60 p-8 rounded-sm shadow-sm flex flex-col hover:shadow-md transition-shadow relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            <div className="mb-6">{card.icon}</div>
                            <h3 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[24px] text-[#2A3A4A] mb-5 font-normal tracking-tight">
                                {card.title}
                            </h3>
                            <ul className="flex flex-col gap-3 mt-auto">
                                {card.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-[15px] text-gray-600 leading-normal">
                                        <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ThreeGrid;
