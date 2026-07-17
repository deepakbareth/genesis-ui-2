import React, { useEffect } from 'react';
import { Phone, Building2, Zap, Wrench, Layers, Truck, Bus, Warehouse } from 'lucide-react';
import PageBanner from '../Components/reusavleComp/PageBanner';
import ThreeGrid from '../Components/reusavleComp/ThreeGrid';
import Foldable from '../Components/reusavleComp/Foldable';
import Safety from '../Components/reusavleComp/Safety';
import Matrix from '../Components/reusavleComp/Matrix';
import WhyGenesis from '../Components/reusavleComp/WhyGenesis';
import CTASection from '../Components/reusavleComp/CTASection';

import hydrogenImg from '../assets/Hydrogen/hydrogen.jpg';

// 1. Three-Grid Capabilities Data
const hydrogenCardsData = [
    {
        title: "Construction",
        icon: <Building2 className="w-8 h-8 text-red-700" />,
        items: [
            "Ground-up Hydrogen Station Builds",
            "MEP & Structural Foundations",
            "Vent Stack & Gas System Piping",
            "Fiber Optic & Control Communications"
        ]
    },
    {
        title: "Upgrades",
        icon: <Zap className="w-8 h-8 text-red-700" />,
        items: [
            "Compressor additions or replacements",
            "Hydrogen dispenser upgrades",
            "Storage vessel capacity expansions"
        ]
    },
    {
        title: "Maintenance",
        icon: <Wrench className="w-8 h-8 text-red-700" />,
        items: [
            "Troubleshooting control panels & skids",
            "Repairing compression fittings & valves",
            "Replacing cryogenic pump heads"
        ]
    }
];

// 2. Foldable Accordions Data
const hydrogenServicesData = [
    {
        id: 'construction',
        title: 'Construction',
        paragraphs: [
            "We understand that ground-up hydrogen fueling station construction is not standard commercial work. It requires precision, safety, coordination, and experience with high-pressure gas infrastructure. We bring that expertise to every project, supporting the hydrogen economy alternative fueling station construction, installation, capacity upgrades and ongoing maintenance around the USA.",
            "Our team delivers turnkey completion across the full project lifecycle, managing the critical stages that move a hydrogen infrastructure project from planning and permitting to construction, MEP coordination, system integration, pressure testing, commissioning, and final closeout.",
            "Backed by years of experience installing 6,000 to 10,000 psi systems, We thoroughly understand the specialized systems that make high pressure hydrogen infrastructure work. We ensure system integrity by applying expert Swagelok fitting practices and installing high-pressure stainless steel tubing for compressors, dispensers, cryogenic equipment, controls, and ESD systems. That experience helps us coordinate installation, maintenance, and upgrade work around equipment from leading manufacturers such as PDC Machines, Ariel Corporation and more.",
            "For owners and hydrogen infrastructure developers, our value is clear: we reduce construction risk, simplify trade coordination, and help bring complex fueling assets online safely, efficiently, and with accountability. From ground-up station builds to capacity expansions and long-term maintenance, we provide the field leadership, certified technical execution, and project management discipline needed to keep alternative fuel projects moving. When reliability, safety, and schedule certainty matter, we are the construction partner built for the next generation of fueling infrastructure."
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
            "Genesis helps hydrogen fueling operators scale infrastructure without starting from scratch. As fleet demand grows, station owners need more capacity, faster throughput, and stronger system reliability from assets already in the ground. Genesis supports that growth through strategic hydrogen station upgrades, including added dispensers, compressors, storage vessels, high-pressure tubing, valves, controls, and system integration improvements.",
            "With deep field experience in high-pressure fueling environments, Genesis coordinates upgrade work around live operational needs, equipment vendors, safety requirements, and commissioning timelines. The result is a smarter path to expansion: greater fueling capacity, improved station performance, and reduced downtime without the disruption of a full rebuild. For hydrogen infrastructure providers ready to move from pilot deployment to commercial-scale operations, Genesis delivers the construction expertise to make scaling practical, controlled, and built for long-term growth."
        ],
        buttonText: "Discuss Project Details",
        phone: "4194663262",
        maxHeight: "max-h-[1000px]"
    },
    {
        id: 'maintenance',
        title: 'Maintenance',
        paragraphs: [
            "Genesis ensures the safety, reliability, and continuous uptime of critical hydrogen fueling infrastructure. Operating at the intersection of high-pressure logistics and cryogenic engineering, the company provides station owners with the specialized maintenance, repair, and replacement services required to protect capital investments and eliminate operational bottlenecks.",
            "Because high-pressure hydrogen environments leave zero margin for error, minor failures quickly cascade into costly downtime. Genesis stabilizes station performance by troubleshooting control panels and skids, repairing compression fittings, airlines, valves, VJ line seals, hydrogen pad lights, and cryogenic line flashing, while replacing high-wear components like cryogenic pump heads.",
            "With deep field experience spanning high-pressure tubing, fueling skids, dispensers, and safety-critical controls, Genesis restores system integrity and extends equipment life, giving operators the certainty they need to scale with confidence."
        ],
        buttonText: "Learn More",
        phone: "4194663262",
        maxHeight: "max-h-[1000px]"
    }
];

