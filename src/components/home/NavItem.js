import { useState } from "react";

const NavItem = ({ content, activePage, cursorHover, onClick }) => {
    const [isHover, setIsHover] = useState(false);

    const handleHover = () => {
        setIsHover(!isHover);
        cursorHover(!isHover);
    }

    return (
        <span
            onClick={onClick}
            className={content === activePage ? "active" : "text-muted"}
            onMouseOver={() => handleHover()}
            onMouseOut={() => handleHover()}
        >
            {content}
        </span>
    )
}

export default NavItem;