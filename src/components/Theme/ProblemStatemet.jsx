import React from 'react';
import "./theme.css";
import ThemeList from "./ThemeList";


const Theme = () => {
    const Theme = [{
        id: 't-1',
        title: 'Card Grid Layout',
        img_link: 'https://picsum.photos/500/300/?image=10',
        text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    }, {
        id: 't-2',
        title: 'Card Grid Layout',
        img_link: 'https://picsum.photos/500/300/?image=10',
        text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    }, {
        id: 't-3',
        title: 'Card Grid Layout',
        img_link: 'https://picsum.photos/500/300/?image=10',
        text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    }, {
        id: 't-4',
        title: 'Card Grid Layout',
        img_link: 'https://picsum.photos/500/300/?image=10',
        text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    }, {
        id: 't-5',
        title: 'Card Grid Layout',
        img_link: 'https://picsum.photos/500/300/?image=10',
        text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    }, {
        id: 't-6',
        title: 'Card Grid Layout',
        img_link: 'https://picsum.photos/500/300/?image=10',
        text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    }, {
        id: 't-7',
        title: 'Card Grid Layout',
        img_link: 'https://picsum.photos/500/300/?image=10',
        text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    }, {
        id: 't-8',
        title: 'Card Grid Layout',
        img_link: 'https://picsum.photos/500/300/?image=10',
        text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    }, {
        id: 't-9',
        title: 'Card Grid Layout',
        img_link: 'https://picsum.photos/500/300/?image=10',
        text: 'Demo of pixel perfect pure CSS simple responsive card grid layout',
    },
    ];
    return (
            <div className="main" id="Theme">
                <h1>Theme and Problem Statement</h1>
                <ThemeList items={Theme}/>
                <div className="rulesButton">
                    <button className="btn card_btn rules_btn">Rules &amp; Regulation</button>
                </div>
            </div>
    )
};
export default Theme;
