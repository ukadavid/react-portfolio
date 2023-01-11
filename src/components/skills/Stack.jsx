import React from "react";
import "./skills.css";
import htmlicon from "../../assets/html.png";
import cssicon from "../../assets/css.png";
import reacticon from "../../assets/react.png";
import sassicon from "../../assets/sass.png";
import reduxicon from "../../assets/redux.png";
import giticon from "../../assets/git.png";
import figmaicon from "../../assets/figma.png";
import bootstrapicon from "../../assets/bootstrap.png";
import githubicon from "../../assets/github.png";
import jsicon from "../../assets/js.png";
import tailwindicon from "../../assets/tailwind-css.png";


const Stack = () => {
    return (
        <div className="tech__tools">
            <div className="tools">
                <img src={htmlicon} alt="" />
                <p>HTML5</p>
            </div>

            <div className="tools">
                <img src={cssicon} alt="" />
                <p>CSS3</p>
            </div>

            <div className="tools">
                <img src={sassicon} alt="" />
                <p>SASS</p>
            </div>

            <div className="tools">
                <img src={bootstrapicon} alt="" />
                <p>Bootstrap</p>
            </div>

            <div className="tools">
                <img className="tools__color" src={tailwindicon} alt="" />
                <p>Tailwind</p>
            </div>

            <div className="tools">
                <img src={jsicon} alt="" />
                <p>JavaScript</p>
            </div>

            <div className="tools">
                <img src={reacticon} alt="" />
                <p>React</p>
            </div>

            <div className="tools">
                <img src={reduxicon} alt="" />
                <p>Redux</p>
            </div>

            <div className="tools ">
                <img className="tools__color" src={githubicon} alt="" />
                <p>GitHub</p>
            </div>

            <div className="tools">
                <img src={giticon} alt="" />
                <p>Git</p>
            </div>

            <div className="tools">
                <img src={figmaicon} alt="" />
                <p>Figma</p>
            </div>
        </div>
    )
}


export default Stack;