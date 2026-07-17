import React, { useEffect } from 'react';
import CNGHero from '../Components/CNG/CNGHero';
import CNGThreeGrid from '../Components/CNG/CNGThreeGrid';
import CNGFoldable from '../Components/CNG/CNGFoldable';
import CNGSafety from '../Components/CNG/CNGSafety';
import CNGMatrix from '../Components/CNG/CNGMatrix';
import CNGWhyGenesis from '../Components/CNG/CNGWhyGenesis';
import CNGCTA from '../Components/CNG/CNGCTA';

const CNGPage = () => {
    // Scroll reset on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-white font-sans overflow-x-hidden">
            <CNGHero />
            <CNGThreeGrid />
            <CNGFoldable />
            <CNGSafety />
            <CNGMatrix />
            <CNGWhyGenesis />
            <CNGCTA />
        </div>
    );
};

export default CNGPage;
