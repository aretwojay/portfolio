import React, { useState } from "react";
import earth from "./img/earth.png";
import "./style.css";

const Earth = ({ isHover, setIsHover, cursorPos }) => {

    const showModal = (e) => {
        setIsHover(true);
    }

    return (
        <div className="planet"
            onMouseOver={(e) => showModal(e)}
            onMouseOut={() => setIsHover(false)}
        >
            <div className="outer-orbit">
                <div className="middle-orbit">
                    <div className="inner-orbit">
                        <div
                            className="earth"
                            style={{ backgroundImage: `url(${earth})` }}
                        />
                    </div>

                </div>
            </div>
            <div className={`${isHover ? "pop-up" : "pop-up hide"} p-3 border-top border-3 text-light`}
                style={{ left: cursorPos[0] + 50 + "px", top: cursorPos[1] + 30 + "px", }}
            >
                <h6 class="text-uppercase">
                    Mes projets
                </h6>
                <p>Retrouvez quelques-uns de mes projets les plus aboutis.</p>
            </div>


        </div >

    )
}

export default Earth;