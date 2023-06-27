import { useState } from "react";
import React from "react";
import "./Schedule.css";
import logo from  './Schedule1.svg'

const content = [
  {
    time: "11:00-01:00",
    describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi assumenda illo itaque? Quod omnis quo laborum placeat suscipit, itaque quia illo eveniet, quis autem delectus quisquam magni quae vero minima deleniti voluptatibus unde optio! Nobis iusto vitae impedit dicta incidunt quia reiciendis ullam quo quasi architecto, error doloremque deleniti laborum inventore consectetur officiis alias quod optio, quaerat natus delectus! Minus exercitationem ipsa consectetur, expedita eveniet numquam aut. In architecto veritatis aliquam vitae, sint molestiae maiores mollitia. Officia culpa fugit sit praesentium sequi illum, assumenda amet quae, doloribus tempora facere porro.",
  },
  {
    time: "11:00-02:00",
    describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi assumenda illo itaque? Quod omnis quo laborum placeat suscipit, itaque quia illo eveniet, quis autem delectus quisquam magni quae vero minima deleniti voluptatibus unde optio! Nobis iusto vitae impedit dicta incidunt quia reiciendis ullam quo quasi architecto, error doloremque deleniti laborum inventore consectetur officiis alias quod optio, quaerat natus delectus! Minus exercitationem ipsa consectetur, expedita eveniet numquam aut. In architecto veritatis aliquam vitae, sint molestiae maiores mollitia. Officia culpa fugit sit praesentium sequi illum, assumenda amet quae, doloribus tempora facere porro.",
  },
  {
    time: "11:00-03:00",
    describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi assumenda illo itaque? Quod omnis quo laborum placeat suscipit, itaque quia illo eveniet, quis autem delectus quisquam magni quae vero minima deleniti voluptatibus unde optio! Nobis iusto vitae impedit dicta incidunt quia reiciendis ullam quo quasi architecto, error doloremque deleniti laborum inventore consectetur officiis alias quod optio, quaerat natus delectus! Minus exercitationem ipsa consectetur, expedita eveniet numquam aut. In architecto veritatis aliquam vitae, sint molestiae maiores mollitia. Officia culpa fugit sit praesentium sequi illum, assumenda amet quae, doloribus tempora facere porro.",
  }
];

export default function Scheduled() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const activeContent = content.filter(
    (item, index) => index === activeContentIndex
  )[0];

  return (
      <div className="Schedule-Container">
        <h1 className="Schedule-Header">
          Events &nbsp;<span>Schedule</span>
        </h1>
        {/* <img src = {logo} className="Schedule__logo"></img> */}
        <div id="tabs">
          <menu>
            <button
              id="b1"
              className={activeContentIndex === 0 ? "active" : ""}
              onClick={() => setActiveContentIndex(0)}
            >
              Pre Events
            </button>
            <button
              id="b2"
              className={activeContentIndex === 1 ? "active" : ""}
              onClick={() => setActiveContentIndex(1)}
            >
              First Day
            </button>
            <button
              id="b3"
              className={activeContentIndex === 2 ? "active" : ""}
              onClick={() => setActiveContentIndex(2)}
            >
              Second Day
            </button>
          </menu>
          <div id="tab-content">
            <ul>
              <div className="List">
                {activeContent.time && (
                  <div className="Time">
                    <strong>Time: </strong>
                    {activeContent.time}
                  </div>
                )}
                {activeContent.describe && (
                  <div className="Describe">
                    <strong></strong>
                    {activeContent.describe}
                  </div>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>

  );
}