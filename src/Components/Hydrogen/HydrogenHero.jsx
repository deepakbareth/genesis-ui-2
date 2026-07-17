import React from 'react';
import { Phone } from 'lucide-react';
import PageBanner from '../reusavleComp/PageBanner';
import hydrogenImg from '../../assets/Hydrogen/hydrogen.jpg';

const HydrogenHero = () => {
    return (
        <PageBanner
            bgImage={hydrogenImg}
            title="Turnkey Hydrogen Infrastructure Delivery"
            subtitle="One Contractor for Hydrogen Construction, Installation, Upgrades & Maintenance"
            breadcrumbs={[
                { name: 'Home', link: '/genesis-ui-2/' },
                { name: 'Services', link: '/genesis-ui-2/services' },
                { name: 'Hydrogen' }
            ]}
        >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mt-10">
                <a
                    href="tel:4194663262"
                    className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-sm font-semibold tracking-wider font-['Necto_Mono',monospace] uppercase text-center flex items-center justify-center gap-3 shadow-lg transition-colors"
                >
                    <Phone className="w-5 h-5" />
                    <span>Get a Consultation</span>
                </a>
                {/* <a
                    href="tel:4194663262"
                    className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-sm font-semibold tracking-wider font-['Necto_Mono',monospace] uppercase text-center flex items-center justify-center gap-3 shadow-lg transition-colors"
                >
                    Call us: (419) 466-3262
                </a> */}
            </div>
        </PageBanner>
    );
};

export default HydrogenHero;
