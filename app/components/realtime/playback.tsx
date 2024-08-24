"use client";

import { setPlaybackVolume } from "@/app/server/spotify";
import Image from "next/image";
import { useEffect, useState } from "react";
import Title from "../lib/song/title";
import Artist from "../lib/song/artist";

const Playback = ({ playback, userID }: any) => {
    const [volume, setVolume]: any = useState(0);

    const handleVolumeChange = (e: any) => {
        setVolume(e.target.value);
    };

    const handleVolumeSet = async (e: any) => {
        await setPlaybackVolume(userID, e.target.value);
    };

    useEffect(() => {
        setVolume(playback?.device?.volume_percent as number);
    }, [playback]);

    return (
        <div className="w-full flex flex-col gap-y-3">
            <div className="flex flex-wrap w-[160px] gap-1  ">
                
                    {/* volume progress bar */}
                    <div className={`relative h-[150px] w-1 overflow-hidden rounded-full`}>
                        <div
                            className="absolute bottom-0 left-0 w-full bg-white transition-all duration-300 ease-out rounded-full"
                            style={{ height: `${volume}%` }}
                        ></div>
                    </div>

                    {/* image */}
                    <div className="relative flex items-center rounded-md overflow-hidden">
                        <input
                            className="-rotate-90 flex items-center absolute w-full h-full opacity-0 overflow-hidden cursor-pointer"
                            type="range"
                            value={volume}
                            min={0}
                            max={100}
                            onChange={handleVolumeChange}
                            onMouseUp={handleVolumeSet}
                            onTouchEnd={handleVolumeSet}
                        />

                        <Image
                            className="min-w-[150px] min-h-[150px]"
                            draggable="false"
                            src={playback?.item?.album.images[1]?.url}
                            alt="currently-paying-track-cover"
                            height={150}
                            width={150}
                        />
                    </div>
                
                
                    {/* corner */}
                    <div className="size-1 bg-white rounded-full"></div>

                    {/* time progressa bar */}
                    <div className={`relative w-[150px] h-1 overflow-hidden rounded-full`}>
                        <div
                            className="absolute left-0 top-0 h-full bg-white transition-all duration-300 ease-out rounded-full"
                            style={{
                                width: `${
                                    (playback?.progress_ms /
                                        playback?.item?.duration_ms) *
                                    100
                                }%`,
                            }}
                        ></div>
                    </div>
                
            </div>
            <div>
                <Title title={playback?.item?.name} />
                <Artist artist={playback?.item?.artists} />
            </div>
        </div>
    );
};

export default Playback;
