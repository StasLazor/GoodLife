import React from "react";
import Header from "../components/Header/Header.jsx";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import AboutSection from "../components/AboutSection/AboutSection.jsx";
import MotivationSection from "../components/MotivationSection/MotivationSection.jsx";
import FacilitiesSection from "../components/FacilitiesSection/FacilitiesSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection.jsx";
import AppPromoSection from "../components/AppPromoSection/AppPromoSection.jsx";
import SocialSection from "../components/SocialSection/SocialSection.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <MotivationSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <AppPromoSection />
      <SocialSection />
      <Footer />
    </>
  );
};

export default Home;