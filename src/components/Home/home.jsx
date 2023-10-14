import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  // const hackathonDate = new Date('2023-07-28');

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function calculateTimeLeft() {
    const currentTime = new Date();
    const targetDate = new Date("2023-07-27");
    targetDate.setHours(23, 59, 59); // Set the target time to 11:59 pm

    const timeDiff = targetDate.getTime() - currentTime.getTime();

    if (timeDiff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="home-container" id="Home">
      <div className="title-container">
        <h2 className="hackathon-title">
          Hack <span>The</span> Future
        </h2>
      </div>
      <div className="section">
        <div className="left-section">
          <h3 className="date">
            <b className="lgx-counter">28</b> <span>July</span>
          </h3>
          <div className="timer">
            <div className="timer-item">
              <div className="timer-item-value">{timeLeft.days}</div>
              <div className="timer-item-label">Days</div>
            </div>
            <div className="timer-item">
              <div className="timer-item-value">{timeLeft.hours}</div>
              <div className="timer-item-label">Hours</div>
            </div>
            <div className="timer-item">
              <div className="timer-item-value">{timeLeft.minutes}</div>
              <div className="timer-item-label">Minutes</div>
            </div>
            <div className="timer-item">
              <div className="timer-item-value">{timeLeft.seconds}</div>
              <div className="timer-item-label">Seconds</div>
            </div>
          </div>
          <div className="button">
            <button
              type="button"
              className="btn btn-2 hover-slide-right register-btn"
            >
              <a href="https://hackthefuture.devfolio.co/" target="_blank">
                Register Now{" "}
                <i className="register fa-solid fa-arrow-right"></i>
              </a>
            </button>
            <button
              type="button"
              className="btn btn-2 hover-slide-right discord"
            >
              <a href="https://discord.gg/q9vHfn9M" target="_blank">
                Join Here <i className="fa-brands fa-discord"></i>
              </a>
            </button>
          </div>
        </div>
        <div className="right-section">
          <h1 className="hackerspace">&#x23;HackerSpace</h1>
          <h1 className="greetings">
            Welcome to Hackathon&nbsp;
            <span className="year">
              <span className="span1">2</span>
              <span className="span2">0</span>
              <span className="span3">2</span>
              <span className="span4">3</span>!
            </span>
          </h1>
          <p className="home-text">
            "Unlock your potential, solve challenges, <br />
            and leave your mark at our Hackathon event."
          </p>
          <h3 className="college-name">
            <a href="https://msit.edu.in/" target="_blank">
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              Meghnad Saha Institute of Technology
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
