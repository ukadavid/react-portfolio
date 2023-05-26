import React from "react";
import "./project.css";

const Project = () => {
    return(
        <section className="project section" id="project">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Some of my Projects</span>
        <div className="project__container">
            <div className="project__content">
                <p>Portfolio Website</p>
                <p>A professional portfolio website highlighting my skills and projects as a Full Stack Developer.
                </p>
         
                <a href="https://github.com/ukadavid/react-portfolio" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="https://react-portfolio-git-main-ukadavid.vercel.app/" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div> 
            <div className="project__content">
                <p>ZeeFlix</p>
                <p>A full-stack movie rating platform that performs crud operations, and role-based access control (RBAC). Built with Express, EJS, TypeScript, SQLite3, Docker, 
                </p>
                <a href="https://github.com/ukadavid" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="https://zeeflix-mongo.onrender.com/" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div> 
            <div className="project__content">
                <p>GitHub Profile</p>
                <p>My GitHub Profile replica with GraphQL, HTML, CSS, and JavaScript
                </p>
                <a href="https://github.com/ukadavid" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="https://github-graphql-frontend-query.netlify.app/" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div> 
            <div className="project__content">
                <p>OmniFood Project</p>
                <p>This is a food delivery website that was created with HTML5, CSS3 and JavaScript
                </p>
                <a href="https://github.com/ukadavid" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="https://webappfood.netlify.app/" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div> 
        </div>
    </section> 
    )
} 

export default Project