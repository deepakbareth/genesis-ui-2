const QuoteText = () => {
    return (
        <div className="mb-8">
            {/* Quote Icon */}
            <svg className="w-12 h-12 text-[#9CA3AF] mb-6 opacity-40" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

          <h2
  className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[48px] font-normal text-[#2A3A4A] leading-[1.1] tracking-tight mb-8"
>
  Restoring Industry <br className="hidden md:block" />
  Leadership
</h2>
            <p className="text-[16px] md:text-[20px] text-[#4A5568] leading-[1.8] max-w-[90%]">
               With all the changes we’re seeing in the alternative fueling industry including electrical vehicle (EV) filling we are extremely excited for future growth and expansion.</p>
        </div>
    );
};

export default QuoteText;