import React from 'react';

const ContactInfo = () => {
    return (
        <>
            <span className="text-[13px] text-gray-500 tracking-[0.15em] uppercase mb-3 font-semibold block">
                Get in Touch
            </span>
            
            <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[48px] font-normal text-red-700 leading-[1.15] tracking-tight mb-6">
                We'd love to hear from you
            </h2>

            <div className="w-10 h-1.5 bg-red-700 mb-10"></div>

            <p className="text-[15px] md:text-[18px] text-[#4A5568] leading-relaxed mb-10 font-sans">
                Whether you need consultation on a new alternative fueling system, site concrete engineering, or high-voltage electrical hookups, our specialists are ready to help.
            </p>

            {/* Contact channels list */}
            <div className="flex flex-col gap-8">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-lg bg-red-50 text-red-700 shrink-0 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </div>
                    <div>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block font-['Necto_Mono',ui-monospace]">
                            Call us directly
                        </span>
                        <a href="tel:4194663262" className="text-[18px] md:text-[20px] font-bold text-[#2A3A4A] hover:text-red-700 transition-colors mt-1 block">
                            (419) 466-3262
                        </a>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-lg bg-red-50 text-red-700 shrink-0 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </div>
                    <div>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block font-['Necto_Mono',ui-monospace]">
                            Send email
                        </span>
                        <a href="mailto:MRoller@genesis-contracting.com" className="text-[16px] md:text-[18px] font-bold text-[#2A3A4A] hover:text-red-700 transition-colors mt-1 block break-all">
                            MRoller@genesis-contracting.com
                        </a>
                    </div>
                </div>

                {/* Corporate HQ */}
                <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-lg bg-red-50 text-red-700 shrink-0 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <div>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block font-['Necto_Mono',ui-monospace]">
                            Corporate HQ Address
                        </span>
                        <span className="text-[16px] md:text-[18px] font-bold text-[#2A3A4A] mt-1 block">
                            Holland, OH, USA
                        </span>
                        <span className="text-[13px] text-gray-500 mt-0.5 block leading-relaxed">
                            Office operations are fully remote.
                        </span>
                    </div>
                </div>

                {/* Warehouse & Yard */}
                <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-lg bg-red-50 text-red-700 shrink-0 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5-7.75-3-1m-3 1.182L17.25 9m-3 1.182-3-1m3 6.182H9" />
                        </svg>
                    </div>
                    <div>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block font-['Necto_Mono',ui-monospace]">
                            Operations Warehouse
                        </span>
                        <span className="text-[16px] md:text-[18px] font-bold text-[#2A3A4A] mt-1 block">
                            Waterford, OH, USA
                        </span>
                        <span className="text-[13px] text-gray-500 mt-0.5 block leading-relaxed">
                            Warehouse and fleet service yard built in 2019.
                        </span>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ContactInfo;
