
import ServicesBanner from "../Components/ServicesPage/ServicesBanner";
// import ServiceSplitSection from "../Components/ServicesPage/ServiceSplitSection";
// import { hydrogenData } from "../Data/ServicesData";
import HydrogenService from "../Components/ServicesPage/HydrogenService";
import CNGService from "../Components/ServicesPage/CNGService";
import EVChargingService from "../Components/ServicesPage/EVChargingService";
import CivilService from "../Components/ServicesPage/CivilService";
import ElectricalService from "../Components/ServicesPage/ElectricalService";
import MaintenanceService from "../Components/ServicesPage/MaintenanceService";
import UpgradesModificationsService from "../Components/ServicesPage/UpgradesModificationsService";

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Services() {
    const location = useLocation();

    useEffect(() => {
        // 1. Check if there is a hash in the URL (e.g., #hydrogen)
        if (location.hash) {
            // 2. Remove the '#' to get the ID (e.g., 'hydrogen')
            const id = location.hash.replace('#', '');

            // 3. Find the element
            const element = document.getElementById(id);

            if (element) {
                // 4. Scroll to it with a tiny delay to ensure the page is fully loaded
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            // If no hash is present, scroll to the top of the page
            window.scrollTo(0, 0);
        }
    }, [location]);
    return (
        <>
            <ServicesBanner />
            {/* <ServiceSplitSection data={hydrogenData} /> */}
            <HydrogenService />
            <CNGService />
            <EVChargingService />
            <CivilService />
            <ElectricalService />
            <MaintenanceService />
            <UpgradesModificationsService />



        </>
    )
}
export default Services