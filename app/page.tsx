"use client";

import Image from "next/image";
import { spray } from "./lib/fonts/fonts";
import { auth } from "./server/auth";
import { useState } from "react";

export default function Home() {
    const [loading, setLoading] = useState(false);

    const handleEnter = async () => {
        setLoading(true);
        await auth();
    };
    return (
        <>
            {loading && (
                <div className="flex justify-center items-center w-full h-full z-100 fixed">
                    <div className="loader"></div>
                </div>
            )}

            <main className="flex h-full items-center flex-col gap-y-3">
                <span className={spray.className}>
                    <h1 className="flex items-center h-40 text-3xl text-white">SPOTISHARE</h1>
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
        </>
    );
}
