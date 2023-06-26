import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./judges.css";
import Image1 from "./assets/img1.jpg";
import Image2 from "./assets/img2.jpg";
import Image3 from "./assets/img3.jpg";
import Image4 from "./assets/img4.jpg";
import Image5 from "./assets/img5.jpg";
import Image6 from "./assets/img6.jpg";

export default function Judges() {
  const swiperRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 481) {
        setSlidesPerView(1);
      } else if (windowWidth >= 481 && windowWidth < 768) {
        setSlidesPerView(2);
      } else if (windowWidth >= 768 && windowWidth < 992) {
        setSlidesPerView(2);
      } else if (windowWidth >= 992 && windowWidth < 1200) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(2);
      }
    };

    handleResize(); // Set initial slidesPerView value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = [
    { id: 1, image: Image1, judgeName: "Image 1", caption: "Image caption 11" },
    { id: 2, image: Image2, judgeName: "Image 2", caption: "Image caption 12" },
    { id: 3, image: Image3, judgeName: "Image 3", caption: "Image caption 13" },
    { id: 4, image: Image4, judgeName: "Image 4", caption: "Image caption 14" },
    { id: 5, image: Image5, judgeName: "Image 5", caption: "Image caption 15" },
    { id: 6, image: Image6, judgeName: "Image 6", caption: "Image caption 16" },
  ];

  return (
    <><div className="judge-container"></div>
      <Swiper
        ref={swiperRef}
        slidesPerView={slidesPerView}
        loop={true}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 2,
          depth: 100,
          modifier: 5,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="content">
              <div className="judge-card">
                <div className="firstinfo">
                  <img src={item.image} alt={`Image ${item.id}`} />
                  <div className="profileinfo">
                    <h1>{item.judgeName}</h1>
                    <h3>{item.caption}</h3>
                    <p className="bio">
                      Lived all my life on the top of Mount Fuji, learning the
                      way to be a Ninja Dev.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
