import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

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
    <>
      <header className="header">
        <Link to="/" className="logo">
          Goodlyfe Gyms
        </Link>

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
          <Link to="/login" className="join-btn" onClick={() => setMobileMenuOpen(false)}> {/* марштрут через реакт роутер */}
            Join Now
          </Link>
        </nav>

        <button
          className="nav-toggle-btn"
          onClick={() => setMobileMenuOpen(true)}
        >
          &#9776;
        </button>
      </header>

      <div
        className={
          isMobileMenuOpen ? "menu-overlay overlay-open" : "menu-overlay"
        }
        onClick={() => setMobileMenuOpen(false)}
      ></div>
    </>
  );
};

export default Header;