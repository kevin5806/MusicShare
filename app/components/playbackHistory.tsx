import { getPlaybackHistory } from "../server/spotify";
import { ninja } from "../lib/fonts/fonts";
import Tooltip from "./lib/tooltip/toolTip";
import Song from "./lib/song/song";
import { formatTime } from "./lib/formatTime";




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
            {items?.map((e: any, index:any) => {
                return (
                    <div key={index} className="flex items-center gap-4">
                        <div className="m-2">
                            <Tooltip text={formatTime(e?.played_at)}>
                                <div className="bg-green-400 rounded-full w-2 h-2 m-1"></div>
                            </Tooltip>
                        </div>

                        <Song
                            size={64}
                            background
                            padding={1}
                            title={e?.track.name}
                            artist={e?.track.artists}
                            src={e?.track.album.images[1].url}
                            href={e?.track.external_urls.spotify}
                        />

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
