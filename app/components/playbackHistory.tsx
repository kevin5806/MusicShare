import { getPlaybackHistory } from "../server/spotify";
import { ninja } from "../lib/fonts/fonts";
import Tooltip from "./lib/tooltip/toolTip";
import Song from "./lib/song/song";
import { formatTime } from "./lib/formatTime";

export default async function PlaybackHistory({ userID }: any) {
    const history: any = await getPlaybackHistory(userID, 50);

    const items = [...(history?.items ?? [])];

    for (let i = 0; i < items.length; i++) {
        if (items[i]?.track.id === items[i + 1]?.track.id) {
            items[i].replayed = items[i].replayed + 1 || 1 + 1;
            items.splice(i + 1, 1);
            i--;
        }
    }

    if (items.length === 0) {
        return (
            <p className="rounded-xl border border-white/10 bg-black/20 px-3 py-4 text-sm text-neutral-300">
                Nessuna traccia recente disponibile.
            </p>
        );
    }

    return (
        <div className="flex min-w-0 flex-col gap-3">
            {items?.map((e: any, index: any) => {
                return (
                    <div
                        key={index}
                        className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3"
                    >
                        <div className="mx-1">
                            <Tooltip text={formatTime(e?.played_at)}>
                                <div className="m-1 h-2 w-2 rounded-full bg-green-400"></div>
                            </Tooltip>
                        </div>

                        <Song
                            size={64}
                            background="bg-neutral-900/70"
                            padding={1}
                            title={e?.track.name}
                            artist={e?.track.artists}
                            src={e?.track.album.images[1].url}
                            href={e?.track.external_urls.spotify}
                        />

                        {e.replayed && (
                            <span className={`${ninja.className} pl-1`}>
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
