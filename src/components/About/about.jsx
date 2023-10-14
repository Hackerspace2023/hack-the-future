import React from "react";
import aboutImg from "./Assets/img1.svg";
import "./about.css";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-head-section">
        <h1 className="heading-tag-line">About</h1>
        <hr className="heading-underline" />
      </div>
      <div className="about-subsection" id="About">
        <div className="about-left-section">
          <h2 className="about-heading">
            Hack the Future - Soar on the wings of innovation.
          </h2>
          <p>
            Hack the Future believes in building for the future, igniting a
            spark of innovation within each participant. Regardless of your
            background or experience, this extraordinary platform welcomes you
            to showcase your skills and captivate the world with your
            creativity.
          </p>
          <p>
            This electrifying hackerspace provides an offline platform to
            enhance your skills and collaborate on real-life challenges. Unleash
            your potential, showcase your expertise, and be part of a
            groundbreaking revolution. With Hack the Future, you have the chance
            to shape the world. Don't miss this opportunity to ignite your
            creativity and leave a mark on the future!
          </p>
          <p>Always remember everything begins with an IDEA</p>
        </div>
        <div className="about-right-section">
          <img src={aboutImg} alt="img" className="hackathon-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
