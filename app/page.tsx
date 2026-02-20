"use client";

import Image from "next/image";
import { rage, spray, unbounded } from "./lib/fonts/fonts";
import { auth } from "./server/auth";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "./components/lib/navbar/navbar";

const highlights = [
    {
        title: "Live Realtime",
        description: "Guarda in tempo reale cosa stanno ascoltando i tuoi amici.",
    },
    {
        title: "Shared Queue",
        description: "Aggiungi brani alla coda direttamente dai profili connessi.",
    },
    {
        title: "History Feed",
        description: "Riscopri i replay e le vibe recenti della tua cerchia.",
    },
];

const Footer = () => (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
        <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-300/80">
            Made for shared listening moments
        </p>
        <Link
            href={"https://github.com/kevin5806/MusicShare.git"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-200 transition hover:border-emerald-300/50 hover:bg-emerald-400/10"
        >
            <Image
                src="/svg/github-white.svg"
                alt="github-logo"
                height={16}
                width={16}
            />
            <span>Source</span>
        </Link>
    </footer>
);

export default function Home() {
    const [loading, setLoading] = useState(false);
    const handleEnter = async () => {
        setLoading(true);
        await auth();
    };
    return (
        <>
            {loading && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 backdrop-blur-sm">
                    <div className="loader"></div>
                </div>
            )}

            <main className="relative min-h-screen overflow-x-hidden pb-8">
                <Navbar />
                <div className="relative flex min-h-[calc(100vh-92px)] items-center px-4 py-4 sm:px-8">
                    <div className="landing-orb landing-orb-left"></div>
                    <div className="landing-orb landing-orb-right"></div>
                    <div className="landing-noise"></div>

                    <section className="panel-glass relative mx-auto flex w-full max-w-6xl flex-col gap-8 overflow-hidden rounded-[2rem] p-6 sm:p-10">
                        <header className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/svg/app-logo2.svg"
                                    alt="musicshare-logo"
                                    height={56}
                                    width={56}
                                />
                                <p className="text-xs uppercase tracking-[0.32em] text-neutral-300/80">
                                    Music Social Platform
                                </p>
                            </div>
                        </header>

                        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                            <article className="flex flex-col gap-5">
                                <p
                                    className={`${rage.className} text-3xl text-emerald-300/85`}
                                >
                                    Bring your listening circle together
                                </p>

                                <h1
                                    className={`${spray.className} text-6xl leading-[0.9] sm:text-7xl lg:text-8xl`}
                                >
                                    MusicShare
                                </h1>

                                <p
                                    className={`${unbounded.className} max-w-2xl text-sm leading-relaxed text-neutral-200/90 sm:text-base`}
                                >
                                    Accedi con Spotify, segui cosa stanno
                                    suonando i tuoi amici e trasforma ogni
                                    sessione in una scoperta condivisa.
                                </p>

                                <div className="grid gap-3 sm:grid-cols-3">
                                    {highlights.map((item) => (
                                        <div
                                            key={item.title}
                                            className="rounded-2xl border border-white/10 bg-black/25 p-4"
                                        >
                                            <p className="mb-1 text-xs uppercase tracking-[0.22em] text-emerald-300/85">
                                                {item.title}
                                            </p>
                                            <p className="text-sm text-neutral-200/85">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </article>

                            <aside className="panel-glass flex flex-col gap-4 rounded-3xl p-6">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/svg/spotify-white.svg"
                                        alt="spotify-logo"
                                        height={26}
                                        width={26}
                                    />
                                    <p
                                        className={`${unbounded.className} text-xs uppercase tracking-[0.22em] text-neutral-200`}
                                    >
                                        Secure Spotify Login
                                    </p>
                                </div>

                                <p className="text-sm text-neutral-200/90">
                                    Ti basta un click per entrare nella tua
                                    dashboard musicale.
                                </p>

                                <Button
                                    className="cta-shine group h-12 rounded-xl bg-[#1db954] text-sm font-semibold text-[#031208] hover:bg-[#1ed760]"
                                    onClick={handleEnter}
                                    disabled={loading}
                                    aria-busy={loading}
                                >
                                    <Image
                                        src="/svg/spotify-white.svg"
                                        alt="spotify-icon"
                                        height={20}
                                        width={20}
                                        className="mr-1 transition group-hover:scale-110"
                                    />
                                    {loading
                                        ? "Connecting..."
                                        : "Continue with Spotify"}
                                </Button>

                                <Link
                                    href={"/legal"}
                                    className="inline-flex w-fit items-center gap-2 text-sm text-neutral-200 no-underline transition hover:text-emerald-300"
                                >
                                    <Image
                                        src="/svg/lock-color.svg"
                                        alt="lock-icon"
                                        height={16}
                                        width={16}
                                    />
                                    <span>Privacy & Cookies Policy</span>
                                </Link>
                            </aside>
                        </div>

                        <Footer />
                    </section>
                </div>
            </main>
        </>
    );
};
