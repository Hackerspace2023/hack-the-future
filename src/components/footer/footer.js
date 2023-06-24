import React from 'react'
import Logo from './assets/hs_2.png'
import "./footer.css"

const footer = () => {
    return (

        <div className="mainContainer">

            <div className="contentContainer">
                <div className="logoContent">
                    <a href="/">
                        <img src={Logo} alt="HackerSpace" />
                    </a>
                </div>

                <div className="venueContent">
                    <h3 class="footerTitle">Venue Location </h3>
                    <h4 class="date">
                        01 - 04 March, 2023
                    </h4>
                    <address className='address'>
                        Meghanad Saha Institute Of Technology, Kolkata <br />
                        West Bengal, India
                    </address>
                    <div class="location">
                        <a href="https://maps.app.goo.gl/KF6F1czsG1gGNumL9"
                            rel='noreferrer'
                            target="_blank"
                        >

                            <i class="fa-solid fa-location-dot"></i>
                            <h4>View Map Location</h4>
                        </a>
                    </div>
                </div>

                <div className="socialContent">
                    <div className="contentText">
                        <h3 class="footerTitle">Social Connection</h3>
                        <p class="text">
                            You should connect social area for Any update
                        </p>
                        <ul className="socialLogo">
                            <li>
                                <a href="/">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>


            </div>

            <div className="copyContainer">
                <p> <span>©</span> 2023 Hackerspace | Developer <span>MSIT</span></p>
            </div>
        </div>


    )
}

export default footer
