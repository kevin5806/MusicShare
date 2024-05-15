"use server";

import { connectDB } from "../modules/db/db";
import Friends from "../modules/db/models/friends";
import Users from "../modules/db/models/users";

export const getUser = async (userID: String) => {
    await connectDB();

    const user = Users.findById(userID);

    return user;
}

export const getFriends = async (userID: String) => {
    await connectDB();

    const friends = await Friends.find({userID});

    return friends;
}