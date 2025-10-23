import React from "react";
import "../styles/apppromo.css";

import phoneImg1 from "../assets/app-phone-1.png";
import phoneImg2 from "../assets/app-phone-2.png";
import googlePlayImg from "../assets/app-google-play.png";
import appStoreImg from "../assets/app-app-store.png";

const AppPromoSection = () => {
  return (
    <section id="app" className="app-promo">
      <div className="app-promo-container">
        <div className="app-promo-content">
          <h2>Don't forget our app</h2>
          <p>
           Unlock your full potential with our exclusive app. Get personalized workout plans tailored to your specific goals, 
           whether you're focused on weight loss, muscle gain, or functional fitness. Dive into our library of nutrition tips, 
           healthy recipes, and track your meals with our integrated food diary. You can easily browse, book, and manage your spot in all 
           our group classes—right from your phone. Plus, you'll get reminders so you never miss a session. Track your progress, celebrate 
           your milestones, and become part of the Goodlyfe community. Download the app today and take complete 
           control of your fitness journey.
          </p>
          <span>Download now:</span>
          <div className="app-store-buttons">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={googlePlayImg} alt="Get it on Google Play" />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={appStoreImg} alt="Download on the App Store" />
            </a>
          </div>
        </div>

        <div className="app-promo-images">
          <img src={phoneImg1} alt="App mockup 1" className="phone-1" />
          <img src={phoneImg2} alt="App mockup 2" className="phone-2" />
        </div>
      </div>
    </section>
  );
};

export default AppPromoSection;