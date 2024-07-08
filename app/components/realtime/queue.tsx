import Image from "next/image";
import AddQueue from "./addQueue";

const Queue = ({ queue }: any) => {
    return (
        <div>
            <div className="flex flex-col gap-2">
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

        </div>
    );
};

export default Queue;
