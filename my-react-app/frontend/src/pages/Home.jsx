import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import MotivationSection from "../components/MotivationSection";
import FacilitiesSection from "../components/FacilitiesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import AppPromoSection from "../components/AppPromoSection";
import SocialSection from "../components/SocialSection";
import Footer from "../components/Footer";
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