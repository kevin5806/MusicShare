"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = ({ spotify, size, quality }: any) => {
    const avatarSize = Number(size) || 48;
    const profileImageSrc =
        spotify?.images?.[quality]?.url ??
        spotify?.images?.[0]?.url ??
        "/svg/default-avatar.svg";
    const displayName = spotify?.display_name ?? "";
    const avatarFallback = displayName.trim().charAt(0).toUpperCase() || "?";

    return (
<<<<<<< Updated upstream
        <div className="flex items-center gap-3">
            <Avatar
                className="shrink-0"
                style={{ width: avatarSize, height: avatarSize }}
            >
                <AvatarImage
                    draggable="false"
                    src={profileImageSrc}
                    alt="profile-avatar"
                />
                <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
            <h3 className="font-medium">{spotify?.display_name}</h3>
=======
        <div className="flex min-w-0 items-center gap-3">
            <Avatar
                className="shrink-0 ring-2 ring-white/10 shadow-[0_0_0_1px_rgba(0,0,0,0.2)]"
                style={{ width: avatarSize, height: avatarSize }}
            >
                <AvatarImage
                    draggable="false"
                    src={profileImageSrc}
                    alt="profile-avatar"
                />
                <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
            <h3
                className="max-w-[220px] truncate text-sm font-medium tracking-wide text-neutral-100"
                title={displayName}
            >
                {displayName || "Unknown listener"}
            </h3>
>>>>>>> Stashed changes
        </div>
    );
};

export default Profile;
