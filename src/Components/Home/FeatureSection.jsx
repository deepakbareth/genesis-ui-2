import React, { useState, useEffect } from 'react';
import { Droplets, Fuel, Zap, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';

import hydroImg from '../../assets/Home/FeatureSection/f1.jpg';
import cngImg from '../../assets/Home/FeatureSection/f2.jpg';
import evImg from '../../assets/Home/FeatureSection/f3.jpg';
import maintImg from '../../assets/Home/FeatureSection/f4.jpg';

const servicesData = [
  {
    id: 's1',
    title: 'Hydrogen Fueling',
    shortDesc: 'System integration & safety',
    icon: <Droplets size={24} />,
    image: hydroImg,
    description: 'Complete installation and integration of hydrogen fueling systems with adherence to local and fire codes',
    features: ['Code Compliance', 'High-Pressure Systems', 'Turnkey Installation']
  },
  {
    id: 's2',
    title: 'CNG Systems',
    shortDesc: 'Compressed Natural Gas',
    icon: <Fuel size={24} />,
    image: cngImg,
    description: 'Expert installation, upgrade, and maintenance of CNG fueling systems with specialty and high-volume capabilities',
    features: ['Fleet Optimization', 'Custom Engineering', 'Scalable Design']
  },
  {
    id: 's3',
    title: 'EV Charging ',
    shortDesc: 'Commercial EV stations',
    icon: <Zap size={24} />,
    image: evImg,
    description: 'Expert installation and maintenance of EV charging stations for commercial, industrial, and governmental clients',
    features: ['DC Fast Charging', 'Grid Integration', 'Software Setup']
  },
  {
    id: 's4',
    title: 'System Maintenance',
    shortDesc: 'Ongoing support & testing',
    icon: <Wrench size={24} />,
    image: maintImg,
    description: 'Ongoing support, testing, and preventative maintenance to keep your alternative fuel systems running safely and efficiently year-round.',
    features: ['24/7 Emergency Support', 'Quarterly Inspections', 'Compliance Testing']
  }
];

const FeatureSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // FIXED: Separated the timer logic to prevent React state race conditions. 
  // It will now perfectly cycle through all 4 slides.
  useEffect(() => {
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        currentProgress = 0;
        setProgress(0);
        setActiveIndex((current) => (current === servicesData.length - 1 ? 0 : current + 1));
      }
    }, 50); // 50ms * 100 = 5 seconds total per slide

    return () => clearInterval(timer);
  }, [activeIndex]);

  // Handle manual click
  const handleSelect = (index) => {
    setActiveIndex(index);
    setProgress(0); // Reset progress when user interacts
  };

  const activeService = servicesData[activeIndex];

  return (
    <section className="py-12 md:py-12 bg-white overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-4 md:px-12">

        {/* Header */}
        <div className="mb-12 md:mb-10">
          <h2 className="text-sm font-bold tracking-widest text-red-600 uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Turnkey Solutions</h3>
        </div>

      <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center lg:items-stretch">

          {/* =========================================
              1. THE MENU (Left Side - Static List)
          ========================================= */}
          <div className="w-full lg:w-[40%] flex flex-col justify-between gap-4">
            {servicesData.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={service.id}
                  onClick={() => handleSelect(index)}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 border flex-1 ${isActive
                      ? 'bg-slate-50 border-red-600/30 shadow-lg'
                      : 'bg-white border-gray-100 hover:border-gray-300 hover:bg-slate-50'
                    }`}
                >
                  {/* The Progress Bar */}
                  {isActive && (
                    <div className="absolute top-0 left-0 h-[1.5px] bg-gray-200 w-full">
                      <div
                        className="h-full bg-red-600 transition-all duration-75 ease-linear"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  )}

                  <div className="p-5 xl:p-6 flex items-center gap-5 h-full">
                    {/* Icon */}
                    <div className={`p-4 rounded-xl transition-colors duration-300 shrink-0 ${isActive ? 'bg-red-600 text-white shadow-md' : 'bg-gray-100 text-gray-500 group-hover:text-red-600'
                      }`}>
                      {service.icon}
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h5 className={`font-bold text-lg xl:text-xl transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                        {service.title}
                      </h5>
                      <p className="text-sm text-gray-500 mt-1">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className={`shrink-0 transition-all duration-300 ${isActive ? 'text-red-600 opacity-100 translate-x-0' : 'text-gray-300 opacity-0 -translate-x-4'
                      }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* =========================================
              2. THE DISPLAY (Right Side - Large Image)
          ========================================= */}
          {/* FIXED: Changed lg:h-[700px] to lg:h-[540px] to perfectly align with the left menu height */}
          <div className="w-full lg:w-[60%] relative h-[500px] lg:h-[540px] rounded-3xl overflow-hidden shadow-xl bg-slate-900">

            {/* Image Crossfade */}
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform scale-105"
                />

                {/* Heavy gradient to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              </div>
            ))}

            {/* Fixed Content Area over the image */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20">

              <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight animate-in slide-in-from-bottom-4 fade-in duration-500" key={`title-${activeIndex}`}>
                {activeService.title}
              </h4>

              <p className="text-gray-200 text-base md:text-lg max-w-2xl leading-relaxed mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700" key={`desc-${activeIndex}`}>
                {activeService.description}
              </p>

              {/* Feature Bullets */}
              <div className="hidden md:flex flex-wrap gap-x-5 gap-y-3 mb-8 animate-in slide-in-from-bottom-8 fade-in duration-700" key={`feat-${activeIndex}`}>
                {activeService.features.map((feature, idx) => (
                  <span key={idx} className="flex items-center gap-2 text-sm font-semibold text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <CheckCircle2 size={16} className="text-red-600" />
                    {feature}
                  </span>
                ))}
              </div>

              <button className="flex items-center w-fit gap-1.5 sm:gap-2 bg-red-600 hover:bg-[#1b8a44] text-white px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full font-bold text-sm sm:text-base shadow-[0_0_20px_rgba(33,165,82,0.3)] transition-all hover:-translate-y-0.5 active:scale-95 animate-in slide-in-from-bottom-10 fade-in duration-700" >
                Explore {activeService.title}
                <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;