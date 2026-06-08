import React from 'react';
import hydroImg from '../../assets/Home/FeatureSection/f1.jpg';
import cngImg from '../../assets/Home/FeatureSection/f2.jpg';
import evImg from '../../assets/Home/FeatureSection/f3.jpg';

// Note: The UI only has 3 image slots, so we use 3 of your 4 images here.

// 1. Data Object: Information from UI 1, mapped for UI 2
const featureData = {
    images: {
        primary: { src: hydroImg, alt: "Hydrogen Fueling System Integration" },
        secondaryLeft: { src: cngImg, alt: "CNG System Installation" },
        secondaryRight: { src: evImg, alt: "Commercial EV Charging Station" }
    },
    textContent: {
        headline: "Turnkey Alternative Fuel Solutions",
      paragraphs: [
            {
                boldText: "Hydrogen Fueling & CNG Systems: ",
                normalText: "Complete installation and integration of hydrogen fueling systems with adherence to local and fire codes, alongside expert upgrades for high-volume CNG fueling systems."
            },
            {
                boldText: "Commercial EV Charging: ",
                normalText: "Expert installation and maintenance of EV charging stations for commercial, industrial, and governmental clients, featuring DC fast charging and grid integration."
            },
            {
                boldText: "Comprehensive System Maintenance: ",
                normalText: "Ongoing support, testing, and preventative 24/7 maintenance to keep your alternative fuel systems running safely and efficiently year-round."
            },
            {
                boldText: "Upgrade & Modification: ",
                normalText: "Advanced system optimization and retrofitting to scale production and ensure your infrastructure can efficiently meet growing commercial demands."
            },
            {
                boldText: "Civil Concrete Solutions: ",
                normalText: "From specialized structural foundations to final site completion, we deliver top-quality concrete infrastructure installations with precision and technical expertise."
            }
        ]
    }
};

const FeatureSection = () => {
    return (
        <section className="w-full bg-white py-16 md:py-24 font-sans">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Grid Layout (From UI 2) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT COLUMN: Image Gallery (From UI 2) */}
                    <div className="flex flex-col gap-4 w-full">

                        {/* Top Large Image */}
                        <div className="w-full">
                            <img
                                src={featureData.images.primary.src}
                                alt={featureData.images.primary.alt}
                                className="w-full h-[250px] md:h-[385px] object-cover rounded-xl shadow-sm"
                            />
                        </div>

                        {/* Bottom Two Images (Side-by-side) */}
                        <div className="grid grid-cols-2 gap-4 w-full">
                            {/* Bottom Left Image */}
                            <div className="relative w-full">
                                <img
                                    src={featureData.images.secondaryLeft.src}
                                    alt={featureData.images.secondaryLeft.alt}
                                    className="w-full h-[200px] md:h-[304px] object-cover rounded-xl shadow-sm"
                                />
                            </div>

                            {/* Bottom Right Image */}
                            <div className="w-full">
                                <img
                                    src={featureData.images.secondaryRight.src}
                                    alt={featureData.images.secondaryRight.alt}
                                    className="w-full h-[200px] md:h-[308px] object-cover rounded-xl shadow-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Text Content (Data from UI 1, Format from UI 2) */}
                    <div className="flex flex-col justify-center max-w-xl">

                        {/* Headline */}
                      <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-3xl md:text-[65px]  text-slate-900 leading-[1.2] mb-8 tracking-tight">
    {featureData.textContent.headline}
</h2>

                        {/* Paragraphs Mapped from Data */}
                        <div className="space-y-6 text-[#4A5568] text-[15px] md:text-[16px] leading-[1.7]">
                            {featureData.textContent.paragraphs.map((para, index) => (
                                <p key={index}>
                                    {para.boldText && (
                                        <strong className="font-bold text-[#111827]">
                                            {para.boldText}
                                        </strong>
                                    )}
                                    {para.normalText && (
                                        <span>{para.normalText}</span>
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

export default FeatureSection;