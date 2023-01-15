import React from "react";
import "./project.css";

const Project = () => {
    return(
        <section className="project section" id="project">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Some of my Projects</span>
        <div className="project__container">
            <div className="project__content">
                <p>Pixel Art Maker</p>
                <p>As part of my Udacity Junior Frontend Developer task, I created a Pixel art editor that helps make pixel art easily
                </p>
                <a href="https://github.com/ukadavid"><i className="fab fa-github"></i></a>
                <a href="https://ukadavid.github.io/Pixel-art-maker/"><i className="fas fa-external-link-alt"></i></a>
            </div> 
            <div className="project__content">
                <p>Love Calculator</p>
                <p>This is is the use of Math.random to measure the percentage of love compatibility between two people.
                </p>
                <a href="https://github.com/ukadavid"><i className="fab fa-github"></i></a>
                <a href="https://ukadavid.github.io/Love-Calculator/"><i class="fas fa-external-link-alt"></i></a>
            </div> 
            <div className="project__content">
                <p>Tindog Website</p>
                <p>A website created with bootstrap for finding dogs.
                </p>
                <a href="https://github.com/ukadavid"><i className="fab fa-github"></i></a>
                <a href="https://ukadavid.github.io/tindog-website/"><i className="fas fa-external-link-alt"></i></a>
            </div> 
            <div className="project__content">
                <p>OmniFood Project</p>
                <p>This is a food delivery website that was created with HTML5, CSS3 and JavaScript
                </p>
                <a href="https://github.com/ukadavid"><i className="fab fa-github"></i></a>
                <a href="https://ukadavid.github.io/OmniFood_Site/"><i className="fas fa-external-link-alt"></i></a>
            </div> 
        </div>
    </section> 
    )
} 

export default Project