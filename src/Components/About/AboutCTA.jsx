import React from 'react';

const AboutCTA = () => {
    return (
        <section className="relative w-full bg-[#DA291C] py-2 md:py-5 font-sans overflow-hidden">
            {/* Subtle decorative background slash */}
            <div className="absolute inset-0 bg-red-700 opacity-20 transform -skew-x-12 translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

                    {/* Left Title */}
                    <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-white text-[28px] md:text-[40px] font-normal leading-tight tracking-tight max-w-2xl">
                        Need a quality contractor for your project?
                    </h2>

                    {/* Right CTA Button */}
                    <div className="shrink-0">
                        <a 
                            href="/genesis-ui-2/contact" 
                            className="inline-flex items-center gap-3 bg-[#1A2230] hover:bg-[#141A25] text-white px-8 py-4 rounded-sm font-semibold transition-colors duration-300 shadow-md font-['Necto_Mono',ui-monospace]"
                        >
                            <span>—</span>
                            <span>Contact now</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutCTA;
