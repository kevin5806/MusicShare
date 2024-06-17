import ListeningHistory from "@/app/components/listeningHistory";
import ListeningRealtime from "@/app/components/listeningRealtime";
import { getUser } from "@/app/server/data";
import { getSession } from "@/app/server/session";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page({ params }: any) {
    const session = await getSession();
    const user = await getUser(params.id);
    if (user.error) return redirect("/dashboard");

    return (
        <div className="m-3">
            <Link href="/dashboard" className="flex gap-x-3 items-center">
                <Image
                    src="/svg/back.svg"
                    alt="back-arrow"
                    height={48}
                    width={48}
                />
                <h3 className="text-2xl font-semibold">Dashboard</h3>
            </Link>

            <div className="flex items-center gap-x-5 text-4xl font-semibold">
                <Image
                    className="rounded-full"
                    src={user.spotifyUser.images[1].url}
                    alt="spotify-currentlyPaying-song"
                    height={128}
                    width={128}
                />
                <h1>{user.spotifyUser.display_name}</h1>
            </div>
            <ListeningRealtime userID={params.id} />
            <ListeningHistory userID={params.id} />
        </div>
    );
}
