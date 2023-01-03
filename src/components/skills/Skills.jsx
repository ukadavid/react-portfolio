import React from "react";
import "./skills.css";
import Stack from "./Stack";



const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Tech and Tools</span>

            <div className="skills__container container grid">
                <Stack />
            </div>
        </section>
    )
}

export default Skills