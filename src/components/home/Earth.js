import React, { useState, useRef, useEffect } from "react";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Icon from "./Icon";
import "./style.css";

const Earth = ({ isPressed, setIsPressed, isHover, setIsHover, cursorPos }) => {

    const ref = useRef(null)
    const [mapSize, setMapSize] = useState([]);

    const showModal = () => {
        setIsHover(true);
    }

    const nextPage = () => {
        setIsPressed(true);
        setIsHover(false);
    }

    useEffect(() => {
        if (isPressed) {
            ref.current.scrollIntoView({
                block: 'center',
            });
        }
    })



    return (
        <div className="Container">
            {!isPressed ?
                <div className="planet pt-5"
                    onClick={() => nextPage()}
                    onMouseOver={(e) => showModal()}
                    onMouseOut={() => setIsHover(false)}
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

                    <div className={`${isHover ? "pop-up" : "pop-up hide"} p-3 border-top border-3 text-light`}
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

                        <img
                            ref={ref}
                            className="map"
                        />
                        <Icon
                            url="project-icon.svg"
                            x="500px"
                            y="400px"
                        />

                    </MouseParallaxChild>
                </MouseParallaxContainer>


            }
        </div >


    )
}

export default Earth;