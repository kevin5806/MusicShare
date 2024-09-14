"use server";

import { connectDB } from "@/app/lib/modules/db/db";
import { newNotification } from "../notification/notification";
import Friends from "@/app/lib/modules/db/models/friends";

export const newFriend = async (userID: string, friendID: string) => {
    await connectDB();

    //The one for himself
    await Friends.create({
        userID: userID.toString(),
        friendID: friendID.toString(),
        pending: true,
        owner: userID.toString(),
    });

    //The one for the friend
    await Friends.create({
        userID: friendID.toString(),
        friendID: userID.toString(),
        pending: true,
        owner: userID.toString(),
    });

    await newNotification(
        friendID.toString(),
        "Friend Request",
        "You got a new friend request"
    );

    return;
};

export const getFriends = async (userID: string) => {
    await connectDB();

    const friends = await Friends.find({ userID });

    return friends;
};

export const addFriend = async (userID: string, friendID: string) => {
    await connectDB();

    await Friends.updateOne({ userID, friendID }, { pending: false });
    await Friends.updateOne(
        { userID: friendID, friendID: userID },
        { pending: false }
    );

    return;
};
