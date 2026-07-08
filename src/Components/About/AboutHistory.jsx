import React from 'react';

const AboutHistory = () => {
    return (
        <section className="relative w-full py-16 md:py-24 bg-slate-50 font-sans">
            {/* Dotted backdrop */}
            <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-[size:30px_30px] pointer-events-none"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
                
                {/* Section Header */}
                <div className="mb-12">
                    <span className="text-[13px] text-gray-500 tracking-[0.15em] uppercase mb-3 font-semibold block font-['Necto_Mono',ui-monospace]">
                        Chronology & Milestones
                    </span>
                    <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[52px] font-normal text-[#2A3A4A] leading-[1.15] tracking-tight">
                        Brief History of Genesis Contracting Inc
                    </h2>
                    <div className="w-10 h-1.5 bg-[#DA291C] mt-6"></div>
                </div>

                {/* Editorial Two-Column Text Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 text-[15px] md:text-[18px] text-[#4A5568] leading-[1.75] font-sans">
                    
                    {/* Left Narrative Column */}
                    <div className="flex flex-col gap-6">
                        <p>
                            An Ohio corporation, the company was founded in December of 1998, in Perrysburg, OH and is currently located in Holland, OH. The company was launched by Matt Roller and 3 other founding members who are no longer with the company. In the beginning, Genesis initially focused on smaller clients and was a subcontractor for companies that performed petroleum fuel work. In 2003, Genesis was chosen by Hawthorne Services as a subcontractor for a major contract at Fort Bragg, N.C. which was the first major growth opportunity for the company.
                        </p>
                        <p>
                            In 2007, James Gordon was brought onboard to help manage Human Resource, IT, as well as the financial aspects of the business. James’ strong financial background has been utilized to help continue diversifying and growing the business.
                        </p>
                        <p>
                            John Lang joined Genesis in 2013 as a Site Superintendent. As a former employee of Clean Energy, his expertise as a startup technician and Project Manager has allowed him to leverage his connection in the industry and the CNG division was created within Genesis. In 2019, John took over the role as President upon Brent White’s departure.
                        </p>
                        <p>
                            With over 50 years of combined experience, the current owners directly manage crews made up from a pool of skilled employees who travel to various job site locations across the country. All field service employees maintain certifications required to work on alternative fueling systems. This training ensures that all Genesis projects are in strict compliance with all federal, state and local codes, regulations and standards. Additionally, Genesis is Avetta and ISN certified which are world recognized safety and compliance certifications.
                        </p>
                    </div>

                    {/* Right Narrative Column */}
                    <div className="flex flex-col gap-6">
                        <p>
                            Genesis has spent the last twenty-five years building solid relationships with a number of reliable suppliers, subcontractors, and clients. These relationships provide them with up-to-date information on the best supplies, methods and services currently being employed in the industry. Genesis has developed a sophisticated bid process system that considers all job costs including quotes from local job site suppliers and subcontractors, and an administrative staff experienced in construction documentation, who track and compare all job costs to budget.
                        </p>
                        <p>
                            With respect to competition, Genesis has developed a loyal client base and has built company brand recognition within the alternative fuel market. Genesis focuses on projects within its core competency, that are manageable and within the scope of its resources. A bid success ratio of nearly 1 out of 3 indicates its strength in their relationships and their bidding process.
                        </p>
                        <p>
                            Genesis has a warehouse located in Waterford, OH that was built in 2019, however, all office staff work remotely. This organizational structure provides Genesis the ability to be cost competitive based on lower G&A expenses. Projects are scattered across the country in approximately 30 different states. The company owns a few trucks, trailers and other construction equipment that are used at the job sites.
                        </p>
                        <p>
                            Currently, the company does not have a Line of Credit as the company manages projects with their own cashflow. The company has grown exponentially over the last few years even during the pandemic. One of Genesis major clients serves Amazon, Wal-Mart and Home Depot just to name a few.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutHistory;
