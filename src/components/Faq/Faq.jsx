import React, {useState} from "react";
import "./Faq.css";
import logo from './FAQs.svg'

const dataCollection = [
    {
        question: "How to register here?",
        answer: "You can register here by clicking on the register button and fill the form",
    },
    {
        question: "What is the purpose of this event?",
        answer: "The purpose of this event is to provide a platform to the students to showcase their skills and knowledge",
    },
    {
        question: "What is the registration fee?",
        answer: "The registration fee is 200/-",
    },
    {
        question: "What is the last date of registration?",
        answer: "The last date of registration is 20th of September",
    },
];

function Accordion() {
    const [accordion, setActiveAccordion] = useState(-1);

    function toggleAccordion(index) {
        if (index === accordion) {
            setActiveAccordion(-1);
            return
        } else {
            setActiveAccordion(index);
        }
    }

    return (
        <React.Fragment>
            <div className="faq__container">
                <div className="about-head-section">
                    <h1 className="heading-tag-line">FAQs</h1>
                    <hr className="heading-underline"/>
                </div>
                {/* <div className="faq__image">
            <img src={logo} alt="FAQs" />
        </div> */}
                <div className="accordion__faq">
                    {dataCollection.map((item, index) => (
                        <div key={index} onClick={() => toggleAccordion(index)}>
                            <div className="accordion__faq-heading">
                                <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                            </div>

                            <div>
                                {accordion === index ? (
                                    <span className="verticle">-</span>
                                ) : (
                                    <span className="horizental">+</span>
                                )}
                            </div>
                            <div>
                                <p className={accordion === index ? "active" : "inactive"}>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Accordion;
