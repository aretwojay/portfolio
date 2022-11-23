import React, { useState, useRef, useEffect } from "react";

const Icon = ({
    cursorHover,
    url,
    title,
    date,
    description,
    type,
    difficulty,
    details,
    iconX,
    iconY,
    bgColor,
}) => {

    const [isHover, setIsHover] = useState(false);

    const handleHover = () => {
        setIsHover(!isHover);
        cursorHover(!isHover);
    }

    return (
        <div>
            {/* pop up when hover the icon */}
            <div className={`${isHover ? "pop-up " : "pop-up hide"} p-3 pt-2 text-light`}
                style={{ left: iconX + 100 + "px", top: iconY - 100 + "px" }}
            >
                <div className="d-flex align-items-center">
                    <img
                        className="icon"
                        src={require(`./img/${url}`)}
                        style={{ left: iconX, top: iconY, backgroundColor: "white", filter: "invert(1)" }}
                    />
                    <div className="ps-2">
                        <h6 className="text-uppercase mb-0">
                            {title}
                        </h6>
                        <span>{date}</span>
                    </div>

                </div>

                <div className="d-flex justify-content-between">
                    <span>{type}</span>
                    <span className="text-muted">{difficulty}</span>
                </div>

                <p className="fst-italic">{description}</p>

                <ul className="project-details ps-2 mb-0">
                    {details && details.map((detail, i) => {
                        return (
                            <li key={i}>{detail}</li>
                        )
                    })}
                </ul>
            </div>
            {/* icon displayed on the map */}
            <div className={`${isHover ? "icon-container hover" : "icon-container"} position-absolute rounded-circle`} style={{ left: iconX, top: iconY }}>
                <div className="rounded-circle space-around"

                    style={{ backgroundColor: bgColor }}>

                    <img
                        className="icon"
                        onMouseOver={() => handleHover()}
                        onMouseOut={() => handleHover()}
                        src={require(`./img/${url}`)}
                    />
                </div>
            </div>


        </div >




    )
}
export default Icon;