import Image from "next/image";
import AddQueue from "./addQueue";

const Queue = ({ queue, userID, sessionID, sessionPLayback }: any) => {
    return (
        <div>
            <div className="flex flex-col gap-1">
                {queue?.queue?.slice(0, 3).map((track: any) => (
                    <div key={track.id} className="flex items-center gap-3">
                        <Image
                            className="rounded"
                            draggable="false"
                            src={track.album.images[2].url}
                            alt="spotify-queue-album-cover"
                            height={48}
                            width={48}
                        />
                        <p>{track.name}</p>
                    </div>
                ))}
            </div>
            <AddQueue
                userID={userID}
                sessionID={sessionID}
                sessionPLayback={sessionPLayback}
            />
        </div>
    );
};

export default Queue;