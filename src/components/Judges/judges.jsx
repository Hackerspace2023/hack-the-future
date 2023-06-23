import React from 'react'
import "./judges.css"

export default function judges() {
  return (
    <>
    
      <div>
        <meta charSet="UTF-8" />
        <title>Responsive Card Slider HTML CSS | CodingNepal</title>
        <link rel="stylesheet" href="style.css" />
        {/* Fontawesome CDN Link */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="container">
          <input type="radio" name="dot" id="one" />
          <input type="radio" name="dot" id="two" />
          <div className="main-card">
            <div className="cards">
              <div className="card">
                <div className="content">
                  <div className="img">
                    <img src="./images/img1.jpg" alt="" />
                  </div>
                  <div className="details">
                    <div className="name">Andrew Neil</div>
                    <div className="job">Web Designer</div>
                  </div>
                  <div className="media-icons">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-instagram" /></a>
                    <a href="#"><i className="fab fa-github" /></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div className="img">
                    <img src="./images/img2.jpg" alt="" />
                  </div>
                  <div className="details">
                    <div className="name">Jasmine Carter</div>
                    <div className="job">UI Designer</div>
                  </div>
                  <div className="media-icons">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-instagram" /></a>
                    <a href="#"><i className="fab fa-github" /></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div className="img">
                    <img src="./images/img3.jpg" alt="" />
                  </div>
                  <div className="details">
                    <div className="name">Justin Chung</div>
                    <div className="job">Web Devloper</div>
                  </div>
                  <div className="media-icons">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-instagram" /></a>
                    <a href="#"><i className="fab fa-github" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="card">
                <div className="content">
                  <div className="img">
                    <img src="./images/img4.jpg" alt="" />
                  </div>
                  <div className="details">
                    <div className="name">Appolo Reef</div>
                    <div className="job">Web Designer</div>
                  </div>
                  <div className="media-icons">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-instagram" /></a>
                    <a href="#"><i className="fab fa-github" /></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div className="img">
                    <img src="./images/img5.jpg" alt="" />
                  </div>
                  <div className="details">
                    <div className="name">Adrina Calvo</div>
                    <div className="job">UI Designer</div>
                  </div>
                  <div className="media-icons">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-instagram" /></a>
                    <a href="#"><i className="fab fa-github" /></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div className="img">
                    <img src="./images/img6.jpg" alt="" />
                  </div>
                  <div className="details">
                    <div className="name">Nicole Lewis</div>
                    <div className="job">Web Devloper</div>
                  </div>
                  <div className="media-icons">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-instagram" /></a>
                    <a href="#"><i className="fab fa-github" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button">
            <label htmlFor="one" className="active one" />
            <label htmlFor="two" className="two" />
          </div>
        </div>
      </div>

      
    </>
  )
}
