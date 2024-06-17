"use client";

import { useEffect, useState } from "react";

export default function Share({ userID }: any) {
    let [shareUrl, setShareUrl]: any = useState();

    useEffect(() => {
        const url = window.location.origin + "/friend/" + userID;

        setShareUrl(url);
    }, [setShareUrl, userID]);

    return <p>Share URL: {shareUrl}</p>;
}
