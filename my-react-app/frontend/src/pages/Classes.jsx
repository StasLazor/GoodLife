import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "../styles/classes.css";

// Імпортуй зображення
import heroBg from "../assets/hero-bg.png";
import yogaImg from "../assets/class-yoga.jpg";
import spinImg from "../assets/class-spin.jpg";
import crossfitImg from "../assets/class-crossfit.jpg";
import boxingImg from "../assets/class-boxing.jpg";
import pilatesImg from "../assets/class-pilates.jpg";
import hiitImg from "../assets/class-hiit.jpg";

import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";

import trainer1 from "../assets/trainer-1.jpg";
import trainer2 from "../assets/trainer-2.jpg";
import trainer3 from "../assets/trainer-3.jpg";

const Classes = () => {
  return (
    <>
      <Header />

      <section
        className="classes-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="classes-hero-content">
          <h1>
            Our <span>Classes</span>
          </h1>
          <p>
            Choose from our diverse range of fitness classes designed to help
            you achieve your goals
          </p>
        </div>
      </section>

      <section className="classes-grid-section">
        <div className="classes-grid-container">
          <ClassCard
            imgSrc={yogaImg}
            tag="Relax"
            title="Yoga & Meditation"
            description="A calm and peaceful class focused on body stretches and meditation."
          />
          <ClassCard
            imgSrc={spinImg}
            tag="Cardio"
            title="Spin Cycling"
            description="A high-energy cardio workout on a stationary bike to boost endurance."
          />
          <ClassCard
            imgSrc={crossfitImg}
            tag="Strength"
            title="Crossfit Training"
            description="High-intensity functional movements to build strength and conditioning."
          />
          <ClassCard
            imgSrc={boxingImg}
            tag="Cardio"
            title="Boxing Fitness"
            description="Learn boxing fundamentals in a full-body workout. All levels welcome."
          />
          <ClassCard
            imgSrc={pilatesImg}
            tag="Flexibility"
            title="Pilates Core"
            description="Strengthen your core and improve flexibility with controlled movements."
          />
          <ClassCard
            imgSrc={hiitImg}
            tag="Cardio"
            title="HIIT Bootcamp"
            description="Short bursts of intense exercise followed by recovery periods."
          />
        </div>
      </section>

      <section className="gallery-section">
        <h2>
          Inside <span>Goodlyfe</span>
        </h2>
        <div className="gallery-grid">
          <img src={gallery1} alt="Gym inside 1" />
          <img src={gallery2} alt="Gym inside 2" />
          <img src={gallery3} alt="Gym inside 3" />
          <img src={gallery4} alt="Gym inside 4" />
        </div>
      </section>

      <section className="trainers-section">
        <h2>
          Meet Our <span>Expert Trainers</span>
        </h2>
        <div className="trainers-container">
          <TrainerCard
            imgSrc={trainer1}
            name="John Smith"
            specialty="Strength Training"
          />
          <TrainerCard
            imgSrc={trainer2}
            name="Alice Johnson"
            specialty="Yoga & Pilates"
          />
          <TrainerCard
            imgSrc={trainer3}
            name="Mike Allen"
            specialty="Crossfit & HIIT"
          />
        </div>
      </section>

      <section className="cta-classes-section">
        <h2>Not sure which class is right for you?</h2>
        <p>
          Booking from information with our trainers who will help you to find
          the perfect class for you.
        </p>
        <a href="#" className="cta-btn">
          Get Started
        </a>
      </section>

      <Footer />
    </>
  );
};

// Допоміжний компонент для картки
const ClassCard = ({ imgSrc, tag, title, description }) => (
  <div className="class-card">
    <div className="class-card-image">
      <img src={imgSrc} alt={title} />
      <span className="class-card-tag">{tag}</span>
    </div>
    <div className="class-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="class-card-link">
        Read More
      </a>
    </div>
  </div>
);

// Допоміжний компонент для тренера
const TrainerCard = ({ imgSrc, name, specialty }) => (
  <div className="trainer-card">
    <img src={imgSrc} alt={name} />
    <div className="trainer-info">
      <h4>{name}</h4>
      <p>{specialty}</p>
      <div className="trainer-socials">
        <a href="#">FB</a>
        <a href="#">IN</a>
        <a href="#">TW</a>
      </div>
    </div>
  </div>
);

export default Classes;