"use client";

import Image from "next/image";

const Profile = ({ spotify }: any) => {
    return (
        <div className="flex items-center gap-5">
            <Image
                className="rounded-full"
                draggable="false"
                src={spotify.images[0].url}
                alt="album-cover"
                height={64}
                width={64}
            />
            <h3 className="text-lg font-semibold">{spotify.display_name}</h3>
        </div>
    );
};

export default Profile;
