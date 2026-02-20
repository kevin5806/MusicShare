"use client";

import Image from "next/image";

const Profile = ({ spotify, size, quality }: any) => {
    const profileImageSrc =
        spotify?.images?.[quality]?.url ??
        spotify?.images?.[0]?.url ??
        "/svg/default-avatar.svg";

    return (
        <div className="flex items-center gap-3">
            <Image
                className="rounded-full"
                draggable="false"
                src={profileImageSrc}
                alt="album-cover"
                height={size}
                width={size}
            />
            <h3 className="font-medium">{spotify?.display_name}</h3>
        </div>
    );
};

export default Profile;
