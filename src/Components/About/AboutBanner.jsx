import React from 'react';
import PageBanner from '../reusavleComp/PageBanner';
import bannerImg from '../../assets/Home/Gallery/g1.jpg';

const AboutBanner = () => {
    return (
        <PageBanner 
            bgImage={bannerImg}
            title="Who We Are"
            subtitle="Building high-performance fueling infrastructure and establishing trusting, long-term relationships across the United States since 1998."
            breadcrumbs={[
                { name: "Home", link: "/genesis-ui-2/" },
                { name: "About Us" }
            ]}
        />
    );
};

export default AboutBanner;
