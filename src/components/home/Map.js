import React, { useState, useRef, useEffect } from "react";
import { Github, Linkedin } from 'react-bootstrap-icons';
import { CSSTransition } from 'react-transition-group';
import Earth from "./Earth";

const Map = ({ isPressed, setIsPressed, cursorHover, cursorPos }) => {

    return (
        <div className="space">

            < Earth
                isPressed={isPressed}
                setIsPressed={setIsPressed}
                cursorHover={cursorHover}
                cursorPos={cursorPos}
            />




        </div >
    )
}

export default Map;