import React from "react";
import "./marquee.css";

const Marquee = ({ text }: any) => {
    const isLongText = text.length > 26;

    return (
        <div className={`marquee ${isLongText ? "marquee--animated" : ""}`}>
            <div className="marquee__inner">
                <span>{text}</span>
            </div>
        </div>
    );
};

export default Marquee;
