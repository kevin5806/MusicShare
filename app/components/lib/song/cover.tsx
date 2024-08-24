// Cover Component
"use client";
import Image from "next/image";
import Link from "next/link";

const Cover = ({ onHover, size, src, href }: any) => {

    return (
        <div style={{maxWidth:size, maxHeight:size}} className={`size-full flex flex-shrink-0 justify-center items-center relative rounded overflow-hidden`}>
            <Image className="size-full" src={src} height={size} width={size} alt="album cover" />
            <Link
                className={`size-full absolute flex items-end justify-end p-1 cursor-pointer`}
                onClick={(e) => {
                    e.stopPropagation();
                }}
                href={href}
                target="_blank"
            >
                {onHover && (
                    <div className="bg-neutral-800 p-0.5 rounded">
                        <Image
                            src="/svg/spotify-white.svg"
                            height={size/4}
                            width={size/4}
                            alt="spotify-logo"
                            layout="fixed"
                        />
                    </div>
                )}
            </Link>
        </div>
    );
};

export default Cover;