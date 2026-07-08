import { useState, useEffect } from 'react';
import logo from "../../assets/genesisLogo.png";

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Mobile menu states
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

    // Turn navbar white on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const isActive = isHovered || isScrolled;

    const navItems = [
        { name: 'Home', link: '/genesis-ui-2/' },
        {
            name: 'Services',
            link: '/genesis-ui-2/services',
        },
        { name: 'About', link: '/genesis-ui-2/about' },
        { name: 'Contact', link: '/genesis-ui-2/contact' }
    ];

    const toggleMobileDropdown = (name) => {
        if (activeMobileDropdown === name) {
            setActiveMobileDropdown(null);
        } else {
            setActiveMobileDropdown(name);
        }
    };

    return (
        <>
            {/* Desktop & Mobile Top Bar */}
            <nav
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ease-in-out text-[16px] uppercase font-['Necto_Mono',ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] border-t-[6px] border-[#E2231A] ${isActive || isMobileMenuOpen ? 'bg-white shadow-lg' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20 md:h-24">

                        {/* Logo Section */}
                        <div className="flex-shrink-0 cursor-pointer flex items-center relative z-50">
                            <a
                                href="/genesis-ui-2/"
                                className={`px-3 py-1.5 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-transparent' : 'bg-black/20 backdrop-blur-sm shadow-sm'
                                    }`}
                            >

                                {/* Changed the drop-shadow  color to black (0,0,0) */}
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-auto h-12 md:h-18 drop-shadow-[0_0px_12px_rgba(0,0,0,0.7)]"
                                />
                            </a>
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className='flex justify-between gap-5'>
                            <div className="hidden lg:flex items-center space-x-2 h-full">
                                {navItems.map((item) => (
                                    <div key={item.name} className="relative flex items-center h-full group cursor-pointer">
                                        <div className="flex items-center gap-1.5 px-6 py-2.5 rounded-full transition-all duration-300 group-hover:bg-[#E2231A]">
                                            <a
                                                href={item.link}
                                                className={`text-[15px] md:text-[18px]  transition-colors duration-300 group-hover:text-white ${isActive ? 'text-gray-900' : 'text-white'
                                                    }`}
                                            >
                                                {item.name}
                                            </a>

                                            {item.dropdown && (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-4 h-4 mt-0.5 transition-all duration-300 group-hover:-rotate-180 group-hover:text-white ${isActive ? 'text-gray-900' : 'text-white'}`}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            )}
                                        </div>

                                        {item.dropdown && (
                                            <div className="absolute top-[80px] left-0 w-64 bg-white rounded-[16px] shadow-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col z-50 border border-gray-100">
                                                {item.dropdown.map((subItem) => (
                                                    <a key={subItem} href={`services#${subItem.toLowerCase().replace(/\s+/g, '-')}`} className="px-6 py-3 text-[16px] font-bold text-[#2A3A4A] hover:text-[#E2231A] hover:bg-red-50/50 transition-colors duration-200">
                                                        {subItem}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Right Side Icons & Hamburger */}
                            <div className="flex items-center space-x-4 md:space-x-5 z-50">

                                {/* Desktop Contact Details */}
                                <div className="hidden lg:flex items-center space-x-5">
                                    <div className={`h-8 w-[1px] transition-colors duration-300 ${isActive ? 'bg-gray-300' : 'bg-white/30'}`}></div>

                                    <button className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${isActive ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' : 'bg-white/20 hover:bg-white/30 text-white'}`}>
                                        <a href="mailto:MRoller@genesis-contracting.com"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg></a>
                                    </button>

                                    <button className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${isActive ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' : 'bg-white/20 hover:bg-white/30 text-white'}`}>
                                        <a href="tel:4194663262"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg></a>
                                    </button>

                                    <span className={` text-[17px] md:text-[18px] ml-2 transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-white'}`}>
                                        (419) 466-3262
                                    </span>
                                </div>

                                {/* Mobile Hamburger Button */}
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="lg:hidden w-[45px] h-[45px] rounded-full flex flex-col justify-center items-center gap-[5px] focus:outline-none transition-all duration-300"
                                >
                                    <span className={`h-[3px] w-6 transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'bg-gray-900 rotate-45 translate-y-[8px]' : (isActive ? 'bg-gray-900' : 'bg-white')}`}></span>
                                    <span className={`h-[3px] w-6 transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'opacity-0' : (isActive ? 'bg-gray-900' : 'bg-white')}`}></span>
                                    <span className={`h-[3px] w-6 transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'bg-gray-900 -rotate-45 -translate-y-[8px]' : (isActive ? 'bg-gray-900' : 'bg-white')}`}></span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Background Overlay */}
            <div className={`fixed top-0 right-0  w-[85%] max-w-[380px] bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>

                {/* --- ADD THIS NEW CLOSE BUTTON --- */}
                <div className="flex justify-end pt-6 pr-6 w-full absolute top-0 right-0 z-50">
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 text-gray-400 hover:text-[#DA291C] transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {/* Scrollable Navigation Links */}
                <div className="flex-1 overflow-y-auto pt-28 px-8 flex flex-col">
                    {navItems.map((item) => (
                        <div key={item.name} className="border-b border-gray-100/80">
                            {item.dropdown ? (
                                <div>
                                    <button
                                        onClick={() => toggleMobileDropdown(item.name)}
                                        className="w-full flex items-center justify-between py-5 text-[22px] font-bold text-[#111827]"
                                    >
                                        {item.name}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-5 h-5 transition-transform duration-300 ${activeMobileDropdown === item.name ? 'rotate-180 text-[#E2231A]' : 'text-gray-400'}`}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>

                                    {/* Accordion Dropdown */}
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeMobileDropdown === item.name ? 'max-h-[500px] mb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="flex flex-col gap-4 pl-4 border-l-2 border-gray-100 ml-2">
                                            {item.dropdown.map((subItem) => (
                                                <a
                                                    key={subItem}
                                                    href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="text-[17px] font-semibold text-gray-500 hover:text-[#E2231A]"
                                                >
                                                    {subItem}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <a
                                    href={item.link}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-5 text-[22px] font-bold text-[#111827] hover:text-[#E2231A] transition-colors"
                                >
                                    {item.name}
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* Sticky Contact Footer at bottom of drawer */}
                <div className="p-8 pb-12 bg-white mt-auto">
                    <p className="text-[13px] font-bold text-[#6B7280] tracking-wider mb-3">CALL US 24/7</p>
                    <a
                        href="tel:4194663262"
                        className="flex items-center justify-center w-full bg-[#DA291C] text-white py-3.5 rounded-[10px] font-bold text-[19px] hover:bg-red-700 transition-colors shadow-md"
                    >
                        (419) 466-3262
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;