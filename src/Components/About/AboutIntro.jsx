import React from 'react';
import introImg from '../../assets/About/work.jpg'; // Construction site image
import logo from '../../assets/About/cercleLogo.png'

const AboutIntro = () => {
    return (
        <section className="relative w-full py-16 md:py-24 bg-white font-sans">
            {/* Dotted Backdrop texture */}
            <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-[size:30px_30px] pointer-events-none"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* LEFT COLUMN: Texts and Mission */}
                    <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 pt-2 lg:pt-4">

                        {/* Overline */}
                        <span className="text-[13px] text-gray-500 tracking-[0.15em] uppercase mb-3 font-semibold">
                            Genesis Contracting
                        </span>

                        {/* Title */}
                        <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[48px] font-normal text-red-700 leading-[1.1] tracking-tight mb-6">
                            Industry leaders of alternative fueling systems
                        </h2>

                        {/* Red Accent Divider */}
                        <div className="w-10 h-1.5 bg-red-700 mb-8"></div>

                        {/* Paragraph description */}
                        <p className="text-[15px] md:text-[20px] text-[#4A5568] leading-[1.75] mb-10 font-sans">
                            Genesis Contracting, Inc. offers a high degree of technical expertise in the field of petroleum storage tank installation, removal, and environmental services. With 40 years of experience, we deliver projects for clients not only in a timely manner but also at a cost-effective rate. We focus on major alternative fueling system companies, commercial engineering firms, automotive facilities, fleet distribution channels, and government clients.
                        </p>

                        {/* Mission sub-section */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-t border-gray-100 pt-8">

                            {/* Colorful Circular SVG Emblem (matching the logo in the screenshot) */}
                            {/* <div className="shrink-0 w-24 h-24 relative flex items-center justify-center">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                  \
                                    <path d="M 50 12 A 38 38 0 0 1 88 50 L 74 50 A 24 24 0 0 0 50 26 Z" fill="#025ba6" />
                                   
                                    <path d="M 88 50 A 38 38 0 0 1 50 88 L 50 74 A 24 24 0 0 0 74 50 Z" fill="#fab900" />
                                 
                                    <path d="M 50 88 A 38 38 0 0 1 12 50 L 26 50 A 24 24 0 0 0 50 74 Z" fill="#1ba345" />
                                  
                                    <path d="M 12 50 A 38 38 0 0 1 50 12 L 50 26 A 24 24 0 0 0 26 50 Z" fill="#46b7e6" />
                                </svg>
                            </div> */}
                            <img src={logo} alt="" className='w-30' />

                            {/* Mission copy */}
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="font-semibold text-red-700 text-[18px] md:text-[20px] uppercase tracking-wider mb-2 font-sans">
                                    Our Mission
                                </h3>
                                <p className="text-[15px] md:text-[18px] text-[#4A5568] leading-relaxed">
                                    To leverage our combined experience, individual specialties and market connections with the opportunities offered by the highly technical and rapidly expanding industry
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT COLUMN: Street Construction Image */}
                    <div className="lg:col-span-6 w-full h-[400px] md:h-[500px] lg:h-[650px] order-1 lg:order-2">
                        <div className="relative w-full h-full rounded-sm overflow-hidden shadow-sm group border border-gray-100">
                            {/* Subtle Brand Red Graphic Corner Accent */}
                            <div className="absolute top-0 left-0 w-8 h-full bg-red-700 -skew-x-12 -translate-x-4 z-10"></div>

                            <img
                                src={introImg}
                                alt="Genesis street utility excavation on site"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
