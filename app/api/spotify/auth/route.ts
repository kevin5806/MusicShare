import { connectDB } from "@/app/lib/modules/db/db";
import AuthCodeRequests from "@/app/lib/modules/db/models/authCodeRequests";
import Tokens from "@/app/lib/modules/db/models/tokens";
import Users from "@/app/lib/modules/db/models/users";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { createSession } from "@/app/server/session";
import { registerEmail } from "@/app/lib/modules/email/models/register";

export const GET = async (req: NextRequest) => {
    /* connecting to db */
    await connectDB();

    /* extraction data from params */
    const code = req.nextUrl.searchParams.get("code");
    const state = req.nextUrl.searchParams.get("state");
    const error = req.nextUrl.searchParams.get("error");

    /* data cecks */
    if (error !== null) return NextResponse.json({ status: 500, data: error });

    if (code === null)
        return NextResponse.json({ status: 404, data: "missing code" });
    if (state === null)
        return NextResponse.json({ status: 404, data: "missing state" });

    if (!(await AuthCodeRequests.findOneAndDelete({ state })))
        return NextResponse.json({ status: 500, data: "no state found" });

    /* Spotify apis token request with authorization code */

    const token = await axios.post(
        "https://accounts.spotify.com/api/token",
        {
            grant_type: "authorization_code",
            code,
            redirect_uri: process.env.SPOTIFY_AUTH_REDIRECT_URL as string,
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

    const profile = await axios.get("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${token.data.access_token}` },
    });

    /* check error in api request */
    if (profile.data.error)
        return NextResponse.json({
            status: profile.data.error.status,
            data: profile.data.error.status.message,
        });

    /* DB */

    /* if user already registered */
    const dbUser = await Users.findOne({ spotifyID: profile.data.id });

    if (dbUser) {
        const userID = dbUser._id.toString();

        /* save new token */

        await Tokens.findOneAndDelete({ userID });
        await Tokens.create({ userID, token: token.data });

        /* log user in */
        await createSession(userID);

        return NextResponse.json(200);
    }

    /* register user */
    const newUser = await Users.create({
        spotifyID: profile.data.id,
        spotifyUser: profile.data,
    });

    const userID = newUser._id.toString();

    await Tokens.create({
        userID,
        token: token.data,
    });

    await registerEmail(profile.data.email);

    await createSession(userID);

    return NextResponse.json(200);
};
