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
                { name: "Hydrogen", link: "/genesis-ui-2/services/hydrogen" },
                { name: "EV Charging", link: "/genesis-ui-2/services/ev" },
                { name: "CNG", link: "/genesis-ui-2/services/cng" },
                { name: "Civil", link: "#civil" },
                { name: "Electrical", link: "#electrical" },
                { name: "Maintenance", link: "#maintenance" },
                { name: "Upgrades", link: "#upgrades" }
            ]}
        />
    );
}

export default ServicesBanner;