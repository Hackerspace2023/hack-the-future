import React from "react";
import './sponsored.css';

const SponserItem = props => {
    return (
        <div className="slide">
            <img src={props.image} alt={props.name} className="slide-image"/>
        </div>
    )
};
export default SponserItem;