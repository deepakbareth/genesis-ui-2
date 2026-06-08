import authorImage from "../../../assets/Home/own1.jpg";

const QuoteFooter = () => {
    return (
        <div className="flex flex-col gap-10 mt-8">

            {/* Author Profile */}
            <div className="flex items-center gap-4">
                <img
                    src={authorImage}
                    alt="Executive Portrait"
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                />
                <div className="flex flex-col">
                    <span className="text-[19px] font-semibold text-[#111827]">
                        Matt Roller
                    </span>
                    <span className="text-[13px] font-bold text-[#6B7280] tracking-widest uppercase mt-1">
                        Senior Project Manager & Founder
                    </span>
                </div>
            </div>



        </div>
    );
};

export default QuoteFooter;