"use client";

import Image from "next/image";
import { spray } from "./lib/fonts/fonts";
import { auth } from "./server/auth";
import { useState } from "react";
import Link from "next/link";

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

            <main className="flex h-full items-center justify-center flex-col gap-8">
                <span className={spray.className}>
                    <h1 className="flex items-center justify-center text-3xl text-white">
                        <span className="pt-8">SPOTISHARE</span>
                    </h1>
                </span>
                <div className="flex flex-col gap-2 items-center">
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
                    <Link href={"/legal"} className="flex gap-1">
                        <Image
                            src="/svg/lock-color.svg"
                            alt="lock-icon"
                            height={16}
                            width={16}
                        />
                        <p>Privacy & Cookies Policy</p>
                    </Link>
                </div>
            </main>
        </>
    );
}
