import Image from "next/image";
import { getPlaybackHistory } from "../server/spotify";

export default async function ListeningHistory({ userID,  }: any) {
    const history: any = await getPlaybackHistory(userID, 50);

    return (
        <div>
            <p>History:</p>
            {history?.items?.map((e: any) => {
                const date = new Date(e.played_at);
                const readableDate = date.toLocaleString("it-IT", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                });

                return (
                    <span key={e}>
                        <Image
                            src={e.track.album.images[2].url}
                            alt="album-img"
                            height={64}
                            width={64}
                        />
                        <p>Name: {e.track.name}</p>
                        <p>Played: {readableDate}</p>
                    </span>
                );
            })}
        </div>
    );
}
