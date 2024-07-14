import Image from "next/image";
import { getPlaybackHistory } from "../server/spotify";
import { ninja } from "../lib/fonts/fonts";

export default async function PlaybackHistory({ userID }: any) {
    const history: any = await getPlaybackHistory(userID, 50);

    let items = history?.items;

    for (let i = 0; i < items.length; i++) {
        if (items[i]?.track.id === items[i + 1]?.track.id) {
            items[i].replayed = items[i].replayed + 1 || 1 + 1;
            items.splice(i + 1, 1);
            i--;
        }
    }

    return (
        <div className="flex flex-col gap-3">
            {items?.map((e: any) => {
                const date = new Date(e.played_at);
                const readableDate = date.toLocaleString("it-IT", {
                    hour: "2-digit",
                    minute: "2-digit",
                    day: "2-digit",
                    month: "numeric",
                });

                return (
                    <div key={e} className="flex items-center gap-3">
                        <p>{readableDate}</p>
                        <div className="w-fit p-2 flex items-center gap-3 bg-neutral-800 rounded">
                            <Image
                            draggable="false"
                            className="rounded"
                                src={e.track.album.images[2].url}
                                alt="album-img"
                                height={64}
                                width={64}
                            />
                            <p>{e.track.name}</p>
                        </div>

                        {e.replayed && (
                            <span className={ninja.className}>
                                <span className="flex items-baseline">
                                    <p>x</p>
                                    <p className="text-2xl font-medium">{e.replayed}</p>
                                </span>
                            </span>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
