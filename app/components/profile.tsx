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
        </div>
    );
};

export default Profile;
