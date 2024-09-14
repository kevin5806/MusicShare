import Image from "next/image";
import Link from "next/link";
import { getUser } from "../server/user/user";

export default async function PersonalProfile({ userID }: any) {
    const user = await getUser(userID);

    return (
        <Link href={"/profile/" + userID}>
            <Image
                className="rounded-full"
                draggable="false"
                src={user?.spotifyUser.images[0].url}
                alt="spotify-currentlyPaying-song"
                height={48}
                width={48}
            />
        </Link>
    );
}
