import React from 'react';
import "./Prize.css"

const Prize = () => {
    const cardData = [
        {
            heading: 'Snow View',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            heading: 'Photoshoot mood',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            heading: '3D View',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            heading: 'Explore The Canvas',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            heading: 'Welcome To C++',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            heading: 'React World',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            heading: 'Hello World',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            heading: 'Error Fix',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
    ];

    return (
        <div>
            <div className="dd_heading">
                <h3 className="heading-tag-line">Prizes</h3>
                <hr className="heading-underline"/>
            </div>
            <main className="page-content">
                {cardData.map((card, index) => (
                    <div className="d_card" key={index}>
                        <div className="prize-content">
                            <h2 className="heading">{card.heading}</h2>
                            <p className="data-content">{card.content}</p>
                            <button class="prize-button">Click Here</button>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Prize;
