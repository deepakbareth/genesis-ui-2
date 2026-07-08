import React from 'react';
import bannerImg from '../../assets/Home/Gallery/g1.jpg';

const AboutBanner = () => {
    return (
        <section
            className="relative h-[480px] md:h-screen bg-cover bg-center flex items-center w-full"
            style={{
                backgroundImage: `url(${bannerImg})`,
            }}
        >
            {/* Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-24">

                {/* Breadcrumb Info Bar */}
                <div className="flex flex-wrap items-center gap-2 text-white text-[14px] md:text-[16px] mb-4 font-semibold font-['Necto_Mono',ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] tracking-wider uppercase">
                    <a href="/genesis-ui-2/" className="hover:text-red-500 transition-colors">Home</a>
                    <span>/</span>
                    <span className="text-white">About Us</span>
                </div>

                {/* Heading */}
                <h1
                    className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-white text-4xl sm:text-6xl md:text-7xl mb-4 tracking-tight leading-tight"
                >
                    Who We Are
                </h1>

                {/* Description Subtitle */}
                <p
                    className="font-['InterVariable',system-ui,-apple-system,'Segoe_UI',Roboto,Ubuntu,Cantarell,'Noto_Sans',sans-serif] text-white/90 text-base md:text-[24px] max-w-2xl leading-relaxed"
                >
                    Building high-performance fueling infrastructure and establishing
                    trusting, long-term relationships across the United States since 1998.
                </p>
            </div>
        </section>
    );
};

export default AboutBanner;
