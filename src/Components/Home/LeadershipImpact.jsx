import React from 'react';
import authorImage from '../../assets/Home/own1.jpg';


// 1. All content is stored in this data object
const pageData = {
    stats: [
        {
            number: "9,000",
            titleTop: "Craft",
            titleBottom: "Professionals",
            description: "At peak, more than 9,000 craft professionals worked on site."
        },
        {
            number: "70,000,000",
            titleTop: "Work",
            titleBottom: "Hours",
            description: "Achieved 70 million work hours without a lost-time incident."
        },
        {
            number: "30%",
            titleTop: "Less",
            titleBottom: "",
            description: "After completing Unit 3 at Vogtle, Bechtel drove costs down by 30% when delivering Unit 4."
        }
    ],
    quoteSection: {
        headline: "Restoring U.S.\nNuclear Leadership",
        paragraph: "The U.S. should aim for a thriving nuclear industry that provides a competitive alternative for nations in the global market. Plant Vogtle is already moving us in the right direction. It has begun rebuilding the United States' muscle memory in nuclear construction, including reestablishing critical supply chains. Designing and building a nuclear power plant requires extreme precision, with safety and performance criteria far exceeding those in other types of construction.",
    },
    author: {
        name: "Brendan Bechtel",
        role: "CHAIRMAN AND CEO, BECHTEL",
        // Replace with your actual local asset import, e.g., authorImage
        avatarImg: authorImage
    },
    cta: {
        text: "Brendan Bechtel on America's nuclear comeback",
        url: "#"
    },
    mainImage: {
        // Replace with your actual local asset import, e.g., hardhatImage
        src: "https://images.unsplash.com/photo-1508873535684-277a3cb8c9ea?q=80&w=800&auto=format&fit=crop",
        alt: "Worker with US Flag hardhat"
    }
};

const LeadershipImpact = () => {
    return (
        <section className="w-full bg-white pt-16 pb-24 font-sans">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* --- TOP SECTION: STATS ROW --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-24">
                    {pageData.stats.map((stat, index) => (
                        <div key={index} className="flex flex-col">
                            {/* Number & Title */}
                            <h3 className="text-[32px] lg:text-[40px] text-[#2A3A4A] font-light leading-[1.1] mb-5">
                                <span className="font-bold text-[#DA291C] mr-2">
                                    {stat.number}
                                </span>
                                {stat.titleTop}
                                {stat.titleBottom && (
                                    <>
                                        <br />
                                        {stat.titleBottom}
                                    </>
                                )}
                            </h3>

                            {/* Horizontal Divider Line */}
                            <div className="w-full h-[1px] bg-gray-200 mb-5"></div>

                            {/* Description */}
                            <p className="text-[15px] text-[#4A5568] leading-relaxed max-w-[90%]">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* --- BOTTOM SECTION: QUOTE & IMAGE --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Quote, Author, and Link */}
                    <div className="flex flex-col">

                        {/* Quote Mark */}
                        <svg className="w-10 h-10 text-[#9CA3AF] mb-6 opacity-40" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>

                        {/* Headline */}
                        <h2 className="text-[36px] md:text-[42px] font-normal text-[#2A3A4A] leading-[1.1] tracking-tight mb-8 whitespace-pre-line">
                            {pageData.quoteSection.headline}
                        </h2>

                        {/* Paragraph */}
                        <p className="text-[15px] md:text-[20px] text-[#4A5568] leading-[1.7] mb-12 max-w-[95%]">
                            {pageData.quoteSection.paragraph}
                        </p>

                        {/* Author Profile */}
                        <div className="flex items-center gap-4 mb-16">
                            <img
                                src={pageData.author.avatarImg}
                                alt={pageData.author.name}
                                className="w-[60px] h-[60px] rounded-full object-cover shadow-sm"
                            />
                            <div className="flex flex-col">
                                <span className="text-[18px] font-semibold text-[#111827]">
                                    {pageData.author.name}
                                </span>
                                <span className="text-[12px] font-bold text-[#6B7280] tracking-widest uppercase mt-1">
                                    {pageData.author.role}
                                </span>
                            </div>
                        </div>

                        {/* CTA Link */}
                        <div>
                            <a href={pageData.cta.url} className="inline-flex items-center group cursor-pointer">
                                {/* Red Circular Arrow Button */}
                                <div className="w-10 h-10 rounded-full bg-[#DA291C] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                                <span className="ml-4 text-[16px] font-bold text-[#DA291C] group-hover:underline decoration-2 underline-offset-4">
                                    {pageData.cta.text}
                                </span>
                            </a>
                        </div>

                    </div>

                    {/* Right Column: Large Image */}
                    <div className="w-full h-full lg:pl-10">
                        <img
                            src={pageData.mainImage.src}
                            alt={pageData.mainImage.alt}
                            className="w-full h-auto lg:h-[750px] object-cover rounded-[12px] shadow-sm"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LeadershipImpact;