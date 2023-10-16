import React, { useState } from "react";
import "./Faq.css";
import { FAQ__data } from "./data";

function Accordion() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    } else {
      setActiveAccordion(index);
    }
  }

  return (
    <React.Fragment>
      <div className="faq__container">
        <div className="about-head-section">
          <h1 className="heading-tag-line">FAQs</h1>
          <hr className="heading-underline" />
        </div>
        <div className="accordion__faq">
          {FAQ__data.map((item, index) => (
            <div key={index} onClick={() => toggleAccordion(index)}>
              <div className="accordion__faq-heading">
                <h3 className={accordion === index ? "active" : ""}>
                  {item.question}
                </h3>
              </div>

              <div>
                {accordion === index ? (
                  <span className="verticle">-</span>
                ) : (
                  <span className="horizental">+</span>
                )}
              </div>
              <div>
                <p className={accordion === index ? "active" : "inactive"}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Accordion;
