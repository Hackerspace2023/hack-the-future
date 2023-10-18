import React from "react";
import "./Gallery.css";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
} from "./assets";

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
