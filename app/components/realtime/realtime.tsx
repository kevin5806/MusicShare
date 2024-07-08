"use client";

import { useEffect, useState } from "react";
import Device from "./device";
import Listening from "./listening";
import { getPlaybackState, getQueue } from "@/app/server/spotify";
import Queue from "./queue";
import AddQueue from "./addQueue";

const Realtime = ({ userID, sessionID }: any) => {
    const [listening, setListening]: any = useState({});
    const [queue, setQueue]: any = useState({});
    const [clock, setClock]: any = useState(0);

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
            setListening(await getPlaybackState(userID));
            setQueue(await getQueue(userID));
            setClock(0);
        };

        //run();

        const i15 = setInterval(run, 15000);
        return () => clearInterval(i15);
    }, [userID]);

    return (
        <div className="bg-neutral-800">
            <p>{clock}</p>
            <Device device={listening.device} />
            <Listening userID={userID} listening={listening} />
            <Queue queue={queue} userID={userID} sessionID={sessionID} />
        </div>
    );
};

export default Realtime;
