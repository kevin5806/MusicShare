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

    let backgroundClass = "";
    let hoverClass = "";
    const customPadding =
        typeof padding === "number" ? `${padding * 0.25}rem` : undefined;

    if (background === true) {
        /* default bg */
        backgroundClass = "bg-neutral-800/80";
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

    return (
        <div
            className={`${hoverClass} ${backgroundClass} flex w-full min-w-0 items-center gap-2 overflow-hidden rounded-xl`}
            style={customPadding ? { padding: customPadding } : undefined}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
        >
            <Cover onHover={onHover} size={size} src={src} href={href} />

            <div className="min-w-0 flex-grow overflow-hidden">
                <Title title={title} />
                <Artist artist={artist} />
            </div>
        </div>
    );
};

export default Song;
