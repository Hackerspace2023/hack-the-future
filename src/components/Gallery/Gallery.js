import React, {useState} from 'react';
import "./Gallery.css"
import img1 from "./assets/ph-1.jpg"
import img2 from "./assets/ph-2.jpg"
import img3 from "./assets/ph-3.jpg"
import img4 from "./assets/ph-4.jpg"
import img5 from "./assets/e5.jpg"
import img6 from "./assets/ph-6.jpg"
import img7 from "./assets/e4.jpg"
import img8 from "./assets/ph-5.jpg"
import img9 from "./assets/e4.jpeg"
import img10 from "./assets/ph-9.jpg"
import img11 from "./assets/ph-11.jpg"
import img12 from "./assets/ph-12.jpeg"

const Gallery = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleImageClick = (src) => {
        setModalContent(<img src={src} className="modal-img" alt="Modal Image"/>);
        setShowModal(true);
    };

    const handleVideoClick = (src) => {
        setModalContent(
            <video className="modal-vid" controls>
                <source src={src} type="video/mp4"/>
            </video>
        );
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalContent(null);
    };

    return (
        <div id="Gallery">
            <h1 className="heading-tag-line">Gallery</h1>
            <hr className="heading-underline"/>
            <div id="gallery" className="container-fluid">
                <img
                    src={img1}
                    className="img-responsive"
                    alt="Gallery Image"

                />
                <img
                    src={img2}
                    className="img-responsive"
                    alt="Gallery Image"

                />
                <img
                    src={img3}
                    className="img-responsive"
                    alt="Gallery Image"

                />
                {/* <video
                    className="vid"
                    controls
                    onClick={() =>
                        handleVideoClick(
                            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                        )
                    }
                >
                    <source
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        type="video/mp4"
                    />
                </video> */}
                <img
                    src={img4}
                    className="img-responsive"
                    alt="Gallery Image"

                />
                <img
                    src={img5}
                    className="img-responsive"
                    alt="Gallery Image"

                />
                <img
                    src={img6}
                    className="img-responsive"
                    alt="Gallery Image"

                />
                <img
                    src={img7}
                    className="card img-responsive"
                    alt="Gallery Image"

                />
                <img
                    src={img8}
                    className="img-responsive"
                    alt="Gallery Image"

                />
                <img
                    src={img9}
                    className="img-responsive"
                    alt="Gallery Image"

                />
                <img
                    src={img10}
                    className="img-responsive"
                    alt="Gallery Image"

                />
                <img
                    src={img11}
                    className="img-responsive"
                    alt="Gallery Image"

                />
                <img
                    src={img12}
                    className="img-responsive"
                    alt="Gallery Image"

                />
                {/* <img
                    src="https://source.unsplash.com/1600x1100?female,portrait"
                    className="img-responsive"
                    alt="Gallery Image"
                    onClick={() =>
                        handleImageClick(
                            'https://source.unsplash.com/1600x1100?female,portrait'
                        )
                    }
                />
                <img
                    src="https://source.unsplash.com/992x768?female,portrait"
                    className="img-responsive"
                    alt="Gallery Image"
                    onClick={() =>
                        handleImageClick(
                            'https://source.unsplash.com/992x768?female,portrait'
                        )
                    }
                />
                <img
                    src="https://source.unsplash.com/768x992?female,portrait"
                    className="img-responsive"
                    alt="Gallery Image"
                    onClick={() =>
                        handleImageClick(
                            'https://source.unsplash.com/768x992?female,portrait'
                        )
                    }
                /> */}
            </div>

            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">{modalContent}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
