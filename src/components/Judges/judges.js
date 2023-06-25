import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
// import Item from "./item";
import "./judges.css";
import Image1 from "./assets/img1.jpg"
import Image2 from "./assets/img3.jpg"
import Image3 from "./assets/img3.jpg"
import Image4 from "./assets/img3.jpg"
import Image5 from "./assets/img3.jpg"
import Image6 from "./assets/img3.jpg"
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];



const Judges = () => {
  const [items, setItems] = useState([
    { id: 1, image: Image1, caption: "Image 1 Caption" },
    { id: 2, image: Image2, caption: "Image 2 Caption" },
    { id: 3, image: Image3, caption: "Image 3 Caption" },
    { id: 4, image: Image4, caption: "Image 4 Caption" },
    { id: 5, image: Image5, caption: "Image 5 Caption" },
    { id: 6, image: Image6, caption: "Image 6 Caption" },
  ]);

  return (
    <div className="App">
    <div className="carousel-wrapper">
    <Carousel
          breakPoints={breakPoints}
          showArrows={true}
          enableSwipe={true}
          pagination={true}
          enableInfiniteScroll
        >
          {items.map((item) => (
            <div key={item.id} className="item card">
              <img className="judges-pic"src={item.image} alt={`Image ${item.id}`} />
              <p className="judges-text">{item.caption}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Judges


