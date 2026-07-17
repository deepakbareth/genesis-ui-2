import React from 'react';
import { 
    Layers, 
    Building2, 
    Truck, 
    Bus, 
    Warehouse 
} from 'lucide-react';

const industries = [
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

const EVMatrix = () => {
    return (
        <section className="relative py-20 bg-gray-50">
            <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] bg-[size:30px_30px] pointer-events-none"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[12px] md:text-[13px] text-gray-500 tracking-[0.25em] uppercase font-bold font-['Necto_Mono',monospace] block mb-3">
                        Target Sectors
                    </span>
                    <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[48px] font-normal text-[#2A3A4A] leading-[1.1] tracking-tight">
                        Industry Matrix
                    </h2>
                    <div className="w-12 h-1 bg-red-700 mx-auto mt-5"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, i) => (
                        <div 
                            key={i}
                            className="bg-white border border-gray-200/60 p-6 rounded-sm shadow-sm flex items-center gap-4 hover:border-red-700/40 hover:shadow-md transition-all duration-300"
                        >
                            <div className="p-2.5 rounded bg-red-50 text-red-700 shrink-0">
                                {industry.icon}
                            </div>
                            <span className="font-sans text-[15px] md:text-[17px] font-semibold text-[#2A3A4A] leading-tight">
                                {industry.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EVMatrix;
