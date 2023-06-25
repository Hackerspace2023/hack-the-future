import React from "react";
import SponserItem from "./SponserItem";
import './sponsored.css';

const SponserList = props => {
    return (
        <div className='slide-track'>
            {props.items.map(Sponser => (
                <SponserItem key={Sponser.id} id={Sponser.id} name={Sponser.sponserName}
                             website={Sponser.sponserWesite}
                             image={Sponser.sponserImage}/>

            ))}
        </div>);
};
export default SponserList;
