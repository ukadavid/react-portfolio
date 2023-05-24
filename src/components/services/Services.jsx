import React from "react";
import { useState } from "react";
import "./services.css"

const Services = () => {

    const [toggleState, setToggleState] = useState(0);
    const [secondToggleState, setSecondToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const secondToggleTab = (index) => {
        setSecondToggleState(index)
    }


    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                    <i className="uil-server-network services__icon"></i>
                    <h3 className="services__title">Backend Engineer</h3>
                    </div>
                    
                    <span className="services__button" onClick={() => toggleTab(1)}> View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal" }>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Backend Engineer</h3>
                            <p className="services__modal-description">As a seasoned Backend Engineer, I bring expertise in developing robust and scalable solutions for clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Backend Development: I specialize in building efficient and secure server-side applications using technologies such as Node.js, ExpressJS and Typescript.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    API Development: I create RESTful APIs or GraphQL endpoints, ensuring seamless integration between frontend and backend systems.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    System Architecture: I architect reliable and scalable systems, employing industry best practices for fault tolerance, scalability, and maintainability.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Security and Data Protection: I prioritize data security and implement stringent measures to protect sensitive information.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Frontend Engineer</h3>
                    </div>

                    <span className="services__button" onClick={() => secondToggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                    <div className={secondToggleState === 1 ? "services__modal active-modal" : "services__modal" }>
                        <div className="services__modal-content">
                            <i onClick={() => secondToggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Frontend Engineer</h3>
                            <p className="services__modal-description">With over 2 years of experience, I specialize in providing bespoke solutions to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Product Design: I create visually appealing and user-friendly designs for web and mobile applications.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Responsive Development: I implement responsive design principles to ensure seamless experiences across devices and screen sizes.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Pixel-Perfect Development: I pay attention to detail and strive for pixel-perfect development, ensuring a high level of precision and accuracy in my work.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Brand Positioning: I help clients and companies position their brand effectively by incorporating their brand identity and values into the digital products I develop.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;