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
            {
                type: 'heading',
                text: 'High-Pressure CNG Station Construction Built for Zero-Defect Execution'
            },
            "High-pressure gas infrastructure demands absolute mechanical and electrical precision—not a web of uncoordinated subcontractors. Genesis Contracting provides end-to-end, self-performed construction for CNG stations, managing civil ground prep, stainless steel pressure piping, and utility-scale switchgear with experienced in-house specialists.",
            "Whether you are developing a public fast-fill site or a private fleet time-fill depot, we build reliable natural gas infrastructure from ground prep to final startup. We seamlessly install, integrate, and commission equipment from top-tier industry manufacturers, including ANGI Energy Systems, Clean Energy, and Chart Industries. Our field crews handle every component: diaphragm compressors, high-pressure cascade storage vessels, gas chillers, PLC control panels, and dispensers.",
            {
                type: 'heading',
                text: 'End-to-End Lifecycle Execution'
            },
            "Our teams manage the entire project continuum, eliminating performance gaps between design, civil work, equipment installation, and commissioning:",
            {
                type: 'list',
                items: [
                    {
                        bold: "Planning, Permitting & Utility Coordination:",
                        text: "Fast-tracked AHJ approvals, local gas utility tie-in coordination, and full compliance with NFPA 52 codes."
                    },
                    {
                        bold: "Civil & Structural:",
                        text: "Heavy-duty, reinforced concrete pads engineered specifically for high-vibration compressor skids, cascade storage foundations, and canopy placement."
                    },
                    {
                        bold: "MEP & Mechanical:",
                        text: "Precision installation of gas dryers, chillers, priority control panels, and high-pressure 316/316L stainless steel tubing."
                    },
                    {
                        bold: "Electrical, Controls & ESD Systems:",
                        text: "Class I, Div 2 hazardous location wiring, Motor Control Centers (MCCs), PLC, and certified Emergency Shutdown (ESD) interlocks."
                    },
                    {
                        bold: "Testing & Commissioning:",
                        text: "Pneumatic/hydrostatic pressure testing, helium leak checks, control sequence verification, and rapid final closeout."
                    }
                ]
            },
            {
                type: 'heading',
                text: 'High-Pressure Technical Expertise'
            },
            "With high-pressure gas infrastructure, system integrity is non-negotiable. Our field crews bring the specialized craft discipline required for heavy-duty commercial and municipal fleet operations:",
            {
                type: 'list',
                items: [
                    {
                        bold: "3,600 PSI Infrastructure Mastery:",
                        text: "Hands-on experience with high-pressure reciprocating compressors, multi-bank cascade storage systems, and fast-fill dispensers."
                    },
                    {
                        bold: "Precision Assembly:",
                        text: "Expert Swagelok, compression, and cone-and-thread fitting practices engineered to withstand continuous vibration and thermal cycling without leaks."
                    },
                    {
                        bold: "OEM Integration:",
                        text: "Seamless installation, retrofit, and service work across leading equipment manufacturers, including ANGI Energy Systems, Ariel Corporation, Bauer Compressors, and IMW."
                    }
                ]
            },
            {
                type: 'heading',
                text: 'The Advantage for Owners & Fleet Operators'
            },
            {
                type: 'goal',
                bold: "We reduce construction risk, simplify multi-trade coordination, and deliver total schedule certainty.",
                italic: ""
            },
            "Whether you are building a public fast-fill retail station, constructing a dedicated time-fill depot for transit fleets, or expanding existing compressor capacity, we provide the field leadership, certified execution, and project discipline your infrastructure demands."
        ],
        quote: "— James Gordon, CFO",
        ctaPrompt: "👉 Let’s discuss your upcoming CNG station build or expansion project.",
        buttonText: "Discuss Project Details",
        phone: "4194663262",
        maxHeight: "max-h-[3000px]"
    },
    {
        id: 'upgrades',
        title: 'Upgrades',
        paragraphs: [
            {
                type: 'heading',
                text: 'Scale capacity and throughput to support growing alternative fuel fleets'
            },
            {
                type: 'goal',
                bold: "Goal: Scale throughput and eliminate fleet bottlenecks without halting daily fuel delivery.",
                italic: ""
            },
            "When growing fleet schedules outpace legacy station capacity, adding throughput requires surgical execution. At Genesis Contracting, we execute phased retrofits and site expansions that keep your vehicles fueling continuously while construction is underway.",
            {
                type: 'heading',
                text: 'How We Expand Your Fueling Capabilities:'
            },
            {
                type: 'list',
                items: [
                    {
                        bold: "Compression & Storage:",
                        text: "High-flow compressor additions and multi-bank cascade storage expansions."
                    },
                    {
                        bold: "Fueling Velocity:",
                        text: "Priority panel retrofits, pre-cooling gas chillers, and additional fast-fill dispensers."
                    },
                    {
                        bold: "System Intelligence:",
                        text: "PLC panel upgrades for optimized gas management."
                    }
                ]
            },
            "Because our own certified technicians tackle the sitework, high-pressure gas lines, and electrical connections from start to finish, you get a smoother build with zero handoff delays."
        ],
        ctaPrompt: "👉 Ready to expand your fueling capacity?",
        buttonText: "Schedule an Upgrade Assessment",
        phone: "4194663262",
        maxHeight: "max-h-[1500px]"
    },
    {
        id: 'maintenance',
        title: 'Maintenance',
        paragraphs: [
            {
                type: 'heading',
                text: 'Preventive Maintenance & Rapid Field Support'
            },
            {
                type: 'goal',
                bold: "Preventive Maintenance & Rapid Field Support",
                italic: "Unplanned downtime is preventable. We keep your high-pressure CNG assets operating at peak performance."
            },
            "A tripped skid control panel or a weeping compression fitting can ground your fleet in minutes. Genesis Contracting delivers structured maintenance programs and mobile field support designed to troubleshoot complex skids and protect your equipment investment.",
            {
                type: 'table',
                headers: ["Operational Risk", "The Genesis CNG Solution"],
                rows: [
                    [
                        {
                            bold: "Control Panel Faults & System Trips:",
                            text: "Panel error codes, logic faults, or sensor failures unexpectedly shutting down compression skids."
                        },
                        {
                            bold: "Skid & Panel Diagnostics:",
                            text: "Expert troubleshooting for PLC control panels, and skid instrumentation to clear fault codes and prevent unexpected system trips."
                        }
                    ],
                    [
                        {
                            bold: "Piping & Valve Leaks:",
                            text: "Worn compression fittings, leaking pneumatic airlines, or weeping safety relief valves (PRVs) causing pressure drops."
                        },
                        {
                            bold: "Mechanical & Valve Servicing:",
                            text: "Routine inspection and rebuilds for compression fittings, pneumatic airlines, check valves, and high-pressure safety relief valves (PRVs)."
                        }
                    ],
                    [
                        {
                            bold: "Unbudgeted Emergency Outages:",
                            text: "Sudden failure of high-wear components like valve seals or pneumatic actuators triggering costly site shutdowns."
                        },
                        {
                            bold: "Targeted Component Replacement:",
                            text: "Proactive swap-outs of high-wear items—seals, valve cartridges, and pneumatic actuators—before they trigger emergency shutdowns."
                        }
                    ]
                ]
            },
            "By replacing single-trade subcontractors with one fully certified, single-source partner, you eliminate trade gaps and keep site maintenance costs predictable."
        ],
        ctaPrompt: "👉 Eliminate station downtime risk.",
        buttonText: "Request a Custom Maintenance Proposal",
        phone: "4194663262",
        maxHeight: "max-h-[2000px]"
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
