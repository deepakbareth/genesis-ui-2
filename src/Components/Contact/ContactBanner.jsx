import React from 'react';
import PageBanner from '../reusavleComp/PageBanner';
import bannerImg from '../../assets/Home/Gallery/g1.jpg';

const ContactBanner = () => {
    return (
        <PageBanner 
            bgImage={bannerImg}
            title="Contact Us"
            subtitle="Get in touch with our team of alternative fueling system experts to discuss your project needs."
            breadcrumbs={[
                { name: "Home", link: "/genesis-ui-2/" },
                { name: "Contact" }
            ]}
        />
    );
};

export default ContactBanner;
