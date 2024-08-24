import React, { useRef, useState, useEffect } from "react";
import "./marquee.css";

interface MarqueeProps {
    text: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const [shouldScroll, setShouldScroll] = useState<boolean>(false);
    const [hover, setHover] = useState<boolean>(false);

    useEffect(() => {
        const checkScroll = () => {
            if (containerRef.current && textRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const textWidth = textRef.current.scrollWidth;

                setShouldScroll(textWidth > containerWidth - 1);
            }
        };

        checkScroll();
        window.addEventListener("resize", checkScroll);

        return () => {
            window.removeEventListener("resize", checkScroll);
        };
    }, [text]);

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`w-full relative overflow-hidden whitespace-nowrap box-border ${
                shouldScroll ? "cursor-pointer" : ""
            }`}
        >
            <p
                ref={textRef}
                className={`inline-block transition-transform ease-linear${
                    shouldScroll && hover ? "transform marquee-animation" : ""
                }`}
            >
                {text}
            </p>
        </div>
    );
};

export default Marquee;