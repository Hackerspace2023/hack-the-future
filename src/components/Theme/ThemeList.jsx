import React from 'react';
import './theme.css';
import ThemeItem from "./ThemeItem";

const ThemeList = (props) => {
    return (<ul className="cards">
            {
                props.items.map(Theme => (
                    <ThemeItem key={Theme.id} id={Theme.id} title={Theme.title} img_link={Theme.img_link}
                               img_text={Theme.text}/>
                ))
            }
        </ul>
    )
}
export default ThemeList;