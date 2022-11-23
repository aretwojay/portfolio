import React, { useState, useRef, useEffect } from "react";
import { MouseParallax } from "react-just-parallax";
import { Github, Linkedin } from 'react-bootstrap-icons';
import Earth from "./Earth";
import "./style.css";

const Home = () => {

    const [cursorPos, setCursorPos] = useState([]);
    const [isHover, setIsHover] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [isFadeVisible, setIsFadeVisible] = useState(false);

    const customCursor = (e) => {
        setCursorPos([e.clientX, e.clientY]);
    }

    useEffect(() => {
        setIsFadeVisible(true);
        setTimeout(() => {
            setIsFadeVisible(false);
        }, 1500);
    }, [isPressed])

    return (
        <div
            className="space"
            onMouseMove={(e) => customCursor(e)}>
            {isFadeVisible && <div className="fade-out" />}

            <div
                className={`${isHover ? "cursor hover" : "cursor"}`}
                style={{
                    left: cursorPos[0] + 'px',
                    top: cursorPos[1] + 'px'
                }}
            >
                <div className="circle">
                    <svg className={`${isHover ? "cursor-hover" : "cursor-hover hide"}`} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" strokeDasharray="50, 4" fill="transparent" stroke="#818181" strokeWidth="2" />
                    </svg>
                </div>
            </div>

            {
                !isPressed &&
                <div className="navbar text-light">
                    <span>Main Menu</span>
                </div>
            }



            <Earth
                isPressed={isPressed}
                setIsPressed={setIsPressed}
                cursorHover={setIsHover}
                cursorPos={cursorPos}
            />

            <aside className="sidebar text-light text-uppercase">
                <a className="text-reset"
                    onMouseOver={() => setIsHover(true)}
                    onMouseOut={() => setIsHover(false)}
                    href="https://github.com/aretwojay"
                >
                    <Github className="m-2" size={30} />
                </a>
                <a className="text-reset"
                    onMouseOver={() => setIsHover(true)}
                    onMouseOut={() => setIsHover(false)}
                    href="https://www.linkedin.com/in/ruben-kabanga-muya-8ba864209/"
                >
                    <Linkedin className="m-2" size={30} />
                </a>
                <h2>Solar system</h2>
            </aside >




        </div >
    )
}

export default Home;