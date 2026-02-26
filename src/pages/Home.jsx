import { useEffect, useState } from "react";
import { getMarketingSolutions } from "../services/baseService";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MarketingSolutions from "../layouts/MarketingSolutions";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../layouts/PortfolioSection";
import WorkFlow from "../components/WorkFlow";
import CoreServices from "../components/CoreServices";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import FeaturedWorkSection from "../components/FeaturedWorkSection";
import ReviewSection from "../components/ReviewSection";
import Footer from "../components/Footer";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMarketingSolutions()
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="bg-black  ">
        <Navbar />
        <Hero />
        <MarketingSolutions />
        <AboutSection />
        <PortfolioSection />
        <WorkFlow />
        <CoreServices />
        <ServicesSection />
        <TeamSection />
        <FeaturedWorkSection />
        <ReviewSection />
        <Footer />
    </div>
  );
}

export default Home;