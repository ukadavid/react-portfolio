import React from "react";
import "./qualification.css"


const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Journey</span>


            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">Polaris Bank</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Business/IT Consultant</h3>
                                <span className="qualification__subtitle">Ciuci Consulting</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2020 - 2022
                                </div>
                            </div>
            
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Frontend Engineer / Product Designer</h3>
                                <span className="qualification__subtitle">Pison Healthcare</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2019 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;