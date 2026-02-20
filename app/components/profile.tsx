"use client";

import Image from "next/image";

const Profile = ({ spotify, size, quality }: any) => {
    return (
<<<<<<< Updated upstream
        <div className="flex items-center gap-3">
            <Image
                className="rounded-full"
                draggable="false"
                src={spotify?.images[quality].url}
                alt="album-cover"
                height={size}
                width={size}
            />
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
