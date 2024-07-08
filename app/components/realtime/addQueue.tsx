"use client";

import { addQueue, getSearchTrack } from "@/app/server/spotify";
import debounce from "debounce";
import Image from "next/image";
import { useState } from "react";

/* All of the code in here is refered to the user visiting the page */

const AddQueue = ({ userID, sessionID, playBack }: any) => {
    const [searchResult, setSearchResult] = useState([]);

    const handleSearchInput = async (e: any) => {
        if (e.target.value === "") return setSearchResult([]);

        const tracks = await getSearchTrack(sessionID, e.target.value);

        return setSearchResult(tracks);
    };

    return (
        <div>
            {/* <div className="flex items-center gap-3">
                <Image
                    draggable="false"
                    src="/svg/queue-white.svg"
                    alt="add-song"
                    height={48}
                    width={48}
                />
                <p>Add Song</p>
            </div> */}

            <p>{playBack?.name}</p>

            <h2>Add</h2>

            <button>Exit</button>

            <div>
                <div className="flex w-fit bg-neutral-500 p-2 rounded">
                    <Image
                        src="/svg/search-white.svg"
                        alt="search-icon"
                        height={24}
                        width={24}
                    />
                    <input
                        onChange={debounce(handleSearchInput, 500)}
                        type="text"
                        placeholder="Search for songs"
                        className="text-black"
                    />
                </div>

                <div>
                    {searchResult?.map((track: any) => (
                        <div
                            onClick={async () => {
                                await addQueue(userID, track.uri);
                            }}
                            key={track.id}
                            className="flex items-center gap-3"
                        >
                            <Image
                                src={track.album.images[2].url}
                                alt="track-cover"
                                width={48}
                                height={48}
                            />
                            <p>{track.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <p>Currently playing song</p>
                <div
                    onClick={async () => {
                        await addQueue(userID, playBack.uri);
                    }}
                    className="flex items-center gap-3"
                >
                    <Image
                        draggable="false"
                        src={playBack?.album?.images[2].url}
                        alt="currently-playing-tack-cover"
                        height={64}
                        width={64}
                    />
                    <p>{playBack?.name}</p>
                </div>
            </div>
        </div>
    );
};

export default AddQueue;
