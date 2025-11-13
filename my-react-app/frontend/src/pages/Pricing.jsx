import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "../styles/pricing.css";

const Pricing = () => {
  return (
    <>
      <Header />

      <section className="pricing-hero">
        <div className="pricing-hero-content">
          <h1>Choose <span>Your Plan</span></h1>
          <p>
            Electric various versions have evolved over the years, sometimes by
            accident, sometimes on purpose.
          </p>
        </div>
      </section>

      <section className="pricing-table-section">
        <div className="pricing-table-container">
          <div className="pricing-card">
            <h3>Basic</h3>
            <p>For individuals getting started on their fitness journey</p>
            <div className="price">
              <sup>$</sup>29 <span>/month</span>
            </div>
            <a href="#" className="pricing-btn basic-btn">
              Get Started
            </a>
            <ul className="features-list">
              <li>Access to gym</li>
              <li>Standard locker room access</li>
              <li>Basic workout plan</li>
              <li>Towel Refreshing</li>
              <li>Nutrition</li>
              <li>24/7 gym access</li>
            </ul>
          </div>

          <div className="pricing-card premium">
            <span className="premium-tag">MOST POPULAR</span>
            <h3>Premium</h3>
            <p>For individuals seeking advanced training & amenities</p>
            <div className="price">
              <sup>$</sup>59 <span>/month</span>
            </div>
            <a href="#" className="pricing-btn premium-btn">
              Get Started
            </a>
            <ul className="features-list">
              <li>Access to gym</li>
              <li>Standard locker room access</li>
              <li>Towel Refreshing</li>
              <li>Personal training (4 session per month)</li>
              <li>Towel Refreshing</li>
              <li>Nutrition (Weekly)</li>
              <li>24/7 gym access</li>
            </ul>
          </div>

          <div className="pricing-card">
            <h3>Elite</h3>
            <p>For individuals seeking all-inclusive amenities</p>
            <div className="price">
              <sup>$</sup>99 <span>/month</span>
            </div>
            <a href="#" className="pricing-btn elite-btn">
              Get Started
            </a>
            <ul className="features-list">
              <li>Access to gym</li>
              <li>Standard locker room access</li>
              <li>Towel Refreshing</li>
              <li>Personal training (Weekly)</li>
              <li>Nutrition (Weekly)</li>
              <li>24/7 gym access</li>
            </ul>
          </div>
        </div>
        <p className="pricing-footer-text">
          All memberships include free orientation session, and flexible
          cancellations. Looking for corporate or family plans?{" "}
          <a href="#">Contact us</a>.
        </p>
      </section>

      <section className="why-choose-section">
        <h2>
          Why Choose <span>Goodlyfe?</span>
        </h2>
        <div className="why-choose-container">
          <div className="why-card">
            <div className="why-icon">50+</div>
            <h4>Expert Trainers</h4>
            <p>We provide the best expert dedicated to your success.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">100+</div>
            <h4>Weekly Classes</h4>
            <p>Fitness classes to fit your lifestyle.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">24/7</div>
            <h4>Always Open</h4>
            <p>Workout on your schedule, our clubs never close.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Join thousands of members who have transformed their lives at Goodlyfe.
          Try us risk-free for 7 days.
        </p>
        <a href="#" className="cta-btn">
          Join Now Free!
        </a>
      </section>

      <Footer />
    </>
  );
};

export default Pricing;