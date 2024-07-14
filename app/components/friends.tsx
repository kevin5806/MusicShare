import Image from "next/image";
import { getFriends, getUser } from "../server/data";
import { getPlaybackState, getPlaybackHistory } from "../server/spotify";

import "@/app/css/spotify.css";
import Link from "next/link";

async function Preview({ userID }: any) {
    const listening: any = await getPlaybackState(userID);

    const history: any = await getPlaybackHistory(userID, 4);

    return (
        <>
            {listening ? (
                <div className="flex flex-col gap-y-5">
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

                        <Image
                            className="rounded"
                            src={listening.item.album.images[2].url}
                            alt="currentlyPaying-song"
                            height={64}
                            width={64}
                        />

                        <span>
                            <p className="font-semibold">
                                {listening.item.name}
                            </p>
                            <p className="text-neutral-400">
                                {listening?.item?.artists[0].name}
                            </p>
                        </span>
                    </div>

                    <div className="flex flex-col gap-y-3">
                        {history.items.map((e: any) => (
                            <div
                                className="flex items-center gap-x-5"
                                key={e.track.id}
                            >
                                <Image
                                    className="rounded"
                                    src={e.track.album.images[2].url}
                                    alt="album-img"
                                    height={48}
                                    width={48}
                                />
                                <span>
                                    <p className="font-semibold">
                                        {e.track.name}
                                    </p>
                                    <p className="text-neutral-400">
                                        {e.track.artists[0].name}
                                    </p>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-y-3">
                    {history.items.map((e: any) => (
                        <div
                            className="flex items-center gap-x-5"
                            key={e.track.id}
                        >
                            <Image
                                className="rounded"
                                src={e.track.album.images[2].url}
                                alt="album-img"
                                height={48}
                                width={48}
                            />
                            <span>
                                <p className="font-semibold">{e.track.name}</p>
                                <p className="text-neutral-400">
                                    {e.track.artists[0].name}
                                </p>
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

async function Friend({ userID }: any) {
    /* all user in here are refered to the friend */

    const user: any = await getUser(userID);

    const spotifyUser = user.spotifyUser;

    return (
        <div className="flex flex-col gap-y-3 p-5 rounded w-fit  bg-neutral-800">
            <div className="flex items-center gap-x-5">
                <Image
                    className="rounded-full"
                    draggable="false"
                    src={spotifyUser.images[0].url}
                    alt="spotify-currentlyPaying-song"
                    height={64}
                    width={64}
                />
                <h3 className="text-lg">{spotifyUser.display_name}</h3>
            </div>
            <div>
                <Preview userID={userID} />
            </div>
        </div>
    );
}

export default async function Friends({ userID }: any) {
    const friends: any = await getFriends(userID);

    return (
        <div className="m-5 flex">
            <div className="flex flex-wrap gap-3">
                {friends.map((e: any) => (
                    <Link href={"/profile/"+ e.friendID} key={e.friendID}>
                        <Friend userID={e.friendID} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
