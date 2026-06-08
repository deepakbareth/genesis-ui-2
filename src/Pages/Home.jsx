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
// import Footer from "../Components/Layout/Footer";

// import Navbar from "../Components/Layout/Navbar";
import homeBannerVideo from "../assets/banner2.mp4"

function Home() {
    return (
        <div>
            {/* <Navbar /> */}
            <Banner videoSrc={homeBannerVideo} />
            {/* <ProjectInfoBar /> */}
            <FeatureSection />

            <ImpactSection />
            <WorkforceSection />
            <TimelineSection />
            <MidBanner />
            <ExecutiveCarousel />
            <ImageGallery />
            {/* <Footer /> */}

        </div>
    )
}
export default Home