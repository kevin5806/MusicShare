"use server";

import { connectDB } from "@/app/lib/modules/db/db";
import Users from "@/app/lib/modules/db/models/users";

export const getUsers = async (limit: number, page: number) => {
    await connectDB();

    const skip = limit * (page - 1);

    const users: any = Users.find().skip(skip).limit(limit);

    return users;
};

export const getUsersCount = async () => {
    await connectDB();

    const usersCount: any = Users.countDocuments();

    return usersCount;
};

export const getUser = async (userID: string) => {
    try {
        await connectDB();

        const user: any = await Users.findById(userID).lean().exec();

        user._id = user._id.toString();

        return user;
    } catch (error) {
        return { error };
    }
};
