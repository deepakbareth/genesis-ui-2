import React from 'react';

const PageBanner = ({ bgImage, title, subtitle, breadcrumbs, navLinks, children }) => {
    return (
        <section
            className="relative h-[480px] md:h-screen bg-cover bg-center flex items-center w-full"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            {/* Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-24">

                {/* Conditional Render: Navigation Link Anchors or Standard Breadcrumbs */}
                {navLinks && navLinks.length > 0 ? (
                    /* Services page anchor menu */
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-6 text-white/80 text-[14px] md:text-[20px] mb-8 md:mb-[50px] font-semibold font-['Necto_Mono',ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] tracking-wide">
                        {navLinks.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.link}
                                className="hover:text-red-500 transition-colors underline whitespace-nowrap"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                ) : breadcrumbs && breadcrumbs.length > 0 ? (
                    /* About & Contact page breadcrumbs */
                    <div className="flex flex-wrap items-center gap-2 text-white text-[14px] md:text-[16px] mb-4 font-semibold font-['Necto_Mono',ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] tracking-wider uppercase">
                        {breadcrumbs.map((crumb, idx) => (
                            <React.Fragment key={idx}>
                                {crumb.link ? (
                                    <a href={crumb.link} className="hover:text-red-500 transition-colors">
                                        {crumb.name}
                                    </a>
                                ) : (
                                    <span className="text-white">{crumb.name}</span>
                                )}
                                {idx < breadcrumbs.length - 1 && <span>/</span>}
                            </React.Fragment>
                        ))}
                    </div>
                ) : null}

                {/* Heading */}
                <h1
                    className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-white text-4xl sm:text-6xl md:text-7xl mb-4 tracking-tight leading-tight"
                >
                    {title}
                </h1>

                {/* Description Subtitle */}
                <p
                    className="font-['InterVariable',system-ui,-apple-system,'Segoe_UI',Roboto,Ubuntu,Cantarell,'Noto_Sans',sans-serif] text-white/90 text-base md:text-[24px] max-w-2xl leading-relaxed"
                >
                    {subtitle}
                </p>

                {children}
            </div>
        </section>
    );
};

export default PageBanner;
