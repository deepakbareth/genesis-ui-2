const Banner = ({ videoSrc }) => {
    return (
        <section className="relative w-full h-[60vh] md:h-[90vh] flex items-center bg-gray-900 overflow-hidden">

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                {/* 
                  Make sure to pass your local video file via the videoSrc prop 
                  or replace the src below directly. 
                */}
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

            {/* Content Container */}
            <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-24">
                <div className="max-w-4xl flex flex-col items-start gap-4 ">
                    {/* Category Label */}
                    {/* <h3 className="text-[#FFC72C] pl-5 text-sm md:text-base font-bold tracking-[0.15em] uppercase mb-4 drop-shadow-md">
                        PROJECTS
                    </h3> */}

                    {/* Main Headline */}
                    <h1
                        className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-white text-3xl md:text-[95px]  tracking-tight drop-shadow-lg leading-tight"
                    >
                        Genesis Contracting
                    </h1>
                </div>
            </div>

        </section>
    );
};

export default Banner;