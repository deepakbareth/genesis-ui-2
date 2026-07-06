import bannerImg from '../../assets/Home/Gallery/g1.jpg'; // change path

function ServicesBanner() {
    return (
        <section
            className="relative h-[480px] md:h-screen bg-cover bg-center flex items-center w-full"
            style={{
                backgroundImage: `url(${bannerImg})`,
            }}
        >
            {/* Overlay - Darkened slightly to guarantee text contrast on mobile */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

                {/* Fixed Navigation Row: Uses flex-wrap and responsive gaps so items drop down cleanly on phones */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-6 text-white/80 text-[14px] md:text-[20px] mb-8 md:mb-[50px] font-semibold font-['Necto_Mono',ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] tracking-wide">
                    <a href="#hydrogen" className="hover:text-red-500 transition-colors underline whitespace-nowrap ">Hydrogen</a>
                    <a href="#ev-charging" className="hover:text-red-500 transition-colors underline whitespace-nowrap">EV Charging</a>
                    <a href="#cng" className="hover:text-red-500 transition-colors underline whitespace-nowrap">CNG</a>
                    <a href="#civil" className="hover:text-red-500 transition-colors underline whitespace-nowrap">Civil</a>
                    <a href="#electrical" className="hover:text-red-500 transition-colors underline whitespace-nowrap">Electrical</a>
                    <a href="#maintenance" className="hover:text-red-500 transition-colors underline whitespace-nowrap">Maintenance</a>
                    <a href="#upgrades" className="hover:text-red-500 transition-colors underline whitespace-nowrap">Upgrades</a>
                </div>

                {/* Heading: Scaled down slightly on tiny phones (text-4xl) to eliminate line clipping */}
                <h1
                    className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-white text-4xl sm:text-6xl md:text-7xl  mb-4 tracking-tight">
                    Services
                </h1>

                {/* Subtitle: Adjusted text size mobile-first */}
                <p
                    className="font-['InterVariable',system-ui,-apple-system,'Segoe_UI',Roboto,Ubuntu,Cantarell,'Noto_Sans',sans-serif] text-white/90 text-base md:text-[24px] max-w-2xl leading-relaxed">
                    Delivering innovative alternative fuel solutions,
                    electrical services, civil construction, and
                    infrastructure development.
                </p>
            </div>
        </section>
    );
}

export default ServicesBanner;