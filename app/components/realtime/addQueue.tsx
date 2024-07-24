"use client";

import { addQueue, getSearchTrack } from "@/app/server/spotify";
import debounce from "debounce";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import Marquee from "../lib/marquee/marquee";

/* All of the code in here is refered to the user visiting the page */

const AddQueue = ({ userID, sessionID, sessionPLayback }: any) => {
    const [searchResult, setSearchResult] = useState([]);

    const handleSearchInput = async (e: any) => {
        if (e.target.value === "" || e.target.value === " ")
            return setSearchResult([]);

        const tracks = await getSearchTrack(sessionID, e.target.value);

        return setSearchResult(tracks);
    };

    const handleTrackClick = async (uri: string) => {
        await addQueue(userID, uri);
        return toast.success("Track added");
    };

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center">
                <Image
                    className="m-1.5"
                    draggable="false"
                    src="/svg/addQueue-white.svg"
                    alt="add-queue"
                    height={32}
                    width={32}
                />
                <h2 className="text-xl font-medium">Add Queue</h2>
            </div>

            <div className="flex items-center gap-3 w-fit bg-neutral-600 p-2 rounded">
                <Image
                    src="/svg/search-white.svg"
                    alt="search-icon"
                    height={24}
                    width={24}
                />
                <input
                    onChange={debounce(handleSearchInput, 1000)}
                    type="text"
                    placeholder="Search for songs"
                    className="text-white outline-none bg-transparent w-full"
                />
            </div>

            <div className="flex flex-col gap-1">
                {searchResult?.map((track: any) => (
                    <div
                        onClick={async () => {
                            await handleTrackClick(track.uri);
                        }}
                        key={track.id}
                        className="flex items-center gap-3 hover:bg-neutral-700 rounded p-1 cursor-pointer"
                    >
                        <Image
                            className="hover:bg-neutral-300 rounded"
                            draggable="false"
                            src={track.album.images[2].url}
                            alt="track-cover"
                            width={48}
                            height={48}
                        />

                        <Marquee text={track?.name} />
                    </div>
                ))}
            </div>

            <div>
                <h3 className="text-lg font-medium">Your playing song</h3>
                <div
                    onClick={async () => {
                        await handleTrackClick(sessionPLayback?.item?.uri);
                    }}
                    className="flex items-center gap-3 hover:bg-neutral-700 rounded p-1 cursor-pointer"
                >
                    <Image
                        className="rounded"
                        draggable="false"
                        src={sessionPLayback?.item?.album?.images[2].url}
                        alt="currently-playing-tack-cover"
                        height={64}
                        width={64}
                    />
                    <p>{sessionPLayback?.item?.name}</p>
                </div>
            </div>
        </div>
    );
};

export default AddQueue;
