import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        category: 'General Inquiry',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="bg-white p-8 md:p-10 rounded-xl border border-gray-100 shadow-xl relative z-10">
            {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <h3 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui] text-[24px] md:text-[28px] font-normal text-[#2A3A4A] tracking-tight mb-2 border-b border-gray-100 pb-4">
                        Send a Message
                    </h3>

                    {/* Name Input */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-[13px] font-bold text-[#2A3A4A] uppercase tracking-wider">
                            Full Name *
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-[15px]"
                        />
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Email Input */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-[13px] font-bold text-[#2A3A4A] uppercase tracking-wider">
                                Email Address *
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="johndoe@example.com"
                                className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-[15px]"
                            />
                        </div>

                        {/* Phone Input */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="text-[13px] font-bold text-[#2A3A4A] uppercase tracking-wider">
                                Phone Number
                            </label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(123) 456-7890"
                                className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-[15px]"
                            />
                        </div>
                    </div>

                    {/* Category Select Dropdown */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="category" className="text-[13px] font-bold text-[#2A3A4A] uppercase tracking-wider">
                            Interest/Service Area
                        </label>
                        <select 
                            id="category" 
                            name="category" 
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none bg-white transition-all text-[15px]"
                        >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Hydrogen Division">Hydrogen Division</option>
                            <option value="CNG & LNG Division">CNG & LNG Division</option>
                            <option value="EV charging Stations">EV Charging Stations</option>
                            <option value="Civil & Concrete">Civil & Concrete</option>
                            <option value="Electrical">Electrical</option>
                            <option value="Maintenance & Support">Maintenance & Support</option>
                        </select>
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-[13px] font-bold text-[#2A3A4A] uppercase tracking-wider">
                            Your Message *
                        </label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            placeholder="Write your message details here..."
                            className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-[15px]"
                        />
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit"
                        className="w-full bg-red-700 hover:bg-red-800 text-white py-4 rounded-sm font-semibold tracking-wider transition-colors duration-300 shadow-md font-['Necto_Mono',ui-monospace] uppercase flex items-center justify-center gap-3 mt-4"
                    >
                        <span>—</span>
                        <span>Submit message</span>
                    </button>
                </form>
            ) : (
                <div className="text-center py-12 flex flex-col items-center justify-center">
                    {/* Success Check SVG Icon */}
                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center shadow-inner mb-6 animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>

                    <h3 className="font-['Apfel_Grotezk'] text-[28px] text-[#2A3A4A] mb-3">
                        Thank You!
                    </h3>
                    <p className="text-[16px] text-gray-500 max-w-md leading-relaxed mb-8">
                        Your message has been sent successfully. A Genesis Contracting representative will get back to you shortly.
                    </p>

                    {/* Reset Button */}
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2.5 rounded-sm text-[14px] font-semibold transition-colors font-['Necto_Mono',ui-monospace] uppercase"
                    >
                        Send another message
                    </button>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
