import PlaybackHistory from "@/app/components/playbackHistory";
import Realtime from "@/app/components/realtime/realtime";
import { getUser } from "@/app/server/data";
import { getSession } from "@/app/server/session";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { ninja, spray, rage } from "@/app/lib/fonts/fonts";

export default async function Page({ params }: any) {
    const session = await getSession();
    const user = await getUser(params.id);

    const profileID = user._id.toString();

    if (user.error) return redirect("/dashboard");

    return (
        <div className="m-5 flex flex-col gap-5">
            <Link href="/dashboard" className="flex gap-x-3 items-center">
                <Image
                    src="/svg/arrow-white.svg"
                    alt="back-arrow"
                    height={48}
                    width={48}
                />
                <h3 className="text-2xl font-semibold">Dashboard</h3>
            </Link>

            <div className="flex items-center gap-x-5 text-4xl font-semibold">
                <Image
                    draggable="false"
                    className="rounded-full"
                    src={user.spotifyUser.images[1].url}
                    alt="spotify-currentlyPaying-song"
                    height={128}
                    width={128}
                />
                <h1>{user.spotifyUser.display_name}</h1>
            </div>

            <span className={rage.className}>
                <h1 className="text-3xl">Realtime</h1>
            </span>

            <Realtime userID={profileID} sessionID={session.userID} />

            <span className={spray.className}>
                <h1 className="flex items-center h-15 mt-5 text-xl">HISTORY</h1>
            </span>

            <PlaybackHistory userID={profileID} />
        </div>
    );
}
