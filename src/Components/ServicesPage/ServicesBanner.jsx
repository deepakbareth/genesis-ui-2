import React from 'react';
import PageBanner from '../reusavleComp/PageBanner';
import bannerImg from '../../assets/Home/Gallery/g1.jpg';

function ServicesBanner() {
    return (
        <PageBanner 
            bgImage={bannerImg}
            title="Services"
            subtitle="Delivering innovative alternative fuel solutions, electrical services, civil construction, and infrastructure development."
            navLinks={[
                { name: "Hydrogen", link: "#hydrogen" },
                { name: "EV Charging", link: "#ev-charging" },
                { name: "CNG", link: "#cng" },
                { name: "Civil", link: "#civil" },
                { name: "Electrical", link: "#electrical" },
                { name: "Maintenance", link: "#maintenance" },
                { name: "Upgrades", link: "#upgrades" }
            ]}
        />
    );
}

export default ServicesBanner;