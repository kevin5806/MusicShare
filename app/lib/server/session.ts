"use server";

import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";
import Sessions from "@/app/lib/modules/db/models/sessions";
import { redirect } from "next/navigation";
import Users from "../modules/db/models/users";
import { connectDB } from "../modules/db/db";

export const createSession = async (userID: String) => {
    await connectDB();

    const uuid = uuidv4() + uuidv4() + uuidv4() + uuidv4();

    await Sessions.create({ userID, uuid });

    cookies().set("session", uuid, {
        path: "/",
        expires: Date.now() + 90 * 24 * 60 * 60 * 1000, // 3 mesi in ms
        httpOnly: true,
        secure: true,
        sameSite: "strict",
    });

    return redirect("/dashboard");
};

export const getSession = async () => {
    await connectDB();

    const cookie = cookies().get("session");

    if (!cookie) return redirect("/");

    const session = await Sessions.findOne({ uuid: cookie.value });

    if (!session) return redirect("/");

    return session;
};
