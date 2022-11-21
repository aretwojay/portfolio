import React, { useState, useRef } from "react";
import { MouseParallax } from "react-just-parallax";
import Earth from "./Earth";
import "./style.css";

const Home = () => {

    const [cursorPos, setCursorPos] = useState([]);
    const [isHover, setIsHover] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const customCursor = (e) => {
        setCursorPos([e.clientX, e.clientY]);
    }

    return (
        <div
            className="space"

            onMouseMove={(e) => customCursor(e)}>
            <div
                id="cursor"
                style={{
                    left: cursorPos[0] + 'px',
                    top: cursorPos[1] + 'px'
                }}
            >
                <div id="circle">
                    <svg className={`${isHover ? "cursor-hover" : "cursor-hover hide"}`} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" strokeDasharray="50, 4" fill="transparent" stroke="#818181" strokeWidth="2" />
                    </svg>
                </div>
            </div>

            {isPressed && <div className="fade-out" />}

            <Earth
                isPressed={isPressed}
                setIsPressed={setIsPressed}
                isHover={isHover}
                setIsHover={setIsHover}
                cursorPos={cursorPos}
            />




        </div >
    )
}

export default Home;