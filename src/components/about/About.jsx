import React from "react";
import "./about.css";
import profilepic from "../../assets/Passport 1.jpeg";
import CV from "../../assets/Tobechukwu_Uka.pdf"
import downloadicon from "../../assets/download.png"
import Info from './Info'

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">
                <img className="about__img" src={profilepic} alt="my profile" />
                
                <div className="about__data">
                    <Info />

                    <p className="about__description">
                    Passionate about healthcare, finance, and technology. Seeking projects that combine these fields. Committed to driving positive change and impact.
                    </p>

                    <a download="" href={CV} className=" button button--flex">Download CV <img className="btn__download" src={downloadicon} alt="download icon" /></a>
                </div>

            </div>
            
        </section>
    )
}

export default About;