import React, { useEffect } from 'react';
import AboutBanner from '../Components/About/AboutBanner';
import AboutIntro from '../Components/About/AboutIntro';
import AboutStats from '../Components/About/AboutStats';
import AboutHistory from '../Components/About/AboutHistory';
import AboutLeadership from '../Components/About/AboutLeadership';
import AboutTestimonials from '../Components/About/AboutTestimonials';
import AboutCTA from '../Components/About/AboutCTA';
function About() {
    // Scroll to top of the page when navigating to About Us
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <AboutBanner />
            <AboutIntro />
            <AboutStats />
            <AboutHistory />
            <AboutLeadership />
            <AboutTestimonials />
            <AboutCTA />
           

        </div>
    );
}

export default About;
