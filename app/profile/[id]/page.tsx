import PlaybackHistory from "@/app/components/playbackHistory";
import Realtime from "@/app/components/realtime/realtime";
import Navbar from "@/app/components/lib/navbar/navbar";

import { getSession } from "@/app/server/session";
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
        <main className="min-h-screen pb-8">
            <Navbar userID={session.userID} />
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 p-4 sm:p-6">
                <section className="panel-glass rounded-3xl p-5 sm:p-6">
                    <span className="text-3xl">
                        <Profile
                            spotify={user.spotifyUser}
                            size={128}
                            quality={1}
                        />
                    </span>
                </section>

                <section className="panel-glass flex min-w-0 flex-col gap-4 rounded-3xl p-5 sm:p-6">
                    <span className={rage.className}>
                        <h1 className="text-3xl text-emerald-300/90">
                            Realtime
                        </h1>
                    </span>

                    <Realtime userID={profileID} sessionID={session.userID} />
                </section>

                <section className="panel-glass flex min-w-0 flex-col gap-4 overflow-hidden rounded-3xl p-5 sm:p-6">
                    <span className={spray.className}>
                        <h1 className="mt-1 text-3xl">HISTORY</h1>
                    </span>

                    <div className="min-w-0">
                        <PlaybackHistory userID={profileID} />
                    </div>
                </section>
            </div>
        </main>
    );
}
