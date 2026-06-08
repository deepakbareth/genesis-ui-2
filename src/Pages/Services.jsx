import Banner from "../Components/Home/Banner";
import ExecutiveCarousel from "../Components/Home/ExecutiveCarousel";
import FeatureSection from "../Components/Home/FeatureSection";
import ImageGallery from "../Components/Home/ImageGallery";
import ImpactSection from "../Components/Home/ImpactSection/ImpactSection";
import LeadershipImpact from "../Components/Home/LeadershipImpact";
import MidBanner from "../Components/Home/MidBanner";
import ProjectInfoBar from "../Components/Home/ProjectInfoBar";
import TimelineSection from "../Components/Home/TimelineSection";
import WorkforceSection from "../Components/Home/WorkforceSection";
import Footer from "../Components/Layout/Footer";

import Navbar from "../Components/Layout/Navbar";
import homeBannerVideo from "../assets/banner2.mp4"
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

function Services() {
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