import React from "react";
import hellopic from '../../assets/wave.png';


const Data = () => {
    return(
        <div className="home__data">
            <h1 className="home__title">
                Tobechukwu Uka
                <img className="home__hand" src={hellopic} alt="my profile" />
            </h1>
            <h3 className="home__subtitle">Software Engineer</h3>
            <p className="home__description">I'm a creative Full-Stack Engineer with 2 years of professional experience providing high-impact web solutions for diverse industries.</p>

            <a href="#contact" className="button button--flex">
                Say Hi <i class="button__contact uil uil-envelope-send"></i>
            </a>
        </div>
    )
}

export default Data;