import React, { useState, useRef, useEffect } from "react";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { ArrowLeftSquareFill } from 'react-bootstrap-icons';
import Icon from "./Icon";
import Map from "./img/map.jpg";
import "./style.css";

const Earth = ({ isPressed, setIsPressed, cursorHover, cursorPos }) => {

    const ref = useRef(null)

    const [isHover, setIsHover] = useState(false);

    const projectInfos = [
        {
            url: "project-icon.svg",
            urlRedirect: "https://stackblitz.com/edit/my-irc",
            title: "my_irc",
            date: "November 2022",
            description: "A socket web app based on Node.JS, React.JS and Express.",
            type: "Level 20 Strike",
            difficulty: "Hard",
            details: ["1-3 players", "Cooperative"],
            iconX: 570,
            iconY: 950,
            bgColor: "#7e4d35",
        },
        {
            url: "raid-icon.svg",
            title: "connect-4",
            date: "July 2022",
            description: "The Connect-4 game adapted in Javascript.",
            type: "Level 9 Story",
            difficulty: "Easy",
            details: ["1 Player", "Exploration"],
            iconX: 1200,
            iconY: 750,
            bgColor: "#7e4d35"
        }
    ]

    const nextPage = () => {
        setIsPressed(true);
        setIsHover(false);
    }

    const goBack = () => {
        setIsPressed(false);
        setIsHover(false);
    }

    useEffect(() => {
        cursorHover(isHover)
    }, [isHover]);

    return (
        <div className="section text-light">
            {!isPressed ?
                <div className="planet"
                    onClick={() => nextPage()}
                    onMouseOver={() => setIsHover(true)}
                    onMouseOut={() => setIsHover(false)}
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        bottom: "150px",
                        left: 0,
                        right: 0,
                    }}
                >


                    <MouseParallaxContainer
                        useWindowMouseEvents={true}
                        containerStyle={{ overflow: "initial" }}
                        globalFactorX={0.2}
                        globalFactorY={0.2}
                    >
                        <MouseParallaxChild factorX={0.3} factorY={0.5}>
                            <h2 className="planet-title text-center">PROJECTS</h2>
                            <div className="outer-orbit">
                                <div className="middle-orbit">
                                    <div className="inner-orbit">
                                        <div className="earth" />
                                    </div>

                                </div>
                            </div>
                        </MouseParallaxChild>
                    </MouseParallaxContainer>

                    <div className={`${isHover ? "pop-up" : "pop-up hide"} p-3 border-top border-5`}
                        style={{ left: cursorPos[0] + 50 + "px", top: cursorPos[1] + 30 + "px", }}
                    >
                        <h6 className="text-uppercase">
                            PROJECTS
                        </h6>
                        <p className="fst-italic">Discover my most succeeded projects.</p>
                    </div>


                </div >
                :


                <MouseParallaxContainer
                    useWindowMouseEvents={true}
                    containerStyle={{ overflow: "initial" }}
                    globalFactorX={0.2}
                    globalFactorY={0.2}
                >
                    <MouseParallaxChild factorX={0.3} factorY={0.5}>

                        <div
                            ref={ref}
                            className="map position-relative"
                        >
                            {
                                projectInfos.map((project, i) => {
                                    return (
                                        <Icon
                                            key={i}
                                            cursorHover={cursorHover}
                                            project={project}
                                        />
                                    )
                                })
                            }

                        </div>


                    </MouseParallaxChild>
                    <footer
                        className="p-2 d-flex align-items-center position-fixed"
                        style={{ top: 0, left: 0 }}
                    >
                        <ArrowLeftSquareFill color="white" />
                        <p
                            className="ms-1 mb-0"
                            onClick={() => goBack()}
                            onMouseOver={() => setIsHover(true)}
                            onMouseOut={() => setIsHover(false)}
                        >
                            Go Back
                        </p>
                    </footer>

                </MouseParallaxContainer>


            }
        </div >


    )
}

export default Earth;