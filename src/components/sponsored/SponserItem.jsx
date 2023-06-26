import React from "react";
import './SponserItem.css';

const SponserItem = props => {
    return (
        <div className="row">
            <div className="col-xs-12">
                <h3 className="sponsored-heading second-heading">{props.name}</h3>
                <div className="sponsors-area sponsors-area-nogap sponsors-area-noshadow">
                    <div className="single">
                        <a className="" href={props.website}><img
                            src={props.image} alt="sponsor"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default SponserItem;