const ProjectInfoBar = () => {
    return (
        <section className="w-full font-sans">


            {/* 2. Details Ribbon Section */}
            <div className="bg-white border-b border-gray-200">
                {/* 
                  Using CSS Grid to handle the layout. 
                  divide-x creates the vertical lines between items on desktop.
                  divide-y creates horizontal lines if they stack on mobile.
                */}
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">

                    {/* Item 1: Category (Nuclear Power Pill) */}
                    <div className="flex items-center justify-center px-6 lg:px-12 py-6">
                        <div className="inline-flex items-center  gap-2 bg-[#E6E6FA] text-[#3A3A6A] px-4 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase">
                            {/* Custom Atom Icon */}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#3A3A6A]">
                                <circle cx="12" cy="12" r="2" fill="currentColor" />
                                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
                                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
                                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
                            </svg>
                           Building Infrastructure
                        </div>
                    </div>

                    {/* Item 2: Location */}
                    <div className="flex items-center justify-start px-6 lg:px-12 py-6 gap-3">
                        {/* Red Map Pin Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#DA291C] flex-shrink-0">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[19px] text-[#111827]">USA</span>
                    </div>

                    {/* Item 3: Status */}
                    <div className="flex items-center justify-start px-6 lg:px-12 py-6 gap-3">
                        {/* Red Checkmark Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-[#DA291C] flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-[19px] text-[#111827]">Completed 2024</span>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default ProjectInfoBar;