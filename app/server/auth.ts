"use server";

import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { connectDB } from "../lib/modules/db/db";
import AuthCodeRequests from "../lib/modules/db/models/authCodeRequests";
import { cookies } from "next/headers";
import Sessions from "../lib/modules/db/models/sessions";

export const auth = async () => {
    await connectDB();

    const cookie = cookies().get("session");

    if (cookie) {
        const session = await Sessions.findOne({ uuid: cookie.value });

        if (!session) {
            cookies().delete("session");
        } else {
            return redirect("/dashboard");
        }
    }

    const state: string = uuidv4();

    const params = {
        client_id: process.env.SPOTIFY_CLIENT_ID as string,
        response_type: "code",
        redirect_uri: process.env.SPOTIFY_AUTH_REDIRECT_URL as string,
        state,
        scope: "user-read-private user-read-email user-read-playback-state user-read-recently-played user-read-currently-playing user-modify-playback-state",
        show_dialog: false,
    };

    await AuthCodeRequests.create({
        state,
    });

    redirect(
        "https://accounts.spotify.com/authorize?" +
            `client_id=${params.client_id}` +
            `&response_type=${params.response_type}` +
            `&redirect_uri=${params.redirect_uri}` +
            `&state=${params.state}` +
            `&scope=${params.scope}` +
            `&show_dialog=${params.show_dialog}`
    );
};
