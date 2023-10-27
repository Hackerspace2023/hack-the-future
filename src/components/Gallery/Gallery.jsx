import React from "react"
import ModalImage from "react-modal-image"
import "./Gallery.css"
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
} from "./assets"

const Gallery = () => {
  return (
    <div id="Gallery">
      <h1 className="heading-tag-line">Gallery</h1>
      <hr className="heading-underline" />
      <div id="gallery" className="container-fluid">
        <ModalImage small={img1} large={img1} className="img-responsive" alt="ig 1"/>
         <ModalImage small={img2} large={img2} className="img-responsive" alt="ig 2"/>
         <ModalImage small={img3} large={img3} className="img-responsive" alt="ig 3"/>
         <ModalImage small={img4} large={img4} className="img-responsive" alt="ig 4"/>
         <ModalImage small={img5} large={img5} className="img-responsive" alt="ig 5"/>
         <ModalImage small={img6} large={img6} className="img-responsive" alt="ig 6"/>
         <ModalImage small={img7} large={img7} className="img-responsive" alt="ig 7"/>
        <ModalImage small={img8} large={img8} className="img-responsive" alt="ig 8"/>
        <ModalImage small={img9} large={img9} className="img-responsive" alt="ig 9"/>
        <ModalImage small={img10} large={img10} className="img-responsive" alt="ig 10"/>
        <ModalImage small={img11} large={img11} className="img-responsive" alt="ig 11"/>
        <ModalImage small={img12} large={img12}  className="img-responsive" alt="ig 12"/>
      </div>
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog"> <div className="modal-content">   <div className="modal-body">{/* Modal content goes here */}</div> </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
