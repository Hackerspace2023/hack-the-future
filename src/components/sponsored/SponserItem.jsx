import React from "react";
import "./sponsored.css";

const SponserItem = (props) => {
  return (
    <div className="slide">
      <img
        src={props.image}
        alt={props.id}
        className="slide-image"
        loading="lazy"
        title={props.id}
      />
    </div>
  );
};

export default SponserItem;
