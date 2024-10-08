"use client";

import { useRouter } from "next/navigation";
import Profile from "../profile";
import Playback from "./playback";

const Card = ({ userID, user, listening, history }: any) => {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(`/profile/${userID}`)}
            className="flex flex-col gap-y-3 p-5 rounded w-fit bg-neutral-800 cursor-pointer"
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
