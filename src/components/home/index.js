import Map from "./Map";
import NavItem from "./NavItem";
import Profile from "./Profile";
import React, { useState, useRef, useEffect } from "react";
import { Github, Linkedin } from 'react-bootstrap-icons';
import { CSSTransition } from 'react-transition-group';
import "./style.css";

const Home = () => {
    const [cursorPos, setCursorPos] = useState([]);
    const [isHover, setIsHover] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [isFadeVisible, setIsFadeVisible] = useState(false);
    const [activePage, setActivePage] = useState("map");
    const nodeRef = useRef(null);

    const iconInfos = [
        { url: "https://github.com/aretwojay", component: <Github size={30} className="m-2" /> },
        { url: "https://www.linkedin.com/in/ruben-kabanga-muya-8ba864209/", component: <Linkedin size={30} className="m-2" /> },
    ]

    const order = [
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
            name: "profile", component:
                <Profile
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

    useEffect(() => {
        setIsFadeVisible(true);
        setTimeout(() => {
            setIsFadeVisible(false);
        }, 100);
    }, [isPressed])

    return (
        <div className="Container"
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


            <CSSTransition
                classNames="fade"
                nodeRef={nodeRef}
                in={isFadeVisible}
                timeout={300}
                unmountOnExit
            >
                <div ref={nodeRef} className="fade-out" />
            </CSSTransition>

            {
                !isPressed &&
                <div className="navbar px-5 fixed-top text-uppercase text-light vw-100">
                    {["profile", "map", "settings"].map((val, i) => {
                        return (
                            <NavItem
                                key={i}
                                onClick={() => changePage(val)}
                                activePage={activePage}
                                cursorHover={setIsHover}
                                content={val}
                            />
                        )

                    })}

                </div>
            }

            {order.map((page, i) => {
                return (
                    <div
                        className={`${page.name === activePage ? "page" : "page hidden"}`}
                        key={i}>
                        {page.component}
                    </div>
                )
            })}



            {
                activePage === "map" && isPressed === false && <aside className="sidebar text-light text-uppercase">
                    {iconInfos.map((icon, i) => {
                        return (
                            <a
                                key={i}
                                className="text-reset"
                                onMouseOver={() => setIsHover(true)}
                                onMouseOut={() => setIsHover(false)}
                                href={icon.url}
                            >
                                {icon.component}
                            </a>)
                    })}
                    <h2>Solar system</h2>
                </aside >
            }


        </div >
    )
}

export default Home;