import React from 'react';
import mattImg from '../../assets/Home/own1.jpg';
import johnImg from '../../assets/Home/own2.jpg';
import jamesImg from '../../assets/Home/own4.jpg';

const leadershipData = [
    {
        name: "Matt Roller",
        role: "Senior Project Manager & Founder",
        avatar: mattImg,
        quote: "With all the changes we’re seeing in the alternative fueling industry including electrical vehicle (EV) filling we are extremely excited for future growth and expansion."
    },
    {
        name: "John Lang",
        role: "President",
        avatar: johnImg,
        quote: "After being in the construction industry for over 30 years the path to this point amazes me. We continue to expand in the alternative field keeping our business goals of honesty and quality that speaks volumes."
    },
    {
        name: "James Gordon",
        role: "CFO",
        avatar: jamesImg,
        quote: "The foundation of our business is based on trusting relationships with each other, our employees, clients, and customers. We are a team of professionals with mid-west values that strives for the best in everything we do."
    }
];

const AboutLeadership = () => {
    return (
        <section className="relative w-full py-16 md:py-24 bg-white font-sans">
            {/* Dotted background */}
            <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-[size:30px_30px] pointer-events-none"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[13px] text-gray-500 tracking-[0.15em] uppercase mb-3 font-semibold block font-['Necto_Mono',ui-monospace]">
                        Our Executive Team
                    </span>
                    <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[52px] font-normal text-[#2A3A4A] leading-tight tracking-tight">
                        Meet the leadership
                    </h2>
                    <div className="w-10 h-1.5 bg-[#DA291C] mx-auto mt-6"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {leadershipData.map((member, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
                        >
                            {/* Portrait Photo Container with Accent Badges */}
                            <div className="relative w-full aspect-square max-w-[280px] rounded-xl overflow-hidden shadow-sm">
                                <img 
                                    src={member.avatar} 
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                                
                                {/* Bottom-left Red Plus Icon Overlay Badge */}
                                <div className="absolute bottom-0 left-0 bg-[#DA291C] text-white w-9 h-9 flex items-center justify-center font-bold text-[20px] rounded-tr-xl">
                                    +
                                </div>
                            </div>

                            {/* Info */}
                            <h3 className="font-bold text-[22px] text-[#2A3A4A] mt-6 text-center">
                                {member.name}
                            </h3>
                            
                            <span className="text-[12px] font-bold text-[#DA291C] uppercase tracking-widest text-center mt-1 font-['Necto_Mono',ui-monospace]">
                                {member.role}
                            </span>

                            {/* Quote Narrative */}
                            <p className="text-[14px] md:text-[15px] text-[#4A5568] leading-relaxed text-center mt-6 pt-6 border-t border-gray-100">
                                "{member.quote}"
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutLeadership;
