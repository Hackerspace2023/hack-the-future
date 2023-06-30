import React, {useState} from 'react';
import "./Theme.css"

const Theme = () => {
    const [cards, setCards] = useState([

        {
            frontImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-2ebb2b6f93add843.png',
            frontText: 'Lorem ipsum dolor sit amet consectetur adipisi.',
            backText: [
                'Consectetur adipisicing elit. Possimus, praesentium?',
                'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.',
            ],
        },
        {
            frontImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-964edcf0f07211b0.png',
            frontText: 'Lorem ipsum dolor sit amet consectetur adipisi.',
            backText: [
                'Consectetur adipisicing elit. Possimus, praesentium?',
                'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.',
            ],
        },
        {
            frontImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-893bc9989a52eba0.png',
            frontText: 'Lorem ipsum dolor sit amet consectetur adipisi.',
            backText: [
                'Consectetur adipisicing elit. Possimus, praesentium?',
                'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.',
            ],
        },
        {
            frontImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-2ebb2b6f93add843.png',
            frontText: 'Lorem ipsum dolor sit amet consectetur adipisi.',
            backText: [
                'Consectetur adipisicing elit. Possimus, praesentium?',
                'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.',
            ],
        },
        {
            frontImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-964edcf0f07211b0.png',
            frontText: 'Lorem ipsum dolor sit amet consectetur adipisi.',
            backText: [
                'Consectetur adipisicing elit. Possimus, praesentium?',
                'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.',
            ],
        },
        {
            frontImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-893bc9989a52eba0.png',
            frontText: 'Lorem ipsum dolor sit amet consectetur adipisi.',
            backText: [
                'Consectetur adipisicing elit. Possimus, praesentium?',
                'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.',
            ],
        },
        {
            frontImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-2ebb2b6f93add843.png',
            frontText: 'Lorem ipsum dolor sit amet consectetur adipisi.',
            backText: [
                'Consectetur adipisicing elit. Possimus, praesentium?',
                'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.',
            ],
        },
        {
            frontImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-964edcf0f07211b0.png',
            frontText: 'Lorem ipsum dolor sit amet consectetur adipisi.',
            backText: [
                'Consectetur adipisicing elit. Possimus, praesentium?',
                'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.',
            ],
        },
        {
            frontImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-893bc9989a52eba0.png',
            frontText: 'Lorem ipsum dolor sit amet consectetur adipisi.',
            backText: [
                'Consectetur adipisicing elit. Possimus, praesentium?',
                'Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.',
            ],
        },
        // Add more cards as needed
    ]);

    const [flippedCardIndex, setFlippedCardIndex] = useState(null);

    const handleCardFlip = (index) => {
        setFlippedCardIndex(index);
    };

    return (
        <div>
            <div className="about-head-section">
                <h1 className="heading-tag-line">Theme</h1>
                <hr className="heading-underline"/>
            </div>
            <div className="problem-content" id="Theme">
                {cards.map((card, index) => (
                    <a
                        key={index}
                        className={`card ${flippedCardIndex === index ? 'flipped' : ''}`}
                        href="#!"
                        onMouseEnter={() => handleCardFlip(index)}
                        onMouseLeave={() => handleCardFlip(null)}
                    >
                        <div className="front" style={{backgroundImage: `url(${card.frontImage})`}}>
                            <p>{card.frontText}</p>
                        </div>
                        <div className="back">
                            <div>
                                {card.backText.map((text, i) => (
                                    <p key={i}>{text}</p>
                                ))}
                                <button className="button">Click Here</button>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Theme;
