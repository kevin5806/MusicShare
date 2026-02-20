import Link from "next/link";
import { getUser } from "../server/user/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function PersonalProfile({ userID }: any) {
    const user = await getUser(userID);
    const profileImageSrc =
        user?.spotifyUser?.images?.[0]?.url ?? "/svg/default-avatar.svg";
    const displayName = user?.spotifyUser?.display_name ?? "";
    const avatarFallback = displayName.trim().charAt(0).toUpperCase() || "?";

    return (
        <Link href={"/profile/" + userID}>
            <Avatar className="h-12 w-12 shrink-0 ring-2 ring-emerald-300/35 transition hover:ring-emerald-300/65">
                <AvatarImage
                    draggable="false"
                    src={profileImageSrc}
                    alt="profile-avatar"
                />
                <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
        </Link>
    );
}
