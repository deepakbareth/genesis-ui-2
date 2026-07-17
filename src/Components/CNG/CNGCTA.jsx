import React from 'react';
import { Phone } from 'lucide-react';

const CNGCTA = () => {
    return (
        <section className="relative py-16 bg-[#525d70] text-white">
            <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="max-w-3xl text-center lg:text-left">
                    <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[28px] md:text-[40px] font-normal leading-tight tracking-tight mb-4">
                        Start Your Consultation Now
                    </h2>
                    <p className="text-white/80 text-[15px] md:text-[18px] leading-relaxed">
                        Connect with our alternative fueling engineers to discuss safety protocols, bidding estimations, or site requirements.
                    </p>

                </div>

                <div className="flex flex-col sm:flex-row items-center gap-5 shrink-0 w-full sm:w-auto">
                    <a
                        href="tel:4194663262"
                        className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-sm font-semibold tracking-wider font-['Necto_Mono',monospace] uppercase text-center flex items-center justify-center gap-3 shadow-lg transition-colors w-full sm:w-auto"
                    >
                        <Phone className="w-5 h-5" />
                        <span>Start Consultation</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CNGCTA;
