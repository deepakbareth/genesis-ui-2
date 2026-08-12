import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Foldable = ({ subtitle, title, servicesData }) => {
    const [expandedAccordion, setExpandedAccordion] = useState(servicesData[0]?.id || null);

    return (
        <section className="relative py-20 md:py-28 bg-white scroll-mt-20">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="max-w-3xl mb-16">
                    <span className="text-[12px] md:text-[13px] text-gray-500 tracking-[0.25em] uppercase font-bold font-['Necto_Mono',monospace] block mb-3">
                        {subtitle}
                    </span>
                    <h2 className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[36px] md:text-[48px] font-normal text-red-700 leading-[1.1] tracking-tight">
                        {title}
                    </h2>
                    <div className="w-12 h-1 bg-red-700 mt-5"></div>
                </div>

                <div className="flex flex-col gap-6">
                    {servicesData.map((service) => {
                        const isExpanded = expandedAccordion === service.id;
                        return (
                            <div key={service.id} className="border border-gray-200 rounded-sm overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setExpandedAccordion(isExpanded ? null : service.id)}
                                    className="w-full bg-gray-50/70 hover:bg-gray-50 px-6 py-5 md:py-6 flex items-center justify-between text-left transition-colors cursor-pointer"
                                >
                                    <span className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] text-[22px] md:text-[28px] font-normal text-[#2A3A4A] flex items-center gap-3">
                                        <span className="text-red-700 font-bold">—</span> {service.title}
                                    </span>
                                    <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-red-700' : ''}`} />
                                </button>
                                <div 
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                        isExpanded ? service.maxHeight : 'max-h-0'
                                    }`}
                                >
                                    <div className="p-6 md:p-10 border-t border-gray-100 bg-white space-y-6 text-[15px] md:text-[18px] text-gray-600 leading-relaxed font-sans">
                                        {service.paragraphs.map((item, idx) => {
                                            if (typeof item === 'string') {
                                                return <p key={idx}>{item}</p>;
                                            }
                                            if (item && typeof item === 'object') {
                                                switch (item.type) {
                                                    case 'heading':
                                                        return (
                                                            <h4 key={idx} className="font-['Apfel_Grotezk',ui-sans-serif,system-ui,sans-serif] text-[22px] md:text-[28px] font-normal text-[#2A3A4A] mt-6 first:mt-0 mb-3">
                                                                {item.text}
                                                            </h4>
                                                        );
                                                    case 'subheading':
                                                        return (
                                                            <h5 key={idx} className="font-semibold text-[16px] md:text-[18px] text-[#2A3A4A] mt-4 mb-2">
                                                                {item.text}
                                                            </h5>
                                                        );
                                                    case 'goal':
                                                        return (
                                                            <p key={idx} className="text-[15px] md:text-[18px] text-[#2A3A4A]">
                                                                <strong className="font-bold">{item.bold}</strong>{' '}
                                                                <span className="italic text-gray-500">{item.italic}</span>
                                                            </p>
                                                        );
                                                    case 'list':
                                                        return (
                                                            <ul key={idx} className="list-disc pl-6 space-y-3 my-4">
                                                                {item.items.map((listItem, lIdx) => {
                                                                    if (typeof listItem === 'object') {
                                                                        return (
                                                                            <li key={lIdx} className="text-[15px] md:text-[18px] text-gray-600 leading-relaxed">
                                                                                <strong className="text-[#2A3A4A] font-semibold">{listItem.bold}</strong> {listItem.text}
                                                                            </li>
                                                                        );
                                                                    }
                                                                    return (
                                                                        <li key={lIdx} className="text-[15px] md:text-[18px] text-gray-600 leading-relaxed">
                                                                            {listItem}
                                                                        </li>
                                                                    );
                                                                })}
                                                            </ul>
                                                        );
                                                    case 'table':
                                                        return (
                                                            <div key={idx} className="overflow-x-auto my-6 border border-gray-200 rounded-sm">
                                                                <table className="w-full min-w-[650px] text-left border-collapse">
                                                                    <thead>
                                                                        <tr className="bg-gray-50 border-b border-gray-200">
                                                                            {item.headers.map((header, hIdx) => (
                                                                                <th key={hIdx} className="p-4 font-semibold text-[#2A3A4A] text-[15px] md:text-[17px] w-1/2">
                                                                                    {header}
                                                                                </th>
                                                                            ))}
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {item.rows.map((row, rIdx) => (
                                                                            <tr key={rIdx} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/40">
                                                                                {row.map((cell, cIdx) => (
                                                                                    <td key={cIdx} className="p-4 text-[14px] md:text-[16px] text-gray-600 leading-relaxed align-top">
                                                                                        {typeof cell === 'object' ? (
                                                                                            <span>
                                                                                                <strong className="text-[#2A3A4A] font-semibold">{cell.bold}</strong> {cell.text}
                                                                                            </span>
                                                                                        ) : (
                                                                                            cell
                                                                                        )}
                                                                                    </td>
                                                                                ))}
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        );
                                                    default:
                                                        return null;
                                                }
                                            }
                                            return null;
                                        })}

                                        <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
                                            {service.quote && (
                                                <div className="italic text-[#2A3A4A] font-semibold text-[16px] md:text-[18px] mb-1">
                                                    {service.quote}
                                                </div>
                                            )}
                                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                                {service.ctaPrompt ? (
                                                    <div className="font-semibold text-[15px] md:text-[18px] text-[#2C3E50]">
                                                        {service.ctaPrompt}
                                                    </div>
                                                ) : (
                                                    <div />
                                                )}
                                                <a 
                                                    href={`tel:${service.phone}`} 
                                                    className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-sm font-semibold tracking-wider font-['Necto_Mono',monospace] text-[14px] uppercase flex items-center gap-2 shrink-0 cursor-pointer"
                                                >
                                                    <span>{service.buttonText}</span>
                                                    <ArrowRight className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Foldable;
