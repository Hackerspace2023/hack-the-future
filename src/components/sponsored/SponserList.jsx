import React from "react";
import SponserItem from "./SponserItem";

const SponserList = props => {
    return (
        <div>
            {props.items.map(Sponser => (
                <SponserItem key={Sponser.id} id={Sponser.id} name={Sponser.sponserName}
                             website={Sponser.sponserWesite}
                             image={Sponser.sponserImage}/>

            ))}
        </div>);
};
export default SponserList;
