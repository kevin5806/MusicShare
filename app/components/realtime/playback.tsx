"use client";

import { setPlaybackVolume } from "@/app/server/spotify";
import Image from "next/image";
import { useEffect, useState } from "react";

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
        <div className="flex flex-col gap-y-3">
            {/* <h3 className="text-2xl font-medium">Listening</h3> */}
            <div className="flex gap-x-5">
                <div className="flex flex-col rounded-lg overflow-hidden">
                    <div className="relative flex items-center">
                        <label className="absolute w-full h-full -rotate-90 flex items-center cursor-pointer opacity-0 hover:opacity-100">
                            <input
                                className="volume w-full h-full rounded-lg bg-transparent appearance-none overflow-hidden cursor-pointer"
                                type="range"
                                value={volume}
                                min={0}
                                max={100}
                                onChange={handleVolumeChange}
                                onMouseUp={handleVolumeSet}
                                onTouchEnd={handleVolumeSet}
                            />
                        </label>

                        <Image
                            draggable="false"
                            src={playback?.item?.album.images[1]?.url}
                            alt="currently-paying-track-cover"
                            height={150}
                            width={150}
                        />
                    </div>

                    <progress
                        className="h-1 w-full time-range"
                        value={playback.progress_ms}
                        max={playback.item?.duration_ms}
                    ></progress>
                </div>
            </div>
            <div>
                <p>{playback?.item?.name}</p>
                <p>
                    By:
                    {playback?.item?.artists?.map((e: any) => ` ${e.name} `)}
                </p>
            </div>
        </div>
    );
};

export default Playback;
