"use client";
import Image from "next/image";
import Link from "next/link";

const Cover = ({ onHover, size, src, href }: any) => {
    return (
        <div className="relative flex items-center rounded overflow-hidden">
            <Image src={src} height={size} width={size} alt="album cover" />
            {onHover && (
                <Link
                    href={href}
                    target="blank"
                    className="absolute w-full h-full flex items-end justify-end p-1 cursor-pointer"
                >
                    <Image
                        src="/svg/spotify-white.svg"
                        height={size / 4}
                        width={size / 4}
                        alt="spotify-logo"
                    />
                </Link>
            )}
        </div>
    );
};

export default Cover;
