import React, { useState } from "react";
import "./Theme.css";
import { ThemeList } from "./data";

const Theme = () => {
  const [cards] = useState(ThemeList);
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const handleCardFlip = (index) => {
    setFlippedCardIndex(index);
  };

  return (
    <div>
      <div className="about-head-section">
        <h1 className="heading-tag-line">Theme</h1>
        <hr className="heading-underline" />
      </div>
      <div className="problem-content" id="Theme">
        {cards.map((card, index) => (
          <a
            key={index}
            className={`card ${flippedCardIndex === index ? "flipped" : ""}`}
            onMouseEnter={() => handleCardFlip(index)}
            onMouseLeave={() => handleCardFlip(null)}
          >
            <div
              className="front"
              style={{ backgroundImage: `url(${card.frontImage})` }}
            >
              <p>{card.frontText}</p>
            </div>
            <div className="back">
              <div>
                {card.backText.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
                <button className="button">Click Here</button>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Theme;
