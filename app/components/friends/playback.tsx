"use client";

import Image from "next/image";
import Song from "../lib/song/song";
import "@/app/css/spotify.css";
const Playback = ({ listening, history }: any) => {
    return (
        <div className="flex flex-col gap-y-5">
            {listening && (
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

                    <Song
                        size={64}
                        title={listening?.item.name}
                        artist={listening?.item.artists}
                        src={listening?.item.album.images[2].url}
                        href={listening?.item.external_urls.spotify}
                    />
                </div>
            )}
            
            
            <div className="flex flex-col gap-y-3">
                {history?.items.map((e: any, index:any) => (
                    <div className="flex items-center gap-3" key={index}>
                        <Song
                            size={48}
                            title={e?.track.name}
                            artist={e?.track.artists}
                            src={e?.track.album.images[2].url}
                            href={e?.track.external_urls.spotify}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
 export default Playback;