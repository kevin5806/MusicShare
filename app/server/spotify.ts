"use server";

import axios from "axios";
import { getToken } from "./data";

export const getListening = async (userID: string) => {
    const token = await getToken(userID);

    const listening = await axios.get("https://api.spotify.com/v1/me/player", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return listening.data;
};

export const getListeningHistory = async (userID: string, limit: number) => {
    const token = await getToken(userID);

    const listening = await axios.get(
        `https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return listening.data;
};
