"use client";

import "@/app/css/flip.css";

import { useEffect, useState } from "react";
import { getPlaybackState, getQueue } from "@/app/server/spotify";

import Image from "next/image";
import Device from "./device";
import Queue from "./queue";
import Playback from "./playback";
import AddQueue from "./addQueue";

const Realtime = ({ userID, sessionID }: any) => {
    const [playback, setPlayback]: any = useState();
    const [sessionPLayback, setSessionPLayback]: any = useState({});
    const [queue, setQueue]: any = useState({});
    const [clock, setClock]: any = useState(0);

    const [flip, setFlip]: any = useState(false);

    useEffect(() => {
        const i1 = setInterval(() => {
            setClock((p: number) => {
                return p + 1;
            });
        }, 1000);

        return () => clearInterval(i1);
    }, []);

    useEffect(() => {
        const run: any = async () => {
            setPlayback(await getPlaybackState(userID));
            setQueue(await getQueue(userID));
            setSessionPLayback(await getPlaybackState(sessionID));
            setClock(0);
        };

        //run();

        const i15 = setInterval(run, 10000);
        return () => clearInterval(i15);
    }, [userID, sessionID]);

    return (
        <>
            {playback ? (
                <div
                    className={`w-fit p-5 bg-neutral-800 rounded transition-transform duration-700 preserve-3d ${
                        flip ? "rotate-x-180" : ""
                    }`}
                >
                    {flip ? (
                        <article className="flex flex-col gap-2 backface-hidden transform rotate-x-180">
                            <AddQueue
                                userID={userID}
                                sessionID={sessionID}
                                sessionPLayback={sessionPLayback}
                            />

                            <button
                                className="w-full flex justify-center"
                                onClick={() => {
                                    setFlip(!flip);
                                }}
                            >
                                <Image
                                    className="-rotate-90"
                                    src="/svg/arrow-white.svg"
                                    alt="back-arrow"
                                    height={24}
                                    width={24}
                                />
                            </button>
                        </article>
                    ) : (
                        <article className="flex flex-shrink flex-col gap-3 backface-hidden">
                            <div className="flex items-center justify-between">
                                <Device device={playback?.device} />
                                <p>{clock}</p>
                            </div>

                            <Playback userID={userID} playback={playback} />

                            <button
                                className="flex items-center gap-2.5"
                                onClick={() => {
                                    setFlip(!flip);
                                }}
                            >   
                            <div className="size-12 flex justify-center items-center">

                                <Image
                                    draggable="false"
                                    src="/svg/queue-white.svg"
                                    alt="add-song"
                                    height={32}
                                    width={32}
                                />
                            </div>
                                <p>Add Song</p>
                            </button>
                            <Queue queue={queue} />
                        </article>
                    )}
                </div>
            ) : (
                <div className="flex items-center gap-3">
                    <Image
                        draggable="false"
                        src="/svg/music-white.svg"
                        alt="music"
                        height={64}
                        width={64}
                    />
                    <p className="text-lg font-medium">No music playing</p>
                </div>
            )}
        </>
    );
};

export default Realtime;
