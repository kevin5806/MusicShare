import Song from "../lib/song/song";

const Queue = ({ queue }: any) => {
    return (
        <div>
            <div className="flex flex-col gap-2">
                {queue?.queue?.slice(0, 3).map((track: any, index:any) => (
                    <div key={index} className="flex items-center gap-3">
                        <Song
                            size={48}
                            title={track?.name}
                            artist={track?.artists}
                            src={track?.album.images[2].url}
                            href={track?.external_urls.spotify}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Queue;
