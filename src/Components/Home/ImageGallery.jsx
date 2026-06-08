import React from 'react';
import g1 from '../../assets/Home/Gallery/g1.jpg'
import g2 from '../../assets/Home/Gallery/g2.jpg'
import g3 from '../../assets/Home/Gallery/g3.jpg'
import g4 from '../../assets/Home/Gallery/g4.jpg'
import g5 from '../../assets/Home/Gallery/g5.jpg'
import g6 from '../../assets/Home/Gallery/g6.jpg'
import g7 from '../../assets/Home/Gallery/g7.jpg'
import g8 from '../../assets/Home/Gallery/g8.jpg'
import g9 from '../../assets/Home/Gallery/g9.jpg'
import g10 from '../../assets/Home/Gallery/g10.jpg'

// 1. Data Object for the Gallery
// The 'gridClass' dictates exactly how much space each image takes up in the grid.
const galleryData = [
    {
        id: 1,
        src: g1,
        alt: "Aerial view of large circular infrastructure foundation",
        gridClass: "col-span-2 row-span-2" // Top Left Large Image
    },
    {
        id: 2,
        src: g2,
        alt: "Cooling tower against blue sky",
        gridClass: "col-span-1 row-span-1"
    },
    {
        id: 3,
        src: g3,
        alt: "Engineering team standing on construction site",
        gridClass: "col-span-1 row-span-1"
    },
    {
        id: 4,
        src: g4,
        alt: "Welder working on industrial piping",
        gridClass: "col-span-1 row-span-1"
    },
    {
        id: 5,
        src: g5,
        alt: "Large industrial turbine generator",
        gridClass: "col-span-1 row-span-1"
    },
    {
        id: 6,
        src: g6,
        alt: "Workers installing roof decking",
        gridClass: "col-span-1 row-span-1"
    },
    {
        id: 7,
        src: g7,
        alt: "Looking down into cylindrical concrete structure",
        gridClass: "col-span-1 row-span-1"
    },
    {
        id: 8,
        src: g8,
        alt: "Aerial view of twin cooling towers",
        gridClass: "col-span-2 row-span-2" // Bottom Right Large Image
    },
    {
        id: 9,
        src: g9,
        alt: "Engineers reviewing blueprints inside",
        gridClass: "col-span-1 row-span-1"
    },
    {
        id: 10,
        src: g10,
        alt: "Crane lowering heavy equipment into place",
        gridClass: "col-span-1 row-span-1"
    }
];

const ImageGallery = () => {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
                
                {/* 
                  The Grid Container
                  - mobile: 2 columns, rows are 150px high
                  - tablet/desktop: 4 columns, rows are 220px high 
                */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 auto-rows-[150px] md:auto-rows-[220px]">
                    
                    {galleryData.map((image) => (
                        <div 
                            key={image.id} 
                            // We dynamically apply the grid-span classes from our data object
                            // and add a subtle premium hover effect
                            className={`w-full h-full rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group ${image.gridClass}`}
                        >
                            <img 
                                src={image.src} 
                                alt={image.alt}
                                // The image scales up slightly on hover while staying inside its rounded box
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default ImageGallery;