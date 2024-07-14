import Image from "next/image";
import { getPlaybackHistory } from "../server/spotify";
import { ninja } from "../lib/fonts/fonts";
import Tooltip from "./lib/tooltips/toolTip";

const formatTime = (savedDate: any) => {
    const now: any = new Date();
    const saved: any = new Date(savedDate);
    const diffMs = now - saved;

    if (diffMs < 1000 * 60) {
        return `${Math.floor(diffMs / 1000)}s`;
    }
    if (diffMs < 1000 * 60 * 60) {
        return `${Math.floor(diffMs / (1000 * 60))}m`;
    }
    if (diffMs < 1000 * 60 * 60 * 24) {
        return saved.toTimeString().slice(0, 5);
    }
    if (diffMs < 1000 * 60 * 60 * 24 * 30) {
        return `${saved.toTimeString().slice(0, 5)}, ${saved.getDate()}/${
            saved.getMonth() + 1
        }`;
    }
    return `${saved.toTimeString().slice(0, 5)}, ${saved.getDate()}/${
        saved.getMonth() + 1
    }/${saved.getFullYear()}`;
};

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
                return (
                    <div key={e} className="flex items-center gap-4">
                        <div className="ml-3">
                            <Tooltip text={formatTime(e?.played_at)}>
                                <div className="bg-green-400 rounded-full w-1.5 h-1.5 m-1"></div>
                            </Tooltip>
                        </div>

                        <div className="w-fit p-2 flex items-center gap-3 bg-neutral-800 rounded">
                            <Image
                                quality={100}
                                draggable="false"
                                className="rounded"
                                src={e.track.album.images[1].url}
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
                                    <p className="text-2xl font-medium">
                                        {e.replayed}
                                    </p>
                                </span>
                            </span>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
