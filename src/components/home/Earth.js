import React, { useState, useRef, useEffect } from "react";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { Mouse } from 'react-bootstrap-icons';
import Icon from "./Icon";
import "./style.css";

const Earth = ({ isPressed, setIsPressed, cursorHover, cursorPos }) => {

    const ref = useRef(null)

    const [isHover, setIsHover] = useState(false);

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
        <div className="Container">
            {!isPressed ?
                <div className="planet"
                    onClick={() => nextPage()}
                    onMouseOver={() => setIsHover(true)}
                    onMouseOut={() => setIsHover(false)}
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        bottom: "50px",
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
                            <div className="outer-orbit">
                                <div className="middle-orbit">
                                    <div className="inner-orbit">
                                        <div className="earth" />
                                    </div>

                                </div>
                            </div>
                        </MouseParallaxChild>
                    </MouseParallaxContainer>

                    <div className={`${isHover ? "pop-up" : "pop-up hide"} p-3 border-top border-5 text-light`}
                        style={{ left: cursorPos[0] + 50 + "px", top: cursorPos[1] + 30 + "px", }}
                    >
                        <h6 className="text-uppercase">
                            Mes projets
                        </h6>
                        <p className="fst-italic">Retrouvez quelques-uns de mes projets les plus aboutis.</p>
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
                            <Icon
                                cursorHover={cursorHover}
                                url="project-icon.svg"
                                title="my_irc"
                                date="November 2022"
                                description="A socket web app based on Node.JS, React.JS and Express."
                                type="Level 20 Story"
                                difficulty="Hard"
                                details={["1-3 players", "Cooperative"]}
                                iconX={570}
                                iconY={950}
                                bgColor={"#7e4d35"}
                            />
                            <Icon
                                cursorHover={cursorHover}
                                url="raid-icon.svg"
                                title="apprenticeship"
                                date="Coming soon"
                                description="A new experience."
                                type="Level 26 Raid"
                                difficulty="???"
                                details={["+6 Players", "Cooperative", "Monthly Rewards"]}
                                iconX={1200}
                                iconY={750}
                                bgColor={"#7e4d35"}
                            />
                        </div>


                    </MouseParallaxChild>
                    <footer
                        style={{ bottom: "1000px", right: "500px", zIndex: 2 }}
                    >
                        <p
                            onClick={() => goBack()}
                            onMouseOver={() => setIsHover(true)}
                            onMouseOut={() => setIsHover(false)}
                            className="position-fixed text-light"
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