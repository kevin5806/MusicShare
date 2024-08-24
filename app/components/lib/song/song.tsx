"use client";
import { useState } from "react";
import Artist from "./artist";
import Cover from "./cover";
import Title from "./title";

const Song = ({
    size,
    background,
    hover,
    padding,
    title,
    artist,
    src,
    href,
}: any) => {
    const [onHover, setOnHover]: any = useState(false);

    let backgroundClass ="";
    let hoverClass = "";
    let paddingClass ="";

    if (background === true) {
        /* default bg */
        backgroundClass = "bg-neutral-800";
    } else if (background) {
        /* personal bg */
        backgroundClass = background;
    }

    if (hover === true) {
        /* default hover bg */
        hoverClass = "hover:bg-neutral-700";
    } else if (hover) {
        /* personal hover bg */
        hoverClass = `hover:${hover}`;
    }

    if (padding) {
        paddingClass = `p-${padding}`;
    }

    return (
        <div
            className={`${hoverClass} ${backgroundClass} ${paddingClass} max-w-96 gap-2 w-full flex items-center justify-center rounded overflow-hidden`}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
        >
            <Cover onHover={onHover} size={size} src={src} href={href} />

            <div className="flex-grow overflow-hidden">
                <Title title={title} />
                <Artist artist={artist} />
            </div>
        </div>
    );
};

export default Song;
