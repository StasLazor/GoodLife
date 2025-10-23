import React from "react";
import "../styles/facilities.css";

import facilityImg1 from "../assets/facilities-1.jpg";
import facilityImg2 from "../assets/facilities-2.jpg";

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="facilities">
      <div className="facilities-container">
        <div className="facilities-content">
          <h2>Premium Facilities</h2>
          <p>
            Experience the full benefits of our premium equipment, designed to cater to every fitness level. Our state-of-the-art 
            cardio zone features the latest treadmills, ellipticals, and bikes, complete with interactive tracking. Push your limits 
            in our extensive free-weights area, fully stocked with everything from dumbbells to power racks. We also offer specialized 
            functional training zones, a high-intensity CrossFit studio, and a serene room for yoga and meditation. Your journey to your 
            goals starts here.
          </p>
          <button className="facilities-btn">Learn more</button>
        </div>
        <div className="facilities-images">
          <img
            src={facilityImg1}
            alt="Gym treadmills"
            className="facilities-img-1"
          />
          <img
            src={facilityImg2}
            alt="Barbell"
            className="facilities-img-2"
          />
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;