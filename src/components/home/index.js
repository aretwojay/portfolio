import React, { useState, useRef } from "react";
import Earth from "./Earth";
import "./style.css";

const Home = () => {

    const [pos, setPos] = useState([]);
    const [i, setI] = useState(0);
    const [isHover, setIsHover] = useState(false);

    const customCursor = (e) => {
        setPos([e.clientX, e.clientY]);
    }

    return (
        <div
            className="space pt-5"

            onMouseMove={(e) => customCursor(e)}>
            <div
                id="cursor"
                style={{
                    backgroundColor: i,
                    left: pos[0] + 'px',
                    top: pos[1] + 'px'
                }}
            >
                <div id="circle">
                    <svg className={`${isHover ? "cursor-hover" : "cursor-hover hide"}`} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke-dasharray="50, 4" fill="transparent" stroke="#818181" stroke-width="2" />
                    </svg>
                </div>
            </div>

            <Earth
                isHover={isHover}
                setIsHover={setIsHover}
                cursorPos={pos}
            />



        </div >
    )
}

export default Home;