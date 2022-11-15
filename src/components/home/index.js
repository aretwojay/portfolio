import React, { useState } from "react";
import Earth from "./img/earth.png";
import "./style.css";

const Home = () => {

    const [pos, setPos] = useState([]);

    const customCursor = (e) => {
        setPos([e.clientX, e.clientY]);
    }

    return (
        <div className="space" onMouseMove={(e) => customCursor(e)}>
            <div id="cursor" style={{ top: pos[1] + 'px', left: pos[0] + 'px' }} >
                <div id="circle" />
            </div>
            <div className="orbit">
                <div className="earth" style={{ backgroundImage: `url(${Earth})` }} />

            </div>
        </div>
    )
}

export default Home;