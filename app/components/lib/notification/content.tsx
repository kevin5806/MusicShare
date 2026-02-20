"use client";
import { useEffect, useState } from "react";
import { formatTime } from "../formatTime";
import { getNotifications } from "@/app/server/notification/notification";

const Content = ({ userID }: any) => {
    const [notifications, setNotifications]: any = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const data = await getNotifications(userID);
            setNotifications(data);
        };

        fetch();
    }, [userID]);

    return (
        <div className="max-h-[340px] overflow-y-auto px-2 py-2">
            {notifications.length === 0 ? (
                <p className="rounded-xl border border-white/10 bg-black/25 px-3 py-4 text-center text-sm text-neutral-300">
                    No notifications yet
                </p>
            ) : (
                <ul className="flex flex-col gap-2">
                    {notifications.map((notification: any) => (
                        <li
                            key={notification._id}
                            className="rounded-xl border border-white/10 bg-white/5 p-3"
                        >
                            <div className="mb-1 flex items-start justify-between gap-3">
                                <p className="text-sm font-semibold text-neutral-100">
                                    {notification.title}
                                </p>
                                <span className="shrink-0 text-[11px] text-neutral-400">
                                    {formatTime(notification.createdAt)}
                                </span>
                            </div>
                            <p className="text-sm text-neutral-300">
                                {notification.description}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Content;
