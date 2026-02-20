"use client";

import { useRouter } from "next/navigation";
import Profile from "../profile";
import Playback from "./playback";

const Card = ({ userID, user, listening, history }: any) => {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(`/profile/${userID}`)}
            className="group relative flex w-full max-w-[360px] cursor-pointer flex-col gap-y-4 rounded-2xl border border-white/10 bg-neutral-900/65 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300/45 hover:bg-neutral-900/90"
        >
            <span className="text-lg">
                <Profile spotify={user.spotifyUser} quality={1} size={64} />
            </span>
            <div>
                <Playback history={history} listening={listening} />
            </div>
        </div>
    );
};

export default Card;
