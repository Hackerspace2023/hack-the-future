import React from "react";
import ReactCardCarousel from "react-card-carousel";

import "./judges.css"
import Judge1 from "./assets/img1.jpg"
import Judge2 from "./assets/img2.jpg"
import Judge3 from "./assets/img3.jpg"
import Judge4 from "./assets/img4.jpg"
import Judge5 from "./assets/img5.jpg"
import Judge6 from "./assets/img6.jpg"


const Judges = () => {
  const CONTAINER_STYLE = {
    position: "relative",
    height: "100vh",
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",


  };

  const CARD_STYLE = {
    height: "300px",
    width: "300px",
    textAlign: "center",
    background: "#eee",
    color: "#000",
    fontFamily: "sans-serif",
    fontSize: "14px",
    textTransform: "uppercase",
    borderRadius: "3px",
    margin: "0 200px",
    boxSizing: "border-box"
  };

  // Array of card data
  const cardData = [

    {
      name: "Jhon Doe",
      image: Judge1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate deleniti.",
      social: [
        { name: "LinkedIn", icon: "fa fa-linkedin" },
      ]
    },
    {
      name: "Jhon Doe",
      image: Judge2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate deleniti.",
      social: [
        { name: "LinkedIn", icon: "fa fa-linkedin" },
      ]
    },
    {
      name: "Jhon Doe",
      image: Judge3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate deleniti.",
      social: [
        { name: "LinkedIn", icon: "fa fa-linkedin" },
      ]
    },
    {
      name: "Jhon Doe",
      image: Judge4,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate deleniti.",
      social: [
        { name: "LinkedIn", icon: "fa fa-linkedin" },
      ]
    },
    {
      name: "Jhon Doe",
      image: Judge5,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate deleniti.",
      social: [
        { name: "LinkedIn", icon: "fa fa-linkedin" },
      ]
    },
    {
      name: "Jhon Doe",
      image: Judge6,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate deleniti.",
      social: [
        { name: "LinkedIn", icon: "fa fa-linkedin" },
      ]
    },
    

    // Add more card data objects as needed
  ];

  return (
    <div style={CONTAINER_STYLE}>
      <ReactCardCarousel
        autoplay={true}
        autoplay_speed={2500}
        spread={"wide"}
        disable_box_shadow={true}
      >
        {cardData.map((card, index) => (
          <div key={index} style={CARD_STYLE}>
            <div className="card-one">
              <header>
                <div className="avatar">
                  <img src={card.image} alt={card.name} />
                </div>
              </header>

              <h3>{card.name}</h3>
              <div className="desc">{card.desc}</div>
              <div className="contacts">
                {/* Render social icons */}
                {card.social.map((social, index) => (
                  <a key={index} href="">
                    <i className={social.icon}></i>
                  </a>
                ))}
                <div className="clear"></div>
              </div>
            </div>
          </div>
        ))}
      </ReactCardCarousel>
    </div>
  );
};

export default Judges;
