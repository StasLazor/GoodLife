import React from "react";
import "./social.css";

import fbIcon from "../../assets/icon-facebook.png";
import ytIcon from "../../assets/icon-youtube.png";
import igIcon from "../../assets/icon-instagram.png";

const SocialSection = () => {
  return (
    <section id="social" className="social">
      <h2>Social</h2>
      <div className="social-links">
        <a
          href="#"
          className="social-link"
          aria-label="Facebook"
        >
          <img src={fbIcon} alt="Facebook" />
        </a>
        <a
          href="#"
          className="social-link"
          aria-label="YouTube"
        >
          <img src={ytIcon} alt="YouTube" />
        </a>
        <a
          href="#"
          className="social-link"
          aria-label="Instagram"
        >
          <img src={igIcon} alt="Instagram" />
        </a>
      </div>
    </section>
  );
};

export default SocialSection;