import PlaybackHistory from "@/app/components/playbackHistory";
import Realtime from "@/app/components/realtime/realtime";

import { getSession } from "@/app/server/session";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { spray, rage } from "@/app/lib/fonts/fonts";
import Profile from "@/app/components/profile";
import { getUser } from "@/app/server/user/user";

export default async function Page({ params }: any) {
    const session = await getSession();
    const user = await getUser(params.id);

    const profileID = user._id.toString();

    if (user.error) return redirect("/dashboard");

    return (
        <main className="p-5 flex flex-col gap-5">
            <Link href="/dashboard" className="flex gap-x-3 items-center">
                <Image
                    src="/svg/arrow-white.svg"
                    alt="back-arrow"
                    height={48}
                    width={48}
                />
                <h3 className="text-2xl font-semibold">Dashboard</h3>
            </Link>

            <span className="text-3xl">
                <Profile spotify={user.spotifyUser} size={128} quality={1} />
            </span>

            <span className={rage.className}>
                <h1 className="text-3xl">Realtime</h1>
            </span>

            <Realtime userID={profileID} sessionID={session.userID} />

            <span className={spray.className}>
                <h1 className="flex items-center h-15 mt-5 text-xl">HISTORY</h1>
            </span>

            <PlaybackHistory userID={profileID} />
        </main>
    );
}
