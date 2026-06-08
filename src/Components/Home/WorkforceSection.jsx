import React from 'react';
import workimg from '../../assets/Home/h6.jpg'

// 1. All content is stored here for easy updating
// 1. Updated with real Genesis Contracting Inc. content!
const sectionData = {
    headline: "Building Infrastructure\n& Client Relationships",
    image: {
        // Keep your workimg variable here
        src: workimg, 
        alt: "Genesis Contracting team on site"
    },
    paragraphs: [
        {
            boldText: "Genesis Contracting Inc. is an Ohio-based general contractor specializing in alternative fuel systems and infrastructure across the United States since 1998. "
        },
        {
            normalText: "We offer full-scale engineering and construction solutions through specialized departments, including a Hydrogen Division, CNG & LNG Systems, EV Charging Solutions, Civil & Concrete, and Electrical services."
        },
        {
            normalText: "Operating with a strong competitive position, Genesis utilizes a sophisticated bidding process and manages projects using internal cash flow to avoid debt accumulation, ensuring total financial stability and flexibility for our partners."
        },
        {
            boldText: "Whether handling pre-engineered layouts or design-build projects, our experienced team expertly manages everything from initial budgetary estimates and local permitting to full project completion."
        }
    ]
};

const WorkforceSection = () => {
    return (
        <section className="relative w-full py-10 lg:py-20  font-sans">

            {/* Full-width dotted background */}
            <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-[size:30px_30px]"></div>

            {/* Center white container hiding the dots in the middle */}
            <div className="relative z-10 max-w-[1400px] mx-auto bg-white p-6 lg:p-12 rounded-sm">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                    {/* LEFT COLUMN: Large Image */}
                    <div className="w-full h-[400px] lg:h-auto min-h-[500px]">
                        <img
                            src={sectionData.image.src}
                            alt={sectionData.image.alt}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>

                    {/* RIGHT COLUMN: Text Content */}
                    <div className="flex flex-col justify-center py-6">

                        {/* Headline */}
                       <h2 
                       className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[64px] font-normal text-[#2A3A4A] leading-[1.15] tracking-tight mb-10 whitespace-pre-line">
    {sectionData.headline}
</h2>

                        {/* Paragraphs */}
                        <div className="flex flex-col gap-6">
                            {sectionData.paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-[15px] md:text-[20px] text-[#4A5568] leading-[1.7] max-w-[95%]">
                                    {/* Render bold text if it exists in the data object */}
                                    {paragraph.boldText && (
                                        <strong className="font-bold text-[#111827]">
                                            {paragraph.boldText}
                                        </strong>
                                    )}
                                    {/* Render normal text if it exists in the data object */}
                                    {paragraph.normalText && (
                                        <span>{paragraph.normalText}</span>
                                    )}
                                </p>
                            ))}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default WorkforceSection;