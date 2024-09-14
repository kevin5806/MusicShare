"use server";

import axios from "axios";
import Tokens from "../lib/modules/db/models/tokens";
import { connectDB } from "../lib/modules/db/db";

export const getToken = async (userID: string) => {
    await connectDB();

    const savedToken = await Tokens.findOne({ userID });

    const timeCreation: Date = new Date(savedToken.createdAt);

    const timeNow: Date = new Date();

    const timePassed: number =
        (timeNow.getTime() - timeCreation.getTime()) / 1000;

    /* se il token non è scaduto */
    if (timePassed < savedToken.token.expires_in)
        return savedToken.token.access_token;

    const token = await axios.post(
        "https://accounts.spotify.com/api/token",
        {
            grant_type: "refresh_token",
            refresh_token: savedToken.token.refresh_token,
        },
        {
            auth: {
                username: process.env.SPOTIFY_CLIENT_ID as string,
                password: process.env.SPOTIFY_SECRET as string,
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );

    let newToken = token.data;

    newToken.refresh_token = savedToken.token.refresh_token;

    await Tokens.findOneAndReplace({ userID }, { userID, token: newToken });

    return token.data.access_token;
};
