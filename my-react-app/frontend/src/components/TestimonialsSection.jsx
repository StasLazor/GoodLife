import React from "react";
import "../styles/testimonials.css";

import testimonialImg1 from "../assets/testimonial-1.jpg";
import testimonialImg2 from "../assets/testimonial-2.jpg";
import testimonialImg3 from "../assets/testimonial-3.jpg";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="testimonial-column-left">
          <div className="testimonials-content">
            <h2>Real Stories from Real Customers</h2>
            <p>Be inspired with these experiences.</p>
          </div>

          <div className="testimonial-card card-1">
            <h3>3Kg lost!</h3>
            <p className="testimonial-text">
              <span className="quote">“</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eget lectus urna. Nulla magna tortor, bibendum in molestie sed,
              gravida nec felis.
            </p>
            <div className="testimonial-author">
              <img src={testimonialImg2} alt="James John" />
              <div className="author-info">
                <h4>James John</h4>
                <span>Mother of two</span>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-column-right">
          <div className="testimonial-card card-2">
            <h3>17Kg lost!</h3>
            <p className="testimonial-text">
              <span className="quote">“</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eget lectus urna. Nulla magna tortor, bibendum in mo.
            </p>
            <div className="testimonial-author">
              <img src={testimonialImg1} alt="Mary Patricia" />
              <div className="author-info">
                <h4>Mary Patricia</h4>
                <span>Mother of two</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card card-3">
            <h3>43Kg lost!</h3>
            <p className="testimonial-text">
              <span className="quote">“</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="testimonial-author">
              <img src={testimonialImg3} alt="Robert Micheal" />
              <div className="author-info">
                <h4>Robert Micheal</h4>
                <span>Mother of two</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;