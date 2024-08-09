"use client";

import React, { useState } from "react";
import "./tooltip.css";

const Tooltip = ({ children, text }: any) => {
    const [show, setShow] = useState(false);

    return (
        <div
            className="tooltip-wrapper"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {children}
            {show && <div className="tooltip">{text}</div>}
        </div>
    );
};

export default Tooltip;
