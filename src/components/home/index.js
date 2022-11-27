import Map from "./Map";
import NavItem from "./NavItem";
import About from "./About";
import React, { useState, useRef, useEffect } from "react";
import "./style.css";

const Home = () => {
    const [cursorPos, setCursorPos] = useState([]);
    const [isHover, setIsHover] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [activePage, setActivePage] = useState("map");
    const nodeRef = useRef(null);

    const pageOrder = [
        {
            name: "map", component:
                <Map
                    isPressed={isPressed}
                    setIsPressed={setIsPressed}
                    cursorHover={setIsHover}
                    cursorPos={cursorPos}
                />,
        },
        {
            name: "about", component:
                <About
                    isPressed={isPressed}
                    setIsPressed={setIsPressed}
                    cursorHover={setIsHover}
                    cursorPos={cursorPos}
                />,

        }
    ]

    const customCursor = (e) => {
        setCursorPos([e.clientX, e.clientY]);
    }

    const changePage = (name) => {
        setActivePage(name);
        console.log(activePage);
    }

    return (
        <div className="index user-select-none"
            onMouseMove={(e) => customCursor(e)}
        >
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

            <div className={`${isPressed ? "hidden" : ""} navbar px-5 fixed-top text-uppercase text-light vw-100`}>
                {pageOrder.map((page, i) => {
                    return (
                        <NavItem
                            key={i}
                            onClick={() => changePage(page.name)}
                            activePage={activePage}
                            cursorHover={setIsHover}
                            content={page.name}
                        />
                    )

                })}

            </div>

            {pageOrder.map((page, i) => {
                return (
                    <div
                        className={`${page.name === activePage ? "page" : "page hidden"}`}
                        key={i}>
                        {page.component}
                    </div>
                )
            })}

            <footer className="footer">
                Ruben KABANGA MUYA © {new Date().getFullYear()} All Rights Reserved.
            </footer>

        </div >
    )
}

export default Home;