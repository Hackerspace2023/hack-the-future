import React from "react";
import "./Gallery.css";
import img1 from "./assets/ph-1.jpg";
import img2 from "./assets/ph-2.jpg";
import img3 from "./assets/ph-3.jpg";
import img4 from "./assets/ph-4.jpg";
import img5 from "./assets/e5.jpg";
import img6 from "./assets/ph-6.jpg";
import img7 from "./assets/e4.jpg";
import img8 from "./assets/ph-5.jpg";
import img9 from "./assets/e4.jpeg";
import img10 from "./assets/ph-9.jpg";
import img11 from "./assets/ph-11.jpg";
import img12 from "./assets/ph-12.jpeg";

const Gallery = () => {
  return (
    <div id="Gallery">
      <h1 className="heading-tag-line">Gallery</h1>
      <hr className="heading-underline" />
      <div id="gallery" className="container-fluid">
        <img src={img1} className="img-responsive" alt="ig 1" />
        <img src={img2} className="img-responsive" alt="ig 2" />
        <img src={img3} className="img-responsive" alt="ig 3" />
        <img src={img4} className="img-responsive" alt="ig 4" />
        <img src={img5} className="img-responsive" alt="ig 5" />
        <img src={img6} className="img-responsive" alt="ig 6" />
        <img src={img7} className="card img-responsive" alt="ig 7" />
        <img src={img8} className="img-responsive" alt="ig 8" />
        <img src={img9} className="img-responsive" alt="ig 9" />
        <img src={img10} className="img-responsive" alt="ig 10" />
        <img src={img11} className="img-responsive" alt="ig 11" />
        <img src={img12} className="img-responsive" alt="ig 12" />
      </div>

      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">{/* Modal content goes here */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
