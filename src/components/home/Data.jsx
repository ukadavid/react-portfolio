import React from "react";
import sendpic from '../../assets/paper-plane.png';
import hellopic from '../../assets/hello.png';


const Data = () => {
    return(
        <div className="home__data">
            <h1 className="home__title">
                Tobechukwu Uka
                <img className="home__hand" src={hellopic} alt="my profile" />
            </h1>
            <h3 className="home__subtitle">Software Engineer</h3>
            <p className="home__description">I'm a creative front-end developer with 2 years of experience providing high-impact web solutions for diverse industries.</p>

            <a href="#contact" className="button button--flex">
                Say Hi <img className="home__hand" src={sendpic} alt="send"></img>
            </a>
        </div>
    )
}

export default Data;