import React from 'react'
import Logo from './assets/2-removebg-preview.png'
import "./footer.css"

const footer = () => {
    return (

        <div className="mainContainer" id="Footer">
            <div className="contentContainer">
                <div className="logoContent">
                    <a href="/">
                        <img src={Logo} alt="HackerSpace" />
                    </a>

                </div>
                <div className="venueContent">
                    <h3 className="footerTitle">Venue Location </h3>
                    <h4 className="date">
                        28-30 July, 2023
                    </h4>
                    <address className='address'>
                        Meghanad Saha Institute Of Technology, Kolkata <br />
                        West Bengal, India
                    </address>
                    <div className="location">
                        <a href="https://maps.app.goo.gl/KF6F1czsG1gGNumL9"
                            rel='noreferrer'
                            target="_blank"
                        >
                            <i className="fa-solid fa-location-dot"></i>
                            <h4>View Map Location</h4>
                        </a>
                    </div>

                </div>
                <div className="socialContent">
                    <div className="contentText">
                        <h3 className="footerTitle">Social Connection</h3>
                        <p className="text">
                            You should connect social area for Any update
                        </p>
                        <ul className="socialLogo">
                            <li>
                                <a href="/">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                {/*<div className="mapContent">*/}
                {/*    <iframe title="address"*/}
                {/*        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.8324128287754!2d88.41251337500026!3d22.510470079535967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273f14bca0c15%3A0xbd1ef59baa5eafd0!2sMeghnad%20Saha%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1687704258834!5m2!1sen!2sin"*/}
                {/*        allowFullScreen="" loading="lazy"*/}
                {/*        referrerPolicy="no-referrer-when-downgrade"></iframe>*/}
                {/*</div>*/}
            </div>
            <div className="copyContainer">
                <p><span>©</span> 2023 Hackerspace | Developer <span>MSIT</span></p>
            </div>
        </div>
    )
}

export default footer
