import React, { useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">Goodlyfe Gyms</div>

      <nav className={isMobileMenuOpen ? "nav nav-open" : "nav"}>
        <button
          className="nav-close-btn"
          onClick={() => setMobileMenuOpen(false)}
        >
          &times;
        </button>

        <a href="#about" onClick={(e) => handleScroll(e, "#about")}>
          About
        </a>
        <a
          href="#facilities"
          onClick={(e) => handleScroll(e, "#facilities")}
        >
          Facilities
        </a>
        <a
          href="#testimonials"
          onClick={(e) => handleScroll(e, "#testimonials")}
        >
          Testimonials
        </a>
        <a href="#app" onClick={(e) => handleScroll(e, "#app")}>
          App
        </a>
        <button className="join-btn">Join Now</button>
      </nav>

      <button
        className="nav-toggle-btn"
        onClick={() => setMobileMenuOpen(true)}
      >
        &#9776;
      </button>
    </header>
  );
};

export default Header;