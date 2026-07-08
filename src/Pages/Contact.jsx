import React, { useEffect } from 'react';
import ContactBanner from '../Components/Contact/ContactBanner';
import ContactDetails from '../Components/Contact/ContactDetails';

function Contact() {
    // Scroll to top of the page when navigating to Contact page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <ContactBanner />
            <ContactDetails />
        </div>
    );
}

export default Contact;
