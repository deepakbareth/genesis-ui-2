import React, { useEffect } from 'react';
import EVHero from '../Components/EV/EVHero';
import EVThreeGrid from '../Components/EV/EVThreeGrid';
import EVFoldable from '../Components/EV/EVFoldable';
import EVSafety from '../Components/EV/EVSafety';
import EVMatrix from '../Components/EV/EVMatrix';
import WhyGenesis from '../Components/reusavleComp/WhyGenesis';
import CTASection from '../Components/reusavleComp/CTASection';

const EVPage = () => {
    // Scroll reset on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-white font-sans overflow-x-hidden">
            <EVHero />
            <EVThreeGrid />
            <EVFoldable />
            <EVSafety />
            <EVMatrix />
            <WhyGenesis />
            <CTASection />
        </div>
    );
};

export default EVPage;
