import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactDetails = () => {
    return (
        <section className="relative w-full py-16 md:py-24 bg-white font-sans overflow-hidden">
            {/* Dotted backdrop */}
            <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-[size:30px_30px] pointer-events-none"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* LEFT COLUMN: Contact Details */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <ContactInfo />
                    </div>

                    {/* RIGHT COLUMN: Contact Form */}
                    <div className="lg:col-span-7 w-full">
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactDetails;
