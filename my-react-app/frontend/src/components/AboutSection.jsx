import React from "react";
import { Link } from "react-router-dom"; // 1. ІМПОРТУЙ Link
import "../styles/about.css";

import aboutImg1 from "../assets/about-2.jpg";
import aboutImg2 from "../assets/about-1.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-images">
          <img src={aboutImg1} alt="Workout" className="about-img-1" />
          <img src={aboutImg2} alt="Training" className="about-img-2" />
        </div>
        <div className="about-content">
          <h2>Meet your new body</h2>
          <p>
            Our mission is to help you become stronger, healthier, and more
            confident. At Goodlyfe Gyms, we provide expert guidance and modern
            equipment to support your journey.
          </p>

          {/* 2. ЗАМІНИ <button> НА <Link> */}
          <Link to="/classes" className="about-btn">
            View Our Classes
          </Link>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;