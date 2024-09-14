"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { getPlaybackState, getPlaybackHistory } from "../server/spotify";

import "@/app/css/spotify.css";
import Song from "./lib/song/song";
import { getUser } from "../server/user/user";
import { getFriends } from "../server/friend/friend";

const Preview = ({ userID }: any) => {
    const [listening, setListening]: any = useState(null);
    const [history, setHistory]: any = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const listeningData = await getPlaybackState(userID);
            setListening(listeningData);

            const historyData = await getPlaybackHistory(userID, 4);
            setHistory(historyData.items);
        };

        fetchData();
    }, [userID]);

    return (
        <div className="flex flex-col gap-y-5">
            {listening && (
                <div className="flex items-center gap-x-5">
                    {listening?.is_playing ? (
                        <div className="music-loader px-3">
                            <div className="music-loading">
                                <div className="music-load"></div>
                                <div className="music-load"></div>
                                <div className="music-load"></div>
                                <div className="music-load"></div>
                            </div>
                        </div>
                    ) : (
                        <Image
                            className="mx-3"
                            src="/svg/pause-white.svg"
                            alt="spotify-logo"
                            height={28}
                            width={28}
                        />
                    )}

                    <Song
                        size={64}
                        title={listening?.item.name}
                        artist={listening?.item.artists}
                        src={listening?.item.album.images[2].url}
                        href={listening?.item.external_urls.spotify}
                    />
                </div>
            )}

            <div className="flex flex-col gap-y-3">
                {history?.map((e: any) => (
                    <div className="flex items-center gap-3" key={e.track.id}>
                        <Song
                            size={48}
                            title={e?.track.name}
                            artist={e?.track.artists}
                            src={e?.track.album.images[2].url}
                            href={e?.track.external_urls.spotify}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const Friend = ({ userID }: any) => {
    const [user, setUser]: any = useState();

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await getUser(userID);
            setUser(userData);
        };

        fetchUser();
    }, [userID]);

    const spotifyUser: any = user?.spotifyUser;

    return (
        <div className="flex flex-col gap-y-3 p-5 rounded w-fit bg-neutral-800">
            <div className="flex items-center gap-5">
                <Image
                    className="rounded-full"
                    draggable="false"
                    src={spotifyUser?.images[0].url}
                    alt="spotify-currentlyPlaying-song"
                    height={64}
                    width={64}
                />
                <h3 className="text-lg font-semibold">
                    {spotifyUser?.display_name}
                </h3>
            </div>
            <div>
                <Preview userID={userID} />
            </div>
        </div>
    );
};

const Friends = ({ userID }: any) => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
            const friendsData: any = await getFriends(userID);
            setFriends(friendsData);
        };

        fetchFriends();
    }, [userID]);

    return (
        <div className="m-5 flex">
            <div className="flex flex-wrap gap-3">
                {friends?.map((e: any) => (
                    <Friend key={e.friendID} userID={e.friendID} />
                ))}
            </div>
        </div>
    );
};
