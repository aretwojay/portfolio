import React, { useState, useRef, useEffect } from "react";
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

            {
                isPressed === false && <aside className="sidebar text-light">
                    <h2 className="mb-0 text-uppercase">Solar system</h2>
                    <p className="text-muted">Milky Way Galaxy, Local Group</p>
                </aside >
            }


        </div >
    )
}

export default Map;