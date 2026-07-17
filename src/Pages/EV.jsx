import React, { useEffect } from 'react';
import { Phone, Building2, Zap, Wrench, Layers, Truck, Bus, Warehouse } from 'lucide-react';
import PageBanner from '../Components/reusavleComp/PageBanner';
import ThreeGrid from '../Components/reusavleComp/ThreeGrid';
import Foldable from '../Components/reusavleComp/Foldable';
import Safety from '../Components/reusavleComp/Safety';
import Matrix from '../Components/reusavleComp/Matrix';
import WhyGenesis from '../Components/reusavleComp/WhyGenesis';
import CTASection from '../Components/reusavleComp/CTASection';

import evImg from '../assets/Servicesimg/ev-charging.jpg';

// 1. Three-Grid Capabilities Data
const evCardsData = [
    {
        title: "Construction",
        icon: <Building2 className="w-8 h-8 text-red-700" />,
        items: [
            "Level 1, 2, and 3 Station Installs",
            "Civil Foundations & Trenching",
            "Transformer & Cabling Setup",
            "Permit Coordination"
        ]
    },
    {
        title: "Upgrades",
        icon: <Zap className="w-8 h-8 text-red-700" />,
        items: [
            "Charger Power Output Enhancements",
            "Power Supply Scaling",
            "Connector Upgrades for New EV Models"
        ]
    },
    {
        title: "Maintenance",
        icon: <Wrench className="w-8 h-8 text-red-700" />,
        items: [
            "Power Output Diagnostics",
            "Charging Connector Servicing",
            "Electrical Grid & Isolation Testing"
        ]
    }
];

// 2. Foldable Accordions Data
const evServicesData = [
    {
        id: 'construction',
        title: 'Construction',
        paragraphs: [
            "Genesis Contracting Inc. is a leading provider of expert services and workmanship in the field of electric vehicle (EV) charging station installation. With a strong commitment to quality and customer satisfaction, our skilled team delivers tailored solutions to a diverse range of clients, helping them transition to a sustainable, eco-friendly future.",
            "Our clientele includes businesses and commercial establishments such as department stores, discount stores, specialty stores, grocery stores, online retailers, convenience stores, and luxury retailers. We also cater to EV fleets in logistics, transportation, retail, delivery and courier services, construction, public transportation, and emergency services.",
            "Furthermore, we collaborate with automakers, assisting them in setting up charging infrastructure on their premises for in-house testing, validation, and ensuring their EV models are ready for distribution. Genesis Contracting Inc. is proud to support government initiatives, partnering with public agencies to build robust, reliable EV charging networks that contribute to national sustainability goals."
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
            "Genesis Contracting is committed to helping clients stay at the forefront of EV charging technology by offering expert upgrades and modifications. As the industry evolves, we ensure our clients' charging infrastructure remains efficient, reliable, and compatible with the latest innovations.",
            "Key aspects of upgrades and modifications include enhancing charging levels and power output to accommodate faster charging speeds, updating charging connectors to support new EV models and standards, expanding power supply capacity to meet the growing demand for charging points, upgrading electrical infrastructure to comply with the latest safety and efficiency guidelines, integrating cutting-edge communication and networking technologies, and incorporating the latest payment systems for improved user experience and convenience."
        ],
        buttonText: "Discuss Project Details",
        phone: "4194663262",
        maxHeight: "max-h-[1000px]"
    },
    {
        id: 'maintenance',
        title: 'Maintenance',
        paragraphs: [
            "Genesis ensures the safety, reliability, and continuous uptime of critical EV charging stations. A primary focus of this support is regular inspections and diagnostics, which serve to optimize charger performance and extend operational longevity.",
            "Key maintenance aspects include inspecting and maintaining charging levels and power output, examining and cleaning charging connectors for proper contact, ensuring the adequacy of power supply to charging stations, maintaining electrical infrastructure, including transformers, switchgear, and cabling, and regularly testing safety features, such as ground-fault protection, overcurrent protection, and electrical isolation."
        ],
        buttonText: "Learn More",
        phone: "4194663262",
        maxHeight: "max-h-[1000px]"
    }
];

// 3. Safety Slides Compliance Data
const evSafetySlides = [
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
        title: "NEC NFPA 70 Compliance",
        desc: "All electrical distribution grids, switchgear routing, and cabling strictly adhere to the National Electrical Code (NEC) guidelines.",
        highlight: "Electrical Codes"
    },
    {
        title: "UL Certified Equipment & Safety",
        desc: "We install charging hardware that meets rigorous UL standards, implementing ground-fault protection and active safety systems.",
        highlight: "Code Compliance"
    }
];

// 4. Matrix Industries Data
const evIndustries = [
    { name: "Commercial & Department Stores", icon: <Building2 className="w-5 h-5 text-red-700" /> },
    { name: "Fleet Logistics & Depot Yards", icon: <Truck className="w-5 h-5 text-red-700" /> },
    { name: "Retail Chains & Shopping Centers", icon: <Building2 className="w-5 h-5 text-red-700" /> },
    { name: "Public Transportation Hubs", icon: <Bus className="w-5 h-5 text-red-700" /> },
    { name: "Municipal & Government Offices", icon: <Building2 className="w-5 h-5 text-red-700" /> },
    { name: "Corporate Employee Parking", icon: <Layers className="w-5 h-5 text-red-700" /> },
    { name: "Automotive Dealership Networks", icon: <Layers className="w-5 h-5 text-red-700" /> },
    { name: "Warehouses & Fulfillment Centers", icon: <Warehouse className="w-5 h-5 text-red-700" /> },
    { name: "Emergency Service Stations", icon: <Building2 className="w-5 h-5 text-red-700" /> }
];

const EVPage = () => {
    // Scroll reset on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-white font-sans overflow-x-hidden">
            <PageBanner
                bgImage={evImg}
                title="Turnkey EV Infrastructure Delivery"
                subtitle="One Contractor for EV Station Construction, Installation, Upgrades & Maintenance"
                breadcrumbs={[
                    { name: 'Home', link: '/genesis-ui-2/' },
                    { name: 'Services', link: '/genesis-ui-2/services' },
                    { name: 'EV Charging' }
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
                title="EV Charging Infrastructure Capabilities"
                cardsData={evCardsData}
            />

            <Foldable
                subtitle="Deep Dive"
                title="Description of Services"
                servicesData={evServicesData}
            />

            <Safety
                subtitle="Rigorous Safety"
                title="Compliance & Safety Standards"
                safetySlides={evSafetySlides}
            />

            <Matrix
                subtitle="Target Sectors"
                title="Industry Matrix"
                industries={evIndustries}
            />

            <WhyGenesis />
            <CTASection />
        </div>
    );
};

export default EVPage;
