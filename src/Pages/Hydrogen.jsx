import React, { useEffect } from 'react';
import HydrogenHero from '../Components/Hydrogen/HydrogenHero';
import HydrogenThreeGrid from '../Components/Hydrogen/HydrogenThreeGrid';
import HydrogenFoldable from '../Components/Hydrogen/HydrogenFoldable';
import HydrogenSafety from '../Components/Hydrogen/HydrogenSafety';
import HydrogenMatrix from '../Components/Hydrogen/HydrogenMatrix';
import HydrogenWhyGenesis from '../Components/Hydrogen/HydrogenWhyGenesis';
import HydrogenCTA from '../Components/Hydrogen/HydrogenCTA';

const HydrogenPage = () => {
    // Scroll reset on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-white font-sans overflow-x-hidden">
            <HydrogenHero />
            <HydrogenThreeGrid />
            <HydrogenFoldable />
            <HydrogenSafety />
            <HydrogenMatrix />
            <HydrogenWhyGenesis />
            <HydrogenCTA />
        </div>
    );
};

export default HydrogenPage;
