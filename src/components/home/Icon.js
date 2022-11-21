import React, { useState, useRef } from "react";

const Icon = ({ url, x, y }) => {

    return (
        <a href="#">
            <img
                className="position-absolute rounded-circle icon"
                src={require(`./img/${url}`)}
                style={{ top: x, left: y, backgroundColor: "white", filter: "invert(1)" }}
            />
        </a>

    )
}
export default Icon;