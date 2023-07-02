import React from 'react';
import './Venue.css';
const Venue = () => {
    return (
        <div className="venue-section" id="Venue">
            <div className="venue-head-section">
                <h1 className="heading-tag-line">Venue</h1>
                <hr className="heading-underline" />
            </div>
            <div className="venue-subheading-right">
                <iframe title="address"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.8324128287754!2d88.41251337500026!3d22.510470079535967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273f14bca0c15%3A0xbd1ef59baa5eafd0!2sMeghnad%20Saha%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1687704258834!5m2!1sen!2sin"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="venue-subsection">
                <div className="venue-subheading-left">
                    <h4 className="venue-date">
                        28-30 July, 2023
                    </h4>
                    <address className='venue-address'>
                        Meghnad Saha Institute Of Technology, Kolkata <br />
                        West Bengal, India
                    </address>
                    <div className="venue-location">
                        <a href="https://www.google.com/maps/@22.5105556,88.4151563,3a,90y,204.34h,103.93t/data=!3m8!1e1!3m6!1sAF1QipPanWJHn1MPsns8prP_jOR0fxyPUZ1nQ47tRqw1!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPanWJHn1MPsns8prP_jOR0fxyPUZ1nQ47tRqw1%3Dw203-h100-k-no-pi-0-ya154-ro-0-fo100!7i8704!8i4352?hl=en-US&entry=ttu"
                            rel='noreferrer'
                            target="_blank"
                        >
                            <i className="fa-sharp fa-solid fa-street-view"></i>
                            <h4>See Venue in 360&deg;</h4>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Venue;
