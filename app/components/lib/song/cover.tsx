// Cover Component
"use client";
import Image from "next/image";
import Link from "next/link";

const Cover = ({ onHover, size, src, href }: any) => {
    return (
        <div
            style={{ maxWidth: size, maxHeight: size }}
            className="relative flex size-full flex-shrink-0 items-center justify-center overflow-hidden rounded"
        >
            <Image
                className="size-full"
                src={src}
                height={size}
                width={size}
                alt="album cover"
            />
            <Link
                className="absolute flex size-full cursor-pointer items-end justify-end p-1"
                onClick={(e) => {
                    e.stopPropagation();
                }}
                href={href}
                target="_blank"
                rel="noreferrer"
            >
                {onHover && (
                    <div className="bg-neutral-800 p-0.5 rounded">
                        <Image
                            src="/svg/spotify-white.svg"
                            height={size / 4}
                            width={size / 4}
                            alt="spotify-logo"
                        />
                    </div>
                )}
            </Link>
        </div>
    );
};

export default Cover;
