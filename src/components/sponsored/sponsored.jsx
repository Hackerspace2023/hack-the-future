import React from "react";
import SponserList from "./SponserList";
import './sponsored.css';

const Sponser = () => {
    const sponserData = [{
        id: 'sp1', sponserWebsite: '#', sponserImage: "Images/mcdonalds-black-logo.png",
    }, {
        id: 'sp2', sponserWebsite: '#', sponserImage: 'Images/starbucks-logo-black-and-white.png',
    }, {
        id: 'sp3', sponserWebsite: '#', sponserImage: 'Images/general-electric-black-logo-png-transparent.png',
    }, {
        id: 'sp4', sponserWebsite: '#', sponserImage: 'Images/nfl-logo-png-transparent.png',
    }, {
        id: 'sp5', sponserWebsite: '#', sponserImage: 'Images/mercedes-benz-6-logo-png-transparent.png',
    }, {
        id: 'sp6', sponserWebsite: '#', sponserImage: 'Images/hogwarts-logo-png-transparent.png',
    }, {
        id: 'sp7', sponserWebsite: '#', sponserImage: "Images/mcdonalds-black-logo.png",
    }, {
        id: 'sp8', sponserWebsite: '#', sponserImage: 'Images/starbucks-logo-black-and-white.png'
    }, {
        id: 'sp9', sponserWebsite: '#', sponserImage: 'Images/general-electric-black-logo-png-transparent.png',
    }, {
        id: 'sp10', sponserWebsite: '#', sponserImage: 'Images/nfl-logo-png-transparent.png'
    }, {
        id: 'sp11', sponserWebsite: '#', sponserImage: 'Images/mercedes-benz-6-logo-png-transparent.png',
    }, {
        id: 'sp12', sponserWebsite: '#', sponserImage: 'Images/hogwarts-logo-png-transparent.png'
    },]
    return (<div className='slider'>
        <div className="about-head-section">
            <h1 className="heading-tag-line">Sponsers</h1>
            <hr className="heading-underline"/>
        </div>
        <SponserList items={sponserData}/>
    </div>)
};
export default Sponser;