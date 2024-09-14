"use client";

import Image from "next/image";

const Profile = ({ spotify, size, quality }: any) => {
    return (
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
        </div>
    );
};

export default Profile;
