import React, { useState, useRef, useEffect } from "react";
import { Github, Linkedin } from 'react-bootstrap-icons';
import { CSSTransition } from 'react-transition-group';
import Earth from "./Earth";

const Map = ({ isPressed, setIsPressed, cursorHover, cursorPos }) => {

    const iconInfos = [
        { url: "https://github.com/aretwojay", component: <Github size={30} className="m-2" /> },
        { url: "https://www.linkedin.com/in/ruben-kabanga-muya-8ba864209/", component: <Linkedin size={30} className="m-2" /> },
    ]

    return (
        <div className="space">

            < Earth
                isPressed={isPressed}
                setIsPressed={setIsPressed}
                cursorHover={cursorHover}
                cursorPos={cursorPos}
            />

            {
                isPressed === false && <aside className="sidebar text-light">
                    {iconInfos.map((icon, i) => {
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
                    })}
                    <h2 className="mb-0 text-uppercase">Solar system</h2>
                    <p className="text-muted">Milky Way Galaxy, Local Group</p>
                </aside >
            }


        </div >
    )
}

export default Map;