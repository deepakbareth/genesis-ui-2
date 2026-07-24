import React, { useEffect } from 'react';
import { Phone, Building2, Zap, Wrench, Layers, Truck, Bus, Warehouse } from 'lucide-react';
import PageBanner from '../Components/reusavleComp/PageBanner';
import ThreeGrid from '../Components/reusavleComp/ThreeGrid';
import Foldable from '../Components/reusavleComp/Foldable';
import Safety from '../Components/reusavleComp/Safety';
import Matrix from '../Components/reusavleComp/Matrix';
import WhyGenesis from '../Components/reusavleComp/WhyGenesis';
import CTASection from '../Components/reusavleComp/CTASection';

import cngImg from '../assets/Servicesimg/cng.jpg';

// 1. Three-Grid Capabilities Data
const cngCardsData = [
    {
        title: "Construction",
        icon: <Building2 className="w-8 h-8 text-red-700" />,
        items: [
            "Ground-up Fueling Stations",
            "High-Volume Fueling Systems",
            "Permitting & Demolition",
            "Piping & Mechanical Installations"
        ]
    },
    {
        title: "Upgrades",
        icon: <Zap className="w-8 h-8 text-red-700" />,
        items: [
            "Compressor Additions",
            "Dispenser Replacements",
            "Safety Valve Modernization"
        ]
    },
    {
        title: "Maintenance",
        icon: <Wrench className="w-8 h-8 text-red-700" />,
        items: [
            "Compressor Servicing",
            "Dispenser Calibration",
            "Leak Detection & Repair"
        ]
    }
];

// 2. Foldable Accordions Data
const cngServicesData = [
    {
        id: 'construction',
        title: 'Construction',
        paragraphs: [
            "Genesis CNG Fuel System Contractor is a leading expert in the design, installation, and construction of Compressed Natural Gas (CNG) fueling stations. With extensive experience in engineering design for fuel distribution systems and associated infrastructure, our team is equipped to handle jobsite management, from obtaining local permits to conducting thorough inspections at every development phase.",
            "Our comprehensive services include excavation, grading, foundation work, and installation of electrical and mechanical underground systems, as well as grounding and supporting concrete structures.",
            "Partnering with strategic suppliers, we ensure the procurement of essential materials and equipment for the proficient installation of CNG fueling systems. Our capabilities extend to specialized system installations, efficient demolition and disposal of existing structures, and implementing high-volume fueling systems for demanding applications. Genesis CNG Fuel System Contractor is your one-stop solution for establishing fueling stations for disposal trucks, buses, and other vehicles.",
            "Our expertise in piping installation, general contracting, and CNG equipment installation ensures seamless integration and optimal performance for your fueling station. Trust Genesis CNG to deliver unparalleled service and expertise for all your CNG fueling needs."
        ],
        quote: "— John Lang, President",
        buttonText: "Schedule a 15-Minute Project Review",
        phone: "4194663262",
        maxHeight: "max-h-[1500px]"
    },
    {
        id: 'upgrades',
        title: 'Upgrades',
        paragraphs: [
            "Genesis helps CNG fueling operators scale infrastructure. As fleet demand grows, station owners need more capacity, faster throughput, and stronger system reliability from assets already in the ground. Genesis supports that growth through strategic natural gas station upgrades, including compressor additions, dispenser replacements, and safety valve modernizations.",
            "With deep field experience in high-pressure natural gas environments, Genesis coordinates upgrade work around live operational needs, equipment vendors, safety requirements, and commissioning timelines. The result is a smarter path to expansion: greater fueling capacity, improved station performance, and reduced downtime without the disruption of a full rebuild."
        ],
        buttonText: "Discuss Project Details",
        phone: "4194663262",
        maxHeight: "max-h-[1000px]"
    },
    {
        id: 'maintenance',
        title: 'Maintenance',
        paragraphs: [
            "Genesis Contracting Inc. excels in providing comprehensive support for clients through its expertise in maintenance and upgrades of Compressed Natural Gas (CNG) fueling systems. A primary focus of this support is the execution of efficiency projects, which serve to optimize system performance and extend operational longevity. One such efficiency project involves the addition or replacement of CNG compressors and dispensers, a critical component that greatly influences the effectiveness of the fueling infrastructure.",
            "Efficiency projects undertaken by Genesis Contracting Inc. are carefully assessed to identify the most appropriate solutions, striking the ideal balance between performance, reliability, and cost-effectiveness. By placing an emphasis on these projects, the company ensures that clients receive improved fueling rates, reduced operational costs, and extended system lifespans. This approach demonstrates Genesis Contracting Inc.’s commitment to fostering long-term relationships with clients and delivering exceptional value through their CNG fueling infrastructure investments."
        ],
        buttonText: "Discuss Maintenance",
        phone: "4194663262",
        maxHeight: "max-h-[1000px]"
    }
];

