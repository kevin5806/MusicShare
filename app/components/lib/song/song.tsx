"use client";
import { useState } from "react";
import Artist from "./artist";
import Cover from "./cover";
import Title from "./title";

/* 
        () = comment
        " "; = type
        [] = possible form

        size: Number; ("image size, component size")
        background: String; [no, default, #color] ("dose the component have a background")
        title: String; ("song name")
        artist: String[]; ("song artists")
        src: String; ("image src")
        hrfe: String; ("href link")
    */

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

    let backgroundClass;
    let hoverClass;
    let paddingClass;

    if (background === true) {
        /* default bg */
        backgroundClass = "bg-neutral-800";
    } else if (background) {
        /* personal bg */
        backgroundClass = background;
    }

    if (hover === true) {
        /* default bg */
        hoverClass = "hover:bg-neutral-700";
    } else if (hover) {
        /* personal bg */
        hoverClass = `hover:${hover}`;
    }

    if (padding) {
        paddingClass = `p-${padding}`;
    }

    return (
        <div
            className={`${hoverClass} ${backgroundClass} ${paddingClass} w-fit flex items-center transition rounded overflow-hidden`}
            onMouseEnter={() => {
                setOnHover(true);
            }}
            onMouseLeave={() => {
                setOnHover(false);
            }}
        >
            <Cover onHover={onHover} size={size} src={src} href={href} />

            <div className="mx-3">
                <Title title={title} />
                <Artist artist={artist} />
            </div>
        </div>
    );
};

export default Song;
