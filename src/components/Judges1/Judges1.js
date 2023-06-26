import React, { useState } from 'react'
import { Carousel } from 'bootstrap';

const Judges1 = () => {
    const [index, setIndex] = useState(0);

    const handleSlide = (selectedIndex, e) => {
        const itemsPerSlide = 4;
        const totalItems = e.length;

        if (selectedIndex >= totalItems - (itemsPerSlide - 1)) {
            const it = itemsPerSlide - (totalItems - selectedIndex);
            for (let i = 0; i < it; i++) {
                // Append slides to the end
                if (e.direction === "left") {
                    e[i] = e[i].concat(e.slice(0, 1));
                    e.splice(0, 1);
                } else {
                    e[e.length] = e.slice(-1).concat(e);
                    e.splice(-1, 1);
                }
            }
        }

        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSlide} interval={2000}>
                <Carousel.Item>
                    <a href="#" className="news__item">
                        <div className="news-slider">
                            <div className="news-slider__wrp swiper-wrapper">
                                <div className="news-slider__item swiper-slide">
                                    <a href="#" className="news__item">
                                        <div className="news-date">
                                            <span className="news-date__title">24</span>
                                            <span className="news-date__txt">May</span>
                                        </div>
                                        <div className="news__title">
                                            Lorem Ipsum Dolor Sit Amed
                                        </div>

                                        <p className="news__txt">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                                        </p>

                                        <div className="news__img">
                                            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-2.webp" alt="news" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Add other news-slider__item components here */}
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="#" className="news__item">
                        {/* Add carousel item content here */}
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="#" className="news__item">
                        {/* Add carousel item content here */}
                    </a>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default Judges1