// 3. Safety Slides Compliance Data
const cngSafetySlides = [
    {
        title: "Avetta Safety Prequalified",
        desc: "Genesis Contracting is an Avetta-prequalified contractor, verifying our compliance with industrial safety, liability, and insurance standards.",
        highlight: "Verified Compliance"
    },
    {
        title: "ISN Member Contractor",
        desc: "Genesis is a registered ISN member contractor with audited safety protocols, training records, and performance metrics.",
        highlight: "Audited Quality"
    },
    {
        title: "NFPA 52 Code Compliance",
        desc: "All natural gas station builds and installations strictly conform to NFPA 52 (Vehicular Natural Gas Fuel Systems Code) requirements.",
        highlight: "Natural Gas Codes"
    },
    {
        title: "ASME Piping Integrity",
        desc: "High-pressure mechanical gas lines are constructed and tested in strict compliance with ASME B31.3 process piping standards.",
        highlight: "Code Compliance"
    }
];

// 4. Matrix Industries Data
const cngIndustries = [
    { name: "Public Natural Gas Fueling Stations", icon: <Building2 className="w-5 h-5 text-red-700" /> },
    { name: "Waste Hauling Fleet Yards", icon: <Truck className="w-5 h-5 text-red-700" /> },
    { name: "Municipal Bus Operators", icon: <Bus className="w-5 h-5 text-red-700" /> },
    { name: "Regional Freight Trucking", icon: <Truck className="w-5 h-5 text-red-700" /> },
    { name: "School District Transportation", icon: <Bus className="w-5 h-5 text-red-700" /> },
    { name: "Fleet Refueling & Depot Facilities", icon: <Layers className="w-5 h-5 text-red-700" /> },
    { name: "Logistics & Distribution Centers", icon: <Warehouse className="w-5 h-5 text-red-700" /> },
    { name: "Municipal Utility Fleet Yards", icon: <Building2 className="w-5 h-5 text-red-700" /> },
    { name: "Industrial Processing Facilities", icon: <Layers className="w-5 h-5 text-red-700" /> }
];

const CNGPage = () => {
    // Scroll reset on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-white font-sans overflow-x-hidden">
            <PageBanner
                bgImage={cngImg}
                title="Turnkey CNG Infrastructure Delivery"
                subtitle="One Contractor for CNG Construction, Installation, Upgrades & Maintenance"
                breadcrumbs={[
                    { name: 'Home', link: '/genesis-ui-2/' },
                    { name: 'Services', link: '/genesis-ui-2/services' },
                    { name: 'CNG' }
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

                </div>
            </PageBanner>

            <ThreeGrid
                subtitle="Services Overview"
                title="CNG Station Infrastructure Capabilities"
                cardsData={cngCardsData}
            />

            <Foldable
                subtitle="Deep Dive"
                title="Description of Services"
                servicesData={cngServicesData}
            />

            <Safety
                subtitle="Rigorous Safety"
                title="Compliance & Safety Standards"
                safetySlides={cngSafetySlides}
            />

            <Matrix
                subtitle="Target Sectors"
                title="Industry Matrix"
                industries={cngIndustries}
            />

            <WhyGenesis />
            <CTASection />
        </div>
    );
};

export default CNGPage;
