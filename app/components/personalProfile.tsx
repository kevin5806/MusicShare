import Image from "next/image";
import Link from "next/link";
import { getUser } from "../server/user/user";

export default async function PersonalProfile({ userID }: any) {
    const user = await getUser(userID);

    return (
        <Link href={"/profile/" + userID}>
<<<<<<< Updated upstream
            <Image
                className="rounded-full"
                draggable="false"
                src={user?.spotifyUser.images[0].url}
                alt="spotify-currentlyPaying-song"
                height={48}
                width={48}
            />
=======
            <Avatar className="h-12 w-12 shrink-0 ring-2 ring-emerald-300/35 transition hover:ring-emerald-300/65">
                <AvatarImage
                    draggable="false"
                    src={profileImageSrc}
                    alt="profile-avatar"
                />
                <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
>>>>>>> Stashed changes
        </Link>
    );
}
