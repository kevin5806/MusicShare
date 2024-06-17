"use client";

import Image from "next/image";
import { urbanjungle } from "./lib/fonts/fonts";
import { enter } from "./server/enter";

export default function Home() {
    const handleEnter = async () => await enter();
    return (
        <main className="flex justify-center items-center flex-col gap-y-20">
            <span className={urbanjungle.className}>
                <h1 className="text-9xl text-green-400">SpotiShare</h1>
            </span>
            <button
                className="bg-green-500 flex justify-center items-center gap-x-2 p-3 rounded-md"
                onClick={handleEnter}
            >
                <Image
                    src="/svg/spotify-white.svg"
                    alt="spotify-logo"
                    height={30}
                    width={30}
                />
                <p>Continue with Spotify</p>
            </button>
        </main>
    );
}
