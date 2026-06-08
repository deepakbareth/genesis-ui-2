import StatsRow from './StatsRow';
import QuoteText from './QuoteText';
import QuoteFooter from './QuoteFooter';
import impactImage from '../../../assets/Home/h5.jpg'

const ImpactSection = () => {
    return (
        <section className="w-full bg-white overflow-hidden  font-sans">

            {/* Top Component */}
            <StatsRow />

            {/* Mid & Bottom Wrapper */}
            <div className="relative w-full py-10 lg:py-20">
                {/* 1. Full-width dotted background on the very bottom layer */}
                <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-[size:30px_30px]"></div>
                <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* LEFT COLUMN: We stack your Mid and Bottom components here! */}
                        <div className="flex flex-col justify-center pt-4">
                            <QuoteText />
                            <QuoteFooter />
                        </div>

                        {/* RIGHT COLUMN: The large image */}
                        <div className="w-full h-full relative">
                            <img
                                src={impactImage}
                                alt="Construction site"
                                className="w-full h-[500px] lg:h-[700px] object-cover rounded-xl shadow-lg"
                            />
                        </div>

                    </div>
                    {/* Call To Action Link */}
                    <div className='mt-10'>
                        <a href="#" className="inline-flex items-center group cursor-pointer ">
                            <div className="w-10 h-10 rounded-full bg-[#DA291C] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                            <span className="ml-4 text-[17px] font-bold text-[#DA291C] group-hover:underline decoration-2 underline-offset-4">
                                Read the full leadership perspective
                            </span>
                        </a>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default ImpactSection;