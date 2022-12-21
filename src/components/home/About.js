import React, { useState, useRef, useEffect } from "react";
import PFP from "./img/pfp.jpg"
import DevIcon from "devicon-react-svg";
import { Github, Linkedin, FileEarmarkPersonFill, EnvelopeAtFill } from 'react-bootstrap-icons';

import CV from "./doc/cv.pdf";

const About = ({ isPressed, setIsPressed, cursorHover, cursorPos }) => {
    const devIconStyle = {
        fill: "white",
        width: "50px",
    };

    const skillIcons = ["react", "javascript", "symfony", "laravel", "php", "mysql"]
    const iconInfos = [
        { url: CV, component: <FileEarmarkPersonFill size={30} className="m-2" /> },
        { url: "https://github.com/aretwojay", component: <Github size={30} className="m-2" /> },
        { url: "https://www.linkedin.com/in/rubenmuya/", component: <Linkedin size={30} className="m-2" /> },
        { url: "mailto:rubenmuya9129@gmail.com", component: <EnvelopeAtFill size={30} className="m-2" /> }
    ]

    const sectionInfos = [
        {
            title: "about me", description: `Hi ! My name is Ruben, I love discover and create new things. Currently in Web@cademie's formation,
        I'm searching an apprenticeship in a company where I can get some experience and knowledge.`},
        {
            title: "skills", description: <div className="d-flex justify-content-evenly">
                {
                    skillIcons.map((icon, i) => {
                        return (
                            <DevIcon style={devIconStyle} icon={icon} />
                        )
                    })
                }
            </div>
        },
        {
            title: "experiences", list: ["February 2022 : Attempt to the Piscine at 42.", "July 2021 : Baccalaureate Degree."]
        },
        {
            title: "need more ?", description: <div className="d-flex justify-content-evenly">{
                iconInfos.map((icon, i) => {
                    return (
                        <a
                            key={i}
                            className="text-reset"
                            onMouseOver={() => cursorHover(true)}
                            onMouseOut={() => cursorHover(false)}
                            href={icon.url}
                        >
                            {icon.component}
                        </a>)
                })
            }
            </div>

        }
    ]

    return (
        <div className="about text-light vw-100">
            <div className="d-flex justify-content-around about-container vw-100">
                <div className="pfp-container mb-5" style={{ Width: "350px" }}>
                    <h1 className="text-uppercase mb-0">
                        Ruben KABANGA MUYA
                    </h1>
                    <p>Web Developper</p>
                    <img className="pfp" src={PFP} />
                </div>

                <div className="skills p-3">
                    {sectionInfos.map((section, i) => {
                        return (
                            <div className="mb-5">
                                <h3 className="text-uppercase">{section.title}</h3>
                                <p>{section.description}</p>
                                {section.list && section.list.map((obj, i) => {
                                    return (
                                        <ul className="experiences p-0">
                                            <li>
                                                {obj}
                                            </li>
                                        </ul>
                                    )
                                })}
                            </div>
                        )
                    })}


                </div>


            </div>
        </div>
    )
}

export default About;