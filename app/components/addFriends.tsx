"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AddFriends({ userID }: any) {
    let [shareUrl, setShareUrl]: any = useState();

    useEffect(() => {
        const url = window.location.origin + "/friend/" + userID;

        setShareUrl(url);
    }, [setShareUrl, userID]);

    return (
        <button
        className="flex items-center bg-white rounded-full p-2 gap-1.5 w-fit"
            onClick={() => {
                navigator.clipboard.writeText(shareUrl);
                toast.success("Share link copied")
            }}
        >
            <Image
                draggable="false"
                src="/svg/addFriends-black.svg"
                alt="share-icon"
                height={24}
                width={24}
            />
            <p className="text-black font-medium">Add Friends</p>
        </button>
    );
}