// 3. Safety Slides Compliance Data
const hydrogenSafetySlides = [
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
        title: "Certified Swagelok Technicians",
        desc: "Our technicians hold active certifications in Swagelok high-pressure tube fitting and mechanical gas assemblies to ensure leak-free operations.",
        highlight: "Certified Technicians"
    },
    {
        title: "NFPA & ASME Code Integration",
        desc: "All mechanical assemblies, installations, and upgrades strictly comply with NFPA 2 (Hydrogen Technologies Code) and ASME piping codes.",
        highlight: "Code Compliance"
    }
];

// 4. Matrix Industries Data
const hydrogenIndustries = [
    { name: "Hydrogen Infrastructure Integrators", icon: <Building2 className="w-5 h-5 text-red-700" /> },
    { name: "Public Hydrogen Fueling Stations", icon: <Building2 className="w-5 h-5 text-red-700" /> },
    { name: "Freight & Heavy-Duty Trucking", icon: <Truck className="w-5 h-5 text-red-700" /> },
    { name: "Public Transit Bus Operators", icon: <Bus className="w-5 h-5 text-red-700" /> },
    { name: "Municipal & Government Fleets", icon: <Building2 className="w-5 h-5 text-red-700" /> },
    { name: "Fleet Fueling & Refueling Facilities", icon: <Layers className="w-5 h-5 text-red-700" /> },
    { name: "Waste Hauling Fleet Yards", icon: <Truck className="w-5 h-5 text-red-700" /> },
    { name: "Warehousing & Logistics (Material Handling)", icon: <Warehouse className="w-5 h-5 text-red-700" /> },
    { name: "Automotive Manufacturing Plants", icon: <Building2 className="w-5 h-5 text-red-700" /> }
];

const HydrogenPage = () => {
    // Scroll reset on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-white font-sans overflow-x-hidden">
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

                </div>
            </PageBanner>

            <ThreeGrid
                subtitle="Services Overview"
                title="Hydrogen Station Infrastructure Capabilities"
                cardsData={hydrogenCardsData}
            />

            <Foldable
                subtitle="Deep Dive"
                title="Description of Services"
                servicesData={hydrogenServicesData}
            />

            <Safety
                subtitle="Rigorous Safety"
                title="Compliance & Safety Standards"
                safetySlides={hydrogenSafetySlides}
            />

            <Matrix
                subtitle="Target Sectors"
                title="Industry Matrix"
                industries={hydrogenIndustries}
            />

            <WhyGenesis />
            <CTASection />
        </div>
    );
};

export default HydrogenPage;
