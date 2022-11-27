import React, { useState, useRef, useEffect } from "react";

const Icon = ({ cursorHover, project }) => {

    const [isHover, setIsHover] = useState(false);

    const handleHover = () => {
        setIsHover(!isHover);
        cursorHover(!isHover);
    }

    return (
        <div>
            {/* pop up when hover the icon */}
            <div className={`${isHover ? "pop-up " : "pop-up hide"} p-3 pt-2 text-light`}
                style={{ left: project.iconX + 100 + "px", top: project.iconY - 100 + "px" }}
            >
                <div className="d-flex align-items-center">
                    <img
                        className="icon"
                        src={require(`./img/${project.url}`)}
                        style={{ left: project.iconX, top: project.iconY, backgroundColor: "white", filter: "invert(1)" }}
                    />
                    <div className="ps-2">
                        <h6 className="text-uppercase mb-0">
                            {project.title}
                        </h6>
                        <span>{project.date}</span>
                    </div>

                </div>

                <div className="d-flex justify-content-between">
                    <span>{project.type}</span>
                    <span className="text-muted">{project.difficulty}</span>
                </div>

                <p className="fst-italic">{project.description}</p>

                <ul className="project-details ps-2 mb-0">
                    {project.details && project.details.map((detail, i) => {
                        return (
                            <li key={i}>{detail}</li>
                        )
                    })}
                </ul>
            </div>
            {/* icon displayed on the map */}
            <div className={`${isHover ? "icon-container hover" : "icon-container"} position-absolute rounded-circle`} style={{ left: project.iconX, top: project.iconY }}>
                <div className="rounded-circle space-around"

                    style={{ backgroundColor: project.bgColor }}>

                    <img
                        className="icon"
                        onMouseOver={() => handleHover()}
                        onMouseOut={() => handleHover()}
                        src={require(`./img/${project.url}`)}
                    />
                </div>
            </div>

            {/* <div className="h-100 w-100 text-light position-absolute pointer-events-none">
                <p>Hello</p>
            </div> */}


        </div >




    )
}
export default Icon;