import React from "react";
import scrollpic from "../../assets/scroll.png"

const Scrolldown = () => {
    return (
         <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
                <img className="home__scroll-mouse wheel" src={scrollpic} alt="icon" />
            </a>
            <span className="home__scroll-name">Scroll Down</span>
            <i class="uil uil-arrow-down home__scroll-arrow"></i>

         </div>
    )
}

export default Scrolldown;