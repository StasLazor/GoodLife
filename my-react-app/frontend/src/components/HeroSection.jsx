import React from "react";
import "../styles/hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to <span>Goodlyfe</span> Gyms</h1>
        <p>Push yourself to the next level — your transformation starts here.</p>
        <button className="hero-btn">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
