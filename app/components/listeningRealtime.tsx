"use client";

import { useEffect, useState } from "react";
import { getListening } from "../server/spotify";
import Image from "next/image";

export default function ListeningRealtime({ userID }: any) {
    const [listening, setListening]: any = useState({});
    const [time, setTime]: any = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevSeconds: any) => {
                return prevSeconds + 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(async () => {
            setListening(await getListening(userID));
            setTime(0);
        }, 15000);

        return () => clearInterval(interval);
    }, [userID, listening]);

    return (
        <div className="flex flex-col gap-y-3">
            <h3 className="text-2xl font-medium">Listening</h3>
            <div className="flex gap-x-5">
                <div className="flex flex-col rounded-lg overflow-hidden">
                    <Image
                        src={listening.item?.album.images[1]?.url}
                        alt="spotify-currentlyPaying-song"
                        height={150}
                        width={150}
                    />
                    <progress
                        className="h-1 w-full time-range"
                        value={listening.progress_ms}
                        max={listening.item?.duration_ms}
                    ></progress>
                </div>
                <p>{time} s</p>
            </div>
            <div>
                <p>{listening?.item?.name}</p>
                <p>
                    By:
                    {listening?.item?.artists?.map((e: any) => ` ${e.name} `)}
                </p>
            </div>
        </div>
    );
}
