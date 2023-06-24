import React from "react";
import './theme.css';

const ThemeItem = (props) => {
    return (
        <li className="cards_item">
            <div className="card">
                <div className="card_image"><img src={props.img_link} alt={'Theme Image' + props.id}/></div>
                <div className="card_content">
                    <h2 className="card_title">{props.title}</h2>
                    <p className="card_text">{props.img_text}</p>
                </div>
            </div>
        </li>)
}
export default ThemeItem;