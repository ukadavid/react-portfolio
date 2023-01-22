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
                <a href="https://github.com/ukadavid" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="https://ukadavid.github.io/Pixel-art-maker/" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div> 
            <div className="project__content">
                <p>Love Calculator</p>
                <p>This is is the use of Math.random to measure the percentage of love compatibility between two people.
                </p>
                <a href="https://github.com/ukadavid" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="https://ukadavid.github.io/Love-Calculator/" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div> 
            <div className="project__content">
                <p>Tindog Website</p>
                <p>A website created with bootstrap for finding dogs.
                </p>
                <a href="https://github.com/ukadavid" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="https://ukadavid.github.io/tindog-website/" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div> 
            <div className="project__content">
                <p>OmniFood Project</p>
                <p>This is a food delivery website that was created with HTML5, CSS3 and JavaScript
                </p>
                <a href="https://github.com/ukadavid" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="https://ukadavid.github.io/OmniFood_Site/" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div> 
        </div>
    </section> 
    )
} 

export default Project