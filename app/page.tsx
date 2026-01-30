"use client";

import Image from "next/image";
import { auth } from "./server/auth";
import Link from "next/link";
import { useFormStatus } from "react-dom";

const Footer = () => (
    <div className="fixed left-0 bottom-0 w-full flex justify-center p-5">
        <Link
            href={"https://github.com/kevin5806/MusicShare.git"}
            target="_blank"
            rel="noreferrer"
        >
            <Image
                src="/svg/github-white.svg"
                alt="github-logo"
                height={24}
                width={24}
            />
        </Link>
    </div>
);

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <>
            {pending && (
                <div className="flex justify-center items-center w-full h-full z-[100] fixed">
                    <div className="loader"></div>
                </div>
            )}
            <button
                type="submit"
                className="bg-green-500 flex justify-center items-center gap-x-2 p-3 rounded-md disabled:opacity-70"
                disabled={pending}
            >
                <Image
                    src="/svg/spotify-white.svg"
                    alt="spotify-logo"
                    height={30}
                    width={30}
                />
                <p>{pending ? "Connecting..." : "Continue with Spotify"}</p>
            </button>
        </>
    );
};

export default function Home() {
    return (
        <main className="flex h-full items-center justify-center flex-col gap-8">
            <Image
                src="/svg/app-logo.svg"
                alt="musicshare-logo"
                height={256}
                width={256}
            />
            <div className="flex flex-col gap-2 items-center">
                <form action={auth}>
                    <SubmitButton />
                </form>
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
            <Footer />
        </main>
    );
}
