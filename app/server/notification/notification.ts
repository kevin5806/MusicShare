"use server";

import { connectDB } from "@/app/lib/modules/db/db";
import Notifications from "@/app/lib/modules/db/models/notifications";

export const newNotification = async (
    userID: string,
    title: string,
    description: string
) => {
    await connectDB();

    await Notifications.create({
        userID,
        title,
        description,
    });

    return;
};

export const getNotifications = async (userID: string) => {
    await connectDB();

    const notifications: any = await Notifications.find({ userID });

    return notifications;
};
