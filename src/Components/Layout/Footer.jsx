import React from 'react';

// 1. Data Object for the Footer content (Exact match to Genesis screenshot)
const footerData = {
    contact: {
        email: "MRoller@genesis-contracting.com",
        phone: "(419) 466-3262"
    },
    companyLinks: [
        { name: "About us", url: "/genesis-ui-2/about" },
        { name: "Contact us", url: "/genesis-ui-2/contact" }
    ],
    services: [
        { label: "Hydrogen Division", id: "hydrogen" },
        { label: "CNG & LNG Division", id: "cng" },
        { label: "EV Division", id: "ev-charging" },
        { label: "Civil & Concrete", id: "civil" },
        { label: "Electrical", id: "electrical" }
    ],
    // The year will now automatically update based on the user's system clock!
    copyright: `© Copyright ${new Date().getFullYear()} by Genesis Contracting Inc. Based in Ohio, USA`
};

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#1A2230] text-gray-300 py-16 font-sans overflow-hidden">

            {/* Subtle dark geometric shape on the left background (optional decorative element based on screenshot) */}
            <div className="absolute top-0 left-0 w-64 h-full bg-[#141A25] transform -skew-x-12 -translate-x-16 z-0"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* 4-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">

                    {/* Column 1: Contact */}
                    <div className="flex flex-col">
                        <h3 className="text-white text-[22px] font-bold mb-6">Contact</h3>
                        <div className="flex flex-col gap-5">
                            {/* Email */}
                            <a href={`mailto:${footerData.contact.email}`} className="flex items-center gap-3 hover:text-white transition-colors group">
                                <svg className="w-5 h-5 text-green-500 group-hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <span className="text-[15px]">{footerData.contact.email}</span>
                            </a>
                            {/* Phone */}
                            <a href={`tel:${footerData.contact.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 hover:text-white transition-colors group">
                                <svg className="w-5 h-5 text-green-500 group-hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.041l-3.286-.481c-.52-.076-1.033.2-1.242.671l-1.01 2.277a16.2 16.2 0 01-7.138-7.138l2.277-1.01c.471-.21.747-.723.671-1.242l-.481-3.286c-.075-.513-.525-.864-1.041-.864H4.5a2.25 2.25 0 00-2.25 2.25z" />
                                </svg>
                                <span className="text-[15px]">{footerData.contact.phone}</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Company */}
                    <div className="flex flex-col">
                        <h3 className="text-white text-[22px] font-bold mb-6">Company</h3>
                        <ul className="flex flex-col gap-4">
                            {footerData.companyLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} className="text-[15px] hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    {/* Column 3: Services */}
                    <div className="flex flex-col">
                        <h3 className="text-white text-[22px] font-bold mb-6">Services</h3>
                        <ul className="grid grid-cols-2 gap-4">
                            {footerData.services.map((service, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <svg className="w-4 h-4 text-white shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                    {/* Clean, professional link construction */}
                                    <a
                                        href={`/genesis-ui-2/services#${service.id}`}
                                        className="text-[15px] hover:text-white transition-colors cursor-pointer"
                                    >
                                        {service.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>



                </div>

                {/* Bottom Copyright Section */}
                <div className="pt-8 border-t border-gray-700/60 flex justify-center text-center">
                    <p className="text-[14px] text-gray-400">
                        {footerData.copyright}
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;