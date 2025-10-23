import React from "react";
import "../styles/footer.css";

import igIcon from "../assets/icon-instagram.png";
import twIcon from "../assets/icon-twitter.png";
import ytIcon from "../assets/icon-youtube.png";
import emailIcon from "../assets/icon-email.png";
import phoneIcon from "../assets/icon-phone.png";
import locationIcon from "../assets/icon-location.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-column">
          <h3 className="footer-logo">Goodlyfe</h3>
          <p>
            Your journey to a stronger, healthier life starts here. 
            We provide the expert guidance and premium equipment you 
            need to succeed and feel your best.
          </p>
          <div className="footer-socials">
            <a href="#"><img src={igIcon} alt="Instagram" /></a>
            <a href="#"><img src={twIcon} alt="Twitter" /></a>
            <a href="#"><img src={ytIcon} alt="YouTube" /></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Classes</a></li>
            <li><a href="#">Timetable</a></li>
            <li><a href="#">Clubs</a></li>
            <li><a href="#">Nutrition</a></li>
            <li><a href="#">Free Trial</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Guides</h4>
          <ul>
            <li><a href="#">Weight Loss</a></li>
            <li><a href="#">Strength Gain</a></li>
            <li><a href="#">Crossfit</a></li>
            <li><a href="#">Washboard Abs</a></li>
            <li><a href="#">Dieting</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Reach us</h4>
          <ul className="footer-contact">
            <li>
              <img src={emailIcon} alt="Email" />
              <span>admin@goodlyfe.co</span>
            </li>
            <li>
              <img src={phoneIcon} alt="Phone" />
              <span>+88 98765 43210</span>
            </li>
            <li>
              <img src={locationIcon} alt="Location" />
              <span>90210 Beverly Hills, California USA</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-sub">
        <p>© 2020 GoodLyfe. All rights reserved</p>
        <div className="footer-sub-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Sitemap</a>
          <a href="#">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;